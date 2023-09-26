const User = require("../models/user.model.js");
const PaidInvoice = require("../models/paidinvoice.model.js");
var async = require("async");
const http = require('http');
const fetch = require('node-fetch');
const stripe = require("stripe")('sk_test_51L2GBFAM6Vg8cV3xhGR16NYGjuar5jtfmH34IKazMhuFPXP6t88Kuz7sVXhPNzlCbOPtIsvncmnKgWRQuQnyClgD00kBOsblZ3');

exports.usersGetAll = async (req, res) => {
  res.json({success: 'user succeed'})
}

exports.userSignIn = async (userBody) => {
  async.waterfall(
    [
      function (callback) {
        User.findByPhoneOrEmail(userBody, (err, user) => {
          callback(err, user);
        });
      },
      function (user, callback) {
        if(!user) {
          User.create(userBody, (err, newUser) => {
            callback(err, newUser);
          })
        } else {
          callback(null, user);
        }
      },
    ],
    function (err, result) {
      if (err) {
        return { message: "Something went wrong, please try again." };
      } else {
        return result;
      }
    }
  );
}

exports.getUserById = async (req, res) => {
  User.findById(req.session.getUserId(), (err, user) => {
    if (err) {
      return res.status(400).json({ message: "Something went wrong, please try again." });
    } else {
      res.json(user);
    }
  });
}

exports.getUserByPhoneOrEmail = async (userBody) => {
  const res = await User.findByPhoneOrEmailSync(userBody);
  return res;
}

exports.updateUser = async (req, res) => {
  User.updateById(req.session.getUserId(), req.body, (err, user) => {
    if (err) {
      return res.status(400).json({ message: "Something went wrong, please try again." });
    } else {
      res.json(user);
    }
  })
}

exports.getPurchaseHistory = async (req, res) => {
  const user_id = req.session.getUserId();
  // const user_id = 'd5c4929e-ea53-4867-b1de-0c3714ca3bc4'
  User.getPurchaseHistory(user_id, (userErr, result) => {
    if (userErr) {
      res.status(400).json({ message: "Something went wrong, please try again." });
    } else {
      res.json({data: result});
    }
  })
}

exports.getAdmissionHistory = async (req, res) => {
  const user_id = req.session.getUserId();
  User.getAdmissionHistory(user_id, (userErr, result) => {
    if (userErr) {
      res.status(400).json({ message: "Something went wrong, please try again." });
    } else {
      res.json({data: result});
    }
  })
}

exports.topUpBalance = async (req, res) => {
  const hash = req.body.hash;
  const amount = req.body.amount;
  const options = {
    hostname: 'lightning.playfullscreen.a2hosted.com',
    path: '/lookup?payment_hash='+hash,
  };
  let data = '';

  const request = http.get(options, (response) => {
    // Set the encoding, so we don't get log to the console a bunch of gibberish binary data
    response.setEncoding('utf8');

    // As data starts streaming in, add each chunk to "data"
    response.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    response.on('end', () => {
      const result = JSON.parse(data).body.state;
      if(result != "SETTLED") {
        res.status(400).json({message: "Invoice is not paid yet."})
      } else {
        PaidInvoice.getByHash(hash, (err, invoice) => {
          if (err) {
            console.log(err)
            if(err.kind == "not_found") {
              PaidInvoice.create({invoice_hash: hash}, (invoiceErr, newInvoice) => {
                if(invoiceErr) {
                  res.status(400).json({ message: "Something went wrong, please try again." });
                } else {
                  User.updateBalanceById(req.session.getUserId(), amount, (userErr, user) => {
                    if (userErr) {
                      res.status(400).json({ message: "Something went wrong, please try again." });
                    } else {
                      res.json({success: true});
                    }
                  })
                }
              })
            } else {
              res.status(400).json({ message: "Something went wrong, please try again." });
            }
          } else {
            res.status(400).json({message: "Invoice is old."})
          }
        })
      }
      
    });
  });

  // Log errors if any occur
  request.on('error', (error) => {
    console.error(error);
  });

  // End the request
  request.end();
}

exports.getStripeSession = async (req, res) => {
  const {p_id, type, b_id} = req.body;
  let amount = parseInt(Math.ceil(req.body.amount*100));
  (async () => {
      const session = await stripe.checkout.sessions.create({
          line_items: [{
              'price_data': {
                  currency: 'CAD',
                  product_data: {
                      name: "PPV",
                  },
                  unit_amount: amount,
              },
              quantity: 1,
          }],
          mode: 'payment',
          metadata:  {
              "p_id": p_id,
              "type": type,
              "b_id": b_id
          },
          success_url:"https://api.playfullscreen.a2hosted.com/success?session_id={CHECKOUT_SESSION_ID}",
          cancel_url: "https://api.playfullscreen.a2hosted.com/cancel"
      });
      res.send({session_id: session.id})
  })();
}

exports.saveCheckoutDetail = async (req, res) => {
  const {session_id} = req.body;
  const user_id = req.session.getUserId();
  try {
    const session = await stripe.checkout.sessions.retrieve(session_id);
    const metadata = session.metadata;

    User.purchase(user_id, metadata, (userErr, result) => {
      if (userErr) {
        res.status(400).json({ message: "Something went wrong, please try again." });
      } else {
        res.json({success: 'success', type: metadata.type});
      }
    })
  } catch (err) {
    console.error(err);
    throw new Error('Error retrieving session metadata');
  }
}

exports.createInvoice = async (req, res) => {
  const user_id = req.session.getUserId();
  const token = process.env.COINOS_TOKEN;

  const broadcaster_id = req.body.b_id;
  const package_id = req.body.p_id;
  const type = req.body.type;

  const amount = parseInt(req.body.amount, 10);
  const secret = user_id+"||"+broadcaster_id+"||"+package_id+"||"+type+"||"+Date.now();

  console.log(secret);
  const data = {
    invoice: {
      amount,
      type: 'lightning',
      webhook: 'https://api.playfullscreen.a2hosted.com/users/lightning/paid',
      secret
    }
  };
  
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(data)
  };
  
  fetch('https://coinos.io/api/invoice', options)
    .then(response => response.json())
    .then(data => {
      User.saveInvoice(user_id, data.hash, (userErr, result) => {
        if (userErr) {
          res.status(400).json({ message: "Something error occured to save Coinos data." });
        } else {
          res.send(data);
        }
      })
    })
    .catch(error => console.error(error));
}

exports.coinosLogin = async (req, res) => {
  const user_id = req.session.getUserId();
  
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: req.body.name,
      password: req.body.password
    })
  };

  fetch('https://coinos.io/api/login', options)
    .then(response => response.json())
    .then(data => {
      if (data.token) {
        User.saveCoinosUser(user_id, data.user.username, (userErr, result) => {
          if (userErr) {
            res.status(400).json({ message: "Something error occured to save Coinos data." });
          } else {
            res.json({success: 'success', data});
          }
        })
      } else {
        res.send({fail: 'no user'});
      }
      
    })
    .catch(error => console.error(error));
}

exports.coinosPay = async (req, res) => {
  const user_id = req.session.getUserId();
  
  const metadata = {
    p_id:req.body.p_id,
    b_id:req.body.b_id,
    type:req.body.type,
    lightning: true,
    sats: req.body.satsAmount
  }

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `Bearer ${req.body.cointoken}`
    },
    body: JSON.stringify({
      "invoice": {
        "amount": req.body.satsAmount,
        "type": "lightning"
      },
      "user": {
        "username": process.env.COIN_NAME || 'Reverendhodl'
      }
    })
  };

  fetch('https://coinos.io/api/invoice', options)
    .then(response => response.json())  
    .then(response => {
      if(response.status == 500) {
        res.send({fail: 'no users'});
      } else {
        if (response.hash) {
          const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              "Authorization": `Bearer ${req.body.cointoken}`
            },
            body: JSON.stringify({
              "amount": req.body.satsAmount,
              "hash": response.hash
            })
          };

          fetch('https://coinos.io/api/payments', options)
            .then(resp => resp.json())
            .then(resp => {
              if(resp.confirmed) {
                User.purchase(user_id, metadata, (userErr, result) => {
                  if (userErr) {
                    res.status(400).json({ message: "Something went wrong, please try again." });
                  } else {
                    res.json({success: 'success', type: metadata.type});
                  }
                })
              } else {
                res.send({fail: 'insufficiant'});
              }
            });
        } else {
          res.send({fail: 'no response.hash'});
        }
      }
    })
    .catch(error => console.error(error));
}

exports.getExchangeRates = async (req, res) => {
  fetch("https://api.coinbase.com/v2/exchange-rates?currency=BTC")
  .then(resp => resp.json())
  .then(resp => {
    res.send({rate: resp.data.rates.CAD});
  })
}

exports.coinosPaid = async (req, res) => {
  const {secret, received, hash} = req.body;

  const data = secret.split("||");
  const metadata = {
    p_id:data[2],
    b_id:data[1],
    type:data[3],
    lightning: true,
    sats: received
  };
  console.log(metadata);

  User.purchase(data[0], metadata, (userErr, result) => {
    if (userErr) {
      res.status(400).json({ message: "Something went wrong, please try again." });
    } else {
      User.updateInvoice(data[0], hash, (userErr, result) => {
        if (userErr) {
          res.status(400).json({ message: "Something went wrong, please try again..." });
        } else {
          res.send({paid: true, type: metadata.type});
        }
      });
    }
  })
}

exports.coinosCheckInvoice = async (req, res) => {
  const user_id = req.session.getUserId();
  const {hash} = req.body;

  User.coinosCheckInvoice(user_id, hash, (userErr, result) => {
    if (userErr) {
      res.send({paid: false});
    } else {
      if (result.paid) {
        res.send({paid: true});
      }
      else {
        res.send({paid: false});
      }
    }
  })
}
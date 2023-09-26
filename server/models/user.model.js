const moment = require('moment');
// constructor
const sql = require("./db.js");
const User = function (user) {
  this.name = user.name;
  this.email = user.email;
  this.email_verified_at = user.email_verified_at;
  this.password = user.password;
  this.phone = user.phone;
  this.avatar = user.avatar;
  this.team_id = user.team_id;
  this.group_id = user.group_id;
  this.role = user.role;
  this.pf_balance = user.pf_balance;
  this.created_at = user.created_at;
  this.updated_at = user.updated_at;
};

User.create = (newUser, result) => {
  sql.query("INSERT INTO users SET ?", newUser, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created user: ", { id: res.insertId, ...newUser });
    result(null, { id: res.insertId, ...newUser });
  });
};

User.findById = (id, result) => {
  sql.query(`SELECT id, name, email, phone, avatar, team_id, group_id, role, pf_balance FROM users WHERE sp_user_id = '${id}'`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found user: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found User with the id
    result({ kind: "not_found" }, null);
  });
};

User.findByPhoneOrEmail = ({ phone, email }, result) => {
    sql.query(`SELECT id, name, email, phone, avatar, team_id, group_id, role, pf_balance FROM users WHERE phone = '${phone}' or email = '${email}'`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
    
        if (res.length) {
            console.log("found user: ", res[0]);
            result(null, res[0]);
            return;
        }
    
        // not found User with the phone
        result(null, null);
    });
};

User.findByPhoneOrEmailSync = ({ phoneNumber, email }) => {
    return new Promise((resolve, reject) => {
        sql.query(`SELECT id, name, email, phone, avatar, team_id, group_id, role, pf_balance FROM users WHERE phone = '${phoneNumber}' or email = '${email}'`, (err, res) => {
            if (err) {
                console.log("error: ", err);
                reject(err);
                return;
            }
        
            if (res.length) {
                console.log("found user: ", res[0]);
                resolve(res[0]);
                return;
            }
        
            // not found User with the phone
            resolve({});
        });
    });
};

User.findByEmail = (email, result) => {
    sql.query(`SELECT id, name, email, phone, avatar, team_id, group_id, role, pf_balance FROM users WHERE email = '${email}'`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
    
        if (res.length) {
            console.log("found user: ", res[0]);
            result(null, res[0]);
            return;
        }
    
        // not found User with the email
        result({ kind: "not_found" }, null);
    });
};

User.getAll = (result) => {
  let query = "SELECT * FROM users";

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("users: ", res);
    result(null, res);
  });
};

User.updateById = (id, user, result) => {
  console.log(user)
  const keys = Object.keys(user);
  const values = Object.values(user);
  console.log(keys, values)
  sql.query(
    "UPDATE users SET " + keys.join(" = ?, ") + " = ? WHERE sp_user_id = ?",
    [...values, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found User with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated user: ", { id: id, ...user });
      result(null, { id: id, ...user });
    }
  );
};

User.updateBalanceById = (id, balance, result) => {
  sql.query(
    "UPDATE users SET pf_balance = pf_balance + ? WHERE sp_user_id = ?",
    [balance, id],
    (err, res) => {
      if (err) {
        console.log("update balance by id error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found User with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated user: ", { id: id });
      result(null, { id: id});
    }
  );
};

User.purchaseVideoState = (sp_user_id, data, result) => {
  const { id, type } = data;
  sql.query(
    `SELECT B.broadcaster_id, B.package_id, B.id, A.name, B.uses FROM videos A, purchase B WHERE A.broadcaster_id=B.broadcaster_id AND B.archive AND A.hlsurl='${id}' AND B.sp_user_id='${sp_user_id}' AND B.expiry_date > NOW() ORDER BY id DESC LIMIT 1;`,
        (err, res) => {
        if (err) {
          console.log("update balance by id error: ", err);
          result(null, err);
          return;
        }

        if (res.length) {
          sql.getConnection((err, conn) => {
            if (err) {
              throw err;
            }

            conn.query(`SELECT * FROM admission_history WHERE user_id='${sp_user_id}' AND hlsurl='${id}' AND created_at >= DATE_SUB(NOW(), INTERVAL 2 DAY)`, (error, adminssion_history) => {
              conn.release();
              if (adminssion_history.length) {
                result(null, true);
              } else {
                if (res[0].uses > 0) {
                  console.log('uses more than 1')
                  sql.getConnection((error, connection) => {
                    if (error) {
                      throw error;
                    }
                    
                    connection.query(`UPDATE purchase SET uses=uses-1 WHERE id=${res[0].id}`, (error, datas) => {
                      if (error) {
                        throw error;
                      }
                      connection.release();
        
                      sql.getConnection((error, conn) => {
                        if (error) {
                          throw error;
                        }
                        conn.query(`INSERT INTO admission_history(user_id, broadcaster_id, broadcast_id, purchase_id, archive, video_name, hlsurl, remain_uses, created_at) 
                            VALUES ('${sp_user_id}', ${res[0].broadcaster_id}, 0, ${res[0].id}, 1, '${res[0].name}', '${id}', ${res[0].uses -1}, NOW())`,
                         (error, dt) => {
                          if (error) {
                            throw error;
                          }
                          conn.release();
                          result(null, true);
                        });                
                      });
                    });
                  });
                }
                else {
                  console.log('uses equal 0')
                  result('not purchase', null);
                }
              }
            })

          });
          
        } else {
          console.log("not purchased: ", res);
          result('not purchase', null);
        }
        
    }
  );
}

User.purchaseLiveState = (sp_user_id, v_id, type, result) => {
  sql.query(
    `SELECT purchase.id, purchase.broadcaster_id, purchase.broadcast_id, broadcasts.name, purchase.uses FROM purchase LEFT JOIN broadcasts ON purchase.broadcast_id=broadcasts.id WHERE sp_user_id='${sp_user_id}' AND NOT broadcast_id=0 AND uses>0 AND purchase.expiry_date>NOW() LIMIT 1`,
        (err, res) => {
        if (err) {
          console.log("update balance by id error: ", err);
          result(err, null);
          return;
        }

        if (res.length) {
          sql.getConnection((error, connection) => {
            if (error) {
              throw error;
            }
            connection.query(`UPDATE purchase SET uses=uses-1 WHERE id=${res[0].id}`, (error, datas) => {
              if (error) {
                throw error;
              }
              connection.release();
              sql.getConnection((error, conn) => {
                if (error) {
                  throw error;
                }
                conn.query(`INSERT INTO admission_history(user_id, broadcaster_id, broadcast_id, purchase_id, archive, video_name, remain_uses, created_at) 
                    VALUES ('${sp_user_id}', ${res[0].broadcaster_id}, ${res[0].broadcast_id}, ${res[0].id}, 0, '${res[0].name}', ${res[0].uses -1}, NOW())`,
                 (error, dt) => {
                  if (error) {
                    throw error;
                  }
                  conn.release();
                  result(null, true);
                });                
              });
            });
          });
        } else {
          console.log("not purchased: ", res);
          result('not purchase', null);
        }
    }
  );
}

User.getPurchaseHistory = (sp_user_id, result) => {
  sql.query(
    `SELECT broadcasters.name as bname, packages.name as pname, purchase.expiry_date, purchase.price, purchase.lightning FROM purchase 
    LEFT JOIN broadcasters ON purchase.broadcaster_id = broadcasters.id LEFT JOIN packages ON purchase.package_id=packages.id WHERE sp_user_id='${sp_user_id}'`,
    (err, res) => {
      if (err) {
        console.log("get purchase history error: ", err);
        result(err, null);
        return;
      }

      if (res.length) {
        result(null, res);
        return;
      } else {
        console.log("no purchase history: ", res);
        result('not purchase', null);
      }
    }
  );
}

User.getAdmissionHistory = (sp_user_id, result) => {
  sql.query(
    `SELECT broadcasters.name as bname, admission_history.video_name, admission_history.archive, admission_history.remain_uses, admission_history.created_at  FROM admission_history LEFT JOIN broadcasters ON admission_history.broadcaster_id=broadcasters.id WHERE user_id='${sp_user_id}'`,
    (err, res) => {
      if (err) {
        console.log("get purchase history error: ", err);
        result(err, null);
        return;
      }

      if (res.length) {
        result(null, res);
        return;
      } else {
        console.log("no purchase history: ", res);
        result('not purchase', null);
      }
    }
  );
}

User.purchase = (u_id, metadata, result) => {
  sql.query(
    `SELECT broadcaster_id, broadcast_id, expiry_date, price, uses_left FROM packages WHERE id='${metadata.p_id}'`,
      (err, res) => {
        if (err) {
          console.log("update balance by id error: ", err);
          result(null, err);
          return;
        }

        if (res.length) {
          sql.getConnection((error, connection) => {
            if (error) {
              throw error;
            }
            
            const pk = res[0];
            const exp_date = new Date(pk.expiry_date);
            const formattedDatetime = moment(exp_date).format('YYYY-MM-DD HH:mm:ss');
            console.log(formattedDatetime)
            
            connection.query(`INSERT INTO purchase (sp_user_id, broadcaster_id, broadcast_id, package_id, uses, live, archive, unlimited, price, tax, lightning, created_at, expiry_date) VALUES 
              ('${u_id}', ${pk.broadcaster_id}, ${metadata.type=='live'?metadata.b_id:0}, ${metadata.p_id}, ${pk.uses_left}, ${metadata.type=='live'? 1: 0}, ${metadata.type=='archive'? 1: 0}, '', ${metadata.lightning? metadata.sats:pk.price}, ${metadata.lightning? 0: 0.5}, ${metadata.lightning? 1: 0}, NOW(), '${formattedDatetime}')`, (error, datas) => {
              if (error) {
                throw error;
              }
              connection.release();
              result(null, true);
            });
          });
          return;
          
        } else {
          console.log("not purchased: ", res);
          result('not purchase', null);
        }
        
    }
  );
}

User.saveCoinosUser = (u_id, co_name, result) => {
  sql.query(
    `UPDATE users SET co_name='${co_name}' WHERE sp_user_id = '${u_id}'`,
      (err, res) => {
        if (err) {
          console.log("update balance by id error: ", err);
          result(null, err);
          return;
        }
  
        if (res.affectedRows == 0) {
          result({ kind: "not_found" }, null);
          return;
        }
  
        console.log("updated user: ", { id: u_id });
        result(null, { id: u_id});
    }
  );
}

User.saveInvoice = (u_id, hash, result) => {
  sql.query(
    `INSERT INTO paid_invoices(invoice_hash, user_id, created_at) VALUES ('${hash}', '${u_id}', NOW());`,
      (err, res) => {
        if (err) {
          console.log("update balance by id error: ", err);
          result(null, err);
          return;
        }
  
        if (res.affectedRows == 0) {
          result({ kind: "not_found" }, null);
          return;
        }
  
        result(null, { id: u_id});
    }
  );
}

User.updateInvoice = (u_id, hash, result) => {
  sql.query(
    `UPDATE paid_invoices SET paid=1 WHERE user_id='${u_id}' AND invoice_hash='${hash}';`,
      (err, res) => {
        if (err) {
          console.log("update balance by id error: ", err);
          result(null, err);
          return;
        }
  
        if (res.affectedRows == 0) {
          result({ kind: "not_found" }, null);
          return;
        }
  
        result(null, { id: u_id});
    }
  );
}

User.coinosCheckInvoice = (u_id, hash, result) => {
  sql.query(
    `SELECT paid FROM paid_invoices WHERE user_id='${u_id}' AND invoice_hash='${hash}';`,
      (err, res) => {
        if (err) {
          console.log("update balance by id error: ", err);
          result(null, err);
          return;
        }
  
        if (res.length) {
          result(null, { paid: res[0].paid});
        } else {
          result(res, null);
        }
    }
  );
}

module.exports = User;

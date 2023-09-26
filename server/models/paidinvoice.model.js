// constructor
const sql = require("./db.js");
const PaidInvoice = function (paidInvoice) {
  this.invoice_hash = paidInvoice.invoice_hash;
};

PaidInvoice.create = (newInvoice, result) => {
    sql.query("INSERT INTO paid_invoices SET ?", newInvoice, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("created invoice: ", { id: res.insertId, ...newInvoice });
      result(null, { id: res.insertId, ...newInvoice });
    });
};

PaidInvoice.getByHash = (hash, result) => {
    sql.query(`SELECT * FROM paid_invoices WHERE invoice_hash = '${hash}'`, (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }
    
        if (res.length) {
          console.log("found invoice: ", res[0]);
          result(null, res[0]);
          return;
        }
    
        // not found User with the id
        result({ kind: "not_found" }, null);
    });
};

module.exports = PaidInvoice;
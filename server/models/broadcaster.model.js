// constructor
const sql = require("./db.js");
const Broadcaster = function (broadcaster) {
  this.name = broadcaster.name;
  this.description = broadcaster.description;
  this.publish_point = broadcaster.publish_point;  
  this.logo_id = broadcaster.logo_id;
  this.status = broadcaster.status;
  this.timezone = broadcaster.timezone;
  this.stream_id = broadcaster.stream_id;
  this.stream_key = broadcaster.stream_key;
};

Broadcaster.create = (newBroadcaster, result) => {
  sql.query("INSERT INTO broadcasters SET ?", newBroadcaster, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created broadcaster: ", { id: res.insertId, ...newBroadcaster });
    result(null, { id: res.insertId, ...newBroadcaster });
  });
};

Broadcaster.findById = (id, result) => {
  sql.query(`SELECT * FROM broadcasters WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      result(null, res[0]);
      return;
    }

    // not found Broadcaster with the id
    result({ kind: "not_found" }, null);
  });
};

Broadcaster.findByPublishPoint = (publish_point, result) => {
  sql.query('SELECT * FROM `broadcasters` WHERE `publish_point` = "' + publish_point + '"', (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      result(null, res[0]);
      return;
    }

    // not found Broadcaster with the id
    result({ kind: "not_found" }, null);
  });
};

Broadcaster.findLive = (result) => {
  sql.query(`SELECT id, name, description, logo_id, stream_id FROM broadcasters WHERE stream_key != ''`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("broadcasters: ", res);
    result(null, res);
  });
};

Broadcaster.getAll = (result) => {
  let query = "SELECT * FROM broadcasters";

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("broadcasters: ", res);
    result(null, res);
  });
};

Broadcaster.updateById = (id, broadcaster, result) => {
  const keys = broadcaster.keys();
  sql.query(
    "UPDATE broadcasters SET " + keys.join(" = ?, ") + " = ? WHERE id = ?",
    [...broadcaster, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      
      if (res.affectedRows == 0) {
        // not found Broadcaster with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated broadcaster: ", { id: id, ...broadcaster });
      result(null, { id: id, ...broadcaster });
    }
  );
};

Broadcaster.getPackages = (id, type, result) => {
  if (type == 'archive') {
    sql.query(
      `SELECT broadcasters.package_archive_ids as package_ids FROM videos LEFT JOIN broadcasters ON videos.broadcaster_id=broadcasters.id WHERE videos.hlsurl='${id}'`,
      async(err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
  
        if (res.length) {
          sql.getConnection((error, connection) => {
            if (error) {
              throw error;
            }
        
            connection.query(`SELECT * FROM packages WHERE id IN (${res[0].package_ids}) AND WHERE expiry_date > NOW() ORDER BY price`, (error, datas) => {
              if (error) {
                throw error;
              }
              connection.release();
              result(null, datas);
            });
          });
          return;
        }
        result({ kind: "not_found" }, null);
      }
    );
  } else {
    sql.query(
      `SELECT broadcasters.package_live_ids as package_ids FROM broadcasts LEFT JOIN broadcasters ON broadcasts.broadcaster_id=broadcasters.id WHERE broadcasts.id='${id}'`,
      async(err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
  
        if (res.length) {
          sql.getConnection((error, connection) => {
            if (error) {
              throw error;
            }
        
            connection.query(`SELECT * FROM packages WHERE id IN (${res[0].package_ids}) ORDER BY price`, (error, datas) => {
              if (error) {
                throw error;
              }
              connection.release();
              result(null, datas);
            });
          });
          return;
        }
        result({ kind: "not_found" }, null);
      }
    );
  }
};

module.exports = Broadcaster;
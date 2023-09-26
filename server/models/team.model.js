// constructor
const sql = require("./db.js");
const Team = function (team) {
  this.name = team.name;
  this.logo = team.logo;
  this.alt_name = team.alt_name;
  this.publish_point = team.publish_point;
  this.stream_key = team.stream_key;
  this.stream_id = team.stream_id;
  this.broadcaster_id = team.broadcaster_id;
  this.timezone = team.timezone;
};

Team.create = (newTeam, result) => {
  sql.query("INSERT INTO teams SET ?", newTeam, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created team: ", { id: res.insertId, ...newTeam });
    result(null, { id: res.insertId, ...newTeam });
  });
};

Team.findById = (id, result) => {
  sql.query(`SELECT id, name, logo, alt_name, stream_id, broadcaster_id FROM teams WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found team: ", res[0]);
      result(null, res[0]);
      return;
    }
    // not found Team with the id
    result({ kind: "not_found" }, null);
  });
};

Team.findByPublishPoint = (publish_point, result) => {
  sql.query('SELECT * FROM `teams` WHERE `publish_point` = "' + publish_point + '"', (err, res) => {
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

Team.findLive = (result) => {
  sql.query(
    `SELECT id, name, logo, alt_name, stream_id FROM teams WHERE stream_key != ''`,
    (err, res) => {
      if (err) {
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};

Team.getAll = (result) => {
  let query = "SELECT * FROM teams";

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("teams: ", res);
    result(null, res);
  });
};

Team.updateById = (id, team, result) => {
  const keys = team.keys();
  sql.query(
    "UPDATE teams SET " + keys.join(" = ?, ") + " = ? WHERE id = ?",
    [...team, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Team with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated team: ", { id: id, ...team });
      result(null, { id: id, ...team });
    }
  );
};

module.exports = Team;

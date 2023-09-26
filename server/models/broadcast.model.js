// constructor
const sql = require("./db.js");
const Broadcast = function (broadcast) {
  this.name = broadcast.name;
  this.description = broadcast.description;
  this.broadcaster_id = broadcast.broadcaster_id;
  this.player_msg = broadcast.player_msg;
  this.home_id = broadcast.home_id;
  this.away_id = broadcast.away_id;
  this.location_id = broadcast.location_id;
  this.logo_id = broadcast.logo_id;
  this.redirect = broadcast.redirect;
  this.live = broadcast.live;
  this.public = broadcast.public;
  this.chat = broadcast.chat;
  this.stream_key = broadcast.stream_key;
  this.stream_id = broadcast.stream_id;
  this.available = broadcast.available;
  this.hidden = broadcast.hidden;
  this.cost = broadcast.cost;
  this.start_date = broadcast.start_date;
  this.expiry_date = broadcast.expiry_date;
  this.channel_name = broadcast.channel_name;
  this.package_id = broadcast.package_id;
};

Broadcast.create = (newBroadcast, result) => {
  sql.query("INSERT INTO broadcasts SET ?", newBroadcast, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created broadcast: ", { id: res.insertId, ...newBroadcast });
    result(null, { id: res.insertId, ...newBroadcast });
  });
};

Broadcast.findById = (id, result) => {
  sql.query(
    `SELECT id, name, description, logo_id, stream_id, broadcaster_id, thumb1, thumb2, thumb3, thumb4 FROM broadcasts WHERE id = ${id}`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      if (res.length) {
        console.log("found broadcast: ", res[0]);
        result(null, res[0]);
        return;
      }

      // not found Broadcast with the id
      result({ kind: "not_found" }, null);
    }
  );
};

Broadcast.getAll = (result) => {
  let query = "SELECT * FROM broadcasts";

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("broadcasts: ", res);
    result(null, res);
  });
};

Broadcast.findLive = (result) => {
  let date = new Date();
  const start = date.getTime();
  let datetime = start + 30 * 60 * 1000;

  let query =
    "SELECT id, name, description, logo_id, stream_id, thumb1, thumb2, thumb3, thumb4 FROM broadcasts WHERE start_date <= '" +
    datetime +
    "' AND expiry_date >= '" +
    start +
    "'";

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("broadcasts: ", res);
    result(null, res);
  });
};

Broadcast.findLiveByTeam = (team_id, result) => {
  let date = new Date();
  const start = date.getTime();
  let datetime = start + 30 * 60 * 1000;

  let query =
    "SELECT id, name, description, logo_id, stream_id, thumb1, thumb2, thumb3, thumb4 FROM broadcasts WHERE (start_date <= '" +
    datetime +
    "' AND expiry_date >= '" +
    start +
    "'" +
    ") AND (home_id = " +
    team_id +
    " OR away_id = " +
    team_id +
    ")";

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("broadcasts: ", res);
    result(null, res);
  });
};

Broadcast.findLiveByBroadcaster = (broadcaster_id, result) => {
  let date = new Date();
  const start = date.getTime();
  let datetime = start + 30 * 60 * 1000;

  let query =
    "SELECT id, name, description, logo_id, stream_id, thumb1, thumb2, thumb3, thumb4 FROM broadcasts WHERE start_date <= '" +
    datetime +
    "' AND expiry_date >= '" +
    start +
    "'" +
    " AND broadcaster_id = " +
    broadcaster_id;

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("broadcasts: ", res);
    result(null, res);
  });
};

Broadcast.findUpcoming = (result) => {
  let datetime = new Date().getTime();
  let query =
    "SELECT id, name, description, logo_id, start_date, expiry_date, stream_id, thumb1, thumb2, thumb3, thumb4, stream_key AS embedUrl FROM broadcasts WHERE start_date > '" +
    datetime +
    "'";

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("broadcasts: ", res);
    result(null, res);
  });
};

Broadcast.findUpcomingByBroadcaster = (broadcaster_id, result) => {
  let datetime = new Date().getTime();
  let query =
    "SELECT id, name, description, logo_id, start_date, expiry_date, stream_id, thumb1, thumb2, thumb3, thumb4, stream_key AS embedUrl FROM broadcasts WHERE start_date > '" +
    datetime +
    "'" +
    " AND broadcaster_id = " +
    broadcaster_id;
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("broadcasts: ", res);
    result(null, res);
  });
};

Broadcast.findUpcomingByTeam = (team_id, result) => {
  let datetime = new Date().getTime();
  let query =
    "SELECT id, name, description, logo_id, start_date, expiry_date, stream_id, thumb1, thumb2, thumb3, thumb4, stream_key AS embedUrl FROM broadcasts WHERE (start_date > '" +
    datetime +
    "')" +
    " AND (home_id = " +
    team_id +
    " OR away_id = " +
    team_id +
    ")";
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("broadcasts: ", res);
    result(null, res);
  });
};

Broadcast.updateById = (id, broadcast, result) => {
  const keys = broadcast.keys();
  sql.query(
    "UPDATE broadcasts SET " + keys.join(" = ?, ") + " = ? WHERE id = ?",
    [...broadcast, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Broadcast with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated broadcast: ", { id: id, ...broadcast });
      result(null, { id: id, ...broadcast });
    }
  );
};

module.exports = Broadcast;

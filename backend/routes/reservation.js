let express = require('express');
let router = express.Router();
let mysql = require('mysql');
let http = require('http');
let bodyParser = require('body-parser');
let jsonParser = bodyParser.json();

/* A CHANGER */
let db_config = {
  host: 'localhost',
  user: 'root',
  password: 'Passw0rd!',
  database: 'js_cinema'
};

let connection;

function handleDisconnect() {
  connection = mysql.createConnection(db_config); // Recreate the connection, since
                                                  // the old one cannot be reused.

  connection.connect(function(err) {              // The server is either down
    if(err) {                                     // or restarting (takes a while sometimes).
      console.log('error when connecting to db:', err);
      setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
    }                                     // to avoid a hot loop, and to allow our node script to
  });                                     // process asynchronous requests in the meantime.
                                          // If you're also serving http, display a 503 error.
  connection.on('error', function(err) {
    console.log('db error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
      handleDisconnect();                         // lost due to either server restart, or a
    } else {                                      // connnection idle timeout (the wait_timeout
      throw err;                                  // server variable configures this)
    }
  });
}

handleDisconnect();

/**
 * Get all reservations with movie, seance, room information.
 */
router.get('/', function(req, res, next) {

  let queryString = 'SELECT r.id, s.id AS seance_id, s.date AS date, s.time_start AS time_start, s.time_end AS time_end, room.numero AS room, m.name AS movie_name, m.realisator AS movie_realisator \ '
    + 'FROM reservation AS r \ '
    + 'INNER JOIN seance AS s ON r.seance_id = s.id \ '
    + 'INNER JOIN room AS room ON s.room_id = room.id \ '
    + 'INNER JOIN movie AS m ON s.movie_id = m.id';

  connection.query(queryString, function(err, rows, fields) {
    if (!err) {
      res.status(200)
        .json(rows)
        .end();
      //res.status(200).send(JSON.stringify({rows: rows}));
    }
    else {
      res.status(400).send(JSON.stringify({message: err}));
      console.log("Error while performing query" + err);
    }
  });
});

router.get('/id/:id', function(req, res, next) {
  res.setHeader("Content-Type", "application/json");

  let param = [req.params.id];
  let queryString = 'SELECT * FROM reservation WHERE id = ?';

  connection.query(queryString, param, function(err, rows, fields) {
    if (!err) {
      res.status(200)
        .json(rows[0])
        .end();
    }
    else {
      res.status(400).send(JSON.stringify({message: err}));
      console.log("Error while performing query" + err);
    }
  });
});

/**
 * Get reservations from a given user id, with movie and seance information
 */
router.get('/user/:id', function(req, res, next) {
  res.setHeader("Content-Type", "application/json");

  let param = [req.params.id];

  let queryString =
    'SELECT r.id, s.id AS seance_id, s.date AS seance_date, s.time_start AS seance_time_start, s.time_end AS seance_time_end, room.numero AS room, m.name AS movie_name, m.realisator AS movie_realisator \ '
  + 'FROM reservation AS r \ '
  + 'INNER JOIN seance AS s ON r.seance_id = s.id \ '
  + 'INNER JOIN room AS room ON s.room_id = room.id \ '
  + 'INNER JOIN movie AS m ON s.movie_id = m.id \ '
  + 'WHERE r.user_id = ?';

  connection.query(queryString, param, function(err, rows, fields) {
    if (!err) {
      res.status(200);
      res.json(rows);
      res.end();
    }
    else {
      res.status(400).send(JSON.stringify({message: err}));
      console.log("Error while performing query" + err);
    }
  });
});

/**
 * Get reservations from a given date (date of the seance), with movie and seance information
 */
router.get('/date/:date', function(req, res, next) {
  res.setHeader("Content-Type", "application/json");

  let param = [req.params.date];

  let queryString =
    'SELECT r.id, s.id AS seance_id, s.date AS date, s.time_start AS time_start, s.time_end AS time_end, room.numero AS room, m.name AS movie_name, m.realisator AS movie_realisator \ '
    + 'FROM reservation AS r \ '
    + 'INNER JOIN seance AS s ON r.seance_id = s.id \ '
    + 'INNER JOIN room AS room ON s.room_id = room.id \ '
    + 'INNER JOIN movie AS m ON s.movie_id = m.id \ '
    + 'WHERE s.date = ?';

  connection.query(queryString, param, function(err, rows, fields) {
    if (!err) {
      res.status(200);
      res.json(rows);
      res.end();
    }
    else {
      res.status(400).send(JSON.stringify({message: err}));
      console.log("Error while performing query" + err);
    }
  });
});


// Add a reservation
router.post('/', jsonParser, function (req, res) {
  console.log('req', req.body);

  let reservation = req.body;
  let fields = ["user_id", "seance_id"];

  if (reservation === undefined)
    return res.status(409).send("ERROR: Undefined.");
  for (let i in fields) {
    let field = fields[i];
    if (reservation[field] === undefined || reservation[field] === '') {
      console.log("ERROR: Empty or invalid field(s) : " + field);
      return res.status(409).send("ERROR: Empty or invalid field(s) : " + field);
    }
  }

  let param = [reservation.user_id, reservation.seance_id];
  let queryString = 'INSERT INTO reservation SET user_id = ?, seance_id = ?';

  connection.query(queryString, param, function(err, rows, fields)
  {
    if (!err) {
      return res.status(201).send(JSON.stringify({message: "Reservation added"}));
    }
    else {
      console.log("Erreur: " + err);
      return res.status(409).send(JSON.stringify({message: err}));
    }
  });
});

/* UPDATE reservation data by id */
router.put('/id/:id', function(req, res) {
  res.setHeader("Content-Type", "application/json");

  let reservation = req.body;

  let param = [reservation.room_id, reservation.movie_id, reservation.places_available, reservation.datetime, reservation.language_version, req.params.id];
  let queryString = 'UPDATE reservation SET user_id = ?, seance_id = ? WHERE id = ?';

  /* Dans l'application, remplir déjà les champs avec les données de la reservation */
  connection.query(queryString, param, function(err, rows, fields) {
    if (!err) {
      res.status(200).send(JSON.stringify({message: "Reservation updated"}));
    }
    else {
      res.status(400).send(JSON.stringify({message: err}));
    }
  });
});


/**
 * Delete a reservation from id
 */
router.delete('/id/:id', function(req, res, next) {
  res.setHeader("Content-Type", "application/json");

  let param = [req.params.id];
  let queryString = 'DELETE FROM reservation WHERE id = ?';
  connection.query(queryString, param, function(err, rows, fields) {
    if (!err) {
      return res.status(201).send(JSON.stringify({message: "Reservation deleted"}));
    }
    else {
      res.status(400).send(JSON.stringify({message: err}));
      console.log("Error while performing query" + err);
    }
  });
});

module.exports = router;

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

router.get('/', function(req, res, next) {

  let queryString = 'SELECT * FROM seance';

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

/**
 * Get all seances of a movie (from a given date)
 */
router.get('/movie/:movie_id/date/:date', function(req, res, next) {

  let queryString = 'SELECT * FROM seance WHERE movie_id = ? AND date = ?';
  let param = [req.params.movie_id, req.params.date];

  connection.query(queryString, param, function(err, rows, fields) {
    if (!err) {
      console.log("[SUCCESS] Get movie for ", req.params.movie_id, "at date ", req.params.date, ": ", rows)
      res.status(200)
        .json(rows)
        .end();
    }
    else {
      res.status(400).send(JSON.stringify({message: err}));
      console.log("Error while performing query" + err);
    }
  });
});

/**
 * Get all seances from a given date
 */
router.get('/date/:date', function(req, res, next) {

  let queryString = 'SELECT * FROM seance WHERE date = ?';
  let param = [req.params.date];

  connection.query(queryString, param, function(err, rows, fields) {
    if (!err) {
      res.status(200)
        .json(rows)
        .end();
    }
    else {
      res.status(400).send(JSON.stringify({message: err}));
      console.log("Error while performing query" + err);
    }
  });
});

/**
 * Get a seances from its id
 */
router.get('/id/:id', function(req, res, next) {
  res.setHeader("Content-Type", "application/json");

  let param = [req.params.id];
  let queryString = 'SELECT * FROM seance WHERE id = ?';

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

router.get('/fullinfo/id/:id', function(req, res) {
  res.setHeader("Content-Type", "application/json");

  let params = [req.params.id];
  let queryString =
    'SELECT s.id, s.date, s.time_start, s.places_available, s.time_end, m.name AS movie_name, m.realisator AS movie_realisator, r.numero AS room \ '
  + 'FROM seance AS s \ '
  + 'INNER JOIN movie AS m ON s.movie_id = m.id \ '
  + 'INNER JOIN room AS r ON s.room_id = r.id \ '
  + 'WHERE s.id = ?';

  connection.query(queryString, params, function(err, rows) {
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

router.get('/canBook/id/:id', function(req, res) {
  res.setHeader("Content-Type", "application/json");

  let params = [req.params.id];
  let queryString =
    'SELECT s.date FROM seance AS s WHERE s.id = ?';

  connection.query(queryString, params, function(err, rows) {
    if (!err) {

      const today = new Date();

      if (rows[0].date > today){
        res.status(200);
      }
      else {
        res.status(400);
      }

      res.end();
    }
    else {
      res.status(400).send(JSON.stringify({message: err}));
      console.log("Error while performing query" + err);
    }
  });
});

// Add a seance

router.post('/', jsonParser, function (req, res) {
  console.log('req', req.body);

  let seance = req.body;
  let fields = ["room_id", "movie_id", "places_available", "date", "time_start", "time_end"];

  if (seance === undefined)
    return res.status(409).send("ERROR: Undefined.");
  for (let i in fields) {
    let field = fields[i];
    if (seance[field] === undefined || seance[field] === '') {
      console.log("ERROR: Empty or invalid field(s) : " + field);
      return res.status(409).send("ERROR: Empty or invalid field(s) : " + field);
    }
  }

  let param = [seance.room_id, seance.movie_id, seance.places_available, seance.date, seance.time_start, seance.time_end];
  let queryString = 'INSERT INTO seance SET room_id = ?, movie_id = ?, places_available = ?, date = ?, time_start = ?, time_end = ?';

  connection.query(queryString, param, function(err, rows, fields)
  {
    if (!err) {
      return res.status(201).send(JSON.stringify({message: "Seance added"}));
    }
    else {
      console.log("Erreur: " + err);
      return res.status(409).send(JSON.stringify({message: err}));
    }
  });
});

/* UPDATE seance data by id */
router.put('/id/:id', function(req, res) {
  res.setHeader("Content-Type", "application/json");

  let seance = req.body;

  let param = [seance.room_id, seance.movie_id, seance.places_available, seance.time_start, seance.time_end, req.params.id];

  let queryString = 'UPDATE seance SET room_id = ?, movie_id = ?, places_available = ?, date = ?, time_start = ?, time_end = ? WHERE id = ?';

  /* Dans l'application, remplir déjà les champs avec les données de la seance */
  connection.query(queryString, param, function(err, rows, fields) {
    if (!err) {
      res.status(200).send(JSON.stringify({message: "Seance updated"}));
    }
    else {
      res.status(400).send(JSON.stringify({message: err}));
    }
  });
});

router.get('/id/:id/increment', function(req, res) {
  res.setHeader("Content-Type", "application/json");

  let param = [req.params.id];

  let queryString = 'UPDATE seance SET places_available = places_available + 1 WHERE id = ?';

  connection.query(queryString, param, function(err, rows, fields) {
    if (!err) {
      res.status(200).send(JSON.stringify({message: "Seance updated"}));
    }
    else {
      res.status(400).send(JSON.stringify({message: err}));
    }
  });
});

router.get('/id/:id/decrement', function(req, res) {
  res.setHeader("Content-Type", "application/json");

  let param = [req.params.id];

  let queryString = 'UPDATE seance SET places_available = places_available - 1 WHERE id = ?';

  connection.query(queryString, param, function(err, rows, fields) {
    if (!err) {
      res.status(200).send(JSON.stringify({message: "Seance updated"}));
    }
    else {
      res.status(400).send(JSON.stringify({message: err}));
    }
  });
});

/**
 * Get seances from a given user id (The seances on which the user took reservations)
 */
router.get('/user/:id', function(req, res, next) {
  res.setHeader("Content-Type", "application/json");

  let param = [req.params.id];
  let queryString =
    'SELECT distinct s.id, room.numero AS room, s.movie_id, s.date, s.time_start, s.time_end \ '
    + 'FROM seance AS s \ '
    + 'INNER JOIN room as room ON room.id = s.room_id \ '
    + 'INNER JOIN reservation as r ON r.seance_id = s.id \ '
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
 * Get seances from a given user id (The seances on which the user took reservations)
 */
router.get('/from/range/:id', function(req, res, next) {
  res.setHeader("Content-Type", "application/json");

  let param = [req.params.id];
  let queryString =
    'SELECT distinct s.id, room.numero AS room, s.movie_id, s.date, s.time_start, s.time_end \ '
    + 'FROM seance AS s \ '
    + 'INNER JOIN room as room ON room.id = s.room_id \ '
    + 'INNER JOIN reservation as r ON r.seance_id = s.id \ '
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
 * Delete a seance from id
 */
router.delete('/id/:id', function(req, res, next) {
  res.setHeader("Content-Type", "application/json");

  let param = [req.params.id];
  let queryString = 'DELETE FROM seance WHERE id = ?';
  connection.query(queryString, param, function(err, rows, fields) {
    if (!err) {
      return res.status(201).send(JSON.stringify({message: "Seance deleted"}));
    }
    else {
      res.status(400).send(JSON.stringify({message: err}));
      console.log("Error while performing query" + err);
    }
  });
});

module.exports = router;

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

router.get('/id/:id', function(req, res, next) {
  res.setHeader("Content-Type", "application/json");

  let param = [req.params.id];
  let queryString = 'SELECT * FROM seance WHERE id = ?';

  connection.query(queryString, param, function(err, rows, fields) {
    if (!err) {
      res.status(200).send(JSON.stringify({rows: rows}));
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
  let fields = ["room_id", "movie_id", "places_available", "date", "time"];

  if (seance === undefined)
    return res.status(409).send("ERROR: Undefined.");
  for (let i in fields) {
    let field = fields[i];
    if (seance[field] === undefined || seance[field] === '') {
      console.log("ERROR: Empty or invalid field(s) : " + field);
      return res.status(409).send("ERROR: Empty or invalid field(s) : " + field);
    }
  }

  let param = [seance.room_id, seance.movie_id, seance.places_available, seance.date, seance.time];
  let queryString = 'UPDATE seance SET room_id = ?, movie_id = ?, places_available = ?, date = ?, time = ?';

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

  let param = [seance.room_id, seance.movie_id, seance.places_available, seance.datetime, req.params.id];
  let queryString = 'UPDATE seance SET room_id = ?, movie_id = ?, places_available = ?, date = ?, time = ? WHERE id = ?';

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



module.exports = router;

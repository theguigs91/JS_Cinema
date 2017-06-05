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
    password: 'password',
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
    res.setHeader("Content-Type", "application/json");

    let queryString = 'SELECT * FROM movie';

    connection.query(queryString, function(err, rows, fields) {
        if (!err) {
            res.status(200).send(JSON.stringify({rows: rows}));
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
    let queryString = 'SELECT * FROM movie WHERE id = ?';

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

router.get('/name/:name', function(req, res, next) {
    res.setHeader("Content-Type", "application/json");

    let name = '%' + req.params.name + '%';

    let param = [name];
    let queryString = 'SELECT * FROM movie WHERE name LIKE ?';

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



// Add a movie

router.post('/', jsonParser, function (req, res) {
  console.log('req', req.body);

  let movie = req.body;
  let fields = ["name", "realisator", "date", "time", "genre", "description"];

  if (movie === undefined)
    return res.status(409).send("ERROR: Undefined.");
  for (let i in fields) {
    let field = fields[i];
    if (movie[field] === undefined || movie[field] === '') {
      console.log("ERROR: Empty or invalid field(s) : " + field);
      return res.status(409).send("ERROR: Empty or invalid field(s) : " + field);
    }
  }


  let param = [movie.name, movie.realisator, movie.time, movie.genre, movie.description, movie.date];
  let queryString = 'INSERT INTO movie SET name = ?, realisator = ?, time = ?, genre = ?, description = ?, date = ?';

  connection.query(queryString, param, function(err, rows, fields)
  {
    if (!err) {
      return res.status(201).send(JSON.stringify({message: "Movie added"}));
    }
    else {
      console.log("Erreur: " + err);
      return res.status(409).send(JSON.stringify({message: err}));
    }
  });
});

/* UPDATE movie data by id */
router.put('/id/:id', function(req, res) {
    res.setHeader("Content-Type", "application/json");

    let body = req.body;

    let name  = body.name;
    let realisator = body.realisator;
    let time = body.time;
    let genre = body.genre;
    let description = body.description;

    let param = [name, realisator, time, genre, description, req.params.id];
    let queryString = 'UPDATE user SET name = ?, realisator = ?, time = ?, genre = ?, description = ? WHERE id = ?';

  /* Dans l'application, remplir déjà les champs avec les données du user */
    connection.query(queryString, param, function(err, rows, fields) {
        if (!err) {
            res.status(200).send(JSON.stringify({message: "User updated"}));
        }
        else {
            res.status(400).send(JSON.stringify({message: err}));
        }
    });

});



module.exports = router;

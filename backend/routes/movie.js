var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var http = require('http');

/* A CHANGER */
var db_config = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'js_cinema'
};

var connection;

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

    var queryString = 'SELECT * FROM movie';

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

    var param = [req.params.id];
    var queryString = 'SELECT * FROM movie WHERE id = ?';

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

    var name = '%' + req.params.name + '%';

    var param = [name];
    var queryString = 'SELECT * FROM movie WHERE name LIKE ?';

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

/* UPDATE user data by id */
router.put('/id/:id', function(req, res) {
    res.setHeader("Content-Type", "application/json");

    var body = req.body;

    var name  = body.name;
    var realisator = body.realisator;
    var time = body.time;
    var genre = body.genre;
    var description = body.description;

    var param = [name, realisator, time, genre, description, req.params.id]
    var queryString = 'UPDATE user SET name = ?, realisator = ?, time = ?, genre = ?, description = ? WHERE id = ?';

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

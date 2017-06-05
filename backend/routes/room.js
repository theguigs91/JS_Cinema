let express = require('express');
let router = express.Router();
let mysql =require('mysql');
let http = require('http');

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

/* GET all Room */
router.get('/', function(req, res, next) {
	res.setHeader("Content-Type", "application/json");

  let queryString = 'SELECT * FROM room';

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

/* GET a Room by id */
router.get('/id/:id', function(req, res, next) {
	res.setHeader("Content-Type", "application/json");
	
	let param = [req.params.id];
	let queryString = 'SELECT * FROM room WHERE id = ?';

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

module.exports = router;

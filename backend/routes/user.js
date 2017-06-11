let express = require('express');
let router = express.Router();
let mysql = require('mysql');
let md5 = require('md5');


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
      throw err;                                  // server letiable configures this)
    }
  });
}

handleDisconnect();

/* GET all user */
router.get('/', function(req, res, next) {
	res.setHeader("Content-Type", "application/json");
	
	let queryString = 'SELECT * FROM user';
	
  connection.query(queryString, function (err, rows, fields) {
        if(!err) {
          res.status(200);
          res.json(rows);
          res.end();
        }
        else {
          res.status(400).send(JSON.stringify({message: err}));
        }
    });
});

/* GET a user by id */
router.get('/id/:id', function(req, res, next) {
	res.setHeader("Content-Type", "application/json");
	
	let param = [req.params.id];
	let queryString = 'SELECT * FROM user WHERE id = ?';
	
  connection.query(queryString, param, function (err, rows, fields) {
        if(!err) {
          res.status(200);
          res.json(rows);
          res.end();
        }
        else {
          res.status(400).send(JSON.stringify({message: err}));
        }
    });
});

/* GET a user by login */
router.get('/login/:login', function(req, res, next) {
	res.setHeader("Content-Type", "application/json");
	
	let params = [req.params.login];
	let queryString = 'SELECT * FROM user WHERE login = ?';
	
  connection.query(queryString, params, function (err, rows, fields) {
        if(!err) {
          res.status(200);
          res.json(rows[0]);
          res.end();
        }
        else {
          res.status(400).send(JSON.stringify({message: err}));
        }
    });
});

/**
 * Get the logged user if the login and password are correct.
 */
router.post('/authentification', function(req, res) {
  res.setHeader("Content-Type", "application/json");

  let user = req.body;
  let params = [user.login, md5(user.password)];
  let queryString =
    'SELECT u.id, u.login, u.email, u.lastname, u.firstname, u.birthdate, u.gender, r.name AS role_name \ '
  + 'FROM user AS u \ '
  + 'INNER JOIN role AS r ON u.role_id = r.id \ '
  + 'WHERE login = ? AND password = ?';

  connection.query(queryString, params, function (err, rows, fields) {
    if(!err) {
      res.status(200);
      res.json(rows[0]);
      res.end();
    }
    else {
      res.status(400).send(JSON.stringify({message: err}));
      console.log("Erreur: " + err);
    }
  });
});


/* ADD a user */
router.post('/', function(req, res) {
	res.setHeader("Content-Type", "application/json");
	
  let body = req.body;
  let password = md5(body.password);

  let params = [body.login, body.email, password, body.lastname, body.firstname, body.birthdate, body.gender];
  let queryString = 'INSERT INTO user SET login = ?, email = ?, password = ?, lastname = ?, firstname = ?, birthdate = ?, gender = ?';


  connection.query(queryString, params, function(err, rows, fields)
  {
    if (!err) {
      res.status(201).send(JSON.stringify({message: "User added"}));      
    }
    else {
      res.status(409).send(JSON.stringify({message: err}));
      console.log("Erreur: " + err);
    }
  });
});

/* UPDATE user data by id */
router.put('/id/:id', function(req, res) {
	res.setHeader("Content-Type", "application/json");
	
  let body = req.body;
  let password = md5(body.password);

  let params = [body.login, body.email, password, body.lastname, body.firstname, body.birthdate, body.gender, req.params.id];
  let queryString = 'UPDATE user SET login = ?, email = ?, password = ?, lastname = ?, firstname = ?, birthdate = ?, gender = ? WHERE id = ?';


  /* Dans l'application, remplir déjà les champs avec les données du user */ 
  connection.query(queryString, params, function(err, rows, fields) {
     if (!err) {
       res.status(200).send(JSON.stringify({message: "User updated"}));
     }
     else {
       res.status(400).send(JSON.stringify({message: err}));
    }
  });

});

/* UPDATE user data by login */
router.put('/login/:login', function(req, res) {
	res.setHeader("Content-Type", "application/json");
	
  let body = req.body;
  let password = md5(body.password);

  let params = [body.login, body.email, password, body.lastname, body.firstname, body.birthdate, body.gender, body.params.login];
  let queryString = 'INSERT INTO user SET login = ?, email = ?, password = ?, lastname = ?, firstname = ?, birthdate = ?, gender = ?  WHERE login = ?';

  /* Dans l'application, remplir déjà les champs avec les données du user */ 
  connection.query(queryString, params, function(err, rows, fields) {
     if (!err) {
       res.status(200).send(JSON.stringify({message: "User updated"}));
     }
     else {
       res.status(400).send(JSON.stringify({message: err}));
     }
  });

});

/* DELETE a user by id */
router.delete('/id/:id', function(req, res) {
	res.setHeader("Content-Type", "application/json");
	
	let param = [req.params.id];
	let queryString = 'DELETE FROM user WHERE id = ?';

  connection.query(queryString, param,
    function(err, rows, fields) {
      if (!err) {
        res.status(200).send(JSON.stringify({ message: "User deleted"}));
      }
      else {
        res.status(400).send(JSON.stringify({message: err}));
      }
  });
});

/**
 * Update an user
 */
router.put('/', function(req, res) {
  res.setHeader("Content-Type", "application/json");

  let body = req.body;
  let password = md5(body.password);
  console.log("user.put ", body);

  let params = [body.login, body.email, password, body.lastname, body.firstname, body.birthdate, body.gender, body.login];
  let queryString = 'UPDATE user SET login = ?, email = ?, password = ?, lastname = ?, firstname = ?, birthdate = ?, gender = ? WHERE login = ?';

  connection.query(queryString, params, function(err, rows, fields) {
    if (!err) {
      res.status(200).send(JSON.stringify({message: "User updated"}));
    }
    else {
      res.status(400).send(JSON.stringify({message: err}));
    }
  });

});

/* DELETE a user by login */
router.delete('/login/:login', function(req, res) {
	res.setHeader("Content-Type", "application/json");
	
	let param = [req.params.login];
	let queryString = 'DELETE FROM user WHERE login = ?';

  connection.query(queryString, param,
    function(err, rows, fields) {
      if (!err) {
        res.status(200).send(JSON.stringify({ message: "User deleted"}));
      }
      else {
        res.status(400).send(JSON.stringify({message: err}));
      }
  });
});




module.exports = router;

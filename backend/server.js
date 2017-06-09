var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');

// Add headers
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:9090');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

// Rajouter tous les routes
const reservation = require('./routes/reservation');
const movie = require('./routes/movie');
const user = require('./routes/user');
const room = require('./routes/room');
const seance = require('./routes/seance');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/reservation', reservation);
app.use('/movie', movie);
app.use('/user', user);
app.use('/room', room);
app.use('/seance', seance);

app.listen(8080);
console.log("Server connected");
module.exports = app;

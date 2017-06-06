var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');

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

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');

// Rajouter tous les routes
const cinema = require('./routes/cinema');
const movie = require('./routes/movie');
const user = require('./routes/user');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/cinema', cinema);
app.use('/movie', movie);
app.use('/user', user);

app.listen(8080);
console.log("Server connected");
module.exports = app;

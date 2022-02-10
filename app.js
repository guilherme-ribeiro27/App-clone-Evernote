var express = require('express');
var path = require('path');
require('./config/database')
var cors = require('cors')

var usersRouter = require('./app/routes/users');
var notesRouter = require('./app/routes/notes')

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({
    origin: '*'
}));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});

app.use('/users', usersRouter);
app.use('/notes',notesRouter)


module.exports = app;

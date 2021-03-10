const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


app.use('/', (req, res) => {
    res.render('Hello from Hell!');
});
app.use('/home', (req, res) => {
    res.render('Welcome!');
});
app.use('/applications', (req, res) => {
    res.render('These are your applications!');
});
app.use('/careerPath', (req, res) => {
    res.render('This is your career progress!');
});

module.exports = app;

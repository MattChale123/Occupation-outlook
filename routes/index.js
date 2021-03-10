const { rejects } = require('assert');
const { response } = require('express');
var express = require('express');
var router = express.Router();
const http = require('http');
const { resolve } = require('path');


const hostname = '127.0.0.1';
const port = 3000;

const es6Renderer = require('express-es6-template-engine');
app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

const server = http.createServer(app);
const db = require('./db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});





module.exports = router;

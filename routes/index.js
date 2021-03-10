const { rejects } = require('assert');
const { response } = require('express');
var express = require('express');
var router = express.Router();
const http = require('http');
const { resolve } = require('path');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

let options = {
  host: "https://api.bls.gov/publicAPI/v2/timeseries/data/",
  path: '/'
}



module.exports = router;

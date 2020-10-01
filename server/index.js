var express = require('express');
var bodyParser = require('body-parser');
var items = require('../database-mysql');
const fetch = require('node-fetch');

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/plaid', function (req, res) {
  fetch('http://localhost:8000/api/accounts')
    .then(res => res.json())
    .then(data => res.json({ data }))
});

app.listen(3000, function () {
  console.log('listening on port 3000!');
});


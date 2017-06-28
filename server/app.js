var express = require('express');
var app = express();

var randomNumber = require('./public/scripts/randomNumber.js');

app.get('/randomNumber', function (req, res) {
  var ranNum = randomNumber(0, 500);
  ranNum = " " + ranNum + " ";
  res.send(ranNum);
});

app.listen (9000, function () {
  console.log('listening on port 9000');
});

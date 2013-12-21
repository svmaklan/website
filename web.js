// web.js
var express = require("express.io");
var app = express().http().io();


app.get('/', function(req, res) {
  res.send('Hello World!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
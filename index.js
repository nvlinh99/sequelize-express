var express = require('express');
var app = express();

var db = require('./models');

app.listen(3000, function() {
  db.sequelize.sync();
});
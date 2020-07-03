const express = require('express');
const app = express();
const db = require('./models');
const userRoute = require('./routes/user.route');

app.use(express.json());

app.get('/', async (req, res) => {
    res.json({
      message: 'Sequelize + Express + Migrations + Seed Starter',
    });
});
app.use('/', userRoute);

app.listen(3000, function() {
  db.sequelize.sync();
});

module.exports = app;
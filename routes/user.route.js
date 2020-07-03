const express = require('express');

const router = express.Router();

const userController = require('../controllers/user.controller');

router.get('/users', userController.getUser);

router.post('/users', userController.postUser);

module.exports = router;
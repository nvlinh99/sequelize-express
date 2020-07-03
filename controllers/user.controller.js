const asyncHandler = require('express-async-handler');
const { User } = require('../models');

exports.getUser = asyncHandler(async(req, res) =>{
    await User.findAll()
        .then((users) => res.json(users));
});

exports.postUser = asyncHandler(async(req, res) => {
    await User.create({ 
        firstName: req.body.firstName, 
        lastName: req.body.lastName,
        email: req.body.email,
        bio: req.body.bio,
    }).then((user) => res.json(user));
})
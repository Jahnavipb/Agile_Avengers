const express = require('express');
const router = express.Router();
const signup = require('../static/signup');

// POST route to handle user signups
router.post('/signup', signup.signup);

module.exports = router;

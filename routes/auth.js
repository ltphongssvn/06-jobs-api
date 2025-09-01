// File: routes/auth.js
// Authentication routes for user registration and login

const express = require('express');
const router = express.Router();
const { login, register } = require('../controllers/auth');

router.post('/register', register);
router.post('/login', login);

module.exports = router;
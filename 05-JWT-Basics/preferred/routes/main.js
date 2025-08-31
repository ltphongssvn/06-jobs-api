// File: 05-JWT-Basics/preferred/routes/main.js
// Routes for JWT authentication endpoints

const express = require('express');
const router = express.Router();

const { login, hello } = require('../controllers/main');
const authMiddleware = require('../middleware/auth');

// POST /api/v1/logon - User login endpoint
router.post('/logon', login);

// GET /api/v1/hello - Protected route requiring authentication
router.get('/hello', authMiddleware, hello);

module.exports = router;

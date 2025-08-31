// File: 05-JWT-Basics/preferred/controllers/main.js
// Controllers for JWT authentication logic

const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    const { name, password } = req.body;

    // Basic validation - in real app you'd validate against database
    if (!name || !password) {
        return res.status(400).json({ message: 'Please provide name and password' });
    }

    // Create JWT token with user's name
    // In real app, you'd verify password against database first
    try {
        const token = jwt.sign(
            { name },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_LIFETIME }
        );

        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Error creating token' });
    }
};

const hello = async (req, res) => {
    // User's name comes from req.user (set by auth middleware)
    const { name } = req.user;

    res.status(200).json({
        message: `Hello ${name}! Welcome to the JWT protected route!`
    });
};

module.exports = {
    login,
    hello
};

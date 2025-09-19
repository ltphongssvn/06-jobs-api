// File: 05-JWT-Basics/preferred/middleware/auth.js
// Authentication middleware for JWT token verification

const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    // Get Authorization header
    const authHeader = req.header('Authorization');

    // Check if header exists and starts with 'Bearer '
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'unauthorized' });
    }

    // Extract token (remove 'Bearer ' prefix)
    const token = authHeader.split(' ')[1];

    // Verify token
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Create req.user with name from token payload
        req.user = { name: decoded.name };

        // Continue to next middleware/controller
        next();
    } catch (error) {
        // Token is invalid or expired
        return res.status(401).json({ message: 'unauthorized' });
    }
};

module.exports = authMiddleware;

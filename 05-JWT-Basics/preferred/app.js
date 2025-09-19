// File: 05-JWT-Basics/preferred/app.js
// Main Express application with JWT authentication routes

require('dotenv').config();
const express = require('express');

const app = express();

// Import routes
const mainRoutes = require('./routes/main');

// Middleware
app.use(express.json());

// Routes
app.use('/api/v1', mainRoutes);

const port = process.env.PORT || 3000;

const start = () => {
    try {
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}...`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();

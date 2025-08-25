// File: 04-store-api/starter/middleware/error-handler.js
// Centralized error handling middleware for consistent API responses

const errorHandlerMiddleware = async (err, req, res, next) => {
    console.log(err)
    return res.status(500).json({ msg: 'Something went wrong, please try again' })
}

module.exports = errorHandlerMiddleware

// File: 04-store-api/starter/middleware/not-found.js
// 404 middleware for handling routes that don't exist

const notFound = (req, res) => res.status(404).send('Route does not exist')

module.exports = notFound

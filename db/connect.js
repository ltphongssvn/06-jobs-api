// File: ~/code/ltphongssvn/06-jobs-api/db/connect.js
// MongoDB connection setup for Jobs API
// Updated for Mongoose 7 compatibility - removed deprecated options
const mongoose = require('mongoose')

const connectDB = (url) => {
  // Mongoose 7 uses modern defaults, no need for legacy options
  return mongoose.connect(url)
}

module.exports = connectDB

// /home/lenovo/code/ltphongssvn/node-express-course/03-task-manager/starter/errors/custom-error.js
class CustomAPIError extends Error {
    constructor(message, statusCode) {
        super(message)
        this.statusCode = statusCode
    }
}

const createCustomError = (msg, statusCode) => {
    return new CustomAPIError(msg, statusCode)
}

module.exports = { CustomAPIError, createCustomError }

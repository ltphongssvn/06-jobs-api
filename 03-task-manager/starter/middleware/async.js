// /home/lenovo/code/ltphongssvn/node-express-course/03-task-manager/starter/middleware/async.js
const asyncWrapper = (fn) => {
    return async (req, res, next) => {
        try {
            await fn(req, res, next)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = asyncWrapper

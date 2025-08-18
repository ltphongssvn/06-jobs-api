// /home/lenovo/code/ltphongssvn/node-express-course/03-task-manager/starter/middleware/not-found.js
const notFound = (req, res) => res.status(404).send('Route does not exist')

module.exports = notFound
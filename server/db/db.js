const config = require('./knexfile').development
const database = require('knex')(config)

module.exports = {
  getClasses
}

function getClasses (db = database) {
  return db('classes').select('title', 'teacher', 'description', 'day')
}

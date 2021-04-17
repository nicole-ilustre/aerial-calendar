const config = require('./knexfile').development
const database = require('knex')(config)

module.exports = {
  getClasses,
  getDays
}

function getClasses (db = database) {
  return db('classes').select('title', 'teacher', 'description', 'day')
}

function getDays (day, db = database) {
  return db('classes').select('title')
    .where('day', day)
}

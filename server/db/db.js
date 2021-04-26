const config = require('./knexfile').development
const database = require('knex')(config)
const { generateHash } = require('authenticare/server')

module.exports = {
  getClasses,
  getDays,
  getUser,
  userExists,
  createUser
}
function userExists (name, db = database) {
  return db('users')
    .count('id as n')
    .where('name', name)
    .then(count => {
      return count[0].n > 0
    })
}
function getClasses (db = database) {
  return db('classes').select('title', 'day', 'teacher', 'description', 'day')
}

function getDays (day, db = database) {
  return db('classes').select('title')
    .where('day', day)
}

function getUser (name, db = database) {
  return db('users').select()
    .where('name', name)
    .first()
}

function createUser (user, db = database) {
  const { name, password } = user
  return userExists(name, db)
    .then(exists => {
      if (exists) {
        return Promise.reject(new Error('Username already taken'))
      }
      return null
    })
    .then(() => generateHash(password))
    .then(passwordHash => {
      return db('users')
        .insert({ name: name, hash: passwordHash })
    })
}

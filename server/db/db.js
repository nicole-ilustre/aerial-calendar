const config = require('./knexfile').development
const database = require('knex')(config)
const { generateHash } = require('authenticare/server')

module.exports = {
  getClasses,
  getDays,
  getUserByName,
  userExists,
  createUser
}
function userExists (username, db = database) {
  return db('users')
    .count('id as n')
    .where('username', username)
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

function getUserByName (username, db = database) {
  return db('users').select()
    .where('username', username)
    .first()
}

function createUser (user, db = database) {
  const { username, password } = user
  return userExists(username, db)
    .then(exists => {
      if (exists) {
        return Promise.reject(new Error('Username already taken'))
      }
      return null
    })
    .then(() => generateHash(password))
    .then(passwordHash => {
      return db('users')
        .insert({ username: username, hash: passwordHash })
    })
}

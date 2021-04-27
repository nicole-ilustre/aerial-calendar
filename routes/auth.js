const express = require('express')
const { applyAuthRoutes } = require('authenticare/server')
const db = require('../server/db/db')

const {
  userExists,
  getUserByName,
  createUser
} = require('../server/db/db')

const router = express.Router()

applyAuthRoutes(router, {
  userExists,
  getUserByName,
  createUser
})

router.post('/auth/register', async (req, res) => {
  const { username, password } = req.body
  try {
    db.createUser(username, password)
    res.status(200)
  } catch (err) {
    res.status(500).send(err.message)
  }
})

router.post('/auth/signin', async (req, res) => {
  const { username } = req.body
  try {
    db.getUserByName(username)
    res.status(200)
  } catch (err) {
    res.status(500).send(err.message)
  }
})

module.exports = router

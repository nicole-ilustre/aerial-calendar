const express = require('express')
const { applyAuthRoutes } = require('authenticare/server')

const {
  userExists,
  getUser,
  createUser
} = require('../server/db/db')

const router = express.Router()

applyAuthRoutes(router, {
  userExists,
  getUser,
  createUser
})

module.exports = router

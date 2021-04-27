const express = require('express')
const { getTokenDecoder } = require('authenticare/server')

const db = require('../server/db/db')

const router = express.Router()

router.get('/', getTokenDecoder(), (req, res) => {
  if (req.user) {
    console.log('username:', req.user.username)
  } else {
    console.log('authenication token not provided')
  }
  try {
    db.getClasses()
      .then(classes => {
        return res.json(classes)
      })
      .catch(err => {
        res.status(500).send('DATABASE ERROR: ' + err.message)
      })
  } catch (err) {
    res.status(500).send(err.message)
  }
})

module.exports = router

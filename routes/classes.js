const express = require('express')

const db = require('../server/db/db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getClasses()
    .then(classes => {
    console.log('code works')
      return res.json(classes)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
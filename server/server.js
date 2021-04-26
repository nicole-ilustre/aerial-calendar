const path = require('path')
const express = require('express')
const cors = require('cors')

const server = express()
const classes = require('../routes/classes')
const auth = require('../routes/auth')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use(cors('*'))

server.use('/v1/classes', classes)
server.use('/', auth)

module.exports = server

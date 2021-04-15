const path = require('path')
const express = require('express')
const cors = require('cors')

const server = express()
const classes = require('../routes/classes')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use(cors('*'))

server.use('/v1/classes', classes)

module.exports = server

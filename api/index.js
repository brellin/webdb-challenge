const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const projects = require('./routers/projects')
const actions = require('./routers/actions')

const server = express()

server.use(express.json())
server.use(morgan('dev'))
server.use(helmet())

server.get('/', (req, res) => {
    res.status(404).send('This is not the endpoint you are looking for.')
})

server.use('/api/projects', projects)
server.use('/api/actions', actions)

module.exports = server

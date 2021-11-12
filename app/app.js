/**
 * test NodeJs API Rest
 * Author: Miguel Angel Ortiz
 * version: 0.0.1
 */

require('./utils/import_env').import()
const logger = require('./utils/logger')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const cors = require('cors')

logger.info('test NodeJS API Rest ' + (require('../package.json')).version)

// Routes
const apiRouter = require('./routes/api')
// App use
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(cors())

//
app.use('/', apiRouter)

module.exports = app

/**
 * API controller. All routes
 * Author: Miguel Angel Ortiz
 */

const express = require('express')
const router = express.Router()

const dataController = require('../controllers/data_controller')

// ***** POST ***** //
router.post('/data', dataController.getData)

module.exports = router

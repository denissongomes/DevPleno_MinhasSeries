const express = require('express')
const seriesController = require('../controllers/series')

 
const router = express.Router()

const Serie = require('../models/series')
const models = {
    Serie
}

router.get('/', seriesController.index.bind(null, models))

router.get('/nova', seriesController.novaForm)
router.post('/nova', seriesController.novaProcess.bind(null, models))

router.get('/excluir/:id', seriesController.removeOne.bind(null, models))

router.get('/editar/:id', seriesController.updateForm.bind(null, models))
router.post('/editar/:id', seriesController.updateProcess.bind(null, models))

router.get('/info/:id', seriesController.info.bind(null, models))
router.post('/info/:id', seriesController.addComment.bind(null, models))

module.exports = router
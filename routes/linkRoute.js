const express = require('express')
const router = express.Router()
const linkController = require('../controllers/linkController')

router.get('/', (req, res) => res.render('index', {error: false, body: {}}))

router.get('/all', linkController.showLinks)

router.get('/:title', linkController.redirect)

router.post('/', linkController.addLink)

router.delete('/:id', linkController.deleteLink)
router.delete('/', linkController.deleteLink)

module.exports = router
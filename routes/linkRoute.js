const express = require('express')
const router = express.Router()
const linkController = require('../controllers/linkController')

router.get('/', linkController.showLinks)

router.get('/:title', linkController.redirect)

router.get('/add', (req, res) => res.render('index', {error: false, body: {}}))

router.post('/', linkController.addLink)

router.delete('/:id', linkController.deleteLink)
router.delete('/', linkController.deleteLink)

module.exports = router
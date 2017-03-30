'use strict'

const { Router } = require('express')
const { show } = require('../controllers/contact')

const router = Router()

router.get('/contact', show)

module.exports = router

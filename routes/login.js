'use strict'

const { Router } = require('express')
const { show } = require('../controllers/login')

const router = Router()

router.get('/login', show)

module.exports = router

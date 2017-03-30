'use strict'

const { Router } = require('express')
const { show } = require('../controllers/order')

const router = Router()

router.get('/order', show)

module.exports = router

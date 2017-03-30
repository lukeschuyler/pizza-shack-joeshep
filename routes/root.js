'use strict'

const { Router } = require('express')
const { show } = require('../controllers/root')

const router = Router()

router.get('/', show)

module.exports = router

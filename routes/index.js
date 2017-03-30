'use strict'

const { Router } = require('express')
const router = Router()

// public routes
router.use(require('./about'))
router.use(require('./contact'))
router.use(require('./login'))
router.use(require('./register'))
router.use(require('./root'))

// login guard
// router.use((req, res, next) => {
  // req.isAuthenticated() ? next() : res.redirect('./login')
// })


// private routes
// router.use(require('./login'))
// router.use(require('./order'))

module.exports = router;

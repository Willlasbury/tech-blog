const router = require('express').Router()


const userRoutes = require('./api')
router.use('/api', userRoutes)


const pageRoutes = require('./pages')
router.use('/', pageRoutes)

module.exports = router
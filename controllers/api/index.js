const router = require("express").Router()

const user = require('./user')
router.use("/users", user)

const post = require('./post')
router.use("/posts", post)

module.exports = router
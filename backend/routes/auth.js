const express = require('express')
const router = express.Router()
const authController = require('../controller/authentication')

router.post('/user', authController.createUser)
router.post('/login', authController.login)
router.post('/logout', authController.logout)

module.exports = router
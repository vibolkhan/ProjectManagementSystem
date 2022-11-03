const express = require('express')
const router = express.Router()
const userController = require('../controller/user')
const vertifyToken = require('../controller/auth')

router.post('/', vertifyToken, userController.createUser)
router.get('/', vertifyToken, userController.getAlluser)
router.put('/:id', vertifyToken, userController.updateUser)
router.delete('/:id', vertifyToken, userController.deleteUser)

// login 
router.post('/login', userController.login)

// logout
router.post('/logout', vertifyToken, userController.logout)

module.exports = router

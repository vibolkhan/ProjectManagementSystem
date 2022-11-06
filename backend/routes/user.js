const express = require('express')
const router = express.Router()
const userController = require('../controller/user')

router.get('/', userController.getAlluser)
router.put('/:id', userController.updateUser)
router.delete('/:id', userController.deleteUser)

module.exports = router

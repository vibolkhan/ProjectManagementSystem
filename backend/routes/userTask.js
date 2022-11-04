const express = require('express')
const router = express.Router()
const userTaskController = require('../controller/userTask')

router.post('/', userTaskController.createUserTask)
router.get('/', userTaskController.getAllUserTask)
router.put('/:id', userTaskController.updateUserTask)
router.delete('/:id', userTaskController.deleteUserTask)

module.exports = router
const express = require('express')
const router = express.Router()
const taskController = require('../controller/task')

router.post('/', taskController.createTask)
router.get('/', taskController.getAllTask)
router.put('/:id', taskController.updateTask)
router.delete('/:id', taskController.deleteTask)

module.exports = router
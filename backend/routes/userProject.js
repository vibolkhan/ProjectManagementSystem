const express = require('express')
const router = express.Router()
const userProjectController = require('../controller/userProject')

router.post('/', userProjectController.createUserProject)
router.get('/', userProjectController.getAllUserProject)
router.put('/:id', userProjectController.updateUserProject)
router.delete('/:id', userProjectController.deleteUserProject)

module.exports = router
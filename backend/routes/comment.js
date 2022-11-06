const express = require('express')
const router = express.Router()
const commentController = require('../controller/comment')

router.post('/', commentController.createComment)
router.get('/', commentController.getAllComment)
router.put('/:id', commentController.updateComment)
router.delete('/:id', commentController.deleteComment)

module.exports = router
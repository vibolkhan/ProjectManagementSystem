const db = require('../config/model/index')
const commentTable =  db.comment
// create comment
async function createComment(req, res) {
    try {
        const data = await commentTable.create(req.body)
        res.send(data)
    } catch (err) {
        res.status(404).json({msg: "Cannot create data"})
    }
}
    
// get comment
async function getAllComment(req, res) {
    try {
        const data = await commentTable.findAll()
        res.send(data)
    } catch (err) {
        res.status(404).json({msg: "Cannot get data"})
    }
}

// update comment
async function updateComment(req, res) {
    try {
        const data = await commentTable.update({
            where: {
              id: req.params.id,
            },
        })
        res.send(data)
    } catch (err) {
        res.status(404).json({msg: "Cannot update data"})
    }
}

// delete comment
async function deleteComment(req, res) {
    try {
        await commentTable.destroy({
            where: {
              id: req.params.id,
            },
        })
        res.send('deleted')
    } catch (err) {
        res.status(404).json({msg: "Cannot delete data"})
    }
}

module.exports = {createComment, getAllComment, deleteComment, updateComment}
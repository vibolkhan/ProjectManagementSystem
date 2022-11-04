const db = require('../config/model/index')
const userTaskTable =  db.user
// create user
async function createUserTask(req, res) {
    try {
        const data = await userTaskTable.create(req.body)
        res.send(data)
    } catch (err) {
        res.status(404).json({msg: "Cannot create data"})
    }
}

// get user
async function getAllUserTask(req, res) {
    try {
        const data = await userTaskTable.findAll()
        res.send(data)
    } catch (err) {
        res.status(404).json({msg: "Cannot get data"})
    }
}

// update user
async function updateUserTask(req, res) {
    try {
        const data = await userTaskTable.update({
            where: {
              id: req.params.id,
            },
        })
        res.send(data)
    } catch (err) {
        res.status(404).json({msg: "Cannot update data"})
    }
}

// delete user
async function deleteUserTask(req, res) {
    try {
        await userTaskTable.destroy({
            where: {
              id: req.params.id,
            },
        })
        res.send('deleted')
    } catch (err) {
        res.status(404).json({msg: "Cannot delete data"})
    }
}
module.exports = {createUserTask, getAllUserTask, deleteUserTask, updateUserTask}
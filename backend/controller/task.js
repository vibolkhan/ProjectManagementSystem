const db = require('../config/model/index')
const taskTable =  db.task
// create user
async function createTask(req, res) {
    try {
        const data = await taskTable.create(req.body)
        res.send(data)
    } catch (err) {
        res.status(404).json({msg: "Cannot create data"})
    }
}
    
// get Status
async function getAllTask(req, res) {
    try {
        const data = await taskTable.findAll()
        res.send(data)
    } catch (err) {
        res.status(404).json({msg: "Cannot get data"})
    }
}

// update Status
async function updateTask(req, res) {
    try {
        const data = await taskTable.update({
            where: {
              id: req.params.id,
            },
        })
        res.send(data)
    } catch (err) {
        res.status(404).json({msg: "Cannot update data"})
    }
}

// delete Status
async function deleteTask(req, res) {
    try {
        await taskTable.destroy({
            where: {
              id: req.params.id,
            },
        })
        res.send('deleted')
    } catch (err) {
        res.status(404).json({msg: "Cannot delete data"})
    }
}

module.exports = {createTask, getAllTask, deleteTask, updateTask}
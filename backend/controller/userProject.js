const db = require('../config/model/index')
const userProjectTable =  db.user
// create user
async function createUserProject(req, res) {
    try {
        const data = await userProjectTable.create(req.body)
        res.send(data)
    } catch (err) {
        res.status(404).json({msg: "Cannot create data"})
    }
}

// get user
async function getAllUserProject(req, res) {
    try {
        const data = await userProjectTable.findAll()
        res.send(data)
    } catch (err) {
        res.status(404).json({msg: "Cannot get data"})
    }
}

// update user
async function updateUserProject(req, res) {
    try {
        const data = await userProjectTable.update({
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
async function deleteUserProject(req, res) {
    try {
        await userProjectTable.destroy({
            where: {
              id: req.params.id,
            },
        })
        res.send('deleted')
    } catch (err) {
        res.status(404).json({msg: "Cannot delete data"})
    }
}
module.exports = {createUserProject, getAllUserProject, deleteUserProject, updateUserProject}
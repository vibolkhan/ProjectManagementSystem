const db = require('../config/model/index')
const projectTable =  db.project
// create user
async function createProject(req, res) {
    try {
        const data = await projectTable.create(req.body)
        res.send(data)
    } catch (err) {
        res.status(404).json({msg: "Cannot create data"})
    }
}
    
// get Status
async function getAllProject(req, res) {
    try {
        const data = await projectTable.findAll()
        res.send(data)
    } catch (err) {
        res.status(404).json({msg: "Cannot get data"})
    }
}

// update Status
async function updateProject(req, res) {
    try {
        const data = await projectTable.update({
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
async function deleteProject(req, res) {
    try {
        await projectTable.destroy({
            where: {
              id: req.params.id,
            },
        })
        res.send('deleted')
    } catch (err) {
        res.status(404).json({msg: "Cannot delete data"})
    }
}

module.exports = {createProject, getAllProject, deleteProject, updateProject}
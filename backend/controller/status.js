const db = require('../config/model/index')
const statusTable = db.status
async function createStatus(req, res) {
    try {
        const data = await statusTable.create(req.body)
        res.send(data)
    } catch (err) {
        res.status(404).json({msg: "Cannot create data"})
    }
}

// get Status
async function getAllStatus(req, res) {
    try {
        console.log(statusTable)
        const data = await statusTable.findAll()
        res.send(data)
    } catch (err) {
        console.log(err)
        res.status(404).json({msg: err})
    }
}

// update Status
async function updateStatus(req, res) {
    try {
        const data = await statusTable.update({
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
async function deleteStatus(req, res) {
    try {
        await statusTable.destroy({
            where: {
              id: req.params.id,
            },
        })
        res.send('deleted')
    } catch (err) {
        res.status(404).json({msg: "Cannot delete data"})
    }
}

module.exports = {createStatus, getAllStatus, deleteStatus, updateStatus}
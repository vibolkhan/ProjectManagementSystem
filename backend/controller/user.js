const userTable = require('../config/model/user')

// create user
async function createUser(req, res) {
    try {
        const data = await userTable.create(req.body)
        res.send(data)
    } catch (err) {
        res.status(404).json({msg: "Cannot create data"})
    }
}
    
// get user
async function getAlluser(req, res) {
    try {
        const data = await userTable.findAll()
        res.send(data)
    } catch (err) {
        res.status(404).json({msg: "Cannot get data"})
    }
}

// update user
async function updateUser(req, res) {
    try {
        const data = await userTable.update({
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
async function deleteUser(req, res) {
    try {
        await userTable.destroy({
            where: {
              id: req.params.id,
            },
        })
        res.send('deleted')
    } catch (err) {
        res.status(404).json({msg: "Cannot delete data"})
    }
}

module.exports = {createUser, getAlluser, deleteUser, updateUser}
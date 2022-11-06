const db = require('../config/model/index')
const userTable =  db.user
    
// get user
async function getAlluser(req, res) {
    try {
        const data = await userTable.findAll({
            // attributes: {
            //     exclude: ['password']
            // }
        })
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

module.exports = { getAlluser, deleteUser, updateUser}

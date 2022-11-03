const userTable = require('../config/model/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

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
        const data = await userTable.findAll({
            attributes: {
                exclude: ['password']
            }
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

// login
async function login (req, res) {
    // check if user exists by email
    const user = await userTable.findAll({
        where: {
            email: req.body.email,
        },
    })
    if (user.length > 0) {
      if (await verifyPassword(req.body.password,user)) {
        const token = jwt.sign({
          data: 'pms'
        }, 'secret', { expiresIn: '24h' });

        const loginView = {
          user,
          token
        }
        res.send(loginView)
      } else {
        res.send("error", 401)
      }
    } else {
      res.send("error", 401)
    }
}

async function verifyPassword(password, user) {
  if (user.length > 0) {
    return await bcrypt.compare(password, user[0].dataValues.password)
  }
}

// logout
async function logout(req, res) {
    try{
        let randomNumberToAppend = toString(Math.floor((Math.random() * 1000) + 1));
        let randomIndex = Math.floor((Math.random() * 10) + 1);
        let hashedRandomNumberToAppend = await bcrypt.hash(randomNumberToAppend, 10);
    
        // now just concat the hashed random number to the end of the token
        req.token = req.token + hashedRandomNumberToAppend;
        return res.status(200).json('logout');
    }catch(err){
        return res.status(500).json(err.message);
    }
}
module.exports = {createUser, getAlluser, deleteUser, updateUser, login, logout}
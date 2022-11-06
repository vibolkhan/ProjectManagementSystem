const db = require('../config/model/index')
const userTable =  db.user
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


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

// create user
async function createUser(req, res) {
    try {
        const data = await userTable.create(req.body)
        console.log(data);
        res.send(data)
    } catch (err) {
        res.status(404).json({msg: "Cannot create data"})
    }
}

module.exports = {login, logout, createUser}
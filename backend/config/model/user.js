const { DataTypes} = require("sequelize")
const bcrypt = require('bcryptjs')

const userTable = require('../database/database').define(
    "user",
    {
      userName: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password: DataTypes.STRING,
    },
    { tableName: "user" }
)

userTable.beforeCreate((user, options) => {
  return bcrypt.hash(user.password, 10)
    .then(hash => {
      user.password = hash;
    })
    .catch(err => {
      throw new Error(); 
    });
});

userTable.sync()
module.exports = userTable

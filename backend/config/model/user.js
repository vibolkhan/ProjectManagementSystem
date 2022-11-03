const { DataTypes} = require("sequelize")

const userTable = require('../database/database').define(
    "user",
    {
      userName: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        unique: true
      },
      password: DataTypes.STRING,
    },
    { tableName: "user" }
)

userTable.sync()
module.exports = userTable

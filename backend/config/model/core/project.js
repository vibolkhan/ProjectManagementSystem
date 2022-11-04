const { DataTypes} = require("sequelize")
const sequelize = require("sequelize")
const projectTable = require('../../database/database').define(
    "project",
    {
      name: {
        type:DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        type: 'TIMESTAMP',
        allowNull: false,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
    updatedAt: {
        type: 'TIMESTAMP',
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
    },
    },
    { tableName: "project" }
)
module.exports = projectTable
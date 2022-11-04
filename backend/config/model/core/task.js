const { DataTypes} = require("sequelize")
const sequelize = require("sequelize")
const taskTable = require('../../database/database').define(
    "task",
    {
      name: {
        type :DataTypes.STRING,
        allowNull: false,
      },
      estimateTime: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      actualTime: {
        type: DataTypes.INTEGER,
        allowNull: false
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
    { tableName: "task" }
)
module.exports = taskTable
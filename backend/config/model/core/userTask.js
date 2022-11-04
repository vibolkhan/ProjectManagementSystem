const sequelize = require("sequelize")
const DataTypes = sequelize.DataTypes
const user = require('./user')
const task = require('./task')
const userTaskTable = require('../../database/database').define(
    "user_task",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },

      userId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        reference: {
          model: user,
          key: 'id'
        }
      },
      taskId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        reference: {
          model: task,
          key: 'id'
        }
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
    { tableName: "user_task" }
)
module.exports = userTaskTable
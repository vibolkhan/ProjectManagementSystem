const sequelize = require("sequelize")
const DataTypes = sequelize.DataTypes
const user = require('./user')
const project = require('./project')
const userProjectTable = require('../../database/database').define(
    "user_project",
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
      projectId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        reference: {
          model: project,
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
    { tableName: "user_project" }
)
module.exports = userProjectTable
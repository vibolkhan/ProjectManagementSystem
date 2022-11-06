const { DataTypes} = require("sequelize")
const sequelize = require("sequelize")
const commentTable = require('../../database/database').define(
    "comment",
    {
      comment: {
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
)
module.exports = commentTable

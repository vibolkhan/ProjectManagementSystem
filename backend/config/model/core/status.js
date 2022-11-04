const { DataTypes} = require("sequelize")
const sequelize = require("sequelize")
const statusTable = require('../../database/database').define(
    "status",
    {
    status: {
        type: DataTypes.STRING,
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
    { tableName: "status" }
)
module.exports = statusTable
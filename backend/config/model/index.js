const database = require('../database/database');
const {Sequelize, DataTypes} = require('sequelize');

database.authenticate()
.then(() => {
    console.log('connection................................')
})
.catch(err => {
    console.log('Error'+ err)
})

// const db = {}

// db.sequelize = Sequelize
// db.database = database

const project = require('./core/project')//(database, DataTypes)
const task = require('./core/task')//(database, DataTypes)
const status = require('./core/status'); //(database, DataTypes)
const user = require('./core/user');
const userProject = require('./core/userProject'); //
const userTask = require('./core/userTask');
const comment = require('./core/comment');
// relation between project and status
status.hasOne(project, {
     foreignKey:{
        name: 'statusId',
        allowNull: false
    },
    onDelete: 'CASCADE',
    as: 'project',
})

project.belongsTo(status, {
    foreignKey:{
        name: 'statusId',
        allowNull: false,
    },
    onDelete: 'CASCADE',
    as: 'status',
})

// relation between task and status
status.hasOne(task, {
     foreignKey:{
        name: 'statusId',
        allowNull: false
    },
    onDelete: 'CASCADE',
    as: 'task',
})
task.belongsTo(status, {
     foreignKey:{
        name: 'statusId',
        allowNull: false
    },
    onDelete: 'CASCADE',
    as: 'status',
})

// relation between task and user
user.hasMany(task, {
     foreignKey:{
        name: 'userId',
        allowNull: false
    },
    onDelete: 'CASCADE',
    as: 'task',
})
task.belongsTo(user, {
     foreignKey:{
        name: 'userId',
        allowNull: false
    },
    onDelete: 'CASCADE',
    as: 'user',
})

// relation between task and project
project.hasMany(task, {
     foreignKey:{
        name: 'projectId',
        allowNull: false
    },
    onDelete: 'CASCADE',
    as: 'task',
})
task.belongsTo(project, {
     foreignKey:{
        name: 'projectId',
        allowNull: false
    },
    onDelete: 'CASCADE',
    as: 'project',
})

// relation between task and and comment
task.hasMany(comment, {
    foreignKey:{
       name: 'taskId',
       allowNull: false
   },
   onDelete: 'CASCADE',
   as: 'comment',
})
comment.belongsTo(task, {
    foreignKey:{
       name: 'taskId',
       allowNull: false
   },
   onDelete: 'CASCADE',
   as: 'task',
})

// relation between user and and comment
user.hasMany(comment, {
    foreignKey:{
       name: 'userId',
       allowNull: false
   },
   onDelete: 'CASCADE',
   as: 'comment',
})
comment.belongsTo(user, {
    foreignKey:{
       name: 'userId',
       allowNull: false
   },
   onDelete: 'CASCADE',
   as: 'user',
})

// relation between user with project
user.belongsToMany(project, { through: 'user_project' });
project.belongsToMany(user, { through: 'user_project' });

// relation between user with task
user.belongsToMany(task, { through: 'user_task' });
task.belongsToMany(user, { through: 'user_task' });

user.sync()
status.sync()
project.sync()
task.sync()
userTask.sync()
userProject.sync()
comment.sync()
module.exports = {
    status, 
    user, 
    project,
    task,
    userTask,
    userProject,
    comment,
}
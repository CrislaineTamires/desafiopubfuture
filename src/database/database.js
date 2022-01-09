const sequelize = require('sequelize');

const database = new sequelize({
    dialect: 'sqlite',
    storage: './src/database/database.sqlite'
})
 
module.exports = database;
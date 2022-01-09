const sequelize = require('sequelize');
const database = require('../database');

const Conta = database.define('conta', {
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    saldo: {
        type: sequelize.DOUBLE,
        allowNull: false
    }, 
    
    tipoConta: sequelize.STRING, 
    instituicaoFinanceira: sequelize.STRING,
})

module.exports = Conta;
const sequelize = require('sequelize');
const database = require('../database');

const Despesa = database.define('despesa', {
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    valor: {
        type: sequelize.DOUBLE,
        allowNull: false
    },
    dataPagamento: {
        type: sequelize.DATE
    },
    dataPagamentoEsperado: {
        type: sequelize.DATE
    },

    tipoDespesa: sequelize.STRING,
    contaId: sequelize.INTEGER,
})
 
module.exports = Despesa;
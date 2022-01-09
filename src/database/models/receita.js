const sequelize = require('sequelize');
const database = require('../database');

const Receita = database.define('receita', {
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
    dataRecebimento: {
        type: sequelize.DATE
    },
    dataRecebimentoEsperado: {
        type: sequelize.DATE
    },

    descricao: sequelize.STRING,
    tipoReceita : sequelize.STRING,
    contaId: sequelize.INTEGER,
})

module.exports = Receita;
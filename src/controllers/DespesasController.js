const sequelize = require("sequelize");
const despesas = require('../database/models/despesa');

module.exports = {
    async Read(request) {
        try {
            const despesa = await despesas.findAll({
                where: {
                    dataPagamento: {
                        [sequelize.Op.between]: [request.dataInicial, request.dataFinal],
                    },
                }
              });
            response.status(200).json(despesa);            
        } catch (error) {
            response.status(400).json(error);
        }
    }, 
    async ReadAll() {
        try {
            const despesa = await despesas.findAll();
            response.status(200).json(despesa);            
        } catch (error) {
            response.status(400).json(error);
        }
    },
    async Add(request) {
        try {
            const resultadoCreate = await despesas.create({
                valor: request.valor,
                dataPagamento: request.dataPagamento,
                dataPagamentoEsperado: request.dataPagamentoEsperado,            
                tipoDespesa: request.tipoDespesa,
                contaId: request.contaId,
            });
            response.status(200).json(resultadoCreate);            
        } catch (error) {
            response.status(400).json(error);
        }
    },
    async Update(request) {
        try {
            const despesa = await despesas.findByPk(request.id);
            
            despesa.valor = request.valor;
            despesa.dataPagamento = request.dataPagamento;
            despesa.dataPagamentoEsperado = request.dataPagamentoEsperado;
            despesa.tipoDespesa = request.tipoDespesa;
            despesa.contaId = request.contaId;

            const resultadoSave = await despesas.save();
            response.status(200).json(resultadoSave);

        } catch (error) {
            response.status(400).json(error);
        }
    },
    async Delete(request) {
        try {
            const despesa = await despesas.findByPk(request.id);            
            despesa.destroy();
            response.status(200).json();
        } catch (error) {
            response.status(400).json(error);
        }
    },
}
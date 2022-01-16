const sequelize = require("sequelize");
const receitas = require('../database/models/receita');

module.exports = {
    async Read(request) {
        try {
            const receita = await receitas.findAll({
                where: {
                    dataRecebimento: {
                        [sequelize.Op.between]: [request.dataInicial, request.dataFinal],
                    },
                }
              });
            response.status(200).json(receita);            
        } catch (error) {
            response.status(400).json(error);
        }
    }, 
    async ReadAll() {
        try {
            const receita = await receitas.findAll();
            response.status(200).json(receita);            
        } catch (error) {
            response.status(400).json(error);
        }
    },
    async Add(request) {
        try {
            const resultadoCreate = await receitas.create({
                valor: request.valor,
                dataRecebimento: request.dataRecebimento,
                dataRecebimentoEsperado: request.dataRecebimentoEsperado,            
                descricao: request.descricao,
                tipoReceita : request.tipoReceita,
                contaId: request.contaId,
            });
            response.status(200).json(resultadoCreate);            
        } catch (error) {
            response.status(400).json(error);
        }
    },
    async Update(request) {
        try {
            const receita = await receitas.findByPk(request.id);
            
            receita.valor = request.valor;
            receita.dataRecebimento = request.dataRecebimento;
            receita.dataRecebimentoEsperado = request.dataRecebimentoEsperado;
            receita.descricao = request.descricao;
            receita.tipoReceita = request.tipoReceita;
            receita.contaId = request.contaId;

            const resultadoSave = await receitas.save();
            response.status(200).json(resultadoSave);

        } catch (error) {
            response.status(400).json(error);
        }
    },
    async Delete(request) {
        try {
            const receita = await receitas.findByPk(request.id);            
            receita.destroy();
            response.status(200).json();
        } catch (error) {
            response.status(400).json(error);
        }
    },
}
const sequelize = require("sequelize");
const contas = require('../database/models/conta');

module.exports = {
    async Read() {
        try {
            const conta = await contas.findAll();
            response.status(200).json(conta);            
        } catch (error) {
            response.status(400).json(error);
        }
    }, 
    async ReadBalance() {
        try {
            const conta = await contas.findAll({
                attributes: [
                  [sequelize.fn('sum', sequelize.col('saldo')), 'total'],
                ],
              });
            response.status(200).json(conta);            
        } catch (error) {
            response.status(400).json(error);
        }
    },
    async Transfer(request) {
        try {
            const conta1 = await request.findByPk(request.conta1_id);
            const conta2 = await request.findByPk(request.conta2_id);
            
            conta1.valor -= request.valor;
            conta2.valor += request.valor;

            const resultadoSave = await contas.save();
            response.status(200).json(resultadoSave);

        } catch (error) {
            response.status(400).json(error);
        }
    },
    async Add(request) {
        try {
            const resultadoCreate = await contas.create({
                saldo: request.saldo,
                tipoConta: request.tipoConta, 
                instituicaoFinanceira: request.instituicaoFinanceira,
            });
            response.status(200).json(resultadoCreate);            
        } catch (error) {
            response.status(400).json(error);
        }
    },
    async Update(request) {
        try {
            const conta = await contas.findByPk(request.id);
            
            conta.saldo = request.saldo;
            conta.tipoConta = request.tipoConta;
            conta.instituicaoFinanceira = request.instituicaoFinanceira;

            const resultadoSave = await contas.save();
            response.status(200).json(resultadoSave);

        } catch (error) {
            response.status(400).json(error);
        }
    },
    async Delete(request) {
        try {
            const conta = await contas.findByPk(request.id);            
            conta.destroy();
            response.status(200).json();
        } catch (error) {
            response.status(400).json(error);
        }
    },
}
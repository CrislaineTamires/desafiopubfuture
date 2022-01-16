const express = require('express');
const routes = express.Router();

const ReceitasController = require('./controllers/ReceitasController');
const DespesasController = require('./controllers/DespesasController');
const ContasController = require('./controllers/ContasController');

//Receitas
routes.get('/todasreceitas', ReceitasController.ReadAll);
routes.post('/receitas', ReceitasController.Read);

routes.post('/adicionareceitas', ReceitasController.Add);
routes.post('/editareceitas', ReceitasController.Update);
routes.post('/removereceitas', ReceitasController.Delete);

//Despesas
routes.get('/todasdespesas', DespesasController.ReadAll);
routes.post('/despesas', DespesasController.Read);

routes.post('/adicionadespesas', DespesasController.Add);
routes.post('/editadespesas', DespesasController.Update);
routes.post('/removedespesas', DespesasController.Delete);

//Contas
routes.get('/contas', ContasController.Read);
routes.get('/saldo', ContasController.ReadBalance);

routes.get('/transferesaldo', ContasController.Transfer);

routes.post('/adicionacontas', ContasController.Add);
routes.post('/editacontas', ContasController.Update);
routes.post('/removecontas', ContasController.Delete);

module.exports = routes;
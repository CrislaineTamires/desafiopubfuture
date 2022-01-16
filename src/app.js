const express = require('express');
const routes = require('./routes');
const app = express();

//Informa que formato de arquivo vai ser recebido
app.use(express.json());

//Usa as rotas definidas no arquivo routes.js
app.use(routes);

module.exports = app;
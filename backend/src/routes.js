const express = require("express");
const ongsController = require('./Controllers/ongsController');
const incidentsController = require('./Controllers/incidentsController');
const sessionController = require("./Controllers/sessionController");


const profileController = require("./Controllers/profileController");

//Variavel utilizada para criar as rotas de GET, POST, PUT e DELETE.
const routes = express.Router();

//Metodos para poder criar a primeira rota e exibir os dados no navegador.
routes.post('/ongs', ongsController.create);

//Metodo criado para listar todos os dados que existem dentro de uma determinada tabela no banco.
routes.get('/ongs', ongsController.list);


routes.post('/incidents', incidentsController.create);
routes.get('/incidents', incidentsController.list);
routes.delete('/incidents/:id', incidentsController.delete);


routes.get('/profile', profileController.especificCases);

routes.post('/session', sessionController.login);

//Exportando o modulo "routes" para ser usado no index.js
module.exports = routes;

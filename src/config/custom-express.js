//Adicionando modulo de geração de templates automáticos
require('marko/node-require').install();
require('marko/express');

//Recebe como retorno uma função
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//Setando um middleware para o express
//Criado para receber dados do formulário adição de livros
//Permite o envio de dados no estilo Json
app.use(bodyParser.urlencoded({
    extended: true
}));

module.exports = app;

const rotas = require('../app/rotas/rotas');
rotas(app);
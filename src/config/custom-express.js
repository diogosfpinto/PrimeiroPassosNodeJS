//Adicionando modulo de geração de templates automáticos
require('marko/node-require').install();
require('marko/express');

//Recebe como retorno uma função
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//Requisições para um objeto javascript estático será redirecionado para o caminho abaixo
app.use('/estatico', express.static('src/app/public'));

//Setando um middleware para o express
//Criado para receber dados do formulário adição de livros
//Permite o envio de dados no estilo Json
app.use(bodyParser.urlencoded({
    extended: true
}));

//Adicionando middleware para contagem de tempo para executar uma rota
app.use('*', function(req, res, next){
    const inicio = new Date().getTime();
    next();
    const termino = new Date().getTime();

    const milissegundosDecorridos = termino - inicio;
})

module.exports = app;

const rotas = require('../app/rotas/rotas');
rotas(app);
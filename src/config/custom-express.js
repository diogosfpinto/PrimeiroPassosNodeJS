//Adicionando modulo de geração de templates automáticos
require('marko/node-require').install();
require('marko/express');

//Recebe como retorno uma função
const express = require('express');
const app = express();

module.exports = app;

const rotas = require('../app/rotas/rotas');
rotas(app);
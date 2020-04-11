const express = require('express');
const routes = express.Router();


routes.get('/', (resquest, response) => {
    return response.json({
        evento: 'Semana Oministack 11.0',
        aluno: 'Leandro Freitas'
    })
});
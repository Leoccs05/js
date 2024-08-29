const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController')
const contatoController = require('./src/controllers/contatoController')

function mMW(req, res, next){
    req.session = {nome:'Luiz', sobrenome: 'Miranda'}
    console.log()
    console.log('Passei no seu middleware')
    console.log()
    next()
}

//Rota da home
//CONTROLLER ESCOLHE QUAL O MODULE E VIEW VAI SER UTILIZADO
route.get('/',homeController.paginaInicial)
route.post('/', homeController.trataPost)

//Rota de contato
route.get('/contato', contatoController.paginaInicial)

module.exports = route;
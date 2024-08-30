const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController')
const contatoController = require('./src/controllers/contatoController')

function mMW(req, res, next){
    //salvar na seção do usuarrio
    req.session = {nome:'Luiz', sobrenome: 'Miranda'}
    console.log()
    console.log('Passei no seu middleware')
    console.log()
    next()
}

//rotas da home
route.get('/',/*meuMiddleware,*/homeController.paginaInicial/*, function(req, res, next){console.log()console.log('Ainda estou aqui...')}*/)
route.post('/', homeController.trataPost)

//rotas contato
route.get('/contato', contatoController.paginaInicial)


module.exports = route;
const HomeModel = require('../models/homeModel');

//criar algo na base de dados no mongoDB
HomeModel.create({
    titulo: 'Um titulo de testes',
    descricao: 'Uma descrição de testes '
})
    .then(dados => console.log(dados))
    .catch(e => console.log(e))

//Para busca dados
//HomeModel.find()

exports.paginaInicial = (req, res, /*next*/)=>{
    //console.log('respondendo o cliente')
    res.render('index')
    //console.log(`'Ultimo middleware' Olha o que tem na req.session.nome ${req.session.nome}`)
    //next()
    return;
}

exports.trataPost = (req, res) =>{
    //nova rota de Post
    res.send(req.body)
    return
}
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

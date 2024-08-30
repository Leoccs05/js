exports.paginaInicial = (req, res, /*next*/)=>{
    //dura por 7 dias
    //req.session.usuario = { nome: 'Luiz', logado: true}
    //console.log(req.session.usuario)

    //dura até atualizar a pagina
    //req.flash('info', 'Ola mundo!')
    //req.flash('error', 'msg 2')
    //req.flash('suces', 'msg 3')
    console.log(req.flash('info'), req.flash('error'), req.flash('suces'))


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

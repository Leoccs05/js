exports.paginaInicial = (req, res, /*next*/)=>{
    //console.log('respondendo o cliente')
    //injetando dados no template index
    res.render('index', {
        titulo: 'Este será o titulo da pagina',
        numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    })
    return;
}

exports.trataPost = (req, res) =>{
    //nova rota de Post
    res.send(req.body)
    return
}

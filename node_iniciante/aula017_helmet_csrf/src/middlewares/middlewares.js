exports.middlewareGlobal = (req, res, next) =>{
    //injeta dados em todas as rotas
    res.locals.umaVariavelLocal = 'Este é o valor da variavel local'

    console.log()
    //console.log('Passei no seu middleware')
    if(req.body.cliente){
        req.body.cliente = req.body.cliente.replace('Casadei', 'Não use Casadei')
        console.log(`Vi que voce postou ${req.body.cliente}`)
    }
    console.log()
    next()
}

exports.outroMiddlewareGlobal = (req, res, next) =>{
    console.log()
    console.log('Passei no seu middleware')
    console.log()
    next()
}

exports.checkCsrfError = (err, req, res, next) =>{
    if(err && 'EBADCSRFTOKEN' === err.code){
        return res.render('404')
    }
}

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken()
    next()
}
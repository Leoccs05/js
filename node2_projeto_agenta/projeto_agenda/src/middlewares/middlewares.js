exports.middlewareGlobal = (req, res, next) =>{
    res.locals.umaVariavelLocal = 'Este é o valor da variavel local';
    next()
}

exports.outroMiddlewareGlobal = (req, res, next) =>{
    next()
}

exports.checkCsrfError = (err, req, res, next) =>{
    //Erro não passa para frente so mostra a pagina
    if(err){
        return res.render('404')
    }
    next()
}

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken()
    next()
}
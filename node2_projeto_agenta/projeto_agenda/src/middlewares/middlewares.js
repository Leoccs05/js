exports.middlewareGlobal = (req, res, next) =>{
    res.locals.errors = req.flash('errors');
    res.locals.success = req.flash('success');
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
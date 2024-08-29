exports.middlewareGlobal = (req, res, next) =>{
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
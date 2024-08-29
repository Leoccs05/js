const express = require('express')
const app = express();
const routes = require('./routes')
const path = require('path')
const {middlewareGlobal, outroMiddlewareGlobal} = require('./src/middlewares/middlewares')

app.use(express.urlencoded({extended: true}))

app.use(express.static(path.resolve(__dirname, 'public')))

app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

//Chamar todos os middles em todas as requesiçoes
app.use(middlewareGlobal)
app.use(outroMiddlewareGlobal)

app.use(routes)

app.listen(3000, () => {
    console.log('Servidor executando na porta 3000')
    console.log('Acessar pagina principal http://localhost:3000');
    console.log('Acessar pagina de contato http://localhost:3000/contato');
});
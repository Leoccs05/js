require('dotenv').config()

const express = require('express')
const app = express();
const mongoose = require('mongoose')
//SERA CONFIG NO DOTENV
//const connectionString = 'VALOR DO MONGO'

mongoose.connect(process.env.CONNECTIONSTRING/*connectionString*/)
    .then(() => {
        console.log('Agora aconexao ocorreu')
        //para que conecte a base de dados antes de iniciar o servidor
        app.emit('pronto')
    })
    .catch(e => console.log(e))

const session = require('express-session')
const MongoStore = require('connect-mongo');
const flash = require('connect-flash')

const routes = require('./routes')
const path = require('path')

const helmet = require('helmet')
const csrf = require('csurf')

const {middlewareGlobal, outroMiddlewareGlobal, checkCsrfError, csrfMiddleware} = require('./src/middlewares/middlewares')

app.use(helmet())

app.use(express.urlencoded({extended: true}))

app.use(express.static(path.resolve(__dirname, 'public')))

//configurar sessões
const sessionOptions = session({
    secret:'hjnuijrfnuifnesin   inA Jsndoa nodans osdkoaMdmaa()',
    store:MongoStore.create({mongoUrl: process.env.CONNECTIONSTRING}),
    resave: false,
    saveUninitializes: false,
    cookie:{
        maxAge: 1000 *60 *60 *24 *7,
        httpOnly: true
    }
})

app.use(sessionOptions);
app.use(flash())

app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

app.use(csrf())

//Chamar todos os middles em todas as requesiçoes
app.use(middlewareGlobal)
app.use(outroMiddlewareGlobal)
app.use(checkCsrfError)
app.use(csrfMiddleware)

app.use(routes)

//para que conecte a base de dados antes de iniciar o servidor
app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('Servidor executando na porta 3000')
        console.log('Acessar pagina principal http://localhost:3000');
        console.log('Acessar pagina de contato http://localhost:3000/contato');
    });
})

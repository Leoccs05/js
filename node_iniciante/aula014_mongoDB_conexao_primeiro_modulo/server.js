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

//para que conecte a base de dados antes de iniciar o servidor
app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('Servidor executando na porta 3000')
        console.log('Acessar pagina principal http://localhost:3000');
        console.log('Acessar pagina de contato http://localhost:3000/contato');
    });
})

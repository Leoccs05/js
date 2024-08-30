//env 'Senhas'
require('dotenv').config()
//inicia express
const express = require('express')
const app = express();
//inicia mongoose que vai modelar nossa base de dados, garantindo que os dados vao ser salvo como queremos
const mongoose = require('mongoose')
//mostra que o mongoose esta conectado
mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        console.log('Agora aconexao ocorreu')
        app.emit('pronto')
    })
    .catch(e => console.log(e))

//identifica navegador do cliente (salva um cookies no pc do cliente e checka cookie)
const session = require('express-session')

//Fazas sessões vao ser salva na base de dados e não na memoria
const MongoStore = require('connect-mongo');

//mensagem que assim que vc le elas se destroem (bom para feedback e Erros), flash é salvo em sessoe
const flash = require('connect-flash')

//rotas da sessoes(/home, /contato)
const routes = require('./routes')

//trabalha com caminhos
const path = require('path')

const helmet = require('helmet')

//cria um csrfToken para os formularios, nenhum site externo consegue posta coisa na nossa aplicação
const csrf = require('csurf')

//funçoes executada na rota
const {middlewareGlobal, outroMiddlewareGlobal, checkCsrfError, csrfMiddleware} = require('./src/middlewares/middlewares')

app.use(helmet())

//mostra que podemos posta formulario dentro
app.use(express.urlencoded({extended: true}))
app.use(express.json())
//todos arquivos q sao acessados diretamente (css, html, tudo no public)
app.use(express.static(path.resolve(__dirname, 'public')))

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

//o que é renderizado na tela aquivos
app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

//configurando
app.use(csrf())

//nossos middlewares
app.use(middlewareGlobal)
app.use(outroMiddlewareGlobal)
app.use(checkCsrfError)
app.use(csrfMiddleware)

//chamando as rotas
app.use(routes)

//escuta o evento do mongoose e autoriza receber evento 
app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('Servidor executando na porta 3000')
        console.log('Acessar pagina principal http://localhost:3000');
        console.log('Acessar pagina de contato http://localhost:3000/contato');
    });
})

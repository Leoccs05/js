const express = require('express')
const app = express();

app.get('/', (requisicao, resposta) =>{
    resposta.send(`
        <form action="/" method="POST">
            Nome do cliente: <input type="text" name="nome"></input>
            <button>Enviar Agora</button>
        </form>
    `)
});

app.post('/', (requisicao, resposta)=>{
    resposta.send('Recebi o formulario')
});

app.get('/contato', (requisicao, resposta) =>{
    resposta.send('Obrigado por entra em contato com a gente')
});

app.listen(3000, () => {
    console.log('Servidor executando na porta 3000')
    console.log('Acessar pagina principal http://localhost:3000');
    console.log('Acessar pagina de contato http://localhost:3000/contato');
});

//Nodemon faz o server atualiza sozinho sem precisar atualizar ele
//npm install nodemon --save-dev
//npx nodemon (nome do arquivo)
//no "scripts" do package.json criar: "start": "nodemon server.js"
//npm start
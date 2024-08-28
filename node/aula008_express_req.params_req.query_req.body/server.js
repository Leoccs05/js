const express = require('express')
const app = express();
//para tratar o body das requiciçoes, qualquer formulario nao seria tratado sem isso
app.use(express.urlencoded({extended: true}))

// /profiles/12345?campanha=googleadas$nome=la '12345'-paramentros da URL, ?-inicia query, 'campanha=googleadas'-query Strings, &-add mais query


app.get('/', (requisicao, resposta) =>{
    resposta.send(`
        <form action="/" method="POST">
            Nome do cliente: <input type="text" name="nome"></input>
            <button>Enviar Agora</button>
        </form>
    `)
});

app.post('/', (requisicao, resposta)=>{
    resposta.send(`Recebi o formulario <br> O que voce me enfio foi: ${requisicao.body.nome}`)
    console.log(requisicao.body)

});
//? dis que oide ou nao ter
app.get('/testes/:idUsuarios?/:paramentros?', (requisicao, resposta)=>{
    // o que vem da roda da url exemplo /profile/3
    console.log(requisicao.params);
    // o que vem da query strings /profile/?chave1=valor1
    console.log(requisicao.query);
   // resposta.send(requisicao.params/*.idUsuarios*/)
    resposta.send(requisicao.query.nome);
})
//parametros //localhost:3000/testes/123/252
//query //localhost:3000/testes/?nome=luiz&?sobrenome=Miranda&idade=30
app.get('/contato', (requisicao, resposta) =>{
    resposta.send('Obrigado por entra em contato com a gente')
});

app.listen(3000, () => {
    console.log('Servidor executando na porta 3000')
    console.log('Acessar pagina principal http://localhost:3000');
    console.log('Acessar pagina de contato http://localhost:3000/contato');
});
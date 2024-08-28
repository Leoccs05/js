const path =require('path')
const caminhoArquivo = path.resolve(__dirname, 'teste..json')
const escreve = require('./modules/escrever')
const ler = require('./modules/ler')

//cria o Json
/*const pessoas = [
    {nome: 'João'},
    {nome: 'Maria'},
    {nome: 'Eduardo'},
    {nome: 'Luiza'},
]
const json = JSON.stringify(pessoas, '', 2);
escreve(caminhoArquivo, json)*/

//Buscar os dados
async function leArquivo(caminho){
    const dados = await ler(caminho);
    renderizaDados(dados);
}

function renderizaDados(dados){
    //dados volta a ser um objeto
    dados = JSON.parse(dados);
    dados.forEach(val => console.log(val.nome))
}

leArquivo(caminhoArquivo);

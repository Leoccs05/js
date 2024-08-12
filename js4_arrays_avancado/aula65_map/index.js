///Dobre os dados
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];


const numMap = numeros.map(valor => valor * 2);
console.log(numMap)

//------------------------------------------------------

//retorne uma string com o nome da pessoa
//remove apenas a chave ''nome'' do objeto
//Adiciona uma cha id em cada objeto

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
]

const pessoasString = pessoas.map(obj => obj.nome)
console.log(pessoasString)

const pessoasNome = pessoas.map(obj => ({idade: obj.idade})) //delete obj.nome tbm funcionaria
console.log(pessoasNome)

const pessoasId = pessoas.map((obj, indice) => {
    const newObj = {... obj};
    newObj.id = indice;
    return newObj;
})
console.log(pessoasId)
///retorne numeros maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

/*function callbackFilter(valor){
    return valor > 10 ;
}*/

const numFilter = numeros.filter(valor /*indice, array*/ => /* console.log(valor, indice, array);*/ valor > 10)

//Filter sempre retorna array igual ou menor
console.log(numFilter)

//------------------------------------------------------

//retorne as pessoas que tem o nome com 5 letras ou mais
//retorne as pesssoas com mais de 50 anos
//retorne as pessoas cujo nome termina com 'a'

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
]

const pessoasLetras = pessoas.filter(obj => obj.nome.length >= 5);
console.log(pessoasLetras)

const pessoasIdade = pessoas.filter(obj => obj.idade > 50);
console.log(pessoasIdade)

const pessoasA = pessoas.filter(obj => obj.nome.toLocaleLowerCase().endsWith('a'))
console.log(pessoasA)
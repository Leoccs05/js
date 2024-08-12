///Some todos os numeros
//retorne um array com os pares (filter)
//retorne um array com o dobro dos valores 
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];


const numTotal = numeros.reduce(function(acumulador , valor){
    acumulador += valor
    return acumulador
}, 0) //0 é o valor inicial para o acumlador
console.log(numTotal)

const numPar = numeros.reduce(function(acumulador , valor){
    if (valor % 2 === 0) acumulador.push(valor)
    return acumulador
}, []) 
console.log(numPar)

const numDobro = numeros.reduce(function(acumulador , valor){
    acumulador.push(valor*2)
    return acumulador
}, [])
console.log(numDobro)

//------------------------------------------------------

//retorne a pessoa mais velha

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 7575},
    {nome: 'Wallace', idade: 547},
]

const pessoaVelha = pessoas.reduce(function(acumulador, valor){
    if (acumulador.idade > valor. idade) return acumulador;
    return valor;
})

console.log(pessoaVelha)

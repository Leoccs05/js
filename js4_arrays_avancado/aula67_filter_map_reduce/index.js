//retorne um array com o dobro dos pares
// Filter -> Pares
//   Map  -> Dobrar
// Reduce -> Somar

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

/*const numPar = numeros.filter(valor => valor % 2 === 0)
console.log(numPar)

const numDob = numPar.map(valor => valor * 2)
console.log(numDob)

const numSoma = numDob.reduce((acumulador, valor) => {
    acumulador += valor
    return acumulador 
})
console.log(numSoma)*/

const numPar = numeros.filter(valor => valor % 2 === 0).map(valor => valor * 2).reduce((acumulador, valor) => {
    return acumulador + valor;
})
console.log(numPar)

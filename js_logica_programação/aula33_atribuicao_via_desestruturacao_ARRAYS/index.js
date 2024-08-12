// ... rest, ... spread
/*const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000]
const [primeiroNumero, , teceironumero, ...resto] = numeros
console.log(primeiroNumero, teceironumero)
console.log(resto)*/
//                   0          1          2
//                0  1  2    0  1  2    0  1  2 
const numeros = [[1, 2, 3], [4, 5, 6], [7, 8, 9] ]
console.log(numeros[1][2])
//const [,[,,seis]] = numeros
//console.log(seis)
const [l1, l2, l3] = numeros
console.log(l2[2])
let num1 = 0.7;
let num2 = 0.1;

/*console.log(num1 + num2)
num1 += num2 //0.799999
num1 = parseFloat(num1.toFixed(2)) // para resolver o erro de calculo parsefloat ou number*/
//outra forma de resolver
num1 = ((num1 * 100) + (num2 * 100) / 100) //0.8


console.log(num1)
console.log(Number.isInteger(num1))


console.log(num1.toString() + num2)//tranforma numero para string temporariamente
//num1 = num1.toString(); tranforma numero para string permanentemente
console.log(num1.toString(2))// mostra a versão binaria, mas tem q ser number
console.log(num1.toFixed(2))//arredonda casa decimal
console.log(Number.isInteger(num1))//retorna booleanamente se o numero é intero
let temp = num2 * '5';
console.log(Number.isNaN(temp))
//IEEE 754-2008
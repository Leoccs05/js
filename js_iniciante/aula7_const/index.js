/* 
Não pode criar constantes com palavras reservadas Ex let console;
constantes precisa ter nomes significativos, para melhor entendimento;
Não pode começãr a constantes com Numero;
Nçao pode conter 'espaço e traço', então usar camelCase ex: nomeCompletoDoCliente;
São case-sensitive nomecliente diferente de nomeCliente;
Não pode modificar o valor de uma constantes
Não u-tilizar var, Utilizer const
*/
const primeiroNumero = '5';
const segundoNumero = 10;
const result = primeiroNumero * segundoNumero;
const resultaDuplicado = result * 2
let resultadoTriplicado = result * 3;
console.log(resultadoTriplicado);
resultadoTriplicado = resultadoTriplicado + 5;
console.log(resultadoTriplicado);
console.log(typeof primeiroNumero)
console.log(typeof segundoNumero)
console.log(primeiroNumero + segundoNumero) // + soma ou contatena ('5'10)
console.log(typeof(primeiroNumero + segundoNumero)) // para virar Number os 2 tem que ser number
console.log(typeof result)
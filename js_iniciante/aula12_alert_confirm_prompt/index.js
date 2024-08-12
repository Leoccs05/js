console.log('olá') //não retorna nada
//alert('Com a nossa mensagem');//Não retorna nada
// confirm('Tem certeza que quer apaga?'); entrega valor booleano
//const confirma = confirm('Realmente deseja apaga?'); o valor que o usuario entrega sera armazenado na const confirma
let num1 = prompt('Digite um numero'); //o valor que o usuario entrega sera armazenado em let num1
// todo numero que o prompt recebe é uma string
num1 = parseFloat(num1)
let num2 = prompt('Digite outro numero')
num2 = Number(num2)
/*let soma;
soma = (num1 + num2)
alert(`O resultado da sua conta deu ${soma}`)
*/
alert(`O resultado da sua conta deu ${num1 + num2}`)
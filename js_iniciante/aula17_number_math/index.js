const number = Number(prompt("Digite um numero"));
const numPrincipal = document.getElementById('num-Principal');
const texto = document.getElementById('texto');

numPrincipal.innerHTML = number;
//raiz quadrada pode ser feito com (number ** 0.5)
texto.innerHTML = " "; // para zerar a div
texto.innerHTML += `<p>Raiz quadrada: ${Math.sqrt(number)}</p>`
texto.innerHTML += `<p>${number} é inteiro: ${Number.isInteger(number)} </p>`
texto.innerHTML += `<p>É NaN: ${Number.isNaN(number)}</p>`
texto.innerHTML += `<p>Arredondando para cima: ${Math.floor(number)}</p>`
texto.innerHTML += `<p>Arredondando para baixo: ${Math.ceil(number)} </p>`
texto.innerHTML += `<p>Com duas casas decimais: ${number.toFixed(2)} </p>`
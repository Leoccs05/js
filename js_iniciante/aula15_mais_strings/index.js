//               01234567890123456789
let umaString = "um texto aparece um.";
console.log(umaString.indexOf('um', 8)) //saber em qual indice começa uma palavra o numero é para aparti de qual ele vai procura
console.log(umaString.lastIndexOf('um', 8)) // começa a procurar de tras para frente

console.log(umaString.match(/[a-z]/g)) //manda expressão regular encontra array por causa do 'g'
console.log(umaString.match(/[a-z]/)) 

console.log(umaString.search(/[a-z]/)) //mostra onde foi encontrado

console.log(umaString.replace('texto' , 'pagina')) //substitui a palavra
console.log(umaString.replace(/e/ , '#')) //usando expressão regular
console.log(umaString.replace(/e/g , '#')) //usando expressão regular

console.log(umaString.length)//tamanho da string

console.log(umaString.slice(3, 8)) //sepra o que vc pediu e 3 até 8
console.log(umaString.slice(-3)) //começa da onde cortou 20-3 17 umaString.length -3
console.log(umaString.substring(-3)) // mesma coisa de umaString.length -3
console.log(umaString.split(' ', 3)) //separa

console.log(umaString[4])//pega elemento do texto(indice)

console.log(umaString.charAt(6))//pega elemento do texto(indice) forma mais correta

console.log(umaString.concat('  em', ' um  lindo dia'))//concatenar strings
console.log(`${umaString} em um lindo dia parte2`)//concatenar strings

let umString = "Um \"texto\""; //colocar uma ""
console.log(umString)

let doiString = " um \\texto" //colocar uma barra invetida
console.log(doiString) 

console.log(doiString.toLocaleLowerCase()) // 1letra em minusculo
console.log(doiString.toLocaleUpperCase()) // 1letra em maiusculo
console.log(doiString.toLowerCase()) // tudo minusculo
console.log(doiString.toUpperCase()) // tudo maiusculo
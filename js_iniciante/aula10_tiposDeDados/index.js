// Dados Primitivos = String, numeber, undefined, null, boolean, symbol
const nome = 'Luiz';  // string
const nome1 = "Luiz"; // string
const nome2 = `Luiz`; // string

const num1 = 10;    // number
const num2 = 10.52; // number

let nomeAluno; // undefined = não aponta para local nenhum na memoria
const sobrenomeAluno = null; // Nulo -> não aponta para local nenhum na memoria
// eu quero apontar que não aponta para nenhum lugar colocar NULL, EX:Usuario não colocou a foto de perfil ent null

const aprovado = false; //Boolean = true, false (Logico)

console.log(typeof aprovado, aprovado)

//dados primitivo
//B é uma copia de A
let a = 2;
const b = a;
console.log(a, b); // 2, 2

a=3
console.log(a, b); //3,2


//Dados passados por referencia
//D aponta para o mesmo local na memoria de C
//array
let c = [1, 2];
const d = c;
console.log(c, d)

d.push(3)
console.log(c, d)
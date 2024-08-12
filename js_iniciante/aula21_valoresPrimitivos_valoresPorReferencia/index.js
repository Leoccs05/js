/*
Primitivos (imutaveis) - strings, number, boolean, undefined, null (brinint, symbol) - valores copiados
Referencia (mutavel)   - array, object, function - Passadeos por referencias
*/

// Imutaveis
let q = "A"
let w = q
console.log(q,w)
q = "B"
console.log(q,w)

//mutavel
let a = [1, 2, 3]
let b = a;
let c = [...a]; //para copiar o array
console.log(a, b)

a.push(4)
console.log(a, b)
console.log(c)

const p = {
    nome: 'Luiz',
    sobrenome: 'Otavio'
};
const e = {...p};

p.nome = 'Joao'
console.log(p);
console.log(e);

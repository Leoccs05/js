//For in -> le os indices ou chaves do objeto

/*const frutas = ['Abacaxi', 'Pera', 'Uva'];

/*for (let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
};*/

/*for (let i in frutas) {
    console.log(frutas[i]);
}*/

const pessoa = {
    nome: 'Leo',
    sobrenome: 'Cris',
    idade: 19
};

console.log(pessoa.nome);
console.log(pessoa['nome']);


for (const key in pessoa) {
    console.log(key, pessoa[key])
}


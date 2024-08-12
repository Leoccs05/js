/*const produto = {nome: 'caneca', preco: 1.8};
const outraCoisa = Object.assign({}, produto, {material: 'Grafitti'})
const outraCoisa = {... produto};

outraCoisa.nome = 'Lapis'
outraCoisa.preco = 2.25
console.log(produto)
console.log(outraCoisa)*/

/*const produto = {nome: 'caneca', preco: 1.8};
const outraCoisa = {nome: produto.nome};
Object.freeze(produto);
outraCoisa.nome = 'Lapis';
produto.nome = 'Lapis';

console.log(produto);
console.log(outraCoisa);

console.log(Object.keys(outraCoisa));*/

/*const produto = {nome: 'caneca', preco: 1.8};
console.log(Object.getOwnPropertyDescriptor(produto, 'nome')); 

Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false
});

produto.preco = 'Outra coisa';
console.log(Object.getOwnPropertyDescriptor(produto, 'nome')); */

/*const produto = {nome: 'caneca', preco: 1.8};
console.log(Object.values(produto));
console.log('-----------------------------------------');
console.log(Object.entries(produto));*/

const produto = {nome: 'caneca', preco: 1.8};
for ( let entry of Object.entries(produto)){
    console.log(entry)
};
for ( let [chave, valor] of Object.entries(produto)){
    console.log(chave, valor)
};
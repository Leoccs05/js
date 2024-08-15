//Construtora -> molde (classe)
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
   //this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}

//Pessoa.prototype === pessoa1.__proto__;
//prototype,  ajuda a melhorar a performace de velocidade do sistema;
//primeiro o motor do js procura em Pessoa e depois no prototype;

Pessoa.prototype.nomeCompleto = function(){
    return this.nome + ' ' + this.sobrenome;
}

//instancia
const pessoa1 = new Pessoa('Luiz', 'O.')
const pessoa2 = new Pessoa('Luiz', 'A.')

console.dir(pessoa1)
console.dir(pessoa2)
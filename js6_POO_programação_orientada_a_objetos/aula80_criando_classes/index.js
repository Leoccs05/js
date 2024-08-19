//classe é a mesma coisa de função construtora
class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    // falar já vai para o prototype
    falar(){
        console.log(`O Sr.${this.sobrenome} está falando.`)
    }
};

//Função construtora
function Pessoa2(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
};

Pessoa2.prototype.falar = function(){
    console.log(`O Sr.${this.sobrenome} está falando.`)
};

const p1 = new Pessoa('Luiz', 'Miranda');
const p2 = new Pessoa2('Luiz', 'Miranda');
console.log(p1)
console.log(p2)
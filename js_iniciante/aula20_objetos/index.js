const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala(){
        console.log(`Meu nome é ${this.nome} ${this.sobrenome} e tenho ${this.idade} anos`)
    },
    incrementarIdade(){
        this.idade++;
        console.log(`Semana que vou ter ${this.idade} anos`)
    }
};

pessoa.fala();
pessoa.incrementarIdade();

function criaPessoa(nome, sobrenome, idade){
    return{
        nome: nome, //pelo nomes serem igual nao precisa ser nome: nome
        sobrenome,
        idade
    };
}
const pessoa1 = criaPessoa('Luiz', 'Miranda', 25)
const pessoa2 = criaPessoa('Cris', 'arnaldo', 19)
const pessoa3 = criaPessoa('Fabio', 'Cristo', 69)

console.log(pessoa2)
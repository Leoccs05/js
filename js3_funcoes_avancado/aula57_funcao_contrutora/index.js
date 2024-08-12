//funçõa contrutora -> objetos
//contrutora -> Pessoa (new)

function Pessoa(nome, sobrenome){
    //this = atributos ou metodos publicos
    //Pessoa.nome = nome
    this.nome = nome;
    this.sobrenome = sobrenome;
    
    //privados
    const ID = 1234456;

    const metodoInterno = function(){

    };


    this.metodo = function(){
        console.log(this.nome + ': Sou uma pessoa')
    };
}

const p1 = new Pessoa('luiz', 'Otavio');
const p2 = new Pessoa('Fernandes', 'de Lima');

p2.metodo()
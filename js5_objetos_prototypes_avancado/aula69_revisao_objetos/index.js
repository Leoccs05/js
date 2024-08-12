// liteal '' 1122 [] function {}

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otavio'
};

console.log(pessoa.nome)
console.log(pessoa['nome', 'sobrenome'])

//Acessar dinamicamente
const chave = 'nome'
console.log(pessoa[chave])

const pessoa1 = new Object();
pessoa1.nome = 'Felipe';
pessoa1.sobrenome = 'Franco';
pessoa1.idade = 30;
pessoa1.falarNome = function(){
    return (`${this.nome} esta falando`)
};

pessoa1.getDataNacimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}

console.log(pessoa1)
console.log(pessoa1.falarNome())
console.log(pessoa1.getDataNacimento())

for (let chave  in pessoa1){{
    console.log(pessoa1[chave])
}}

delete pessoa1.nome

console.log(pessoa1)

//factory faction
    function criaPessoa (nome, sobrenome){
        return{
            nome,
            sobrenome,
            get nomeCompleto(){
                return `${this.nome} ${this.sobrenome}`
            }
        }
    }

    const p1 = criaPessoa('Felipe', 'Fernando')
    console.log(p1.nomeCompleto)


// constructor function

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this)
    //nao é mais possivel manipular o objeto, apos freeze
}
//new cria {} atrela this no objeto{} e retorna o this
const p2 = new Pessoa('Luiz', 'Fabiano')
//p1 = (endereçoMemoria) -> 'Valor'
//p1.endereçoMemoria = {nome: 'Outra Coisa'}
p2.nome = 'Outra coisa'
Object.freeze(p2)
p2.nome = 'Cristiano'
const p3 = new Pessoa('Mateus', 'Santin')
console.log(p2)
console.log(p3)


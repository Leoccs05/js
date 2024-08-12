const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    //idade: 30,
    endereco: {
        rua: 'Av Brasil',
        //numero: 320,
    },
}

const {nome, sobrenome: s, idade='Idade Desconhecida', endereco: {rua, numero: n = 157}} = pessoa
console.log(nome, s, idade, n)
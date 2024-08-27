/*const nome = 'Luiz'
const sobrenome = 'Miranda';

const falaNome = () => nome+ ' ' +sobrenome
console.log(module)

//module.exports.nome = nome
//module.exports.sobrenome = sobrenome
//module.exports.falaNome = falaNome
exports.NOME = nome
exports.sobrenome = sobrenome
exports.falaNome = falaNome
this.qualquerCoisa = 'Oque quiser exportar'
console.log(module.exports)*/

class Pessoa{
    constructor(nome){
        this.nome = nome
    }
};

exports.Pessoa = Pessoa;

const nome = 'Fe'
const sobrenome = 'Cris'

//exports.qualquerCoisa = 'Oque quiser exportar' não funciona pq rescreve o exports
module.exports = {
    nome, sobrenome, Pessoa
};


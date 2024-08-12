function retornFuncao(nome) {
    return function() {
        return nome
    }
}

const funcao = retornFuncao('luiz');
const funcao2 = retornFuncao('joao');
console.dir(funcao(), funcao2())
console.log(funcao(), funcao2())

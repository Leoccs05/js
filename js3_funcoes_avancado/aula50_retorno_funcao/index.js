//return - retorna ali - termina funcao ali

function criaMultiplicador (multiplicador){
    return function(n) {
        return n * multiplicador
    };
}

const duplica = criaMultiplicador(2)
console.log(duplica(2))
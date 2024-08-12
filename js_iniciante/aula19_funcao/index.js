function saudacao(nome) {
    //console.log(`Bom dia ${nome}!`)
    return `Bom dia ${nome}!`
    
}

const variavel = saudacao('Luiz')
console.log(variavel)

function soma(x = 0, y = 0){
    const result = Number(x + y)
    return result
}
console.log(soma())
console.log(soma(1))
const result = soma(1,1)
console.log(result)
console.log(soma(2,2))

const raiz = function(n){
    return n ** 0.5;
};

console.log(`A raiz quadrada é ${raiz(9)}`)

//Arrow Function

const rai = n => n ** 0.5;
console.log(`A raiz quadrada é Arrow ${rai(25)}`)

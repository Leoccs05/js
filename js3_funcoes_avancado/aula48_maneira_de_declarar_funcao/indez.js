//Declaração de função (Function Hoisting)
falaOi()
function falaOi(){
    console.log('Oie')
};

//fist-class objects
// function expression
const souUmDado = function () {
    console.log('Sou um dado')
};
souUmDado();

function executaFuncao (funcao) {
    console.log('Vou executar a função abaixo:')
    funcao()
}
executaFuncao(souUmDado);

//Arrow Function

const funcaoArrow = () => {
    console.log('sou uma arrow function')
}
funcaoArrow();

//Dentro de Objeto
const obj = {
    falar(){
        console.log('Estou falando')
    }
};
obj.falar()
function funcao(){
    let total = 0;
    console.log(arguments)
    for (let argumento of arguments){
        total += argumento;
    }
    console.log(total)
}
funcao(1, 2, 3, 4, 5, 6, 7, 8, 9);
//--------------------------------------
function funca(a, b, c, d, e, f){
    console.log(a, b, c, d, e, f)
}
funca(1, 2, 3, );
//--------------------------------------
function func(a, b = 6, c =4){
    console.log(a + b + c)
}
func(2, undefined, 20);
//--------------------------------------
function fun([nome, sobrenome, idade]){
    console.log(nome, sobrenome, idade)
}
fun(['Leo','Otavio', '30']);
//--------------------------------------
function fu(operador, acumulador, ...numeros){
    for (let numero of numeros){
       if(operador === '+' ) acumulador += numero;
       if(operador === '-' ) acumulador += numero;
       if(operador === '/' ) acumulador += numero;
       if(operador === '*' ) acumulador += numero;
    }
    console.log(acumulador);
}

fu('', 0, 20, 30, 40, 50)
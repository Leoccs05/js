/*for (let i = 0; i < nome.length; i++){
    console.log(nome[i]);
}*/

/*for (let i in nome){
    console.log(nome[i])
}*/

//for classico - geralmente com interaveis (Arrays ou strings)
//for in - Retorna indice ou chave (String, array ou objeto)
//for of - Retorna o valor em si (iteraveis, arrays ou strings)

const nome = ['Leo', 'Casadei'];


for (let valor of nome){
    console.log(valor)
}

console.log('---------')

nome.forEach(function (valor,indice){
    console.log(valor, indice);
});




function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min)+ min);
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) =>{
        if(typeof msg !== 'string') reject('Bad Value')
        setTimeout(() =>{
            resolve(msg);
        },tempo);
    })

}
//chama resolve then é executado
//chama reject catch é executado
esperaAi('Conexão com a base', rand(1, 3))
.then(resposta => {
    console.log(resposta);
    return esperaAi(222222, rand(1, 3))
})
.then(resposta => {
    console.log(resposta);
    return esperaAi('Tratando dados', rand(1, 3))
})
.then(resposta => console.log(resposta))
.then(() => console.log('Exibir dados na tela'))
.catch(e => console.log('Erro: ', e))

function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min)+ min);
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) =>{
        /*if(typeof msg !== 'string') {
            reject('Bad Value');
            return;
        }*/
        setTimeout(() =>{
            if(typeof msg !== 'string') {
                reject('Bad Value');
                return;
            }
            resolve(msg.toUpperCase() + ' - Passei na promise');
        },tempo);
        })

}

//Promise.all - Se voce so quer que resolva e traga todos os valores, ou se falhar retorna so a falha
/*const promises = [
    'primeiro valor',
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 500),
    esperaAi(//*222* ou *'Promise 3'*, 1000),
    'Outro valor'
]

Promise.all(promises)
    .then(function(valor){
        console.log(valor);
    })
    .catch(function(erro){
        console.log(erro);
    })*/

    //Promise.race - retorna o 1° valor resolvido
    const promise = [
        esperaAi('Promise 1', rand(1, 5)),
        esperaAi('Promise 2', rand(1, 5)),
        esperaAi('Promise 3', rand(1, 5)),
        esperaAi(1000, rand(1, 5)),
       // 'Outro valor' entraga string normal primeiro
    ]

    Promise.race(promise)
    .then(function(valor){
        console.log(valor);
    })
    .catch(function(erro){
        console.log(erro);
    })

    //Promise.resolve cai no then

    function baixaPagina(){
        const emCache = true;

        if(emCache){
            return Promise.resolve('Pagina em cache');
        }else {
            return esperaAi('Baixei a pagina', 3000)
        }
    }
    baixaPagina()
    .then(dadosPagina => console.log(dadosPagina))
    .catch(e=> console.log(e))

    // Promise.reject cai no catch

    function baixaPag(){
        const emCache = true;

        if(emCache){
            return Promise.reject('Pagina em cache');
        }else {
            return esperaAi('Baixei a pagina', 3000)
        }
    }

    baixaPag()
    .then(dadosPagina => console.log(dadosPagina))
    .catch(e => console.log('ERROR', e))

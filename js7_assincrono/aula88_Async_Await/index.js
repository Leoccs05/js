function rand(min=0, max=3){
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
        });
}

async function executar() {

   /*const fase1 = await esperaAi('Fase 1', rand());
   console.log(fase1);

   const fase2 = await esperaAi('Fase 2', rand());
   console.log(fase2);

   const fase3 = await esperaAi('Fase 3', rand());
   console.log(fase3);
   console.log('Terminamos na fase: ', fase3);*/

   //para tratar erro try/catch
   try{
    const fase1 = esperaAi('Fase 1', 100);
   console.log(fase1);

   setTimeout(() =>{
    console.log('Estava pendente: ', fase1);
    }, 500);

   const fase2 = await esperaAi(2, rand());
   console.log(fase2);

   const fase3 = await esperaAi('Fase 3', rand());
   console.log(fase3);
   console.log('Terminamos na fase: ', fase3);
   } catch(e){
    console.log(e)
   }
}
executar();

/* Estados Promise
* Pending: (se tirar o await) ela vai para o servidor,mas chamo antes do valor retorna
* fullfilded: resolvida
* rejeict: rejeitada
*/
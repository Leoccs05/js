/*const nome = 'luiz'
let cont = 0;

while (cont <= 10){
    console.log(cont);
    cont++;
}*/

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = random(min, max);

while (rand !== 10){
    rand = random(min, max);
    console.log(rand)
}

// do primeiro executa e depois verifica
do{
    rand = random(min, max);
    console.log(rand)
} while(rand !== 10);
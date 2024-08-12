/*const tresH = 60 * 60 * 3 * 1000;
const umDia = 60 * 60 * 24 * 1000;
const data = new Date(0 + tresH +umDia);*/
//const data = new Date(2005, 3, 27, 15, 14, 27 , 1000) // 27/04/2005 15:14:27 0-Janeiro

/*const data = new Date('2005-04-27 20:20:59.100')
console.log('Dia', data.getDate());
console.log('Mes', data.getMonth()+1);
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia semana', data.getDay()); //0-Domingo, 6-Sabado

console.log(data.toString());
console.log(Date.now()) //data agora em milesimo de segundo*/

function zeroAEsq (num){
    return num >= 10 ? num : `0${num}`;
}

function formataData(data){
    const dia  = zeroAEsq(data.getDate());
    const mes  = zeroAEsq(data.getMonth()+1);
    const ano  = zeroAEsq(data.getFullYear());
    const hora = zeroAEsq(data.getHours());
    const min  = zeroAEsq(data.getMinutes());
    const seg  = zeroAEsq(data.getSeconds());
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}` 
}

const data = new Date();
const dataBr= formataData(data);
console.log(dataBr);
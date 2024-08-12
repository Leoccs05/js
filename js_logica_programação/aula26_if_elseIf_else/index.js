/*
0-11 - bom dia 
12-17 - boa tarde
17-0 - boa noite
*/

// 'if' pode ser usado sozinho
// Sempre que utilizar 'else if' ou 'else' tem que ter 'if' antes
// Pode ter varios 'else if' na checagem
// Só pode ter um 'else' na checagem
// Pode usar condiçoes sem 'else if', utilizando apenas 'if' e 'else'

const hora = 18;

if (hora >= 0 && hora<=11) {
    console.log('bom Dia');
} else if (hora >= 12 && hora<=17){
    console.log('boa Tarde');
} else if ((hora >= 18 && hora<=23)){
    console.log('boa Noite')
} else{
    console.log('Tenha um dia exelente')
}

const tenhoGrana = true;

if (tenhoGrana){
    console.log('Vou sair de casa')
} else{
    console.log('Não vou sair de casa')
}
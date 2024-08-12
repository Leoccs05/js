/*const h1 = document.querySelector('.container h1');
const data = new Date();

function getDiaSemanaTexto (diaSemana){
    let diaSemanaTexto;

    switch(diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto
        case 1:
            diaSemanaTexto = 'Segunda';
            return diaSemanaTexto
        case 2:
            diaSemanaTexto = 'Terça';
            return diaSemanaTexto
        case 3:
            diaSemanaTexto = 'Quarta';
            return diaSemanaTexto
        case 4:
            diaSemanaTexto = 'Quinta';
            return diaSemanaTexto
        case 5:
            diaSemanaTexto = 'Sexta';
            return diaSemanaTexto
        case 6:
            diaSemanaTexto = 'Sabado';
        return diaSemanaTexto
        default:
            diaSemanaTexto = 'Sem dia';
     } 
}

function getNomeMes(nomeMes){
    let nomeMesTexto;

    switch(nomeMes) {
        case 0:
            nomeMesTexto = 'Janeiro';
            return nomeMesTexto
        case 1:
            nomeMesTexto = 'Fevereiro';
            return nomeMesTexto
        case 2:
            nomeMeTextos = 'Março';
            return nomeMesTexto
        case 3:
            nomeMesTexto = 'Abril';
            return nomeMesTexto
        case 4:
            nomeMesTexto = 'Maio';
            return nomeMesTexto
        case 5:
        nomeMesTexto = 'Junho';
            return nomeMesTexto
        case 6:
            nomeMesTexto = 'Julho';
        return nomeMesTexto
        case 7:
            nomeMesTexto = 'Agosto';
        return nomeMesTexto
        case 8:
            nomeMesTexto = 'Setembro';
        return nomeMesTexto
        case 9:
            nomeMesTexto = 'Outubro';
        return nomeMesTexto
        case 10:
            nomeMesTexto = 'Novembro';
        return nomeMesTexto
        case 11:
            nomeMesTexto = 'Dezembro';
        return nomeMesTexto
     } 
}

function zeroAEsq (num){
    return num >= 10 ? num : `0${num}`;
}

function criaData (data) {
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes= getNomeMes(numeroMes);

    return `${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()} ${zeroAEsq(data.getHours())}:${zeroAEsq(data.getMinutes())}`;
}

h1.innerHTML = criaData(data);*/
/*--------------------------------------------------------------------------------------------------------
                                A melhor

const h1 = document.querySelector('.container h1');
const data = new Date();
/*const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
};*/
//h1.innerHTML = data.toLocaleDateString('pt-BR', { dateStyle: 'full'/*, timeStyle: 'short'*/})
//--------------------------------------------------------------------------------------------------------
const h1 = document.querySelector('.container h1');
const data = new Date();

function getDiaSemanaTexto (diaSemana){
    const diasSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado']
    return diasSemana[diaSemana]
}

function getNomeMes(nomeMes){
   const meses = ['janeiro', 'fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
   return meses[nomeMes];
}

function zeroAEsq (num){
    return num >= 10 ? num : `0${num}`;
}

function criaData (data) {
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes= getNomeMes(numeroMes);

    return `${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()} ${zeroAEsq(data.getHours())}:${zeroAEsq(data.getMinutes())}`;
}

h1.innerHTML = criaData(data);
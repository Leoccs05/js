// (condição) ?'Valor para verdadeiro' :'valor para falso';
const pontUsuario = 1000
const nivelUsuario = pontUsuario >= 1000 ? 'Usuario Vip' : 'Usuario Normal';

const corUsuario = null;
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao)

/*if (pontUsuario >= 1000){
    console.log('Usuario Vip');
} else {
    console.log('Usuario Normal');
}*/
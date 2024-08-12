/*
&& -> false && true -> false "o valor mesmo"
|| ->
FALSY
*false
0
'' "" `´ (string vazia)
null / undefined
NaN
*/
console.log('Luiz' && 'Maria')
console.log("-----------")
console.log('Luiz' && undefined && 'Maria')
console.log("-----------")

function falaOi() {
    return 'oi';
}

let vaiExec = 'joao';
console.log(vaiExec && falaOi());

vaiExec = 0;
console.log(vaiExec && falaOi());

console.log("-----------")

console.log(0 || false || null || 'Luiz' || true);

console.log("-----------")

const corUsuario = null;
const corPadrao = corUsuario || 'preto';
console.log(corPadrao)

console.log("-----------")
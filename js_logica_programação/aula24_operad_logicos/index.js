/*
&& -> AND -> E      (Todas as expressões precisam ser "verdadeiras" para retorna "true")
|| -> OR  -> OU
!  -> NOT -> NÃO
*/

const usuario = 'Luiz'; //form usuario digitou
const senha = '123456'; //form usuario digitou

const vaiLogar = usuario === 'Luiz'/*base de dados*/ && senha === '12345';/*base de dados*/
console.log(vaiLogar)

console.log("-----------")

let expressao = true && true && true && true && true;
console.log(expressao)

expressao = true && true && false && true && true;
console.log(expressao)

console.log("-----------")

expressao = true || true || true || true || true;
console.log(expressao)

expressao = true || true || false || true || true;
console.log(expressao)

expressao = false || false || false || false || false;
console.log(expressao)

console.log("-----------")

expressao = !false;
console.log(expressao)

expressao = !true;
console.log(expressao)

expressao = !!true;
console.log(expressao)

expressao = !false;
console.log(!expressao)


// g - global(encontra todas as ocorrencia)
// i - insensitive
//() - criar grupo
//| ou

const {texto} = require('./base')

const regExp1 = /(maria|joão|luiz)(, hoje sua esposa)/gi;
const found = regExp1.test(texto)

if (found) {
 console.log(found[0]);
 console.log(found[1]);
 console.log(found[2]);
}


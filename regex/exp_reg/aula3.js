const {texto, arquivos} = require('./base')
//* (opcional)      0 ou n {0,}
//+ (obrigatorio)   1 ou n  {1,}
//? (opcional)      0 ou 1  {0,1}
//{n,m} minimo e maximo

console.log(texto)
const regExp1 =/Jo+ão+/gi
console(texto.match(regExp3))

const regExp2 = /\.jpe?g/gi
//const regExp2 = /\.jpe{0,1}g/gi
for(const arquivo of arquivos){
    const valido = arquivo.match(regExp2)

    //if(!valido) continue

    console.log(arquivo, valido)
}
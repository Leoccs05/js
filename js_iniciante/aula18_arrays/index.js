//               0        1        2
const alunos= ['Luiz', 'Maria', 'João']
console.log(alunos)
console.log(alunos[1])
alunos[0] = 'Felipe';
console.log(alunos)
alunos.push('Luciano')//alunos[alunos.length] = 'Luciano' alunos[3]='Luciano'; Adiciona no final
console.log(alunos)
alunos.unshift('Luiza') // add no inicio
console.log(alunos)
const removidoAluno = alunos.pop(); //Exclui do final e salva 
console.log(alunos)
alunos.shift() // remove o primeiro
console.log(alunos)
console.log(removidoAluno)
console.log(alunos.slice(0, 2)) // ultimos elemento nao é incluido no caso entraria 2 slice(0,1) exclui o ultimo indice do array
console.log(typeof alunos);
console.log(alunos instanceof Array);
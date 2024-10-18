let p = 10
p = 0b1010
const q = 10 // tipo de y é literal
//let a: 100 = 100
let a= 100 as const;
const person={
  nome: 'Luiz' as const,
  sobrenome: 'Miranda'
}

function escolhaAsCores(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
  return cor;
}

console.log(escolhaAsCores('Vermelho'))

//Array<T> / T[]
function multiplicArgs(...args: Array<number>): number{
  return args.reduce((ac, valor) => ac * valor, 1)
}

function concatenaStrings(...args: string[]): string{
  return args.reduce((ac, valor) => ac + valor)
}
function toUpperCase(...args: string[]): string[]{
  return args.map((valor) => valor.toUpperCase());
}

const result1 = multiplicArgs(1, 2, 3);
const concatenacao = concatenaStrings('a', 'b', 'c')
const upper = toUpperCase('a', 'b', 'c')

console.log(result1)
console.log(concatenacao)
console.log(upper)

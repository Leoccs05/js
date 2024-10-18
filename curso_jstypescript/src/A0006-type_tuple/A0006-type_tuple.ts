//Tuple
const dadosCliente1: readonly[number, string] = [1, 'Luiz']
const dadosCliente2:[number, string, string] = [1, 'Luiz', 'Miranda']
const dadosCliente3:[number, string, string?] = [1, 'Luiz']
const dadosCliente4:[number, string, ...string[]] = [1, 'Luiz', 'miranda', 'fabio']

//dadosCliente1[0]= 100;
dadosCliente2[1]= 'Carlos'

console.log(dadosCliente1)
console.log(dadosCliente2)
console.log(dadosCliente3)
console.log(dadosCliente4)

//readonly array
const array: readonly string[] = ['Luiz', 'Otavio'];
const array1: ReadonlyArray<string> = ['Luiz', 'Otavio']
console.log(array)
console.log(array1)

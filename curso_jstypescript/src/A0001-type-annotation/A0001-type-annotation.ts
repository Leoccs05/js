//tipos basicos (ocorre inferenncia de tipos)
let nome: string = 'Luiz';
let idade: number = 30;
let adulto: boolean = true;
let simbolo: symbol = Symbol('qualquer-symbol');

//Arrays
let arrayDeNumeros: Array<number> = [1,2,3]
let arrayDeStrings: Array<String> = ['a', 'b']
let arrayDeNumeros2: number[] = [1,2,3]

//Objetos
let pessoa: { nome: string, idade: number, adulto?:boolean} = {
  idade: 30,
  nome: 'Luiz'
}
console.log(pessoa)

//funçoes
function soma(x:number, y:number): number{
  return x+y;
}
const result = soma(2, 5)
const soma2: (a:number, b:number) => number = (a,b) => a+b

export function funcao(this: Date, name: string, age:number): void{
  console.log(this)
  console.log(name, age)
}
//funcao('Luz', 30) nao funciona
//          quem é o this, arg da funcao
funcao.call(new Date(), 'Luz', 30)
funcao.apply(new Date(), ['Luz', 30])

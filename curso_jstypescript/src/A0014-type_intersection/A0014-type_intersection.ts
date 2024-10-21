type TemNome = {nome:string};
type TemSobrenome = {sobrenome: string};
type TemIdade = {idade: number};
type Pessoa1 = TemNome & TemSobrenome & TemIdade;

type AB = 'A' | 'B'
type AC = 'A' | 'C'
type Intersecao = AB & AC

const pessoa4: Pessoa1  ={
  nome: 'luiz',
  sobrenome: 'Miranda',
  idade: 30
}

console.log(pessoa4)

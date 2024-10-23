export class Pessoa {
  static idadePadrao = 0;
  static cpfPadrao = '000.000.000-00'
  constructor (
     public nome: string,
     public sobrenome: string,
     public idade: number,
     public cpf: string
  ){}

  metodoNormal(): void{
    console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao)
  }

  //nao tem acesso pela instancia e sim pela classe
  static criaPessoa(nome: string, sobrenome: string): Pessoa{
    return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, this.cpfPadrao)
  }
}

const pessoa = new Pessoa('Maria', 'Arroz', 29, '000.000.000-12')
const pessoa1 = Pessoa.criaPessoa('Joao', 'Feijao')
console.log(pessoa)
console.log(pessoa1)
pessoa.metodoNormal()
console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao)

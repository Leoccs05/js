export class Pessoa {
  constructor (
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private _cpf: string
  ){
    //opcional para chamar o setter
    //this.cpf = _cpf
  }
  /*
  setCpf(valor: string): void{this.cpf = valor}
  getCpf(): string{return this.cpf.replace(/\D/g, '');}
  */

  set cpf(cpf: string){
    console.log('setter chamado')
    this._cpf = cpf
  }

  get cpf(): string{
    console.log('getter chamado')
    return this._cpf.replace(/\D/g, '');

  }

}

const pessoa = new Pessoa('Maria', 'Arroz', 29, '000.000.000-00')
//igual(=) chama set
pessoa.cpf = '123.456.789-99'

//get
console.log(pessoa.cpf)

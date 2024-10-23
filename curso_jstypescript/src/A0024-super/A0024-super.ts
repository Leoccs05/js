//superclasse
export class Pessoa {
  constructor (
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string
  ){}

  getIdade(): number {
    return this.idade;
  }

  getCpf(): string{
    return this.cpf;
  }

  getNomeCompleto(): string{
    return 'Sou uma Pessoa: ' + this.nome + ' ' + this.sobrenome;
  }
}

//subclasse
export class Aluno extends Pessoa{
  //sala: string
  //nome = valor que esta recebendo
  constructor (nome: string,sobrenome: string,idade: number, cpf: string, public sala: string){
    super(nome, sobrenome, idade, cpf)
    //this.sala = sala
  }

  getNomeCompleto(): string {
    console.log('-----Apresentaçao Aluno-----')
    return super.getNomeCompleto();
  }
}
//subclasse
export class Cliente extends Pessoa{
  getNomeCompleto(): string {
    const result = super.getNomeCompleto()
    return result + ' Kanye West'
  }
}


const pessoa = new Pessoa('Maria', 'Arroz', 29, '000.000.000-00')
const aluno = new Aluno('Luiz', 'Miranda', 30, '000.000.000-01', '0001')
const cliente = new Cliente('Joao', 'Feijao', 31, '000.000.000-02')

console.log(pessoa, pessoa.getNomeCompleto())
console.log(aluno, aluno.getNomeCompleto())
console.log(cliente, cliente.getNomeCompleto())

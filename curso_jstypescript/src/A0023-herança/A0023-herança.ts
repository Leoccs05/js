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

export class Aluno extends Pessoa{
  getNomeCompleto(): string {
    return 'Sou um Aluno: ' + this.nome + ' ' + this.sobrenome;
  }
}
export class Cliente extends Pessoa{
  getNomeCompleto(): string {
    return 'Sou um Cliente: ' + this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Maria', 'Arroz', 29, '000.000.000-00')
const aluno = new Aluno('Luiz', 'Miranda', 30, '000.000.000-01')
const cliente = new Cliente('Joao', 'Feijao', 31, '000.000.000-02')

console.log(pessoa, pessoa.getNomeCompleto())
console.log(aluno, aluno.getNomeCompleto())
console.log(cliente, cliente.getNomeCompleto())

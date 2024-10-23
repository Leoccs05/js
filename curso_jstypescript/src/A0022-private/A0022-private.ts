export class Empresa {
  readonly nome: string; //public pode ser usado em qualquer lugar
  private readonly colaboradores: Colaborador[] = [];//private acessivel apenas na classe que foi criada, protege dados sensiveis, para disponipilizar os dados fora da classe criar metodos public
  protected readonly cnpj: string; //protected -

  constructor(nome: string, cnpj: string){
    this.nome = nome;
    this.cnpj = cnpj
  }

  adicionaColaborador(colaborador: Colaborador): void{
    this.colaboradores.push(colaborador)
  }

  showColaboradores(): void{
    for(const colaborador of this.colaboradores){
      console.log(colaborador)
    }
  }
}

export class Colaborador {
  constructor(public readonly nome:string, public readonly sobrenome:string){}//em atalhos tem que avisar que é public/private/protected
}

const empresa1 = new Empresa('Udemy', '11.111.111/0001-11')
const coloborador1 = new Colaborador('Felipe', 'Otavio')
const coloborador2 = new Colaborador('Joao', 'Feijao')
const coloborador3 = new Colaborador('Maria', 'Arroz')
empresa1.adicionaColaborador(coloborador1)
empresa1.adicionaColaborador(coloborador2)
empresa1.adicionaColaborador(coloborador3)
console.log( empresa1.nome)
empresa1.showColaboradores()

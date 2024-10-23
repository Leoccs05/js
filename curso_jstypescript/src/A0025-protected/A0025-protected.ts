export class Empresa {
  readonly nome: string; //public pode ser usado em qualquer lugar
  protected readonly colaboradores: Colaborador[] = [];//private acessivel apenas na classe que foi criada, protege dados sensiveis, para disponipilizar os dados fora da classe criar metodos public
  private readonly cnpj: string; //protected -

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

export class Udemy extends Empresa{
  constructor(){
    super('Udemy', '11.111.11/0001-11')
  }

  popColaborador(): Colaborador | null{
    const colaborador = this.colaboradores.pop()
    if (colaborador) return colaborador;
    return null
  }
}

const empresa1 = new Udemy()
const coloborador1 = new Colaborador('Felipe', 'Otavio')
const coloborador2 = new Colaborador('Joao', 'Feijao')
const coloborador3 = new Colaborador('Maria', 'Arroz')
empresa1.adicionaColaborador(coloborador1)
empresa1.adicionaColaborador(coloborador2)
empresa1.adicionaColaborador(coloborador3)
const colaboradorRemovido = empresa1.popColaborador()
console.log(empresa1)
console.log('Demetido: ', colaboradorRemovido)

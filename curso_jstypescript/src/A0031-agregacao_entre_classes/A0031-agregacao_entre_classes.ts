export class CarrinhoDeCompras{
  private readonly produtos: Produto[] = [];

  inserirProdutos(...produtos: Produto[]): void {
    for (const produto of produtos) {
      this.produtos.push(produto)
    }
  }

  quantidadeProdutos(): number{
    return this.produtos.length
  }

  valorTotal(): number{
    return this.produtos.reduce((soma, produto) => soma + produto.preco, 0)
  }
}

export class Produto{
  constructor(public nome: string, public preco: number){}
}

const produtos1 = new Produto('Camiseta', 49.9)
const produtos2 = new Produto('Caneta', 1.9)
const produtos3 = new Produto('Caneca', 0.9)
const carrinhoDeCompras = new CarrinhoDeCompras()
carrinhoDeCompras.inserirProdutos(produtos1, produtos2, produtos3)
console.log(carrinhoDeCompras)
console.log(carrinhoDeCompras.quantidadeProdutos())
console.log(carrinhoDeCompras.valorTotal())

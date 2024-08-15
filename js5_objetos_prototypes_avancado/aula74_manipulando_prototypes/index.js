/*//new Object -> object.prototype
const objA = {
    chaveA: "A",
    //__proto__: Object.prototype
};
const objB = {
    chaveB: "B",
    //__proto__: ObjA?
};

const objC = new Object();
objC.chaveC = 'C';


// Object.setPrototypeOf(QUEM VAI SER CONFIGURADO, QUEM VAI SER O OBJETO)                  
Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);
console.log(objB.chaveA)*/

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}
//
Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual/100))
}

Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual/100))
}

const p1= new Produto('Camiseta', 50);
p1.desconto(10)
p1.aumento(10)
console.log(p1)

//chaves tem que ser igual
//Literal
const c1 = {
    nome: 'Caneca',
    preco: 100
};
//c1 não tem aumento e desconto
Object.setPrototypeOf(c1, Produto.prototype)
//c1 agora tem aumento e desconto e o Construtor do produto Literal é a função Produto;
c1.desconto(10)
c1.aumento(10)
console.log(c1)

const p2 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 100
    },
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 1
    }
});
/*p2.preco = 113; pode ser assim ou preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    }*/
p2.aumento(10)
console.log(p2)


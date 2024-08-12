// defineProperty
function Produto(nome, preco, estoque){

    Object.defineProperties(this, {
        nome:{
            enumerable: true,   //mostra chave
            value: nome,     //valor
            writable: false,    //Pode alterar o valor
            configurable: true  //Configuravel
        },
        preco:{
            enumerable: true,   //mostra chave
            value: preco,     //valor
            writable: false,    //Pode alterar o valor
            configurable: true  //Configuravel
        }
    });
    /*Object.defineProperty(this, 'estoque', {
        enumerable: true,   //mostra chave
        VALUE: estoque,     //valor
        writable: false,    //Pode alterar o valor
        configurable: true  //Configuravel
    });*/

    Object.defineProperty(this, 'estoque', {
        enumerable: true,   //mostra chave
        value: estoque,     //valor
        writable: false,    //Pode alterar o valor
        configurable: true  //Configuravel
    });
};

const p1 = new Produto('Camiseta', 20, 3);

console.log(p1);

for (const key in p1) {
        console.log(key)
}

p1.estoque = 50000
//delete p1.estoque;
console.log(p1);
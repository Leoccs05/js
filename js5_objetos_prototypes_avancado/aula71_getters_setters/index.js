
function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    let estoquePrivada = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true,   //mostra chave
       configurable: true,  //Configuravel
       get: function(){
        return estoquePrivada;
       },
       set: function(valor){
        if (typeof valor !== 'number'){
        console.log('Apenas é aceito numeros')
        return;
       }
       
       estoquePrivada = valor;
    }
    });
};

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);
p1.estoque = 'O valor que eu queria';
console.log(p1.estoque);
p1.estoque = 500;
console.log(p1.estoque);

function criaProduto(){
    return{
        get nome(){
            return nome;
        },
        set nome(valor){
            valor = valor.replace('Coisa', '');
            nome = valor;
        }
    };
}

const p2 = criaProduto('Camiseta')
p2.nome = 'Qualquer Coisa';
console.log(p2.nome)
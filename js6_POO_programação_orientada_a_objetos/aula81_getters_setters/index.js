//Symbol propriedade Privada
const _velocidade = Symbol('velocidade')
// mudar todos os this[_velocidade] para this[_velocidade];
class Carro {
    constructor(nome){
        this.nome = nome;
        this[_velocidade] = 0;
    }
    //usa get e set para simular que a pessoa esta mexendo direto na velocidade, porem esta mexendo no set e get;
    set velocidade(valor){
        console.log('setter')
        if(typeof valor !== 'number') return;
        if(valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor;
    }

    get velocidade(){
        console.log('getter')
        return this[_velocidade]; 
    }  

    acelerar(){
        if(this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    freiar(){
        if(this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}

const c1 = new Carro('Carro')

/*for(let i = 0; i<=200; i++){
    c1.acelerar();
}*/
//cria outra chave, protegendo a qual esta no programa Symbol protege da chave ser chamada
c1.velocidade = 99; // quando vc atribui valor setter
console.log(c1.velocidade) //quando vc obtem o valor getter
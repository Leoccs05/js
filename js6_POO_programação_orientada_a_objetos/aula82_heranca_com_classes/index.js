class DispositoEletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado){
            console.log(this.nome + ' ligado');
            return;
        }
        this.ligado = true;
    }

    desligar(){
        if(!this.ligado){
            console.log(this.nome + ' desligado')
            return
        }
        this.ligado = false;
    }
}

class Smartphone extends DispositoEletronico{
    constructor(nome, cor, modelo){
        super(nome);// chama o construtor da classe pai
        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositoEletronico{
    constructor(nome, temWifi){
        super(nome);// chama o construtor da classe pai
        this.temWifi = temWifi;
    }

    ligar(){
        console.log('Voce alterou o metodo liga.')
    }
    falaOi(){
        console.log('Oiii.')
    }
}

const s1 = new Smartphone('Samsung', 'Preto', 'S10');
console.log(s1)

const t1 = new Tablet('Ipad', true);
console.log(t1.ligado);// ele nao achou da classe foi para classe pai procurar o ligado
t1.ligar();
t1.falaOi()
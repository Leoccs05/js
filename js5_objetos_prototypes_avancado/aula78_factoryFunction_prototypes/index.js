const falar = {
    falar(){
        console.log(`O ${this.nome} está falando`)
    } 
}

const comer = {
    comer(){
        console.log(`O ${this.nome} está comendo`)
    }
}

const beber = {
    beber(){
        console.log(`O ${this.nome} está bebendo`)
    }
}
//mixing, composição onde joga funçoes em um objeto que nao tem hieraquia
const pessoaPrototype = Object.assign({}, falar, comer, beber)  //{...falar, ...comer, ...beber}
function criaPessoa(nome, sobrenome){
    /*const pessoaPrototype = {
        falar(){
            console.log(`O ${this.nome} está falando`)
        },
        
        comer(){
            console.log(`O ${this.nome} está comendo`)
        },
        
        beber(){
            console.log(`O ${this.nome} está bebendo`)
        }
    }*/
    return Object.create(pessoaPrototype, {
        nome:{value : nome}, //Property
        sobrenome:{value : sobrenome}
    })
}

const p1 = criaPessoa('Luiz', 'Otavio');
const p2 = criaPessoa('Marcelo', 'Felipe')
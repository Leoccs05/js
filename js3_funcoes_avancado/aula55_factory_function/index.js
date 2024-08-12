function criaPessoa(nome, sobrenome, altura, peso) {
    return{
        nome, 
        sobrenome, 

        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },
        //setter
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift()
            this.sobrenome = valor.join(' ')
        },

        fala(assunto){
            return `${nome} está ${assunto} de ${this.peso}.`
        },
        altura,
        peso,
        //getter para apenas obter valor, fingi nao ser uma funcao
        get imc(){
            const indice = this.peso / (this.altura**2);
            return indice.toFixed(2);
        }
    };
}

//this é quem chamou o obj

const p1 = criaPessoa ('Luiz', 'Otavio', 1.80, 80);
console.log(p1.imc);
console.log(p1.fala('falando sobre seu peso atual'));
p1.nomeCompleto = 'Maria antonieta de Lima'
console.log(p1.nomeCompleto)
const p2 = criaPessoa ('cris', 'Otavio', 1.10, 80);
const p3 = criaPessoa ('fabio', 'Otavio', 1.40, 20);
console.log(p2.imc);
console.log(p3.imc);
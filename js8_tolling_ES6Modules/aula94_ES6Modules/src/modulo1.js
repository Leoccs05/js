export const nome = 'Luiz';
const sobrenome = 'Otavio';
const idade = 19;


export function soma(x, y){
    return x+y
};
//so pode ter 1 default por modulo
export default (a, b) => a * b;

export class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}
//normalmente o mais importante é o default
export{sobrenome as nomeComposto, idade}
//export{sobrenome as default, idade} para const fazer nas chaves
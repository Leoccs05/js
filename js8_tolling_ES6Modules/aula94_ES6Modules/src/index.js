import qualquercoisa, {nome as nome2, nomeComposto, idade, soma, Pessoa} from './modulo1';
//qualquercoisa é o default
//import qualquercoisa from './modulo1'
//import * as MeuModulo from './modulo1'; exporta tudo

const nome = 'Cristiano'
const p1 = new Pessoa(nome2, 'Ronaldo')
console.log(p1);
console.log(nome, nomeComposto, idade);
console.log(qualquercoisa(10, 10))
console.log(soma(10,20))

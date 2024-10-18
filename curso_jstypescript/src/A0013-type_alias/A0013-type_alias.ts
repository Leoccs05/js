type Idade = number;
type Pessoa ={
  nome: string;
  idade: Idade;
  salario: number;
  corPreferida?: string
}
type CorRGB = 'Vermelho' | 'Verde' | 'Azul';
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' |'Preto';
type CorPreferida = CorRGB | CorCMYK;

const pessoa2: Pessoa = {
  idade: 30,
  nome: 'Luiz',
  salario: 200_000, //200000
}

function setCorPreferida(pessoa2: Pessoa, cor: CorPreferida): Pessoa{
  return{...pessoa2, corPreferida: cor}
}
console.log(pessoa2)
console.log(setCorPreferida(pessoa2, 'Azul'))

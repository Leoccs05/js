const objectA: {
  //readonly chave nao pode ser alterada
  readonly chaveA: string;
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown
} ={
  chaveA: 'Valor A',
  chaveB: 'Valor B',
}
objectA.chaveB = 'Outro valor';
objectA.chaveC = 'Nova Chave';
objectA.chaveD = 'Nova Chave';
console.log(objectA)

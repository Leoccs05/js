//aritmeticos

//+ (Adição concatenação)  -(subtrai) /(dividi) *(multiplica) **(Potenciação) %(retorna o resto da divisão)
/*Ordem de precetencia:
()
**
* / $
+ -
*/
const num1 = 10;
const num2 = 3;
const num3 = 10;
console.log((num1 + num2) * num3)

const num4 = 10;
const num5 = Number('A3'); //transforma em number a string. obs: se tiver letra da NAN ma hora de calcular
console.log(num4 + num5)
console.log(typeof num5)
const num6 = Number('3')
//parseInt   = Numero Inteiro;
//ParseFloat = Numero Decimal;
//Number     = Numero
console.log(typeof num2)
console.log(num4 + num6)



//Incremento ++
//Decremento --
let contador = 5;
contador++; //6
++contador; //7
--contador; //6
contador--; //5
console.log(contador)
const passo = 2;
let contador1 = 0

contador1 += passo // contador1 = contador1 + passo;
console.log(contador1)
contador1 += passo
console.log(contador1)
contador1 += passo
console.log(contador1)

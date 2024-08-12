let varA = 'a'; // b
let varB = 'b'; // c
let varC = 'c'; // a
/*
const varA2 = varA
varA = varB
varB = varC
varC = varA2
*/

[varA, varB, varC] = [varB, varC, varA]


console.log(varA, varB, varC)
 const nome = 'Leonardo Miguel';
 const sobrenome = 'Casadei Celso Silveira';
 const idade = 19;
 const peso = 80;
 const alturaEmM = 1.83
 let imc; //peso / (altura * altura)
 let anoNascimento;

 imc = peso / (alturaEmM * alturaEmM);
 anoNascimento = 2024 - idade;

 console.log(nome + ' ' + sobrenome + ' tem ' + idade + ' anos, pesa ' + peso + ' kg'); //concatenar
 console.log(`tem ${alturaEmM} de altura e seu IMC é de ${imc}`); //template strings A melhor maneira
 console.log(`${nome} nasceu em ${anoNascimento}.`); // OBS: apenas ` pode usar ${}
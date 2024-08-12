// IIFE 
//() = protege a funcao do escopo global e chama ela automaticamente
(function(idade, peso, altura){
    const sobrenome = 'Miranda';
    function criaNome(nome){
        return nome + ' ' + sobrenome;
    }

    function falaNome(){
        console.log(criaNome('Fabio'))
    }

    falaNome()
    console.log(idade, peso, altura)
})(30, 87, 1.80);

const nome = 'Qualquer';
//envelopar em uma função para que nao conflita com escopo global
function meuEscopo() {
     const form = document.querySelector('.form');
     const result = document.querySelector('.result');

     const pessoas = [];
     
     function recebeEventoForm (evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
         nome: nome.value,
         sobrenome: sobrenome.value,
         peso: peso.value,
         altura: altura.value
        });

        console.log(pessoas);

        result.innerHTML += `<p> ${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;
     }

     form.addEventListener('submit', recebeEventoForm)
}
meuEscopo();
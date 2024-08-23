/*const request = obj => {
    return new Promise ((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true)
        xhr.send()

         xhr.addEventListener('load', () => {
            if(xhr.status >= 200 && xhr.status < 300){
                resolve(xhr.responseText);
            }else{
                reject(xhr.statusText)
            };
    });
    })
    
};*/

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a'){
        e.preventDefault();
        carregaPagina(el);
    };
});

async function carregaPagina(el){
    try{
        const href = el.getAttribute('href')
        const response = await fetch(href)
    
        if(response.status !== 200) throw new Error('Error 404! Nosso');
    
        const html = await response.text();
        carregaResultado(html);
    }catch(e){
        console.log(e)
    }
    


    /*fetch(href)
            //converte resposta em texto
        .then(response => {
            if(response.status !== 200) throw new Error('Error 404! Nosso');
            return response.text();
        })
        .then(html => carregaResultado(html))
        .catch(e => console.log(e))*/
    
}

function carregaResultado(response){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}

//retorna a pagina html e promise
/*fetch('pag4.html')
        // resposda, nao vem os dados pronto precisam ser convertidos para o que eu preciso
    .then(resposta => {
        if(resposta.status !== 200) throw new Error('ERRO 404 NOSSO')
            return resposta.text();// para retorna o falor de uma promise dentro de um then usa outro then
    })
    .then(html => console.log(html))
    .catch( e => console.log(e));   //log, warn, error*/
    
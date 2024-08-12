const paragrafo = document.querySelector('.paragrafos');
const ps = paragrafo.querySelectorAll('p');

const styleBody = getComputedStyle(document.body)
const backgroundColorBody = styleBody.backgroundColor

for (let p of ps){
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = 'white'
}
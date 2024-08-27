/*//const mod1 = require('./mod1');
//console.log(mod1)
//console.log(mod1.falaNome())
const falaNome = require('./mod1').falaNome;
console.log(falaNome())

const {nome, sobrenome} = require('./mod1')
console.log(nome, sobrenome)*/

//const path = require('path') Por ser Modulo padrao do node não precisa de vaminho
const axios = require('axios') 
const {Pessoa} = require('./mod1');
const p1 = new Pessoa('Luiz')
axios('https://www.udemy.com/course/curso-de-javascript-moderno-do-basico-ao-avancado/learn/lecture/16658366?start=165#overview')
    .then(response => console.log(response.data))
    .catch(e => console.log(e))
console.log(p1)

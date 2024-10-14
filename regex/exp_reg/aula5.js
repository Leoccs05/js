const {alfabeto} = require('./base')
//^ -> negação

console.log(alfabeto)
console.log(alfabeto.match(/[^abc123]+/g)) 
console.log(alfabeto.match(/[0-9a-z]/g))
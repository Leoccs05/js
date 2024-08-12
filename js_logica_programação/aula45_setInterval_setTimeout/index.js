function mostraHora(){
    let data = new Date()
    return data.toLocaleTimeString('pt-BR')
}

const timer = setInterval(function (){
    console.log(mostraHora())
}, 1000)

setTimeout(function () {
    clearInterval(timer)
}, 3000)

setTimeout(function () {
    console.log('Ola Mundo')
}, 5000)
//setInterval(funcaDoInterval, 1000)
/*try{
    //executa quando nao tem erros
} catch (e){
    //Executado quando tem erros
}finally{
    //Executado sempre
}

try{
    console.log(a)
    console.log('Abri arquivo')
    console.log('Manipulei o aqrquivo arquivo')
    console.log('Fechei arquivo')
} catch (e){
    console.log('Tratando o erro')
}finally{
    console.log('Sempre sou executado')
}*/

function retornaHora(data){
    if(data && !(data instanceof Date)) {
        throw new TypeError('Esperando instancia de Date')
    }

    if(!data){
        data = new Date()
    }
    return data.toLocaleTimeString('pt-BR', {})
}

try {
    const data = new Date('01-01-1970 12:58:12')
    const hora = retornaHora()
    console.log(hora)
} catch (error) {
    //trata erros
}finally{
    console.log('tenha um bom dia')
}
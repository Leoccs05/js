/*try{
    console.log(naoExisto)
} catch(err){
    console.log('NaoExiste nãao existo')
}*/

function soma(x,y) {
    if(typeof x !== 'number' || typeof y !=='number'){
        throw new Error('x e y precisam ser numeros')
    }

    return x+y;
}

try{
    console.log(soma(1,2))
    console.log(soma('a',2))
} catch(error){
    //console.log(error)
    console.log('INSIRA APENAS NUMEROS')
}

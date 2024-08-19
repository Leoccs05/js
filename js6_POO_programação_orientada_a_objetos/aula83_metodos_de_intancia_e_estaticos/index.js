class ControleRemoto{
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }
    //METODO DE INSTANCIA
    aumentarVolume(){
        this.volume += 2;
    }
    diminuirVolume(){
        this.volume -= 2;
    }

    //METODO estatico
    static trocaPilha(){ // metodo referente a class
    console.log('Ok, vou trocar.')  // não tem os dados do constructor(dados da instancia)
    }
}

const c1 = new ControleRemoto('LG');
c1.aumentarVolume();
c1.aumentarVolume();
c1.aumentarVolume();
ControleRemoto.trocaPilha()
console.log(c1)
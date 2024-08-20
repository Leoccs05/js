class ValidarCpf{
    constructor(cpfEnviado){
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable:false,
            value: cpfEnviado.replace(/\D+/g, '')
        });
    }

    sequencia(){
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }

    geraNovoCpf(){
        const cpfSemDigitos = this.cpfLimpo.slice(0,-2);
        // já que a classe geraDigito virou static trocar this por nome da class
        const digito1 = ValidarCpf.geraDigito(cpfSemDigitos);
        const digito2 = ValidarCpf.geraDigito(cpfSemDigitos + digito1);
        this.novoCpf = cpfSemDigitos + digito1 + digito2;
    }

    static geraDigito(cpfSemDigitos){
        let total = 0;
        let reverso = cpfSemDigitos.length +1;

        for(let stringNumerica of cpfSemDigitos){
            //console.log(stringNumerica, reverso)
            total += reverso * Number(stringNumerica);
            reverso--;
        }
        console.log(total)
        const digito = 11 - (total%11);
        return digito <= 9 ? String(digito) : '0';
    }

    valida(){
        if(!this.cpfLimpo)return false;
        if(typeof this.cpfLimpo !== 'string')return false;
        if(this.cpfLimpo.length !== 11)return false;
        if(this.sequencia())return false;
        this.geraNovoCpf();
        //console.log(this.novoCpf)

        return this.novoCpf === this.cpfLimpo;
    }
}
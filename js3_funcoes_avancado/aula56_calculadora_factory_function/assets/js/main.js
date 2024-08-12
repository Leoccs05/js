 function craiCalculadora(){
    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),
        
        inicia(){
            this.cliqueBotoes();
            this.pressionaEnter();
         },

         pressionaEnter(){
            this.display.addEventListener('keyup', e=> {
                if(e.keyCode == 13){
                    this.realizaConta()
                }
            })
         },

        clearDisplay(){
            this.display.value = ''
        },

        apagaUm(){
            this.display.value = this.display.value.slice(0,-1)
        },

        realizaConta(){
            let conta = this.display.value;

            try{
                conta = eval(conta);
                if(!conta) {
                    alert('Conta Invalida')
                    return;
                }

                this.display.value = String(conta)
            }catch (e){
                alert('Conta Invalida')
                return;
            }
        },

        cliqueBotoes() {
            //this -> calculadora
            //arrow function trava o this em quem criou o elemento
            document.addEventListener('click', e => {
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-del')) {
                    this.apagaUm();
                }

                if (el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }

            });//.bind(this)); para usar meu this sem ser arrow function que no casso seria a calculadora nao document
        },

        btnParaDisplay(valor){
            this.display.value += valor;
        }
    };
}

const calculadora = craiCalculadora();
calculadora.inicia();
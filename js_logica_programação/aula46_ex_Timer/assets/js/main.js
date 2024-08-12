 function relogio(){
    function getTimeFromSecond(segundos){
        const data = new Date (segundos * 1000); //*1000 para transforma milessimos em segundos
        return data.toLocaleTimeString('pt-BR', {
            timeZone: 'GMT'
        });
      }
    
      console.log(getTimeFromSecond(10))
    
    
      const relogio = document.querySelector('.relogio');
      /*const iniciar = document.querySelector('.iniciar');
      const pausar = document.querySelector('.pausar');
      const reset = document.querySelector('.reset');*/
      let segundos = 0;
      let timer;
    
      function iniciaRelogio(){
        timer = setInterval(function(){
            segundos++;
            relogio.innerHTML = getTimeFromSecond(segundos);
        },1000);
      };
    
      document.addEventListener('click', function(e){
        console.log(e.target)
        const el = e.target;
    
        if(el.classList.contains('reset')){
            console.log('voce clicou em zerar')
            relogio.classList.remove('pausado')
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            segundos = 0
        };
    
        if(el.classList.contains('pausar')){
            console.log('voce clicou em pausar')
            relogio.classList.add('pausado')
            clearInterval(timer); //pausar
        };
    
        if(el.classList.contains('iniciar')){
            console.log('voce clicou em iniciar')
            relogio.classList.remove('pausado')
            clearInterval(timer);
            iniciaRelogio();
        }
      });
 }
 relogio();
 
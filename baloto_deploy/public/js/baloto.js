var balotasAmarillas = document.getElementsByClassName('ball');
var balotaRoja = document.getElementsByClassName('Redball');
var btnPlay = document.getElementById('btn-play');

btnPlay.onmouseover = () =>btnPlay.classList.add('animated','heartBeat')
btnPlay.onmouseout  = () =>btnPlay.classList.remove('animated','heartBeat')
btnPlay.onclick = function(){
    btnPlay.classList.add('hiden');
    play.start();
}

let play = {

    start(){
        play.mostarBalotasAmarrillas();
        play.mostarBalotaRoja();
    },
    randomGen(min,max){
        return Math.floor(Math.random()*(max - min)) + min;
    },
    mostarBalotasAmarrillas(){
        let numeros = [];
        let tiempo = 1000;
        for(let i = 0; i<balotasAmarillas.length; i++){
            let balota = balotasAmarillas.item(i);
            let aleatorio = play.randomGen(1,43);
            if(numeros.indexOf(aleatorio)==-1){
                numeros.push(aleatorio);
                balota.innerHTML = aleatorio;
                setTimeout(()=>{
                    balota.classList.remove('hiden');
                    balota.classList.add('animated','bounceInDown');
                },tiempo);
                tiempo+=1000;
            }else{
                i--;
            }
        }
    },
    mostarBalotaRoja(){
        balotaRoja[0].innerHTML = play.randomGen(1,16);
        setTimeout(()=>{
            balotaRoja[0].classList.remove('hiden');
            balotaRoja[0].classList.add('animated','bounceInDown')
        },6000);
    }
    
}

var btnPlay     = document.getElementById('btn-play')
var btnCredits  = document.getElementById('btn-credits')
var btnBack     = document.getElementById('back')
var btnTryAgain = document.getElementById('btn-bc');
var btnTryAgain2 = document.getElementById('btn-bc2');
var screens     = document.getElementsByClassName('screen')
var frog        = document.getElementById('frog')
var cars        = document.getElementsByClassName('car');
var smenu = document.getElementById('sound-menu');
var splay = document.getElementById('sound-play');
var lives = document.querySelectorAll('ul li.heart.active');
var hitSound = document.getElementById('sound-hit');

btnPlay.onmouseover =()=>btnPlay.classList.add('animated','rubberBand')
btnPlay.onmouseout = ()=>btnPlay.classList.remove('animated','rubberBand')
btnPlay.onclick = function() {
    game.screenTo(0,1);
    game.activeSound();
    game.startGame();
}

btnTryAgain.onmouseover = () => game.btnAddFx(btnTryAgain);
btnTryAgain.onmouseout = () =>game.btnRemoveFx(btnTryAgain);
btnTryAgain.onclick = () =>{ 
    window.location ='08-juego.html';
}

btnTryAgain2.onmouseover = () => game.btnAddFx(btnTryAgain2);
btnTryAgain2.onmouseout = () =>game.btnRemoveFx(btnTryAgain2);
btnTryAgain2.onclick = () =>{ 
    window.location ='08-juego.html';
}

btnCredits.onmouseover = () => btnCredits.classList.add('animated','rubberBand')
btnCredits.onmouseout = () => btnCredits.classList.remove('animated','rubberBand')
btnCredits.onclick = () => game.screenTo(0,2);


btnBack.onmouseover = ()=>btnBack.classList.add('animated','rubberBand')
btnBack.onmouseout = ()=>btnBack.classList.remove('animated','rubberBand')
btnBack.onclick = ()=>game.screenTo(2,0)

var game = {
    posLeft: 372,
    posTop: 482,
    level2: false,
    startGame: function() {
        this.moveFrog();
        this.renderCars();
        this.randomCars();
    },
    renderCars: function() {
        for(var i=0; i<6; i++){
            let div = document.createElement('div');
            div.setAttribute('class', 'car');
            screens[1].appendChild(div);
        }
    },
    randomCars: function() {
        var lt = -100; //Left
        var tp = 480; //top
        var rt = 0; // Rotate
        var tm = 70 // time
        var dr = 'r'; // direccion
        for (var i=0; i < cars.length; i++) {
            if(i == 3) {
                lt = 810;
                tp -= 60;
                rt = 0;
                dr = 'l';
            }
            tm -= 10;
            tp -= 60;
            cars[i].style.top       = tp+'px';
            cars[i].style.left      = lt+'px';
            cars[i].style.transform = 'rotate('+rt+'deg)';
            cars[i].classList.add('car'+i);
            game.moveCars(cars[i], tm, dr);
        }
    },
    moveCars: function(car, time, dir) {
        let posL = -100;
        let posR = 810;
        setInterval(function(){
            game.checkCollides(car,frog);
            if(dir == 'r') {
                if(posL < 810) {
                    posL += 10;
                    car.style.left = posL+'px';
                } else {
                    posL = -100;
                    //game.changeCar(); 
                }
            } else {
                if(posL > -100) {
                    posL -= 10;
                    car.style.left = posL+'px';
                } else {
                    posL = 810;
                    //game.changeCar(); 
                }
            }
        }, time);
    },
    moveFrog: function () {
        document.onkeydown = event => {
            switch (event.keyCode) {
                // Izquierda
                case 37:
                    if(game.posLeft > 30) {
                        game.posLeft -= 40
                        frog.style.left = game.posLeft + "px";
                    }
                    game.jumpFrog();
                    break
                // Arriba    
                case 38:
                    if (game.posTop> 30) {
                        game.posTop -= 60
                        frog.style.top = game.posTop + "px";
                        if(game.posTop==2){
                            setTimeout(()=>{
                                if(game.level2==false){
                                    screens[1].style.background= "url('imgs/frog/bg-level2.png') no-repeat center";
                                    game.resetFrog();
                                    game.level2 = true;
                                }else{
                                    splay.pause();
                                    smenu.currentTime=0;
                                    smenu.play();
                                    smenu.currentTime=9999;
                                    game.screenTo(1,4);
                                }
                            },200);
                        }

                    }
                    game.jumpFrog();
                    break
                // Derecha
                case 39:
                    if (game.posLeft < 700) {
                        game.posLeft += 40
                        frog.style.left = game.posLeft + "px";
                    }
                    game.jumpFrog();
                    break
                // Abajo
                case 40:
                    if (game.posTop < 450) {
                        game.posTop += 60
                        frog.style.top = game.posTop + "px";
                    }
                    game.jumpFrog();
                    break
                default:
                    console.log(e.keyCode);
                    break;
            }
            setTimeout(()=>frog.classList.remove('animated','rubberBand'),250);
        }
    },
    jumpFrog: function() {
        frog.classList.add('animated','heartBeat');
        setTimeout(function(){
            frog.classList.remove('animated','heartBeat');
        }, 300);
    },
    screenTo: function (start,final) {
        screens[start].classList.remove('bounceInUp')
        screens[start].classList.add('bounceOutDown')
        setTimeout(function() {
            screens[start].classList.remove('bounceOutDown')
            screens[start].classList.add('hide')
            screens[final].classList.remove('hide')
            screens[final].classList.add('animated','bounceInUp')
        }, 700);
    },
    activeSound: ()=>{
        smenu.pause();
        smenu.currentTime=0;
        splay.play();
    },
    checkCollides: (car, frog) => {
        cartop    = car.offsetTop;
        carleft   = car.offsetLeft;
        carright  = Number(car.offsetLeft) + Number(car.offsetWidth);
        carbottom = Number(car.offsetTop)  + Number(car.offsetHeight);

        frogtop    = frog.offsetTop;
        frogleft   = frog.offsetLeft;
        frogright  = Number(frog.offsetLeft) + Number(frog.offsetWidth);
        frogbottom = Number(frog.offsetTop)  + Number(frog.offsetHeight);

        if (carright  > frogleft && carleft   < frogright  && cartop    < frogbottom && carbottom > frogtop ) {
            game.checkLives();
            game.resetFrog();
            screens[1].classList.add('shake');
            screens[1].classList.remove('bounceInUp');
        }
    },
    resetFrog: ()=>{
        setTimeout(()=>screens[1].classList.remove('shake'),500);
        game.posLeft = 372,
        game.posTop = 482,
        frog.style.left = game.posLeft +'px';
        frog.style.top = game.posTop +'px';
        hitSound.play();
    },
    checkLives: function() {
        lives[lives.length-1].classList.remove('active');
        lives = document.querySelectorAll('ul li.heart.active');
        if(lives.length < 1) {
            splay.pause();
            smenu.currentTime=0;
            smenu.play();
            smenu.currentTime=9999;
            game.screenTo(1,3);
        }
    }
}


var boton = document.getElementsByClassName('boton');
boton.onmouseover = () =>boton.classList.add('animated','heartBeat');
boton.onmouseout  = () =>boton.classList.remove('animated','heartBeat'); 
console.log(boton)
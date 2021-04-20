
// Calculator Elements
var btnTheme = document.getElementById('theme');
var calc = document.getElementsByClassName('calc');
var disMath = document.getElementById('displayMath');
var disAns = document.getElementById('displayAnswer');

//

// Buttons
var btn0 = document.getElementById('btn0');
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var btn4 = document.getElementById('btn4');
var btn5 = document.getElementById('btn5');
var btn6 = document.getElementById('btn6');
var btn7 = document.getElementById('btn7');
var btn8 = document.getElementById('btn8');
var btn9 = document.getElementById('btn9');
var memori = '';


// Action
var btnClear = document.getElementById('btnC');
var btnDelete = document.getElementById('btnDelete');
var btnMas = document.getElementById('btnSum');
var btnMenos = document.getElementById('btn-');
var btnIgual = document.getElementById('btnEqual');
var btnPor = document.getElementById('btnx');
var btnDiv = document.getElementById('btnDiv');
var btnX2 = document.getElementById('btnX2');
var btnD = document.getElementById('btnr');
var btnI = document.getElementById('btnl');
var btnPunto = document.getElementById('btnPunto');
var btnPorciento = document.getElementById('btnPorc');
var btnAns = document.getElementById('btnAns');
var btnRaiz = document.getElementById('btnRaiz');


// Booleans
var allowOper = false;

// Funciones
function setValueInDisplay(val){
    if(disMath.value.length <= 28){
        if (val.constructor.name == 'Number') {
            allowOper = true;
            disMath.value += val;
        } else {
            if (allowOper) { 
                disMath.value += val;
            }
            allowOper = false;
        }
    }
}

// Events
btnTheme.onclick = function(){
    calc[0].classList.toggle('dark');
}
btn0.onclick = function() {
    setValueInDisplay(0);
}

btn1.onclick = function() {
    setValueInDisplay(1);
}
btn2.onclick = function() {
    setValueInDisplay(2);
}

btn3.onclick = function() {
    setValueInDisplay(3);
}
btn4.onclick = function() {
    setValueInDisplay(4);
}

btn5.onclick = function() {
    setValueInDisplay(5);
}
btn6.onclick = function() {
    setValueInDisplay(6);
}

btn7.onclick = function() {
    setValueInDisplay(7);
}
btn8.onclick = function() {
    setValueInDisplay(8);
}

btn9.onclick = function() {
    setValueInDisplay(9);
}

btnClear.onclick = function(){
    disMath.innerText ='';
    disAns.innerText ='';
}

btnDelete.onclick = function(){
    //Value = InnerText o InnerHTML
    disMath.innerText = disMath.value.slice(0,-1);
}

btnMas.onclick = function(){
    setValueInDisplay('+');
}

btnMenos.onclick = function(){
    setValueInDisplay('-');
}

btnPor.onclick = function(){
    setValueInDisplay('*');
}

btnDiv.onclick = function(){
    setValueInDisplay('/');
}

btnD.onclick = function(){
    setValueInDisplay('(');
}

btnI.onclick = function(){
    setValueInDisplay(')');
}

btnPunto.onclick = function(){
    setValueInDisplay('.');
}

btnPorciento.onclick = function(){
    setValueInDisplay('%');
}

btnAns.onclick = function(){
    if(memori != null){
        disMath.value = memori;
    } else {
        if(disAns.value.length > 0){
            memori = disAns.value;
            disMath.value = memori;
            disAns.value = '';
        }
    }
}

btnRaiz.onclick = function(){
    //setValueInDisplay('');
}

btnX2.onclick = function(){
//    setValueInDisplay('^');
}

btnIgual.onclick = function(){
    disAns.value = eval(disMath.value);
    disMath.value = '';
}

document.onleyup = function(evt){
    console.log(evt.keyCode);
}
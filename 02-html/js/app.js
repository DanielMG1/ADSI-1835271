var ans = document.getElementById("answer");
var qns = prompt("Cual es su nombre?");

if(qns== "Daniel"){
	ans.innerHTML = "Bienevenido Administrador: "+qns;
} else {
	ans.innerHTML = "Bienvenido visitante: "+qns;
}
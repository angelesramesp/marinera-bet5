function modoOscuro(){

document.body.classList.toggle("oscuro");

}

function apostar(){

let resultado = Math.random();

if(resultado > 0.5){

document.getElementById("resultadoApuesta").innerText =
"🎉 Ganaste la apuesta y obtuviste S/10";

}else{

document.getElementById("resultadoApuesta").innerText =
"😢 Perdiste la apuesta";

}

}
function iniciarContador(){

let fechaEvento = new Date("January 23, 2027 00:00:00").getTime();

let intervalo = setInterval(function(){

let ahora = new Date().getTime();

let distancia = fechaEvento - ahora;

let dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
let horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
let segundos = Math.floor((distancia % (1000 * 60)) / 1000);

document.getElementById("contador").innerHTML =
dias + " días " + horas + " horas " + minutos + " minutos " + segundos + " segundos";

},1000);

}
window.onload = function(){

iniciarContador();

}
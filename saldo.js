let saldo = 0;

window.onload = function() {

let aceptar = confirm("🎁 Bienvenido. ¿Deseas recibir S/10 por iniciar sesión?");

if(aceptar){
saldo = 10;
alert("¡Recibiste S/10!");
}else{
saldo = 0;
alert("No aceptaste el regalo.");
}

document.getElementById("saldo").textContent = saldo;

}
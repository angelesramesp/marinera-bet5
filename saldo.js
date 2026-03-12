let saldo = localStorage.getItem("saldo");

if(saldo === null){

let aceptar = confirm("🎁 Bienvenido ¿Deseas recibir S/10?");

if(aceptar){
saldo = 10;
}else{
saldo = 0;
}

localStorage.setItem("saldo", saldo);

}

document.addEventListener("DOMContentLoaded", function(){
let saldoElemento = document.getElementById("saldo");

if(saldoElemento){
saldoElemento.textContent = saldo;
}
});
//PRIMERO SELECCIONAR UN NUEMRO AL AZAR

let nuemroAZar = Math.floor(Math.random() * 100) + 1;

//NUMERO INGRESADO
let numeroIngresado = document.getElementById('numeroEntrada');

//MENSAJE ENVIADO
let mensaje = document.getElementById('mensaje')

//FUNCION

function adivinaElNumero() {
    let numero = parseInt(numeroIngresado.value);

    if (numero < 1 || numero > 100 || isNaN(numero)) {
        mensaje.textContent = 'Por favor ingrese un numero de 1 a 100';
        return
    }

    if (numero === nuemroAZar) {
        mensaje.textContent = '!!Felicitaciones adivinaste el numero';
        mensaje.style.color = 'green';
    }else if(numero < nuemroAZar){
        mensaje.textContent = '!Mas alto el numero es mayor al que digiste';
        mensaje.style.color = 'red';
    }else{
        mensaje.textContent = '!Mas bajo el numero es menor al que digiste';
        mensaje.style.color = 'red';
    }
}

console.log(adivinaElNumero())


let numeroAzar = Math.floor(Math.random()*100)+1;

let numeroEntrada = document.getElementById('numeroEntrada');

let mensaje = document.getElementById('mensaje');

function chequearResultado(){

    let numeroIngresado = parseInt(numeroEntrada.value)

    if (numeroIngresado > 100 || numeroIngresado < 1 || isNaN(numeroIngresado)) {

        mensaje.textContent = 'Por favor, ingrese un numero entre 1 y 100'
        return

    } 

    if (numeroIngresado === numeroAzar) {

        mensaje.textContent = 'Felicitaciones, has acertado el número.';
        mensaje.style.color = 'green';
        numeroEntrada.disabled = true;
        
    } else if (numeroIngresado < numeroAzar){

        mensaje.textContent = 'El Número ingresado es menor al que debes adivinar, intenta otra vez pero con un numero mayor.'
        mensaje.style.color = 'red'
    
    } else {

        mensaje.textContent = 'El Número ingresado es mayor al que debes adivinar, intenta otra vez pero con un numero menor.'
        mensaje.style.color = 'red'

    }

}

console.log(numeroAzar)
let rangoMin = 1;
let rangoMax = 100;
let numeroAzar = generarNumeroAzar(rangoMin, rangoMax);

let numeroEntrada = document.getElementById('numeroEntrada');
let mensaje = document.getElementById('mensaje');
let ayuda = document.getElementById('ayuda');
let dificultad = document.getElementById('dificultad');

function generarNumeroAzar(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function cambiarDificultad() {
    if (dificultad.value === "facil") {
        rangoMax = 50;
    } else if (dificultad.value === "media") {
        rangoMax = 100;
    } else {
        rangoMax = 200;
    }
    ayuda.textContent = `Introduce un número entre ${rangoMin} y ${rangoMax}:`;
    numeroEntrada.value = "";
    numeroEntrada.disabled = false;
    mensaje.textContent = "";
    mensaje.style.color = "#333";
    numeroAzar = generarNumeroAzar(rangoMin, rangoMax);
}

function chequearResultado() {
    let numeroIngresado = parseInt(numeroEntrada.value);

    if (
        numeroIngresado > rangoMax ||
        numeroIngresado < rangoMin ||
        isNaN(numeroIngresado)
    ) {
        mensaje.textContent = `Por favor, ingrese un número entre ${rangoMin} y ${rangoMax}`;
        mensaje.style.color = 'red';
        return;
    }

    if (numeroIngresado === numeroAzar) {
        mensaje.textContent = 'Felicitaciones, has acertado el número.';
        mensaje.style.color = 'green';
        numeroEntrada.disabled = true;
    } else if (numeroIngresado < numeroAzar) {
        mensaje.textContent = 'El número ingresado es menor al que debes adivinar, intenta otra vez pero con un número mayor.';
        mensaje.style.color = 'red';
    } else {
        mensaje.textContent = 'El número ingresado es mayor al que debes adivinar, intenta otra vez pero con un número menor.';
        mensaje.style.color = 'red';
    }
}

console.log(numeroAzar);
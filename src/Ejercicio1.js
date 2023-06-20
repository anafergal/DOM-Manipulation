/*
Crea un programa utilizando HIML, CSS y Javascript que permita al usuario acceder a un contador sencillo (ascendente descendente) sin limite. Asi mismo, se muestre un temporizador que permita al usuario establecer un tiempo (en segundos) y que haga una cuenta regresiva por cada segundo hasta llegar a 0 y arroje una alerta de tiempo finalizado */

const btn = document.getElementById('btn-count');
const p = document.getElementById('contador');

let counter = 0;

p.textContent = counter;


btn.addEventListener('click', async () => {
    await setTimeout(() => {
        counter++;
        p.textContent = counter;
    }, 1000);
});

const btnResta = document.getElementById('btn-minus');

btnResta.addEventListener('click', async () => {
    await setTimeout(() => {
        counter--;
        p.textContent = counter;
    }, 1000);
});

////////////////////////////////////////

function startCountdown() {
    var valor = parseInt(document.getElementById("inputValue").value);

    if (isNaN(valor)) {
      alert("Por favor, ingrese un número válido.");
      return;
    }

    var tiempoRestante = valor;
    var countdownElement = document.getElementById("temporizador");

    var contador = setInterval(function() {
      countdownElement.textContent = tiempoRestante;

      if (tiempoRestante === 0) {
        clearInterval(contador);
        alert("Tiempo finalizado");
      }

      tiempoRestante--;
    }, 1000);
  }
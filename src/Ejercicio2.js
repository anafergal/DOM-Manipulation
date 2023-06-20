/*Crea un programa utilizando HTML, CSS y JS que solicite 2 números al usuario, y permita sumar, restar, multiplicar o dividir dichos números y muestre el resultado.
*/

const suma = document.getElementById('btn-suma');
const numero1 = document.getElementById('input-1');
const numero2 = document.getElementById('input-2');

suma.addEventListener('click', () => {
    let suma = Number(numero1.value) + Number(numero2.value);
    const p = document.getElementById('resultado');    
    p.textContent = suma;
});
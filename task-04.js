'use strict';

const valueRef = document.querySelector('#value');
const btnIncrementRef = document.querySelector(
  'button[data-action="increment"]',
);
const btnDecrementRef = document.querySelector(
  'button[data-action="decrement"]',
);

let counterValue = +valueRef.textContent;

btnIncrementRef.addEventListener('click', increment);
btnDecrementRef.addEventListener('click', decrement);

function increment(event) {
  counterValue = counterValue + 1;
  valueRef.textContent = counterValue;
}
function decrement(event) {
  counterValue = counterValue - 1;
  valueRef.textContent = counterValue;
}

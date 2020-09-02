'use strict';

const inputRef = document.querySelector('#name-input');
const nameRef = document.querySelector('#name-output');

inputRef.addEventListener('input', inputName);

function inputName(e) {
  e.target.value === ''
    ? (nameRef.textContent = 'незнакомец')
    : (nameRef.textContent = e.target.value);
}

'use strict';

const inputRef = document.querySelector('#name-input');
const nameRef = document.querySelector('#name-output');

inputRef.addEventListener('input', inputName);

function inputName(e) {
  nameRef.textContent = e.target.value === '' ? 'незнакомец' : e.target.value;
}

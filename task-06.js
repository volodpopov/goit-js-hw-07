'use strict';

const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('change', changeInputValid);

function changeInputValid(event) {
  inputRef.classList.add('invalid');
  if (
    +event.target.value.length === +event.target.dataset.length
  ) {
    inputRef.classList.replace('invalid', 'valid');
  }
}
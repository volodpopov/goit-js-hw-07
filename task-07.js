'use strict';

const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

inputRef.addEventListener('input', changeFontSize);

function changeFontSize(event) {
    textRef.style.fontSize = `${event.target.value}px`;
}
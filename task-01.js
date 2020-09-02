'use strict';

const itemsRef = document.querySelectorAll('.item');
console.log(`В списке ${itemsRef.length} категории.`);

const category1 = `Категория: ${itemsRef[0].firstElementChild.textContent}`;
const elements1 = `Количество элементов: ${itemsRef[0].lastElementChild.children.length}`;
console.log(category1);
console.log(elements1);

const category2 = `Категория: ${itemsRef[1].firstElementChild.textContent}`;
const elements2 = `Количество элементов: ${itemsRef[1].lastElementChild.children.length}`;
console.log(category2);
console.log(elements2);

const category3 = `Категория: ${itemsRef[2].firstElementChild.textContent}`;
const elements3 = `Количество элементов: ${itemsRef[2].lastElementChild.children.length}`;
console.log(category3);
console.log(elements3);
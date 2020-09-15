'use strict';

const itemsRef = document.querySelectorAll('.item');
console.log(`В списке ${itemsRef.length} категории.`);

itemsRef.forEach(item => {
  const category = `Категория: ${item.firstElementChild.textContent}`;
  const elements = `Количество элементов: ${item.lastElementChild.children.length}`;
  console.log(category);
  console.log(elements);
});

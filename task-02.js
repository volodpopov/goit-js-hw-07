'use strict';

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listRef = document.querySelector('#ingredients');

const getListItems = ingredients.map(ingredient => {
  const itemRef = document.createElement('li');
  itemRef.textContent = ingredient;
  return itemRef;
});
listRef.append(...getListItems);

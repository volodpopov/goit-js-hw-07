'use strict';

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const createGallery = image => {
  const imageRef = document.createElement('img');
  imageRef.classList.add('gallery__item-image')
  imageRef.src = image.url;
  imageRef.alt = image.alt;

  const listItemRef = document.createElement('li');
  listItemRef.classList.add('gallery__item');
  listItemRef.appendChild(imageRef);

  return listItemRef;
};

const gallery = images.map(image => createGallery(image));

const galleryRef = document.querySelector('#gallery');
galleryRef.append(...gallery);

galleryRef.classList.add('gallery');

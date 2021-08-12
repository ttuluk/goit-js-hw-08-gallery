import './js/app.js'
{/* <li class="gallery__item">
  <a
    class="gallery__link"
    href="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
  >
    <img
      class="gallery__image"
      src="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg"
      data-source="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
      alt="Tulips"
    />
  </a>
</li> */}

import galleryItems from './js/app.js';

const galerryContainer = document.querySelector('.js-gallery');
// console.log(galerryContainer);
const cardsGalerry = createGalerryElements(galleryItems);
galerryContainer.addEventListener('click', onGalerryContainerClick)
galerryContainer.insertAdjacentHTML('beforeend', cardsGalerry);

function createGalerryElements(galleryItems) {
  return galleryItems.map(({preview, original, description}) => {
    return `
    <li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
  })
  .join('')
};
// console.log(createGalerryElements(galleryItems));

function onGalerryContainerClick(evt) {
  const elem = evt.target;
  console.log(elem);
  // src элемента img.lightbox__image
  let srcElem = elem.dataset.source;
  
  if (!srcElem) {
    return
  }
 srcElem = '/'

}
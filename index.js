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
const lightBox = document.querySelector('.js-lightbox');
const imageLightBox = document.querySelector('.lightbox__image');
const openModalBtn = document.querySelector('.lightbox.is-open');
const overlay = document.querySelector('.lightbox__overlay');

const cardsGalerry = createGalerryElements(galleryItems);

galerryContainer.addEventListener('click', onGalerryContainerClick);
galerryContainer.insertAdjacentHTML('beforeend', cardsGalerry);

function createGalerryElements(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
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
    .join('');
  
};
function onCloseModal(el) {
    console.log(el);
  lightBox.classList.remove('is-open');
  window.removeEventListener('keydown', onEscKeyPress);
};

function onEscKeyPress(event) {
  const ESC_KEY_CODE = 'Escape';
  const isEscKey = event.code === ESC_KEY_CODE;

  if (isEscKey) {
    onCloseModal();
  };
}


function onGalerryContainerClick(evt) {
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  const elem = evt.target;
  const srcElem = elem.dataset.source;
  onOpenModal();
  
  imageLightBox.src = srcElem;
}
 
function onOpenModal(evt) {
  lightBox.classList.add('is-open');
  window.addEventListener('keydown', onEscKeyPress);
  const isOpen = document.querySelector('.is-open')
  const btnClose = document.querySelector('.lightbox__button');
  btnClose.addEventListener('click', onCloseModal);
  
  
}

overlay.addEventListener('click', onOverlayClick)
  function onOverlayClick(event) {
    if (event.currentTarget === event.target) {
      console.log('Кликнули именно в бекдроп!!!!');
      onCloseModal();
    }
  }

// function onLeftKeyPress(event) {
//   const LEFT_KEY_CODE = 'ArrowLeft';
//   const isLeftKey = event.code === LEFT_KEY_CODE;

//   if (isLeftKey) {
//     imageLightBox.src = srcElem;
//   };
// }
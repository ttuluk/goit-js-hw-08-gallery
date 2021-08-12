import galleryItems from './js/app.js';

const galerryContainer = document.querySelector('.js-gallery');
const lightBox = document.querySelector('.js-lightbox');
const imageLightBox = document.querySelector('.lightbox__image');
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
  const btnClose = document.querySelector('.lightbox__button');

  btnClose.addEventListener('click', onCloseModal);
  window.addEventListener('keydown', onEscKeyPress);
  
}

overlay.addEventListener('click', onOverlayClick)
  function onOverlayClick(event) {
    if (event.currentTarget === event.target) {
      console.log('Кликнули именно в бекдроп!!!!');
      onCloseModal();
    }
  }
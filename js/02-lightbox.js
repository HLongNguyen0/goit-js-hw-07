import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const imgStringHtml = galleryItems
  .map(
    (e, index) => `
        <a class="gallery__item" href="${galleryItems[index].preview}">
            <img class="gallery__image" src="${galleryItems[index].preview}" alt="Image description" />
        </a>
    `,
  )
  .join('');

gallery.innerHTML = imgStringHtml;

gallery.addEventListener('click', showModal);

function showModal(event) {
  event.preventDefault();
  gallery.removeEventListener('click', showModal);
  const modal = new SimpleLightbox('.gallery a');
}

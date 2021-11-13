import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

function imgStringHtml(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) => `
    <li>
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}" 
            alt="${description}" />
        </a>
    </li>
    `,
    )
    .join('');
}
gallery.insertAdjacentHTML('beforeend', imgStringHtml(galleryItems));

new SimpleLightbox('.gallery__link', {
  captionData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});

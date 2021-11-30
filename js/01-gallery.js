import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const imgStringHtml = galleryItems
  .map(
    (e, index) => `
    <div class="gallery__item">
        <a class="gallery__link" href="">
            <img
            class="gallery__image"
            src="${galleryItems[index].preview}"
            data-source="large-image.jpg"
            alt="${galleryItems[index].description}"
            />
        </a>
    </div>
    `,
  )
  .join('');

gallery.innerHTML = imgStringHtml;

gallery.addEventListener('click', showModal);

function showModal(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  const img = galleryItems.find(img => img.description === event.target.alt);
  const instance = basicLightbox.create(`
    <img src="${img.original}" width="800" height="600">
`);
  instance.show();
}

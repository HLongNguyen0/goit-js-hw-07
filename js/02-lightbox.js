import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const imgStringHtml = galleryItems
  .map(
    ({ preview, original, description }) => `
    <li>
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image lazyload"
            loading="lazy"
            data-src="${preview}" 
            alt="${description}" />
        </a>
    </li>
    `,
  )
  .join('');

gallery.insertAdjacentHTML('beforeend', imgStringHtml);

const modal = new SimpleLightbox('.gallery__link', {
  captionData: 'alt',
  captionDelay: 250,
});

const lazyImgs = document.querySelectorAll('img[loading="lazy"]');

if ('loading' in HTMLImageElement.prototype) {
  lazyImgs.forEach(img => (img.src = img.dataset.src));
  lazyImgsListener();
} else {
  const script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
  script.integrity =
    'sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ==';
  script.crossOrigin = 'anonymous';
  document.body.appendChild(script);
  lazyImgsListener();
}

function lazyImgsListener() {
  lazyImgs.forEach(image =>
    image.addEventListener(
      'load',
      event => {
        event.target.classList.add('appear');
      },
      { once: true },
    ),
  );
}

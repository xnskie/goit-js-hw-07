import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryOg = document.querySelector(".gallery");

function createGallery(arr) {
    const galleryItemsMarkup = arr
    .map(({ preview, original, description }) => {
        return `<li> <a class="gallery__item" href="${original}">
        <img class="gallery__image"
        src="${preview}"
        alt="${description}"
        title="${description}" />
        </a>
        </li>`;
    })
    .join('');
    return galleryOg.insertAdjacentHTML('afterbegin', galleryItemsMarkup);
}

createGallery(galleryItems);
const gallery = new SimpleLightbox('.gallery a');

console.log(galleryItems);


import { galleryItems } from "./gallery-items.js";
// Change code below this line
const refs = {
    div: document.querySelector(".gallery"),
};
const imagesMarkup = createItemsMarkup(galleryItems);

function createItemsMarkup(item) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `<div class="gallery__item">
        <a class="gallery__link" href="${original.value}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
        })
        .join("");
}
const onContainerClick = (e) => {
    e.preventDefault();

    if (e.target.classList.contains("gallery")) {
        return;
    };
    const source = e.target.dataset.source;

    const instance = basicLightbox.create(`
        <img src="${source}"width="800" height="600">`);

    instance.show();
};
function closeModal(event) {
    if (event.code === 'Escape') {
        instance.close();
    }
}

refs.div.addEventListener("click", onContainerClick);
refs.div.addEventListener('click', closeModal)
refs.div.insertAdjacentHTML('beforeend', imagesMarkup)



console.log(galleryItems);

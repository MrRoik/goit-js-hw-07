import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
galleryContainer.insertAdjacentHTML("beforeend", createMarcup(galleryItems));

galleryContainer.addEventListener("click", handleClick);

function createMarcup(array) {
    return array.map(({ preview, original, description }) => 
            `<li class="gallery__item">
                <a class="gallery__link" href = "${original}" >
                    <img class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                        />
                </a>
            </li >`)
        .join("");
}

const instance = basicLightbox.create(`
    <img width="1280" height="auto" src="">
`)

function handleClick(event) {
    event.preventDefault();
    const datasetSource = event.target.dataset.source;
  
    if (!datasetSource) return;
        instance.element().querySelector("img").src = datasetSource;
        instance.show();
}
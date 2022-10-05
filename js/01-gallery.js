import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const getEl = (selector) => document.querySelector(selector);

const galleryWrapper = getEl(".gallery");

const galleryArr = galleryItems.map(
  ({ original, preview, description }) => `<div class="gallery__item">
     <a class="gallery__link" href="${original}">
         <img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}">
     </a>
</div>`
);

galleryWrapper.insertAdjacentHTML("beforeend", galleryArr.join(""));

let instance;

function openWindowHandler(event) {
  event.preventDefault();
  if (event.target !== event.currentTarget) {
    instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">`);

    instance.show();
  }
}

const closeWindowHandler = (event) => {
  console.log("keyclick");
  if (event.code === "Escape") {
    console.log("esc");
    instance.close();
  }
};

galleryWrapper.addEventListener("click", openWindowHandler);
window.addEventListener("keyup", closeWindowHandler);

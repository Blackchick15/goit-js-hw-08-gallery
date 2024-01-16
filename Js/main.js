import galleryItems from "./app.js";
console.log(galleryItems);

const ref = {
    galleryListRef:document.querySelector('.js-gallery'),
    backdropRef:document.querySelector('.js-lihtbox'),
    lihtboxOverlay:document.querySelector('.js-lihtbox_overlay'),
    lihtboxContent:document.querySelector('.js-lihtbox_content'),
    lihtboxImg:document.querySelector('.js-lihtbox_image'),
};

function createGallery(gallery){
  return gallery
  .map(({preview, original, description} , index) => {
    return `<li class="gallery__item">
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
  </li>`;
  })
}




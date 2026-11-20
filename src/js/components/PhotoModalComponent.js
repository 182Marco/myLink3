const PhotoModalComponent = profile => `
  <dialog class="photo-modal">
    <button type="button" class="video-modal__close" aria-label="${ui.closePhoto}">
      <i class="fa-solid fa-xmark" aria-hidden="true"></i>
    </button>
    <img src="${profile.img}" alt="${profile.imgAlt()}" />
  </dialog>`;

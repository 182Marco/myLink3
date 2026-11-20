const VideoModalComponent = () => `
  <dialog class="video-modal">
    <button type="button" class="video-modal__close" aria-label="${ui.closeVideo}">
      <i class="fa-solid fa-xmark" aria-hidden="true"></i>
    </button>
    <div class="video-modal__frame"></div>
  </dialog>`;

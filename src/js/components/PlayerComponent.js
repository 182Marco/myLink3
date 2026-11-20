const PlayerComponent = (id, cfg) => `
  <div class="player" data-player="${id}" data-state="idle">
    <video
      src="${cfg.src}"
      poster="${cfg.poster}"
      aria-label="${cfg.label}"
      preload="metadata"
      controls
      muted
      playsinline
    ></video>
    ${cfg.endedPoster ? `<img class="player__end" src="${cfg.endedPoster}" alt="" hidden />` : ''}
    ${
      cfg.cover
        ? `<button type="button" class="player__cover" aria-label="${ui.playLabel}: ${cfg.label}"><img src="${cfg.cover}" alt="" /></button>`
        : `<button type="button" class="player__play" aria-label="${ui.playLabel}: ${cfg.label}"><i class="fa-solid fa-play" aria-hidden="true"></i></button>`
    }
    <p class="player__msg" role="status" hidden>${ui.unavailable}</p>
  </div>`;

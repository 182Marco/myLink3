const CardBadgeComponent = item =>
  item.player || item.isOnYouTube
    ? '<span class="card__badge" aria-hidden="true"><i class="fa-solid fa-play"></i></span>'
    : '<span class="card__badge" aria-hidden="true"><i class="fa-solid fa-arrow-up-right-from-square"></i></span>';

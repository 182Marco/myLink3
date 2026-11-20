// Wraps content in a link, a placeholder (link: null), or nothing (inline player).
const CardLinkComponent = (item, inner) =>
  item.player
    ? inner
    : item.link
      ? `<a class="card__link" href="${item.link}" target="_blank" rel="noopener noreferrer"
           data-title="${item.title}" ${item.isOnYouTube ? 'data-modal' : ''}>${inner}<span class="sr-only"> ${ui.newTab}</span></a>`
      : `<div class="card__link is-placeholder" aria-disabled="true">${inner}</div>`;

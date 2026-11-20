const CoverCardComponent = (item, accordion) => {
  const caption = accordion.hasCaption !== false;
  return `
  <li class="card ${caption ? '' : 'card--poster'}">
    ${CardLinkComponent(
      item,
      `<div class="card__media">
         ${
           item.player
             ? PlayerComponent(item.player, players[item.player])
             : `<img src="${item.img}" alt="${caption ? '' : item.title}" loading="lazy" />${caption ? CardBadgeComponent(item) : ''}`
         }
       </div>
       ${caption ? CardBodyComponent(item, accordion.layout === 'grid') : ''}`
    )}
  </li>`;
};

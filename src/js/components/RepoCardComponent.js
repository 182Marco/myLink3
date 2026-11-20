// app card: icon + title + subtitle + round arrow
const RepoCardComponent = (item, accordion) => `
  <li class="card card--${accordion.card}" ${item.showsPlayer ? `data-shows-player="${item.showsPlayer}"` : ''}>
    ${CardLinkComponent(
      item,
      `<img class="card__icon" src="${item.img}" alt="" />
       <div class="card__body">
         <h4 class="card__title">${item.title}</h4>
         <p class="card__desc card__desc--idle">${item.description}</p>
         ${item.liveDescription ? `<p class="card__desc card__desc--live">${item.liveDescription}</p>` : ''}
       </div>
       ${item.showsPlayer ? `<span class="card__live">${ui.liveBadge}</span>` : ''}
       <span class="card__go" aria-hidden="true"><i class="fa-solid fa-arrow-right"></i></span>`
    )}
  </li>`;

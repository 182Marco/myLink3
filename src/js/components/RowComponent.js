// list row: icon + name + optional description + chevron
const RowComponent = (item, accordion) => `
  <li class="row ${item.description ? '' : 'row--plain'}">
    ${CardLinkComponent(
      item,
      `<i class="${item.icon ?? accordion.icon} row__icon" aria-hidden="true"></i>
       <span class="row__title">${item.title}</span>
       ${item.description ? `<span class="row__desc">${item.description}</span>` : ''}
       <i class="fa-solid fa-chevron-right row__go" aria-hidden="true"></i>`
    ).replace('card__link', 'row__link')}
  </li>`;

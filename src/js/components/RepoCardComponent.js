// app card: icon + title + subtitle + round arrow
const RepoCardComponent = (item, accordion) => `
  <li class="card card--${accordion.card}">
    ${CardLinkComponent(
      item,
      `<img class="card__icon" src="${item.img}" alt="" />
       <div class="card__body">
         <h4 class="card__title">${item.title}</h4>
         <p class="card__desc">${item.description}</p>
       </div>
       <span class="card__go" aria-hidden="true"><i class="fa-solid fa-arrow-right"></i></span>`
    )}
  </li>`;

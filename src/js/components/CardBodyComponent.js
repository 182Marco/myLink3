const CardBodyComponent = (item, showDescription) => `
  <div class="card__body">
    <h4 class="card__title">${item.title}</h4>
    ${showDescription ? `<p class="card__desc">${item.description}</p>` : ''}
  </div>`;

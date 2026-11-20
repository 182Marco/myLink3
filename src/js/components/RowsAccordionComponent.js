// one accordion for the whole list: `summary` is its closed-state title
const RowsAccordionComponent = a => `
  <article class="accordion" data-open="${a.isOpen === true}">
    <h3 class="accordion__heading">
      <button type="button" class="accordion__trigger" id="${a.id}-trigger"
              aria-expanded="${a.isOpen === true}" aria-controls="${a.id}-panel">
        <i class="${a.icon} accordion__icon" aria-hidden="true"></i>
        <span>${a.summary}</span>
        <i class="fa-solid fa-chevron-down accordion__chevron" aria-hidden="true"></i>
      </button>
    </h3>
    <div class="accordion__panel" id="${a.id}-panel" role="region" aria-labelledby="${a.id}-trigger">
      <div class="accordion__inner">
        <ul class="rows rows--${a.card}" aria-label="${a.title}">${a.list.map(item => RowComponent(item, a)).join('')}</ul>
      </div>
    </div>
  </article>`;

const cardComponents = {
  cover: CoverCardComponent,
  app: RepoCardComponent,
};

const CardListComponent = a => `
  <ul class="cards cards--${a.layout} cards--${a.card} ${a.hasCaption === false ? 'cards--poster' : ''}" ${a.isCollapsible === false ? `aria-label="${a.title}"` : ''}>
    ${a.list.map(item => cardComponents[a.card](item, a)).join('')}
  </ul>`;

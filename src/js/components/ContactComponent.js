const ContactComponent = c => `
  <a class="social" href="${c.href}" aria-label="${c.contact}" title="${c.contact}"
     ${c.isExternal ? 'target="_blank" rel="noopener noreferrer"' : ''}>
    <i class="${c.icon}" aria-hidden="true"></i>
  </a>`;

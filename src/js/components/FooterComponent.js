const FooterComponent = (f, profile, contacts) => {
  const cta = contacts.find(c => c.isCta);
  return `
    <div class="footer__cta">
      <h2 class="heading">${f.title} <span class="accent">${f.accent}</span></h2>
      ${
        cta
          ? `<a class="footer__mail" href="${cta.href}"><i class="${cta.icon}" aria-hidden="true"></i><span>${cta.contact}</span><i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a>`
          : ''
      }
    </div>
    <div class="footer__bar">
      <div>
        <p class="header__name">${profile.fullName()}</p>
        <p class="header__role">${profile.role}</p>
      </div>
      <nav class="socials" aria-label="${ui.contacts}">${contacts.map(ContactComponent).join('')}</nav>
      <p class="footer__copy">${f.copyright}</p>
    </div>`;
};

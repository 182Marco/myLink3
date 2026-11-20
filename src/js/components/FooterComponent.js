const FooterComponent = (f, profile, contacts) => {
  const cta = contacts.find(c => c.isCta);
  return `
    ${
      cta
        ? `<a class="footer__mail" href="${cta.href}" aria-label="${cta.contact}">
      <img class="footer__mailImg" src="${f.img}" alt="" />
      <span class="footer__mailTitle">${f.title}</span>
      <span class="footer__mailSub">${f.subtitle}</span>
      <span class="footer__mailBtn"><i class="${f.buttonIcon}" aria-hidden="true"></i>${f.button}</span>
    </a>`
        : ''
    }
    <div class="footer__bar">
      <div>
        <p class="header__name">${profile.fullName()}</p>
        <p class="header__role">${profile.role}</p>
      </div>
      <nav class="socials" aria-label="${ui.contacts}">${contacts.map(ContactComponent).join('')}</nav>
      <p class="footer__copy">${f.copyright}</p>
    </div>`;
};

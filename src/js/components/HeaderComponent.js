const HeaderComponent = (profile, contacts) => `
  <button type="button" class="avatar" aria-label="${ui.openPhoto}" data-photo>
    <img src="${profile.img}" alt="${profile.imgAlt()}" />
  </button>
  <div>
    <p class="header__name">${profile.fullName()}</p>
    <p class="header__role">${profile.role}</p>
    ${contacts.length ? `<div class="chips">${contacts.map(ChipComponent).join('')}</div>` : ''}
  </div>`;

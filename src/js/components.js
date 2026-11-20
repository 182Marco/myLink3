/*
 * Pure components: data in, template string out. No DOM access, no state.
 * Data is trusted and developer-authored, so it is injected
 * unescaped on purpose.
 */

const HeadingComponent = ({ title, accent }, level = 2) => `
  <span class="dash" aria-hidden="true"></span>
  <h${level} class="heading">${title} <span class="accent">${accent}</span></h${level}>`;

const ChipComponent = c => `
  <a class="chip" href="${c.href}">
    <i class="${c.icon}" aria-hidden="true"></i>${c.contact}
  </a>`;

const HeaderComponent = (profile, contacts) => `
  <button type="button" class="avatar" aria-label="${ui.openPhoto}" data-photo>
    <img src="${profile.img}" alt="${profile.imgAlt()}" />
  </button>
  <div>
    <p class="header__name">${profile.fullName()}</p>
    <p class="header__role">${profile.role}</p>
    ${contacts.length ? `<div class="chips">${contacts.map(ChipComponent).join('')}</div>` : ''}
  </div>`;

const PhotoModalComponent = profile => `
  <dialog class="photo-modal">
    <button type="button" class="video-modal__close" aria-label="${ui.closePhoto}">
      <i class="fa-solid fa-xmark" aria-hidden="true"></i>
    </button>
    <img src="${profile.img}" alt="${profile.imgAlt()}" />
  </dialog>`;

const PlayerComponent = (id, cfg) => `
  <div class="player" data-player="${id}" data-state="idle">
    <video
      src="${cfg.src}"
      poster="${cfg.poster}"
      aria-label="${cfg.label}"
      preload="metadata"
      controls
      muted
      playsinline
    ></video>
    ${cfg.endedPoster ? `<img class="player__end" src="${cfg.endedPoster}" alt="" hidden />` : ''}
    ${
      cfg.cover
        ? `<button type="button" class="player__cover" aria-label="${ui.playLabel}: ${cfg.label}"><img src="${cfg.cover}" alt="" /></button>`
        : `<button type="button" class="player__play" aria-label="${ui.playLabel}: ${cfg.label}"><i class="fa-solid fa-play" aria-hidden="true"></i></button>`
    }
    <p class="player__msg" role="status" hidden>${ui.unavailable}</p>
  </div>`;

const TechIconComponent = tech => `
  <li title="${tech.name}">
    ${
      tech.img
        ? `<img src="${tech.img}" alt="${tech.name}" />`
        : `<i class="${tech.icon}" style="color:${tech.color}" role="img" aria-label="${tech.name}"></i>`
    }
  </li>`;

const HeroComponent = h => `
  <section class="hero" data-scroll-anchor>
    <div class="hero__text">
      <p class="badge"><i class="fa-solid fa-wand-magic-sparkles" aria-hidden="true"></i> ${h.badge}</p>
      <h1>${h.title.map(t => `<span>${t}</span>`).join(' ')}</h1>
      <p class="hero__subtitle">${h.subtitle}</p>
      <p class="hero__description">${h.description}</p>
      <ul class="tech" aria-label="Technologies">
        ${h.techStack.map(TechIconComponent).join('')}
      </ul>
    </div>
    <div class="hero__media">${PlayerComponent(h.player, players[h.player])}</div>
  </section>`;

const AboutComponent = a => `
  <section class="about" data-scroll-anchor>
    <div class="about__media">${PlayerComponent(a.player, players[a.player])}</div>
    <div class="about__text">
      <span class="dash" aria-hidden="true"></span>
      <h2 class="heading">${a.title} <span class="accent">${a.accent}</span></h2>
      <p>${a.description}</p>
    </div>
  </section>`;

/* ----- cards ----- */

const CardBadgeComponent = item =>
  item.player || item.isOnYouTube
    ? '<span class="card__badge" aria-hidden="true"><i class="fa-solid fa-play"></i></span>'
    : '<span class="card__badge" aria-hidden="true"><i class="fa-solid fa-arrow-up-right-from-square"></i></span>';

const CardBodyComponent = (item, showDescription) => `
  <div class="card__body">
    <h4 class="card__title">${item.title}</h4>
    ${showDescription ? `<p class="card__desc">${item.description}</p>` : ''}
  </div>`;

// Wraps content in a link, a placeholder (link: null), or nothing (inline player).
const CardLinkComponent = (item, inner) =>
  item.player
    ? inner
    : item.link
      ? `<a class="card__link" href="${item.link}" target="_blank" rel="noopener noreferrer"
           ${item.isOnYouTube ? 'data-modal' : ''}>${inner}<span class="sr-only"> ${ui.newTab}</span></a>`
      : `<div class="card__link is-placeholder" aria-disabled="true">${inner}</div>`;

const CoverCardComponent = (item, accordion) => {
  const caption = accordion.hasCaption !== false;
  return `
  <li class="card ${caption ? '' : 'card--poster'}">
    ${CardLinkComponent(
      item,
      `<div class="card__media">
         ${
           item.player
             ? PlayerComponent(item.player, players[item.player])
             : `<img src="${item.img}" alt="${caption ? '' : item.title}" loading="lazy" />${caption ? CardBadgeComponent(item) : ''}`
         }
       </div>
       ${caption ? CardBodyComponent(item, accordion.layout === 'grid') : ''}`
    )}
  </li>`;
};

// icon (font or image) + title + subtitle + trailing symbol
const RepoCardComponent = (item, accordion) => `
  <li class="card card--${accordion.card}">
    ${CardLinkComponent(
      item,
      `${
        item.img
          ? `<img class="card__icon" src="${item.img}" alt="" />`
          : `<i class="${item.icon} card__icon" style="color:${item.color}" aria-hidden="true"></i>`
      }
       <div class="card__body">
         <h4 class="card__title">${item.title}</h4>
         <p class="card__desc">${item.description}</p>
       </div>
       <span class="card__go" aria-hidden="true"><i class="${accordion.card === 'app' ? 'fa-solid fa-arrow-right' : 'fa-solid fa-arrow-up-right-from-square'}"></i></span>`
    )}
  </li>`;

const cardComponents = {
  cover: CoverCardComponent,
  app: RepoCardComponent,
  repo: RepoCardComponent,
};

const CardListComponent = a => `
  <ul class="cards cards--${a.layout} cards--${a.card} ${a.hasCaption === false ? 'cards--poster' : ''}" ${a.isCollapsible === false ? `aria-label="${a.title}"` : ''}>
    ${a.list.map(item => cardComponents[a.card](item, a)).join('')}
  </ul>`;

const AccordionComponent = a => {
  if (a.isCollapsible === false) return `<div class="block" id="${a.id}">${CardListComponent(a)}</div>`;
  const cards = CardListComponent(a);
  const body =
    a.layout === 'scroller'
      ? `<div class="scroller">
           <button type="button" class="scroller__arrow scroller__arrow--prev" aria-label="${ui.scrollPrev}" hidden>
             <i class="fa-solid fa-chevron-left" aria-hidden="true"></i>
           </button>
           ${cards}
           <button type="button" class="scroller__arrow scroller__arrow--next" aria-label="${ui.scrollNext}" hidden>
             <i class="fa-solid fa-chevron-right" aria-hidden="true"></i>
           </button>
         </div>`
      : cards;
  return `
    <article class="accordion" id="${a.id}" data-open="${a.isOpen}">
      <h3 class="accordion__heading">
        <button type="button" class="accordion__trigger" id="${a.id}-trigger"
                aria-expanded="${a.isOpen}" aria-controls="${a.id}-panel">
          <i class="${a.icon} accordion__icon" aria-hidden="true"></i>
          <span>${a.title}</span>
          <i class="fa-solid fa-chevron-down accordion__chevron" aria-hidden="true"></i>
        </button>
      </h3>
      <div class="accordion__panel" id="${a.id}-panel" role="region" aria-labelledby="${a.id}-trigger">
        <div class="accordion__inner">${body}</div>
      </div>
    </article>`;
};

const ProjectsComponent = (intro, list) => `
  <section class="projects" data-scroll-anchor>
    <div class="projects__head">
      <div>
        <p class="eyebrow"><span class="eyebrow__dash" aria-hidden="true"></span>${intro.eyebrow}</p>
        <h2 class="heading">${intro.title} <span class="accent">${intro.accent}</span></h2>
      </div>
      <span class="stripes" aria-hidden="true"></span>
    </div>
    ${list.map(AccordionComponent).join('')}
  </section>`;

const ContactComponent = c => `
  <a class="social" href="${c.href}" aria-label="${c.contact}" title="${c.contact}"
     ${c.isExternal ? 'target="_blank" rel="noopener noreferrer"' : ''}>
    <i class="${c.icon}" aria-hidden="true"></i>
  </a>`;

const FooterComponent = (f, profile, contacts) => {
  const cta = contacts.find(c => c.isCta);
  return `
    <span class="footer__wave" aria-hidden="true"></span>
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
      <nav class="socials" aria-label="Contacts">${contacts.map(ContactComponent).join('')}</nav>
      <p class="footer__copy">${f.copyright}</p>
    </div>`;
};

const VideoModalComponent = () => `
  <dialog class="video-modal">
    <button type="button" class="video-modal__close" aria-label="${ui.closeVideo}">
      <i class="fa-solid fa-xmark" aria-hidden="true"></i>
    </button>
    <div class="video-modal__frame"></div>
  </dialog>`;

const ModalIframeComponent = (src, title) => `
  <iframe src="${src}" title="${title}" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;

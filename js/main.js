document.title = `${myData.fullName()}`;

document.head.appendChild(
  Object.assign(document.createElement('link'), {
    rel: 'icon',
    href: myData.favicon,
  })
);

const params = new URLSearchParams(window.location.search);
const header = document.querySelector('header');

header.innerHTML = `
  <figure>
    <i class="fa-solid fa-x"></i>
    <img src="${myData.img}" alt="${myData.imgAlt()}" />
  </figure>
  <nav>
    <h1>${myData.fullName()}</h1>
    <ul>
      ${myData.contacts
        .map(c =>
          c.isAlwaysVisible || params.has('data')
            ? `
        <li>
          <i class="${c.icon}"></i>
          <h2>${c.contact}</h2>
        </li>
      `
            : ''
        )
        .join('')}
    </ul>
  </nav>
`;

document
  .querySelectorAll('ul li')
  .forEach((s, i) =>
    myData.contacts[i].onClick
      ? s.addEventListener('click', myData.contacts[i].onClick)
      : null
  );

const myPic = document.querySelector('figure');
myPic.addEventListener('click', () => myPic.classList.toggle('open'));

const toggleModal = ev => {
  ev.currentTarget.querySelector('dialog').classList.toggle('show');
  ev.stopPropagation();
};

const GetLinkTextFnComponent = resourceObj =>
  `
     <section>
       <figure>
         <img alt="${resourceObj.description}" src="${resourceObj.img}" />
       </figure>
       <h5>${resourceObj.title}</h5>
     </section>
  `;

const ExternalLinkFnComponent = resourceObj => `
  <li onclick="window.open('${resourceObj.link}', '_blank')">       
      ${GetLinkTextFnComponent(resourceObj)}
  </li>`;

const videoModalComponent = resourceObj => `
    <dialog>
      <div class="x-box" onclick="toggleModal(event)">
        <i class="fa-solid fa-x"></i>
      </div> 
      <div class="video-box">
        <iframe 
          src="${resourceObj.link}" 
          title="${resourceObj.title}" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" 
          allowfullscreen>
        </iframe>
      </div> 
    </dialog>`;

const IframeFnComponent = resourceObj => `
  <li onclick="toggleModal(event)" >
     ${GetLinkTextFnComponent(resourceObj)}
     ${videoModalComponent(resourceObj)}     
  </li>`;

const AccordionFnComponent = accordion => `
    <article id="${accordion.id}">
      <summary>
        ${accordion.title}
        <i class="fa-solid fa-chevron-right rotate"></i>
      </summary>
      <ul>
        ${accordion.list
          .map(resourceObj =>
            resourceObj.isOnYouTube && window.innerWidth >= 768
              ? IframeFnComponent(resourceObj)
              : ExternalLinkFnComponent(resourceObj)
          )
          .join('')}
      </ul>
    </article>
  `;

const visibleAccordions = accordions
  .map(obj => ({
    ...obj,
    list: obj.list.filter(e => e.isVisible),
  }))
  .filter(obj => obj.list.length > 0);

const mainEl = document.querySelector('main');

visibleAccordions.forEach(a => (mainEl.innerHTML += AccordionFnComponent(a)));

const collapsedAccordionHeight = '40px';

const mappedAccordion = visibleAccordions.map(e => ({
  id: e.id,
  el: document.getElementById(e.id),
  chevron: document.querySelector(`#${e.id} .fa-chevron-right`),
  initialHeight: null,
}));

mappedAccordion.forEach(a => {
  a.initialHeight = `${a.el.offsetHeight}px`;
});

const shutAccordion = a => {
  a.el.style.height = collapsedAccordionHeight;
  a.chevron?.classList.remove('rotate');
};
const openAccordion = a => {
  a.el.style.height = a.initialHeight;
  a.chevron?.classList.add('rotate');
};

const toggleAccordions = selectedA =>
  selectedA.el.style.height === collapsedAccordionHeight
    ? openAccordion(selectedA)
    : shutAccordion(selectedA);

mappedAccordion.forEach(s =>
  s.el.addEventListener('click', () => toggleAccordions(s))
);

/* Bootstrap: data -> DOM, then wire behaviour. Order matters. */

document.title = myData.fullName();
document.head.appendChild(
  Object.assign(document.createElement('link'), {
    rel: 'icon',
    href: myData.favicon,
  })
);

const params = new URLSearchParams(window.location.search);

const visibleContacts = myData.contacts.filter(
  c => c.isAlwaysVisible || params.has('data')
);

const contactsIn = place =>
  visibleContacts.filter(c => c.places.includes(place));

const visibleAccordions = accordions
  .map(obj => ({ ...obj, list: obj.list.filter(e => e.isVisible) }))
  .filter(obj => obj.list.length > 0);

document.querySelector('header').innerHTML = HeaderComponent(
  myData,
  contactsIn('header')
);
document.querySelector('main').innerHTML =
  HeroComponent(hero) +
  AboutComponent(about) +
  ProjectsComponent(projectsIntro, visibleAccordions);
document.querySelector('footer').innerHTML = FooterComponent(
  footer,
  myData,
  contactsIn('footer')
);

initAccordions();
initScrollers();
initMedia(); // last: starts the automatic sequence

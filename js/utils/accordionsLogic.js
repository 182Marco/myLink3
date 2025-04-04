const mappedAccordion = visibleAccordions.map(e => ({
  id: e.id,
  el: document.getElementById(e.id),
  chevron: document.querySelector(`#${e.id} .fa-chevron-right`),
  initialHeight: null,
}));

mappedAccordion.forEach(s => {
  s.initialHeight = `${s.el.offsetHeight}px`;
  s.el.style.height = collapsedAccordionHeight;
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
  mappedAccordion.forEach(a =>
    a === selectedA && selectedA.el.style.height === collapsedAccordionHeight
      ? openAccordion(a)
      : shutAccordion(a)
  );

mappedAccordion.forEach(s =>
  s.el.addEventListener('click', () => toggleAccordions(s))
);

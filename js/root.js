const visibleAccordions = accordions
  .map(obj => ({
    ...obj,
    list: obj.list.filter(e => e.isVisible),
  }))
  .filter(obj => obj.list.length > 0);

const sectionEl = document.querySelector('#root');

visibleAccordions.forEach(
  a => (sectionEl.innerHTML += AccordionFnComponent(a))
);

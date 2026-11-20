/* Accordion behaviour. State lives in data-open. */

const setAccordion = (el, open) => {
  el.dataset.open = String(open);
  el.querySelector('.accordion__trigger').setAttribute('aria-expanded', open);
};

const initAccordions = () =>
  document.querySelectorAll('.accordion').forEach(el =>
    el
      .querySelector('.accordion__trigger')
      .addEventListener('click', () =>
        setAccordion(el, el.dataset.open !== 'true')
      )
  );

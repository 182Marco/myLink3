/* Accordion + horizontal scroller behaviour. State lives in data-open. */

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

const initScrollers = () =>
  document.querySelectorAll('.scroller').forEach(scroller => {
    const list = scroller.querySelector('.cards');
    const prev = scroller.querySelector('.scroller__arrow--prev');
    const next = scroller.querySelector('.scroller__arrow--next');
    const update = () => {
      const max = list.scrollWidth - list.clientWidth;
      prev.hidden = list.scrollLeft <= 1;
      next.hidden = list.scrollLeft >= max - 1;
    };
    const go = dir => () =>
      list.scrollBy({
        left: dir * list.clientWidth * 0.8,
        behavior: reducedMotion.matches ? 'auto' : 'smooth',
      });
    prev.addEventListener('click', go(-1));
    next.addEventListener('click', go(1));
    list.addEventListener('scroll', update, { passive: true });
    new ResizeObserver(update).observe(list); // also fires when it opens
  });

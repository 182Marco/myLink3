// utils
const getEl = selector => document.querySelector(selector);
const setHeight = (el, height) => (el.style.height = height);

// get elements
const sections = [
  { id: '#tutorials', chevron: '.fa-chevron-right' },
  { id: '#u-ex', chevron: '.fa-chevron-right' },
  { id: '#source-code', chevron: '.fa-chevron-right' },
].map(e => ({
  el: getEl(e.id),
  chevron: getEl(`${e.id} ${e.chevron}`),
  initialHeight: null,
}));

const summaryHeight = '50px';

// Set initial height and store full heights
sections.forEach(s => {
  if (s.el) {
    s.initialHeight = `${s.el.offsetHeight}px`;
    s.el.style.height = summaryHeight;
  }
});

// Toggle function (with close other sections)
const toggleSection = selectedS => {
  sections.forEach(s => {
    if (
      s.el !== selectedS.el &&
      (window.innerWidth < 433 || window.innerWidth > 833)
    ) {
      // Close other sections
      setHeight(s.el, summaryHeight);
      s.chevron?.classList.remove('rotate');
    }
  });

  // Toggle the selected section
  if (selectedS.el.style.height === summaryHeight) {
    setHeight(selectedS.el, selectedS.initialHeight);
    selectedS.chevron?.classList.add('rotate');
  } else {
    setHeight(selectedS.el, summaryHeight);
    selectedS.chevron?.classList.remove('rotate');
  }
};

// Attach event listeners
sections.forEach(s => {
  if (!s.el) return;
  s.el.addEventListener('click', () => toggleSection(s));
});

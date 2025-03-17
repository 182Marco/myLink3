// utils
const setHeight = height => (tutorialsEl.style.height = height);
const getEl = selector => document.querySelector(selector);
// get elements
const tutorialsEl = getEl('article');
const summaryEl = getEl('#tutorial summary');
const chevron = getEl('.fa-chevron-right');
// heights
const initialTutorialsElHeight = `${tutorialsEl.offsetHeight}px`;
const summaryHeight = '20px';
// set initial height 0
tutorialsEl.style.height = summaryHeight;

const setTutorialHeight = () =>
  tutorialsEl.style.height === summaryHeight
    ? setHeight(initialTutorialsElHeight)
    : setHeight(summaryHeight);

const handleTutorialAnimations = () => {
  setTutorialHeight();
  chevron.classList.toggle('rotate');
};

tutorialsEl.addEventListener('click', handleTutorialAnimations);

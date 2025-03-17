// utils
const setHeight = height => (tutorialsEl.style.height = height);
const getTag = selector => document.querySelector(selector);
// get elements
const tutorialsEl = getTag('article');
const summaryEl = getTag('#tutorial summary');
const chevron = getTag('.fa-chevron-right');
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

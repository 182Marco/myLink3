// LINKS
const deepCopy =
  'https://www.linkedin.com/feed/update/urn:li:activity:7174874211486711808/';
const generics =
  'https://www.linkedin.com/feed/update/urn:li:activity:7177355303410167810/';
const shallowOrDeepCopy =
  'https://www.linkedin.com/feed/update/urn:li:activity:7172495074285469697/';
const propsSpreading =
  'https://www.linkedin.com/feed/update/urn:li:activity:7169996639141670912/';
const barrelImport =
  'https://www.linkedin.com/feed/update/urn:li:activity:7167177829397217280/';
const customHooks =
  'https://www.linkedin.com/feed/update/urn:li:activity:7164705355015430147/';
// UTILS
const getElement = selector => document.querySelector(selector);
const goTo = link => window.open(link, '_blank');
const attachClickListener = (el, link) =>
  el.addEventListener('click', () => goTo(link));
const toggleClass = () => main.classList.toggle('reveal');
// DOM ELEMENTS
const summary = getElement('summary');
const main = getElement('details main');
const deepCopyBtn = getElement('#deepCopyBtn');
const genericsBtn = getElement('#genericsBtn');
const shallowOrDeepCopyBtn = getElement('#shallowOrDeepCopyBtn');
const propsSpreadingBtn = getElement('#propsSpreadingBtn');
const barrelImportBtn = getElement('#barrelImportBtn');
const customHooksBtn = getElement('#customHooksBtn');
// LISTENERS
// toggle class
summary.addEventListener('click', toggleClass);
// add links
attachClickListener(deepCopyBtn, deepCopy);
attachClickListener(genericsBtn, generics);
attachClickListener(shallowOrDeepCopyBtn, shallowOrDeepCopy);
attachClickListener(propsSpreadingBtn, propsSpreading);
attachClickListener(barrelImportBtn, barrelImport);
attachClickListener(customHooksBtn, customHooks);

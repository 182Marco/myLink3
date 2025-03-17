// LINKS
const myBasicLinkedinUrl = 'https://www.linkedin.com/in/marco-milza/';
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
const getEl = selector => document.querySelector(selector);
const goTo = link => window.open(link, '_blank');
const attachClickListener = (el, link) =>
  el.addEventListener('click', () => goTo(link));
const toggleClass = () => {
  if (ul.classList.contains('reveal')) {
    ul.classList.remove('reveal');
    ul.classList.add('hide');
  } else {
    ul.classList.remove('hide');
    ul.classList.add('reveal');
  }
};
// DOM ELEMENTS
const summary = getEl('summary');
const ul = getEl('details ul');
const deepCopyBtn = getEl('#deepCopyBtn');
const genericsBtn = getEl('#genericsBtn');
const shallowOrDeepCopyBtn = getEl('#shallowOrDeepCopyBtn');
const propsSpreadingBtn = getEl('#propsSpreadingBtn');
const barrelImportBtn = getEl('#barrelImportBtn');
const customHooksBtn = getEl('#customHooksBtn');
// LISTENERS
// toggle class
summary.addEventListener('click', toggleClass);
// add links
document.addEventListener('DOMContentLoaded', () =>
  attachClickListener(getEl('.fa-linkedin'), myBasicLinkedinUrl)
);
attachClickListener(deepCopyBtn, deepCopy);
attachClickListener(genericsBtn, generics);
attachClickListener(shallowOrDeepCopyBtn, shallowOrDeepCopy);
attachClickListener(propsSpreadingBtn, propsSpreading);
attachClickListener(barrelImportBtn, barrelImport);
attachClickListener(customHooksBtn, customHooks);

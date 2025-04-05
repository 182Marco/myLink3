const scripts = [
  './js/rawData.js',
  './js/components/GetLinkTextFnComponent.js',
  './js/components/ExternalLinkFnComponent.js',
  './js/components/AccordionFnComponent.js',
  './js/utils/toggleModal.js',
  './js/components/IframeFnComponent.js',
  './js/root.js',
  './js/utils/fixedVars.js',
  './js/utils/accordionsLogic.js',
];

const loadScriptsSequentially = (i = 0) => {
  if (i >= scripts.length) return;
  const s = document.createElement('script');
  s.src = scripts[i];
  s.onload = () => loadScriptsSequentially(i + 1);
  document.body.appendChild(s);
};

loadScriptsSequentially();

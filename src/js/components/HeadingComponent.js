const HeadingComponent = ({ title, accent }, level = 2) => `
  <span class="dash" aria-hidden="true"></span>
  <h${level} class="heading">${title} <span class="accent">${accent}</span></h${level}>`;

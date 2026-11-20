const ProjectsComponent = (intro, list) => `
  <section class="projects" data-scroll-anchor>
    <div class="projects__head">
      <div>
        <p class="eyebrow"><span class="eyebrow__dash" aria-hidden="true"></span>${intro.eyebrow}</p>
        <h2 class="heading">${intro.title} <span class="accent">${intro.accent}</span></h2>
      </div>
      <span class="stripes" aria-hidden="true"></span>
    </div>
    ${list.map(AccordionComponent).join('')}
  </section>`;

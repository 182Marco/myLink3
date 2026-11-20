const HeroComponent = h => `
  <section class="hero" data-scroll-anchor>
    <div class="hero__text">
      <p class="badge"><i class="fa-solid fa-wand-magic-sparkles" aria-hidden="true"></i> ${h.badge}</p>
      <h1>${h.title.map(t => `<span>${t}</span>`).join(' ')}<span class="accent">${h.accent}</span></h1>
      <p class="hero__description">${h.description}</p>
      <ul class="tech" aria-label="${ui.technologies}">
        ${h.techStack.map(TechIconComponent).join('')}
      </ul>
    </div>
    <div class="hero__media">${PlayerComponent(h.player, players[h.player])}</div>
  </section>`;

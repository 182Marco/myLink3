const AboutComponent = a => `
  <section class="about" data-scroll-anchor>
    <div class="about__media">${PlayerComponent(a.player, players[a.player])}</div>
    <div class="about__text">
      <p class="eyebrow eyebrow--accent"><span class="eyebrow__dash" aria-hidden="true"></span>${a.eyebrow}</p>
      <h2 class="heading"><span>${a.title}</span> <span class="accent">${a.accent}</span></h2>
      <p>${a.description}</p>
    </div>
  </section>`;

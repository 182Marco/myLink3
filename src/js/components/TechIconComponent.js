const TechIconComponent = tech => `
  <li title="${tech.name}">
    ${
      tech.img
        ? `<img src="${tech.img}" alt="${tech.name}" />`
        : `<i class="${tech.icon}" style="color:${tech.color}" role="img" aria-label="${tech.name}"></i>`
    }
  </li>`;

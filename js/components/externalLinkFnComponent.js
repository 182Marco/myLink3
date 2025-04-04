const ExternalLinkFnComponent = resourceObj => `
  <li onclick="window.open('${resourceObj.link}', '_blank')">       
      ${getLinkText(resourceObj)}
  </li>`;

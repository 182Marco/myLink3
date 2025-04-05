const ExternalLinkFnComponent = resourceObj => `
  <li onclick="window.open('${resourceObj.link}', '_blank')">       
      ${GetLinkTextFnComponent(resourceObj)}
  </li>`;

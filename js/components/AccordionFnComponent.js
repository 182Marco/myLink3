const AccordionFnComponent = accordion => `
    <article id="${accordion.id}">
      <summary>
        ${accordion.title}
        <i class="fa-solid fa-chevron-right"></i>
      </summary>
      <ul>
        ${accordion.list
          .map(resourceObj =>
            resourceObj.isOnYouTube && window.innerWidth >= 768
              ? IframeFnComponent(resourceObj)
              : ExternalLinkFnComponent(resourceObj)
          )
          .join('')}
      </ul>
    </article>
  `;

const GetLinkTextFnComponent = resourceObj =>
  `
     <section>
       <figure>
         <img alt="${resourceObj.description}" src="${resourceObj.img}" />
       </figure>
       <h5>${resourceObj.title}</h5>
     </section>
  `;

const IframeFnComponent = resourceObj => `
  <li onclick="toggleModal(event)" >
     ${GetLinkTextFnComponent(resourceObj)}
     <div class="modal">
      <div class="x-box" onclick="toggleModal(event)">
        <i class="fa-solid fa-x"></i>
      </div> 
      <div class="video-box">
        <iframe 
          src="${resourceObj.link}" 
          title="${resourceObj.title}" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" 
          allowfullscreen>
        </iframe>
      </div> 
    </div>
  </li>`;

const accordions = [
  {
    id: 'tutorials',
    title: 'Coding Tutorials by me',
    list: [
      {
        title: 'Shallow or Deep Copy?',
        description:
          'I explain what happens when you shallow copy a reference and the potential bugs that may arise.',
        link: 'https://www.youtube.com/embed/k2FVpUXqSfc?si=lUnx5xij0GZUtr5M',
        isOnYouTube: true,
        isVisible: true,
        img: 'img/4.avif',
      },
      {
        title: 'Thinking Through a Deep Copy Function',
        description:
          "<code>StructuredClone()</code> has been available since ECMAScript 2021, but here's a logical exercise to write a deep copy function that works regardless of nested references.",
        link: 'https://www.youtube.com/embed/FB6LsVv2IKI?si=mDIviaVoEtpUYiJu',
        isOnYouTube: true,
        isVisible: true,
        img: 'img/5.avif',
      },
      {
        title: 'Typescript Generic Explanation',
        description:
          'A simple way to understand generics and an example of usage with different syntaxes.',
        link: 'https://www.youtube.com/embed/4aE7kfqhdPg?si=UHwChIoyU8jU7IVG',
        isOnYouTube: true,
        isVisible: true,
        img: 'img/3.avif',
      },
      {
        title: 'Spread props on a React Component',
        description:
          'I show how to use the rest operator to isolate props (e.g., button props in a modal) and spread them onto components.',
        link: 'https://www.youtube.com/embed/KA6Ccu5F5ik?si=9MHZEGvy4EZTTDHP',
        isOnYouTube: true,
        isVisible: true,
        img: 'img/7.avif',
      },
      {
        title: 'Decoupled UI & Logic, Custom Hooks',
        description:
          'I show how custom hooks in React help separate logic from JSX/TSX templates, improving code reusability and maintainability.',
        link: 'https://www.youtube.com/embed/3QknDb6h88s?si=pjDFRdJ_LlNQNl5S',
        isOnYouTube: true,
        isVisible: true,
        img: 'img/8.avif',
      },
      {
        title: 'Barrel Imports for Cleaner Code',
        description:
          'I show how barrel imports simplify module management by consolidating exports into a single file, improving code organization and readability.',
        link: 'https://www.youtube.com/embed/iYBkhkfALFA?si=inIXU1Iop-7GYHaQ',
        isOnYouTube: true,
        isVisible: true,
        img: 'img/6.avif',
      },
    ],
  },
  {
    id: 'u-ex',
    title: 'My Projects',
    list: [
      {
        title: 'Netflix Replica: Video Presentation',
        description:
          'In this video, I present the templates and features of a Netflix replica app I built, where you can browse, search, and stream movies and TV series',
        link: 'https://www.youtube.com/embed/URvi-QwBXPs?si=Ceh7biXNW5tFx_Nc',
        isOnYouTube: true,
        isVisible: true,
        img: 'img/1.avif',
      },
      {
        title: 'See for Yourself: A Netflix Replica',
        description:
          'Enter marcomilza@gmail.com and use xxx as the password to explore the templates and features of a Netflix replica app I built. Search and watch movies and TV series just like on the real platform!',
        link: 'https://netfli-x-marco-milza.netlify.app/',
        isOnYouTube: false,
        isVisible: true,
        img: 'img/2.avif',
      },
      {
        title: 'My 3D Scenes Gallery: Video Presentation',
        description:
          'Experience a gallery of 3D graphic scenes applied to development. Dive into this JavaScript programming niche and explore the project firsthand!',
        link: 'https://www.youtube.com/embed/57bONIEfiL4?si=r-k2oSqcYLRahVdU',
        isOnYouTube: true,
        isVisible: true,
        img: 'img/10.avif',
      },
      {
        title: 'My 3D Scenes Gallery',
        description:
          'In this video, I showcase a gallery of 3D graphic scenes applied to development, exploring this niche of JavaScript programming',
        link: 'https://3dgallerythreefiber.netlify.app/',
        isOnYouTube: false,
        isVisible: true,
        img: 'img/9.avif',
      },
    ],
  },
  {
    id: 'source-code',
    title: 'For Devs: Source Code',
    list: [
      {
        title: '3D Graphics: Live Demo (CodeSandbox)',
        description:
          'Interact with a gallery of 3D graphic scenes built with React and React Three Fiber. Experience real-time 3D rendering while inspecting the source code.',
        link: 'https://codesandbox.io/p/github/182Marco/3D-React-Fiber-Gallery/main?file=%2Fsrc%2Fcomponents%2FportalPass%2Fcomponents%2FmonsterStage%2FmonsterStage.jsx%3A1%2C1-50%2C1&workspaceId=ws_83N1aBN8g8iPuq9LEMC9FB',
        isOnYouTube: false,
        isVisible: true,
        img: 'img/14.avif',
      },
      {
        title: '3D Showcase: Source Code on GitHub',
        description:
          'Explore the React and React Three Fiber source code behind my 3D graphics project. See how 3D scenes are structured and rendered dynamically.',
        link: 'https://github.com/182Marco/3D-React-Fiber-Gallery',
        isOnYouTube: false,
        isVisible: true,
        img: 'img/12.avif',
      },
      {
        title: 'Netflix Replica: Source Code on CodeSandbox',
        description:
          'Explore the full functionality of my Netflix replica built with Vue.js. Browse, search, and stream movies and TV series while viewing the source code alongside.',
        link: 'https://codesandbox.io/p/github/182Marco/marco-m-netflix/main?file=%2Fpackage.json%3A2%2C1-2%2C70&workspaceId=ws_83N1aBN8g8iPuq9LEMC9FB',
        isOnYouTube: false,
        isVisible: true,
        img: 'img/13.avif',
      },
      {
        title: 'Netflix Replica: Source Code on GitHub',
        description:
          'Dive into the Vue.js source code of my Netflix replica. Analyze the architecture, explore the logic, and understand how the app handles streaming features.',
        link: 'https://github.com/182Marco/marco-m-netflix',
        isOnYouTube: false,
        isVisible: true,
        img: 'img/11.avif',
      },
    ],
  },
];

const toggleModal = ev =>
  ev.currentTarget.querySelector('.modal').classList.toggle('show');

const GetLinkTextFnComponent = resourceObj =>
  `
     <section>
       <figure>
         <img alt="${resourceObj.description}" src="${resourceObj.img}" />
       </figure>
       <h5>${resourceObj.title}</h5>
     </section>
  `;

const ExternalLinkFnComponent = resourceObj => `
  <li onclick="window.open('${resourceObj.link}', '_blank')">       
      ${GetLinkTextFnComponent(resourceObj)}
  </li>`;

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

const AccordionFnComponent = accordion => `
    <article id="${accordion.id}">
      <summary>
        ${accordion.title}
        <i class="fa-solid fa-chevron-right rotate"></i>
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

const visibleAccordions = accordions
  .map(obj => ({
    ...obj,
    list: obj.list.filter(e => e.isVisible),
  }))
  .filter(obj => obj.list.length > 0);

const sectionEl = document.querySelector('#root');

visibleAccordions.forEach(
  a => (sectionEl.innerHTML += AccordionFnComponent(a))
);

const collapsedAccordionHeight = '40px';

const mappedAccordion = visibleAccordions.map(e => ({
  id: e.id,
  el: document.getElementById(e.id),
  chevron: document.querySelector(`#${e.id} .fa-chevron-right`),
  initialHeight: null,
}));

mappedAccordion.forEach(a => {
  a.initialHeight = `${a.el.offsetHeight}px`;
});

const shutAccordion = a => {
  a.el.style.height = collapsedAccordionHeight;
  a.chevron?.classList.remove('rotate');
};
const openAccordion = a => {
  a.el.style.height = a.initialHeight;
  a.chevron?.classList.add('rotate');
};

const toggleAccordions = selectedA =>
  selectedA.el.style.height === collapsedAccordionHeight
    ? openAccordion(selectedA)
    : shutAccordion(selectedA);

mappedAccordion.forEach(s =>
  s.el.addEventListener('click', () => toggleAccordions(s))
);

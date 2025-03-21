const accordions = [
  {
    id: 'tutorials',
    title: 'Coding Tutorials by Me',
    list: [
      {
        title: 'Shallow or Deep Copy?',
        description:
          'I explain what happens when you shallow copy a reference and the potential bugs that may arise.',
        link: 'https://www.linkedin.com/feed/update/urn:li:activity:7172495074285469697/',
      },
      {
        title: 'Thinking Through a Deep Copy Function',
        description:
          "<code>StructuredClone()</code> has been available since ECMAScript 2021, but here's a logical exercise to write a deep copy function that works regardless of nested references.",
        link: 'https://www.linkedin.com/feed/update/urn:li:activity:7174874211486711808/',
      },
      {
        title: 'Typescript Generic Explanation',
        description:
          'A simple way to understand generics and an example of usage with different syntaxes.',
        link: 'https://www.linkedin.com/feed/update/urn:li:activity:7177355303410167810/',
      },
      {
        title: 'Spread props on a React Component',
        description:
          'I show how to use the rest operator to isolate props (e.g., button props in a modal) and spread them onto components.',
        link: 'https://www.linkedin.com/feed/update/urn:li:activity:7169996639141670912/',
      },
      {
        title: 'Barrel Imports for Cleaner Code',
        description:
          'I show how barrel imports simplify module management by consolidating exports into a single file, improving code organization and readability.',
        link: 'https://www.linkedin.com/feed/update/urn:li:activity:7169996639141670912/',
      },
      {
        title: 'Decoupled UI & Logic, Custom Hooks',
        description:
          'I show how custom hooks in React help separate logic from JSX/TSX templates, improving code reusability and maintainability.',
        link: 'https://www.linkedin.com/feed/update/urn:li:activity:7164705355015430147/',
      },
    ],
  },
  {
    id: 'u-ex',
    title: 'Experience My Projects Firsthand',
    list: [
      {
        title: 'Netflix Replica: Video Presentation',
        description:
          'In this video, I present the templates and features of a Netflix replica app I built, where you can browse, search, and stream movies and TV series',
        link: 'https://www.linkedin.com/feed/update/urn:li:activity:7179893837467697153/',
      },
      {
        title: 'See for Yourself: A Netflix Replica',
        description:
          'Enter marcomilza@gmail.com and use xxx as the password to explore the templates and features of a Netflix replica app I built. Search and watch movies and TV series just like on the real platform!',
        link: 'https://www.google.com',
      },
      {
        title: 'My 3D Scenes Gallery: Video Presentation',
        description:
          'Experience a gallery of 3D graphic scenes applied to development. Dive into this JavaScript programming niche and explore the project firsthand!',
        link: 'https://www.google.com',
      },
      {
        title: 'My 3D Scenes Gallery',
        description:
          'In this video, I showcase a gallery of 3D graphic scenes applied to development, exploring this niche of JavaScript programming',
        link: 'https://3dgallerythreefiber.netlify.app/',
      },
    ],
  },
  {
    id: 'source-code',
    title: 'For Devs: View the Source Code',
    list: [
      {
        title: 'Netflix Replica: Live Demo (CodeSandbox)',
        description:
          'Explore the full functionality of my Netflix replica built with Vue.js. Browse, search, and stream movies and TV series while viewing the source code alongside.',
        link: 'https://codesandbox.io/p/github/182Marco/marco-m-netflix/main?file=%2Fpackage.json%3A2%2C1-2%2C70&workspaceId=ws_83N1aBN8g8iPuq9LEMC9FB',
      },
      {
        title: 'Netflix Replica: Source Code on GitHub',
        description:
          'Dive into the Vue.js source code of my Netflix replica. Analyze the architecture, explore the logic, and understand how the app handles streaming features.',
        link: 'https://github.com/182Marco/marco-m-netflix',
      },
      {
        title: '3D Graphics: Live Demo (CodeSandbox)',
        description:
          'Interact with a gallery of 3D graphic scenes built with React and React Three Fiber. Experience real-time 3D rendering while inspecting the source code.',
        link: 'https://codesandbox.io/p/github/182Marco/3D-React-Fiber-Gallery/main?file=%2Fsrc%2Fcomponents%2FportalPass%2Fcomponents%2FmonsterStage%2FmonsterStage.jsx%3A1%2C1-50%2C1&workspaceId=ws_83N1aBN8g8iPuq9LEMC9FB',
      },
      {
        title: '3D Showcase: Source Code on GitHub',
        description:
          'Explore the React and React Three Fiber source code behind my 3D graphics project. See how 3D scenes are structured and rendered dynamically.',
        link: 'https://github.com/182Marco/3D-React-Fiber-Gallery',
      },
    ],
  },
];

const sectionEl = document.querySelector('section');

accordions.forEach(
  a =>
    (sectionEl.innerHTML += `
    <article id="${a.id}">
      <summary>
        ${a.title}
        <i class="fa-solid fa-chevron-right"></i>
      </summary>
      <ul>
        ${a.list
          .map(
            e => `
              <li onclick="window.open('${e.link}', '_blank')">       
                <p title="${e.description}">${e.title}</p>
              </li>
                 `
          )
          .join('')}
      </ul>
    </article>
  `)
);

// GET MEASURES
const collapsedHeight = '40px';

const mappedAccordion = accordions.map(e => ({
  id: e.id,
  el: document.getElementById(e.id),
  chevron: document.querySelector(`#${e.id} .fa-chevron-right`),
  initialHeight: null,
}));

mappedAccordion.forEach(s => {
  s.initialHeight = `${s.el.offsetHeight}px`;
  s.el.style.height = collapsedHeight;
});

const shutAccordion = a => {
  a.el.style.height = collapsedHeight;
  a.chevron?.classList.remove('rotate');
};
const openAccordion = a => {
  a.el.style.height = a.initialHeight;
  a.chevron?.classList.add('rotate');
};

const toggleAccordions = selectedA =>
  mappedAccordion.forEach(a =>
    a === selectedA && selectedA.el.style.height === collapsedHeight
      ? openAccordion(a)
      : shutAccordion(a)
  );

mappedAccordion.forEach(s =>
  s.el.addEventListener('click', () => toggleAccordions(s))
);

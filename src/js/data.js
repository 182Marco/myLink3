/*
 * THE data of the whole site. Everything on the page is derived from here.
 * Replace a video / cover / link by editing the values below, never the
 * components.
 */

const myData = {
  favicon: 'img/favicon.ico',
  firstName: 'Marco',
  secondName: 'Milza',
  role: 'AI Engineer & Full Stack Developer',
  fullName() {
    return `${this.firstName} ${this.secondName}`;
  },
  img: './img/io.avif',
  imgAlt() {
    return `${this.fullName()} profile picture`;
  },
  // Shown in the footer as icon links. `isAlwaysVisible: false` => only with
  // `?data` in the URL (private data).
  // `places`: where the contact is rendered ('header' = chip under the role,
  // 'footer' = icon link). `isAlwaysVisible: false` => only with `?data`.
  contacts: [
    {
      icon: 'fa-brands fa-linkedin',
      contact: 'LinkedIn',
      href: 'https://www.linkedin.com/in/marco-milza',
      isExternal: true,
      places: ['footer'],
      isAlwaysVisible: true,
    },
    {
      icon: 'fa-brands fa-github',
      contact: 'GitHub',
      href: 'https://github.com/182Marco',
      isExternal: true,
      places: ['footer'],
      isAlwaysVisible: true,
    },
    {
      icon: 'fa-solid fa-phone',
      contact: '+39 3295868709',
      href: 'tel:+393295868709',
      places: ['header'],
      isAlwaysVisible: false,
    },
    {
      icon: 'fa-solid fa-envelope',
      contact: 'marcomilza@gmail.com',
      href: 'mailto:marcomilza@gmail.com',
      isCta: true, // also the big mailto link in the footer call to action
      places: ['footer'],
      isAlwaysVisible: true,
    },
  ],
};

/*
 * Video players. Each one is referenced by id from a section (`hero.player`,
 * `about.player`) or from a card (`player` field). `src` files go in
 * `src/video/` (not provided yet). `endedPoster`: image shown instead of the
 * video once it ends.
 */
const players = {
  intro: {
    src: 'video/intro.mp4',
    poster: 'img/robot-poster.svg',
    endedPoster: 'img/robot-poster.svg',
    label: 'Introduction: the business value of AI agents',
  },
  about: {
    src: 'video/ai-project.mp4',
    poster: './img/io.avif',
    label: 'Presentation of my AI portfolio project',
  },
  quickbite: {
    src: 'video/quickbite.mp4',
    poster: 'img/quickbite-cover.svg',
    label: 'QuickBite presentation',
  },
};

// Automatic sequence: order of the player ids. On `ended` the page scrolls to
// the next player and plays it. After the last one, automations stop.
const sequence = ['intro', 'about', 'quickbite'];

// UI labels (kept in data so that no text lives in the components).
const ui = {
  playLabel: 'Play',
  unavailable: 'Video not available yet',
  newTab: '(opens in a new tab)',
  comingSoon: 'Coming soon',
  closeVideo: 'Close video',
  scrollPrev: 'Scroll left',
  scrollNext: 'Scroll right',
  openPhoto: 'Open photo',
  closePhoto: 'Close photo',
};

const hero = {
  badge: 'AI Agents • Full Stack • Real Impact',
  title: ['AI Engineer.', 'Full Stack Developer.'],
  subtitle: 'Building intelligent solutions for business.',
  description:
    "I build agentic chatbots and AI-powered solutions that unlock your company's knowledge, automate workflows and deliver measurable ROI.",
  player: 'intro',
  techStack: [
    { name: 'Python', icon: 'fa-brands fa-python', color: '#ffd43b' },
    { name: 'React', icon: 'fa-brands fa-react', color: '#61dafb' },
    { name: 'TypeScript', img: 'img/typescript.svg' },
    { name: 'HTML5', icon: 'fa-brands fa-html5', color: '#e44d26' },
    { name: 'CSS3', icon: 'fa-brands fa-css3-alt', color: '#1572b6' },
    { name: 'JavaScript', icon: 'fa-brands fa-js', color: '#f7df1e' },
    { name: 'Docker', icon: 'fa-brands fa-docker', color: '#2496ed' },
    { name: 'GitHub', icon: 'fa-brands fa-github', color: '#f5f7fa' },
  ],
};

const about = {
  title: 'Turning AI into',
  accent: 'real business value.',
  description:
    "I'm Marco Milza, an AI Engineer and Full Stack Developer with a strong background in modern web technologies and a deep passion for building intelligent, useful products.",
  player: 'about',
};

const projectsIntro = {
  title: 'Real world solutions,',
  accent: 'built with passion.',
};

/*
 * Accordions.
 *  layout: 'grid' (featured first card) | 'scroller' (horizontal scroll)
 *  card: 'cover' (16:9 cover + title) | 'repo' (icon + name + tech)
 *  list[] item:
 *    - player: id in `players` => plays inline in the card
 *    - isOnYouTube: true => `link` is a youtube /embed/ url: modal on
 *      viewports >= 768px, new tab otherwise
 *    - otherwise `link` opens in a new tab; `link: null` => placeholder
 *    - isFeatured: larger card in a grid
 */
const accordions = [
  {
    id: 'projects',
    title: 'My Projects',
    icon: 'fa-solid fa-play',
    layout: 'grid',
    card: 'cover',
    isOpen: true,
    list: [
      {
        title: 'QuickBite – Food Delivery',
        description:
          'Full stack food delivery: ordering app for customers, back office for restaurants and a complete backend.',
        player: 'quickbite',
        img: 'img/quickbite-cover.svg',
        isFeatured: true,
        isVisible: true,
      },
      {
        title: 'NetflixScout',
        description:
          'A movie streaming platform: browse, search and watch movies and TV series.',
        link: 'https://www.youtube.com/embed/URvi-QwBXPs?si=Ceh7biXNW5tFx_Nc',
        isOnYouTube: true,
        img: 'img/1.avif',
        isVisible: true,
      },
      {
        title: '3D Gallery',
        description:
          'A gallery of 3D graphic scenes applied to development, built with JavaScript.',
        link: 'https://www.youtube.com/embed/57bONIEfiL4?si=r-k2oSqcYLRahVdU',
        isOnYouTube: true,
        img: 'img/10.avif',
        isVisible: true,
      },
    ],
  },
  {
    id: 'websites',
    title: 'Project Websites',
    icon: 'fa-solid fa-link',
    layout: 'grid',
    card: 'cover',
    isOpen: true,
    list: [
      {
        title: 'QuickBite',
        description: 'The food delivery application.',
        link: null, // TODO: published QuickBite URL
        img: 'img/quickbite-site.svg',
        isFeatured: true,
        isVisible: true,
      },
      {
        title: 'NetflixScout',
        description:
          'Enter also without password (the login is just simulated) and explore the movie platform, with its AI chatbot.',
        link: 'https://netfli-x-marco-milza.netlify.app/',
        img: 'img/netflixscout-site.svg',
        isVisible: true,
      },
      {
        title: '3D Gallery',
        description: 'A gallery of 3D graphic experiments.',
        link: 'https://3dgallerythreefiber.netlify.app/',
        img: 'img/gallery3d-site.svg',
        isVisible: true,
      },
    ],
  },
  {
    id: 'tutorials',
    title: 'Tutorials',
    icon: 'fa-solid fa-graduation-cap',
    layout: 'scroller',
    card: 'cover',
    isOpen: true,
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
        title: 'TypeScript Generic Explanation',
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
    id: 'repos',
    title: 'Code Repositories',
    icon: 'fa-brands fa-github',
    layout: 'grid',
    card: 'repo',
    isOpen: true,
    list: [
      {
        title: 'AI Agent Backend',
        description: 'Python',
        icon: 'fa-brands fa-python',
        color: '#ffd43b',
        link: null, // TODO: GitHub URL
        isVisible: true,
      },
      {
        title: 'NetflixScout Frontend',
        description: 'Vue + TypeScript',
        icon: 'fa-brands fa-vuejs',
        color: '#42b883',
        link: 'https://github.com/182Marco/marco-m-netflix',
        isVisible: true,
      },
      {
        title: 'Food Delivery App',
        description: 'Full Stack',
        icon: 'fa-solid fa-burger',
        color: '#ff8a3d',
        link: null, // TODO: GitHub URL
        isVisible: true,
      },
      {
        title: '3D Gallery',
        description: 'WebGL / Three.js',
        icon: 'fa-solid fa-cube',
        color: '#1685ff',
        link: 'https://github.com/182Marco/3D-React-Fiber-Gallery',
        isVisible: true,
      },
      // Existing links kept, hidden in the new design.
      {
        title: '3D Graphics: Live Demo (CodeSandbox)',
        description: 'React Three Fiber',
        icon: 'fa-solid fa-cube',
        color: '#1685ff',
        link: 'https://codesandbox.io/p/github/182Marco/3D-React-Fiber-Gallery/main?file=%2Fsrc%2Fcomponents%2FportalPass%2Fcomponents%2FmonsterStage%2FmonsterStage.jsx%3A1%2C1-50%2C1&workspaceId=ws_83N1aBN8g8iPuq9LEMC9FB',
        isVisible: false,
      },
      {
        title: 'Netflix Replica: Source Code on CodeSandbox',
        description: 'Vue.js',
        icon: 'fa-brands fa-vuejs',
        color: '#42b883',
        link: 'https://codesandbox.io/p/github/182Marco/marco-m-netflix/main?file=%2Fpackage.json%3A2%2C1-2%2C70&workspaceId=ws_83N1aBN8g8iPuq9LEMC9FB',
        isVisible: false,
      },
    ],
  },
];

const footer = {
  title: "Let's build something",
  accent: 'great together.',
  copyright: 'Made with ♥ and code.',
};

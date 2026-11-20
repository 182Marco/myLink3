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
 * video once it ends. `cover`: image that already contains its play button
 * (replaces the default one; hidden once playback starts).
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
    poster: 'img/IoPcDietro.avif',
    label: 'Presentation of my AI portfolio project',
  },
  delivboo: {
    src: 'video/delivboo.mp4',
    poster: 'img/cover-delivboo.avif',
    cover: 'img/cover-delivboo.avif', // image with its own play button
    label: 'DelivBoo presentation',
  },
};

// Automatic sequence: order of the player ids. On `ended` the page scrolls to
// the next player and plays it. After the last one, automations stop.
const sequence = ['intro', 'about', 'delivboo'];

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

// Image fixed behind the whole page (cover).
const pageBackground = 'img/Onde-futuristiche-al-neon.avif';

const hero = {
  badge: 'AI Agents • Full Stack • Real Impact',
  title: ['Agentic AI.', 'Real Impact.'],
  accent: 'Built for Business.',
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
  eyebrow: 'About My Work',
  title: 'Turning AI into',
  accent: 'real business value.',
  description:
    "I'm Marco Milza, an AI Engineer and Full Stack Developer with a strong background in modern web technologies and a deep passion for building intelligent, useful products.",
  player: 'about',
};

const projectsIntro = {
  eyebrow: 'My Projects',
  title: 'Real-world solutions, built with',
  accent: 'passion.',
};

/*
 * Accordions.
 *  layout: 'grid' (featured first card) | 'scroller' (horizontal scroll)
 *  card: 'cover' (cover image) | 'app' (icon + name + arrow) | 'repo'
 *  isCollapsible: false => plain row without accordion (default true)
 *  hasCaption: false => no text under the cover (default true)
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
    isCollapsible: false, // plain row, no accordion chrome
    hasCaption: false, // title/description are part of the cover image
    layout: 'grid',
    card: 'cover',
    list: [
      {
        title: 'DelivBoo – Food Delivery',
        player: 'delivboo',
        img: 'img/cover-delivboo.avif',
        isVisible: true,
      },
      {
        title: 'NetflixScout',
        link: 'https://www.youtube.com/embed/URvi-QwBXPs?si=Ceh7biXNW5tFx_Nc',
        isOnYouTube: true,
        img: 'img/cover-netflixscout.avif',
        isVisible: true,
      },
      {
        title: '3D Gallery',
        link: 'https://www.youtube.com/embed/57bONIEfiL4?si=r-k2oSqcYLRahVdU',
        isOnYouTube: true,
        img: 'img/cover-3dgallery.avif',
        isVisible: true,
      },
    ],
  },
  {
    id: 'websites',
    title: 'Project Websites',
    isCollapsible: false,
    layout: 'grid',
    card: 'app',
    list: [
      {
        title: 'DelivBoo',
        description: 'Food Delivery Platform',
        img: 'img/icon-delivboo.svg',
        link: null, // TODO: published DelivBoo URL
        isVisible: true,
      },
      {
        title: 'NetflixScout',
        description: 'Movie Explorer with AI',
        img: 'img/icon-netflix.svg',
        link: 'https://netfli-x-marco-milza.netlify.app/',
        isVisible: true,
      },
      {
        title: '3D Gallery',
        description: '3D Experience',
        img: 'img/icon-3dgallery.svg',
        link: 'https://3dgallerythreefiber.netlify.app/',
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

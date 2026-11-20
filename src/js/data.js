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
      places: ['header', 'footer'],
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
  netflixscout: {
    src: 'video/netflixscout.mp4',
    poster: 'img/cover-netflixscout.avif',
    label: 'NetflixScout presentation',
  },
  gallery3d: {
    src: 'video/3dgallery.mp4',
    poster: 'img/cover-3dgallery.avif',
    label: '3D Gallery presentation',
  },
};

// Automatic sequence: order of the player ids. On `ended` the page scrolls to
// the next player and plays it. After the last one, automations stop.
const sequence = ['intro', 'about', 'delivboo', 'netflixscout', 'gallery3d'];

// UI labels (kept in data so that no text lives in the components).
const ui = {
  playLabel: 'Play',
  liveBadge: 'Live app',
  unavailable: 'Video not available yet',
  newTab: '(opens in a new tab)',
  comingSoon: 'Coming soon',
  closeVideo: 'Close video',
  openPhoto: 'Open photo',
  technologies: 'Technologies',
  contacts: 'Contacts',
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
 *  layout: 'grid' (featured first card) | 'rows' (accordion rows / list)
 *  hasTitle: true => section label (green dash + title) above the block
 *  card: 'cover' (cover image) | 'app' (icon + name + arrow); | 'tutorial' / 'repo' (row styles of a
 *        'rows' layout, whose accordion title is `summary`)
 *  isCollapsible: false => plain row without accordion (default true)
 *  hasCaption: false => no text under the cover (default true)
 *  list[] item:
 *    - player: id in `players` => plays inline in the card
 *    - isOnYouTube: true => `link` is a youtube /embed/ url: modal on
 *      viewports >= 768px, new tab otherwise
 *    - otherwise `link` opens in a new tab; `link: null` => placeholder
 *    - showsPlayer: id in `players` => while that video plays the card is
 *      highlighted and `liveDescription` replaces `description`
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
        player: 'netflixscout',
        img: 'img/cover-netflixscout.avif',
        isVisible: true,
      },
      {
        title: '3D Gallery',
        player: 'gallery3d',
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
        showsPlayer: 'delivboo', // highlighted while this video plays
        liveDescription: 'Public live app, shown in the video: try it online',
        img: 'img/icon-delivboo.svg',
        link: null, // TODO: published DelivBoo URL
        isVisible: true,
      },
      {
        title: 'NetflixScout',
        description: 'Movie Explorer with AI',
        showsPlayer: 'netflixscout', // highlighted while this video plays
        liveDescription: 'Public live app, shown in the video: try it online',
        img: 'img/icon-netflix.svg',
        link: 'https://netfli-x-marco-milza.netlify.app/',
        isVisible: true,
      },
      {
        title: '3D Gallery',
        description: '3D Experience',
        showsPlayer: 'gallery3d', // highlighted while this video plays
        liveDescription: 'Public live app, shown in the video: try it online',
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
    hasTitle: true, // section label (green dash + title) above the block
    layout: 'rows', // one accordion (closed at first render) with a row per item
    card: 'tutorial', // row style: bordered box per tutorial
    summary: 'My own video lessons on JavaScript, TypeScript and React',
    list: [
      {
        title: 'Shallow or Deep Copy?',
        link: 'https://www.youtube.com/embed/k2FVpUXqSfc?si=lUnx5xij0GZUtr5M',
        isOnYouTube: true,
        isVisible: true,
      },
      {
        title: 'Thinking Through a Deep Copy Function',
        link: 'https://www.youtube.com/embed/FB6LsVv2IKI?si=mDIviaVoEtpUYiJu',
        isOnYouTube: true,
        isVisible: true,
      },
      {
        title: 'TypeScript Generic Explanation',
        link: 'https://www.youtube.com/embed/4aE7kfqhdPg?si=UHwChIoyU8jU7IVG',
        isOnYouTube: true,
        isVisible: true,
      },
      {
        title: 'Spread props on a React Component',
        link: 'https://www.youtube.com/embed/KA6Ccu5F5ik?si=9MHZEGvy4EZTTDHP',
        isOnYouTube: true,
        isVisible: true,
      },
      {
        title: 'Decoupled UI & Logic, Custom Hooks',
        link: 'https://www.youtube.com/embed/3QknDb6h88s?si=pjDFRdJ_LlNQNl5S',
        isOnYouTube: true,
        isVisible: true,
      },
      {
        title: 'Barrel Imports for Cleaner Code',
        link: 'https://www.youtube.com/embed/iYBkhkfALFA?si=inIXU1Iop-7GYHaQ',
        isOnYouTube: true,
        isVisible: true,
      },
    ],
  },
  {
    id: 'repos',
    title: 'GitHub Repositories',
    hasTitle: true,
    icon: 'fa-brands fa-github',
    card: 'repo', // row style: icon, name, description
    summary: 'Source code of my AI, full stack and 3D projects',
    layout: 'rows',
    list: [
      {
        title: 'ai-agent-backend',
        description: 'Python backend for AI agent, RAG and embeddings',
        link: 'https://github.com/182Marco/NetflixScout',
        isVisible: true,
      },
      {
        title: 'marco-m-netflix',
        description: 'Netflix clone with modern stack',
        link: 'https://github.com/182Marco/marco-m-netflix',
        isVisible: true,
      },
      {
        title: 'deliveboo',
        description: 'Food delivery full stack application',
        link: 'https://github.com/182Marco/deliveBoo',
        isVisible: true,
      },
      {
        title: '3d-gallery',
        description: 'Interactive 3D gallery',
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
  img: 'img/btnMail.avif', // container image (envelope icon on the left)
  title: "Let's build something great together.",
  subtitle: "Have a project in mind? I'd love to hear from you.",
  button: 'Get in touch',
  buttonIcon: 'fa-solid fa-envelope',
  copyright:
    'Made with <i class="fa-solid fa-heart footer__heart" aria-hidden="true"></i> and code.',
};

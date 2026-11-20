# AGENTS.md

Personalized Linktree for Marco Milza (front-end developer). Static site: no
bundler, no package manager. Open `src/index.html` in a browser (or any static
server) to run it. Deployed as static files from `dist/`, produced by
`./build.sh` (a plain copy of `src/`).

## Golden rule: single source of truth

**The whole application is derived from the data structures in `js/data.js`.**
`index.html` is an empty shell (`<header>`, `<main>`, two scripts); `js/main.js`
is a pure renderer that turns the data into DOM. Data entry is done by a
developer editing `js/data.js` directly (there is no CMS or UI for it, and none
is planned).

This must hold even as the app grows:

- **Content, structure and behaviour flags live in the data, never in the
  markup or the renderer.** Adding/removing/reordering something on the page =
  editing data only.
- **What is put where in the structure decides what gets created.** A new
  accordion object → a new section; a new item in `list` → a new card; a flag
  (`isVisible`, `isOnYouTube`, `isAlwaysVisible`) → a different rendering or
  visibility. The renderer derives everything by iterating the structure.
- **No hard-coded content in `index.html`, `main.js` or CSS** (titles, links,
  labels, image paths, icons, ids). If you need a new piece of content, add a
  field to the data and render it.
- **Extend by adding fields/flags + a renderer branch**, not by special-casing
  one item in `main.js` (no `if (item.title === '...')`, no per-item ids in JS).
- A new capability should be expressible as data, so that a developer only
  touches `data.js` to use it. If a change forces content edits in two places,
  the design is wrong: fix the structure.
- Derived values are methods on the data (`fullName()`, `imgAlt()`), not
  duplicated strings.

The portable version of this principle is the skill
`skills/single-source-data-driven/SKILL.md`. Follow it when adding
features.

## Layout

Production files are strictly separated from docs, planning and agent tooling.

```
AGENTS.md         agent instructions (this file); CLAUDE.md just imports it
skills/           reusable agent skills/prompts (.claude/skills is a symlink here)
dev/              internal dev aids (e.g. dev/mappa.html). Never referenced by src/
build.sh          cleans dist/ and copies ONLY src/ into it
dist/             generated, git-ignored, ready to deploy. Never edit by hand
src/              the ONLY production code (everything below lives here)
  index.html      empty shell (header, main, footer) + scripts in order
  cssLoad.css     only @imports: Font Awesome (CDN) + every file in css/
  css/            one file per concern (header, accordion, modal, myImg, ...)
  css/colors.css  design tokens as CSS custom properties (:root)
  js/             data.js, components.js, accordion.js, media.js, main.js
  video/          local video files referenced by `players` (to be added)
  img/            avif/svg images, referenced from data by path
```

Rules:

- Changes to the public site go in `src/`. Paths inside `src/` are relative and
  must work standalone.
- Internal maps, drafts and notes go in `dev/`.
- `src/` must never mention or link `AGENTS.md`, `skills/` or `dev/`.
- Before every deploy run `./build.sh` to regenerate `dist/`, and deploy `dist/`.

Scripts are plain globals, loaded in this order (see `src/index.html`):
`data.js` (data) → `components.js` (pure templates) → `accordion.js` →
`media.js` (players, sequence, modal) → `main.js` (bootstrap).

## Data model (`src/js/data.js`)

- `myData`: profile, `role`, `contacts[]` (`icon`, `contact`, `href`,
  `isExternal`, `isCta`, `isAlwaysVisible`; false → only with `?data`).
- `players{id: {src, poster, endedPoster?, label}}`: video files in
  `src/video/` (not provided yet: `intro.mp4`, `ai-project.mp4`,
  `delivboo.mp4`).
- `sequence[]`: ordered player ids of the automatic sequence.
- `hero`, `about`, `projectsIntro`, `footer`, `ui` (labels): page texts.
- `pageBackground`: seamless AVIF tile (`img/bg-waves.avif`, 1600x1200) repeated
  behind the whole page, injected as the `--bg-image` CSS variable.
- `accordions[]`: `id`, `title`, `icon`, `layout` (`grid`|`scroller`), `card`
  (`cover`|`app`|`repo`), `isOpen`, `isCollapsible: false` (plain row, no
  accordion), `hasCaption: false` (text is inside the cover image), `list[]`.
  `players[id].cover`: image with its own play button (replaces the default).
- `list[]` item: `title`, `description`, `img`, `isVisible`, and
  one of: `player` (inline video), `isOnYouTube` + `link` (`/embed/` URL: modal
  ≥768px, new tab below), plain `link`, or `link: null` (placeholder, not clickable). Repo cards use `icon` + `color` instead of `img`.

## Video sequence (`media.js`)

intro → about → delivboo, driven only by the real `ended` event. On `ended`:
open the target accordion, smooth-scroll to the next player's
`[data-scroll-anchor]`, wait (IntersectionObserver) until visible, `play()`.
The sequence stops for good on: wheel/touch/pointer/key input, pause or seek on
the current video, `play()` rejection, video error, a modal opening, or
completion. Only one video plays at a time. `prefers-reduced-motion` disables
smooth scrolling. Never add timers to guess when a video ends.

## Rendering conventions

- Components are pure functions returning template strings, named `*Component`.
- Visibility filtering happens once (`visibleAccordions`, `visibleContacts`).
- Accordion state lives in `data-open`; animation is CSS (`grid-template-rows`).
- Data strings are injected with `innerHTML` unescaped on purpose (trusted,
  developer-authored). Never feed user/URL input into data or templates.
  (`?data` is only read as a boolean flag.)

## Style

Prettier config in `.prettierrc` (single quotes, semicolons, 2 spaces, 80 cols,
es5 trailing commas, `arrowParens: avoid`, `proseWrap: always`). Run
`npx prettier --write .` if available. Colors only via variables in
`css/colors.css`. Add a new CSS file → add its `@import` in `cssLoad.css`.
Responsive breakpoints currently used: 560px, 768px and 900px.

## Verification

No tests or linter. After changes, run `./build.sh`, open `dist/index.html` in a browser and check:
sections render, the 4 accordions open/close (also by keyboard), tutorials scroll
horizontally, desktop (≥768px) YouTube cards open the modal and mobile ones open
a new tab, the video sequence runs and stops on interaction, `?data` reveals
phone/email, console has no errors.

## Git

Default branch `main`. Commit messages are short and imperative.

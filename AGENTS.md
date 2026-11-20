# AGENTS.md

Personalized Linktree for Marco Milza (front-end developer). Static site: no
build step, no bundler, no package manager. Open `index.html` in a browser (or
any static server) to run it. Deployed as static files.

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
`.claude/skills/single-source-data-driven/SKILL.md`. Follow it when adding
features.

## Layout

```
index.html        empty shell, loads cssLoad.css, data.js, main.js (in this order)
cssLoad.css       only @imports: Font Awesome (CDN) + every file in css/
css/              one file per concern (header, accordion, modal, myImg, ...)
css/colors.css    design tokens as CSS custom properties (:root)
js/data.js        THE data: `myData` (profile + contacts) and `accordions`
js/main.js        renderer: data -> DOM, plus event wiring
img/              avif images, referenced from data by path
```

`data.js` is loaded before `main.js` and exposes plain globals (`myData`,
`accordions`); there are no modules. Keep that order.

## Data model (`js/data.js`)

`myData`: `favicon`, `firstName`, `secondName`, `fullName()`, `img`, `imgAlt()`,
`contacts[]`.

`contacts[]` item: `icon` (Font Awesome classes), `contact` (text shown),
`isAlwaysVisible` (false → shown only when URL has `?data`), `onClick` (arrow fn
or method; `this` is the contact when it's a method).

`accordions[]` item: `id` (unique, used as DOM id and in CSS selectors, so it
must be a valid selector token), `title`, `list[]`.

`list[]` item: `title`, `description` (HTML allowed, e.g. `<code>`; also used as
img `alt`), `link`, `img`, `isVisible` (false → hidden; an accordion with no
visible items disappears), `isOnYouTube` (true → on viewports ≥ 768px opens an
embedded `/embed/` link in a modal `<dialog>`; otherwise opens `link` in a new
tab; so YouTube links must be `https://www.youtube.com/embed/...` URLs).

### Common tasks (data only)

- New card: append an object to the right `list`, put an image in `img/`
  (avif), set `isVisible: true`.
- New section: append an accordion object with unique `id`.
- Hide something: `isVisible: false` (don't delete unless asked).
- New contact: append to `contacts`; use `isAlwaysVisible: false` for private
  data.

## Rendering conventions (`js/main.js`)

- Components are pure functions returning template strings, named
  `*FnComponent` / `*Component`, taking the data object they render.
- Visibility filtering happens once (`visibleAccordions`) before rendering.
- Accordion open/close is driven by inline `height` set from the measured
  `offsetHeight` after render; `collapsedAccordionHeight` must match the
  `summary` height in `css/accordion.css` (40px).
- Data strings are injected with `innerHTML` unescaped. That is intentional
  (descriptions contain HTML) because the data is trusted and developer-authored.
  Never feed user/URL input into the data or templates. (`?data` is only read as
  a boolean flag.)

### Known gotchas

- Contact click handlers are bound by index (`querySelectorAll('ul li')[i]` ↔
  `myData.contacts[i]`). This is correct only while hidden contacts don't
  precede visible ones and while it runs before accordions are rendered. If you
  touch it, bind through the filtered list or a data attribute instead of
  adding more index coupling.
- `toggleModal` uses a single global `isOpenModal`; it assumes one modal open at
  a time.
- `onclick="window.open('${link}')"` is inlined: links containing a single quote
  break it.

## Style

Prettier config in `.prettierrc` (single quotes, semicolons, 2 spaces, 80 cols,
es5 trailing commas, `arrowParens: avoid`, `proseWrap: always`). Run
`npx prettier --write .` if available. Colors only via variables in
`css/colors.css`. Add a new CSS file → add its `@import` in `cssLoad.css`.
Responsive breakpoints currently used: 425px and 768px.

## Verification

No tests or linter. After changes, open `index.html` in a browser and check:
sections render, accordions open/close, desktop (≥768px) YouTube cards open the
modal and mobile ones open a new tab, `?data` reveals phone/email, console has no
errors.

## Git

Default branch `main`. Commit messages are short and imperative.

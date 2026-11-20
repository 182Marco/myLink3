# myLink3

A personalized, **fully data-driven Linktree** for **Marco Milza**, front-end
developer. One JavaScript file holds all the content; the whole page is
generated from it.

## What is Linktree?

[Linktree](https://linktr.tee/) lets you share a single page with all your
important links. This project is a hand-made alternative: no third-party
service, no build step, total control over design and behaviour.

## Features

- **Single source of truth**: profile, contacts, sections and cards are all
  described in `src/js/data.js`. The HTML is an empty shell.
- **Accordion sections** with animated open/close, each with a horizontally
  scrollable row of cards.
- **Smart links**: YouTube items open in an in-page video modal on desktop and
  in a new tab on mobile; everything else opens in a new tab.
- **Hidden contact details**: phone and email appear only with the `?data` URL
  parameter, to keep them away from scrapers.
- **Visibility switches**: hide a card or a whole section with one flag.
- **Mobile-friendly** and dark themed, colors centralized in CSS variables.
- **Zero tooling**: plain HTML, CSS and vanilla JavaScript.

## Technologies

- **HTML5**: empty page shell
- **CSS3**: one file per concern, design tokens in `src/css/colors.css`
- **Vanilla JavaScript**: renderer that turns data into DOM
- **Font Awesome** (CDN): icons
- **AVIF** images

## How it works

```
src/js/data.js  ──►  src/js/main.js  ──►  <header> + <main>
 (the data)      (the renderer)     (the page)
```

The structure of the data decides what is created: a new object in
`accordions` is a new section, a new object in its `list` is a new card, and
flags such as `isVisible`, `isOnYouTube` or `isAlwaysVisible` change how or
whether things appear. The renderer never contains content, so growing the app
means growing the data model, not scattering edits across files.

### Data model

```js
const myData = {
  firstName, secondName, favicon, img,     // profile
  fullName(), imgAlt(),                    // derived values
  contacts: [{ icon, contact, isAlwaysVisible, onClick }],
};

const accordions = [
  {
    id: 'tutorials',                       // unique, valid CSS id
    title: 'Coding Tutorials by me',
    list: [
      {
        title, description, img,           // card
        link,                              // target URL
        isOnYouTube,                       // true → modal on desktop (use /embed/ URLs)
        isVisible,                         // false → hidden
      },
    ],
  },
];
```

## Customize (data entry)

Everything is done by editing `src/js/data.js`:

| I want to...        | Do this                                                         |
| ------------------- | --------------------------------------------------------------- |
| Add a card          | Add an object to the section's `list`, drop an `.avif` in `img/` |
| Add a section       | Add an object to `accordions` with a unique `id`                |
| Hide a card/section | Set `isVisible: false` on the card(s)                           |
| Add a contact       | Add an object to `myData.contacts`                              |
| Keep a contact private | Set `isAlwaysVisible: false` (shown with `?data`)            |
| Change colors       | Edit the variables in `src/css/colors.css`                          |

## Project structure

```
src/index.html    empty shell
src/cssLoad.css   imports Font Awesome and all files in css/
src/css/          styles split by concern
src/js/data.js        all the content (the only file you edit day to day)
src/js/main.js        renderer and event wiring
img/              images
AGENTS.md         guidelines for AI agents and contributors
```

## How to Use

1. **Clone the repository**:

   ```bash
   git clone https://github.com/182Marco/myLink3
   cd myLink3
   ```

2. **Open it**: double-click `src/index.html`, or serve the folder with any static
   server, e.g. `npx serve .`.

3. **Edit `src/js/data.js`** and reload. To see the private contacts, open
   `index.html?data`.

4. **Deploy** the folder as-is to any static host (Netlify, GitHub Pages...).

## For contributors and AI agents

Read [`AGENTS.md`](AGENTS.md). The golden rule: **the whole app must always be
derived from the single data structure**, even as it evolves. The principle is
also packaged as a reusable skill in
[`skills/single-source-data-driven`](skills/single-source-data-driven/SKILL.md).

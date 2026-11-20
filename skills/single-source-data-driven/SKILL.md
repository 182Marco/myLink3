---
name: single-source-data-driven
description: Enforce a "single data structure drives the whole app" architecture. Use when building or extending any project where a developer enters content/config in one code-level data structure (e.g. data.js, config.ts, content.json) and the UI, routes, sections or features are generated from it. Triggers on adding features, sections, items, flags or fields to such a project, or when bootstrapping one.
---

# Single-source, data-driven architecture

## The invariant

One data structure (the **source**) is the only place where content, structure
and behaviour flags are defined. Everything the app shows or does is
**derived** from it by a generic renderer. Developers do data entry by editing
the source in code; no CMS, no per-item code.

> What you put, and where you put it, in the structure decides what gets
> created.

This invariant survives any growth of the app. If a feature seems to break it,
change the feature's design, not the invariant.

## Rules

1. **Source holds all content.** Titles, links, labels, icons, image paths, ids,
   ordering, visibility. Markup, renderer and styles contain none of it.
2. **Structure → output.** Nesting in the source maps to nesting in the output
   (array of sections → sections; array in a section → items). Order of the data
   is order on screen.
3. **Flags change behaviour, not code paths per item.** Booleans/enums on
   an item (`isVisible`, `type`, `isAlwaysVisible`...) select a rendering
   branch for _every_ item with that flag. Never branch on a specific item's
   title/id/index in the renderer.
4. **Derive, don't duplicate.** Computed values are functions/getters on the
   source (`fullName()`), not repeated strings.
5. **Extend in this order:** (a) add a field/flag to the source schema, (b) add
   one generic renderer branch that reads it, (c) use it in the data. A new
   feature is done when a developer can use it by editing only the source.
6. **Single edit point.** If adding one thing requires touching the source
   _and_ HTML/JS/CSS, the schema is missing a field. Fix the schema.
7. **Adding data must never need renderer changes.** New item, new section, new
   contact, hide/show something = data edit only.
8. **Shell stays empty.** The HTML entry is a skeleton of mount points; the
   renderer fills them.
9. **Hide, don't delete.** Prefer a visibility flag; containers with no
   visible children vanish automatically.
10. **Trusted data.** The source is developer-authored, so it may contain HTML
    where needed. Never feed external input (URL, forms) into the source or
    templates except as plain flags.

## Workflow when asked for a change

1. Classify: _data change_ (edit source only) or _capability change_ (schema +
   renderer).
2. For a capability: write down the new field(s) and default behaviour when the
   field is absent (backwards compatible with existing data).
3. Implement the generic renderer branch, then update the data to use it.
4. Grep for hard-coded content that leaked into markup/renderer/CSS and move it
   to the source.
5. Document the new field in the project's AGENTS.md / README data-model
   section (field, type, effect).

## Anti-patterns (reject these)

- `if (item.id === 'foo')` or per-item DOM ids in JS.
- Content typed directly in HTML or templates.
- A second list/array that must be kept in sync with the source.
- Index coupling between the DOM and the source arrays (bind via the same
  filtered list or `data-*` attributes).
- A new feature configured through a place other than the source.

## Reusing in another project

Copy this folder to `.claude/skills/` of the project (or `~/.claude/skills/`
for all projects), then in that project's AGENTS.md add a short section naming
the source file(s), its schema and the renderer file, and link to this skill.

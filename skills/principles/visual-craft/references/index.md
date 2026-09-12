# Visual Design Principles

## Decide the context first: landing or app

Before designing anything, figure out whether you are building a **landing** (marketing site, promo page, homepage) or an **app** (the actual product UI users work in).

- **Landing** — optimize for looks. Lean into visual impact, bold layout, motion, and storytelling. The goal is to impress and convert, so beauty wins.
- **App** — strike a balance between usability and looks. It must be pleasant, but never at the cost of being usable. When the two conflict, usability wins.

## General

For web apps and desktop apps built with web tech, use
[`normalize.css`](./normalize.css) to disable vertical page overscroll at the
document root.

## Landing

1. For titles, remember to apply text balance (e.g. `text-wrap: balance` / `text-balance`) so headings wrap evenly.
2. For body paragraphs, use `text-wrap: pretty`. Do not put `balance` on long copy.

## Design DNA references

- [Minshot](./spec/minshot.json), refreshed from the English/Chinese landing
  and changelog on 2026-09-11: a personal product note in a 528px single column,
  warm near-white paper, SN Pro text, a black pill download button and real
  screenshots. Both locales share the layout. Suitable for concise utility
  marketing; this does not specify the app editor or turn screenshot materials
  into page effects.

## Craft

Once the context and direction are decided, execute with the rules in
[`craft.md`](./craft.md): tokens, anti-slop tells, concentric radii,
interruptible motion, wrapping, favicon, and the finish checklist. Those rules
are not a visual language — they sit on top of the project's design system or
the Design DNA spec the user picked.

## UI

1. In app UI, use icons deliberately and with restraint. Tabs should include an icon to the left of the label, and dialogs should include an icon in the top-left. Prefer Phosphor Icons for icon choices, unless the project already has a default icon library; in that case, use the project's default.
2. Phosphor-specific: default to the `regular` variant. Use `duotone` only for icons that are purely presentational, non-clickable, and decorative, because it has more visual depth. For action buttons such as edit or confirm, check the project's existing practice and use `regular` or `bold`.

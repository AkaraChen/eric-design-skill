# Visual Design Principles

## Decide the context first: landing or app

Before designing anything, figure out whether you are building a **landing** (marketing site, promo page, homepage) or an **app** (the actual product UI users work in).

- **Landing** — optimize for looks. Lean into visual impact, bold layout, motion, and storytelling. The goal is to impress and convert, so beauty wins.
- **App** — strike a balance between usability and looks. It must be pleasant, but never at the cost of being usable. When the two conflict, usability wins.

## General

1. Prefer toast for error feedback instead of creating inline error displays everywhere.

## Landing

1. For titles, remember to apply text balance (e.g. `text-wrap: balance` / `text-balance`) so headings wrap evenly.
2. For body paragraphs, use `text-wrap: pretty`. Do not put `balance` on long copy.

## Craft

Execute the chosen direction with [`craft.md`](./craft.md). Those
rules are not a style of their own.

## UI

1. In app UI, use icons deliberately and with restraint. Tabs should include an icon to the left of the label, and dialogs should include an icon in the top-left. Prefer Phosphor Icons for icon choices, unless the project already has a default icon library; in that case, use the project's default.
2. Phosphor-specific: default to the `regular` variant. Use `duotone` only for icons that are purely presentational, non-clickable, and decorative, because it has more visual depth. For action buttons such as edit or confirm, check the project's existing practice and use `regular` or `bold`.

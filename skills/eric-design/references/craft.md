# Visual craft

How to execute a chosen visual direction. This is not a style: tokens, palette,
type, and motion come from the project's design system or the Design DNA spec
the user picked. `$eric-ui` still owns what appears; this file owns how it looks.

If the project already has tokens, radii, type, or motion recipes, use those
instead of inventing a parallel set.

## Tokens first

1. Put palette, type, radii, spacing, and motion on CSS variables (or the
   project's existing token file). Compose from those. Do not sprinkle ad-hoc
   values in JSX.
2. No raw hex in components when a token exists. No `text-white` / `bg-black`
   literals. No arbitrary Tailwind values such as `p-[16px]` or `text-[13px]`.
   Need a value? Add a token or use the scale.
3. When you override a background, override the foreground too. Contrast must
   hold in both light and dark.
4. Semantic names over raw hues (`--bg`, `--fg`, `--border`, `--accent`), so the
   same rules work after a palette change.
5. If Tailwind v4 Preflight is in play, restore `cursor: pointer` on enabled
   buttons and `[role="button"]` once at the root. v4 defaults to
   `cursor: default`.

## Quantified anti-slop

These are hard fails. Fix them before polish.

1. At most 3–5 colors in the UI (neutrals plus one primary, at most one extra
   accent). Do not default to purple, violet, or gold unless the chosen direction
   or brand requires it.
2. At most two font families, often one. Mono is for code, stats, and tabular
   IDs, not body copy.
3. No emoji as icons. Use the project's icon library; default Phosphor. See
   [index.md](./index.md).
4. No gradient-blob fillers, aurora meshes, or giant hero gradients as a
   substitute for content. If a wash exists, it should be barely perceptible.
5. No placeholder gray boxes or lorem images in a finished surface. Use real
   content or real generated art.
6. Every element earns its place. Do not add cards, badges, glow, or motion to
   make the layout look complete.
7. Match the existing visual language when editing. Do not introduce a second
   one.

## Surfaces

1. Nested rounded surfaces use concentric radii:

   ```text
   outerRadius = innerRadius + padding
   ```

   If the padding between layers is larger than about 24px, treat them as
   separate surfaces and pick radii independently. Never use the same radius on
   a parent and a padded child.

2. Prefer hairline borders or one quiet shadow recipe for elevation. Do not stack
   glass, neon glow, and rainbow rings. Dividers stay borders; depth can be a
   translucent shadow so it works on more than one background.
3. Tap targets are at least 44×44px. If the visible control is smaller, expand
   the hit area without overlapping another control.
4. Images that sit on a surface can take a 1px inset outline at low opacity so
   they do not float off the background. Skip this when the chosen direction
   already has a different image treatment.

## Motion

1. Interactive state (hover, press, open/close) uses CSS transitions, which
   retarget mid-way. Do not use keyframe animations for toggles — they restart
   and feel broken when the user changes intent.
2. Never `transition: all`, and never Tailwind's `transition` shorthand (it maps
   to `all`). Name the properties: `opacity`, `transform`, `box-shadow`.
3. Prefer `opacity` and `transform`. Durations 150–250ms for chrome; exit a bit
   faster than enter. Respect `prefers-reduced-motion` (opacity-only or instant).
4. Do not add a motion library just for icon swaps or press feedback. If the
   project already has one, follow it. A press scale, if used, stays around
   `0.96` — smaller than `0.95` reads as a cartoon.
5. `will-change` is for a measured first-frame stutter on `transform` / `opacity`,
   not a default on every animated node. Never `will-change: all`.
6. Do not play enter animations for a default state on first paint. Animate
   subsequent state changes, not the page load, unless the entrance is the point
   (a landing hero).

## Typography wrapping

1. Headings and short blocks (about six lines or fewer): `text-wrap: balance` /
   Tailwind `text-balance`.
2. Body paragraphs: `text-wrap: pretty`. Do not put `balance` on long copy —
   browsers ignore it and the intent is wasted.
3. Code and preformatted text: leave the default wrap.
4. Apply antialiased smoothing once at the document root on web surfaces
   (`-webkit-font-smoothing: antialiased`), not per heading.
5. Numbers that update in place (counters, prices, timers, numeric columns) use
   `tabular-nums` so the layout does not shift. Static display figures do not
   need it.

## Favicon

1. Hand-author an SVG favicon. Do not generate it with an image model — it must
   stay crisp at 16px: one bold mark, flat fills from the tokens, square
   `viewBox`, few elements.
2. Do not invent a web manifest or PWA icons unless the product is actually
   installable.

## Finish

Visual work is not done until all of these hold:

- Tokens are the source of truth; no ad-hoc hex or arbitrary values in the
  touched surface.
- Color and type counts stay inside the limits above.
- Contrast holds; foreground was updated wherever background was.
- A ~390px layout has no horizontal overflow; targets are ≥ 44px.
- Anti-slop tells are absent.
- Loading, empty, and error states exist if the surface can enter them.
- Motion is interruptible and reduced-motion safe.
- You looked at the pixels in a real browser (desktop and a ~390px width), not
  only at HTTP or source. Use `$eric-e2e-testing` for that check.

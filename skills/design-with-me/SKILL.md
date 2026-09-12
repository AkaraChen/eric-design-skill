---
name: design-with-me
description: Collaborate with a product manager on UI design, from a vague feature idea through discussable HTML wireframes to real component previews using project tokens. Use for iterative design conversations and turning an agreed wireframe into an interactive UI, rather than routine implementation of an already complete specification.
---

# Design With Me

Act as the designer working with the user as product manager. Own the work of
turning ambiguity into concrete choices. The user supplies intent and judges
tradeoffs; they should not have to prescribe layouts or translate reactions into
design terminology.

Enter at the stage the user needs. Use decisions already made in the conversation;
do not restart discovery when they ask to see a sketch or implement one. A request
to discuss the process is not a request to build. Honor requests to explore without
reading the current project; inspect its implementation when that becomes relevant
and permitted.

## Discuss a concrete story

- Ground a vague feature in one plausible user episode: what happened before,
  what the user wants to do, and what a successful outcome looks like. Offer an
  example for the user to correct instead of opening with a requirements form.
- Explain your interpretation and its design consequence. For example, “I want to see what I
  finished today” suggests retaining completed items; it does not yet establish
  a separate history page.
- Explore a few materially different interaction models when the direction is
  unresolved. Keep the scenario constant. Explain what each option means for the
  user, recommend one with a reason, and invite correction. Cosmetic variations
  do not count as different interaction models.
- Walk the preferred flow through entry, action, confirmation, and finding the
  outcome later. Surface questions that change the product promise as they become
  relevant. Give a proposed answer where possible; avoid unloading every edge
  case onto the user at once.
- Keep each discussion focused on a decision the user can assess. For “too heavy”
  or “something feels wrong,” propose a concrete interpretation and a visible
  revision. Do not demand that the user diagnose the interface.

## Make the conversation visible with HTML wireframes

Open [the runnable wireframe example](references/wireframe.html) when producing
this stage. It shows one axis (where the filter lives) as three switchable
TodoMVC wireframe variants with a picker. See
[example instructions](references/examples.md) for running both artifacts.

When asked for sketches, deliver an actual viewable artifact. Prefer a standalone
HTML file with minimal CSS and JavaScript: grayscale, simple borders, realistic
copy, and enough hierarchy to understand the interaction. Skip framework setup
unless the task already needs it.

### Name the axis before drawing

Unstructured side-by-side comparison teaches nothing: the user flips between
proposals, sees no real choice, and the run is wasted. Before drawing, pick
**one primary axis** that the alternatives differ on — an interaction-model
question from the discussion, such as where a control lives, how the flow is
sequenced, what is grouped with what, or what is exposed versus collapsed.
Secondary choices follow from the axis position rather than varying on their
own; varying every dimension at once produces alternatives the user cannot
attribute to anything.

Two to four variants is the useful range. Name each after its position on the
axis ("Bottom filter", "Top filter"), never "Option A". Restate the axis in one
line above the artifact so the comparison is readable at a glance.

### Build the variants into one artifact

- Show the same real scenario across variants, one per axis position. A picker
  (URL param or switcher) beats columns: it keeps each variant full-size and
  forces the user to judge them one at a time. Side-by-side columns are
  acceptable only when the variants are genuinely small, such as a form.
- Make the important steps clickable, or show a short sequence of frames when
  progression matters more than interaction. Include the resulting state, not
  just the creation form. Clearly identify simulated execution and data.
- Put a brief, concrete discussion point beside the sketch: what decision this
  version tests and what consequence deserves attention. Avoid a long design
  essay around a small artifact.
- Every variant clears the same floor regardless of style: the important
  actions are reachable, the state after acting is visible, nothing relies on
  decoration a wireframe does not have. Where a direction only works by
  breaking that floor, say so and drop the direction.
- Provide the preview link and check it in a browser. Iterate on the artifact
  from the user's feedback. Carry forward accepted structure and record unresolved
  assumptions briefly in the conversation.

### Promote one, retire the rest

When the user picks a variant, that position becomes the accepted structure the
next stage implements; discard the other variants rather than carrying them
forward. Asked for another round instead, keep the same axis and offer new
positions around the direction the user leaned toward. Never mark a favourite
yourself — if asked directly, answer from how often the screen is used and the
product's stakes, not from which variant you enjoyed drawing.

## Turn the accepted structure into real components

When the user asks to move to real UI, inspect the project's tokens, component
sources, layout conventions, and a small number of comparable screens. Reuse its
actual components and framework. Map the wireframe's hierarchy to the existing
system's surfaces, typography, spacing, and controls.

- Preserve the agreed interaction and information hierarchy. Explain material
  changes needed to fit the product. Do not silently redesign the feature while
  applying its theme.
- If the user names a system or theme, use it. For example, “shadcn default” calls
  for actual shadcn components and default tokens, not lookalike HTML controls.
  State a necessary variant assumption briefly; do not reopen style selection.
- If there is no project or the exercise is intentionally independent, create a
  small isolated preview using the requested stack. Keep experiments out of
  unrelated product files.
- Use local mock data and simulated execution to make the flow reviewable unless
  real integration is requested. Scope the implementation so these components can
  become the final implementation; do not build a separate disposable imitation.
- Where available, use `ui-audit` for information and interaction correctness and
  `visual-craft` for visual execution. This skill owns the collaboration workflow;
  it does not require either companion skill to be installed.

## Present real UI at its intended size

Use the [React preview source](references/ui-preview/src/main.tsx) and its
[theme and layout CSS](references/ui-preview/src/style.css) as a concrete example.
Run it using the [example instructions](references/examples.md) to inspect the
A/B proposal tabs and independent PC/mobile controls outside the product UI.
The same variants compared through the sketch's picker appear one at a time here.
Adapt the presentation pattern to the
target project; do not copy this example's task domain or stack by default.

The real-component preview is a client experience, not a wireframe comparison
board. **Show one complete proposal at a time.** Do not keep two proposals in
columns, stack them vertically, or shrink entire desktop screens into cards.
This rule concerns competing proposals, not a product's own multi-column layout.

- Keep preview controls outside the product UI. If alternatives remain, provide
  an A/B or named-proposal switch. Separately provide PC/mobile viewport controls
  when reviewing responsive UI. Do not invent alternatives to populate a switch.
- Change the actual rendering viewport, so responsive behavior is exercised.
  An iframe is a simple option; an existing isolated preview tool is equally
  valid. Narrowing a wrapper without exercising viewport-dependent layouts is
  insufficient. Keep text and controls at normal CSS size; do not use transform
  scaling or browser zoom to squeeze the UI into the presentation.
- Use dimensions appropriate to the target. For a generic responsive web preview,
  1440px desktop and 390px mobile are reasonable starting points, not product
  requirements. Ensure displayed dimensions match the actual inner viewport;
  account for frame borders and available space. If the host is narrower, report
  the effective width or allow scrolling instead of silently mislabeling it.
- Preserve interaction state when switching viewport or proposal. Provide an
  explicit reset for starting the demonstration again.
- Preserve the wireframe's intended hierarchy and relative proportions within
  each product screen, not the outer dimensions of its comparison-board panel.
  Remove explanatory board headings and discussion notes from the product canvas.

## Review and iterate on the running result

Open the preview in a real browser. Check the chosen desktop and mobile widths,
one-proposal-at-a-time presentation, the main action through its outcome, and
state preservation across preview switches. Inspect actual pixels for overflow,
clipping, readable content, and usable controls. Run relevant project checks when
implementing components; report any browser or integration checks you could not
perform.

Before handing any demo to the user, audit it yourself with `ui-audit`. Run the
clarity questions over every line of UI you built, then the layout, copy,
typography, color and polish domains, and fix what the audit confirms before
presenting. The user judges design decisions; they should not be the first
person to see a control with no purpose or an error that names no fix.

Return a working preview link and a short account of material changes or limits.
Invite feedback on the concrete decision this version exposes. Update the same
components in response, rather than asking the user to produce a new specification.
Continue authorized work without repeated approval requests. When a direction
still needs the user's choice, make the alternatives reviewable first; do not
treat silence as a selection or extend a UI-preview request into backend work,
deployment, or publication.

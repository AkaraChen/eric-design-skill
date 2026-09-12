# Scenario axes

The menu step 2 of [SKILL.md](SKILL.md) selects from. Each axis carries a cue: the property of the component that makes the axis worth running. Cue matches, axis stays; cue fails, axis is dropped and the drop is named in the plan.

An axis that stays contributes its scenarios as written here, plus any value the component's own props make obviously worse, such as the longest option in a real dataset.

## Content length

**Cue: the component renders text it does not author.** User input, CMS content, API data, translations. A fixed label the codebase controls fails the cue.

| Scenario | What it catches |
| --- | --- |
| Empty string | Collapsed boxes, floating labels with nothing to float over, placeholder-only inputs |
| One word | Buttons and badges sized to their longest expected content |
| Typical content | The baseline the others are judged against |
| Several sentences | Wrapping, line-height at multiple lines, containers that assumed one line |
| One unbreakable string | A long URL or `Donaudampfschiffahrtsgesellschaft`: overflow with no wrap opportunity |

Breaks land in `make-typography-clean` for wrapping and truncation, `make-layout-better` where the container has no room and `write-usable-copy` where the source copy is the problem.

## Content shape

**Cue: the text can come from users or locales the team does not write in.** Same sources as content length, minus content the codebase fully controls.

| Scenario | What it catches |
| --- | --- |
| Emoji, alone and mixed into text | Line-height jumps, broken vertical centering, truncation splitting a character |
| RTL text | Direction handling, punctuation landing on the wrong side |
| Mixed-direction text | An LTR product name inside an RTL sentence, and the reverse |
| Diacritics and tall scripts | Clipped ascenders and descenders in tight line boxes |
| Numbers where columns align | Proportional figures wobbling in tables and timers |

Breaks land in `make-typography-clean`; spatial mirroring lands in `make-layout-better`.

## Quantity

**Cue: the component repeats over items.** Lists, tables, grids, tag rows, avatar stacks. A singular component fails the cue.

| Scenario | What it catches |
| --- | --- |
| Zero items | Blank regions, missing empty states |
| One item | Grids and layouts designed around plural content |
| The realistic count | The baseline |
| Ten times the realistic count | Missing scroll or pagination, performance collapse, sticky elements unsticking |

Zero-item breaks land in `write-usable-copy` for the empty state and `make-layout-better` for the region; the rest land in `make-layout-better`.

## Container

**Cue: always.** Everything renders inside something, and the component does not choose its container's width. Each width is a fixed container on the page, never a viewport to resize.

| Scenario | What it catches |
| --- | --- |
| A 320px container | Clipping, horizontal scroll, controls escaping the box |
| Squeezed by a flex or grid sibling | Min-content blowout, the component refusing to shrink |
| A very wide container | Unbounded measure, stretched controls, content pinned to opposite edges |

Breaks land in `make-layout-better`.

## State

**Cue: the component has the state.** Read the props and the interaction model; render only the states that arrive as props. A static component fails the cue entirely.

| Scenario | What it catches |
| --- | --- |
| Loading | Layout shift when content arrives, spinners with no accessible name |
| Error | Messages that overflow, color as the only signal |
| Disabled | Contrast collapse, focus behavior on disabled controls |

Focus and hover are the user's to try while they view the page. Invite them to tab through the instances in the report rather than simulating focus in the harness.

Purely visual state polish lands in `ui-polish`.

## Environment

**Cue: the project supports the mode.** These are viewing modes, not page content, so the page renders nothing for them. Name them in the report for the user to toggle while viewing: OS dark mode where a dark theme exists, browser zoom, reduced motion. Simulating one on the page, such as re-declaring dark tokens under a class, observes a different component.

Dark-mode breaks land in `color-system`; motion breaks land in `ui-polish`.

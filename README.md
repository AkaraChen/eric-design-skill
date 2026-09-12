# Design Skills

Collaborative UI and visual design skills, with vendored dependencies.

Skills fall into two kinds. **Workflows** do a job: they run a process end to
end and produce an artifact or a verdict. **Principles** are references: rules
and values that other skills load while working, not something you run alone.

## Workflows

- [design-with-me](skills/design-with-me/SKILL.md): collaborative design from a vague idea to HTML wireframes and real component previews, with separate proposal and device switches.
- [ui-audit](skills/ui-audit/SKILL.md): cross-discipline UI review (clarity, layout, copy, typography, color, polish) that consolidates one ranked verdict.
- [change-review](skills/change-review/SKILL.md): diff/PR-scoped UI review; resolves the change scope and hands findings to `ui-audit`.
- [ui-stress-test](skills/ui-stress-test/SKILL.md): renders one component under every state and scenario on a throwaway page and marks what breaks.
- [explain-interface](skills/explain-interface/SKILL.md): explains how an effect on someone else's site was built.
- [design-dna](skills/design-dna/SKILL.md): extract design DNA from references, then generate a design from the profile.
- [animation/animate](skills/animation/animate/SKILL.md): build one animation from scratch, decision by decision.
- [animation/find-animation-opportunities](skills/animation/find-animation-opportunities/SKILL.md): sweep an interface for moments that deserve motion and propose exact recipes.
- [animation/improve-animations](skills/animation/improve-animations/SKILL.md): audit a codebase's motion and produce prioritized implementation plans.
- [animation/review-animations](skills/animation/review-animations/SKILL.md): critique animation code against a craft bar.
- [animation/animation-vocabulary](skills/animation/animation-vocabulary/SKILL.md): reverse-lookup a vague motion description into its exact term.
- [pick-ui-library](skills/pick-ui-library/SKILL.md): opinionated library picks for a named frontend task.

## Principles

- [make-layout-better](skills/make-layout-better/SKILL.md): grouping, alignment, reading order, disclosure cues, breakpoints, RTL.
- [write-usable-copy](skills/write-usable-copy/SKILL.md): verb-first buttons, error phrasing, empty states, voice consistency.
- [make-typography-clean](skills/make-typography-clean/SKILL.md): type scale, line-height, wrapping, truncation, OpenType details.
- [color-system](skills/color-system/SKILL.md): ramps, semantic tokens, contrast measurement.
- [ui-polish](skills/ui-polish/SKILL.md): concentric radii, elevation, motion values, icon treatment.
- [visual-craft](skills/visual-craft/SKILL.md): visual direction selection and execution rules (anti-slop, craft checklist, design DNA specs).

## Vendored skills

The following skills are vendored verbatim from [emilkowalski/skills](https://github.com/emilkowalski/skills), pinned as the `vendor/emilkowalski-skills` submodule and exposed through relative symlinks under `skills/`:

| Skill | Upstream origin |
| --- | --- |
| [pick-ui-library](skills/pick-ui-library/SKILL.md) | `pick-ui-library` |
| [animation/animate](skills/animation/animate/SKILL.md) | `animate` |
| [animation/review-animations](skills/animation/review-animations/SKILL.md) | `review-animations` |
| [animation/improve-animations](skills/animation/improve-animations/SKILL.md) | `improve-animations` |
| [animation/find-animation-opportunities](skills/animation/find-animation-opportunities/SKILL.md) | `find-animation-opportunities` |
| [animation/animation-vocabulary](skills/animation/animation-vocabulary/SKILL.md) | `animation-vocabulary` |

The principle skills and `ui-audit`/`change-review` are adapted from
[jakubkrehel/skills](https://github.com/jakubkrehel/skills), renamed and
reorganized for this collection (`better-*` → the names above; `variant` folded
into `design-with-me`'s wireframe stage; the accessibility domain dropped).

## Structure

```text
skills/
  design-with-me/
    SKILL.md
  ui-audit/
    SKILL.md
    references/clarity.md
  visual-craft/
    references/
      craft.md
      index.md
      legacy.md
      normalize.css
      spec/
  pick-ui-library -> ../vendor/emilkowalski-skills/skills/pick-ui-library
  animation/
    animate -> ../../vendor/emilkowalski-skills/skills/animate
    review-animations -> ../../vendor/emilkowalski-skills/skills/review-animations
    improve-animations -> ../../vendor/emilkowalski-skills/skills/improve-animations
    find-animation-opportunities -> ../../vendor/emilkowalski-skills/skills/find-animation-opportunities
    animation-vocabulary -> ../../vendor/emilkowalski-skills/skills/animation-vocabulary
  design-dna -> ../vendor/design-dna
vendor/
  design-dna/
  emilkowalski-skills/
```

Initialize the dependencies after cloning:

```sh
git submodule update --init --recursive
```

All design references and profiles live inside the skills. `references/legacy.md`
preserves the original standalone design notes. UI clarity guidance has one
source under `ui-audit/references/clarity.md`.

`visual-craft` references the companion `eric-frontend` skill for implementation
conventions and `eric-e2e-testing` for browser verification. Those remain in
`eric-way`; they are not vendored here.

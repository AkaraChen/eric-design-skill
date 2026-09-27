# Design Skills

Collaborative UI and visual design skills, with vendored dependencies.

Skills fall into two kinds. **Workflows** do a job: they run a process end to
end and produce an artifact or a verdict. **Principles** are references: rules
and values that other skills load while working, not something you run alone.

## Workflows

- [vibe-design](skills/vibe-design/SKILL.md): guide creation, independent critique, generated imagery, and optional video one stage at a time, pausing for feedback and suggesting the next step.
- [add-visual-personality](skills/add-visual-personality/SKILL.md): add generated images and optional shaders or 3D effects, using existing services or the user's choice; generate looping video only when requested.
- [deepen-design](skills/deepen-design/SKILL.md): iteratively refine a design using independent screenshot critiques from a user-selected model until the critic scores it at least 9/10.
- [create-design-system](skills/create-design-system/SKILL.md): identify the app and target page or interface from context or ask the user, then build it with a creative direction inspired by a random alphanumeric string.
- [ui-audit](skills/ui-audit/SKILL.md): cross-discipline UI review (clarity, layout, copy, typography, color, polish) that consolidates one ranked verdict.
- [change-review](skills/change-review/SKILL.md): diff/PR-scoped UI review; resolves the change scope and hands findings to `ui-audit`.
- [ui-stress-test](skills/ui-stress-test/SKILL.md): renders one component under every state and scenario on a throwaway page and marks what breaks.
- [explain-interface](skills/explain-interface/SKILL.md): explains how an effect on someone else's site was built.
- [design-dna](skills/design-dna/SKILL.md): extract design DNA from references, then generate a design from the profile.
- [animate](skills/animate/SKILL.md): build one animation from scratch, decision by decision.
- [find-animation-opportunities](skills/find-animation-opportunities/SKILL.md): sweep an interface for moments that deserve motion and propose exact recipes.
- [improve-animations](skills/improve-animations/SKILL.md): audit a codebase's motion and produce prioritized implementation plans.
- [review-animations](skills/review-animations/SKILL.md): critique animation code against a craft bar.
- [animation-vocabulary](skills/animation-vocabulary/SKILL.md): reverse-lookup a vague motion description into its exact term.
- [text-to-lottie](skills/text-to-lottie/SKILL.md): author Lottie/Bodymovin JSON for the Skia Skottie player from text, SVG, logos, type, loaders, and UI motion.
- [humanizer](skills/humanizer/SKILL.md): detect AI writing tells and rewrite published prose (blog, README, LinkedIn) so it reads like a specific person wrote it.
- [pick-ui-library](skills/pick-ui-library/SKILL.md): opinionated library picks for a named frontend task.

## Principles

- [make-layout-better](skills/make-layout-better/SKILL.md): grouping, alignment, reading order, disclosure cues, breakpoints, RTL.
- [write-usable-copy](skills/write-usable-copy/SKILL.md): verb-first buttons, error phrasing, empty states, voice consistency. Product UI copy; published prose belongs to `humanizer`.
- [make-typography-clean](skills/make-typography-clean/SKILL.md): type scale, line-height, wrapping, truncation, OpenType details.
- [color-system](skills/color-system/SKILL.md): ramps, semantic tokens, contrast measurement.
- [ui-polish](skills/ui-polish/SKILL.md): concentric radii, elevation, motion values, icon treatment.
- [visual-craft](skills/visual-craft/SKILL.md): visual direction selection and execution rules (anti-slop, craft checklist, design DNA specs).

## Vendored skills

The following skills are vendored verbatim from [emilkowalski/skills](https://github.com/emilkowalski/skills), pinned as the `vendor/emilkowalski-skills` submodule and exposed through relative symlinks under `skills/`:

| Skill | Upstream origin |
| --- | --- |
| [pick-ui-library](skills/pick-ui-library/SKILL.md) | `pick-ui-library` |
| [animate](skills/animate/SKILL.md) | `animate` |
| [review-animations](skills/review-animations/SKILL.md) | `review-animations` |
| [improve-animations](skills/improve-animations/SKILL.md) | `improve-animations` |
| [find-animation-opportunities](skills/find-animation-opportunities/SKILL.md) | `find-animation-opportunities` |
| [animation-vocabulary](skills/animation-vocabulary/SKILL.md) | `animation-vocabulary` |

[text-to-lottie](skills/text-to-lottie/SKILL.md) is vendored verbatim from [diffusionstudio/lottie](https://github.com/diffusionstudio/lottie) (`skills/text-to-lottie`), pinned as the `vendor/diffusionstudio-lottie` submodule.

[humanizer](skills/humanizer/SKILL.md) is vendored verbatim from [Aboudjem/humanizer-skill](https://github.com/Aboudjem/humanizer-skill) (`skills/humanizer`), pinned as the `vendor/humanizer-skill` submodule. It rewrites published prose; it does not replace `write-usable-copy` for product UI strings.

The principle skills and `ui-audit`/`change-review` are adapted from
[jakubkrehel/skills](https://github.com/jakubkrehel/skills), renamed and
reorganized for this collection (`better-*` → the names above; the accessibility
domain dropped).

## Structure

```text
.claude-plugin/          plugin.json + marketplace.json
plugin.json              portable Agent Plugins manifest (Codex / ChatGPT)
.codex-plugin/plugin.json
.agents/plugins/marketplace.json
skills/
  vibe-design/
  add-visual-personality/
  deepen-design/
  create-design-system/
  ui-audit/references/clarity.md
  change-review/
  ui-stress-test/
  explain-interface/
  visual-craft/references/
  make-layout-better/
  write-usable-copy/
  make-typography-clean/
  color-system/
  ui-polish/
  pick-ui-library -> ../vendor/emilkowalski-skills/skills/pick-ui-library
  animate -> ../vendor/emilkowalski-skills/skills/animate
  review-animations -> ../vendor/emilkowalski-skills/skills/review-animations
  improve-animations -> ../vendor/emilkowalski-skills/skills/improve-animations
  find-animation-opportunities -> ../vendor/emilkowalski-skills/skills/find-animation-opportunities
  animation-vocabulary -> ../vendor/emilkowalski-skills/skills/animation-vocabulary
  text-to-lottie -> ../vendor/diffusionstudio-lottie/skills/text-to-lottie
  humanizer -> ../vendor/humanizer-skill/skills/humanizer
  design-dna -> ../vendor/design-dna
vendor/
  design-dna/
  emilkowalski-skills/
  diffusionstudio-lottie/
  humanizer-skill/
```

Initialize the dependencies after cloning:

```sh
git submodule update --init --recursive
```

## Install as a plugin

This repository is both the skill source and a single plugin named `eric-design`.
Every skill lives at `skills/<name>/SKILL.md`.

Vendored skills (`design-dna`, `pick-ui-library`, the animation set,
`text-to-lottie`, and `humanizer`) live in git submodules. Clone
or refresh with `--recurse-submodules` (or run the command above) before
expecting those skills to resolve. Marketplace installs that do not initialize
submodules will ship those folders empty.

### Claude Code

```sh
claude plugin marketplace add AkaraChen/eric-design-skill
claude plugin install eric-design@eric-design-skill
```

Local check without installing:

```sh
claude --plugin-dir .
```

Then invoke a skill as `/eric-design:ui-audit`. `claude plugin validate .`
checks the marketplace catalog. Runtime discovery of the 23 skills can be
inspected with `claude --plugin-dir . plugin details eric-design`. Validating
`.claude-plugin/plugin.json` warns that vendored skill entries are symlinks;
Claude follows those symlinks when the plugin loads.

### Codex

```sh
codex plugin marketplace add AkaraChen/eric-design-skill
codex plugin add eric-design@eric-design-skill
```

A checkout of this repo also exposes the plugin through
`.agents/plugins/marketplace.json`. Restart Codex after adding the marketplace,
then enable `eric-design`. Invoke skills as `$ui-audit`.

### Grok Build

```sh
grok plugin install AkaraChen/eric-design-skill --trust
```

All design references and profiles live inside the skills. `references/legacy.md`
preserves the original standalone design notes. UI clarity guidance has one
source under `ui-audit/references/clarity.md`.

`visual-craft` references the companion `eric-frontend` skill for implementation
conventions and `eric-e2e-testing` for browser verification. Those remain in
`eric-way`; they are not vendored here.

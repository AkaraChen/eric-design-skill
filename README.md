# Design Skills

Collaborative UI and visual design skills, with the vendored Design DNA dependency.

## Skills

- [design-with-me](skills/design-with-me/SKILL.md): collaborative design from a vague idea to HTML wireframes and real component previews, with separate proposal and device switches.
- [ui-clarity](skills/ui-clarity/SKILL.md): UI usefulness, disclosure, and cognitive load.
- [visual-craft](skills/visual-craft/SKILL.md): visual direction, design profiles, and execution details.
- [design-dna](skills/design-dna/SKILL.md): extract and apply design DNA, pinned from [zanwei/design-dna](https://github.com/zanwei/design-dna).

## Imported skills

The following skills are adapted from [jakubkrehel/skills](https://github.com/jakubkrehel/skills) (renamed and reorganized to fit this collection; `variant` was folded into `design-with-me`'s wireframe stage):

| Skill | Upstream origin |
| --- | --- |
| [make-typography-clean](skills/make-typography-clean/SKILL.md) | `better-typography` |
| [make-layout-better](skills/make-layout-better/SKILL.md) | `better-layout` |
| [write-usable-copy](skills/write-usable-copy/SKILL.md) | `better-writing` |
| [ui-polish](skills/ui-polish/SKILL.md) | `better-ui` |
| [color-system](skills/color-system/SKILL.md) | `better-colors` |
| [ui-audit](skills/ui-audit/SKILL.md) | `better-interface` |
| [change-review](skills/change-review/SKILL.md) | `interface-review` |
| [ui-stress-test](skills/ui-stress-test/SKILL.md) | `break` |
| [explain-interface](skills/explain-interface/SKILL.md) | `explain-interface` |

Also imported, from [emilkowalski/skills](https://github.com/emilkowalski/skills):

| Skill | Upstream origin |
| --- | --- |
| [pick-ui-library](skills/pick-ui-library/SKILL.md) | `pick-ui-library` (verbatim) |

## Structure

```text
skills/
  design-with-me/
    SKILL.md
  ui-clarity/
    references/ui.md
  visual-craft/
    references/
      craft.md
      index.md
      legacy.md
      normalize.css
      spec/
      ui.md -> ../../ui-clarity/references/ui.md
  design-dna -> ../vendor/design-dna
vendor/
  design-dna/
```

Initialize the dependency after cloning:

```sh
git submodule update --init --recursive
```

All design references and profiles live inside the skills. `references/legacy.md`
preserves the original standalone design notes. Shared UI guidance has one source
under `ui-clarity`; keep both skills together so the relative link resolves.

`visual-craft` references the companion `eric-frontend` skill for implementation
conventions and `eric-e2e-testing` for browser verification. Those remain in
`eric-way`; they are not vendored here.

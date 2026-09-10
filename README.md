# Design Skills

Collaborative UI and visual design skills, with the vendored Design DNA dependency.

## Skills

- [design-with-me](skills/design-with-me/SKILL.md): collaborative design from a vague idea to HTML wireframes and real component previews, with separate proposal and device switches.
- [ui-clarity](skills/ui-clarity/SKILL.md): UI usefulness, disclosure, and cognitive load.
- [visual-craft](skills/visual-craft/SKILL.md): visual direction, design profiles, and execution details.
- [design-dna](skills/design-dna/SKILL.md): extract and apply design DNA, pinned from [zanwei/design-dna](https://github.com/zanwei/design-dna).

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

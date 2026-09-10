# Eric Design Skill

Eric's UI and visual design skills, with the vendored Design DNA dependency.

## Skills

- [eric-ui](skills/eric-ui/SKILL.md): UI usefulness, disclosure, and cognitive load.
- [eric-design](skills/eric-design/SKILL.md): visual direction, design profiles, and execution details.
- [design-dna](skills/design-dna/SKILL.md): extract and apply design DNA, pinned from [zanwei/design-dna](https://github.com/zanwei/design-dna).

## Structure

```text
skills/
  eric-ui/
    references/ui.md
  eric-design/
    references/
      craft.md
      index.md
      legacy.md
      normalize.css
      spec/
      ui.md -> ../../eric-ui/references/ui.md
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
under `eric-ui`; keep both skills together so the relative link resolves.

`eric-design` references the companion `eric-frontend` skill for implementation
conventions and `eric-e2e-testing` for browser verification. Those remain in
`eric-way`; they are not vendored here.

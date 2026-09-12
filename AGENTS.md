# Agent Notes

- Keep skill sources in `skills/` and their supporting files in `references/`.
- Keep `design-dna` as a pinned submodule under `vendor/`, exposed by `skills/design-dna`.
- Keep `diffusionstudio/lottie` as a pinned submodule under `vendor/diffusionstudio-lottie`, exposed by `skills/text-to-lottie`.
- Keep `Aboudjem/humanizer-skill` as a pinned submodule under `vendor/humanizer-skill`, exposed by `skills/humanizer`.
- Keep `nextlevelbuilder/ui-ux-pro-max-skill` as a pinned submodule under `vendor/ui-ux-pro-max-skill`, exposed by `skills/design-system`.
- Share existing files through relative symlinks within this repository instead of duplicating them.
- Keep every skill at `skills/<name>/SKILL.md`. Do not add grouping folders under `skills/`.
- Plugin manifests live at the repo root: `.claude-plugin/` for Claude Code, `plugin.json` plus `.codex-plugin/` for Codex / Agent Plugins, and `.agents/plugins/marketplace.json` for the Codex marketplace catalog. Do not nest `skills/` inside those manifest directories.
- Do not add a root `docs/` directory or `install.sh`.

---
name: design-in-eric-way
disable-model-invocation: true
description: Route a design goal to the right skill in this collection. Ask what the user wants to do, name the matching skill, then stop. Only runs when explicitly invoked.
---

# Design in Eric Way

The front door. It recommends a skill; it never runs one.

Ask what the user is trying to do — unless they already said. Match the task, not their wording. Recommend one skill (two only if they chain), one line each on what it does and how to call it (`/eric-design:<name>`, or `$<name>` in Codex), then stop and let the user choose.

| The user wants to… | Skill |
| --- | --- |
| create a design, guided stage by stage | `vibe-design` |
| build a page from a random creative direction | `create-design-system` |
| pull design DNA out of a reference site | `design-dna` |
| set a visual direction with tokens, type, color, motion | `visual-craft` |
| add generated images, shaders, or 3D | `add-visual-personality` |
| refine a design with an independent critic | `deepen-design` |
| review a screen, flow, or interface | `ui-audit` |
| review a diff, branch, or PR | `change-review` |
| stress one component under every state | `ui-stress-test` |
| understand how an effect on another site was built | `explain-interface` |
| build one animation from scratch | `animate` |
| find where motion is missing | `find-animation-opportunities` |
| audit a codebase's motion | `improve-animations` |
| critique existing animation code | `review-animations` |
| name a vague motion | `animation-vocabulary` |
| author Lottie JSON | `text-to-lottie` |
| fix layout, alignment, or reading order | `make-layout-better` |
| fix product UI copy | `write-usable-copy` |
| fix type scale, wrapping, or truncation | `make-typography-clean` |
| fix color ramps or contrast | `color-system` |
| fix radii, elevation, or icons | `ui-polish` |
| rewrite published prose (blog, README, post) | `humanizer` |
| pick a library for a frontend task | `pick-ui-library` |

The craft rows (layout, copy, typography, color, polish) are references, not run alone — the workflow skills load them on their own.

If nothing fits, say so and stop. Don't design, review, or list every skill on the way.

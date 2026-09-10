---
name: eric-ui
description: Apply Eric's UI correctness standards. Use when designing, implementing, or reviewing product UI, user-visible copy, controls, fields, statuses, metadata, progressive disclosure, privacy boundaries, or cognitive load; decide what users need to see and what the interface must hide.
---

# Eric UI

Build the smallest interface that helps the user understand an outcome and take
the right next action. UI correctness owns usefulness, disclosure, and cognitive
load; `$eric-design` owns visual direction and flair.

Read [`references/ui.md`](references/ui.md) before making or reviewing UI
changes.

## Workflow

1. Identify the user's task and the decisions or actions the UI must support.
2. Inspect every added line of UI and remove anything without concrete user
   value.
3. Translate system state into user-recognizable outcomes; do not mirror the
   data model.
4. Define explicitly what the user sees, what stays hidden, and what appears only
   on demand.
5. Check authorization and privacy before disclosure.
6. Reduce the result to the smallest clear outcome and next action.
7. Use `$eric-design` only after the information boundary is correct.

## Boundaries

- Do not add UI merely to expose available data.
- Do not treat visual polish as evidence that the UI is useful.
- Do not hide information required for an informed or safe user decision.
- Do not use progressive disclosure to bypass permissions.

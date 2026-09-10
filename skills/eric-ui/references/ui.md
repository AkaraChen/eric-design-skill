# How to build UI in Eric way

UI is a boundary between the product and the user, not a window into the data
model or a stage for design details.

## Review every added line

For every added line of UI—copy, control, field, status, metadata, or decorative
element—ask:

1. What user decision or action does this help?
2. Is this the clearest user-facing concept, or an implementation detail leaking
   through?
3. Does this reveal data this user should not see?
4. Can it be removed, summarized, or disclosed only when needed?

If there is no concrete user benefit, do not render it.

## Decide what to show

Show only what helps the user understand the current outcome, choose a next
action, avoid a mistake, or recover from one. Use language and concepts the user
already recognizes.

Hide internal identifiers, raw enums and payloads, storage or provider details,
permission machinery, system topology, debug data, stack traces, and operational
metadata unless the user's task explicitly requires them. Authorization is still
mandatory: progressive disclosure must never expose data the user cannot access.

Prefer the smallest useful summary. Reveal secondary detail on demand when it
supports a real task.

## Keep the interface quiet

- Prefer a toast for error feedback instead of scattering inline error displays
  when the user does not need the message in context to recover.
- Do not turn the UI into a dashboard merely because data exists.
- Do not expose fields just because the API returns them.
- Do not add labels, badges, cards, metrics, or controls to make the interface
  look more complete.
- Do not use the product as a showcase for design-system details, visual effects,
  or clever interactions.
- Prefer one clear outcome and next action over a dense presentation of state.

The right UI makes the user's task obvious while keeping product and system
complexity out of sight.

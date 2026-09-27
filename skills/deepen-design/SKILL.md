---
name: deepen-design
description: Improve an existing design through repeated screenshot critiques by a fresh subagent using a user-selected model. Use when the user wants iterative visual refinement against a design studio quality bar.
---

# Deepen Design

## Choose the critic model

Replace `[critic model]` below with the model the user specifies. If they have not specified one, ask which model to use. If that model is unavailable for subagents, ask the user to choose an available model.

## Independent critic context

The critique must run in a separate subagent, never as self-critique or role-play in the implementing agent's conversation. Create a new subagent for every iteration with no inherited conversation history. Never resume the previous critic or send it a follow-up critique request.

Give the subagent only the current design screenshots and the same fixed critic prompt. Do not pass source code, implementation details, previous feedback, scores, or the completion threshold. Verify each screenshot shows the intended, fully rendered view before handing it over.

When the user says to use your own model, use that model in a fresh subagent; this does not mean the main agent should evaluate its own work. If independent subagents are unavailable, report that limitation rather than presenting self-critique as independent review.

## Prompt

I want you to improve this design. To figure out what to focus on, use a [critic model] subagent as a design critic.

Follow this procedure at each iteration:

Capture a screenshot of the current design

Invoke the critic in a fresh context, with just the screenshot, not the code, implementation details, or earlier iterations/critiques

Ask it to evaluate the aesthetic that the design is going for, imagine how a top design studio would execute this aesthetic, then outline the biggest gaps

Lastly, it should provide a score out of 10 indicating how close the current design is to that studio-level quality bar

Provide this guidance to the critic in its prompt:

It should think high-level about the overall structure and composition as well as look at the fine details

It should watch out for patterns that feel overdone, excessive, or otherwise obviously AI-generated, and penalize them

It should provide tight, specific feedback, not vague prose

It should be bold and opinionated, not rely on what’s safe or easy

Your work is only complete when the critic independently deems it 9/10 or higher. Do not put that criterion in the critic prompt; keep it objective in its scoring. Use the same critic prompt each time.

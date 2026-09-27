---
name: vibe-design
description: Guide the user through creating a design, deepening it with independent critique, and adding generated imagery, with optional video. Complete one stage at a time, then stop for feedback and suggest the next step.
---

# Vibe Design

Run the following skills as a guided design process. Read each linked skill when entering its stage and follow its instructions; keep its prompts in that skill rather than duplicating them here.

## Step cues in every reply

Every user-facing reply during this workflow must begin with the current step number, name, and status, in the user's language. This includes progress updates, questions, replies to feedback or interruptions, and final handoffs. Keep the cue brief, for example: **Step 1 · Create the design — in progress** or **第 2 步 · 深化设计 — 等待反馈**.

Use the same step numbers and names throughout: 1. Create the design; 2. Deepen the design; 3. Add visual personality with images; 4. Add video (optional).

- At the start of the workflow, show this short roadmap, identify the current step, and explain what you will produce before pausing.
- In progress updates, state the action or finding within the current step. Setup, implementation, browser checks, and critic iterations are activities within a step, not new numbered steps.
- When asking for information, say what the current step needs and what will happen after the user answers.
- When responding to feedback, identify the step being revised. On resuming after an interruption, state what is complete and what remains in that step.
- At a handoff, report the actual status, show the result, invite feedback, and explicitly name the next available step and its purpose. Say that you are waiting for feedback before advancing; keep video explicitly optional.

Never report a step as complete before its deliverable and required checks are done. These cues communicate progress; they do not replace the pauses required below.

## One stage at a time

Start at stage 1 unless the user asks to resume, skip, or work on an existing design at a later stage. Reuse the app context, design decisions, model choices, and configured services already established in the conversation.

Complete only the current stage, then show the result and stop for user feedback. Do not start the next stage in the same turn. A general request to run this workflow does not authorize advancing through all stages automatically.

At each pause:

- Briefly explain what changed and provide a preview, screenshot, or link to the result.
- Invite feedback on the current result.
- Name the next available stage and explain what it would add.
- Wait for the user's reply.

If the user requests changes, revise the current stage and pause again. If they ask to continue, move to the next stage. Positive feedback alone is not a request to advance. Let the user skip stages or finish whenever they want.

Ask for missing information only when the current stage needs it. Do not ask for a critic model or media service before reaching the relevant stage.

## 1. Create the design

Use [create-design-system](../create-design-system/SKILL.md).

Identify the app and target page or interface from the project or the user's answers. Generate the random string, derive the creative direction, and build the initial design.

Stop and invite feedback on the direction. Explain that the next step can use an independent design critic to deepen the design.

## 2. Deepen the design

Use [deepen-design](../deepen-design/SKILL.md).

Resolve the critic model as that skill requires. Every critique must use a newly created, separate subagent with no inherited conversation or earlier critique history; the implementing agent must not score its own work. Its screenshot, critique, and refinement iterations happen within this stage. Complete the stage when the critic independently scores the current design at least 9/10. If the process is blocked or interrupted, report its actual state without claiming completion.

Stop, share the result and critic score, and invite feedback. Explain that the next step can add personality with generated images, optionally combined with shaders or 3D effects.

## 3. Add visual personality with images

Use the image path of [add-visual-personality](../add-visual-personality/SKILL.md).

Reuse a suitable configured service; otherwise let the user choose the service and authentication method. Generate and integrate imagery, then verify it in the browser as the skill requires.

Stop and invite feedback. Tell the user they can finish here, refine the imagery, or request a looping video as an optional next step. A generic request to continue does not select video; ask which option they want if unclear.

## 4. Add video — optional

Enter this stage only when the user explicitly requests video. Use the video path of [add-visual-personality](../add-visual-personality/SKILL.md), carrying forward the approved visual direction and existing service choices where suitable.

Generate and integrate the clip, then verify it frame-by-frame in the browser, including the loop boundary.

Stop and invite feedback. Explain that the user can refine the motion, revisit an earlier stage, or finish. Do not automatically restart the critique or generation process.

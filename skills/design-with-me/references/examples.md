# A small TodoMVC example

Use this example to understand the transition from a discussable wireframe to
real components. Its task domain, layout, and stack are not requirements for
future designs. The example deliberately preserves the two presentation stages:
**wireframes compare proposals side by side; real UI shows one proposal at a time
through tabs, with independent device-width controls.**

- A places filters below the list: enter a task and read the list first.
- B places filters above the entry field: choose which tasks to view first.

Both use the same data and actions; the small placement difference keeps the
example about collaborative comparison rather than domain complexity.

1. Open [wireframe.html](wireframe.html) directly. This static sketch compares A and B in
   two columns, with a short discussion point under each.
2. Run [ui-preview/](ui-preview/) to try the same two proposals as React + shadcn UI.
   Add, complete, delete, filter, and clear todos. The preview toolbar selects A or B with tabs;
   separate controls switch the actual iframe viewport between desktop and mobile.
   Both switches preserve todos, the current filter, and unfinished input.

From this skill's directory, with Node.js 22.12+:

```sh
cd references/ui-preview
npm ci
npm run dev
```

Open the URL printed by Vite. PC targets 1440px, mobile targets 390px; either
fits the available host width without scaling. Reset restores the sample items.

Start with [src/main.tsx](ui-preview/src/main.tsx): `Todos` is the product;
`Preview` is the external presentation shell. [src/style.css](ui-preview/src/style.css)
contains theme tokens and a small reset. Only Button and Input are vendored;
checkboxes use the browser's native control.

This is a reduced TodoMVC exercise, not a full specification implementation.
Inline editing, bulk completion, persistence, routing, and a backend are omitted
because they do not help demonstrate this design workflow.

`npm run build` checks TypeScript and builds the preview. For a browser smoke
check, open the preview and run `import('/check.js').then(m => m.default())` in
its developer console. This resets the example and checks the main interactions
proposal switching and viewport state retention. Dependencies and build output are ignored by Git.

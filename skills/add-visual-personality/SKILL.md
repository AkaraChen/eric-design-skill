---
name: add-visual-personality
description: Add personality to an existing design with generated images, optionally combined with shaders or 3D effects. Use video generation only when the user requests video. Reuse configured generation services or ask the user which service and authentication method to use.
---

# Add Visual Personality

## Choose the medium and service

Read the current page and inspect its design to identify the visual to create or replace.

Default to image generation. Use video generation only when the user asks for video; a request for more personality or interesting visuals alone stays on the image path.

Use the user's chosen service and authentication method when specified. Otherwise, check for relevant available tools, connected services, and configured project integrations. Reuse a suitable existing service and its authentication directly, without asking the user to configure it again. Check credential availability without displaying secret values.

If no suitable service is available, ask which service and authentication method the user wants to use for the required capability: image generation, video generation, or video background removal. Resolve only the capabilities needed for the current request. Wait for the user's choice rather than selecting a provider for them.

Follow the selected service's supported authentication flow. For API keys, use local environment variables or the user's existing credential store; do not ask them to paste keys into chat. Never put credentials in source code, generated assets, browser code, or the product. Do not print them in logs.

## Image generation — default

Follow this prompt for the current design, using the selected image generation service:

The design is pretty plain. Add more personality using image generation. Consider shaders or 3D effects in combination with images to create more interesting visuals.

Generate and integrate the image into the page. Use your judgment to make the visual fit the page's composition and colors.

Verify that your work looks right in the browser. If shaders, 3D effects, or other motion are involved, inspect the result frame-by-frame as well.

After completing the image work, you may briefly suggest turning the visual into a looping video as a possible next step. Wait for the user to request video before generating it.

## Video generation — when requested

Identify the subject and desired motion from the user's request and the current page. Replace `[subject and motion]` below with that context; ask if it is unclear.

Find appropriate recent models for video generation and, when needed, background removal within the selected services. Check current provider documentation for model availability, supported inputs, and output formats before using them.

Follow this prompt:

Can you replace the image on this page with a looping video clip that does something more interesting? [subject and motion]

For example, a crystal could splinter apart and slowly spin around, with glassy effects that refract the page background and cast shadows and light around it. Adapt the subject and effects to the actual design.

To get convincing glass refraction effects, render the video of the glass over the page background colors first (so it bakes in the refraction effects), then remove the background with a video matting model.

Use that refraction and matting workflow when the visual calls for transparent glass over the page. Inspect whether matting preserves the glass edges, refraction, shadows, and light; refine the result if it loses them. For other visuals, use background removal only when the composition needs it.

Integrate the clip as a looping video. Verify that your work looks right frame-by-frame in the browser, including the loop boundary and its composition over the actual page background. If a transparent result is needed, verify that the exported format preserves transparency in the target browser.

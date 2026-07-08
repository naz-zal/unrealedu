# Epic Games Education Agent Guide

This file is the north star for agents working in this repository. Follow it before making design, content, layout, configuration, or deployment changes.

## Project Mission

Epic Games Education is a course-style Unreal Engine documentation website built with Astro and Starlight. The site should be smooth, fast, user friendly, and easy to grow into a larger learning handbook.

The primary experience is reading and learning. Do not turn the site into a landing page, marketing site, portfolio, or decorative showcase unless the user explicitly changes the project direction.

## Technical Stack

- Framework: Astro.
- Docs system: Starlight.
- Content location: src/content/docs.
- Custom CSS location: src/styles/docs.css.
- Astro config: astro.config.mjs.
- Build command: npm.cmd run build.
- Hosting target: GitHub Pages, using Project Pages by default.
- Deployment target: GitHub Actions should build Astro and deploy static output. Do not commit dist as the normal deployment method.

## Layout North Star

The header, sidebar, main article, and On this page rail must behave as one coordinated layout shell.

- Preserve the shared shell/grid system used by the custom CSS variables.
- Keep sidebar, main content, and On this page aligned from the same layout math.
- When zooming out or widening the viewport, columns must stay together and remain centered as a unit.
- Do not reintroduce Starlight default desktop formulas if they cause the main content to drift away from the sidebar.
- Keep the top bar compact.
- Keep the title as Epic Games Education.
- Do not show the old V logo.
- Do not show GitHub/social links in the header unless the user explicitly asks.
- Keep search on the right side of the header.
- Keep the vertical divider removed from the left of On this page.

If a layout change affects desktop positioning, verify the sidebar, article column, and On this page column still move together.

## Visual Direction

- Use a restrained dark documentation style.
- Favor readable density over decorative spacing.
- Avoid oversized hero sections, floating page sections, gradient backgrounds, decorative cards, and marketing-style layouts.
- Headings should be strong but not hero-sized inside documentation pages.
- UI spacing should support scanning and repeated reading.
- Use Starlight-native UI patterns unless they conflict with the required layout behavior.

## Content Direction

Write content like a course, not an API dump.

Each major teaching page should generally include:

- What the concept is.
- Why it matters in Unreal Engine.
- How to use it in practice.
- A small example or workflow.
- Common mistakes or points of confusion.

Keep the book structure clear:

- Start Here
- Unreal Engine Fundamentals
- Blueprints
- C++

Prefer short, focused pages that can be expanded later. Avoid long unfocused pages that mix unrelated concepts.

## Production Readiness

- Run npm.cmd run build after layout, config, dependency, or content-structure changes.
- Keep dependencies minimal.
- Avoid unnecessary client-side JavaScript.
- Favor static content, local assets, and Starlight/Pagefind features.
- Keep the site fast by default, but do not invent numeric performance budgets unless the user asks for them.
- Preserve accessibility basics: readable contrast, semantic headings, keyboard-friendly navigation, and text that does not overlap at supported viewport sizes.
- Do not undo unrelated user changes.

## GitHub Pages Requirements

This project should be production-ready for GitHub Pages.

- Use GitHub Actions for deployment.
- Do not rely on committing generated dist output.
- Once the repository owner/name is known, configure Astro's site and base values for Project Pages.
- If a custom domain is added later, update the hosting guidance and Astro config accordingly.

## Open Project Variables

Do not guess these silently when they become relevant. Ask the user or inspect the repository/remote configuration first.

- Final GitHub Pages URL.
- GitHub repository owner and repository name.
- Whether a custom domain will be used.
- Whether analytics should be added.
- Whether Starlight/Pagefind search is enough.
- Whether strict Lighthouse or page-weight budgets should be enforced.
- Whether visual regression screenshots should become required before release.

## Change Discipline

Before editing:

- Inspect the relevant files first.
- Prefer existing Astro/Starlight patterns.
- Keep edits scoped to the user's request.
- Avoid broad refactors unless they are necessary to keep the site clean and production-ready.

After editing:

- Run the smallest useful verification.
- For docs/layout/config changes, run npm.cmd run build.
- Summarize what changed and mention any checks that could not be run.

## Definition of Done

A change is done only when:

- The site still builds, unless a blocker is clearly reported.
- The documentation experience remains smooth, fast, and readable.
- The layout shell stays coherent across desktop zoom levels and wide screens.
- The change supports the course-style Unreal Engine education direction.
- Future agents can understand the decision from the code, content, or this file.
# Production Readiness Report

Scan date: 2026-07-07

Build status: `npm.cmd run build` completed successfully, but emitted a sitemap warning because `site` is not configured.

## High Priority

1. Missing GitHub Pages deployment workflow

   There is no `.github/workflows` directory in the repo. The project guide says deployment should use GitHub Actions and should not rely on committing `dist`. Right now there is no repeatable production deployment path.

   Suggested fix: add a GitHub Actions workflow that installs dependencies, builds Astro, uploads `dist`, and deploys through GitHub Pages.

2. Astro is not configured for the final production URL

   `astro.config.mjs` does not set `site` or `base`. The build confirms this with:

   ```text
   [WARN] [@astrojs/sitemap] The Sitemap integration requires the `site` astro.config option. Skipping.
   ```

   This will also break asset and route behavior for GitHub Project Pages if the site is served from `/repo-name/` instead of the domain root.

   Suggested fix: inspect or confirm the GitHub owner/repo, then set `site` and `base` correctly.

3. Dependencies use `latest`

   `package.json` uses `latest` for both `astro` and `@astrojs/starlight`. This is risky for production because fresh installs can pull breaking framework changes even when the code has not changed. The lockfile helps only as long as installs use `npm ci` and the lockfile is preserved.

   Suggested fix: pin explicit compatible versions and update deliberately.

4. No Node version is declared

   The lockfile shows Astro-related packages requiring modern Node versions, but the project does not declare `engines`, `.nvmrc`, `.node-version`, or a CI Node version. A future CI runner or collaborator using an older default Node version could fail before the build starts.

   Suggested fix: choose a supported Node version, likely Node 20 LTS or newer, and declare it in `package.json` plus the deployment workflow.

5. Custom layout CSS is tightly coupled to Starlight internals

   `src/styles/docs.css` overrides internal selectors such as `.main-frame`, `.main-pane`, `.right-sidebar`, `.sidebar-pane`, `.right-sidebar-panel`, `site-search`, and escaped utility classes like `.sl-flex.print\:hidden`. It also uses many `!important` rules.

   This is the biggest future maintenance risk. A Starlight update could rename or restructure those internals and silently break the coordinated layout shell.

   Suggested fix: keep the current layout goal, but reduce fragile overrides where possible and pin Starlight before further layout work. Add visual checks for desktop/wide layouts if this shell remains highly customized.

## Medium Priority

6. The homepage still behaves like a splash/landing page

   `src/content/docs/index.mdx` uses `template: splash`, a hero tagline, action buttons, and card grid. The project guide says the primary experience is reading and learning, not a landing page or decorative showcase.

   Suggested fix: convert the homepage into a compact course table of contents or start page that feels like documentation first.

7. No repository README

   There is no `README.md` in the repo. That makes the project harder to run, deploy, and maintain for future contributors.

   Suggested fix: add a concise README with setup, local dev, build, deployment, content structure, and conventions.

8. No automated quality checks beyond build

   The only scripts are `dev`, `build`, and `preview`. There is no lint, format, link check, markdown validation, or accessibility/visual check.

   Suggested fix: at minimum, add CI that runs `npm ci` and `npm.cmd run build`. Later consider markdown/link checks once content grows.

9. Light/dark theme behavior is unclear

   The CSS heavily customizes dark colors and hides `.right-group`, which also removes Starlight's normal header controls. If a user lands in light mode or has a stored theme preference, the site may show a mixed custom/default theme with no obvious theme control.

   Suggested fix: either intentionally force/design one theme, or style both themes and keep a clear theme control.

## Lower Priority

10. Search keyboard hint is hidden

   `site-search button[data-open-modal] kbd` is hidden with `display: none !important`. This keeps the header compact, but removes a useful affordance for keyboard users.

   Suggested fix: decide whether compactness is worth the discoverability loss. If the hint stays hidden, make sure keyboard search remains easy to discover elsewhere.

11. The generated build emitted an odd 404 message

 After the build, the console printed:

   ```text
   Entry docs -> 404 was not found.
   ```

   The build still produced `dist/404.html`, so this is not currently blocking. It is worth investigating because it may come from Starlight content routing or a stale generated artifact.

   Suggested fix: reproduce after a clean build and trace whether this is from Astro/Starlight, Pagefind, or local shell behavior.

12. Robots file is minimal

   `public/robots.txt` allows all crawling but does not reference a sitemap. Because `site` is missing, sitemap generation is currently skipped anyway.

   Suggested fix: after setting `site`, add a sitemap reference if appropriate.

13. Git remote is not configured

   `git remote -v` returned no remotes. That means the final GitHub Pages owner/repo cannot be inferred locally yet.

   Suggested fix: add or confirm the GitHub remote before configuring Project Pages `site` and `base`.

14. Local command output is polluted by a PowerShell profile error

   Several commands printed:

   ```text
   profile.ps1 cannot be loaded because running scripts is disabled on this system.
   ```

   This is not a site production bug, but it makes local automation noisier and can obscure real command failures.

   Suggested fix: adjust the local PowerShell profile setup or run project scripts in a shell mode that does not source that profile.

## Current Strengths

- The Astro build completes.
- Starlight content collections are configured with the current loader/schema pattern.
- `dist`, `.astro`, `node_modules`, local agent folders, and environment files are ignored.
- The docs structure already matches the intended top-level course sections: Start Here, Unreal Engine Fundamentals, Blueprints, and C++.

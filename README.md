# Engineering AI Playbook

A **public, tool-agnostic prompt library** and reusable SDLC execution guide for our engineering team. Designed to improve verified work delivered per AI interaction—not to promote a specific vendor.

## Start here

1. Visit **[Engineering AI Playbook](https://smg99.github.io/engineering-ai-playbook/)**. No clone, install or account required to read the guide.
2. New to the workflow? Choose **Start your first story** for a fictional worked example, filled prompts and a verification checklist.
3. For ongoing work, choose a workflow in **Prompts**, read what to provide and what comes next, then copy the prompt. Replace any bracketed placeholders in your approved AI tool.
4. Read Team guides and the glossary on the same page. No separate documentation window is needed.
5. Verify results with actual code, tests and diffs, then follow your team’s review process. The site does not run AI, inspect code or update tickets.

For offline use, clone this repository and open [index.html](index.html) in a browser.

## Team guides

- [Engineering execution](docs/WORKFLOW.md)
- [Token efficiency and switching AI providers](docs/QUOTA-AND-HANDOFF.md)
- [IDE, agent and MCP choices](docs/TOOLS.md)
- [Security and client separation](docs/SECURITY.md)
- [Contributing / QA expansion](docs/CONTRIBUTING.md)

## Boundaries

Client Jira remains the source of truth for work items; client Bitbucket remains the home for application code, PRs and CI. **No client tickets, code, credentials, proprietary designs or confidential operational information should be copied into this repository.**

This repository and its GitHub Pages site are deliberately **public**. Publish only generic guidance and synthetic examples. Keep client-specific plans, state notes and development strategies in approved private locations.

## Maintenance

No dependency installation, paid API, framework, telemetry or database. The site uses static HTML, CSS and JavaScript with no runtime dependencies. Add role-based prompts with synthetic examples and verify their usefulness before merging. Prompt definitions and usage metadata live in `assets/app.js`; styles live in `assets/styles.css`. Each prompt has usage, inputs and next-action metadata. Keep that metadata aligned when changing prompts.

Edit the four guide sources in `docs/`, then run `python3 scripts/sync-guides.py` to embed their readable content into `index.html`. Commit both source and generated HTML. Run `python3 scripts/sync-guides.py --check` to detect drift. Python is needed only for maintaining guides, not for reading or serving the site.

Verify the first-story walkthrough, category/search combinations, next-prompt navigation, clipboard copying and fallback, inline guide links, keyboard focus and narrow-screen layout before publishing. Personal checklist selections reset on reload; nothing is sent to a backend.

## Hosting

GitHub Pages publishes the repository root from `main`. The `.nojekyll` file serves this static app without Jekyll processing. Changes pushed to `main` are published automatically. Prompts, First story and Guides are focused views within one app; navigation never opens a separate documentation window. The first-story view shows one step at a time. Team guides are embedded as expandable sections. Markdown sources remain available in this repository for contributors.

GitHub Pages is the preferred no-cost option for this public static guide: no separate hosting account, framework or build configuration is needed. Vercel can host static sites and connect private repositories, but adds another service; its free Hobby plan is limited to personal, non-commercial use. Reassess hosting if server-side features or authenticated access become requirements.

## Design

Light neutral surfaces and a restrained violet accent are inspired by the supplied DesignSystems.one token-generator preview. System fonts avoid external font downloads. Prompt size indicators are rough character-based token estimates, not provider billing counts. Only prompt text is copied, without the surrounding guidance. Hosting stays on GitHub Pages; there is no build pipeline or hosting migration.

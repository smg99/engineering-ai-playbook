# Engineering AI Playbook

A **public, tool-agnostic prompt library** and reusable SDLC execution guide for our engineering team. Designed to improve verified work delivered per AI interaction—not to promote a specific vendor.

## Start here

1. Visit **[Engineering AI Playbook](https://smg99.github.io/engineering-ai-playbook/)**. No clone, install or account required.
2. Pick Epic, Story, Bug, Review, QA or Handoff; search, then click **Copy prompt**.
3. Replace bracketed placeholders with approved, minimum-necessary context in your chosen AI tool.
4. Verify results with actual code, tests and diffs.

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

No dependency installation, paid API, framework, telemetry or database. The site is a self-contained static HTML file with editable prompt examples. Add role-based prompts with synthetic examples and verify their usefulness before merging.

## Hosting

GitHub Pages publishes the repository root from `main`. The `.nojekyll` file serves this self-contained static app without Jekyll processing. Changes pushed to `main` are published automatically. Team-guide links open the Markdown documents on GitHub.

GitHub Pages is the preferred no-cost option for this public static guide: no separate hosting account, framework or build configuration is needed. Vercel can host static sites and connect private repositories, but adds another service; its free Hobby plan is limited to personal, non-commercial use. Reassess hosting if server-side features or authenticated access become requirements.

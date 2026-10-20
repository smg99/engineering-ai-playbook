# Engineering AI Playbook

A **private, tool-agnostic prompt library** and reusable SDLC execution guide for our engineering team. Designed to improve verified work delivered per AI interaction—not to promote a specific vendor.

## Start here

1. Clone this private repository to an approved machine.
2. Open [index.html](index.html) in a local browser. **No install or server required.**
3. Pick Epic, Story, Bug, Review, QA or Handoff; search, then click **Copy prompt**.
4. Replace bracketed placeholders with approved, minimum-necessary context in your chosen AI tool.
5. Verify results with actual code, tests and diffs.

## Team guides

- [Engineering execution](docs/WORKFLOW.md)
- [Token efficiency and switching AI providers](docs/QUOTA-AND-HANDOFF.md)
- [IDE, agent and MCP choices](docs/TOOLS.md)
- [Security and client separation](docs/SECURITY.md)
- [Contributing / QA expansion](docs/CONTRIBUTING.md)

## Boundaries

Client Jira remains the source of truth for work items; client Bitbucket remains the home for application code, PRs and CI. **No client tickets, code, credentials, proprietary designs or confidential operational information should be copied into this repository.**

This repository is deliberately **private**. Do not enable public GitHub Pages for the internal guide; published sites may have separate access rules. Local `index.html` is the zero-cost distribution option.

## Maintenance

No dependency installation, paid API, framework, telemetry or database. The site is a self-contained static HTML file with editable prompt examples. Add role-based prompts with synthetic examples and verify their usefulness before merging.

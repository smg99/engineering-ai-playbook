# Bring your own approved tool

The playbook is deliberately vendor-neutral. Existing approved editors (Cursor, VS Code, JetBrains) and agents (Gemini CLI, OpenCode, Continue, Cursor or others) can all execute the process. Availability, free tiers, model access and vendor policies change; verify before use.

**Prefer existing open-source tooling:** git, ripgrep, language servers, test runners, ESLint/Prettier, Playwright and native CI. Add documentation MCP (e.g., Context7) or browser MCP (Playwright) only when useful and permitted. Bitbucket tooling belongs in the client's approved environment, not this repository.

**MCP rules:** minimize permissions; enable only what the slice needs; inspect data-sharing behavior; do not duplicate simple CLI commands with heavyweight integrations. Do not let multiple AI agents edit one worktree simultaneously.

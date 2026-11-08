# Choose and prepare your AI tool

Use the tool and model your team approves. Ask your lead before sending any real work: “Which tool may I use, what information may I share, and which project setup instructions should I follow?” The AI-Assisted SDLC Playbook does not approve a provider for your client.

## Two ways to use the prompts

- Browser chat: useful for discussing approved requirements or explaining permitted snippets. Without an approved connection, it cannot inspect your local repository, verify a branch or run tests. Paste the prompt in its chat and supply only the minimum approved context it asks for.
- Editor or coding agent: open the approved local project and use the tool’s chat. Confirm the correct workspace and branch, follow the project’s setup guide, and check that relevant files are accessible. Review proposed edits and commands before accepting them under your team’s policy.

You do not need to install a new tool just for this guide. Existing approved editors or agents can use these prompts. This guide is free to read; tool subscriptions, model access and usage limits vary.

## Before allowing edits

1. Identify the repository and branch with your lead if you are unsure. Preserve existing work that belongs to someone else.
2. Read the project README or contribution guide for setup and test commands. Ask for help if the environment does not run.
3. Choose your current SDLC stage. At development, start with “Plan this story”. Resolve questions and understand the proposed first slice before implementation.
4. Keep file access and permissions limited to what the task needs. Do not hand over credentials or copy a whole repository into a chat just to get started.

## Agent setup files (portable)

Use short project files so agents discover shared rules across tools. File naming alone does not guarantee execution or security enforcement—validate support for your approved tool.

- AGENTS.md: project context and instructions for compatible coding agents. Keep a short, clear entry point.
- Agent Skills (SKILL.md): reusable task workflows invoked when relevant. Prefer Ticket Flow’s skill for ticket → PR work after stories exist.
- Host-specific rules (for example Cursor rules or Claude Code project instructions): thin adapters; avoid duplicating playbook policy in every host file.
- MCP: optional connections to approved tools or data only when integration adds value.
- Inter-agent or remote-session protocols (for example A2A): monitor; do not make them mandatory for this playbook.

No vendor-specific tool, hosted backend or subscription is required to use this playbook. Keep security rules explicit: only approved client tools and approved data handling.

### Cursor (when your team approves it)

1. Open the approved local repository and confirm the correct branch.
2. Follow project AGENTS.md or Cursor rules if present; keep them thin and point at playbook policy rather than rewriting it.
3. For ticketed development work, use [ticket-flow](https://github.com/smg99/ticket-flow) skills or rules as the companion checklist.
4. Copy the current stage prompt from this site; verify with local tests and diffs before treating work as done.

### Other coding agents (when approved)

1. Open the same approved repository and branch in that agent’s workspace.
2. Point the agent at AGENTS.md or the project’s equivalent instruction file.
3. Paste the current stage prompt; require a recheck of branch, diff and tests before edits.
4. Do not assume Cursor rules, MCP servers or Ticket Flow host adapters are available in that tool unless your team installed them there.

## Optional integrations

MCP means Model Context Protocol: a way to connect AI tools to systems or data. It is not required for this workflow. Add integrations only when your team approves the access and data handling. A connection to your ticket system or code host is not automatically configured by this website. Deterministic tools such as the project’s test runner, formatter and source-control view remain the evidence for actual behavior and changes.

## Companion: ticket → PR agent checklist

After stories exist as real tickets, teams can use [Ticket Flow](https://smg99.github.io/ticket-flow/) ([repo](https://github.com/smg99/ticket-flow)) — host rules or skills plus thin scripts — so agents follow a fixed path: fetch issue → branch → implement → tests → human confirm → commit/PR → optional chat notify. That companion is orchestration for development workspaces; this playbook stays the stage prompts and gates through release.

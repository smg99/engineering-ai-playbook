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

## Optional integrations

MCP means Model Context Protocol: a way to connect AI tools to systems or data. It is not required for this workflow. Add integrations only when your team approves the access and data handling. A connection to your ticket system or code host is not automatically configured by this website. Deterministic tools such as the project’s test runner, formatter and source-control view remain the evidence for actual behavior and changes.

## Companion: ticket → PR agent checklist

After stories exist as real tickets, teams can use [Ticket Flow](https://smg99.github.io/ticket-flow/) ([repo](https://github.com/smg99/ticket-flow)) — Cursor rules/skills + thin scripts — so agents follow a fixed path: fetch issue → branch → implement → tests → human confirm → commit/PR → optional chat notify. That companion is orchestration for development workspaces; this playbook stays the stage prompts and gates through release.

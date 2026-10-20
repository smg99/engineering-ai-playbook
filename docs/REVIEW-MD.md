# Generate a review markdown before tickets

Prefer a private review markdown over creating tickets immediately. Humans review the draft epic and stories, answer blocking questions, then create tickets only for the approved set.

This keeps client context out of the public playbook site. Store the markdown only in an approved private location.

## When to use it

- You received vague or meeting-note requirements and need an epic plus stories to review.
- You want questions and assumptions visible before Jira (or any ticket system).
- You are practicing the SDLC stages without writing tickets yet.

## How it works

1. Open this playbook’s SDLC stage prompts (Clarify → Epic → Design → Stories) as the source of truth.
2. Paste the reusable prompt below into an approved AI tool.
3. Replace the requirement block with the real approved context.
4. Save the model’s markdown privately and review it with your lead or owner.
5. Only after review, use Review & create stories and enter tickets through approved access.

Optional: if your lead allows, name target repos for naming and integration fit only. Do not ask the AI to modify code unless that work is explicitly in scope.

## Reusable prompt

Copy from “Prefer a review markdown before tickets?” on the SDLC flow page, or use this text:

```text
You are running the Engineering AI Playbook offline as a review workflow.

Source of truth for stage prompts:
https://smg99.github.io/engineering-ai-playbook/
(or local engineering-ai-playbook/assets/flow-data.js)

Goal:
Produce ONE markdown file for human review. Do NOT create tickets.
Do NOT invent ticket IDs or claim approval.

Process — run these stages in order using the EXACT playbook prompt text for each:
1) Clarify requirements
2) Define the epic
3) Design the approach
4) Draft stories

Markdown must include:
- The client requirement enclosed verbatim in a fenced code block
- For each stage: the exact playbook prompt used, then your output
- Clear labels: Known facts / Assumptions / Unknowns / Proposals / DRAFT
- Blocking questions for the owner (P0/P1/P2)
- One draft epic
- User stories with: summary, need/value, scope/exclusions, dependencies,
  numbered Given/When/Then AC, negative/boundary cases, QA mapped to AC,
  test requirements, definition of done, and the playbook coverage policy
- If timeline conflicts with scope: propose an MVP cut vs stretch
- A short "Playbook feedback" section: what worked / what to improve

Rules from the playbook:
- Separate facts from assumptions; do not invent answers
- If blocked, continue with a provisional brief labeled as assumptions
- Prefer existing system patterns; call out false-friend modules if found
- Keep real client context out of the public playbook repo
- No code changes unless I explicitly ask

Optional context (only if provided):
- Target repos/paths: …
- Team conventions: …

Client requirement:
"""
[PASTE REQUIREMENT HERE]
"""
```

## After the markdown exists

- Answer P0 questions or explicitly accept assumptions.
- Cut stretch stories if the timeline cannot hold them.
- Create tickets only for the approved epic and stories.
- Keep using Develop one story for implementation; the markdown is planning evidence, not completion proof.

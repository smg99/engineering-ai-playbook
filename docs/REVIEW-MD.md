# Generate a review markdown before tickets

Prefer a private review markdown over creating tickets immediately. Humans review the draft epic and stories, answer blocking questions, then create tickets only for the approved set.

This keeps client context out of the public playbook site. Store the markdown only in an approved private location.

On the SDLC home view, the generate prompt and a second-pass review prompt are visible with copy buttons. Use those first; this guide explains the full loop.

## When to use it

- You received vague or meeting-note requirements and need an epic plus stories to review.
- You want questions and assumptions visible before any ticket system entry.
- You are practicing the SDLC stages without writing tickets yet.

## How it works

1. On SDLC flow home, copy the generate prompt into an approved AI tool.
2. Paste your approved requirement and optional target repos.
3. Save the model’s markdown privately.
4. Copy the critique prompt into a different approved AI tool (or a fresh session) and paste that markdown for a second-pass review.
5. Adapt useful feedback; answer P0 questions with the owner.
6. Run Review & create stories in readiness-only mode (validate drafts; still do not invent ticket IDs).
7. Only after human approval, create tickets through approved access.

## Reusable generate prompt

Copy from the SDLC home panel, or use:

```text
You are running the AI-Assisted SDLC Playbook offline as a review workflow.

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
5) Review & create stories in READINESS-ONLY mode: validate drafts for clarity,
   ownership, testability and gaps. Still do NOT create tickets or invent IDs.

Markdown must include:
- The client requirement enclosed verbatim in a fenced code block
- For each stage: the exact playbook prompt used, then your output
- Clear labels: Known facts / Assumptions / Unknowns / Proposals / DRAFT
- Blocking questions for the owner (P0/P1/P2)
- One draft epic
- For stateful domains (queues, workflows, approvals): explicit entity states
  and allowed transitions before story AC that depend on them
- User stories with: summary, need/value, scope/exclusions, dependencies,
  numbered Given/When/Then AC, negative/boundary cases, QA mapped to AC,
  test requirements, definition of done
- One owning story per observable behavior; do not test later-story behavior
  inside earlier foundation stories
- Full story detail only for the proposed MVP set; label the rest as backlog themes
  (title + intent only) until expanded
- Cite the team’s agreed coverage gate for new/changed code; if unknown, ask.
  Do not invent a gate. Prefer 100% only when that is the team’s stated gate.
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
- Team conventions / coverage gate: …

Client requirement:
"""
[PASTE REQUIREMENT HERE]
"""
```

## Reusable critique prompt (second AI)

After the markdown exists, paste it into a different approved model or a fresh session:

```text
Review this AI-Assisted SDLC Playbook review-markdown as a critical tech lead.
Do NOT rewrite the whole document unless asked. Do NOT create tickets.

Return:
1) Verdict: discovery-ready / needs revision / not ready
2) High/medium findings table: issue, why it matters, what to change
3) Missing state/transition or operating-model gaps
4) Story-ownership leaks (early stories testing later capabilities)
5) Vague AC that lack pass/fail thresholds
6) Whether stretch items are wrongly treated as full stories
7) Whether coverage gate is explicit or still assumed
8) The smallest revision checklist before readiness-only re-validation

Document to review:
"""
[PASTE REVIEW MARKDOWN HERE]
"""
```

## After both passes

- Answer P0 questions or explicitly accept assumptions.
- Cut stretch themes if the timeline cannot hold them.
- Create tickets only for the approved epic and MVP stories.
- Keep using Develop one story for implementation; the markdown is planning evidence, not completion proof.

# From vague requirement to verified release

This is the execution guide for the **AI-Assisted SDLC Playbook**: use approved AI tools stage-by-stage from clarification through release, with human gates and verified evidence.

Choose where your work is now in SDLC flow. You can start with vague requirements, an existing epic, or an epic and stories. Stage selection is navigation; this website does not track or approve real work.

## What this site does not do

Selecting a stage is navigation only. It does not run AI, create or update tickets, mark QA sign-off, merge code, deploy or authorize release. Progress and approvals live in your approved private systems. Companion [ticket-flow](https://github.com/smg99/ticket-flow) owns ticket → PR execution in a development workspace; this playbook owns the SDLC stage prompts and gates through release.

For a new vague requirement, use the visible review-markdown panel on the SDLC home view: generate a private markdown (clarify → epic → design → stories → readiness-only check), then ask a different approved AI to critique it. Adapt useful feedback with your owner before creating tickets. Details live in the Generate a review markdown before tickets guide.

## Follow the nine stages

1. Clarify requirements: separate facts from assumptions, identify users and outcomes, surface relevant non-functional needs, and resolve blocking questions with the owner.
2. Define the epic: agree scope, exclusions, success criteria, risks and dependencies before treating the epic as ready.
3. Design the approach: capture a lightweight design note—touchpoints, contracts, NFRs and risks—and get tech-lead or owner agreement before splitting work.
4. Draft stories: split the epic into small independently testable stories for your ticket system. Every story needs numbered acceptance criteria (AC), QA scenarios, dependencies, test requirements and a definition of done.
5. Review and create stories: have the owner approve the AC and confirm the project. Create tickets only through approved access with explicit authorization, or enter the approved drafts manually. Never invent ticket IDs or approval.
6. Develop one story: inspect the approved repository and current changes, plan small slices, then implement and verify one slice at a time. Finish the current story before starting another. Optional: in an agentic IDE, run the companion [Ticket Flow](https://smg99.github.io/ticket-flow/) checklist (fetch issue → branch → implement → tests → confirm → commit/PR) against the same story—this site still owns the stage prompts and gates.
7. Verify and review: check every AC against actual code and meaningful tests, verify coverage evidence and obtain required human review (including tech-lead review when your team requires it).
8. QA validation: test each AC and relevant boundary, negative and regression cases in the approved environment; add a short exploratory pass. Record observed results and QA sign-off. Return failed stories to development; choose the next ready story when appropriate.
9. Release and monitor: include only accepted stories in the release scope. Confirm deployment authorization, environment promotion, rollout and rollback readiness, then verify actual post-release smoke checks and monitoring through the existing team process.

## Coverage and acceptance criteria

Each story must state the project’s agreed coverage gate for new or changed application code. If the project has not set a gate, ask—do not invent a percentage. Prefer high-value tests for acceptance criteria, regressions and sensitive paths over metric chasing. Report the existing repository baseline separately. Document measurement limitations, approved exclusions and any waived checks explicitly; do not silently weaken the target or exclude code to inflate coverage. Missing tooling, failed checks, unrun tests or unmet gates are blockers, never evidence of a pass.

Acceptance criteria describe observable outcomes QA can test, including relevant error and boundary behavior. Coverage measures execution; it does not establish that those outcomes are correct. QA must verify them separately.

## Completion states and evidence

Playbook stages are methodology. The client’s ticket system (for example Jira, Linear or GitHub Issues) and code host remain authoritative for status. Do not treat every state below as mandatory for every client.

Shared vocabulary when coordinating with Ticket Flow or similar companions:

draft → approved → in_development → awaiting_review → review_accepted → qa_pending → qa_accepted → released

Minimum expectations:

- Opening a PR is not Done, QA accepted or Released.
- Each stage needs minimum actual evidence and a named human authority for approval.
- Link to Ticket Flow for workspace execution and closeout evidence; do not duplicate its scripts in this repository.
- Public examples here use synthetic data only.

## QA result template

Copy for a single story. AI-generated review commentary is not a substitute for test execution or human QA approval. Failures and missing evidence cannot be recorded as pass.

```text
Story: [STORY_ID]
AC: [AC-ID] — [short description]
Check: [test or scenario name]
Outcome: pass | fail | blocked | not_run
Evidence: [command, log pointer or observation; say none if not run]
Approver: [name or role] — [pending | granted]
Check decision: [continue checks | return AC to development | blocked]
Story QA status: [in progress | accepted | rejected] — only accepted when every required AC passed
Notes: [facts only]
```

Synthetic example:

```text
Story: TASK-42
AC: AC-1 — Reject empty title
Check: Save with blank title in staging
Outcome: pass
Evidence: Observed validation error "Title is required"
Approver: QA reviewer — granted
Check decision: continue checks
Story QA status: in progress
Notes: Synthetic demo only; other ACs still pending
```

## Stop and ask for help

- Requirements conflict or expected behavior is unknown: ask the ticket owner.
- You cannot explain the plan or its checks: ask your lead or reviewer.
- The AI requests credentials, broader access or unapproved data: stop and check policy.
- Unexpected files change or broader work is needed: review scope before accepting edits.
- Checks fail: keep actual error evidence privately and investigate. After two unsuccessful attempts, change strategy or ask a teammate. Never report a pass you did not observe.

Use the pause/resume prompts to checkpoint the current stage and story in an approved private location. Real tickets, code and evidence stay in approved private project systems.

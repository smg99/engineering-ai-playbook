# From vague requirement to verified release

This is the execution guide for the **AI-Assisted SDLC Playbook**: use approved AI tools stage-by-stage from clarification through release, with human gates and verified evidence.

Choose where your work is now in SDLC flow. You can start with vague requirements, an existing epic, or an epic and stories. Stage selection is navigation; this website does not track or approve real work.

For a new vague requirement, use the visible review-markdown panel on the SDLC home view: generate a private markdown (clarify → epic → design → stories → readiness-only check), then ask a different approved AI to critique it. Adapt useful feedback with your owner before creating tickets. Details live in the Generate a review markdown before tickets guide.

## Follow the nine stages

1. Clarify requirements: separate facts from assumptions, identify users and outcomes, surface relevant non-functional needs, and resolve blocking questions with the owner.
2. Define the epic: agree scope, exclusions, success criteria, risks and dependencies before treating the epic as ready.
3. Design the approach: capture a lightweight design note—touchpoints, contracts, NFRs and risks—and get tech-lead or owner agreement before splitting work.
4. Draft stories: split the epic into small independently testable stories for your ticket system. Every story needs numbered acceptance criteria (AC), QA scenarios, dependencies, test requirements and a definition of done.
5. Review and create stories: have the owner approve the AC and confirm the project. Create tickets only through approved access with explicit authorization, or enter the approved drafts manually. Never invent ticket IDs or approval.
6. Develop one story: inspect the approved repository and current changes, plan small slices, then implement and verify one slice at a time. Finish the current story before starting another. Optional: in an agentic IDE, run the companion [ticket-flow](https://github.com/smg99/ticket-flow) checklist (fetch issue → branch → implement → tests → confirm → commit/PR) against the same story—this site still owns the stage prompts and gates.
7. Verify and review: check every AC against actual code and meaningful tests, verify coverage evidence and obtain required human review (including tech-lead review when your team requires it).
8. QA validation: test each AC and relevant boundary, negative and regression cases in the approved environment; add a short exploratory pass. Record observed results and QA sign-off. Return failed stories to development; choose the next ready story when appropriate.
9. Release and monitor: include only accepted stories in the release scope. Confirm deployment authorization, environment promotion, rollout and rollback readiness, then verify actual post-release smoke checks and monitoring through the existing team process.

## Coverage and acceptance criteria

Each story must state the project’s agreed coverage gate for new or changed application code (prefer 100% line, branch, function and statement when tooling supports it). State the actual gate if it differs. Report the existing repository baseline separately. Document measurement limitations and approved exclusions; do not silently weaken the target or exclude code to inflate coverage. Missing tooling, unrun tests or unverified coverage are blockers, never evidence of a pass.

Acceptance criteria describe observable outcomes QA can test, including relevant error and boundary behavior. Coverage measures execution; it does not establish that those outcomes are correct. QA must verify them separately.

## Stop and ask for help

- Requirements conflict or expected behavior is unknown: ask the ticket owner.
- You cannot explain the plan or its checks: ask your lead or reviewer.
- The AI requests credentials, broader access or unapproved data: stop and check policy.
- Unexpected files change or broader work is needed: review scope before accepting edits.
- Checks fail: keep actual error evidence privately and investigate. After two unsuccessful attempts, change strategy or ask a teammate. Never report a pass you did not observe.

Use the pause/resume prompts to checkpoint the current stage and story in an approved private location. Real tickets, code and evidence stay in approved private project systems.

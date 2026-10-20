# From vague requirement to verified release

Choose where your work is now in SDLC flow. You can start with vague requirements, an existing epic, or an epic and Jira stories. Stage selection is navigation; this website does not track or approve real work.

## Follow the eight stages

1. Clarify requirements: separate facts from assumptions, identify users and outcomes, and resolve blocking questions with the owner.
2. Define the epic: agree scope, exclusions, success criteria, risks and dependencies before treating the epic as ready.
3. Draft Jira stories: split the epic into small independently testable stories. Every story needs numbered acceptance criteria (AC), QA scenarios, dependencies, test requirements and a definition of done.
4. Review and create stories: have the owner approve the AC and confirm the Jira project. Create tickets only through approved access with explicit authorization, or enter the approved drafts manually. Never invent Jira IDs or approval.
5. Develop one story: inspect the approved repository and current changes, plan small slices, then implement and verify one slice at a time. Finish the current story before starting another.
6. Verify and review: check every AC against actual code and meaningful tests, verify coverage evidence and obtain required human review.
7. QA validation: test each AC and relevant boundary, negative and regression cases in the approved environment. Record observed results and QA sign-off. Return failed stories to development; choose the next ready story when appropriate.
8. Release and monitor: include only accepted stories in the release scope. Confirm deployment authorization, rollout and rollback readiness, then verify actual post-release behavior and monitoring through the existing team process.

## Coverage and acceptance criteria

Each story must state 100% line, branch, function and statement coverage for new or changed application code using the project’s agreed measurement and CI gate. Report the existing repository baseline separately. Document measurement limitations and approved exclusions; do not silently weaken the target or exclude code to inflate coverage. Missing tooling, unrun tests or unverified coverage are blockers, never evidence of a pass.

Acceptance criteria describe observable outcomes QA can test, including relevant error and boundary behavior. Coverage measures execution; it does not establish that those outcomes are correct. QA must verify them separately.

## Stop and ask for help

- Requirements conflict or expected behavior is unknown: ask the ticket owner.
- You cannot explain the plan or its checks: ask your lead or reviewer.
- The AI requests credentials, broader access or unapproved data: stop and check policy.
- Unexpected files change or broader work is needed: review scope before accepting edits.
- Checks fail: keep actual error evidence privately and investigate. After two unsuccessful attempts, change strategy or ask a teammate. Never report a pass you did not observe.

Use the pause/resume prompts to checkpoint the current stage and story in an approved private location. Real tickets, code and evidence stay in approved private project systems.

# From ticket to reviewed change

Start with your assigned story or bug. You do not need to plan an entire epic first. Use the worked example under “Start here” if this is your first task.

## Follow this order

1. Read the approved work item. Identify the user need, acceptance criteria, exclusions and unanswered questions. Keep the real ticket in your team’s approved system.
2. Confirm the correct project, branch and existing local changes. Read the project setup instructions. Ask your lead when access or setup is unclear.
3. Use “Plan a story” before editing. The AI should inspect relevant code only when it has approved access; otherwise existing code patterns remain unknown.
4. Resolve unclear requirements with the ticket owner. An AI proposal is not an approved requirement. Ask your lead to review a plan you cannot judge confidently.
5. Choose one small change you can verify independently: a slice. Use “Execute one slice” and check the changed lines and actual results before continuing.
6. Repeat for remaining approved slices. Check every acceptance criterion and relevant existing behavior. Passing automated checks does not prove every requirement.
7. Use “Review a change” for additional feedback, then request your team’s required human review. Submit code and evidence through the approved code platform. Follow the team’s delivery process; an AI answer never authorizes merging or deployment.

## If you have a bug instead

Use “Investigate a bug” with expected behavior, actual behavior, reproduction steps and permitted error evidence. Reproduce it, inspect relevant code and confirm the cause before using “Fix the root cause”. A plausible explanation without evidence is still a hypothesis.

## Stop and ask for help

- Requirements conflict or expected behavior is unknown: ask the ticket owner.
- You cannot explain the proposed change or its checks: ask your lead or reviewer.
- The AI wants credentials, access beyond the task, or unapproved data: stop and check team policy.
- Unexpected files change or broader work is required: pause and review scope before accepting edits.
- Checks fail: capture the actual error privately and investigate. After two unsuccessful attempts, change the investigation approach or ask a teammate. Never report a pass you did not observe.

## What evidence belongs in a review?

Summarize what changed and why, the criteria covered, the commands actually run and observed results, manual behavior checked, and anything not tested or still unresolved. Real code and project evidence stay in approved private project locations, never in this public playbook.

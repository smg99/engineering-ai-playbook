# Advanced: save context and hand off work

Learn the basic story workflow first. You do not need to switch providers or monitor percentages to complete the worked example.

## Keep each request focused

Give the AI the current objective, approved acceptance criteria, relevant file paths, constraints and actual error evidence. Avoid pasting entire chat histories or repositories. Use the project’s compiler, tests, formatter and source-control tools for checks rather than asking the AI to guess their results. Shorter prompts are useful only if they preserve the context needed for correct work; this guide does not guarantee token savings.

## When work must pause

Finish at a safe point, inspect the current changes, and record what is actually known. Store the following STATE note only in a policy-approved private location. STATE is simply a factual continuation note, not a special tool or public file requirement.

```text
Work item: [approved private ID]
Branch: [current branch]
Last verified commit: [actual commit identifier]
Completed: [verified changes]
Current: [one unfinished slice]
Tests: [commands run and actual results; say not run where applicable]
Uncommitted files: [changed paths]
Blockers and unresolved questions: [facts]
Next action: [one specific action]
```

Use “Prepare provider switch” to help summarize it. Then use “Resume from state” in the next approved session. The receiving tool must recheck the repository, branch, changed files and evidence before editing. If it lacks access, it should ask for minimum approved context rather than claiming verification.

## Usage limits are provider-specific

Read your provider’s actual usage dashboard. Some providers do not expose a meaningful percentage, and reset windows differ. A rough optional checkpoint around 85–90% may be useful if that metric exists, but it is not a universal threshold. Pause safely when needed; switch providers only if your team approves both the destination and the context transfer. A free agent may still use a paid model. Never assume price or data handling from a tool’s label.

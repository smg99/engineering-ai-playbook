# Advanced: save context and hand off work

Learn the basic story workflow first. You do not need to switch providers or monitor percentages to complete the worked example.

## Keep each request focused

Give the AI the current objective, approved acceptance criteria, relevant file paths, constraints and actual error evidence. Avoid pasting entire chat histories or repositories. Use the project’s compiler, tests, formatter and source-control tools for checks rather than asking the AI to guess their results. Shorter prompts are useful only if they preserve the context needed for correct work; this guide does not guarantee token savings.

## When work must pause

Finish at a safe point, inspect the current changes, and record what is actually known. Store the following STATE note only in a policy-approved private location. STATE is simply a factual continuation note, not a special tool or public file requirement. Keep it human-readable; optional structured fields may align with the playbook’s completion-state vocabulary in the workflow guide. No whole-chat export or cloud memory provider is required.

```text
Work item: [approved private ID]
SDLC stage: [current stage]
Approved scope: [AC or slice boundaries still in force]
Repository / base branch: [repo and base]
Branch: [current branch]
PR: [URL or none]
Last verified commit: [actual commit identifier]
Evidence as of: [test timestamp or commit association]
Completed: [verified changes]
Current: [one unfinished slice]
Tests: [commands run and actual results; say not run or waived where applicable]
Coverage: [measured result vs project gate, or not measured]
Approvals: [granted or pending — who]
Verified facts: [only what was rechecked]
Outstanding questions: [open items]
Blockers: [facts that stop progress, or none]
Uncommitted files: [changed paths]
Next action: [one specific action]
```

Use “Pause work” under “Need to pause or resume work?” to help summarize it. Use “Resume work” in the next approved session. The receiving agent must inspect the actual repository, branch, diff, status, test evidence and approved scope before trusting any carried-forward claim. Distinguish verified facts, outstanding questions and planned actions. If it lacks access, it should ask for minimum approved context rather than claiming verification. The same STATE note works when switching to a different approved AI provider.

## Usage limits are provider-specific

Read your provider’s actual usage dashboard. Some providers do not expose a meaningful percentage, and reset windows differ. A rough optional checkpoint around 85–90% may be useful if that metric exists, but it is not a universal threshold. Pause safely when needed; switch providers only if your team approves both the destination and the context transfer. A free agent may still use a paid model. Never assume price or data handling from a tool’s label.

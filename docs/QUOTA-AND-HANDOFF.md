# Token-saving and portable handoffs

Use deterministic local tools (grep, compiler, test runner, formatter and git) instead of AI where practical. Give each agent only the current slice, relevant acceptance criteria, file paths, constraints, and actual error evidence—not full chat history.

## Suggested quota policy

- **Below 70%:** Normal paid-model use, free options for easy work.
- **70–84%:** Conserve paid quota; route routine tasks to permitted alternatives.
- **85–89%:** Finish safely and prepare checkpoint.
- **90%+:** Avoid starting new paid slices. Switch if next reset is more than 1–2 days away; conserve allowance otherwise.

Not every provider exposes a trustworthy percentage or the same reset window. Check the actual dashboard/limits. A free agent can still use paid models; verify its backend.

## STATE template (store only where client policy allows)

```md
Work item: [ID]
Branch: [BRANCH]
Last verified commit: [SHA]
Completed: [VERIFIED SLICES]
Current: [ONE SLICE]
Tests: [COMMAND + ACTUAL RESULT]
Uncommitted files: [PATHS]
Blockers: [ISSUES]
Next action: [ONE ACTION]
```

Before switching, inspect git status and capture evidence. On resumption, verify current branch, diff, SHA and tests rather than trusting previous model claims. Never copy restricted project STATE notes into the team-playbook GitHub repo.

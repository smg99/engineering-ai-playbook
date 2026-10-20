# Internal AI-assisted execution workflow

**Epic → story/bug → small verified slices → review → delivery.** These are work slices, not formal Scrum sprints.

1. Read the real requirements in the **client's Jira** through approved access. Separate acceptance criteria from assumptions.
2. Inspect existing code and conventions in the **client's Bitbucket** workspace before planning.
3. Plan independently verifiable slices (often 30–120 minutes), each with outcome, dependencies, and verification method.
4. Work on ONE slice per agent; add tests, run checks, inspect diff, checkpoint the result.
5. Resume the next slice with focused context, or hand off to another approved AI provider.
6. Verify every acceptance criterion and relevant regressions before submitting review in client Bitbucket.
7. Track status and any newly discovered scope through the client's approved process.

**Never** publish actual client stories, tickets, code, logs, credentials or implementation decisions in this internal playbook. Do not claim checks passed unless they were run. After two failed attempts, change investigation strategy rather than repeating the same prompt.

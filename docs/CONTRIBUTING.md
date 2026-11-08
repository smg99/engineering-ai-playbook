# Growing the AI-Assisted SDLC Playbook

Start with developers: epics, design notes, stories, bugs, code review and AI handoffs. QA includes scripted AC validation plus exploratory testing; tech-lead review prompts cover design and change review. Add other roles later only if a real repeated need exists.

To extend the site, edit `flowStages` in `assets/flow-data.js`. Keep each stage’s stable ID, title, entry conditions, inputs, outputs, exit checks and prompts aligned. Keep the three starting-point mappings and navigation consistent. Use placeholders rather than client details. Prefer ticket-system and code-host language; name specific products only as examples. Every prompt should specify objective, input boundaries, expected format, verification and stop conditions. Review contributions for duplicated content, prompt bloat and sensitive information. Test with synthetic scenarios before merging.

Guide content is maintained in the guide Markdown files under `docs/` (including `REVIEW-MD.md`). After editing a guide, run `python3 scripts/sync-guides.py` and commit the updated `index.html` too. If you change the reusable review-markdown prompts, update `docs/REVIEW-MD.md` and both `reviewMdPrompt` and `reviewMdCritiquePrompt` in `assets/flow-data.js`. Check synchronization with `python3 scripts/sync-guides.py --check`. Keep beginner explanations concrete, distinguish browser chat from repository-connected agents, and never present illustrative output as executed evidence.

## Prompt evaluation (synthetic)

Before merging high-impact prompt changes, run a small set of synthetic scenarios and record objective yes/no results. No paid model API evaluation service is required.

Scenarios (use at least three):

1. Vague requirement with missing owner answers.
2. Defect report that includes reproduction steps.
3. Stateful workflow (for example approvals or queues).
4. Claimed completion with missing test evidence.
5. Release request without QA acceptance.

Checks (yes/no for each scenario):

- Detects uncertainty instead of inventing facts.
- Avoids invented approvals, ticket IDs or green test results.
- Produces or preserves QA-testable acceptance criteria.
- Respects stated scope and stop conditions.
- Creates or preserves an actionable handoff when work must pause.

Primary outcomes to optimize for: fewer missed AC and less invented evidence or approvals—not speed alone. Use failures to make specific prompt edits rather than adding generic documentation.

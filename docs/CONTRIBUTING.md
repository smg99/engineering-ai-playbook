# Growing the playbook

Start with developers: epics, design notes, stories, bugs, code review and AI handoffs. QA includes scripted AC validation plus exploratory testing; tech-lead review prompts cover design and change review. Add other roles later only if a real repeated need exists.

To extend the site, edit `flowStages` in `assets/flow-data.js`. Keep each stage’s stable ID, title, entry conditions, inputs, outputs, exit checks and prompts aligned. Keep the three starting-point mappings and navigation consistent. Use placeholders rather than client details. Prefer ticket-system and code-host language; name specific products only as examples. Every prompt should specify objective, input boundaries, expected format, verification and stop conditions. Review contributions for duplicated content, prompt bloat and sensitive information. Test with synthetic scenarios before merging.

Guide content is maintained in the four guide Markdown files. After editing a guide, run `python3 scripts/sync-guides.py` and commit the updated `index.html` too. Check synchronization with `python3 scripts/sync-guides.py --check`. Keep beginner explanations concrete, distinguish browser chat from repository-connected agents, and never present illustrative output as executed evidence.

# Growing the playbook

Start with developers: epics, stories, bugs, code review and AI handoffs. QA begins with test-case planning, then can add exploratory testing, regression suites and defect reporting. Add tech lead and other roles later only if a real repeated need exists.

To extend the site, add one item to the `items` array in `index.html`: category, short title and prompt, along with matching usage, input and next-action metadata. Use placeholders rather than client details. Every prompt should specify objective, input boundaries, expected format, verification and stop conditions. Review contributions for duplicated content, prompt bloat and sensitive information. Test with synthetic scenarios before merging.

Guide content is maintained in the four guide Markdown files. After editing a guide, run `python3 scripts/sync-guides.py` and commit the updated `index.html` too. Check synchronization with `python3 scripts/sync-guides.py --check`. Keep beginner explanations concrete, distinguish browser chat from repository-connected agents, and never present illustrative output as executed evidence.

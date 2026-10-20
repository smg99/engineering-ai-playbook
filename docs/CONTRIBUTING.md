# Growing the playbook

Start with developers: epics, stories, bugs, code review and AI handoffs. QA begins with test-case planning, then can add exploratory testing, regression suites and defect reporting. Add tech lead and other roles later only if a real repeated need exists.

To extend the site, add one item to the `items` array in `index.html`: category, short title and prompt. Use placeholders rather than client details. Every prompt should specify objective, input boundaries, expected format, verification and stop conditions. Review contributions for duplicated content, prompt bloat and sensitive information. Test with synthetic scenarios before merging.

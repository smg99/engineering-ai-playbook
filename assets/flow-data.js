/* Generic workflow only. No client context is collected by the site. */
const coveragePolicy='Meet the project’s agreed coverage gate for new or changed application code (prefer 100% line, branch, function and statement when tooling supports it). State the actual gate if it differs. Report the existing repository baseline separately. Document measurement limitations and approved exclusions; do not silently weaken the target, exclude code to inflate coverage or claim coverage without execution.';
const flowStages=[
 {id:'clarify',title:'Clarify requirements',when:'You have an idea or vague client requirement.',input:'[REQUIREMENTS], intended users, known constraints and unknowns.',output:'A clarified brief and questions for the requirement owner.',gate:['The owner has answered blocking questions or explicitly agreed the assumptions.','Goals, boundaries, success measures and relevant non-functional needs are clear enough to define an epic.'],prompts:[{title:'Clarify the brief',text:'Clarify [REQUIREMENTS] before proposing implementation. Separate known facts, assumptions and unknowns. Identify users, the problem, desired outcomes, constraints, exclusions and relevant non-functional needs (performance, accessibility, security, privacy, reliability) as open questions where unknown. Ask the smallest set of high-impact questions, grouped by priority. Do not invent answers. After the owner responds, summarize the agreed brief, measurable success criteria and remaining decisions. Do not write code or treat proposals as approved.'}]},
 {id:'epic',title:'Define the epic',when:'The need is understood and you need a deliverable epic.',input:'[AGREED_BRIEF], decisions, constraints and success measures.',output:'An epic draft ready for product-owner review.',gate:['The owner agrees scope, exclusions, outcomes and major dependencies.','Open decisions are recorded; unresolved blockers are not hidden in assumptions.'],prompts:[{title:'Create an epic draft',text:'From [AGREED_BRIEF], draft an epic with title, problem, users, intended outcomes, scope, exclusions, measurable success criteria, dependencies, risks and unresolved decisions. Note candidate non-functional constraints that must survive into design and stories. Outline candidate stories without implementation details. Keep facts separate from proposals and mark the epic as a draft until the requirement owner approves it. Do not create tickets yet.'}]},
 {id:'design',title:'Design the approach',when:'The epic is agreed and you need a shared technical approach before splitting stories.',input:'[EPIC], constraints, existing system context you are allowed to inspect.',output:'A lightweight design note: approach, touchpoints, contracts, NFRs and risks.',gate:['A tech lead or owner agrees the proposed approach and major interfaces.','NFRs, data/API touchpoints, rollback risks and open design questions are recorded.'],prompts:[
 {title:'Draft the design note',text:'From [EPIC], draft a lightweight design note (not a full specification). Include: proposed approach in plain language; affected systems/modules; data and API contracts or changes; security/privacy considerations; performance, accessibility and reliability implications; migration or rollout risks; alternatives considered briefly; open questions for the owner or tech lead. Prefer existing patterns over invention. Mark proposals clearly. Do not write production code or create tickets.'},
 {title:'Tech-lead design review',text:'Review this design note against [EPIC]. Flag missing contracts, unsafe assumptions, NFR gaps, over-scope, and missing rollback thinking. Ask for the smallest clarifications needed. Do not invent repository evidence. Recommend approve, revise or stop—without creating tickets or writing code.'}
 ]},
 {id:'stories',title:'Draft stories',when:'You already have an epic description or an agreed epic and design direction.',input:'[EPIC], [DESIGN_NOTE] if available, approved scope and team conventions. Flag gaps in an unapproved epic first.',output:'Small ticket-ready story drafts, each with QA-testable AC and a coverage requirement.',gate:['Each story has independently testable acceptance criteria and clear dependencies.','The epic’s agreed scope is covered; story boundaries, test requirements and exclusions are explicit.'],prompts:[{title:'Turn the epic into stories',text:'Review [EPIC] and any [DESIGN_NOTE] for missing scope or blocking decisions before splitting. If the domain is stateful (for example queues or approvals), state entity states and allowed transitions before writing AC that depend on them. Draft small, independently deliverable user stories for the team’s ticket system (for example Jira, Linear or GitHub Issues). Give each observable behavior exactly one owning story; do not verify later-story behavior inside earlier foundation stories. Write full story detail for the MVP set; label the rest as backlog themes until expanded. For EACH full story include: summary; user need and value; scope and exclusions; dependencies; numbered acceptance criteria (AC) in Given/When/Then form with definite pass/fail outcomes; relevant happy, negative, error and boundary behavior; QA test scenarios mapped to AC; implementation test requirements; and a definition of done covering review, tests, QA and documentation. Keep stories sized to one reviewable change when possible. Mark uncertain criteria as proposals for owner confirmation. Cite the team’s agreed coverage gate; if unknown, ask. '+coveragePolicy+' Do not write code or create tickets.'}]},
 {id:'ready',title:'Review & create stories',when:'Story drafts exist and need approval and entry into the ticket system.',input:'[EPIC], [STORY_DRAFTS], owner decisions and the confirmed project/parent epic in the ticket system.',output:'Approved stories with ticket IDs, dependencies and agreed test gates—or a readiness report when ticket creation is not requested.',gate:['The owner approved each story’s AC; every story includes the coverage policy—or readiness blockers are explicit.','Stories are in the correct project and the next ready story is identified—or drafts remain private pending approval.'],prompts:[{title:'Validate stories for tickets',text:'Review [STORY_DRAFTS] against [EPIC]. Flag unclear or untestable AC, missing negative/boundary scenarios, missing state/transition rules, ownership leaks across stories, dependencies, overlaps and uncovered scope. Verify every full story includes its QA scenarios, definition of done and the team’s agreed coverage gate: '+coveragePolicy+' If the user asked for readiness only, return a readiness report and corrected drafts without creating tickets. Otherwise return corrections and ticket-ready drafts for owner approval. Confirm the correct parent epic and check for existing tickets to avoid duplicates. If the epic is not in the ticket system yet, prepare its approved draft for creation before linking stories. Do not invent approval or ticket IDs. Only create tickets after explicit authorization, a confirmed project and approved integration access; otherwise provide drafts for manual entry. Preserve real work in approved private systems.'}]},
 {id:'develop',title:'Develop one story',when:'You already have an epic and stories, or a ready story assigned to you.',input:'[STORY_ID], its approved AC, dependencies and approved repository access.',output:'One story implemented through small verified changes. Other stories stay queued.',gate:['Every AC for this story is implemented; remaining scope and failures are explicit.','Changes are scoped to this story and ready for coverage verification and review.'],prompts:[
 {title:'1. Plan this story',text:'Plan only [STORY_ID] using its approved AC and dependencies. Check the repository, branch and existing changes; inspect relevant code, tests and documented commands. Confirm AC, QA scenarios and the coverage requirement are present. If not, return to story review. '+coveragePolicy+' Propose small independently testable slices, the checks for each, risks and unresolved questions. Do not edit code or start another story.'},
 {title:'2. Implement one slice',text:'Implement only [ONE_APPROVED_SLICE] of [STORY_ID] against [APPROVED_AC]. Inspect relevant code first and preserve unrelated changes. Add meaningful tests for expected, negative and boundary behavior; use documented project commands. '+coveragePolicy+' Run relevant checks and inspect the diff. Report changed files, actual results, failed or unrun checks and remaining AC. Stop before the next slice or story. Repeat for this story’s remaining slices only after review of the result.'},
 {title:'Investigate a bug',text:'Investigate [STORY_ID]: [EXPECTED], [ACTUAL], [STEPS] and approved evidence. Reproduce the issue and inspect relevant code without changing it. Separate hypotheses from verified causes; identify a minimal failing regression test and proposed scope. Do not invent reproduction evidence. Get clarification before changing approved AC.'},
 {title:'Fix a verified bug',text:'Fix only [VERIFIED_CAUSE] in [STORY_ID] using the smallest scoped change. Add a meaningful regression test, verify the original reproduction and run relevant checks. '+coveragePolicy+' Report the diff, actual outcomes and remaining limitations. Do not refactor unrelated code or start another story.'}
 ]},
 {id:'verify',title:'Verify & review',when:'The current story’s implementation is ready for independent checks.',input:'[STORY_ID], approved AC, current diff, actual test and coverage evidence.',output:'Evidence for each AC, verified coverage and required human review.',gate:['All required checks pass and the agreed coverage gate is met in the agreed scope.','A human reviewer has approved the change; missing or failed evidence is resolved.'],prompts:[
 {title:'Check evidence and review',text:'Review [STORY_ID] against its approved AC and actual diff. Map each AC to implementation and meaningful tests. '+coveragePolicy+' Run documented checks when permitted; report actual commands, exit results, measured scope and coverage against the project gate. Treat missing tooling, failed checks, unrun tests or unmet coverage as blockers, not a pass. Flag correctness, security and regression issues with file/line evidence. Identify required human review. Do not edit, merge or deploy.'},
 {title:'Tech-lead review',text:'Perform a tech-lead review of [STORY_ID] using the approved AC and actual diff. Check design fit, maintainability, security-sensitive paths, test adequacy and whether the change stays in scope. List actionable findings with file/line evidence. Distinguish observed results from claims. Do not merge, deploy or invent repository access.'}
 ]},
 {id:'qa',title:'QA validation',when:'The story has passed required implementation checks and review.',input:'[STORY_ID], approved AC, an approved test environment and permitted synthetic data.',output:'An AC-by-AC QA result with defects and regression evidence.',gate:['QA has tested every AC and relevant regression, negative and boundary cases.','Required defects are resolved and retested; QA sign-off is recorded in the approved system.'],prompts:[
 {title:'Validate the story for QA',text:'For [STORY_ID], derive QA cases from every approved AC. For each case give AC reference, preconditions, synthetic test data, steps and expected outcome; include negative, error, boundary and regression scenarios. Execute only with approved environment access and report observed results as Pass, Fail, Blocked or Not run. Code coverage is not a substitute for checking outcomes. Record defects with reproducible evidence. Return failed stories to development and retest fixes. Do not claim QA sign-off without authorized review.'},
 {title:'Exploratory QA pass',text:'For [STORY_ID], run a short exploratory session beyond the scripted AC cases. Probe nearby flows, unusual inputs, empty/partial states, permission edges and obvious regressions using only approved environment access and synthetic data. Log charters, observations and defects with evidence. Do not invent environments or mark AC Pass without execution.'}
 ]},
 {id:'release',title:'Release & monitor',when:'All stories in the proposed release have the required review and QA sign-off.',input:'[RELEASE_SCOPE], accepted story IDs, approvals, rollout and rollback procedures.',output:'An approved release plan, followed by observed release and monitoring evidence.',gate:['Release authorization, required checks, env promotion, rollout and rollback readiness are confirmed.','Post-release smoke checks and monitoring have been checked; incidents or gaps are recorded.'],prompts:[
 {title:'Prepare release and verification',text:'Prepare a release checklist for [RELEASE_SCOPE] using the project’s existing process. Verify each included story’s AC evidence, coverage gate, review and QA sign-off. Identify migrations/configuration changes, dependencies, deployment approvals, environment promotion path (for example dev → staging → production), feature-flag or gradual rollout options, smoke checks, monitoring/alerts and rollback steps. Report missing evidence as blockers. Planning is not release authorization: do not deploy, migrate or merge without explicit approval for that action. After an authorized release, record observed verification and monitoring outcomes, and raise unresolved failures.'},
 {title:'Post-release smoke checklist',text:'After an authorized release of [RELEASE_SCOPE], produce a concise smoke checklist mapped to the included stories’ critical AC. For each check give environment, steps, expected result and observed Pass/Fail/Blocked/Not run. Include one monitoring or alert confirmation and one rollback trigger condition. Use only approved access. Do not invent green results.'}
 ]}
];
const handoffPrompts=[
 {title:'Pause work',text:'Inspect current work and prepare a private factual handoff: current SDLC stage, epic/story ID, approved scope, branch and verified commit, completed changes, remaining AC, actual test and coverage results, uncommitted files, blockers and one next action. Do not edit code. Keep it concise and store only where client policy permits.'},
 {title:'Resume work',text:'Read [PRIVATE_HANDOFF] and approved relevant context. Recheck the SDLC stage, story, repository, branch, diff and claimed evidence. Report discrepancies before edits. Identify one unfinished action in the current story; do not repeat completed work or start another story. Ask for missing access instead of inventing verification.'}
];
/* Keep aligned with docs/REVIEW-MD.md — prefer review markdown before creating tickets. */
const reviewMdPrompt=`You are running the Engineering AI Playbook offline as a review workflow.

Source of truth for stage prompts:
https://smg99.github.io/engineering-ai-playbook/
(or local engineering-ai-playbook/assets/flow-data.js)

Goal:
Produce ONE markdown file for human review. Do NOT create tickets.
Do NOT invent ticket IDs or claim approval.

Process — run these stages in order using the EXACT playbook prompt text for each:
1) Clarify requirements
2) Define the epic
3) Design the approach
4) Draft stories
5) Review & create stories in READINESS-ONLY mode: validate drafts for clarity,
   ownership, testability and gaps. Still do NOT create tickets or invent IDs.

Markdown must include:
- The client requirement enclosed verbatim in a fenced code block
- For each stage: the exact playbook prompt used, then your output
- Clear labels: Known facts / Assumptions / Unknowns / Proposals / DRAFT
- Blocking questions for the owner (P0/P1/P2)
- One draft epic
- For stateful domains (queues, workflows, approvals): explicit entity states
  and allowed transitions before story AC that depend on them
- User stories with: summary, need/value, scope/exclusions, dependencies,
  numbered Given/When/Then AC, negative/boundary cases, QA mapped to AC,
  test requirements, definition of done
- One owning story per observable behavior; do not test later-story behavior
  inside earlier foundation stories
- Full story detail only for the proposed MVP set; label the rest as backlog themes
  (title + intent only) until expanded
- Cite the team’s agreed coverage gate for new/changed code; if unknown, ask.
  Do not invent a gate. Prefer 100% only when that is the team’s stated gate.
- If timeline conflicts with scope: propose an MVP cut vs stretch
- A short "Playbook feedback" section: what worked / what to improve

Rules from the playbook:
- Separate facts from assumptions; do not invent answers
- If blocked, continue with a provisional brief labeled as assumptions
- Prefer existing system patterns; call out false-friend modules if found
- Keep real client context out of the public playbook repo
- No code changes unless I explicitly ask

Optional context (only if provided):
- Target repos/paths: …
- Team conventions / coverage gate: …

Client requirement:
"""
[PASTE REQUIREMENT HERE]
"""`;
const reviewMdCritiquePrompt=`Review this Engineering AI Playbook review-markdown as a critical tech lead.
Do NOT rewrite the whole document unless asked. Do NOT create tickets.

Return:
1) Verdict: discovery-ready / needs revision / not ready
2) High/medium findings table: issue, why it matters, what to change
3) Missing state/transition or operating-model gaps
4) Story-ownership leaks (early stories testing later capabilities)
5) Vague AC that lack pass/fail thresholds
6) Whether stretch items are wrongly treated as full stories
7) Whether coverage gate is explicit or still assumed
8) The smallest revision checklist before readiness-only re-validation

Document to review:
"""
[PASTE REVIEW MARKDOWN HERE]
"""`;

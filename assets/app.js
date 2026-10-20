
const items=[
  [
    "Epic",
    "Understand an epic",
    "Analyze [EPIC_SUMMARY] without writing code. Give goals, scope/exclusions, dependencies, unresolved requirements, risks and independently deliverable stories. Separate facts from assumptions."
  ],
  [
    "Epic",
    "Break down an epic",
    "From [APPROVED_EPIC_SCOPE], propose independently testable user stories with outcome, candidate acceptance criteria, dependencies and risk. Mark criteria as proposals, not approved requirements. Do not implement."
  ],
  [
    "Story",
    "Plan a story",
    "Read the assigned story [STORY] and approved acceptance criteria [AC]. Inspect only relevant files. DO NOT code yet. List ambiguities, existing patterns, smallest independently testable execution slices, checks and out-of-scope items."
  ],
  [
    "Story",
    "Execute one slice",
    "Implement only [ONE_SLICE]. First check branch, working tree and relevant existing code. Follow project conventions. Add appropriate tests, run relevant checks, review diff and report exact evidence, blockers and next action. Do not start the next slice."
  ],
  [
    "Bug",
    "Investigate a bug",
    "Investigate [EXPECTED], [ACTUAL], [STEPS] without changing code. Identify reproduction evidence, likely root causes ranked by confidence, minimal failing test, affected scope and proposed fix. Distinguish hypotheses from proof."
  ],
  [
    "Bug",
    "Fix the root cause",
    "Fix only the verified cause [CAUSE_AND_EVIDENCE] using the smallest safe code change. Add regression test where feasible, execute checks, inspect the diff and report observed results. Avoid unrelated refactoring."
  ],
  [
    "Review",
    "Review a change",
    "Review the current diff against [APPROVED_SCOPE] and [AC]. Flag actionable correctness, security, regression and test gaps with file/line evidence. Separate blockers from nice-to-haves. Do not claim tests passed without checking."
  ],
  [
    "QA",
    "Design test cases",
    "Derive prioritized happy-path, boundary, negative and regression scenarios from [STORY] and [AC]. For each case show steps and expected outcomes. Flag uncertain requirements. Never request production customer data."
  ],
  [
    "Handoff",
    "Prepare provider switch",
    "Inspect current git state; summarize branch, verified SHA, completed slices, uncommitted files, actual test results, blockers, constraints and ONE next action in under 350 words. Exclude secrets and chat history. Do not edit code."
  ],
  [
    "Handoff",
    "Resume from state",
    "Read [PLAN], [STATE] and [RELEVANT_FILES]. Check git branch, working tree, commit and claimed tests before editing. Identify exactly one unfinished slice; perform it using existing patterns. Flag any discrepancy rather than repeating completed work."
  ]
];
const metadata = [
['A larger goal needs clarification before story planning.','Approved epic summary; known constraints and what is excluded.','Confirm open questions with the owner, then break down the epic.','Break down an epic'],
['The epic scope is agreed and needs smaller deliverables.','Approved scope; dependencies and boundaries.','Have the owner confirm the proposed stories and acceptance criteria.','Plan a story'],
['You have an assigned story and need a plan before edits.','[STORY]: the user need. [AC]: approved acceptance criteria. Relevant approved code access or file context.','Resolve questions with the ticket owner, then choose one understood slice.','Execute one slice'],
['One change from the plan is understood and approved.','[ONE_SLICE]: the exact change, its limits and checks. Use a coding environment with repository access.','Inspect the diff and actual check results; repeat for remaining slices before review.','Review a change'],
['A reported behavior needs a reproducible explanation.','[EXPECTED]: what should happen. [ACTUAL]: what happened. [STEPS]: how to reproduce, plus permitted evidence.','Confirm the cause from reproduction and code evidence before asking for a fix.','Fix the root cause'],
['Investigation has established the cause of a bug.','[CAUSE_AND_EVIDENCE]: confirmed cause, reproduction and affected code.','Verify the original reproduction and regression checks, then request review.','Review a change'],
['A change is ready for an additional review.','[APPROVED_SCOPE] and [AC], plus access to the current diff and relevant tests.','Address valid findings and request the required human review.',''],
['You need test scenarios for a story.','[STORY] and [AC], including the approved edge-case behavior.','Resolve unclear expected results, run approved cases and record observed outcomes.',''],
['Work must pause or move to another approved tool.','Current repository access, plan, verified results and unfinished work.','Store the summary privately; start the next approved session with the resume prompt.','Resume from state'],
['You need to continue previously paused work.','[PLAN]: agreed work. [STATE]: factual handoff. [RELEVANT_FILES]: only the files needed for the next slice.','Recheck the state before editing. Resolve discrepancies and work on one slice.','Execute one slice']
];
const search=document.getElementById('search');
const list=document.getElementById('prompt-list');
const detail=document.getElementById('prompt-detail');
const filters=document.getElementById('filters');
const categories=['All','Epic','Story','Bug','Review','QA','Handoff'];
const escapeHTML=text=>text.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let category='All',activePrompt=2,step=0;
const boundary='If context or tool access is missing, ask. Never invent inspection or test results.';
const promptText=index=>items[index][2]+'\n\n'+boundary;
function showPrompt(index,focus=false){
 activePrompt=index;
 const [kind,title]=items[index];
 const [when,provide,next,nextTitle]=metadata[index];
 const text=promptText(index),nextIndex=items.findIndex(item=>item[1]===nextTitle);
 list.querySelectorAll('[data-prompt]').forEach(button=>button.setAttribute('aria-pressed',String(Number(button.dataset.prompt)===index)));
 detail.innerHTML=`<div class="detail-heading"><div><span class="tag">${escapeHTML(kind)}</span><h3 tabindex="-1">${escapeHTML(title)}</h3></div><span class="token-count" title="Rough character-based estimate. Actual model token counts vary.">≈${Math.ceil(text.length/4)} tokens</span></div><p>${escapeHTML(when)}</p><p class="prompt-inputs"><strong>Provide:</strong> ${escapeHTML(provide)}</p><pre class="prompt">${escapeHTML(text)}</pre><button class="copy" data-copy-index="${index}">Copy prompt</button><p class="next"><strong>Then:</strong> ${escapeHTML(next)}</p>${nextIndex>=0?`<button class="next-action" data-next="${nextIndex}">Continue: ${escapeHTML(nextTitle)} →</button>`:''}`;
 if(focus)detail.querySelector('h3').focus();
}
function render(){
 const query=search.value.trim().toLowerCase();
 const matches=items.map((item,index)=>({item,index})).filter(({item,index})=>(category==='All'||item[0]===category)&&[...item,...metadata[index]].join(' ').toLowerCase().includes(query));
 filters.querySelectorAll('button').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.filter===category)));
 document.getElementById('result-count').textContent=matches.length+' prompt'+(matches.length===1?'':'s');
 list.innerHTML=matches.map(({item,index})=>`<button data-prompt="${index}" aria-pressed="${index===activePrompt}"><span>${escapeHTML(item[0])}</span>${escapeHTML(item[1])}</button>`).join('');
 if(matches.length){if(!matches.some(match=>match.index===activePrompt))activePrompt=matches[0].index;showPrompt(activePrompt);}
 else detail.innerHTML='<h3>No matching prompts</h3><p>Try another search or workflow.</p><button id="clear-search">Clear search</button>';
}
filters.innerHTML=categories.map(name=>`<button data-filter="${name}" aria-pressed="${name===category}">${name}</button>`).join('');
filters.addEventListener('click',event=>{const button=event.target.closest('[data-filter]');if(!button)return;category=button.dataset.filter;search.value='';render();});
search.addEventListener('input',render);
list.addEventListener('click',event=>{const button=event.target.closest('[data-prompt]');if(button)showPrompt(Number(button.dataset.prompt));});
detail.addEventListener('click',event=>{
 const next=event.target.closest('[data-next]');
 if(next){const index=Number(next.dataset.next);category=items[index][0];activePrompt=index;search.value='';render();detail.querySelector('h3').focus();}
 if(event.target.id==='clear-search'){search.value='';render();search.focus();}
});
const steps=[...document.querySelectorAll('.lesson-step')];
const lessonNav=document.getElementById('lesson-nav');
lessonNav.innerHTML=steps.map((item,index)=>`<button data-step="${index}" aria-label="Step ${index+1}: ${escapeHTML(item.querySelector('h3').textContent.replace(/^\d+\. /,''))}">${index+1}</button>`).join('');
function showStep(index,focus=false){
 step=Math.max(0,Math.min(steps.length-1,index));
 steps.forEach((panel,i)=>panel.hidden=i!==step);
 lessonNav.querySelectorAll('button').forEach((button,i)=>{if(i===step)button.setAttribute('aria-current','step');else button.removeAttribute('aria-current');});
 document.getElementById('lesson-status').textContent=`Step ${step+1} of ${steps.length}`;
 document.getElementById('previous-step').disabled=step===0;
 document.getElementById('next-step').textContent=step===steps.length-1?'Find a prompt':'Next step';
 if(focus){const heading=steps[step].querySelector('h3');heading.tabIndex=-1;heading.focus();}
}
lessonNav.addEventListener('click',event=>{const button=event.target.closest('[data-step]');if(button)showStep(Number(button.dataset.step),true);});
document.getElementById('previous-step').addEventListener('click',()=>showStep(step-1,true));
document.getElementById('next-step').addEventListener('click',()=>{if(step===steps.length-1)location.hash='library';else showStep(step+1,true);});
const views=['library','start','guides'];
function route(focus=false){
 let id;try{id=decodeURIComponent(location.hash.slice(1));}catch{id='library';}
 const target=document.getElementById(id);
 let view=id==='start'||target?.closest('#start')?'start':id==='guides'||id==='glossary'||target?.closest('#guides')?'guides':'library';
 if(id==='main')view=document.querySelector('header nav a[aria-current=page]')?.hash.slice(1)||'library';
 views.forEach(name=>document.getElementById(name).hidden=name!==view);
 document.getElementById('glossary').hidden=view!=='guides';
 document.querySelectorAll('header nav a').forEach(link=>{if(link.hash==='#'+view)link.setAttribute('aria-current','page');else link.removeAttribute('aria-current');});
 if(view==='start'&&target?.classList.contains('lesson-step'))showStep(steps.indexOf(target));
 if(target?.tagName==='DETAILS')target.open=true;
 const section=document.getElementById(view);
 section.classList.remove('view-enter');requestAnimationFrame(()=>section.classList.add('view-enter'));
 if(focus){const heading=section.querySelector('h1');heading.tabIndex=-1;heading.focus({preventScroll:true});}
 if(target&&target!==section&&view==='guides')target.scrollIntoView({block:'start'});else window.scrollTo(0,0);
}
window.addEventListener('hashchange',()=>route(true));
document.addEventListener('click',async event=>{
 const link=event.target.closest('a[href^="#"]');
 if(link){const hash=link.getAttribute('href');if(hash===location.hash){event.preventDefault();route(true);}return;}
 const button=event.target.closest('[data-copy-source],[data-copy-index]');if(!button)return;
 const text=button.hasAttribute('data-copy-source')?document.getElementById(button.dataset.copySource).textContent:promptText(Number(button.dataset.copyIndex));
 const label=button.textContent;const status=document.getElementById('copy-status');button.disabled=true;
 try{await navigator.clipboard.writeText(text);button.textContent='Copied';status.textContent='Prompt copied. Replace placeholders in your approved AI tool.';setTimeout(()=>{button.textContent=label;button.disabled=false;},1400);}
 catch{
  button.disabled=false;
  button.parentElement.querySelector('.copy-fallback')?.remove();
  const fallback=document.createElement('div');fallback.className='copy-fallback';
  const caption=document.createElement('label');caption.textContent='Select and copy this prompt:';
  const area=document.createElement('textarea');area.value=text;area.readOnly=true;area.rows=8;area.id='manual-copy-'+Date.now();caption.htmlFor=area.id;
  fallback.append(caption,area);button.after(fallback);area.focus();area.select();status.textContent='Clipboard unavailable. Selectable prompt shown.';
 }
});
render();showStep(0);route();

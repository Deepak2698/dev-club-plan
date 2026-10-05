// Club roles and what candidates should be ready to talk about.
// Deliberately topics, not the interviewers' actual questions.

export const roles = [
  { name: 'Web Development', ready: ['How the web works, from URL to page', 'A site or page you built, and your choices', 'Performance and accessibility basics'] },
  { name: 'App Development', ready: ['An app you built or would build', 'Choosing between native and cross-platform', 'Debugging and offline use'] },
  { name: 'AI / ML', ready: ['Core ideas like overfitting and evaluation', 'A model or notebook you worked on', 'Where AI tools help and where they fail'] },
  { name: 'UI/UX Design', ready: ['Your design process, brief to screen', 'A portfolio piece and what you’d redo', 'Giving and taking design critique'] },
  { name: 'DevOps & Cloud', ready: ['What happens after git push', 'Containers, hosting, and keeping secrets safe', 'Debugging a site that is down'] },
  { name: 'Competitive Programming', ready: ['Solving a short problem out loud', 'Your practice routine', 'Explaining an algorithm simply'] },
  { name: 'Cybersecurity', ready: ['Common web vulnerabilities and fixes', 'CTFs or labs you have tried', 'The ethics of security work'] },
  { name: 'Open Source', ready: ['A contribution or PR you made', 'Finding your way in a big codebase', 'Handling feedback from maintainers'] },
  { name: 'Content & Social Media', ready: ['Pages or creators you admire, and why', 'Writing a post or caption on the spot', 'Explaining tech to non-tech students'] },
  { name: 'Events & Operations', ready: ['An event you helped run', 'Planning checklists and timelines', 'What you do when plans fall apart'] },
  { name: 'PR & Outreach', ready: ['Pitching the club in a minute', 'Reaching sponsors, alumni and speakers', 'Professional emails and follow-ups'] },
]

export const worksheet = [
  { id: 'domain', label: 'My domain, and why I chose it', hint: 'One honest reason, plus anything you have tried in this area.' },
  { id: 'ex1', label: 'Example 1 — a project or activity', hint: 'Situation → what I did → what happened → what I learned.' },
  { id: 'ex2', label: 'Example 2 — a mistake or challenge', hint: 'What went wrong, how I handled it, what I’d do differently.' },
  { id: 'ex3', label: 'Example 3 — something I led or organized', hint: 'Could be in college, a hobby group, volunteering, anywhere.' },
  { id: 'learn', label: 'My learning story', hint: 'Something I taught myself: how I learned it and what I did with it.' },
  { id: 'team', label: 'Working with others', hint: 'A disagreement, helping someone, or feedback I received.' },
  { id: 'contribute', label: 'What I want to contribute to the Dev Club', hint: 'One concrete thing you’d like to build, run or improve.' },
  { id: 'ask', label: 'Questions I want to ask the panel', hint: 'Curious questions are a good sign. Write two.' },
]

export const checklist = [
  'Re-read your worksheet the night before',
  'Keep links ready: GitHub, portfolio, LinkedIn, or project demos',
  'Arrive (or join online) 10 minutes early',
  'Have a pen and paper for problem-solving questions',
  'Think aloud: explain your steps, not only the answer',
  'Say “I don’t know yet, but I would learn it by…” when you’re unsure',
  'Use “we” for team results, and be clear about your own part',
  'Ask the panel at least one question at the end',
]

export const doDont = [
  ['Ask a clarifying question before solving', 'Rush to the first answer'],
  ['Use real examples, even small ones', 'Memorize scripted answers'],
  ['Admit gaps and say how you’d close them', 'Guess confidently or bluff'],
  ['Credit your team and name your part', 'Take credit for others’ work'],
  ['State assumptions out loud', 'Go silent when stuck'],
]

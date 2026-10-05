// Club roles and what candidates should be ready to talk about.
// Deliberately topics, not the interviewers' actual questions.

export const roles = [
  {
    name: 'Tech',
    seats: 2,
    ready: ['A project you built, and the hardest bug you fixed', 'How you learn a new language or tool', 'Explaining a technical idea to a beginner', 'Thinking through a short problem out loud'],
  },
  {
    name: 'Marketing',
    seats: 1,
    ready: ['Pages or brands you think market well, and why', 'What makes students actually show up to events', 'Writing a short post or announcement on the spot', 'How you would measure whether a campaign worked'],
  },
  {
    name: 'Design',
    seats: 1,
    ready: ['2–3 pieces of your work, and the thinking behind them', 'A piece you would redo, and what you would change', 'Making a poster readable in two seconds', 'Taking feedback and meeting deadlines'],
  },
  {
    name: 'Management',
    seats: 1,
    ready: ['An event or project you organized, including what went wrong', 'How you track tasks, deadlines and people', 'Handling a teammate who misses their work', 'Planning an event with a small budget and team'],
  },
]

export const worksheet = [
  { id: 'domain', label: 'The role I’m applying for, and why', hint: 'Tech, Marketing, Design or Management. One honest reason, plus anything you have tried.' },
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

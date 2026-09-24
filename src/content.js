// All deck copy lives here, taken from the Dev Club Interview Guide.

export const parameters = [
  {
    id: 'domain',
    num: '01',
    title: 'Domain Fit',
    short: 'Your interest, understanding, exposure, and potential in the domain you selected.',
    accent: '#ff3b5c',
    cmd: 'devclub fit --domain=yours',
    means:
      'How well your interests, current understanding, previous exposure, and potential align with the domain you selected. You are not expected to be an expert.',
    tackle: [
      ['Know your why', 'Be ready to explain why you chose this domain.'],
      ['Show what you tried', 'Projects, college work, personal work, competitions, content creation, organizing events, or self-learning.'],
      ['Own your starting point', 'If your experience is limited, explain what you have started learning and why.'],
      ['Connect the dots', 'Link your past experience to what you want to contribute to the Dev Club.'],
    ],
    helps: [
      'A clear reason for choosing the domain',
      'Basic understanding of what the domain involves',
      'Evidence of interest or previous effort',
      'Willingness to grow within the domain',
    ],
  },
  {
    id: 'problem',
    num: '02',
    title: 'Problem Solving',
    short: 'How you approach an unfamiliar problem, break it down, and reach a practical solution.',
    accent: '#7c5cff',
    cmd: 'solve --think-aloud',
    means:
      'This is about your thinking process. You may be given a situation with no obvious answer. The focus is on how you understand the problem, identify priorities, and work toward a solution.',
    tackle: [
      ['Don’t rush', 'Understand the problem first before answering.'],
      ['Decompose', 'Break the situation into smaller parts.'],
      ['Think aloud', 'Explain your reasoning as you go.'],
      ['Mind constraints', 'Consider time, people, resources, and users.'],
      ['State assumptions', 'If you don’t know something, say what you’re assuming and proceed logically.'],
    ],
    helps: ['Structured thinking', 'Logical reasoning', 'Practical decision-making', 'Ability to prioritize'],
  },
  {
    id: 'learning',
    num: '03',
    title: 'Learning Agility',
    kicker: '& Curiosity',
    short: 'How you respond to new topics, unfamiliar situations, feedback, and opportunities to learn.',
    accent: '#22d3ee',
    cmd: 'learn --unknown --fast',
    means:
      'How you respond when you encounter something new. In a student community, technologies, tools, responsibilities, and problems will keep changing.',
    tackle: [
      ['Be honest', 'Be upfront about what you do not know.'],
      ['Show your method', 'Explain how you would learn something unfamiliar.'],
      ['Go beyond class', 'Share something you learned outside your regular coursework.'],
      ['Welcome feedback', 'Show that you are open to feedback and willing to improve.'],
      ['Follow your curiosity', 'Talk about questions or topics that genuinely interest you.'],
    ],
    helps: ['Curiosity', 'Self-learning habit', 'Openness to feedback', 'Ability to adapt when the situation changes'],
  },
  {
    id: 'team',
    num: '04',
    title: 'Teamwork',
    short: 'How well you communicate, collaborate, accept different viewpoints, and contribute toward a shared goal.',
    accent: '#a3e635',
    cmd: 'git merge --collaborate',
    means:
      'The Dev Club is a collaborative community. This looks at how you work with people who have different skills, ideas, communication styles, and priorities.',
    tackle: [
      ['Listen fully', 'Hear another person’s idea out before responding.'],
      ['Disagree well', 'Be comfortable disagreeing — respectfully.'],
      ['Coordinate', 'Explain how you would divide work and keep others informed.'],
      ['Give & take help', 'Be willing to ask for help, and help others when you can.'],
      ['Say “we”', 'Use “we” for team outcomes, while staying clear about your own contribution.'],
    ],
    helps: [
      'Respect for different viewpoints',
      'Clear communication',
      'Reliability within a team',
      'Handling disagreement constructively',
    ],
  },
]

export const prep = [
  ['Know your domain', 'Understand what the domain does and why you want to contribute there.', '◆'],
  ['Prepare 2–3 examples', 'Projects, activities, competitions, leadership moments, mistakes, or things you learned on your own.', '◇'],
  ['Practice explaining your thinking', 'When solving a question, explain the steps you’re taking — not only the final answer.', '▲'],
  ['Know your learning story', 'Something new you learned, how you learned it, and what you did with it.', '●'],
  ['Think about collaboration', 'Working with others, handling disagreement, helping someone, or receiving feedback.', '■'],
  ['Be honest', '“I do not know yet, but I would learn it by…” beats guessing confidently.', '★'],
]

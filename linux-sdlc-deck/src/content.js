// All slide copy lives here. Linux content comes from the class brief;
// SDLC content follows the "SDLC & SDLC Models — Classroom Notes".

export const webPillars = [
  {
    id: 'containers',
    glyph: '▣',
    title: 'Native Containers',
    desc: 'Docker & Kubernetes use kernel features (namespaces + cgroups) that Linux has built in — no virtualization penalty like on Windows or macOS.',
    accent: '#22d3ee',
  },
  {
    id: 'devops',
    glyph: '⟳',
    title: 'DevOps & CI/CD',
    desc: 'Pipelines that build, test and ship code automatically run almost entirely on headless, text-based Linux servers.',
    accent: '#3ddc84',
  },
  {
    id: 'cost',
    glyph: '₹',
    title: 'Zero License Cost',
    desc: 'Open source means no fee per machine — scale to thousands of cloud servers on AWS or GCP without paying for the OS.',
    accent: '#fbbf24',
  },
]

export const aiPoints = [
  {
    title: 'GPU & Hardware',
    desc: 'NVIDIA and other vendors ship their deepest driver optimizations for Linux — better memory management and faster math.',
    glyph: '⚡',
  },
  {
    title: 'Linux-first Ecosystem',
    desc: 'PyTorch, TensorFlow and Hugging Face are built Linux-first. CUDA + Python setups stay clean, isolated in containers.',
    glyph: '🧠',
  },
  {
    title: 'AI Agents ❤ the CLI',
    desc: 'AI can’t easily click buttons, but it is great at writing and running terminal commands. The shell is the AI playground.',
    glyph: '🤖',
  },
]

export const androidStack = [
  { name: 'Apps', sub: 'WhatsApp · Instagram · your app', c: '#3ddc84' },
  { name: 'Android Framework', sub: 'Activities · Views · Notifications', c: '#22d3ee' },
  { name: 'Android Runtime (ART)', sub: 'Runs your Kotlin / Java code', c: '#7c5cff' },
  { name: 'Linux Kernel', sub: 'Drivers · Memory · Processes · Security', c: '#fbbf24', core: true },
]

export const advantages = [
  {
    title: 'Open Source Flexibility',
    desc: 'Full control — even modify the kernel for specific hardware or security needs.',
    glyph: '{ }',
  },
  {
    title: 'Stability & Uptime',
    desc: 'Runs heavy workloads for months or years without a reboot.',
    glyph: '∞',
  },
  {
    title: 'Security & Privacy',
    desc: 'Strict root permissions block unauthorized execution; no forced telemetry.',
    glyph: '🔒',
  },
  {
    title: 'Powerful Automation',
    desc: 'A few lines of bash can deploy, test and tune an entire system.',
    glyph: '$_',
  },
]

// Interactive terminal: each command a student can "run".
export const commands = [
  {
    cmd: 'pwd',
    what: 'Where am I?',
    out: '/home/student/projects/shop-app',
  },
  {
    cmd: 'ls -la',
    what: 'List files (incl. hidden)',
    out: `drwxr-xr-x  student  src/
-rw-r--r--  student  package.json
-rw-r--r--  student  .env
-rwxr-xr-x  student  deploy.sh`,
  },
  {
    cmd: 'cd src && mkdir api',
    what: 'Move into a folder, make a new one',
    out: '(no output = success ✔)',
  },
  {
    cmd: 'cat package.json | grep react',
    what: 'Read a file, filter lines',
    out: `    "react": "^19.2.0",
    "react-dom": "^19.2.0",`,
  },
  {
    cmd: 'chmod +x deploy.sh',
    what: 'Give a script permission to run',
    out: '-rwxr-xr-x  deploy.sh   ← now executable',
  },
  {
    cmd: 'ps aux | grep node',
    what: 'Which processes are running?',
    out: 'student  4121  1.3  node server.js',
  },
  {
    cmd: 'sudo systemctl restart nginx',
    what: 'Restart the web server',
    out: '● nginx.service — active (running)',
  },
  {
    cmd: 'tail -f /var/log/app.log',
    what: 'Watch live server logs',
    out: `[10:42:01] GET /api/products 200 12ms
[10:42:03] POST /api/cart     201 31ms
[10:42:04] GET /api/user      401 3ms`,
  },
]

export const sdlcWhy = [
  'Structured development process',
  'Clear responsibilities & deliverables',
  'Estimate time, cost & resources',
  'Better quality via planned testing',
  'Identify & manage risks',
  'Track and control progress',
  'Supports maintenance & enhancement',
]

// The 7 SDLC phases + a "Linux angle" to connect the two halves of the class.
export const phases = [
  {
    id: 'req',
    short: 'Requirements',
    title: 'Requirement Analysis',
    glyph: '📋',
    c: '#3ddc84',
    what: 'Understand business, user, functional and non-functional requirements. Functional = features; non-functional = performance, security, scalability, availability.',
    out: ['SRS', 'Requirement list', 'Use cases'],
    linux: 'Non-functional needs like "99.9% uptime" and "handle 10k users" already point to Linux servers.',
    tools: ['Markdown docs in Git', 'Issue tracker'],
  },
  {
    id: 'plan',
    short: 'Planning',
    title: 'Planning',
    glyph: '🗓',
    c: '#22d3ee',
    what: 'Estimate scope, cost, schedule, people, infrastructure and tools. Identify risks, dependencies and milestones.',
    out: ['Project plan', 'Estimates', 'Schedule'],
    linux: 'Infra budget: Linux cloud VMs have no OS license cost — cheaper to plan and scale.',
    tools: ['AWS / GCP Linux VMs', 'Cost calculators'],
  },
  {
    id: 'design',
    short: 'Design',
    title: 'System Design',
    glyph: '📐',
    c: '#7c5cff',
    what: 'Turn requirements into a technical solution: architecture, database, APIs, modules, UI/UX, security controls and tech choices.',
    out: ['Architecture', 'ER diagram', 'Wireframes'],
    linux: 'Architecture is drawn as Linux containers: web, API and DB — each a separate box.',
    tools: ['docker-compose.yml', 'Nginx reverse proxy'],
  },
  {
    id: 'dev',
    short: 'Development',
    title: 'Development',
    glyph: '⌨',
    c: '#f472b6',
    what: 'Implement the design with languages and frameworks. Source control, code reviews and coding standards are used.',
    out: ['Source code', 'Builds'],
    linux: 'Dev machines mirror production with WSL, a VM or Docker — "works on my machine" disappears.',
    tools: ['bash', 'git', 'npm / pip', 'vim / VS Code'],
  },
  {
    id: 'test',
    short: 'Testing',
    title: 'Testing',
    glyph: '🧪',
    c: '#fbbf24',
    what: 'Detect defects and verify requirements: unit, integration, system, regression, performance, security and acceptance testing.',
    out: ['Test cases', 'Defect reports', 'Test results'],
    linux: 'Every push triggers tests on a fresh Linux runner (e.g. GitHub Actions ubuntu-latest).',
    tools: ['GitHub Actions', 'Jest / PyTest', 'curl'],
  },
  {
    id: 'deploy',
    short: 'Deployment',
    title: 'Deployment',
    glyph: '🚀',
    c: '#3ddc84',
    what: 'Release to the target environment — manual or automated via CI/CD. Can be gradual: blue-green, canary or phased.',
    out: ['Production release'],
    linux: 'Production = Linux. Containers are shipped to Kubernetes, or a service is started with systemd.',
    tools: ['Docker', 'Kubernetes', 'systemctl', 'Vercel'],
  },
  {
    id: 'maint',
    short: 'Maintenance',
    title: 'Maintenance',
    glyph: '🛠',
    c: '#22d3ee',
    what: 'Fix defects, improve performance, apply security updates, adapt to change and add features.',
    out: ['Patches', 'Updates', 'New versions'],
    linux: 'Read logs, patch packages, schedule backups — all from the Linux terminal.',
    tools: ['journalctl', 'apt upgrade', 'cron', 'htop'],
  },
]

export const models = [
  {
    id: 'waterfall',
    name: 'Waterfall',
    memo: 'Sequential',
    c: '#22d3ee',
    def: 'Development flows through predefined phases. A phase is generally completed before the next one begins.',
    flow: ['Requirements', 'Design', 'Development', 'Testing', 'Deployment', 'Maintenance'],
    pros: ['Simple and easy to understand', 'Clear milestones and documentation', 'Works when requirements are stable'],
    cons: ['Changes are costly after a phase is done', 'Working software arrives late', 'Late discovery of defects causes rework'],
    example: 'A project with fixed, well-documented requirements and strict contractual milestones.',
  },
  {
    id: 'vmodel',
    name: 'V-Model',
    memo: 'Verification + Validation',
    c: '#7c5cff',
    def: 'Extends the sequential approach by pairing every development activity with a matching testing activity. Test planning starts early.',
    pairs: [
      ['Requirements', 'Acceptance Testing'],
      ['System Design', 'System Testing'],
      ['Architecture', 'Integration Testing'],
      ['Module Design', 'Unit Testing'],
    ],
    pros: ['Testing is planned early', 'Strong traceability: requirements ↔ tests', 'Great where quality & compliance matter'],
    cons: ['Changes can be expensive', 'Less suitable for evolving requirements'],
    example: 'Safety-critical or regulated software (medical, aviation) where V&V must be documented.',
  },
  {
    id: 'iterative',
    name: 'Iterative',
    memo: 'Improve repeatedly',
    c: '#3ddc84',
    def: 'The system is built through repeated cycles. Each cycle produces a version that is reviewed and improved in the next.',
    flow: ['Plan', 'Design', 'Build', 'Test', 'Review', 'Improve'],
    pros: ['Early versions can be evaluated', 'Requirements refined with feedback', 'Continuous improvement'],
    cons: ['Needs good iteration planning', 'Uncontrolled changes increase effort'],
    example: 'A product whose requirements become clearer after users try early versions.',
  },
  {
    id: 'incremental',
    name: 'Incremental',
    memo: 'Add functionality',
    c: '#fbbf24',
    def: 'The product is split into functional increments. Each increment adds usable functionality to the system.',
    flow: ['Login', 'Products', 'Cart', 'Payment'],
    pros: ['Early delivery of useful features', 'Priorities managed per increment', 'Feedback arrives earlier'],
    cons: ['Needs careful architecture & integration', 'Dependencies between increments add complexity'],
    example: 'An e-commerce app: first authentication, then catalog, then cart, then payment.',
  },
  {
    id: 'spiral',
    name: 'Spiral',
    memo: 'Risk-driven iterations',
    c: '#f472b6',
    def: 'Combines iteration with explicit risk analysis. Each loop sets objectives, evaluates risks, builds, and gets feedback.',
    flow: ['Planning', 'Risk Analysis', 'Engineering', 'Evaluation'],
    pros: ['Strong focus on risk management', 'Suits large, complex projects', 'Supports iterative refinement'],
    cons: ['Can be expensive and complex', 'Needs experienced risk analysts'],
    example: 'A large system with high technical uncertainty, integration risk or project cost.',
  },
  {
    id: 'prototype',
    name: 'Prototype',
    memo: 'Build an early model',
    c: '#22d3ee',
    def: 'An early, simplified version of the system is built to clarify requirements and collect feedback before full development.',
    flow: ['Initial Req.', 'Quick Design', 'Prototype', 'User Feedback', 'Refine', 'Develop'],
    pros: ['Useful when requirements are unclear', 'Makes ideas visible to stakeholders', 'Validates UI/UX and workflows'],
    cons: ['Users may mistake prototype for final product', 'Poorly managed prototypes → tech debt'],
    example: 'Designing an LMS dashboard when nobody is sure about the navigation and UX.',
  },
  {
    id: 'agile',
    name: 'Agile',
    memo: 'Short cycles + feedback',
    c: '#3ddc84',
    def: 'An adaptive approach: deliver in short iterations (sprints), get continuous feedback, embrace changing requirements. Scrum is a popular Agile framework.',
    flow: ['Backlog', 'Sprint Planning', 'Dev + Test', 'Review', 'Retrospective'],
    pros: ['Frequent delivery', 'Welcomes changing requirements', 'Continuous feedback'],
    cons: ['Problems become visible earlier', 'Needs active collaboration', 'Scope needs continuous management'],
    example: 'A web product whose features and priorities evolve with customer feedback.',
  },
]

// 0–4 scale for the comparison bars.
export const comparison = [
  { model: 'Waterfall', idea: 'Sequential phases', change: 1, changeL: 'Low', risk: 'Low–Medium', fit: 'Stable requirements' },
  { model: 'V-Model', idea: 'Dev paired with testing', change: 1, changeL: 'Low', risk: 'Quality / testing', fit: 'Quality-critical projects' },
  { model: 'Iterative', idea: 'Repeat and improve', change: 2.5, changeL: 'Medium–High', risk: 'Medium', fit: 'Evolving requirements' },
  { model: 'Incremental', idea: 'Deliver in pieces', change: 3, changeL: 'High', risk: 'Medium', fit: 'Feature-based releases' },
  { model: 'Spiral', idea: 'Risk-driven iteration', change: 3, changeL: 'High', risk: 'High', fit: 'Large / high-risk systems' },
  { model: 'Prototype', idea: 'Early model for feedback', change: 3, changeL: 'High', risk: 'Req. uncertainty', fit: 'Unclear requirements / UI' },
  { model: 'Agile', idea: 'Short cycles + feedback', change: 4, changeL: 'Very High', risk: 'Continuous', fit: 'Changing product needs' },
]

export const waterfallVsAgile = [
  ['Planning', 'Detailed planning upfront', 'Continuous planning'],
  ['Requirements', 'Prefer stable requirements', 'Can evolve'],
  ['Delivery', 'Late in the lifecycle', 'Frequent increments'],
  ['Feedback', 'At milestones', 'Continuous / regular'],
  ['Testing', 'After development', 'Throughout every iteration'],
  ['Change', 'Controlled, potentially costly', 'Expected & managed'],
]

export const ecommerce = [
  ['Requirements', 'Registration, product search, cart, checkout, order tracking'],
  ['Planning', 'Team, budget, timeline, tech stack, risks'],
  ['Design', 'React frontend · Node/Express API · MongoDB · wireframes'],
  ['Development', 'Auth, product APIs, cart, checkout'],
  ['Testing', 'APIs, UI, security, payment flow, edge cases'],
  ['Deployment', 'Frontend + backend + DB → Linux production servers'],
  ['Maintenance', 'Fix bugs, patch vulnerabilities, optimize, add features'],
]

export const quiz = [
  {
    q: 'A hospital needs software for a heart-monitoring device. Every requirement must be tested and documented for regulators.',
    a: 'V-Model',
    why: 'Each design step is paired with a test level — perfect traceability for safety-critical, regulated software.',
  },
  {
    q: 'A startup is building a food-delivery app. Customer feedback changes priorities every two weeks.',
    a: 'Agile',
    why: 'Short sprints + continuous feedback let the team re-prioritize constantly.',
  },
  {
    q: 'The college wants a new LMS dashboard, but nobody can explain what the navigation should look like.',
    a: 'Prototype',
    why: 'Build a quick clickable model, get feedback, then refine requirements before real development.',
  },
  {
    q: 'A government payroll system with fixed rules, a signed contract and fixed milestones.',
    a: 'Waterfall',
    why: 'Stable, well-documented requirements + contractual milestones suit a sequential flow.',
  },
  {
    q: 'A bank is replacing its core system. Huge budget, many integrations, high technical uncertainty.',
    a: 'Spiral',
    why: 'Every loop starts with risk analysis — ideal for large, expensive, high-risk projects.',
  },
]

export const terms = [
  ['Functional Req.', 'What the system should do'],
  ['Non-functional Req.', 'Qualities: performance, security, usability, availability'],
  ['SRS', 'Software Requirements Specification — agreed requirements document'],
  ['Verification', 'Are we building the product right? (matches spec/design)'],
  ['Validation', 'Are we building the right product? (meets user needs)'],
  ['Deliverable', 'A measurable output of a phase'],
]

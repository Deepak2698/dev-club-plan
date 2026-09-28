import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  advantages,
  aiPoints,
  androidStack,
  commands,
  comparison,
  ecommerce,
  models,
  phases,
  quiz,
  sdlcWhy,
  terms,
  waterfallVsAgile,
  webPillars,
} from './content.js'
import {
  CodeToCloud,
  DeliveryTimeline,
  MiniSite,
  ModelVisual,
  PhaseWheel,
  Pipeline,
  RequestJourney,
  StackCompare,
  StatRing,
  Tux,
} from './visuals.jsx'

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
}
const up = {
  hidden: { opacity: 0, y: 28, filter: 'blur(8px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

function Stage({ children, className = '' }) {
  return (
    <motion.div className={`stage ${className}`} variants={stagger} initial="hidden" animate="show">
      {children}
    </motion.div>
  )
}

const M = motion.div

function useTyped(text, speed = 38, start = 400) {
  const [out, setOut] = useState('')
  useEffect(() => {
    let i = 0
    let timer
    const tick = () => {
      i += 1
      setOut(text.slice(0, i))
      if (i < text.length) timer = setTimeout(tick, speed)
    }
    timer = setTimeout(tick, start)
    return () => clearTimeout(timer)
  }, [text, speed, start])
  return out
}

function Tag({ children, color }) {
  return (
    <M variants={up} className="tag" style={color ? { '--c': color } : undefined}>
      <span className="tag-dot" />
      {children}
    </M>
  )
}

function H2({ children }) {
  return (
    <motion.h2 variants={up} className="h2">
      {children}
    </motion.h2>
  )
}

/* ═══════════════════════════ PART 1 · LINUX ═══════════════════════════ */

function TitleSlide() {
  const typed = useTyped('uname -s && whoami', 70, 900)
  const done = typed.length === 'uname -s && whoami'.length
  return (
    <Stage className="center title-slide">
      <Tag>A visual guide for students</Tag>
      <M variants={up} className="mega">
        <span className="grad">Linux</span> ×
        <br />
        Software Dev
      </M>
      <M variants={up} className="lede">
        Why the code you write almost always runs on Linux — and how software is planned, built, tested and shipped
        with the <b>SDLC</b>.
      </M>
      <M variants={up} className="prompt">
        <span className="prompt-user">student@campus</span>
        <span className="prompt-sep">:~$</span> {typed}
        <span className="caret" />
        {done && (
          <div className="prompt-out">
            Linux
            <br />
            future-software-engineer
          </div>
        )}
      </M>
      <M variants={up} className="hint">
        Press <kbd>→</kbd> or <kbd>Space</kbd> to begin · <kbd>O</kbd> for all slides
      </M>
    </Stage>
  )
}

function Agenda({ go }) {
  const parts = [
    {
      n: 'Part 1',
      t: 'Linux in the Tech World',
      c: '#3ddc84',
      items: ['Your code runs on Linux', 'Web & cloud: containers, CI/CD', 'AI / ML and mobile', 'Terminal commands you need'],
      to: 'runs-on-linux',
    },
    {
      n: 'Part 2',
      t: 'SDLC & SDLC Models',
      c: '#7c5cff',
      items: ['7 phases of the SDLC', '7 models: Waterfall → Agile', 'Compare & choose a model', 'Case study + quiz'],
      to: 'sdlc-intro',
    },
  ]
  return (
    <Stage>
      <Tag>Today’s roadmap</Tag>
      <H2>
        Two parts. <span className="muted">One story: how software gets from idea to server.</span>
      </H2>
      <div className="agenda">
        {parts.map((p) => (
          <motion.button variants={up} key={p.n} className="agenda-card" style={{ '--c': p.c }} onClick={() => go(slideIndex(p.to))}>
            <span className="bento-num">{p.n}</span>
            <span className="agenda-t">{p.t}</span>
            <ul>
              {p.items.map((it) => (
                <li key={it}>
                  <span className="check">✓</span>
                  {it}
                </li>
              ))}
            </ul>
            <span className="bento-go">jump →</span>
          </motion.button>
        ))}
      </div>
    </Stage>
  )
}

function RunsOnLinux() {
  return (
    <Stage className="split">
      <div>
        <Tag>The big idea</Tag>
        <H2>
          You code on Windows or Mac.
          <br />
          <span className="grad">It runs on Linux.</span>
        </H2>
        <M variants={up} className="lede left">
          Linux is the backbone of modern tech — from the servers hosting your favourite websites to the supercomputers
          training the latest AI models.
        </M>
        <M variants={up}>
          <CodeToCloud />
        </M>
      </div>
      <M variants={up} className="ring-wrap">
        <StatRing from={70} to={90} label="of all public web servers run Linux" />
        <div className="ring-facts">
          <span>☁ AWS · GCP · Azure VMs</span>
          <span>🤖 AI supercomputers</span>
          <span>📱 Every Android phone</span>
        </div>
      </M>
    </Stage>
  )
}

const journeyNodes = [
  { name: 'Browser', icon: '🧑‍💻', c: '#a1a1b3', desc: 'You type shop.com and press Enter. Your laptop can be any OS.' },
  { name: 'DNS', icon: '📖', c: '#22d3ee', desc: 'Translates shop.com into an IP address — DNS servers are mostly Linux.', linux: true },
  { name: 'Load Balancer', icon: '⚖', c: '#fbbf24', desc: 'Spreads traffic across many servers so none gets overloaded.', linux: true },
  { name: 'Nginx', icon: '🌐', c: '#3ddc84', desc: 'Web server on Linux: serves your React build and forwards /api calls.', linux: true },
  { name: 'Node API', icon: '⚙', c: '#7c5cff', desc: 'Your backend code runs as a Linux process (often inside a Docker container).', linux: true },
  { name: 'Database', icon: '🗄', c: '#f472b6', desc: 'MongoDB / PostgreSQL store data on a Linux file system.', linux: true },
]

function RequestSlide() {
  return (
    <Stage>
      <Tag>Web development · the journey of a click</Tag>
      <H2>
        One click. <span className="muted">Almost every hop is a Linux machine.</span>
      </H2>
      <M variants={up}>
        <RequestJourney nodes={journeyNodes} />
      </M>
    </Stage>
  )
}

function WebPillars() {
  return (
    <Stage>
      <Tag>01 · Web development & cloud</Tag>
      <H2>
        The internet <span className="grad">runs on Linux.</span>
      </H2>
      <div className="prep-grid">
        {webPillars.map((p, i) => (
          <M variants={up} key={p.id} className="pillar" style={{ '--c': p.accent }}>
            <div className="pillar-glyph">{p.glyph}</div>
            <span className="prep-i">0{i + 1}</span>
            <div className="prep-h">{p.title}</div>
            <div className="prep-d">{p.desc}</div>
          </M>
        ))}
      </div>
    </Stage>
  )
}

function Containers() {
  return (
    <Stage>
      <Tag color="#22d3ee">Why Docker loves Linux</Tag>
      <H2>
        Containers are a <span className="grad">Linux kernel feature.</span>
      </H2>
      <M variants={up} className="means">
        <b>namespaces</b> give each container its own view (files, network, processes). <b>cgroups</b> limit how much CPU
        and RAM it can use. On Windows/macOS, Docker has to run a hidden Linux VM first.
      </M>
      <M variants={up}>
        <StackCompare />
      </M>
    </Stage>
  )
}

function CICD() {
  return (
    <Stage>
      <Tag color="#3ddc84">DevOps · CI/CD</Tag>
      <H2>
        Push code. <span className="muted">Linux robots do the rest.</span>
      </H2>
      <M variants={up} className="means">
        Continuous Integration & Continuous Deployment pipelines run on headless (no screen!) Linux servers — every commit
        is built, tested and shipped automatically.
      </M>
      <M variants={up}>
        <Pipeline />
      </M>
    </Stage>
  )
}

function AISlide() {
  const lines = [
    ['$ nvidia-smi', ''],
    ['GPU 0: NVIDIA H100   80GB   util 97%', 'c-good'],
    ['$ python train.py --epochs 10', ''],
    ['epoch 1/10  loss 2.31  ████░░░░░░', 'c-dim'],
    ['epoch 10/10 loss 0.42  ██████████', 'c-good'],
  ]
  return (
    <Stage className="split">
      <div>
        <Tag color="#7c5cff">02 · AI & Machine Learning</Tag>
        <H2>
          Training a neural network? <span className="grad">You’re on Linux.</span>
        </H2>
        <div className="ai-list">
          {aiPoints.map((p) => (
            <M variants={up} key={p.title} className="ai-item">
              <span className="ai-g">{p.glyph}</span>
              <div>
                <div className="ai-t">{p.title}</div>
                <div className="verb-d">{p.desc}</div>
              </div>
            </M>
          ))}
        </div>
      </div>
      <M variants={up} className="term">
        <div className="panel-bar">
          <div className="dots">
            <i />
            <i />
            <i />
          </div>
          <span className="panel-cmd">gpu-node-07 · Ubuntu 24.04</span>
        </div>
        <pre className="term-body">
          {lines.map(([l, c], i) => (
            <motion.div key={l} className={c} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 + i * 0.5 }}>
              {l}
            </motion.div>
          ))}
          <div className="ai-agent">
            🤖 An AI agent typed all of these commands itself.
          </div>
        </pre>
      </M>
    </Stage>
  )
}

function MobileSlide() {
  return (
    <Stage className="split">
      <div>
        <Tag color="#fbbf24">03 · Mobile development</Tag>
        <H2>
          Every Android phone is a <span className="grad">Linux computer.</span>
        </H2>
        <M variants={up} className="lede left">
          Android — the most used OS in the world — sits on a modified Linux kernel. Low-level components and drivers need
          Linux knowledge.
        </M>
        <M variants={up} className="backend-card">
          <div className="panel-label" style={{ '--c': '#fbbf24' }}>
            And the backend?
          </div>
          <div className="backend-row">
            <span className="phone-mini">📱</span>
            <span className="dash-line" />
            <span className="api-pill">login · data · payments</span>
            <span className="dash-line" />
            <Tux size={30} />
          </div>
          <div className="verb-d">Even iOS apps call APIs (MBaaS / custom APIs) that run on Linux servers.</div>
        </M>
      </div>
      <div className="android">
        {androidStack.map((l, i) => (
          <motion.div
            key={l.name}
            className={`and-layer ${l.core ? 'core' : ''}`}
            style={{ '--c': l.c }}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + (androidStack.length - i) * 0.18 }}
          >
            <b>{l.name}</b>
            <span>{l.sub}</span>
            {l.core && (
              <span className="and-badge">
                <Tux size={18} /> Linux
              </span>
            )}
          </motion.div>
        ))}
      </div>
    </Stage>
  )
}

function Advantages() {
  return (
    <Stage>
      <Tag>04 · Why every tech field picks Linux</Tag>
      <H2>
        Four superpowers. <span className="muted">Every discipline.</span>
      </H2>
      <div className="bento">
        {advantages.map((a, i) => (
          <M variants={up} key={a.title} className="bento-card static" style={{ '--c': ['#3ddc84', '#22d3ee', '#f472b6', '#fbbf24'][i] }}>
            <span className="adv-g">{a.glyph}</span>
            <span className="bento-title">{a.title}</span>
            <span className="bento-desc">{a.desc}</span>
          </M>
        ))}
      </div>
    </Stage>
  )
}

function TermRun({ c }) {
  const typed = useTyped(c.cmd, 35, 100)
  const done = typed.length === c.cmd.length
  return (
    <pre className="term-body">
      <span className="prompt-user">student@server</span>
      <span className="prompt-sep">:~$</span> {typed}
      {!done && <span className="caret sm" />}
      {done && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="term-out">
          {c.out}
        </motion.div>
      )}
      {done && <div className="term-what"># {c.what}</div>}
    </pre>
  )
}

function TerminalSlide() {
  const [i, setI] = useState(0)
  return (
    <Stage>
      <Tag color="#3ddc84">Try it · click a command</Tag>
      <H2>
        Terminal commands <span className="grad">every developer uses.</span>
      </H2>
      <div className="termlab">
        <M variants={up} className="cmd-list">
          {commands.map((cm, j) => (
            <button key={cm.cmd} className={`cmd-btn ${j === i ? 'on' : ''}`} onClick={() => setI(j)}>
              <code>{cm.cmd.split(' ')[0]}</code>
              <span>{cm.what}</span>
            </button>
          ))}
        </M>
        <M variants={up} className="term">
          <div className="panel-bar">
            <div className="dots">
              <i />
              <i />
              <i />
            </div>
            <span className="panel-cmd">student@server: ~/shop-app</span>
          </div>
          <TermRun key={i} c={commands[i]} />
        </M>
      </div>
    </Stage>
  )
}

/* ═══════════════════════════ PART 2 · SDLC ═══════════════════════════ */

function SDLCIntro() {
  return (
    <Stage className="center">
      <Tag color="#7c5cff">Part 2</Tag>
      <M variants={up} className="mega sm">
        Software Development
        <br />
        <span className="grad">Life Cycle</span>
      </M>
      <M variants={up} className="quote-sub">
        Linux is <span className="hl">where</span> software runs. The SDLC is <span className="hl">how</span> it gets built.
      </M>
      <M variants={up} className="phase-strip">
        {phases.map((p, i) => (
          <span key={p.id} style={{ '--c': p.c }}>
            {p.short}
            {i < phases.length - 1 && <i>→</i>}
          </span>
        ))}
      </M>
    </Stage>
  )
}

function WhatIsSDLC() {
  return (
    <Stage className="split">
      <div>
        <Tag color="#7c5cff">1 · What is SDLC?</Tag>
        <H2>
          A structured process to <span className="grad">plan, build & maintain</span> software.
        </H2>
        <M variants={up} className="def-card">
          <span className="panel-label" style={{ '--c': '#3ddc84' }}>
            Simple definition
          </span>
          <p>
            SDLC is the complete life of software — from understanding the problem and requirements to developing,
            releasing and maintaining the solution.
          </p>
        </M>
        <M variants={up} className="analogy">
          🏠 Like building a house: you don’t start with bricks. You ask what the family needs, plan the budget, draw the
          blueprint, build, inspect, hand over the keys — and fix leaks later.
        </M>
      </div>
      <M variants={up} className="panel helps" style={{ '--c': '#7c5cff' }}>
        <div className="panel-label">Why is it important?</div>
        <ul className="chips">
          {sdlcWhy.map((w, i) => (
            <motion.li key={w} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 + i * 0.08 }}>
              <span className="check">✓</span>
              {w}
            </motion.li>
          ))}
        </ul>
      </M>
    </Stage>
  )
}

function PhasesSlide() {
  const [a, setA] = useState(0)
  const p = phases[a]
  return (
    <Stage>
      <Tag color={p.c}>2 · The 7 phases · click a phase</Tag>
      <div className="phases">
        <M variants={up}>
          <PhaseWheel phases={phases} active={a} onPick={setA} />
        </M>
        <motion.div key={p.id} className="phase-detail" style={{ '--c': p.c }} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }}>
          <div className="pd-top">
            <span className="param-num sm">{String(a + 1).padStart(2, '0')}</span>
            <h3 className="pd-title">{p.title}</h3>
          </div>
          <p className="means">{p.what}</p>
          <div className="pd-row">
            <span className="pd-k">Deliverables</span>
            <div className="pd-chips">
              {p.out.map((o) => (
                <span key={o} className="closing-pill" style={{ '--c': p.c }}>
                  {o}
                </span>
              ))}
            </div>
          </div>
          <div className="pd-linux">
            <div className="pd-k">
              <Tux size={16} /> Linux angle
            </div>
            <p>{p.linux}</p>
            <div className="pd-tools">
              {p.tools.map((t) => (
                <code key={t}>{t}</code>
              ))}
            </div>
          </div>
          <div className="pd-nav">
            <button className="btn-ghost" onClick={() => setA((a - 1 + phases.length) % phases.length)}>
              ← prev phase
            </button>
            <button className="btn-ghost" onClick={() => setA((a + 1) % phases.length)}>
              next phase →
            </button>
          </div>
        </motion.div>
      </div>
    </Stage>
  )
}

function WhatIsModel({ go }) {
  return (
    <Stage>
      <Tag color="#22d3ee">3 · What is an SDLC model?</Tag>
      <H2>
        Same phases. <span className="grad">Different game plan.</span>
      </H2>
      <M variants={up} className="means">
        An SDLC model defines how the phases are <b>organized, sequenced, repeated, reviewed and delivered</b>. The right
        choice depends on requirements, risk, complexity, feedback needs and regulations.
      </M>
      <div className="model-grid">
        {models.map((m, i) => (
          <motion.button variants={up} key={m.id} className="model-chip" style={{ '--c': m.c }} onClick={() => go(slideIndex(`model-${m.id}`))}>
            <span className="bento-num">{String(i + 1).padStart(2, '0')}</span>
            <span className="mc-name">{m.name}</span>
            <span className="mc-memo">{m.memo}</span>
          </motion.button>
        ))}
      </div>
    </Stage>
  )
}

function makeModelSlide(m, i) {
  function ModelSlide() {
    return (
      <Stage>
        <div className="model-head">
          <Tag color={m.c}>
            Model {i + 1} of {models.length}
          </Tag>
          <span className="memo" style={{ '--c': m.c }}>
            💡 {m.name} = {m.memo}
          </span>
        </div>
        <H2>
          <span style={{ color: m.c }}>{m.name}</span> {m.id !== 'vmodel' && 'Model'}
        </H2>
        <M variants={up} className="means">
          {m.def}
        </M>
        <div className="model-body">
          <M variants={up} className="model-vis" style={{ '--c': m.c }}>
            <ModelVisual m={m} />
          </M>
          <M variants={up} className="model-side">
            <div className="pc pro">
              <div className="panel-label" style={{ '--c': '#3ddc84' }}>
                Advantages
              </div>
              {m.pros.map((p) => (
                <div key={p} className="pc-i">
                  <span>+</span>
                  {p}
                </div>
              ))}
            </div>
            <div className="pc con">
              <div className="panel-label" style={{ '--c': '#ff6b81' }}>
                Limitations
              </div>
              {m.cons.map((p) => (
                <div key={p} className="pc-i">
                  <span>−</span>
                  {p}
                </div>
              ))}
            </div>
            <div className="pc ex" style={{ '--c': m.c }}>
              <div className="panel-label">Real example</div>
              <div className="pc-ex">{m.example}</div>
            </div>
          </M>
        </div>
      </Stage>
    )
  }
  return ModelSlide
}

function IterVsIncr() {
  return (
    <Stage>
      <Tag color="#fbbf24">Common exam question</Tag>
      <H2>
        Iterative <span className="muted">vs</span> Incremental
      </H2>
      <div className="ivi">
        <M variants={up} className="ivi-col" style={{ '--c': '#3ddc84' }}>
          <div className="ivi-h">Iterative = refine the whole thing</div>
          <div className="ivi-row">
            {[1, 2, 3].map((l) => (
              <div key={l} className="ivi-cell">
                <MiniSite level={l} />
                <span>v{l}</span>
              </div>
            ))}
          </div>
          <p className="verb-d">Whole website each time — rough sketch → better → polished.</p>
        </M>
        <M variants={up} className="ivi-col" style={{ '--c': '#fbbf24' }}>
          <div className="ivi-h">Incremental = add new pieces</div>
          <div className="ivi-row">
            {[['nav'], ['nav', 'hero', 'grid'], ['nav', 'hero', 'grid', 'cart']].map((parts, l) => (
              <div key={l} className="ivi-cell">
                <MiniSite level={3} parts={parts} />
                <span>+{['Login', 'Products', 'Cart'][l]}</span>
              </div>
            ))}
          </div>
          <p className="verb-d">Each piece is finished and usable — then the next piece is added.</p>
        </M>
      </div>
      <M variants={up} className="analogy center-text">
        In practice, modern teams combine both: every <b>increment</b> is developed and refined through <b>iterations</b>.
      </M>
    </Stage>
  )
}

function Comparison() {
  const [hover, setHover] = useState(null)
  return (
    <Stage>
      <Tag color="#22d3ee">4 · Model comparison</Tag>
      <H2>
        How much <span className="grad">change</span> can each model handle?
      </H2>
      <M variants={up} className="cmp">
        <div className="cmp-row head">
          <span>Model</span>
          <span>Core idea</span>
          <span>Handles requirement changes</span>
          <span>Risk focus</span>
          <span>Typical fit</span>
        </div>
        {comparison.map((r, i) => (
          <motion.div
            key={r.model}
            className={`cmp-row ${hover === i ? 'on' : ''}`}
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(null)}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + i * 0.07 }}
          >
            <b style={{ color: models[i].c }}>{r.model}</b>
            <span className="dim">{r.idea}</span>
            <span className="cmp-bar">
              <i>
                <motion.em
                  initial={{ width: 0 }}
                  animate={{ width: `${(r.change / 4) * 100}%` }}
                  transition={{ delay: 0.6 + i * 0.08, duration: 0.8 }}
                  style={{ background: models[i].c }}
                />
              </i>
              <small>{r.changeL}</small>
            </span>
            <span className="dim">{r.risk}</span>
            <span>{r.fit}</span>
          </motion.div>
        ))}
      </M>
    </Stage>
  )
}

function WaterfallVsAgile() {
  return (
    <Stage>
      <Tag color="#3ddc84">5 · Waterfall vs Agile</Tag>
      <H2>
        One big launch <span className="muted">vs</span> <span className="grad">many small ones.</span>
      </H2>
      <M variants={up}>
        <DeliveryTimeline />
      </M>
      <M variants={up} className="wva">
        <div className="wva-row head">
          <span />
          <span style={{ color: '#22d3ee' }}>Waterfall</span>
          <span style={{ color: '#3ddc84' }}>Agile</span>
        </div>
        {waterfallVsAgile.map(([k, w, a]) => (
          <div key={k} className="wva-row">
            <b>{k}</b>
            <span>{w}</span>
            <span>{a}</span>
          </div>
        ))}
      </M>
    </Stage>
  )
}

function CaseStudy() {
  const [a, setA] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setA((x) => (x + 1) % ecommerce.length), 2600)
    return () => clearInterval(t)
  }, [])
  return (
    <Stage>
      <Tag color="#f472b6">6 · Case study · E-commerce app</Tag>
      <H2>
        Let’s build <span className="grad">ShopKart</span> — phase by phase.
      </H2>
      <div className="case">
        <M variants={up} className="case-tl">
          {ecommerce.map(([ph, d], i) => (
            <button key={ph} className={`case-step ${i === a ? 'on' : ''} ${i < a ? 'past' : ''}`} style={{ '--c': phases[i].c }} onClick={() => setA(i)}>
              <span className="case-dot">{phases[i].glyph}</span>
              <span className="case-txt">
                <b>{ph}</b>
                <span>{d}</span>
              </span>
            </button>
          ))}
        </M>
        <M variants={up} className="case-arch">
          <div className="panel-label" style={{ '--c': '#f472b6' }}>
            Production architecture
          </div>
          <div className="arch">
            <div className="arch-user">🧑 Users (web + mobile)</div>
            <div className="arch-arrow">↓ HTTPS</div>
            <div className="arch-linux">
              <div className="arch-lbl">
                <Tux size={18} /> Linux server / cloud
              </div>
              <div className="arch-boxes">
                <span style={{ '--c': '#22d3ee' }}>⚛ React build · Nginx</span>
                <span style={{ '--c': '#3ddc84' }}>⬢ Node / Express API</span>
                <span style={{ '--c': '#fbbf24' }}>🍃 MongoDB</span>
              </div>
              <div className="arch-docker">all running in Docker containers</div>
            </div>
          </div>
        </M>
      </div>
    </Stage>
  )
}

function Terms() {
  const [flip, setFlip] = useState({})
  return (
    <Stage>
      <Tag color="#7c5cff">7 · Key terms · tap to flip</Tag>
      <H2>
        Speak like a <span className="grad">software engineer.</span>
      </H2>
      <div className="flip-grid">
        {terms.map(([t, d], i) => (
          <motion.button
            variants={up}
            key={t}
            className={`flip ${flip[i] ? 'on' : ''}`}
            onClick={() => setFlip((f) => ({ ...f, [i]: !f[i] }))}
            style={{ '--c': ['#3ddc84', '#22d3ee', '#7c5cff', '#fbbf24', '#f472b6', '#3ddc84'][i] }}
          >
            <span className="flip-in">
              <span className="flip-f">
                <b>{t}</b>
                <small>tap to reveal</small>
              </span>
              <span className="flip-b">{d}</span>
            </span>
          </motion.button>
        ))}
      </div>
      <M variants={up} className="analogy center-text">
        <b>Verification</b>: “Are we building the product <i>right</i>?” · <b>Validation</b>: “Are we building the{' '}
        <i>right</i> product?”
      </M>
    </Stage>
  )
}

function Quiz() {
  const [q, setQ] = useState(0)
  const [pick, setPick] = useState(null)
  const [score, setScore] = useState(0)
  const item = quiz[q]
  const options = ['Waterfall', 'V-Model', 'Spiral', 'Prototype', 'Agile']
  const choose = (o) => {
    if (pick) return
    setPick(o)
    if (o === item.a) setScore((s) => s + 1)
  }
  const nextQ = () => {
    setPick(null)
    setQ((x) => (x + 1) % quiz.length)
  }
  return (
    <Stage>
      <div className="model-head">
        <Tag color="#fbbf24">Quiz · pick the right model</Tag>
        <span className="memo" style={{ '--c': '#fbbf24' }}>
          Q {q + 1}/{quiz.length} · score {score}
        </span>
      </div>
      <motion.div key={q} className="quiz-q" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
        “{item.q}”
      </motion.div>
      <div className="quiz-opts">
        {options.map((o) => {
          const state = !pick ? '' : o === item.a ? 'right' : o === pick ? 'wrong' : 'fade'
          return (
            <button key={o} className={`quiz-o ${state}`} onClick={() => choose(o)}>
              {o}
            </button>
          )
        })}
      </div>
      {pick && (
        <motion.div className={`quiz-why ${pick === item.a ? 'ok' : 'no'}`} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <b>{pick === item.a ? '✔ Correct!' : `✗ Best answer: ${item.a}`}</b> {item.why}
          <button className="btn-ghost" onClick={nextQ}>
            next question →
          </button>
        </motion.div>
      )}
    </Stage>
  )
}

function Revision() {
  const memo = models.map((m) => [m.name, m.memo, m.c])
  return (
    <Stage className="center">
      <Tag>Quick revision</Tag>
      <M variants={up} className="formula">
        SDLC ={' '}
        {phases.map((p, i) => (
          <span key={p.id} style={{ color: p.c }}>
            {p.short}
            {i < phases.length - 1 && <i> → </i>}
          </span>
        ))}
      </M>
      <div className="memo-grid">
        {memo.map(([n, d, c]) => (
          <M variants={up} key={n} className="memo-card" style={{ '--c': c }}>
            <b>{n}</b>
            <span>{d}</span>
          </M>
        ))}
      </div>
      <M variants={up} className="means">
        Note: SDLC is the general lifecycle. Agile is an adaptive approach; <b>Scrum</b>, <b>Kanban</b> and <b>XP</b> are
        Agile frameworks/practices.
      </M>
    </Stage>
  )
}

function Closing({ go }) {
  const typed = useTyped('sudo apt install curiosity && ./keep-building.sh', 40, 600)
  return (
    <Stage className="center">
      <Tag>Next steps</Tag>
      <M variants={up} className="quote">
        Learn the terminal.
        <br />
        <span className="grad">Think in lifecycles.</span>
      </M>
      <M variants={up} className="closing-row">
        <span className="closing-pill" style={{ '--c': '#3ddc84' }}>
          Try WSL, a VM or dual-boot
        </span>
        <span className="closing-pill" style={{ '--c': '#22d3ee' }}>
          Host an app on a Linux cloud VM
        </span>
        <span className="closing-pill" style={{ '--c': '#7c5cff' }}>
          Practice 10 commands daily
        </span>
        <span className="closing-pill" style={{ '--c': '#fbbf24' }}>
          Run your next project in sprints
        </span>
      </M>
      <M variants={up} className="prompt">
        <span className="prompt-user">you@future</span>
        <span className="prompt-sep">:~$</span> {typed}
        <span className="caret" />
      </M>
      <M variants={up}>
        <button className="btn-ghost" onClick={() => go(0)}>
          ↺ back to start
        </button>
      </M>
    </Stage>
  )
}

export const slides = [
  { id: 'title', label: 'intro', Component: TitleSlide, accent: '#3ddc84' },
  { id: 'agenda', label: 'agenda', Component: Agenda, accent: '#7c5cff' },
  { id: 'runs-on-linux', label: 'runs-on-linux', Component: RunsOnLinux, accent: '#3ddc84' },
  { id: 'request', label: 'request-journey', Component: RequestSlide, accent: '#22d3ee' },
  { id: 'web', label: 'web-and-cloud', Component: WebPillars, accent: '#3ddc84' },
  { id: 'containers', label: 'containers', Component: Containers, accent: '#22d3ee' },
  { id: 'cicd', label: 'ci-cd', Component: CICD, accent: '#3ddc84' },
  { id: 'ai', label: 'ai-ml', Component: AISlide, accent: '#7c5cff' },
  { id: 'mobile', label: 'mobile', Component: MobileSlide, accent: '#fbbf24' },
  { id: 'advantages', label: 'advantages', Component: Advantages, accent: '#f472b6' },
  { id: 'terminal', label: 'terminal', Component: TerminalSlide, accent: '#3ddc84' },
  { id: 'sdlc-intro', label: 'sdlc', Component: SDLCIntro, accent: '#7c5cff' },
  { id: 'what-sdlc', label: 'what-is-sdlc', Component: WhatIsSDLC, accent: '#7c5cff' },
  { id: 'phases', label: 'phases', Component: PhasesSlide, accent: '#22d3ee' },
  { id: 'what-model', label: 'models', Component: WhatIsModel, accent: '#22d3ee' },
  ...models.map((m, i) => ({ id: `model-${m.id}`, label: `models/${m.id}`, Component: makeModelSlide(m, i), accent: m.c })),
  { id: 'iter-incr', label: 'iterative-vs-incremental', Component: IterVsIncr, accent: '#fbbf24' },
  { id: 'compare', label: 'comparison', Component: Comparison, accent: '#22d3ee' },
  { id: 'wf-agile', label: 'waterfall-vs-agile', Component: WaterfallVsAgile, accent: '#3ddc84' },
  { id: 'case', label: 'case-study', Component: CaseStudy, accent: '#f472b6' },
  { id: 'terms', label: 'terms', Component: Terms, accent: '#7c5cff' },
  { id: 'quiz', label: 'quiz', Component: Quiz, accent: '#fbbf24' },
  { id: 'revision', label: 'revision', Component: Revision, accent: '#3ddc84' },
  { id: 'closing', label: 'exit', Component: Closing, accent: '#3ddc84' },
]

function slideIndex(id) {
  return slides.findIndex((s) => s.id === id)
}

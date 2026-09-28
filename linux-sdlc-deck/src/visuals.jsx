import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]

/* Animated percentage ring (70–90%+ of web servers). */
export function StatRing({ from = 70, to = 90, label }) {
  const r = 84
  const len = 2 * Math.PI * r
  return (
    <div className="ring">
      <svg viewBox="0 0 200 200" aria-hidden>
        <circle cx="100" cy="100" r={r} className="ring-track" />
        <motion.circle
          cx="100"
          cy="100"
          r={r}
          className="ring-lo"
          strokeDasharray={len}
          initial={{ strokeDashoffset: len }}
          animate={{ strokeDashoffset: len * (1 - to / 100) }}
          transition={{ duration: 1.6, delay: 0.4, ease }}
        />
        <motion.circle
          cx="100"
          cy="100"
          r={r}
          className="ring-hi"
          strokeDasharray={len}
          initial={{ strokeDashoffset: len }}
          animate={{ strokeDashoffset: len * (1 - from / 100) }}
          transition={{ duration: 1.4, delay: 0.3, ease }}
        />
      </svg>
      <div className="ring-center">
        <div className="ring-num">
          {from}–{to}%<sup>+</sup>
        </div>
        <div className="ring-label">{label}</div>
      </div>
    </div>
  )
}

/* Laptop → git push → Linux cloud. */
export function CodeToCloud() {
  return (
    <div className="c2c">
      <div className="c2c-node">
        <div className="c2c-icons">
          <span title="Windows">⊞</span>
          <span title="macOS">⌘</span>
        </div>
        <div className="c2c-box laptop">
          <div className="c2c-screen">
            <span className="c-kw">const</span> app = express()
          </div>
        </div>
        <div className="c2c-cap">You write code here</div>
      </div>
      <div className="c2c-wire">
        <span className="c2c-cmd">git push</span>
        <div className="c2c-line">
          <i />
          <i />
          <i />
        </div>
      </div>
      <div className="c2c-node">
        <div className="c2c-icons">
          <Tux size={26} />
        </div>
        <div className="c2c-box server">
          {[0, 1, 2].map((i) => (
            <div key={i} className="rack">
              <b />
              <b />
              <span />
            </div>
          ))}
        </div>
        <div className="c2c-cap">It runs here — Linux</div>
      </div>
    </div>
  )
}

export function Tux({ size = 40 }) {
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} aria-hidden className="tux">
      <ellipse cx="32" cy="36" rx="20" ry="24" fill="#111" />
      <ellipse cx="32" cy="42" rx="13" ry="16" fill="#f5f5f5" />
      <ellipse cx="25" cy="22" rx="4.5" ry="5.5" fill="#fff" />
      <ellipse cx="39" cy="22" rx="4.5" ry="5.5" fill="#fff" />
      <circle cx="26" cy="23" r="2.2" fill="#111" />
      <circle cx="38" cy="23" r="2.2" fill="#111" />
      <path d="M26 30 Q32 26 38 30 Q32 35 26 30Z" fill="#fbbf24" />
      <ellipse cx="22" cy="60" rx="8" ry="3.5" fill="#fbbf24" />
      <ellipse cx="42" cy="60" rx="8" ry="3.5" fill="#fbbf24" />
    </svg>
  )
}

/* Journey of one HTTP request. */
export function RequestJourney({ nodes }) {
  const [active, setActive] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % nodes.length), 1400)
    return () => clearInterval(t)
  }, [nodes.length])
  return (
    <div className="journey">
      <div className="journey-track">
        <div className="journey-linuxzone">
          <span>
            <Tux size={16} /> Linux servers
          </span>
        </div>
        {nodes.map((n, i) => (
          <button
            key={n.name}
            className={`jnode ${i === active ? 'on' : ''} ${n.linux ? 'lx' : ''}`}
            onClick={() => setActive(i)}
            style={{ '--c': n.c }}
          >
            <span className="jnode-ic">{n.icon}</span>
            <span className="jnode-n">{n.name}</span>
          </button>
        ))}
      </div>
      <motion.div key={active} className="journey-say" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
        <span className="step-n" style={{ '--c': nodes[active].c }}>
          {String(active + 1).padStart(2, '0')}
        </span>
        <b>{nodes[active].name}</b> — {nodes[active].desc}
      </motion.div>
    </div>
  )
}

/* VM vs container stacks. */
export function StackCompare() {
  return (
    <div className="stacks">
      <div className="stack-col">
        <div className="stack-h">Virtual Machines</div>
        <div className="stack-apps">
          {['A', 'B', 'C'].map((a, i) => (
            <motion.div
              key={a}
              className="stack-pile"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
            >
              <div className="layer app">App {a}</div>
              <div className="layer heavy">Guest OS</div>
            </motion.div>
          ))}
        </div>
        <div className="layer mid">Hypervisor</div>
        <div className="layer base">Host OS</div>
        <div className="layer hw">Hardware</div>
        <div className="stack-note bad">Each app carries a full OS → slow boot, GBs of RAM</div>
      </div>
      <div className="stack-col good">
        <div className="stack-h">Containers on Linux</div>
        <div className="stack-apps">
          {['A', 'B', 'C'].map((a, i) => (
            <motion.div
              key={a}
              className="stack-pile"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
            >
              <div className="layer app">App {a}</div>
            </motion.div>
          ))}
        </div>
        <div className="layer mid">Docker Engine</div>
        <div className="layer kernel">
          Linux Kernel <small>namespaces · cgroups</small>
        </div>
        <div className="layer hw">Hardware</div>
        <div className="stack-note ok">Apps share one kernel → start in ms, MBs of RAM</div>
      </div>
    </div>
  )
}

/* Animated CI/CD pipeline with log output. */
export function Pipeline() {
  const stages = [
    { n: 'git push', ic: '⬆', log: '$ git push origin main' },
    { n: 'Build', ic: '⚙', log: 'runner: ubuntu-latest · npm ci && npm run build' },
    { n: 'Test', ic: '🧪', log: '✔ 48 tests passed (Jest)' },
    { n: 'Container', ic: '▣', log: 'docker build -t shop-api:1.4 .' },
    { n: 'Deploy', ic: '🚀', log: 'kubectl rollout → 3/3 pods ready' },
    { n: 'Live', ic: '🌐', log: 'https://shop.example.com  200 OK' },
  ]
  const [step, setStep] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setStep((s) => (s + 1) % (stages.length + 2)), 1100)
    return () => clearInterval(t)
  }, [stages.length])
  return (
    <div className="pipe">
      <div className="pipe-row">
        {stages.map((s, i) => (
          <div key={s.n} className={`pipe-st ${i < step ? 'done' : ''} ${i === step ? 'run' : ''}`}>
            <div className="pipe-ic">{i < step ? '✓' : s.ic}</div>
            <div className="pipe-n">{s.n}</div>
          </div>
        ))}
      </div>
      <div className="term">
        <div className="panel-bar">
          <div className="dots">
            <i />
            <i />
            <i />
          </div>
          <span className="panel-cmd">ci-runner@ubuntu:~/shop</span>
        </div>
        <pre className="term-body sm">
          {stages.slice(0, Math.min(step + 1, stages.length)).map((s, i) => (
            <div key={s.n} className={i === step ? '' : 'c-dim'}>
              {s.log}
            </div>
          ))}
          <span className="caret sm" />
        </pre>
      </div>
    </div>
  )
}

/* ─────────────────────── Model visuals ─────────────────────── */

function Waterfall({ m }) {
  return (
    <div className="wf">
      {m.flow.map((f, i) => (
        <motion.div
          key={f}
          className="wf-step"
          style={{ marginLeft: `${i * 9}%` }}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 + i * 0.22, ease }}
        >
          <span className="wf-i">{i + 1}</span>
          {f}
          {i < m.flow.length - 1 && <span className="wf-drop">↘</span>}
        </motion.div>
      ))}
      <div className="wf-no">✗ no going back upstream without cost</div>
    </div>
  )
}

function VModel({ m }) {
  const W = 620
  const H = 300
  const rows = m.pairs.length
  const y = (i) => 30 + i * 58
  const xl = (i) => 40 + i * 44
  const xr = (i) => W - 40 - i * 44
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="vsvg" role="img" aria-label="V-Model diagram">
      <motion.path
        d={`M ${xl(0)} ${y(0)} L ${W / 2} ${H - 20} L ${xr(0)} ${y(0)}`}
        className="v-path"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.4, delay: 0.3, ease }}
      />
      {m.pairs.map(([l, r], i) => (
        <motion.g key={l} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 + i * 0.25 }}>
          <line x1={xl(i) + 70} y1={y(i)} x2={xr(i) - 70} y2={y(i)} className="v-link" />
          <rect x={xl(i) - 36} y={y(i) - 15} width="128" height="30" rx="8" className="v-box l" />
          <text x={xl(i) + 28} y={y(i) + 5} className="v-t">
            {l}
          </text>
          <rect x={xr(i) - 92} y={y(i) - 15} width="128" height="30" rx="8" className="v-box r" />
          <text x={xr(i) - 28} y={y(i) + 5} className="v-t">
            {r}
          </text>
        </motion.g>
      ))}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 + rows * 0.25 }}>
        <rect x={W / 2 - 44} y={H - 36} width="88" height="30" rx="8" className="v-box c" />
        <text x={W / 2} y={H - 16} className="v-t">
          Coding
        </text>
      </motion.g>
      <text x="16" y={H - 8} className="v-side">
        ← Verification
      </text>
      <text x={W - 16} y={H - 8} className="v-side" textAnchor="end">
        Validation →
      </text>
    </svg>
  )
}

function Cycle({ items, center, c, R = 118, offset = 0 }) {
  const n = items.length
  return (
    <div className="cycle" style={{ '--c': c }}>
      <motion.div className="cycle-ring" animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: 'linear' }} />
      <div className="cycle-center">{center}</div>
      {items.map((it, i) => {
        const a = (i / n) * Math.PI * 2 - Math.PI / 2 + offset
        return (
          <motion.div
            key={it}
            className="cycle-node"
            style={{ left: `calc(50% + ${Math.cos(a) * R}px)`, top: `calc(50% + ${Math.sin(a) * R}px)` }}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + i * 0.12 }}
          >
            <span>{i + 1}</span>
            {it}
          </motion.div>
        )
      })}
    </div>
  )
}

function Iterative({ m }) {
  return (
    <div className="iter-wrap">
      <Cycle items={m.flow} center={<>Repeat<br />↻</>} c={m.c} R={98} />
      <div className="versions">
        {['v1', 'v2', 'v3'].map((v, i) => (
          <motion.div
            key={v}
            className="ver"
            style={{ filter: `blur(${(2 - i) * 0.7}px)`, opacity: 0.7 + i * 0.15 }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.8 + i * 0.3 }}
          >
            <div className="ver-tag">{v}</div>
            <MiniSite level={i + 1} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function Incremental({ m }) {
  return (
    <div className="incr">
      {m.flow.map((f, i) => (
        <motion.div
          key={f}
          className="incr-row"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 + i * 0.35, ease }}
        >
          <span className="incr-rel">Release {i + 1}</span>
          <div className="incr-blocks">
            {m.flow.slice(0, i + 1).map((b, j) => (
              <span key={b} className={`blk ${j === i ? 'new' : ''}`}>
                {b}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  )
}

function Spiral({ m }) {
  // Archimedean spiral path
  const pts = []
  for (let t = 0; t <= Math.PI * 7; t += 0.08) {
    const r = 6 + t * 6.2
    pts.push(`${(150 + r * Math.cos(t)).toFixed(1)},${(150 + r * Math.sin(t)).toFixed(1)}`)
  }
  const q = [
    [m.flow[0], 76, 70],
    [m.flow[1], 224, 70],
    [m.flow[2], 224, 238],
    [m.flow[3], 76, 238],
  ]
  return (
    <svg viewBox="0 0 300 300" className="spiral" role="img" aria-label="Spiral model diagram">
      <line x1="150" y1="10" x2="150" y2="290" className="sp-axis" />
      <line x1="10" y1="150" x2="290" y2="150" className="sp-axis" />
      <motion.polyline
        points={pts.join(' ')}
        className="sp-path"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.6, delay: 0.3, ease: 'easeInOut' }}
      />
      {q.map(([l, x, y], i) => (
        <motion.g key={l} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 + i * 0.3 }}>
          <rect x={x - 52} y={y - 14} width="104" height="28" rx="14" className={`sp-q q${i}`} />
          <text x={x} y={y + 4} className="v-t">
            {l}
          </text>
        </motion.g>
      ))}
      <text x="150" y="154" className="sp-core">
        start
      </text>
    </svg>
  )
}

function Flow({ m, loopFrom, loopTo }) {
  return (
    <div className="flow">
      {m.flow.map((f, i) => (
        <motion.div
          key={f}
          className={`flow-chip ${i >= loopTo && i <= loopFrom ? 'loop' : ''}`}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 + i * 0.15 }}
        >
          <span>{String(i + 1).padStart(2, '0')}</span>
          {f}
        </motion.div>
      ))}
      <div className="flow-loop">↺ repeat {m.flow[loopTo]} → {m.flow[loopFrom]} until users are happy</div>
    </div>
  )
}

function Agile({ m }) {
  return (
    <div className="agile">
      <div className="backlog">
        <div className="backlog-h">Product Backlog</div>
        {['Login', 'Search', 'Cart', 'Wishlist', 'Offers'].map((b, i) => (
          <div key={b} className="bl-item" style={{ opacity: 1 - i * 0.14 }}>
            {b}
          </div>
        ))}
      </div>
      <div className="agile-arrow">→</div>
      <Cycle items={m.flow.slice(1)} center={<>Sprint<br /><small>1–4 weeks</small></>} c={m.c} R={96} offset={Math.PI / 4} />
      <div className="agile-arrow">→</div>
      <div className="ship">
        {[1, 2, 3].map((n) => (
          <motion.div
            key={n}
            className="ship-box"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 + n * 0.3 }}
          >
            📦 Release {n}
          </motion.div>
        ))}
        <div className="backlog-h">Working software, often</div>
      </div>
    </div>
  )
}

export function ModelVisual({ m }) {
  switch (m.id) {
    case 'waterfall':
      return <Waterfall m={m} />
    case 'vmodel':
      return <VModel m={m} />
    case 'iterative':
      return <Iterative m={m} />
    case 'incremental':
      return <Incremental m={m} />
    case 'spiral':
      return <Spiral m={m} />
    case 'prototype':
      return <Flow m={m} loopTo={2} loopFrom={4} />
    case 'agile':
      return <Agile m={m} />
    default:
      return null
  }
}

/* A tiny website mock that gets more "finished" with each level. */
export function MiniSite({ level = 1, parts }) {
  const show = (p) => !parts || parts.includes(p)
  return (
    <div className={`mini lv${level}`}>
      {show('nav') && (
        <div className="mini-nav">
          <i />
          <span />
          <span />
        </div>
      )}
      {show('hero') && <div className="mini-hero" />}
      {show('grid') && (
        <div className="mini-grid">
          <i />
          <i />
          <i />
        </div>
      )}
      {show('cart') && <div className="mini-cart">🛒 Cart</div>}
    </div>
  )
}

/* Circular SDLC phase wheel. */
export function PhaseWheel({ phases, active, onPick }) {
  const n = phases.length
  const R = 150
  return (
    <div className="wheel">
      <svg viewBox="-200 -200 400 400" className="wheel-svg" aria-hidden>
        <circle r={R} className="wheel-track" />
        <motion.circle
          r={R}
          className="wheel-arc"
          style={{ stroke: phases[active].c }}
          strokeDasharray={2 * Math.PI * R}
          animate={{ strokeDashoffset: 2 * Math.PI * R * (1 - (active + 1) / n) }}
          transition={{ duration: 0.6, ease }}
          transform="rotate(-90)"
        />
      </svg>
      <div className="wheel-center">
        <div className="wheel-big">{phases[active].glyph}</div>
        <div className="wheel-lbl">
          Phase {active + 1}/{n}
        </div>
      </div>
      {phases.map((p, i) => {
        const a = (i / n) * Math.PI * 2 - Math.PI / 2
        return (
          <button
            key={p.id}
            className={`wheel-node ${i === active ? 'on' : ''}`}
            style={{ '--c': p.c, left: `calc(50% + ${(Math.cos(a) * R * 100) / 400}%)`, top: `calc(50% + ${(Math.sin(a) * R * 100) / 400}%)` }}
            onClick={() => onPick(i)}
            aria-label={`Phase ${i + 1}: ${p.title}`}
          >
            <span className="wn-i">{i + 1}</span>
            <span className="wn-l">{p.short}</span>
          </button>
        )
      })}
    </div>
  )
}

/* One big release vs many small ones. */
export function DeliveryTimeline() {
  return (
    <div className="tl">
      <div className="tl-row">
        <span className="tl-l">Waterfall</span>
        <div className="tl-bar">
          <motion.div className="tl-fill wf" initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 2.2, delay: 0.3 }} />
          <motion.span className="tl-ship big" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2.5 }}>
            📦
          </motion.span>
        </div>
      </div>
      <div className="tl-row">
        <span className="tl-l">Agile</span>
        <div className="tl-bar">
          <motion.div className="tl-fill ag" initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 2.2, delay: 0.3 }} />
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <motion.span
              key={i}
              className="tl-ship"
              style={{ left: `${(i / 6) * 100}%` }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 + (i / 6) * 2.2 }}
            >
              📦
            </motion.span>
          ))}
        </div>
      </div>
      <div className="tl-axis">
        <span>Start</span>
        <span>time →</span>
        <span>Release</span>
      </div>
    </div>
  )
}

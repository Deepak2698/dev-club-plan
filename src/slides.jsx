import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { parameters, prep } from './content.js'

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

/* ─────────────────────────── 01 · Title ─────────────────────────── */
function TitleSlide() {
  const typed = useTyped('./interview --club=dev --mode=be-yourself', 45, 900)
  return (
    <Stage className="center title-slide">
      <Tag>upGrad School of Technology · Dev Club</Tag>
      <M variants={up} className="mega">
        Dev Club
        <br />
        <span className="grad">Interview</span>
      </M>
      <M variants={up} className="lede">
        What will be evaluated — and how to approach the interview.
      </M>
      <M variants={up} className="prompt">
        <span className="prompt-user">you@sot</span>
        <span className="prompt-sep">:~$</span> {typed}
        <span className="caret" />
      </M>
      <M variants={up} className="hint">
        Press <kbd>→</kbd> or <kbd>Space</kbd> to begin
      </M>
    </Stage>
  )
}

/* ─────────────────────── 02 · What we look for ─────────────────────── */
function LookingFor() {
  const verbs = [
    ['think', 'How you reason through the unfamiliar'],
    ['learn', 'How you pick up what you don’t know yet'],
    ['work with others', 'How you collaborate toward a shared goal'],
    ['contribute', 'What you bring to the domain you chose'],
  ]
  return (
    <Stage className="split">
      <div>
        <Tag>What are we looking for?</Tag>
        <motion.h2 variants={up} className="h2">
          The interview is designed to understand <span className="grad">how you</span>…
        </motion.h2>
      </div>
      <div className="verb-list">
        {verbs.map(([v, d], i) => (
          <M variants={up} key={v} className="verb">
            <span className="verb-i">0{i + 1}</span>
            <div>
              <div className="verb-v">{v}</div>
              <div className="verb-d">{d}</div>
            </div>
          </M>
        ))}
      </div>
    </Stage>
  )
}

/* ─────────────────────── 03 · Four parameters ─────────────────────── */
function Parameters({ go }) {
  return (
    <Stage>
      <Tag>The 4 Parameters</Tag>
      <motion.h2 variants={up} className="h2">
        Four lenses. <span className="muted">One conversation.</span>
      </motion.h2>
      <div className="bento">
        {parameters.map((p, i) => (
          <motion.button
            variants={up}
            key={p.id}
            className="bento-card"
            style={{ '--c': p.accent }}
            onClick={() => go(3 + i)}
            whileHover={{ y: -6 }}
          >
            <span className="bento-num">{p.num}</span>
            <span className="bento-title">
              {p.title} {p.kicker && <span className="muted">{p.kicker}</span>}
            </span>
            <span className="bento-desc">{p.short}</span>
            <span className="bento-go">Deep dive →</span>
          </motion.button>
        ))}
      </div>
    </Stage>
  )
}

/* ─────────────────────── 04–07 · Parameter deep dive ─────────────────────── */
function ParamSlide({ p }) {
  const typed = useTyped(p.cmd, 40, 500)
  return (
    <Stage className="param" key={p.id}>
      <div className="param-head" style={{ '--c': p.accent }}>
        <M variants={up} className="param-num">
          {p.num}
        </M>
        <div>
          <Tag color={p.accent}>Parameter {p.num} / 04</Tag>
          <motion.h2 variants={up} className="h1">
            {p.title} {p.kicker && <span className="muted">{p.kicker}</span>}
          </motion.h2>
          <M variants={up} className="means">
            {p.means}
          </M>
        </div>
      </div>

      <div className="param-body" style={{ '--c': p.accent }}>
        <M variants={up} className="panel">
          <div className="panel-bar">
            <span className="dots">
              <i />
              <i />
              <i />
            </span>
            <span className="panel-cmd">
              $ {typed}
              <span className="caret sm" />
            </span>
          </div>
          <div className="panel-label">How to tackle it</div>
          <ol className="steps">
            {p.tackle.map(([h, d], i) => (
              <motion.li
                key={h}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.09, duration: 0.5 }}
              >
                <span className="step-n">{String(i + 1).padStart(2, '0')}</span>
                <span>
                  <b>{h}</b>
                  <span className="step-d">{d}</span>
                </span>
              </motion.li>
            ))}
          </ol>
        </M>
        <M variants={up} className="panel helps">
          <div className="panel-label">What helps</div>
          <ul className="chips">
            {p.helps.map((h, i) => (
              <motion.li
                key={h}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + i * 0.08 }}
              >
                <span className="check">✓</span>
                {h}
              </motion.li>
            ))}
          </ul>
        </M>
      </div>
    </Stage>
  )
}

/* ─────────────────────── 08 · The one idea ─────────────────────── */
function BigIdea() {
  return (
    <Stage className="center">
      <Tag>Keep one idea in mind</Tag>
      <M variants={up} className="quote">
        You do not need to know <span className="strike">everything</span>.
      </M>
      <M variants={up} className="quote-sub">
        We are interested in <span className="hl">how you think</span>, <span className="hl">how you learn</span>, and{' '}
        <span className="hl">what you are capable of becoming</span>.
      </M>
      <M variants={up} className="examples">
        <span className="examples-label">Real examples count —</span>
        {['projects', 'college activities', 'hobbies', 'volunteering', 'self-learning'].map((e) => (
          <span key={e} className="pill">
            {e}
          </span>
        ))}
      </M>
    </Stage>
  )
}

/* ─────────────────────── 09 · How to prepare ─────────────────────── */
function Prepare() {
  return (
    <Stage>
      <Tag>How to prepare</Tag>
      <motion.h2 variants={up} className="h2">
        Don’t memorize answers. <span className="grad">Prepare real examples</span> and think aloud.
      </motion.h2>
      <div className="prep-grid">
        {prep.map(([h, d, g], i) => (
          <M variants={up} key={h} className="prep-card" whileHover={{ y: -4 }}>
            <div className="prep-top">
              <span className="prep-glyph">{g}</span>
              <span className="prep-i">{String(i + 1).padStart(2, '0')}</span>
            </div>
            <div className="prep-h">{h}</div>
            <div className="prep-d">{d}</div>
          </M>
        ))}
      </div>
    </Stage>
  )
}

/* ─────────────────────── 10 · Be honest (terminal) ─────────────────────── */
function Honest() {
  const good = useTyped('"I do not know yet, but I would learn it by…"', 42, 1400)
  return (
    <Stage className="split">
      <div>
        <Tag>Be honest</Tag>
        <motion.h2 variants={up} className="h2">
          Curiosity beats <span className="grad">confident guessing.</span>
        </motion.h2>
        <M variants={up} className="lede left">
          Saying what you don’t know — and how you’d find out — is a strong answer, not a weak one.
        </M>
      </div>
      <M variants={up} className="term">
        <div className="panel-bar">
          <span className="dots">
            <i />
            <i />
            <i />
          </span>
          <span className="panel-cmd">answer.sh</span>
        </div>
        <pre className="term-body">
          <span className="c-dim"># ✗ avoid</span>
          {'\n'}
          <span className="c-bad">- "Yeah, it's definitely X." </span>
          <span className="c-dim">// a confident guess</span>
          {'\n\n'}
          <span className="c-dim"># ✓ prefer</span>
          {'\n'}
          <span className="c-good">+ {good}</span>
          <span className="caret sm" />
        </pre>
      </M>
    </Stage>
  )
}

/* ─────────────────────── 11 · Closing ─────────────────────── */
function Closing({ go }) {
  return (
    <Stage className="center">
      <Tag>Remember</Tag>
      <M variants={up} className="mega sm">
        Not a test of how much
        <br />
        you <span className="grad">already know.</span>
      </M>
      <M variants={up} className="lede">
        It’s an opportunity to show your interest, thinking, curiosity, and ability to work with others.
      </M>
      <M variants={up} className="closing-row">
        {parameters.map((p) => (
          <span key={p.id} className="closing-pill" style={{ '--c': p.accent }}>
            {p.title}
          </span>
        ))}
      </M>
      <M variants={up} className="closing-actions">
        <a className="btn-ghost primary" href="/guide">
          Open the prep guide & worksheet →
        </a>
        <button className="btn-ghost" onClick={() => go(0)}>
          ↺ Start over
        </button>
      </M>
      <M variants={up} className="signoff">
        All the best! — Dev Club · upGrad School of Technology
      </M>
    </Stage>
  )
}

export const slides = [
  { id: 'intro', label: 'Intro', Component: TitleSlide },
  { id: 'looking-for', label: 'What we look for', Component: LookingFor },
  { id: 'parameters', label: 'The 4 parameters', Component: Parameters },
  ...parameters.map((p) => ({
    id: p.id,
    label: p.title,
    accent: p.accent,
    Component: () => <ParamSlide p={p} />,
  })),
  { id: 'one-idea', label: 'One idea', Component: BigIdea },
  { id: 'prepare', label: 'How to prepare', Component: Prepare },
  { id: 'honest', label: 'Be honest', Component: Honest },
  { id: 'closing', label: 'Closing', Component: Closing },
]

import { useEffect, useState } from 'react'
import { parameters, prep } from '../content.js'
import { checklist, doDont, roles, worksheet } from './roles.js'

const STORE = 'devclub-guide-v1'

function load() {
  try {
    return JSON.parse(localStorage.getItem(STORE)) || {}
  } catch {
    return {}
  }
}

export default function Guide() {
  const [notes, setNotes] = useState(load)

  useEffect(() => {
    try {
      localStorage.setItem(STORE, JSON.stringify(notes))
    } catch {
      // Storage unavailable (private mode): notes just won't persist.
    }
  }, [notes])

  const set = (id, value) => setNotes((n) => ({ ...n, [id]: value }))
  const done = checklist.filter((_, i) => notes[`chk${i}`]).length

  return (
    <div className="g">
      <nav className="g-nav no-print">
        <a className="g-brand" href="/">
          <span className="g-mark">&lt;/&gt;</span>
          <span>
            <b>Dev Club</b>
            <small>upGrad School of Technology</small>
          </span>
        </a>
        <div className="g-nav-links">
          <a href="#parameters">Parameters</a>
          <a href="#roles">Roles</a>
          <a href="#prepare">Prepare</a>
          <a href="#worksheet">Worksheet</a>
          <a href="#checklist">Checklist</a>
        </div>
      </nav>

      <header className="g-hero">
        <span className="g-eyebrow">Dev Club · Interview Prep Guide</span>
        <h1>
          Show us how you <span className="g-grad">think, learn</span> and work with others.
        </h1>
        <p className="g-lede">
          The interview is not a test of how much you already know. It looks at four things: your fit with the domain
          you chose, how you solve problems, how you learn, and how you work in a team. This guide explains each one
          and gives you a worksheet to prepare.
        </p>
        <div className="g-actions no-print">
          <button className="g-btn primary" onClick={() => window.print()}>
            Print / Save as PDF
          </button>
          <a className="g-btn" href="/">
            View the slides →
          </a>
        </div>
        <blockquote className="g-quote">
          You do not need to know everything. We are interested in how you think, how you learn, and what you are
          capable of becoming.
        </blockquote>
      </header>

      <section id="parameters" className="g-section">
        <h2>
          <span className="g-num">01</span> What we evaluate
        </h2>
        <p className="g-sub">Every candidate is assessed on the same four parameters, whatever role you apply for.</p>
        <div className="g-params">
          {parameters.map((p) => (
            <article key={p.id} className="g-param" style={{ '--c': p.accent }}>
              <div className="g-param-head">
                <span className="g-param-num">{p.num}</span>
                <h3>
                  {p.title} {p.kicker}
                </h3>
              </div>
              <p className="g-means">{p.means}</p>
              <div className="g-cols">
                <div>
                  <h4>How to tackle it</h4>
                  <ul>
                    {p.tackle.map(([h, d]) => (
                      <li key={h}>
                        <b>{h}.</b> {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4>What helps</h4>
                  <ul className="g-ticks">
                    {p.helps.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="roles" className="g-section">
        <h2>
          <span className="g-num">02</span> Roles in the club
        </h2>
        <p className="g-sub">
          Part of the conversation is about the role you choose. Be ready to talk about these topics. You don’t need
          to be an expert in all of them.
        </p>
        <div className="g-roles">
          {roles.map((r) => (
            <div key={r.name} className="g-role">
              <h3>{r.name}</h3>
              <ul>
                {r.ready.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="prepare" className="g-section">
        <h2>
          <span className="g-num">03</span> How to prepare
        </h2>
        <p className="g-sub">Don’t memorize answers. Prepare a few real examples and be ready to think aloud.</p>
        <ol className="g-prep">
          {prep.map(([h, d]) => (
            <li key={h}>
              <b>{h}</b>
              <span>{d}</span>
            </li>
          ))}
        </ol>
        <table className="g-dd">
          <thead>
            <tr>
              <th>Do</th>
              <th>Avoid</th>
            </tr>
          </thead>
          <tbody>
            {doDont.map(([d, n]) => (
              <tr key={d}>
                <td>✓ {d}</td>
                <td>✗ {n}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section id="worksheet" className="g-section">
        <h2>
          <span className="g-num">04</span> Your prep worksheet
        </h2>
        <p className="g-sub">
          Fill this in before your interview. Your answers stay in this browser only. Print it or save it as a PDF to
          keep a copy.
        </p>
        <div className="g-sheet">
          {worksheet.map((w) => (
            <label key={w.id} className="g-field">
              <span className="g-field-label">{w.label}</span>
              <span className="g-field-hint">{w.hint}</span>
              <textarea
                rows={4}
                value={notes[w.id] || ''}
                onChange={(e) => set(w.id, e.target.value)}
                placeholder="Write here…"
              />
              <span className="g-field-print print-only">{notes[w.id] || ''}</span>
            </label>
          ))}
        </div>
        <button
          className="g-btn small no-print"
          onClick={() => {
            if (window.confirm('Clear all your worksheet answers and checklist ticks?')) setNotes({})
          }}
        >
          Clear my answers
        </button>
      </section>

      <section id="checklist" className="g-section">
        <h2>
          <span className="g-num">05</span> Interview-day checklist
        </h2>
        <p className="g-sub no-print">
          {done} of {checklist.length} done
        </p>
        <ul className="g-check">
          {checklist.map((c, i) => (
            <li key={c}>
              <label>
                <input type="checkbox" checked={!!notes[`chk${i}`]} onChange={(e) => set(`chk${i}`, e.target.checked)} />
                <span>{c}</span>
              </label>
            </li>
          ))}
        </ul>
      </section>

      <footer className="g-foot">
        <p>All the best! — Dev Club, upGrad School of Technology</p>
        <p className="no-print">
          <a href="/">Back to the presentation</a>
        </p>
      </footer>
    </div>
  )
}

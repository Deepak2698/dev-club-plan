import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { slides } from './slides.jsx'

const total = slides.length

function indexFromHash() {
  const n = parseInt(window.location.hash.replace('#/', ''), 10)
  return Number.isFinite(n) && n >= 1 && n <= total ? n - 1 : 0
}

function Background() {
  const ref = useRef(null)
  useEffect(() => {
    const onMove = (e) => {
      ref.current?.style.setProperty('--mx', `${e.clientX}px`)
      ref.current?.style.setProperty('--my', `${e.clientY}px`)
    }
    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  }, [])
  return (
    <div className="bg" ref={ref} aria-hidden>
      <div className="bg-grid" />
      <div className="orb orb-a" />
      <div className="orb orb-b" />
      <div className="orb orb-c" />
      <div className="bg-spot" />
      <div className="bg-noise" />
    </div>
  )
}

export default function App() {
  const [[index, dir], setState] = useState(() => [indexFromHash(), 0])
  const [overview, setOverview] = useState(false)

  const go = useCallback((next) => {
    setState(([cur]) => {
      const n = Math.max(0, Math.min(total - 1, next))
      return n === cur ? [cur, 0] : [n, n > cur ? 1 : -1]
    })
    setOverview(false)
  }, [])
  const next = useCallback(() => setState(([c]) => (c < total - 1 ? [c + 1, 1] : [c, 0])), [])
  const prev = useCallback(() => setState(([c]) => (c > 0 ? [c - 1, -1] : [c, 0])), [])

  // Keep URL hash in sync so a slide can be linked directly.
  useEffect(() => {
    const h = `#/${index + 1}`
    if (window.location.hash !== h) window.history.replaceState(null, '', h)
  }, [index])
  useEffect(() => {
    const onHash = () => go(indexFromHash())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [go])

  const toggleFullscreen = useCallback(() => {
    if (document.fullscreenElement) document.exitFullscreen?.()
    else document.documentElement.requestFullscreen?.().catch(() => {})
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return
      const k = e.key
      if (['ArrowRight', 'ArrowDown', 'PageDown', ' ', 'Enter'].includes(k)) {
        if (overview && k !== 'Enter') return
        e.preventDefault()
        if (!overview) next()
      } else if (['ArrowLeft', 'ArrowUp', 'PageUp', 'Backspace'].includes(k)) {
        e.preventDefault()
        if (!overview) prev()
      } else if (k === 'Home') go(0)
      else if (k === 'End') go(total - 1)
      else if (k === 'o' || k === 'O' || k === 'g' || k === 'G') setOverview((v) => !v)
      else if (k === 'Escape') setOverview(false)
      else if (k === 'f' || k === 'F') toggleFullscreen()
      else if (/^[1-9]$/.test(k)) go(Number(k) - 1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev, go, overview, toggleFullscreen])

  // Swipe navigation on touch devices.
  const touch = useRef(null)
  const onTouchStart = (e) => {
    touch.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
  }
  const onTouchEnd = (e) => {
    if (!touch.current) return
    const dx = e.changedTouches[0].clientX - touch.current.x
    const dy = e.changedTouches[0].clientY - touch.current.y
    touch.current = null
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) (dx < 0 ? next : prev)()
  }

  const { Component, label, accent } = slides[index]

  return (
    <div className="deck" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd} style={accent ? { '--accent': accent } : undefined}>
      <Background />

      <header className="topbar">
        <button className="brand" onClick={() => go(0)} aria-label="Go to first slide">
          <span className="brand-mark">
            <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden>
              <path d="M8 6 2 12l6 6M16 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="brand-text">
            <b>Dev Club</b>
            <span className="brand-sub">upGrad School of Technology</span>
          </span>
        </button>
        <div className="topbar-mid">
          <span className="crumb">{label}</span>
        </div>
        <div className="topbar-actions">
          <button className="icon-btn" onClick={() => setOverview((v) => !v)} aria-label="Toggle slide overview" title="Overview (O)">
            <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden>
              <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" fill="none" stroke="currentColor" strokeWidth="1.8" />
            </svg>
          </button>
          <button className="icon-btn hide-sm" onClick={toggleFullscreen} aria-label="Toggle fullscreen" title="Fullscreen (F)">
            <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden>
              <path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </header>

      <main className="viewport">
        <AnimatePresence mode="wait" custom={dir} initial={false}>
          <motion.section
            key={index}
            className="slide"
            custom={dir}
            variants={{
              enter: (d) => ({ opacity: 0, x: d * 60, scale: 0.985 }),
              center: { opacity: 1, x: 0, scale: 1 },
              exit: (d) => ({ opacity: 0, x: d * -60, scale: 0.985 }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${total}: ${label}`}
          >
            <Component go={go} />
          </motion.section>
        </AnimatePresence>
      </main>

      <footer className="controls">
        <span className="counter">
          <b>{String(index + 1).padStart(2, '0')}</b>
          <span> / {String(total).padStart(2, '0')}</span>
        </span>
        <div className="dots-nav" role="tablist">
          {slides.map((s, i) => (
            <button
              key={s.id}
              className={`dot ${i === index ? 'on' : ''} ${i < index ? 'past' : ''}`}
              onClick={() => go(i)}
              aria-label={`Go to slide ${i + 1}: ${s.label}`}
              title={s.label}
            />
          ))}
        </div>
        <div className="nav-btns">
          <button className="nav-btn" onClick={prev} disabled={index === 0} aria-label="Previous slide">
            ←
          </button>
          <button className="nav-btn primary" onClick={next} disabled={index === total - 1} aria-label="Next slide">
            →
          </button>
        </div>
      </footer>
      <div className="progress" style={{ transform: `scaleX(${(index + 1) / total})` }} />

      <AnimatePresence>
        {overview && (
          <motion.div
            className="overview"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOverview(false)}
          >
            <div className="overview-head">
              <span>All slides</span>
              <span className="muted">Esc to close</span>
            </div>
            <div className="overview-grid" onClick={(e) => e.stopPropagation()}>
              {slides.map((s, i) => (
                <motion.button
                  key={s.id}
                  className={`ov-card ${i === index ? 'on' : ''}`}
                  style={s.accent ? { '--c': s.accent } : undefined}
                  onClick={() => go(i)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.03 }}
                >
                  <span className="ov-n">{String(i + 1).padStart(2, '0')}</span>
                  <span className="ov-l">{s.label}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

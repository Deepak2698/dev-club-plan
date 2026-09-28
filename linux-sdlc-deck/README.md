# Linux × SDLC — visual deck for students

An interactive, slide-style React presentation that covers:

- **Part 1: Linux in the tech world.** Why your code runs on Linux, the journey of a web request, containers (namespaces + cgroups), CI/CD, AI/ML, Android and mobile backends, Linux's advantages, and a clickable terminal of everyday commands.
- **Part 2: SDLC & SDLC models.** The 7 phases, shown as an interactive wheel with a "Linux angle" for each phase. Then the 7 models (Waterfall, V-Model, Iterative, Incremental, Spiral, Prototype, Agile), each with its own animated diagram. It ends with iterative vs incremental, a comparison table, Waterfall vs Agile, an e-commerce case study, flip-card key terms, a quiz and a quick revision slide.

Built with React + Vite + Framer Motion. Deployed on Vercel (root directory: `linux-sdlc-deck`).

## Controls

| Key | Action |
| --- | --- |
| `→` `Space` `PageDown` | Next slide |
| `←` `PageUp` | Previous slide |
| `1`–`9`, `Home`, `End` | Jump to slide |
| `O` / `G` | Toggle slide overview |
| `F` | Fullscreen |
| Swipe | Navigate on touch devices |

Every slide has its own URL (`/#/14`).

## Develop

```bash
cd linux-sdlc-deck
npm install
npm run dev      # local dev server
npm run build    # production build in dist/
```

Slide copy lives in `src/content.js`. Slide layouts are in `src/slides.jsx` and diagrams in `src/visuals.jsx`.

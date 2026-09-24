# Dev Club Interview — upGrad School of Technology

An interactive, slide-style web presentation of the **Dev Club Interview Guide**: what gets evaluated (Domain Fit, Problem Solving, Learning Agility, Teamwork) and how to prepare.

Built with React + Vite + Framer Motion. Deployed on Vercel.

## Controls

| Key | Action |
| --- | --- |
| `→` `Space` `PageDown` | Next slide |
| `←` `PageUp` | Previous slide |
| `1`–`9`, `Home`, `End` | Jump to slide |
| `O` / `G` | Toggle slide overview |
| `F` | Fullscreen |
| Swipe | Navigate on touch devices |

Every slide has its own URL (`/#/5`), so you can link to a specific slide.

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # production build in dist/
```

Slide copy lives in `src/content.js`; slide layouts in `src/slides.jsx`.

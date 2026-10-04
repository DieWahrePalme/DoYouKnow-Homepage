# DoYouKnow Homepage

Public one-pager for the DoYouKnow app on https://playdoyouknow.com
(landing, plans preview, about, FAQ/support, privacy, imprint).

What we are building and why:
@docs/PRD.md

Look and feel (shared with the app redesign):
@docs/DESIGN-BRIEF.md

Where we left off last time (read first, if it exists):
@docs/HANDOFF.md

## About the user

Moritz is not a professional developer. He often writes from his phone
(Remote Control), in German or English: reply in his language. Explain
simply and give exact commands to paste.

## Stack

- Astro (static), plain CSS. Minimal client JS.
- GitHub Pages via GitHub Actions, custom domain `playdoyouknow.com`.
- Design skills in `~/.claude/skills`: `redesign-existing-projects`,
  `design-taste-frontend`, `frontend-design`, `apple-design`,
  `web-design-guidelines`, `playwright-cli`.

## Rules

- The repo is **public**: no secrets, no private data, no reference
  screenshots from `~/Programming/boss/design-refs/` (one shows bank data).
- **Never invent legal data** (imprint address, prices, company details).
  Ask Moritz.
- No prices or buy buttons: billing doesn't exist yet (PRD §2).
- DNS changes in Cloudflare are done by Moritz. Prepare exact instructions,
  never ask for Cloudflare credentials.
- Commit in small steps. Ask Moritz before pushing, creating repos or
  changing GitHub settings.
- Run `npm run build` (and look at screenshots) before saying something works.
- **Before Moritz ends a session** (or when he says "handoff"), write or
  update `docs/HANDOFF.md` with the current state (short). It is loaded
  automatically at the next start.

## Reference material

`.claude/agents/`, `.claude/skills/` and `.claude/rules/ecc/` are a curated
subset of github.com/affaan-m/ecc (copied from the other projects). Some files
mention React Native/Expo; ignore those parts here.

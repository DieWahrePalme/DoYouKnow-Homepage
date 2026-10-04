# DoYouKnow redesign – design brief (from Moritz, 2026-10-04)

## Goal

Make the app look like a real designer made it: modern, clean, simple, good
UI, **no generic "AI look"**. Layout, components and icons may change.
Features, data, Supabase calls, state and game/streak logic must **not**
change: this is a visual redesign only.

## Direction

- **Dark theme.** Near-black base, neutral dark surfaces for cards and lists.
- **Palette: blue → purple.** Use it mainly in the background and as one
  accent color (active states, primary button). Keep text and surfaces
  neutral, so the colour feels intentional and not like a template.
- **Moving background, like Revolut:** a slow, flowing animated gradient or
  contour-line field in blue/purple behind the content. Subtle, smooth
  (60 fps on the UI thread, Reanimated and/or Skia), pauses when the screen
  isn't focused, and goes static when "Reduce Motion" is on.
- **Mobile only** (iPhone app + mobile web, ~375–430 px wide). No desktop
  layout.

## What Moritz likes in the references

The screenshots are in `~/Programming/boss/design-refs/doyouknow/`. Look at
them locally and **never copy them into the repo**: the repo is public and
`ref-4-revolut-home.png` shows private bank data.

- **Revolut (ref-3, ref-4):** dark canvas with animated contour lines; big
  bold hero text/numbers centred; round icon buttons with a label under each;
  rounded dark cards grouping list rows; pill-shaped search bar at the top;
  **floating pill tab bar** with the active tab as a filled pill.
- **Instagram profile (ref-2):** clean dark profile, stats row (number +
  label), even pill buttons, round story/avatar circles.
- **NFT app concept (ref-1):** bold, confident display type, pill filter
  chips, one strong accent colour, playful framed shapes around the hero
  content, clear big primary action at the bottom.

## Skills to use (installed in ~/.claude/skills)

- `redesign-existing-projects`: audit the current UI first, list the
  generic patterns.
- `design-taste-frontend` and `frontend-design`: pick the direction,
  typography and spacing. Many examples are for web/Tailwind; apply the
  ideas in React Native.
- `apple-design`: iOS HIG checks (touch targets, safe areas, dark mode,
  Dynamic Type, navigation).
- `web-design-guidelines`: final review (rules are for web; apply the
  intent).
- `playwright-cli`: screenshots of the web build at an iPhone viewport
  (e.g. 393×852) to check your own work before showing Moritz.

## Process

1. New branch **`redesign`** from `ios-app`. Small commits. **Don't push or
   merge without Moritz's OK.**
2. Audit + a short design system first: colours, type scale, spacing,
   radii, one icon family (no emojis as icons), the background component,
   tab bar. Show it on **one key screen** (the main card/guess screen),
   take screenshots, and ask Moritz before redesigning the rest.
3. Then the remaining screens, one by one, checking with screenshots each
   time. Moritz tests on his iPhone via Expo Go.
4. Run `npx tsc --noEmit` before saying something works.

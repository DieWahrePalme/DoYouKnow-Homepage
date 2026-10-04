# DoYouKnow Homepage – PRD

## 1. Purpose

A small public one-pager for the DoYouKnow app on **https://playdoyouknow.com**.

- People who google "DoYouKnow app" find it and see what the app is and
  who made it.
- It provides the URLs the App Store requires: **Support URL**
  (`/support`) and **Privacy Policy URL** (`/privacy`).
- It holds the legally required **imprint** (`/imprint`, German law: §5 DDG).
- Language: **English**. Audience: friends and young adults (16–30), mostly
  on phones.

The app itself lives at https://app.playdoyouknow.com (separate repo
`DieWahrePalme/DoYouKnow`). Product context: that repo's `docs/PRD.md`.

## 2. Pages

### `/` – one page, scrolling
1. **Hero:** app name, one-line pitch (daily questions about yourself, guess
   how your friends answered, keep your streak), **"Join the beta"** button
   (public TestFlight link, see §6), secondary "Play in the browser" →
   app.playdoyouknow.com, phone mockup (placeholder until the redesign
   screenshots exist).
2. **How it works:** 3 steps: answer your daily card → guess your
   friends → keep the streak / see how you change.
3. **Plans:** "Free during the beta." Preview of the planned tiers
   **Starter / Medium / Pro** marked "coming soon". **No prices, no buy
   buttons**: billing doesn't exist yet.
4. **About:** who made it (Moritz Götz, an indie project). Short text, see §6.
5. **FAQ:** 5–8 short questions (Is it free? iPhone only? Android? Who sees my
   answers? How do I delete my account? (in-app: Settings) Where is my data
   stored? (EU) How do I join the beta?).
6. **Support:** button "Email support" → `mailto:support@playdoyouknow.com`.
   No contact form.
7. **Footer:** © year · Support · Privacy · Imprint · hello@playdoyouknow.com

### `/support`
FAQ + support email (same content as on `/`, standalone page for the App
Store link).

### `/privacy`
Privacy policy. Source of truth: `src/data/privacyPolicy.ts` in the
DoYouKnow repo (branch `ios-app`, currently German). Show an English
version with the same content and the same "last updated" date. Contact
email on this page: `support@playdoyouknow.com`. Keep it in sync with the
app; if unsure, ask Moritz.

### `/imprint`
Name, postal address, email. **Never invent an address.** Moritz still
has to decide between his home address and an imprint service. Until he
does, leave a clearly marked TODO and don't deploy `/imprint` publicly
without his OK.

## 3. Look

Same design language as the DoYouKnow app redesign (`docs/DESIGN-BRIEF.md`):
dark, blue → purple, subtly animated flowing background (CSS/canvas, pause
on `prefers-reduced-motion`), no generic "AI landing page" look. Mobile
first, but it must also look good on desktop (Google visitors). Use the
design skills listed in the brief.

## 4. Tech

- **Astro** (static HTML: fast, good for Google). Minimal JS.
- SEO basics: title/description per page, Open Graph image, favicon,
  `sitemap.xml`, `robots.txt`, structured data (`SoftwareApplication`).
- Lighthouse ≥ 95 for performance, accessibility, best practices and SEO.
- Use `playwright-cli` for screenshots (390×844 and 1440×900) before showing
  Moritz.

## 5. Hosting

- Public GitHub repo, GitHub Pages via GitHub Actions, custom domain
  `playdoyouknow.com` (+ `www` redirect), HTTPS enforced. The domain is
  already verified in Moritz's GitHub account.
- **DNS switch (only when the site is ready, with Moritz, via boss):** in
  Cloudflare, remove the Redirect Rule "to app" and the two A records
  `@`/`www` → 192.0.2.1. Add A records for `@` → 185.199.108.153,
  185.199.109.153, 185.199.110.153, 185.199.111.153 and CNAME `www` →
  `diewahrepalme.github.io`, all **DNS only** (grey cloud). Don't touch
  MX/TXT/DKIM records (iCloud Mail).
- Before the public launch, everything moves to Cloudflare Pages (boss to-do).

## 6. Open (ask Moritz)

- Imprint address: home address or imprint service?
- About section: just his name, or also a photo and 2–3 sentences?
- Public TestFlight link (`https://testflight.apple.com/join/...`).
- App icon/logo file to use.

## 7. Out of scope

Blog, newsletter, contact form, payments, accounts, analytics with
cookies (if analytics are wanted later: a cookieless option only).

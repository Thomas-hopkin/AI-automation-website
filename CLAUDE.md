# TH Automations — Project Brief

## Business
AI/workflow automation consultancy for service businesses. Founder: Tom Hopkin.
Contact: tomhopkin.systems@gmail.com

**Positioning note:** No fixed niche yet — Tom is doing outreach first to learn which
industries/pain points come up most, then will sharpen positioning later. Until then:
avoid naming specific industries or overly specific workflows in marketing copy, since
that narrows who feels served. Prefer outcome language ("cut manual admin time,"
"fewer no-shows," "faster payments") over step-by-step workflow specifics.

## Audience
Non-technical service-business owners and their staff. No jargon. Explain what a
system does in plain terms — name things by what the client controls/sees, not by
how it's built.

## Voice
First person singular ("I," not "we") — Tom is a solo operator.
Plain, warm, direct. Active voice. No hype/sales language ("premium," "revolutionary").
CTA language: "Book a free automation review" (not "consultation" or "demo call").

## Site structure
Static multi-page site, no framework/build step: `index.html`, `services.html`,
`about.html`, `contact.html`, shared `style.css` and `script.js`.

## Design system
- **Palette (dark theme):** bg `#0F1310`, bg-alt `#161B16`, card `#1A211B`,
  sage-panel `#1E2E27` (solid-fill panels: CTA band, contrast-after card, flow badge —
  use this, not sage-deep, for filled backgrounds), ink `#F3F5EF` (primary text),
  ink-soft `#B9C4BB`, ink-faint `#8A968C`, sage `#6FA08E`, sage-deep `#9CC4B3`
  (both now light accent tones, used as text/icon/border color — not as a fill),
  gold `#D9A441`→`#E4B355` / gold-deep `#F2C878` (primary CTA color; use `--bg` for
  text/icon color sitting on top of gold fills, since bg is the dark tone here), line
  `#2B332C`. `color-scheme: dark` is set on `:root` for native form-control theming.
  All text/background pairs are verified ≥4.5:1 (WCAG AA) — recompute contrast before
  changing any of these values.
- **Type:** Space Grotesk (display/headings), Inter (body), IBM Plex Mono
  (eyebrows, labels, tags — used because the business is literally about systems/steps).
- **Signature element:** a "flow diagram" on the homepage hero — labeled nodes
  connected by arrows, representing a manual process becoming automated. This is
  intentional and central to the brand; don't replace it with generic stat blocks.
- **Hero also has an animated particle-network canvas** (`.hero-canvas`,
  driven by script.js) — drifting dots connected by lines when close together, sage
  lines / gold dots, an ambient extension of the flow-diagram's connected-node motif.
  Respects `prefers-reduced-motion` (draws one static frame, no animation loop) and
  pauses via the Page Visibility API when the tab isn't focused. Keep it subtle —
  it's texture behind the hero copy, not a competing focal point.
- Cards use 14–16px border radius, 1px hairline borders (`--line`), dark elevated
  surfaces (`--card`) with black-based drop shadows / colored glows on hover rather
  than the light-theme's soft dark-on-light shadows.
- Mobile nav collapses into a full-screen panel; respects `prefers-reduced-motion`.

## Current known gaps / open TODOs
1. **Contact form is wired to FormSubmit.co** (`data-form-endpoint` on the `<form>`
   in `contact.html`, pointed at `https://formsubmit.co/ajax/tomhopkin.systems@gmail.com`).
   No account/signup needed for FormSubmit — but the *first* real submission triggers
   a one-time "Activate Form" confirmation email to Tom, which he must click before
   subsequent submissions actually arrive in his inbox. Until activated (or on any
   send failure), the form shows a graceful inline error with a mailto fallback
   rather than a fake success message. Hidden fields set `_subject`, `_template=table`
   (formatted email body), `_captcha=false` (AJAX flow can't render a visible
   captcha), and a `_honey` honeypot field for basic spam filtering.
2. **No Calendly link yet.** Contact page has a placeholder note asking for one.
   Once provided, embed it on `contact.html` (either inline widget or a button linking out).
3. **Testimonials section on the homepage uses real Upwork reviews** (verbatim quotes,
   minor capitalization fixes only), attributed as "Verified Upwork review" since
   Upwork doesn't expose client names on a freelancer's public profile. A personal
   contact's (Juanita's) review is in there anonymized the same way — ask Tom before
   naming her, and there's a second review from her still to add once retrieved.
4. **Case study section on the homepage is intentionally generic** ("a service-business
   client," no industry named, outcome-framed not workflow-framed). Don't make this
   more specific without explicit sign-off — see positioning note above.
5. Services/pricing copy is placeholder-quality and should be revisited once Tom has
   more clarity on his actual service tiers from doing outreach.

## Hosting
Deploys to Vercel as a static site — no build command or output directory needed.
`vercel.json` sets `cleanUrls: true` so `/services` works without the `.html`.

## What NOT to change without asking
- Don't reintroduce specific client industries or detailed step-by-step case studies.
- Don't switch the voice back to "we" — Tom is solo.
- Don't swap out the flow-diagram hero for a generic stats-card layout.
- Don't add AI/tech jargon ("LLM agents," "RAG," "multi-agent") to copy even though
  the site is now dark-themed — the dark-mode pivot was a visual decision only; the
  plain-language, non-technical-audience positioning is unchanged.
- Don't revert the palette back to the light cream theme without Tom explicitly
  asking — the dark theme was his deliberate call, made after being shown the
  tradeoff (a prior version of this site was light-themed; screenshots/history of
  that are in git log if ever needed for reference).

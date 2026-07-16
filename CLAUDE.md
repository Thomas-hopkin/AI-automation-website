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
- **Palette:** bg `#F5F6F1`, bg-alt `#ECEFE7`, ink `#1B2420`, ink-soft `#4E5951`,
  sage `#3E6259` / sage-deep `#2A453D` (primary/CTA-adjacent), gold `#D9A441` /
  gold-deep `#B7842A` (primary CTA color), line `#D9DED3`, card `#FFFFFF`.
- **Type:** Space Grotesk (display/headings), Inter (body), IBM Plex Mono
  (eyebrows, labels, tags — used because the business is literally about systems/steps).
- **Signature element:** a "flow diagram" on the homepage hero — labeled nodes
  connected by arrows, representing a manual process becoming automated. This is
  intentional and central to the brand; don't replace it with generic stat blocks.
- Cards use 14–16px border radius, 1px hairline borders (`--line`), no drop shadows
  beyond a very subtle one on the hero flow card.
- Mobile nav collapses into a full-screen panel; respects `prefers-reduced-motion`.

## Current known gaps / open TODOs
1. **Contact form doesn't send anywhere yet.** It's JS-only (shows a success message
   client-side). Needs a real backend — Formspree is the fastest no-backend option,
   or a Vercel serverless function if more control is wanted.
2. **No Calendly link yet.** Contact page has a placeholder note asking for one.
   Once provided, embed it on `contact.html` (either inline widget or a button linking out).
3. **Case study section on the homepage is intentionally generic** ("a service-business
   client," no industry named, outcome-framed not workflow-framed). Don't make this
   more specific without explicit sign-off — see positioning note above.
4. **Logo is currently hotlinked** from the old Base44-hosted site
   (`media.base44.com/...`). Should eventually be replaced with a self-hosted asset.
5. Services/pricing copy is placeholder-quality and should be revisited once Tom has
   more clarity on his actual service tiers from doing outreach.

## Hosting
Deploys to Vercel as a static site — no build command or output directory needed.
`vercel.json` sets `cleanUrls: true` so `/services` works without the `.html`.

## What NOT to change without asking
- Don't reintroduce specific client industries or detailed step-by-step case studies.
- Don't switch the voice back to "we" — Tom is solo.
- Don't swap out the flow-diagram hero for a generic stats-card layout.

# TH Automations — Website

Static site: Home, Services, About, Contact. No build step required — plain HTML/CSS/JS.

## Structure
```
index.html      Home
services.html   Services
about.html      About
contact.html    Contact
style.css       Shared styles
script.js       Nav toggle + contact form handling
vercel.json     Clean URLs config (e.g. /services instead of /services.html)
```

## Deploy on Vercel
1. Push this repo to GitHub (see below).
2. Go to vercel.com → **Add New Project** → import the GitHub repo.
3. Framework preset: **Other** (or "No framework" / static). No build command, no output directory needed — Vercel will serve the files as-is.
4. Deploy. You'll get a `*.vercel.app` URL; add a custom domain under Project → Settings → Domains once you have one.

## Contact form
The form currently only shows a success message in the browser — it doesn't send anywhere yet. To make it functional, either:
- Swap the `<form>` for a [Formspree](https://formspree.io) or similar endpoint (fastest, no backend needed), or
- Add a Vercel Serverless Function to send the email yourself.

## Calendly
If you want direct booking instead of (or alongside) the form, drop your Calendly link in and it can be embedded on `contact.html`.

# Bloggists — static marketing site

Plain HTML/CSS/JS copy of the public pages (home, services, local SEO, about, contact).
No build step, no framework, no backend. The dashboard stays on Lovable.

## Files
- `index.html`, `services.html`, `local-seo.html`, `about.html`, `contact.html`
- `styles.css` — full design system (navy / orange / teal, Archivo Black + Barlow)
- `site.js` — mobile nav + the two-step contact flow (validate, copy to clipboard, open Fiverr)
- `assets/` — logo, favicon, apple touch icon, hero image
- `sitemap.xml` — sitemap for Google Search Console
- `robots.txt` — allows all crawlers and points to the sitemap
- `.nojekyll` — tells GitHub Pages to serve files as-is

## Publish to GitHub Pages
1. Create a new public repo (for example `bloggists-site`).
2. Upload everything in this folder to the repo root (keep the folder structure of `assets/`).
3. Repo **Settings → Pages → Build and deployment → Deploy from a branch**.
4. Branch `main`, folder `/ (root)`. Save.
5. Live in a minute or two at `https://<username>.github.io/<repo>/`.

## Custom domain
Add a file named `CNAME` containing just your domain (for example `bloggists.com`),
then point a DNS `CNAME` record at `<username>.github.io`. Enable **Enforce HTTPS** in Settings → Pages.

## Editing
Copy lives directly in the HTML. Colors, spacing, and type are all in `styles.css` under `:root`.
No email address appears anywhere — the contact page hands off to Fiverr via clipboard.

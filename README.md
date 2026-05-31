# VividMindGames

The official one-page site for VividMindGames — an indie game studio.
Built with **Next.js 15 (App Router) + React 19 + TypeScript + Tailwind CSS**, with a
**Resend**-powered contact form.

## Sections

Hero → Mission / Philosophy → Featured Games → Meet Our Founders → Contact → Footer.

The hero features the four low-poly character renders cross-fading with a Ken Burns
drift and pointer parallax.

---

## Getting started (local)

```bash
npm install
cp .env.example .env.local   # then fill in the values
npm run dev                  # http://localhost:3000
```

## Environment variables

The contact form sends email through Resend. Set these (never commit real values):

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | API key from https://resend.com/api-keys |
| `CONTACT_TO_EMAIL` | Where form submissions are delivered |
| `CONTACT_FROM_EMAIL` | Verified Resend sender, e.g. `VividMindGames <noreply@vividmindgames.com>` |

The sending domain must be verified in your Resend dashboard. Until these are set,
the form returns a friendly "not configured" message instead of crashing.

---

## Build & run (production)

```bash
npm run build
npm run start      # serves on $PORT (default 3000)
```

## Deploying to Hostinger (Node.js hosting)

1. Push this repo to your Git provider (or upload the files).
2. In hPanel, create/point a **Node.js application** at the project root.
   - Build command: `npm run build`
   - Start command: `npm run start`
   - Node version: 18.18+ (20 or 22 recommended)
3. Add the three environment variables above in the Node app's environment settings.
4. Deploy. The app listens on the `PORT` Hostinger provides.

> The site is a server-rendered Next.js app (the `/api/contact` route needs a Node
> runtime), so use Hostinger's Node.js hosting — not plain static hosting.

---

## Editing content

Almost everything lives in **`src/lib/data.ts`**:

- **Games** — titles, blurbs, status, store links, key art paths.
- **Founders** — names, roles, bios, social links.
- **Socials** — studio social URLs (footer).
- **Hero characters** — the four rotating images.

### Founder photos

Bios currently show initials (`RO`, `EN`) as a placeholder. To add real photos:

1. Drop `founder-richard.jpg` and `founder-ebuka.jpg` into `public/images/`.
2. In `src/lib/data.ts`, set each founder's `photo` to the path
   (e.g. `photo: "/images/founder-richard.jpg"`).

### Assets in `public/images/`

| File | Used for |
| --- | --- |
| `vmg-logo-tile.png` | Header + footer logo |
| `hero-queen.png`, `hero-yellow-mascot.png`, `hero-blue-figure.png`, `hero-soldier.png` | Rotating hero characters |
| `game-battle-for-crown.png` | Battle For Crown card art |
| `game-run-punch.png` | Run Punch card art |
| `og-image.jpg` | Social share preview (replace with branded art when ready) |

Favicons (`favicon.ico`, `apple-touch-icon.png`, etc.) and `site.webmanifest`
live in `public/`.

---

## SEO

- Metadata, Open Graph, and Twitter cards: `src/app/layout.tsx`
- `robots.txt`: `src/app/robots.ts`
- `sitemap.xml`: `src/app/sitemap.ts`

Update the canonical domain in those files if it ever changes from
`https://vividmindgames.com`.

## Notes

- The Run Punch card art is the original promo image, which has a Google Play badge
  baked in. The card also shows real, clickable platform buttons below it. If you want
  a cleaner card, drop in key art without the baked-in badge as `game-run-punch.png`.

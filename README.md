# Leo Club of Dehiwala East — website

Next.js 16 · React 19 · TypeScript · Tailwind CSS v4

**Design concept: *Coastal Grid*.** Everything sits on a visible 12-column grid,
with image blocks allowed to break the grid line — the way a shoreline refuses a
straight edge. The signature move is the **project rail**: projects run along a
horizontal scroll-snap track instead of stacking into a grid of cards.

One of eleven independently designed club sites in Leo District 306 D2. It
shares no design code with the others; only `lib/` is common.

---

## Running it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build
npm run typecheck
npm run lint
```

Node 20.9+ required.

---

## Where things live

| Path | What it is |
|---|---|
| `app/` | Routes, layout, metadata, sitemap, robots |
| `app/globals.css` | **The entire design system** — palette, grid, type, motion |
| `components/` | Components bespoke to this club |
| `content/` | All club content. Normal edits touch only this |
| `lib/` | Domain types, utilities, hooks. Identical across all eleven clubs |
| `public/images/` | Club photography |

---

## The design system

All tokens live in the `@theme` block at the top of `app/globals.css`, named by
**role** rather than hue, so the palette can be retuned without touching a
component.

| Token | Value | Used for |
|---|---|---|
| `--color-page` | `#fbfaf7` | Page background |
| `--color-panel` | `#eef1f0` | Alternate bands |
| `--color-ink` | `#0b2430` | Body text, rules |
| `--color-ink-muted` | `#47606c` | Running copy |
| `--color-ink-faint` | `#7b8f99` | Metadata |
| `--color-accent` | `#10788c` | Links, buttons, kickers — teal carries all interaction |
| `--color-highlight` | `#e6d9c0` | Sand backing blocks. **Never text** — too low contrast |
| `--color-inverse` | `#082a3a` | Stat panel and footer |
| `--color-rule` | `#dde4e6` | Hairlines |

Utilities follow: `bg-page`, `text-ink-muted`, `bg-accent`, `bg-inverse`,
`border-rule`. **Never write a raw hex in a component.**

Type: Space Grotesk (display) + Plus Jakarta Sans (body), self-hosted via
`next/font` in `app/fonts.ts`.

### Layout helpers

- `.wrap` — the single page measure, header included
- `.grid12` — the 12-column grid (6 columns on mobile)
- `.band` — vertical rhythm
- `.rail` — the horizontal scroll-snap project track
- `.reveal` — scroll reveal, drifting in from the right

### The rail

`components/ProjectRail.tsx` is built on **native CSS scroll-snap**, not a
JavaScript carousel. It works with a trackpad, a touch swipe, keyboard arrows
and a screen reader, ships no JS, and cannot break. The markup stays a plain
`<ul>` of links — only the presentation is horizontal.

---

## Editing content

### Add a project

Append to `content/projects.ts`:

```ts
{
  id: 'seawall',
  slug: 'seawall',                // permalink — unique and stable
  title: 'Seawall',
  summary: 'One sentence for listings.',
  story: ['Paragraph one.', 'Paragraph two.'],
  category: 'environment',
  year: '2025/26',
  date: '2026-01-18',             // ISO; drives sorting
  location: 'Dehiwala',
  featured: true,                 // shows on the home rail
  heroImage: { src: '/images/projects/seawall.jpg',
               alt: 'Describe what is happening', width: 1600, height: 1200 },
  impact: [{ id: 'metres', value: 300, suffix: ' m', label: 'Wall repaired' }],
}
```

The route, sitemap entry and OG tags all generate from this.

### Add a board member

Append to `content/board.ts`. Ordering is automatic from `rank`. Members without
a `photo` render with initials, so the roster can go live before photographs do.

### Add images

Drop files in `public/images/…` and give real `width`/`height` — those two
fields are what stop the page jumping as images load. Use `.jpg`/`.webp`;
**HEIC files do not render in browsers.**

---

## Standards this site holds to

- One `<h1>` per page; per-route `<title>`, description, canonical and OG tags.
- Every image through `next/image` inside an aspect-ratio box, with `alt`.
- Keyboard-operable menu: `aria-expanded`/`aria-controls`, Escape closes and
  returns focus, visible focus ring, skip-to-content link.
- `prefers-reduced-motion` respected; all content readable with JavaScript off.
- `typedRoutes` on — a link to a route that does not exist **fails the build**.
- `images.remotePatterns` deliberately empty; leaving it open turns the image
  optimizer into a proxy for any URL on the internet.
- The membership form composes a real pre-filled email rather than silently
  discarding input.

---

## Deploying

Every route prerenders, so any Node host or Vercel works.

1. Set the production origin in `content/club.ts` → `siteUrl`. Canonical URLs,
   OG images, `sitemap.xml` and `robots.txt` all derive from it.
2. `npm run build`
3. `npm start`

---

## Outstanding content

Everything marked `TODO(content)` needs real values from the club: charter date,
board roster, project records, photography and contact details. Images in
`public/images/` are generated solid-colour placeholders. The site renders
correctly while these are incomplete.

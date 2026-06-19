# xianglong.dev

A personal site built with **Astro + Tailwind**, in a clean blue/white style.
It has a real **blog** and an academic-style **projects** page — and you write
everything from a browser editor at `/admin`, no code or backend required.

---

## What's inside

```
src/
  content/
    blog/        ← each post is one Markdown file (edit via /admin)
    projects/    ← each project is one Markdown file (edit via /admin)
  components/    ← Nav, ProjectCard (the "figure left / details right" layout)
  layouts/       ← BaseLayout (shared shell)
  pages/         ← home, /projects, /blog, /blog/[post], rss.xml
  styles/        ← global.css (the blue/white theme lives in tailwind.config.cjs)
public/
  admin/         ← the in-browser content editor (Decap CMS)
  uploads/       ← images you add in the editor land here
```

## Run it locally

```bash
npm install
npm run dev      # http://localhost:4321
```

`npm run build` outputs the static site to `dist/`.

---

## Writing posts from your browser (the whole point)

Once the site is live, go to **`https://your-site/admin`**. You log in, write in
a what-you-see editor, click **Publish**, and the editor commits a Markdown file
to your repo for you. That push rebuilds the site automatically — the post is
live in a minute or two. No terminal, no git, no backend.

You get two editors out of the box: **Blog posts** and **Projects**. For a
project you fill in the title, a corner badge (e.g. `NeurIPS 2024` or
`From Scratch`), a teaser image, links, and bullet points — exactly the
"figure + details" layout you wanted.

To make the editor log-in work, pick one of the two hosting paths below.

---

## Deploy — pick one

### Option A · Netlify (easiest for the `/admin` editor) — recommended

1. Push this repo to GitHub.
2. On Netlify: **Add new site → Import from GitHub**, pick the repo. Build
   command `npm run build`, publish directory `dist`. Deploy.
3. In the Netlify dashboard enable **Identity**, then under Identity →
   **Services** enable **Git Gateway**. Invite yourself as a user.
4. Done. `your-site.netlify.app/admin` is your editor. The default backend in
   `public/admin/config.yml` (`git-gateway`) already matches this.

This path needs zero auth fiddling — that's why it's recommended.

### Option B · GitHub Pages (`MichaelFu627.github.io`)

1. Create a repo named exactly **`MichaelFu627.github.io`** and push this code.
2. Repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.
   The included workflow (`.github/workflows/deploy.yml`) builds and deploys on
   every push to `main`.
3. The site is live, but the `/admin` editor needs a login provider. In
   `public/admin/config.yml`, comment out the `git-gateway` block and switch to
   the `github` backend block. GitHub's backend needs a small OAuth proxy — the
   simplest is a free Cloudflare Worker (search "decap cms cloudflare worker
   oauth"). Until that's set up, you can still publish by editing the Markdown
   files directly.

> Tip: you can host the **site** on GitHub Pages and still do all your **writing**
> on a Netlify-connected copy — but keeping everything on one host is simpler.

---

## Things to personalize

- `astro.config.mjs` → set `site` to your real URL.
- `src/pages/index.astro` → email link, the bio paragraph, social links.
- `src/content/projects/*.md` → replace the four samples with your real repos and
  drop real architecture figures into `public/uploads/` (the placeholder is at
  `public/uploads/placeholder.svg`).
- `src/content/blog/*.md` → delete the three sample posts once you've written your own.

Colors and fonts are centralized in `tailwind.config.cjs`.

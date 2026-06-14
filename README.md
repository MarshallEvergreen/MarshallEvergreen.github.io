# MarshallEvergreen.github.io

Personal website built with Gatsby, React, and Chakra UI. Deployed to GitHub Pages.

## Stack

- **Gatsby 5** — static site generation
- **React 18**
- **Chakra UI v2**

## Development

```shell
npm run develop   # start dev server at http://localhost:1994
npm run build     # production build
npm run deploy    # build and deploy to GitHub Pages (master branch)
```

## Future stack considerations

The current stack was set up in 2021. Some notes for if/when a refresh makes sense:

### Gatsby
Has lost significant mindshare since 2021. Netlify acquired it and development has slowed. For a single-page static site with no dynamic data, it's overkill. Alternatives worth considering:
- **Astro** — ships zero JS by default, great for static content, supports React components, much simpler build pipeline
- **Next.js** — more active ecosystem if staying in the React/SSG world
- **Vite + React** — if SSG isn't needed (fine for a personal site)

### Chakra UI
Peaked around 2022; the community has largely moved on. Alternatives:
- **Mantine** — closest spiritual successor to Chakra, similar "batteries included" DX, actively maintained
- **shadcn/ui** — the dominant trend now; copy-paste components built on Radix UI + Tailwind CSS, you own the code
- **Tailwind CSS** — utility-first, ubiquitous in modern stacks, powers most new projects
- **Radix UI** — unstyled accessible primitives, bring your own styles

For a personal site: Mantine is the lowest-friction swap; Tailwind + shadcn is the "modern way."

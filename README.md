# PilotDrop

PilotDrop is a personal front-end prototype. The concept is that short, AI-generated TV pilots drop on social media and viewers vote on which ones get a full season. This repo is the landing page for that idea: a static catalog of fictional shows, vote clicks that stay in the browser, and a leaderboard.

The page copy is “The Audience Is the Network.” Nothing here generates video, posts to social networks, or saves votes.

## What the page does

The home page (`app/page.tsx`) is a single dark screen with four sections:

- A hero and three counters: total votes, how many shows are marked greenlit, and how many episode records are in the catalog.
- A grid of show cards. Each card shows genre, status, logline, episode count, and a progress bar toward that show’s vote threshold. **Vote** adds one to that show’s count.
- A leaderboard of the top five shows by the current in-session vote count.
- A “How It Works” section with three steps: pilots drop, people vote, and top shows get greenlit. That copy describes the concept. The app does not run those steps.

The catalog lives in `app/data.ts`: ten fictional shows, each with a genre, logline, longer description, seed vote count, a greenlit threshold, a status (`voting`, `greenlit`, or `cancelled`), and a short list of pilot and teaser entries. There are no video files. Seed statuses are fixed in that file. A vote that passes the threshold does not change a show’s status.

Votes are React state on the page. Refreshing the browser restores the seed counts. The header link to `/how-it-works` has no page behind it; the section is on the home page. **Get Notified** has no action wired up.

## Stack

- [Next.js](https://nextjs.org) 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint with `eslint-config-next`
- [Geist](https://vercel.com/font), loaded with `next/font`

There is no database, no API route, and no environment variable to set.

## Run it

Next.js 16 expects Node.js 20.9 or later. This repo uses npm (`package-lock.json`).

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Script | What it does |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Project layout

```
app/
  page.tsx      Home page
  layout.tsx    Header, footer, fonts, and metadata
  data.ts       Show catalog and helpers
  globals.css   Tailwind theme and a few animations
```

`app/data.ts` also exports `getShowBySlug`, `getTopShows`, `getTotalVotes`, `getGreenlitCount`, and `getTotalEpisodes`. The UI does not have per-show routes yet.

## Shows in the demo

| Show | Genre | Seed status |
| --- | --- | --- |
| Neural Drift | Sci-Fi | Greenlit |
| Last Laugh | Comedy | Voting |
| The Verdict | Drama | Greenlit |
| Dead Signal | Thriller | Voting |
| Hollow House | Horror | Voting |
| Match.0 | Romance | Greenlit |
| Built Different | Documentary | Greenlit |
| Pixel Hearts | Animation | Voting |
| Override | Action | Voting |
| The Blind Spot | Mystery | Greenlit |

Built by [Mithun](https://github.com/MithunXcpu).

# Repository Guidelines

## Project Structure & Module Organization
The Next.js App Router lives in `src/app`, with `layout.tsx` handling fonts/meta and `page.tsx` providing the landing experience. Shared UI sits in `src/components` (`layout`, `sections`, `ui`) for shell pieces, slices, and primitives. Reusable logic belongs in `src/hooks` (`useCab...`), while copy blocks, animation presets, and helpers live in `src/lib/data`, `src/lib/animations`, and `src/lib/utils`. Global styles stay in `src/styles/globals.css`, and static assets (logos, favicons, OG images) go in `public/`.

## Build, Test, and Development Commands
- `npm run dev` — runs `next dev --turbopack` with fast HMR for daily work.
- `npm run build` — compiles the production bundle; run before merging to catch type or route issues.
- `npm run start` — serves the optimized build for smoke testing releases.
- `npm run lint` — executes `eslint.config.mjs`; auto-fix with `npm run lint -- --fix`.

## Coding Style & Naming Conventions
Use TypeScript everywhere; prefer `PascalCase` for components (`HeroSection.tsx`), `camelCase` for utilities, and `kebab-case` filenames when a file exports a single React component. Declare props explicitly, and ensure hooks start with `use`. Tailwind v4 powers styling—compose class lists via `clsx` or `tailwind-merge` helpers in `lib/utils` to avoid duplicates. Keep indentation at two spaces, favor descriptive aria labels, and colocate animation configs in `lib/animations` instead of inline literals.

## Testing Guidelines
Automated tests are not yet wired up; when adding them, use `next/jest` with React Testing Library and place specs next to the source as `Component.test.tsx`. Cover layout rendering, form behaviors, and animation toggles. Snapshot tests work for structured data (see `components/layout/StructuredData.tsx`), but pair them with interaction assertions. Until CI exists, run `npm run lint` plus any new test scripts locally and note coverage in the PR body.

## Commit & Pull Request Guidelines
Follow the existing imperative style (`Add`, `Update`) with short subject lines (<50 chars) and detailed bodies when necessary. Each PR should describe the user-facing change, reference related issues, and include screenshots or video for visual tweaks. Call out manual steps (env vars, data seeds) and list the commands you ran (`npm run build`, tests) so reviewers can reproduce results quickly.

## Security & Configuration Tips
Secrets belong in `.env.local`, never in the repo. When introducing new APIs, gate them via `process.env` reads in server components or route handlers and document required keys in the PR. Static assets in `public/` are cached aggressively, so bust the cache by renaming files when replacing imagery.

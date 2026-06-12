@AGENTS.md

# Loopli Template Repo

## What this is
This is a Next.js + Tailwind + shadcn/ui template repository used by the Loopli automated website generation pipeline. When a client submits an intake form, this repo is forked into a new client-specific repo and page files are generated on top of it by AI agents.

## Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion
- Lucide React

## Component system
All reusable section-level components live in /src/components/blocks/
Each file is named after its slug (e.g. hero-split.tsx, contact-form.tsx)
The component-registry.json at the root maps slugs to files and their props

## What the AI agents generate
- /src/app/page.tsx (home page)
- /src/app/about/page.tsx
- /src/app/services/page.tsx
- /src/app/contact/page.tsx
- etc.

Each generated page imports components from /src/components/blocks/ and passes content as props.

## Rules for this project
- Never modify files in /src/components/blocks/ — these are shared across all client sites
- Never hardcode copy or content in page files — always pass as props
- All colours and fonts must use CSS variables from globals.css, not hardcoded values
- Keep page files simple — imports, layout, and prop passing only

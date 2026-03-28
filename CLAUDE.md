# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio/resume website built with Angular 19, Angular Material, and Tailwind CSS. Deployed to Firebase Hosting via GitHub Actions on push to master.

## Commands

- `npm start` — dev server on localhost:4200
- `npm run build` — production build
- `npm test` — run Karma/Jasmine unit tests
- `ng lint` — lint with @angular-eslint
- `ng deploy` — deploy to Firebase Hosting

## Architecture

- **Angular 19 standalone components** — no NgModules; components declare their own imports
- **Routing** defined in `src/app/app-routing.module.ts` with routes: `/` (welcome), `/jokes`, `/cv`, `/dolphin-dog`
- **Styling**: Tailwind CSS utilities + component-scoped CSS + Angular Material indigo-pink theme
- **State**: simple `@Input` props, no external state management
- **Deployment**: Firebase Hosting, auto-deployed on master merge via `.github/workflows/firebase-hosting-merge.yml`

## Conventions

- Component prefix: `app-`
- 2-space indentation, single quotes for TypeScript (see `.editorconfig`)
- Prettier with default config
- TypeScript strict mode enabled with strict templates

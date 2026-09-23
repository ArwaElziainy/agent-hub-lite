# Agent Hub Lite

Hands-on series: building a Next.js companion UI for SAP-related agent tasks (Build with me).

This project is part of a step-by-step learning series for SAP developers exploring modern frontend development with Next.js, while staying aligned with SAP architecture concepts such as CAP and BFF.

This is not a Fiori replacement for core transactional processes.
It is a Custom / Companion UI use case.

## Stack

- Next.js
- TypeScript
- Tailwind CSS

## Getting Started

1. npm install
2. npm run dev
3. Open http://localhost:3000

## Series Progress

### Build with me #1 - Concept and Architecture
- Defined the app idea: Agent Hub Lite
- Clarified the target use case (Companion / Custom UI)
- Architecture: Next.js UI -> BFF (API Routes) -> CAP -> SAP systems

### Build with me #2 - Create the Next.js project
- Created the project using create-next-app
- Enabled TypeScript and Tailwind CSS
- Ran the app locally with npm run dev

### Build with me #3 - First dashboard UI
- Cleaned the default starter page
- Built the first simple Agent Hub Lite screen
- Added static dashboard cards: Active Agents, Open Tasks, Completed

### Build with me #4 - Render a simple tasks list (Mock Data)
- Created app/data/tasks.ts with mock tasks
- Rendered a dynamic task list using map
- Replaced static cards with data-driven UI

## Current Status

- UI foundation is ready
- Tasks list is rendered from mock data
- No SAP/CAP integration yet
- No authentication yet

## Next Steps

- #5 Task details page
- Later: BFF layer, CAP integration, and secure patterns

## Repository

https://github.com/ArwaElziainy/agent-hub-lite
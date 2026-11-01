# Example CLAUDE.md

Copy this to your project root as `CLAUDE.md` (shared with your team) or to
`~/.claude/CLAUDE.md` (just you, every project), then edit it to fit.
Keep it short and specific: every line is read at the start of every session.

## Project overview
A to-do list web app. Plain HTML/CSS/JS, no build step.
See @README.md for setup.

## Commands
- Run locally: open `index.html` in a browser
- Test: `npm test` (run after every change; all tests must pass)
- Lint: `npm run lint`

## Code style
- 2-space indentation, single quotes, semicolons
- Use `const` by default; `let` only when reassigning
- Small functions with clear names; add a one-line comment above non-obvious logic

## Workflow
- Make small, focused changes and explain what you changed
- Commit after each coherent change with a short, descriptive message
- Ask before adding a new dependency

## Don't
- Don't edit anything in `vendor/`
- Don't commit `.env` files or secrets

# Learn Claude Code (from the terminal)

A hands-on course for setting up and using [Claude Code](https://code.claude.com/docs) in your terminal. It goes from "I've never installed it" to having a configured, everyday workflow.

Each lesson is short, ends with a **Try it** exercise, and builds on the one before.

## Who this is for

- You're comfortable typing a few commands, or willing to learn ([Lesson 0](lessons/00-terminal-basics.md) covers the basics).
- You have a paid Claude plan (Pro, Max, Team or Enterprise) or an Anthropic Console account. **The free claude.ai plan doesn't include Claude Code.**

## Course map

| # | Lesson | You'll be able to… |
|---|--------|---------------------|
| 0 | [Terminal basics](lessons/00-terminal-basics.md) | Open a terminal and move between folders |
| 1 | [Install Claude Code](lessons/01-install.md) | Install, verify and update the `claude` command |
| 2 | [Log in and your first session](lessons/02-first-session.md) | Sign in, start a session and ask Claude to work on files |
| 3 | [Project memory with CLAUDE.md](lessons/03-claude-md.md) | Give Claude standing instructions for a project |
| 4 | [Permissions and settings](lessons/04-permissions-and-settings.md) | Control what Claude can do without asking |
| 5 | [Everyday workflow](lessons/05-everyday-workflow.md) | Use slash commands, shortcuts, sessions and one-shot mode |
| 6 | [Connect tools with MCP](lessons/06-mcp.md) | Add external tools (MCP servers) to Claude |
| 7 | [Troubleshooting and uninstalling](lessons/07-troubleshooting.md) | Diagnose problems and cleanly remove Claude Code |

Also in this repo:

- [`cheatsheet.md`](cheatsheet.md): every command from the course on one page
- [`examples/`](examples/): ready-to-copy `CLAUDE.md`, `settings.json` and `.mcp.json` files
- [`practice/`](practice/): a tiny, deliberately buggy project to practice on in Lessons 2–5

## How to use this repo

```sh
git clone <this-repo-url>
cd learn-claude-code
```

Read the lessons in order. When an exercise says to work in `practice/`, run `claude` from inside that folder.

## Conventions

- `$` at the start of a line means "type this in your terminal" (don't type the `$` itself).
- `>` at the start of a line means "type this inside a Claude Code session".
- Commands are shown for **macOS/Linux** first, with **Windows** variants where they differ.

## Accuracy

These lessons were checked against the official docs at <https://code.claude.com/docs> on **2026-11-01**. Claude Code updates often, so if something here disagrees with the docs, trust the docs. A PR fixing it is welcome.

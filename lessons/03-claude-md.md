# Lesson 3: Project memory with CLAUDE.md

Every session starts with a fresh memory. A **`CLAUDE.md`** file is how you give Claude standing instructions. It's loaded automatically at the start of every session.

Use it for things you'd otherwise repeat every time: how to run tests, coding style, "always do X", "never touch Y".

## Where CLAUDE.md files live

| Scope | Location | Who it applies to |
|-------|----------|-------------------|
| **You, everywhere** | `~/.claude/CLAUDE.md` | All your projects on this machine |
| **The project (shared)** | `./CLAUDE.md` or `./.claude/CLAUDE.md` | Everyone. Commit it to git |
| **You, this project** | `./CLAUDE.local.md` | Only you. Add it to `.gitignore` |
| **Organization** | Set up by IT, e.g. `/Library/Application Support/ClaudeCode/CLAUDE.md` on macOS | Everyone in the company |

All the files that apply are **combined**; none of them replaces another. Claude also loads `CLAUDE.md` files from parent folders, and from subfolders when it works in them.

> If a project has an `AGENTS.md` (used by other coding tools) and no `CLAUDE.md`, Claude Code reads `AGENTS.md` instead.

## Generate one with /init

Inside a session, run:

```
> /init
```

Claude scans the project and writes a starting `CLAUDE.md` with build commands, test commands and conventions it finds. If a `CLAUDE.md` already exists, it suggests improvements instead of overwriting it. Read what it wrote and edit it.

## Edit it

- `> /memory` opens your memory files so you can view and edit them.
- Or just open `CLAUDE.md` in any editor. It's plain Markdown.

## Write good instructions

Be **specific and short**. Claude follows clear, concrete rules much more reliably than vague ones.

| ❌ Vague | ✅ Specific |
|---------|-----------|
| Write good code | Use 2-space indentation and single quotes in JS |
| Test things | Run `npm test` after every change. All tests must pass before committing |
| Be careful with the DB | Never run migrations. Ask me first |

See [`examples/CLAUDE.md`](../examples/CLAUDE.md) for a full sample.

## Split large files with imports

A `CLAUDE.md` can pull in other files with `@path`:

```markdown
See @README.md for an overview.
Coding rules: @docs/style-guide.md
```

## Important: memory is guidance, not enforcement

Claude treats `CLAUDE.md` as context and usually follows it, but it isn't a hard lock. To truly **block** an action (for example "never read `.env`"), use a permission rule ([Lesson 4](04-permissions-and-settings.md)).

## Try it

In `practice/`:

1. Start `claude` and run `/init`. Read the `CLAUDE.md` it creates.
2. Add this line to it: `Always add a short comment above any function you change.`
3. Exit and start a new session, then ask: `> add a "Clear all" button`
4. Check whether Claude added the comment, which shows the instruction carried over to a new session.

Next: [Lesson 4: Permissions and settings](04-permissions-and-settings.md)

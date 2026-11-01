# Lesson 5: Everyday workflow

## Starting sessions

| Command | What it does |
|---------|--------------|
| `claude` | New interactive session |
| `claude "explain this project"` | New session that starts with that prompt |
| `claude -c` | **Continue** the most recent conversation in this folder |
| `claude -r` | **Resume**: pick from a list of past sessions |
| `claude -r "auth-refactor"` | Resume a session by name or ID |

## One-shot mode (`-p`)

`-p` ("print") answers once and exits, with no interactive session. It's great for quick questions and scripts:

```sh
$ claude -p "what does the main function in app.js do?"
$ cat error.log | claude -p "explain this error"
$ git diff | claude -p "write a commit message for this diff"
```

## Slash commands (inside a session)

| Command | What it does |
|---------|--------------|
| `/help` | List commands and help |
| `/init` | Create or improve `CLAUDE.md` ([Lesson 3](03-claude-md.md)) |
| `/memory` | Edit memory files |
| `/model` | Switch model |
| `/config` | Settings menu |
| `/permissions` | View and edit permission rules |
| `/status` | Account, model and which settings files loaded |
| `/clear` | Start fresh: wipe the conversation |
| `/compact` | Summarize the conversation to free up context, keeping the gist |
| `/resume` | Switch to a past session |
| `/mcp` | Manage MCP servers ([Lesson 6](06-mcp.md)) |
| `/exit` | Quit |

Type `/` on its own to see the full, searchable list, which includes commands added by plugins and your own.

## Keyboard shortcuts

| Key | Action |
|-----|--------|
| `Esc` | Stop Claude mid-task (your conversation is kept) |
| `Esc` `Esc` | Rewind: jump back to an earlier message |
| `Shift+Tab` | Cycle permission modes |
| `@` | Reference a file: `explain @src/app.js` |
| `!` | Run a shell command directly: `!git status` |
| `↑` / `↓` | Browse your previous prompts |
| `Ctrl+C` twice | Exit |

## Habits that make Claude more effective

1. **Plan before big changes.** Switch to plan mode (Shift+Tab), review the plan, then let it build.
2. **Be specific.** "Fix the login bug where empty passwords are accepted" beats "fix login".
3. **Give it a way to check its work.** "...and run the tests" lets Claude verify the change itself.
4. **Use `/clear` between unrelated tasks.** Old context can confuse a new task, and a fresh start is cheaper.
5. **Commit often.** Use git so any change is easy to undo. You can ask Claude to commit for you.
6. **Put repeated instructions in `CLAUDE.md`**, not in every prompt.

## Try it

In `practice/`:

1. Run a one-shot question:
   ```sh
   $ claude -p "list every function in app.js with a one-line description"
   ```
2. Start `claude`, switch to **plan** mode, and ask: `> let users mark items as done`. Approve the plan.
3. Exit, then run `claude -c` and confirm the conversation is still there.
4. Ask: `> commit these changes with a good message`. If you cloned this repo, `practice/` is already in git. Afterwards, use the reset steps in [`practice/README.md`](../practice/README.md) to start over. (`git reset --hard HEAD~1` undoes the commit.)

Next: [Lesson 6: Connect tools with MCP](06-mcp.md)

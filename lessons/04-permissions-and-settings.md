# Lesson 4: Permissions and settings

## Permission modes

The **mode** decides how often Claude asks before acting. Press **Shift+Tab** to cycle through modes during a session. The current mode is shown at the bottom of the screen.

| Mode | What happens | Good for |
|------|--------------|----------|
| `default` (shown as **Manual**) | Reads freely; asks before edits, shell commands and network access | Learning, unfamiliar code |
| `acceptEdits` | Edits files and runs basic file commands (`mkdir`, `mv`, `cp`…) in your project without asking | When you trust the task and want speed |
| `plan` | Researches and proposes a plan; **edits nothing** until you approve | Big or risky changes: think first |
| `auto` | A safety classifier reviews each action instead of you (when available) | Long tasks with fewer interruptions |
| `dontAsk` | Anything not pre-approved is refused | Scripts and CI |
| `bypassPermissions` | Skips all checks | **Only** in throwaway containers or VMs |

Shift+Tab cycles **default → acceptEdits → plan**, plus `auto` when it's available.

Start a session in a specific mode:
```sh
$ claude --permission-mode plan
```

## Settings files

Settings are JSON files. Where you put a setting decides who it applies to:

| File | Applies to | Commit to git? |
|------|------------|----------------|
| `~/.claude/settings.json` | You, in every project | n/a (it's in your home folder) |
| `.claude/settings.json` | Everyone in this project | ✅ Yes |
| `.claude/settings.local.json` | Only you, in this project | ❌ No |

When the same key is set in more than one place, the **more specific file wins**:

```
managed (organization)  >  command line  >  .claude/settings.local.json  >  .claude/settings.json  >  ~/.claude/settings.json
```

Lists such as `permissions.allow` are **merged** across files, not replaced.

## Permission rules

Under `"permissions"`, you list tool actions to `allow` (never ask), `ask` (always ask) or `deny` (always block):

```json
{
  "$schema": "https://json.schemastore.org/claude-code-settings.json",
  "permissions": {
    "allow": [
      "Bash(npm run lint)",
      "Bash(npm run test *)"
    ],
    "deny": [
      "Read(./.env)",
      "Read(./.env.*)"
    ]
  }
}
```

- `Bash(npm run test *)` allows any command starting with `npm run test`.
- `Read(./.env)` blocks reading that file, even if a `CLAUDE.md` or a prompt says otherwise.
- The `$schema` line gives you autocomplete and error-checking in editors like VS Code.

**Settings files are strict JSON:** no comments and no trailing commas. A syntax error shows up as a *Settings Error* the next time you start Claude Code.

### The easy way: let Claude write rules for you

When Claude asks permission and you pick **"Yes, and don't ask again"**, it saves an `allow` rule to `.claude/settings.local.json` for you. Claude Code also keeps that file out of git automatically.

## Set a default mode

```json
{
  "permissions": {
    "defaultMode": "acceptEdits"
  }
}
```

Put this in `~/.claude/settings.json`. Note that `auto` and `bypassPermissions` **only** work from your user file (or `--permission-mode`), never from a project file. That stops a cloned repo from turning off your safety checks.

## Other ways to change settings

| How | Lasts |
|-----|-------|
| `> /config`: menu for theme, editor mode and more | Saved |
| `> /model`: pick the model | Saved as your default |
| `> /permissions`: view and edit permission rules | Saved |
| `$ claude --model opus`: flag for one session | This session only |
| `$ claude --settings '{"model": "opus"}'`: any key, for one session | This session only |

Changes to settings files apply **immediately**, without a restart, for most keys, including permissions.

## Check what loaded

```
> /status
```

The **Setting sources** line lists which settings files are active. If a setting seems ignored, run `claude doctor` in your shell to see entries it rejected.

## Try it

In `practice/`:

1. Copy the example settings into the project:
   ```sh
   $ mkdir -p .claude && cp ../examples/settings.json .claude/settings.json
   ```
2. Create a fake secret: `$ echo "API_KEY=abc123" > .env`
3. Start `claude` and ask: `> what's in the .env file?` Claude should be blocked from reading it.
4. Press **Shift+Tab** until you're in **plan** mode, then ask: `> add a dark mode`. Notice it proposes a plan instead of editing.
5. Clean up: `$ rm .env` (and `rm -r .claude` if you want to reset).

Next: [Lesson 5: Everyday workflow](05-everyday-workflow.md)

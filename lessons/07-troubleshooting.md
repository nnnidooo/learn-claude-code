# Lesson 7: Troubleshooting and uninstalling

## Your first tool: `claude doctor`

```sh
$ claude doctor
```

It checks your installation, update status and settings files **without starting a session**, and suggests fixes for anything wrong. Run it first whenever something seems off.

Inside a session, `> /status` shows your account, model and which settings files loaded.

## Common problems

### `claude: command not found`

The install folder isn't on your PATH.

1. **Close and reopen your terminal.** This fixes it most of the time.
2. Check that the binary exists. The native installer puts it at `~/.local/bin/claude`:
   ```sh
   $ ls ~/.local/bin/claude
   ```
3. If it's there, add the folder to your PATH. On macOS with zsh:
   ```sh
   $ echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.zshrc
   $ source ~/.zshrc
   ```
   On bash, use `~/.bashrc` instead.

### Login problems

```sh
$ claude auth status --text   # who am I logged in as?
$ claude auth logout
$ claude auth login
```

Remember: the **free** claude.ai plan doesn't include Claude Code.

### "Settings Error" when starting

A settings file has invalid JSON, usually a trailing comma or a `//` comment. Claude Code offers to help fix it. Afterwards, `claude doctor` lists the exact problem.

### A setting or permission rule seems ignored

1. `> /status`: did the file load?
2. Is a more specific file overriding it? See [precedence in Lesson 4](04-permissions-and-settings.md#settings-files).
3. `$ claude doctor`: was the entry rejected?

### Claude isn't following my CLAUDE.md

- Make the instruction more **specific** and **shorter**.
- Check that the file is in a location that loads ([Lesson 3](03-claude-md.md#where-claudemd-files-live)). Run `> /memory` to see which files are loaded.
- For something that must **never** happen, use a `deny` permission rule instead.

### npm install permission errors

Don't use `sudo`. Switch to the native installer instead ([Lesson 1](01-install.md)).

## Uninstall

### 1. Remove the program

| Installed with | Remove with |
|----------------|-------------|
| Native (macOS/Linux) | `rm -f ~/.local/bin/claude && rm -rf ~/.local/share/claude` |
| Native (Windows) | `Remove-Item "$env:USERPROFILE\.local\bin\claude.exe" -Force` then `Remove-Item "$env:USERPROFILE\.local\share\claude" -Recurse -Force` |
| Homebrew | `brew uninstall --cask claude-code` |
| WinGet | `winget uninstall Anthropic.ClaudeCode` |
| npm | `npm uninstall -g @anthropic-ai/claude-code` |

### 2. (Optional) Remove your settings and history

> ⚠️ This deletes all your settings, permission rules, MCP servers and session history.

```sh
$ rm -rf ~/.claude
$ rm ~/.claude.json
```

The VS Code extension, JetBrains plugin and Desktop app also use `~/.claude/`, so uninstall those first if you want a full cleanup.

## Where to go next

- Official docs: <https://code.claude.com/docs>
- Bigger topics to explore: **hooks** (run your own scripts automatically on events), **subagents**, **skills** and **plugins**.

## Final exercise

1. Run `claude doctor` and make sure everything is green.
2. Add your personal preferences to `~/.claude/CLAUDE.md` (see the example in [`examples/CLAUDE.md`](../examples/CLAUDE.md)).
3. Set a default permission mode in `~/.claude/settings.json`.
4. Use Claude Code on a real project of your own. 🎉

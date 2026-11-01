# Claude Code Cheat Sheet

## Install and maintain (shell)

| Command | Purpose |
|---------|---------|
| `curl -fsSL https://claude.ai/install.sh \| bash` | Install (macOS/Linux/WSL) |
| `irm https://claude.ai/install.ps1 \| iex` | Install (Windows PowerShell) |
| `brew install --cask claude-code` | Install with Homebrew |
| `winget install Anthropic.ClaudeCode` | Install with WinGet |
| `claude --version` | Check it's installed |
| `claude doctor` | Health check (install, updates, settings) |
| `claude update` | Update now |

## Sign in (shell)

| Command | Purpose |
|---------|---------|
| `claude auth login` | Sign in |
| `claude auth status --text` | Who am I logged in as? |
| `claude auth logout` | Sign out |

## Start a session (shell)

| Command | Purpose |
|---------|---------|
| `claude` | Interactive session in the current folder |
| `claude "prompt"` | Start with a prompt |
| `claude -c` | Continue the last conversation here |
| `claude -r` | Pick a past session to resume |
| `claude -p "prompt"` | Answer once and exit |
| `cat file \| claude -p "prompt"` | Pipe content in |
| `claude --model opus` | Choose the model for this session |
| `claude --permission-mode plan` | Start in a permission mode |

## Inside a session

| Type | Purpose |
|------|---------|
| `/help` | Help and list of commands |
| `/init` | Generate `CLAUDE.md` |
| `/memory` | Edit memory files |
| `/model` | Switch model |
| `/config` | Settings menu |
| `/permissions` | Permission rules |
| `/status` | Account, model, loaded settings |
| `/clear` | Fresh conversation |
| `/compact` | Summarize to save context |
| `/resume` | Switch to a past session |
| `/mcp` | MCP server status and sign-in |
| `/exit` | Quit |
| `@file` | Reference a file |
| `!cmd` | Run a shell command yourself |

## Keys

| Key | Action |
|-----|--------|
| `Esc` | Stop Claude |
| `Esc` `Esc` | Rewind to an earlier message |
| `Shift+Tab` | Cycle modes: default → acceptEdits → plan (→ auto) |
| `Ctrl+C` ×2 | Exit |

## MCP (shell)

| Command | Purpose |
|---------|---------|
| `claude mcp add --transport http <name> <url>` | Add a remote server |
| `claude mcp add <name> -- <command> [args]` | Add a local server |
| `--scope local\|project\|user` | Where to save it |
| `claude mcp list` / `get <name>` / `remove <name>` | Manage servers |

## Files

| Path | What |
|------|------|
| `~/.claude/CLAUDE.md` | Your instructions, all projects |
| `./CLAUDE.md` | Project instructions (commit) |
| `./CLAUDE.local.md` | Your project instructions (gitignore) |
| `~/.claude/settings.json` | Your settings, all projects |
| `.claude/settings.json` | Project settings (commit) |
| `.claude/settings.local.json` | Your project settings (gitignored) |
| `.mcp.json` | Shared project MCP servers (commit) |

**Settings precedence (highest first):** managed → command line → `settings.local.json` → project `settings.json` → user `settings.json`

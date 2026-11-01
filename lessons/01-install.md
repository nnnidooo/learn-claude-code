# Lesson 1: Install Claude Code

## Check the requirements

- **OS:** macOS 13+, Windows 10 (1809+), Ubuntu 20.04+, Debian 10+ or Alpine 3.19+
- **Hardware:** 4 GB+ RAM, x64 or ARM64
- **Internet connection**, in a [supported country](https://www.anthropic.com/supported-countries)
- **Account:** Pro, Max, Team, Enterprise or Console. The free plan won't work.

## Install (pick one)

### Option A: Native installer (recommended)

It updates itself automatically in the background.

**macOS / Linux / WSL:**
```sh
$ curl -fsSL https://claude.ai/install.sh | bash
```

**Windows PowerShell:**
```powershell
PS> irm https://claude.ai/install.ps1 | iex
```

**Windows CMD:**
```bat
C:\> curl -fsSL https://claude.ai/install.cmd -o install.cmd && install.cmd && del install.cmd
```

> The installer shows **no progress bar** while downloading. Give it a minute.
>
> Wrong shell on Windows? `'irm' is not recognized` means you're in CMD, and `The token '&&' is not a valid statement separator` means you're in PowerShell. Use the other command.

### Option B: Homebrew (macOS/Linux)
```sh
$ brew install --cask claude-code         # stable channel (about a week behind, skips bad releases)
$ brew install --cask claude-code@latest  # newest releases immediately
```
Homebrew installs **don't** auto-update. Run `brew upgrade claude-code` yourself.

### Option C: WinGet (Windows)
```powershell
PS> winget install Anthropic.ClaudeCode
```
Update with `winget upgrade Anthropic.ClaudeCode`.

### Option D: npm
Needs Node.js 22+.
```sh
$ npm install -g @anthropic-ai/claude-code
```
**Never use `sudo`** with this. It causes permission problems and stops auto-updates.

## Verify

Open a **new** terminal window, so it picks up the updated PATH, then run:

```sh
$ claude --version
2.1.xxx (Claude Code)
```

If you see `command not found`, the install folder isn't on your PATH yet. Close and reopen the terminal first. If that doesn't fix it, see [Lesson 7](07-troubleshooting.md#claude-command-not-found).

For a full health check that doesn't start a session:
```sh
$ claude doctor
```

## Keep it updated

| Installed with | Update by |
|----------------|-----------|
| Native installer | Automatic, or run `claude update` to update now |
| Homebrew | `brew upgrade claude-code` |
| WinGet | `winget upgrade Anthropic.ClaudeCode` |
| npm | `npm install -g @anthropic-ai/claude-code@latest` |

## Windows note

Installing [Git for Windows](https://git-scm.com/downloads/win) is recommended. Without it, Claude runs commands in PowerShell instead of Bash. If your projects use Linux tooling, install Claude Code inside **WSL** instead, using the macOS/Linux command.

## Try it

1. Install with Option A.
2. Open a new terminal and run `claude --version`.
3. Run `claude doctor` and read through the output. Any warnings come with suggested fixes.

Next: [Lesson 2: Log in and your first session](02-first-session.md)

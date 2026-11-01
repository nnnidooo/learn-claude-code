# Lesson 0: Terminal basics

Claude Code runs in a terminal, a text window where you type commands. You only need a handful of them.

## Open a terminal

| System | How |
|--------|-----|
| macOS | Press `Cmd+Space`, type **Terminal**, press Enter |
| Windows | Press the Start key, type **PowerShell**, press Enter |
| Linux | Usually `Ctrl+Alt+T`, or find **Terminal** in your apps |

On Windows, the prompt starts with `PS C:\…` in PowerShell, and with just `C:\…` in the older CMD. This matters for the install command in Lesson 1.

## Five commands you'll use

| Command | What it does | Example |
|---------|--------------|---------|
| `pwd` | Show which folder you're in ("print working directory") | `$ pwd` |
| `ls` | List files in the current folder (`dir` in CMD) | `$ ls` |
| `cd <folder>` | Move into a folder | `$ cd Documents` |
| `cd ..` | Move up one folder | `$ cd ..` |
| `mkdir <name>` | Create a folder | `$ mkdir my-project` |

Two habits that save time:

- Press **Tab** to auto-complete file and folder names.
- Press **↑** to bring back the previous command.

## Why the folder matters

When you start Claude Code, it works in **the folder you're in**. It can read and edit files there, and it asks before going anywhere else. So always `cd` into your project before running `claude`.

## Try it

1. Open a terminal.
2. Run `pwd` to see where you are.
3. Make a practice folder and move into it:
   ```sh
   $ mkdir claude-sandbox
   $ cd claude-sandbox
   $ pwd
   ```
4. The last `pwd` should end in `claude-sandbox`.

Next: [Lesson 1: Install Claude Code](01-install.md)

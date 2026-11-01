# Lesson 2: Log in and your first session

## Start Claude Code

Move into a project folder first (see [Lesson 0](00-terminal-basics.md#why-the-folder-matters)), then start it:

```sh
$ cd learn-claude-code/practice
$ claude
```

The first time, Claude Code will:

1. **Ask you to log in.** A browser window opens. Sign in with your Claude account and approve. Back in the terminal, you're in.
2. **Ask whether you trust this folder.** Say yes only for folders you know. A project can include settings that affect what Claude does.

Other ways to sign in:
```sh
$ claude auth login            # sign in from the shell
$ claude auth login --console  # use Anthropic Console (API billing) instead of a subscription
$ claude auth status --text    # check who you're logged in as
$ claude auth logout
```

If you have an `ANTHROPIC_API_KEY` environment variable set, Claude Code offers to use it instead of the browser login.

## Talk to it

You're now at a prompt. Type in plain English and press Enter:

```
> what does this project do?
```

Claude reads the files and answers. Nothing is changed yet, because **reading doesn't need permission, but editing and running commands do.**

Now ask for a change:

```
> the "Add" button doesn't add items. find the bug and fix it
```

Before editing, Claude shows you the change and asks permission. You'll see options like:

- **Yes**: allow this one change
- **Yes, and don't ask again…**: allow this kind of action for the rest of the session or project
- **No**: refuse, and say what to do instead

You're always in control. Press **Esc** at any time to stop Claude mid-task.

## Three things to know right away

| Do this | How |
|---------|-----|
| Point at a specific file | Type `@` and start typing a filename: `> explain @app.js` |
| Run a shell command yourself | Start with `!`: `> !ls` |
| Get help | `> /help` |

## Exit

Type `/exit`, or press `Ctrl+C` twice.

## Try it

In `practice/`:

1. Start `claude`, log in, and trust the folder.
2. Ask: `> what does this project do?`
3. Ask it to find and fix the bug in the to-do list. Approve the edit.
4. Open `practice/index.html` in your browser and confirm adding items now works.
5. Exit with `/exit`.

> Want to repeat the exercise? From inside `practice/`, run `git checkout -- .` to restore the buggy version.

Next: [Lesson 3: Project memory with CLAUDE.md](03-claude-md.md)

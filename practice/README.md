# Practice project

A tiny to-do list app to practice on in Lessons 2–5. **It has a deliberate bug**, so don't fix it by hand: that's Claude's job in [Lesson 2](../lessons/02-first-session.md).

Open `index.html` directly in a browser to try it. There's no build step and no server.

Always start Claude Code from **inside** this folder:

```sh
$ cd practice
$ claude
```

To reset the project to its original buggy state at any time (from inside `practice/`):

```sh
$ git checkout -- . && git clean -fd .
```

`git clean` deletes new files you or Claude created here, such as a `CLAUDE.md` from Lesson 3.

<details>
<summary>Spoiler: what's the bug?</summary>

The form's `submit` handler never calls `event.preventDefault()`, so the browser reloads the page and the new item disappears instantly.

</details>

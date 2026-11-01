# Lesson 6: Connect tools with MCP

**MCP (Model Context Protocol)** lets Claude Code use outside tools and data, such as your issue tracker, a database, docs or a design tool. Each integration is an **MCP server**.

There are two kinds:

| Kind | Runs | Example |
|------|------|---------|
| **Remote (HTTP)** | On the provider's servers. You just give a URL | Notion, Sentry, Stripe |
| **Local (stdio)** | As a program on your machine | A filesystem or database tool run with `npx` |

## Add a server

**Remote:**
```sh
$ claude mcp add --transport http notion https://mcp.notion.com/mcp
```

**Local** (everything after `--` is the command that starts the server):
```sh
$ claude mcp add --transport stdio airtable --env AIRTABLE_API_KEY=YOUR_KEY \
    -- npx -y airtable-mcp-server
```

> The `--` matters. Without it, Claude Code would try to read the server's own flags as its own.

## Choose a scope

| Scope | Flag | Available in | Stored in |
|-------|------|--------------|-----------|
| Local *(default)* | `--scope local` | This project, just you | `~/.claude.json` |
| Project | `--scope project` | This project, everyone | `.mcp.json` (commit it) |
| User | `--scope user` | All your projects | `~/.claude.json` |

```sh
$ claude mcp add --transport http --scope user notion https://mcp.notion.com/mcp
```

See [`examples/.mcp.json`](../examples/.mcp.json) for what a shared project file looks like.

## Manage servers

```sh
$ claude mcp list           # list all servers
$ claude mcp get notion     # details for one
$ claude mcp remove notion  # remove it
```

Inside a session, `> /mcp` shows each server's status and lets you **sign in** to servers that need it (most remote ones use your browser to log in).

## Use it

Once a server is connected, just ask in plain English:

```
> what are my open Notion tasks for this week?
```

Claude asks permission the first time it uses each new tool, just like with file edits.

## Safety

Only add MCP servers you trust. A server can read whatever you give it access to, and can return content that tries to steer Claude. Prefer servers from the official provider.

## Try it

1. Pick a service you already use that offers an official MCP server (check its docs for "MCP").
2. Add it at **user** scope with `claude mcp add`.
3. Start `claude`, run `/mcp`, and complete the sign-in.
4. Ask Claude a question that needs that service.
5. Run `claude mcp list` to confirm it's there, then `claude mcp remove <name>` if you don't want to keep it.

Next: [Lesson 7: Troubleshooting and uninstalling](07-troubleshooting.md)

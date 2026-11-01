# Examples

Ready-to-copy config files used in the lessons. Each one is a starting point, so edit it to fit your project.

| File | Copy to | Lesson |
|------|---------|--------|
| [`CLAUDE.md`](CLAUDE.md) | `./CLAUDE.md` or `~/.claude/CLAUDE.md` | [3](../lessons/03-claude-md.md) |
| [`settings.json`](settings.json) | `./.claude/settings.json` (shared project rules) | [4](../lessons/04-permissions-and-settings.md) |
| [`user-settings.json`](user-settings.json) | `~/.claude/settings.json` (your personal defaults) | [4](../lessons/04-permissions-and-settings.md) |
| [`.mcp.json`](.mcp.json) | `./.mcp.json` (shared MCP servers) | [6](../lessons/06-mcp.md) |

**Don't overwrite an existing file blindly.** If `~/.claude/settings.json` already exists, merge the keys in by hand. Settings files are strict JSON: no comments, no trailing commas.

`.mcp.json` reads secrets from your environment (`${AIRTABLE_API_KEY}`), so the real key never gets committed.

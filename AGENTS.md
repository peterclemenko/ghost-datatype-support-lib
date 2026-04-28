# agents.md

## package management
always use pnpm not npm

## testing
always create tests using mocha-skill
never edit the files in test/testfiles

## documentation
always document according to jsdoc-typescript-docs skill

## project structure
/src/filetypes contains typecript files containing classes for each supported file type


<!-- ardrive-export:start -->
this file contains an ardrive csv import class
src/filetypes/ardrive-export.ts

this file is an example csv file for testing and schema reference
test/testfiles/ardrive-export.csv

see ardrive-export:example for file schema

<!-- ardrive-export:example:start -->
File Id,File Name,Parent Folder ID,Parent Folder Name,Data Transaction ID,Metadata Transaction ID,File Size,Date Created,Last Modified,Direct Download Link,Status
39a551f7-ec03-4b02-afb4-71f32eb22cf8,New Text Document (2).txt,2c319f72-2aa7-49d3-a8a3-047d09bc59a2,export-test,7yb4bnn8keLA7-0LWW02yyoJ61Krkuttx39FEp74E9o,qxF0611nmzxgoYmb8ex4wEzlEKIk_N5UVRRc4bRKqKY,10,2026-04-28 08:50:42.000,2026-04-28 08:50:15.000,https://ardrive.net/7yb4bnn8keLA7-0LWW02yyoJ61Krkuttx39FEp74E9o,pending
4ca1c067-33b1-423b-a0e9-39a35f551f37,New Text Document.txt,2c319f72-2aa7-49d3-a8a3-047d09bc59a2,export-test,-7GFEnCxfs098bNn5XpKfQpzJ2CCT-vlJ0AbOStchn0,ie8Ji4wxHTyaS9H2EIPtpkO77lMQ7XUH8oWMbrM6t3g,9,2026-04-28 08:50:42.000,2026-04-28 08:50:10.000,https://ardrive.net/-7GFEnCxfs098bNn5XpKfQpzJ2CCT-vlJ0AbOStchn0,pending

<!-- ardrive-export:example:end -->
<!-- ardrive-export:end -->

<!-- gitnexus:start -->
# GitNexus — Code Intelligence

This project is indexed by GitNexus as **ghost-datatype-support-lib** (253 symbols, 347 relationships, 13 execution flows). Use the GitNexus MCP tools to understand code, assess impact, and navigate safely.

> If any GitNexus tool warns the index is stale, run `npx gitnexus analyze` in terminal first.

## Always Do

- **MUST run impact analysis before editing any symbol.** Before modifying a function, class, or method, run `gitnexus_impact({target: "symbolName", direction: "upstream"})` and report the blast radius (direct callers, affected processes, risk level) to the user.
- **MUST run `gitnexus_detect_changes()` before committing** to verify your changes only affect expected symbols and execution flows.
- **MUST warn the user** if impact analysis returns HIGH or CRITICAL risk before proceeding with edits.
- When exploring unfamiliar code, use `gitnexus_query({query: "concept"})` to find execution flows instead of grepping. It returns process-grouped results ranked by relevance.
- When you need full context on a specific symbol — callers, callees, which execution flows it participates in — use `gitnexus_context({name: "symbolName"})`.

## Never Do

- NEVER edit a function, class, or method without first running `gitnexus_impact` on it.
- NEVER ignore HIGH or CRITICAL risk warnings from impact analysis.
- NEVER rename symbols with find-and-replace — use `gitnexus_rename` which understands the call graph.
- NEVER commit changes without running `gitnexus_detect_changes()` to check affected scope.

## Resources

| Resource | Use for |
|----------|---------|
| `gitnexus://repo/ghost-datatype-support-lib/context` | Codebase overview, check index freshness |
| `gitnexus://repo/ghost-datatype-support-lib/clusters` | All functional areas |
| `gitnexus://repo/ghost-datatype-support-lib/processes` | All execution flows |
| `gitnexus://repo/ghost-datatype-support-lib/process/{name}` | Step-by-step execution trace |

## CLI

| Task | Read this skill file |
|------|---------------------|
| Understand architecture / "How does X work?" | `.claude/skills/gitnexus/gitnexus-exploring/SKILL.md` |
| Blast radius / "What breaks if I change X?" | `.claude/skills/gitnexus/gitnexus-impact-analysis/SKILL.md` |
| Trace bugs / "Why is X failing?" | `.claude/skills/gitnexus/gitnexus-debugging/SKILL.md` |
| Rename / extract / split / refactor | `.claude/skills/gitnexus/gitnexus-refactoring/SKILL.md` |
| Tools, resources, schema reference | `.claude/skills/gitnexus/gitnexus-guide/SKILL.md` |
| Index, status, clean, wiki CLI commands | `.claude/skills/gitnexus/gitnexus-cli/SKILL.md` |

<!-- gitnexus:end -->

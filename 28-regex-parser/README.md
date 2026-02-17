# 28. Regular Expression Tester & Parser

## Description
Build an interactive regular expression testing tool and also a regex-based utility library for common parsing tasks: URLs, emails, phone numbers, markdown, and CSV. Understand regex internals including groups, lookaheads, and performance traps.

## Goals
- Build a visual regex tester: show matches, groups, and indices
- Implement URL parser extracting protocol, host, path, query, hash
- Implement Markdown parser (headings, bold, italic, links, code)
- Implement CSV parser handling quoted fields and newlines in values
- Implement phone number normalizer across formats
- Explain what each part of a regex pattern does (regex explainer)
- Detect and warn about ReDoS (catastrophic backtracking) patterns

## Core Concepts Practiced
- Named capture groups (?<name>...)
- Lookaheads (?=...) and lookbehinds (?<=...)
- Non-greedy quantifiers and their performance implications
- Sticky (y) and global (g) flag behavior
- lastIndex and stateful regex gotchas

## Bonus Challenges
- Build a regex to finite automaton visualizer
- Add a fuzzer that generates strings matching a given regex
- Implement a simple parser combinator library as an alternative to regex

## Getting Started
```bash
cd 28-regex-parser
# No dependencies needed - pure vanilla JS
open index.html   # or use Live Server in VS Code
```

## Project Structure
```
28-regex-parser/
├── README.md
├── index.html
├── index.js
└── tests/
    └── index.test.js
```

---
> Part of the **JS Mastery 30-Project Roadmap**

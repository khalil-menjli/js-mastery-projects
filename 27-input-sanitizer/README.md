# 27. Input Sanitizer & XSS Prevention Library

## Description
Build a library that sanitizes untrusted HTML input, preventing XSS attacks while preserving safe formatting. Use the browser's own parser for accurate HTML handling and implement a configurable allowlist of safe tags and attributes.

## Goals
- Parse HTML input using DOMParser (browser's own parser)
- Walk the DOM tree using TreeWalker
- Remove disallowed tags and attributes using an allowlist
- Strip dangerous protocols: javascript:, data:, vbscript:
- Sanitize CSS inline styles to prevent CSS injection
- Support configurable allowlists per use case (strict, markdown, rich text)
- Handle SVG and MathML safely

## Core Concepts Practiced
- DOMParser and serialization
- TreeWalker and NodeIterator APIs
- Content Security Policy concepts
- HTML5 sanitization specification
- Allowlist vs denylist security models

## Bonus Challenges
- Add Markdown-to-safe-HTML pipeline
- Implement a URL sanitizer that validates and transforms URLs
- Create a CSP (Content Security Policy) header generator

## Getting Started
```bash
cd 27-input-sanitizer
# No dependencies needed - pure vanilla JS
open index.html   # or use Live Server in VS Code
```

## Project Structure
```
27-input-sanitizer/
├── README.md
├── index.html
├── index.js
└── tests/
    └── index.test.js
```

---
> Part of the **JS Mastery 30-Project Roadmap**

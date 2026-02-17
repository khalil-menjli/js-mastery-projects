# 17. Custom Templating Engine

## Description
Build a template engine that compiles template strings into efficient JavaScript functions. Support variable interpolation, loops (each), conditionals (if/else), filters/pipes, partials/includes, and automatic XSS escaping.

## Goals
- Implement {{ variable }} interpolation with HTML escaping
- Implement {{#each items}}...{{/each}} loops with index access
- Implement {{#if condition}}...{{else}}...{{/if}} conditionals
- Support filters: {{ name | uppercase | trim }}
- Support partials: {{> header }}
- Compile templates to functions for performance
- Handle whitespace control

## Core Concepts Practiced
- String parsing and tokenization
- Regular expressions for pattern extraction
- Code generation (template → JavaScript function)
- Escaping and XSS prevention
- Caching compiled templates

## Bonus Challenges
- Add template inheritance (extends and block)
- Implement async templates that can await data
- Add a hot-reload watcher for template files in Node.js

## Getting Started
```bash
cd 17-template-engine
# No dependencies needed - pure vanilla JS
open index.html   # or use Live Server in VS Code
```

## Project Structure
```
17-template-engine/
├── README.md
├── index.html
├── index.js
└── tests/
    └── index.test.js
```

---
> Part of the **JS Mastery 30-Project Roadmap**

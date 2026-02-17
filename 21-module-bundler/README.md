# 21. Module Bundler (Simplified Webpack)

## Description
Build a simplified JavaScript module bundler that reads an entry file, recursively resolves all import/require dependencies, builds a dependency graph, and outputs a single bundled JavaScript file that runs in the browser.

## Goals
- Parse import/require statements to extract dependencies
- Build a dependency graph from the entry point
- Assign module IDs and rewrite import paths to IDs
- Wrap each module in a factory function
- Output a self-executing bundle with a runtime module loader
- Handle circular dependencies without infinite loops
- Support .js and .json files

## Core Concepts Practiced
- Abstract Syntax Tree (AST) parsing with acorn or regex
- Dependency graph traversal (BFS/DFS)
- CommonJS and ESM module systems
- Code generation and string concatenation
- Circular dependency detection with visited sets

## Bonus Challenges
- Add source map generation
- Implement tree shaking to remove unused exports
- Add a watch mode that rebundles on file change

## Getting Started
```bash
cd 21-module-bundler
# No dependencies needed - pure vanilla JS
open index.html   # or use Live Server in VS Code
```

## Project Structure
```
21-module-bundler/
├── README.md
├── index.html
├── index.js
└── tests/
    └── index.test.js
```

---
> Part of the **JS Mastery 30-Project Roadmap**

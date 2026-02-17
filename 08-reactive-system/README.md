# 08. Observable/Reactive System with Proxy

## Description
Build a reactivity system where plain JavaScript objects become 'reactive' — changes to their properties automatically trigger registered watchers. Implement computed properties that update when their dependencies change, similar to Vue 2/3 internals.

## Goals
- Use Proxy to intercept get and set operations
- Track which computeds/watchers accessed which properties (dependency tracking)
- Re-run watchers automatically when their dependencies change
- Implement computed() for derived values with lazy evaluation
- Handle nested reactive objects
- Prevent infinite update loops

## Core Concepts Practiced
- ES6 Proxy and Reflect API
- Dependency tracking and the observer pattern
- Lazy evaluation and dirty checking
- Getter/setter traps
- Circular dependency detection

## Bonus Challenges
- Add watch() with deep option to observe nested changes
- Implement a reactive array that tracks mutations (push, pop, splice)
- Build a simple template renderer that re-renders on state change

## Getting Started
```bash
cd 08-reactive-system
# No dependencies needed - pure vanilla JS
open index.html   # or use Live Server in VS Code
```

## Project Structure
```
08-reactive-system/
├── README.md
├── index.html
├── index.js
└── tests/
    └── index.test.js
```

---
> Part of the **JS Mastery 30-Project Roadmap**

# 05. Debounce & Throttle Suite

## Description
Create production-grade debounce and throttle functions with full options support. Both should support leading/trailing edge, max wait, cancellation, flush, and return value handling — matching lodash's implementation.

## Goals
- Implement debounce(fn, wait, options) with leading/trailing/maxWait
- Implement throttle(fn, wait, options) with leading/trailing
- Add .cancel() and .flush() methods to both
- Handle return values correctly
- Implement a requestAnimationFrame-based version of throttle
- Write tests for timing behavior

## Core Concepts Practiced
- Closures capturing mutable state
- setTimeout and clearTimeout
- requestAnimationFrame for visual updates
- Performance optimization patterns
- Edge case handling (rapid calls, cancel mid-flight)

## Bonus Challenges
- Implement memoized throttle that remembers last result per argument
- Add a debounceAsync version for async functions
- Create a useDebounce hook without using React

## Getting Started
```bash
cd 05-debounce-throttle
# No dependencies needed - pure vanilla JS
open index.html   # or use Live Server in VS Code
```

## Project Structure
```
05-debounce-throttle/
├── README.md
├── index.html
├── index.js
└── tests/
    └── index.test.js
```

---
> Part of the **JS Mastery 30-Project Roadmap**

# 04. Promise Implementation (Promise/A+ Spec)

## Description
Build your own MyPromise class that fully implements the Promise/A+ specification. Include then, catch, finally, and all static methods. This project teaches you exactly how JavaScript's async model works under the hood.

## Goals
- Implement the three states: pending, fulfilled, rejected
- Implement then(onFulfilled, onRejected) with proper chaining
- Handle synchronous and asynchronous resolution
- Implement catch(onRejected) and finally(onFinally)
- Implement static methods: resolve, reject, all, race, allSettled, any
- Ensure microtask-like scheduling with queueMicrotask

## Core Concepts Practiced
- Promise/A+ specification
- Microtask queue and event loop
- State machines (pending → fulfilled/rejected)
- Chaining and value transformation
- Error propagation through chains

## Bonus Challenges
- Add cancellation support with AbortController-like API
- Implement Promise.any and Promise.allSettled polyfills
- Add a tap() method for side effects without changing the value

## Getting Started
```bash
cd 04-promise-from-scratch
# No dependencies needed - pure vanilla JS
open index.html   # or use Live Server in VS Code
```

## Project Structure
```
04-promise-from-scratch/
├── README.md
├── index.html
├── index.js
└── tests/
    └── index.test.js
```

---
> Part of the **JS Mastery 30-Project Roadmap**

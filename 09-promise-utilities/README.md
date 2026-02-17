# 09. Custom Promise Utility Library

## Description
Build a comprehensive library of Promise utilities that go beyond the standard spec. Focus on real-world async patterns that developers need but the standard library doesn't provide.

## Goals
- promiseRetry(fn, options) - retry with exponential backoff and jitter
- promiseTimeout(promise, ms) - reject if promise takes too long
- promiseQueue(fns, concurrency) - run with concurrency limit
- promisePool(items, fn, concurrency) - process array with limit
- promiseDelay(ms) - sleep utility
- promiseSeries(fns) - run promises sequentially
- pDebounce / pThrottle - debounce/throttle for async functions

## Core Concepts Practiced
- Promise chaining and transformation
- Race conditions and their prevention
- Async concurrency control
- Cancellation with AbortController
- Error handling in async flows

## Bonus Challenges
- Add promiseMap with progress callback
- Implement promiseAllFail (resolves when ALL reject)
- Create an async pipeline (pipe) operator

## Getting Started
```bash
cd 09-promise-utilities
# No dependencies needed - pure vanilla JS
open index.html   # or use Live Server in VS Code
```

## Project Structure
```
09-promise-utilities/
├── README.md
├── index.html
├── index.js
└── tests/
    └── index.test.js
```

---
> Part of the **JS Mastery 30-Project Roadmap**

# 13. Async Iterator & Generator Utilities

## Description
Build a library of utilities for working with async iterables and generators, covering transformation, filtering, pagination, and stream-like operations. This project teaches you the iteration protocol deeply.

## Goals
- Implement asyncMap, asyncFilter, asyncReduce for async iterables
- Implement asyncTake(n), asyncSkip(n), asyncChunk(n)
- Build a paginator that auto-fetches next pages
- Implement asyncPipe for composing async transformers
- Create a fromEvents(emitter, event) async iterable adapter
- Implement merge and zip for multiple async iterables

## Core Concepts Practiced
- Async iteration protocol (Symbol.asyncIterator)
- Generator functions and yield
- for-await-of loops
- Lazy evaluation and backpressure
- Stream-like composition patterns

## Bonus Challenges
- Implement a readable stream adapter
- Add asyncTakeWhile and asyncDropWhile
- Build a real-time data pipeline using async generators

## Getting Started
```bash
cd 13-async-iterators
# No dependencies needed - pure vanilla JS
open index.html   # or use Live Server in VS Code
```

## Project Structure
```
13-async-iterators/
├── README.md
├── index.html
├── index.js
└── tests/
    └── index.test.js
```

---
> Part of the **JS Mastery 30-Project Roadmap**

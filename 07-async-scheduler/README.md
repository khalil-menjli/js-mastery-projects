# 07. Scheduler with Priority Queue

## Description
Implement a task scheduler that accepts async tasks with priorities, runs them with a configurable concurrency limit, supports task cancellation, retries on failure, and emits lifecycle events.

## Goals
- Implement a min-heap based priority queue
- Run tasks with a max concurrency limit (e.g., max 3 at once)
- Support task priorities (higher priority runs first)
- Add retry logic with exponential backoff
- Emit start, complete, error, retry events
- Track queue statistics (pending, running, completed, failed)

## Core Concepts Practiced
- Heap data structure implementation
- Async/await and Promise coordination
- Concurrency control patterns
- Exponential backoff and jitter
- Event-driven task lifecycle

## Bonus Challenges
- Add task timeout support
- Implement a drain() method that resolves when queue is empty
- Add task grouping where a group pauses until all its tasks complete

## Getting Started
```bash
cd 07-async-scheduler
# No dependencies needed - pure vanilla JS
open index.html   # or use Live Server in VS Code
```

## Project Structure
```
07-async-scheduler/
├── README.md
├── index.html
├── index.js
└── tests/
    └── index.test.js
```

---
> Part of the **JS Mastery 30-Project Roadmap**

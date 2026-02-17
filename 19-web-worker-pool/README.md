# 19. Web Worker Pool Manager

## Description
Create a worker pool that manages multiple Web Workers to run CPU-intensive tasks off the main thread. Handle task distribution, result collection, serialization of complex data, error propagation, and graceful pool shutdown.

## Goals
- Spawn a configurable number of worker threads
- Distribute tasks across workers using a round-robin or least-busy strategy
- Pass data to workers and return results to callers as Promises
- Handle errors in workers and propagate them to the caller
- Support transferable objects (ArrayBuffer) for zero-copy transfers
- Implement task cancellation
- Gracefully terminate all workers on shutdown

## Core Concepts Practiced
- Web Workers API and the worker lifecycle
- postMessage and structured cloning
- Transferable objects for performance
- Promise-based task tracking
- Pool patterns and resource management

## Bonus Challenges
- Add SharedArrayBuffer support for shared memory
- Implement a task priority queue in the pool
- Create a comlink-like transparent proxy API

## Getting Started
```bash
cd 19-web-worker-pool
# No dependencies needed - pure vanilla JS
open index.html   # or use Live Server in VS Code
```

## Project Structure
```
19-web-worker-pool/
├── README.md
├── index.html
├── index.js
└── tests/
    └── index.test.js
```

---
> Part of the **JS Mastery 30-Project Roadmap**

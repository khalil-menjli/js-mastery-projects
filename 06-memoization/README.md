# 06. Memoization with Multiple Cache Strategies

## Description
Build a memoize function that supports pluggable cache strategies including LRU (Least Recently Used), TTL (time-to-live expiry), and custom key generation. Include cache statistics and inspection.

## Goals
- Implement basic memoization with a Map cache
- Build an LRU cache with a configurable max size
- Add TTL support where cached values expire after a duration
- Support custom key generators (not just first argument)
- Track cache hits, misses, and evictions
- Handle async functions with deduplication of in-flight calls

## Core Concepts Practiced
- Map and doubly linked list for LRU
- WeakRef for memory-sensitive caching
- Closures for cache state encapsulation
- Hashing and serialization for cache keys
- Performance measurement with performance.now()

## Bonus Challenges
- Implement a multi-level cache (memory → localStorage → network)
- Add a memoizeOne variant that only remembers the last call
- Create a decorator-based @memoize using Proxy

## Getting Started
```bash
cd 06-memoization
# No dependencies needed - pure vanilla JS
open index.html   # or use Live Server in VS Code
```

## Project Structure
```
06-memoization/
├── README.md
├── index.html
├── index.js
└── tests/
    └── index.test.js
```

---
> Part of the **JS Mastery 30-Project Roadmap**

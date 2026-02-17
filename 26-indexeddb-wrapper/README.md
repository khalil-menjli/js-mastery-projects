# 26. IndexedDB Wrapper Library

## Description
Create a Promise-based, developer-friendly wrapper around the IndexedDB API. The raw API is callback and event-based — wrap it in a clean async/await interface with support for migrations, transactions, batch operations, and query building.

## Goals
- Wrap all IndexedDB operations in Promises
- Implement a migration system with versioned upgrade scripts
- Create a fluent query builder: db.table('users').where('age').gt(18).getAll()
- Support batch operations in a single transaction
- Implement automatic retry on version conflicts
- Add real-time change subscriptions
- Support compound indexes and multi-entry indexes

## Core Concepts Practiced
- IndexedDB API: IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor
- Database versioning and migration patterns
- Transaction management and error handling
- Cursor-based iteration for large datasets
- Promisification of event-based APIs

## Bonus Challenges
- Add a sync mechanism to sync with a REST API
- Implement LRU eviction when storage quota is exceeded
- Build a dev tools inspector panel for the database

## Getting Started
```bash
cd 26-indexeddb-wrapper
# No dependencies needed - pure vanilla JS
open index.html   # or use Live Server in VS Code
```

## Project Structure
```
26-indexeddb-wrapper/
├── README.md
├── index.html
├── index.js
└── tests/
    └── index.test.js
```

---
> Part of the **JS Mastery 30-Project Roadmap**

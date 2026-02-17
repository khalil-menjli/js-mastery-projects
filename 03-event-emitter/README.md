# 03. Event Emitter System

## Description
Build a full-featured EventEmitter class with on, off, once, emit, wildcard events, event namespacing (user:login), listener limits, and automatic memory leak warnings when too many listeners are added.

## Goals
- Implement on(event, listener) and off(event, listener)
- Implement once(event, listener) that auto-removes after first call
- Implement emit(event, ...args) that calls all registered listeners
- Support namespaced events like 'user:login' and 'user:*' wildcards
- Add a maxListeners limit with memory leak warnings
- Return listener counts and list registered events

## Core Concepts Practiced
- Closures and function references
- Map and Set for listener storage
- Weak references for memory-safe listeners
- Event-driven architecture patterns
- Method chaining (fluent interface)

## Bonus Challenges
- Add an emitAsync method that awaits async listeners
- Implement event middleware (pipe events through transformers)
- Add typed event validation (schema per event name)

## Getting Started
```bash
cd 03-event-emitter
# No dependencies needed - pure vanilla JS
open index.html   # or use Live Server in VS Code
```

## Project Structure
```
03-event-emitter/
├── README.md
├── index.html
├── index.js
└── tests/
    └── index.test.js
```

---
> Part of the **JS Mastery 30-Project Roadmap**

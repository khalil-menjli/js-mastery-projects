# 12. Custom State Management (Redux Clone)

## Description
Build a Redux-like state management library with a central store, pure reducer functions, middleware support (like redux-thunk and redux-logger), action creators, selectors with memoization, and time-travel debugging.

## Goals
- Implement createStore(reducer, preloadedState, enhancer)
- Implement dispatch(action) and getState()
- Implement subscribe(listener) and unsubscribe
- Build the compose and applyMiddleware enhancers
- Implement thunk middleware for async actions
- Implement logger middleware
- Add time-travel: save state snapshots and jump to any point

## Core Concepts Practiced
- Immutability and pure functions
- Middleware pattern (chain of responsibility)
- Observer pattern for state subscriptions
- Memoization for selectors (createSelector)
- Functional composition

## Bonus Challenges
- Add immer-like draft mutations
- Implement Redux DevTools protocol integration
- Build a React-like useStore hook without React

## Getting Started
```bash
cd 12-state-management
# No dependencies needed - pure vanilla JS
open index.html   # or use Live Server in VS Code
```

## Project Structure
```
12-state-management/
├── README.md
├── index.html
├── index.js
└── tests/
    └── index.test.js
```

---
> Part of the **JS Mastery 30-Project Roadmap**

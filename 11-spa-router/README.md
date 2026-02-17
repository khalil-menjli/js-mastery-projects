# 11. Client-Side SPA Router

## Description
Build a full client-side router for Single Page Applications supporting both hash and history mode, dynamic route params, query strings, navigation guards (like auth checks), nested routes, and programmatic navigation.

## Goals
- Match routes with dynamic params (/users/:id/posts/:postId)
- Support both hash (#/path) and history (pushState) modes
- Implement navigation guards: beforeEach, afterEach
- Handle nested/child routes with layout components
- Support query string parsing (?page=2&sort=asc)
- Implement programmatic navigation: push, replace, go, back
- Handle 404 not-found and redirect routes

## Core Concepts Practiced
- History API (pushState, replaceState, popstate event)
- URL parsing and pattern matching (regex or path-to-regexp style)
- Navigation guard pipeline with async support
- Event system for route change notifications
- Browser back/forward button handling

## Bonus Challenges
- Add route-level code splitting with dynamic import()
- Implement scroll position restoration on navigation
- Add transition animations between routes

## Getting Started
```bash
cd 11-spa-router
# No dependencies needed - pure vanilla JS
open index.html   # or use Live Server in VS Code
```

## Project Structure
```
11-spa-router/
├── README.md
├── index.html
├── index.js
└── tests/
    └── index.test.js
```

---
> Part of the **JS Mastery 30-Project Roadmap**

# 30. Custom Error System & Error Boundary

## Description
Build a comprehensive error handling system with typed custom error classes, an error boundary pattern for isolating failures, retry logic with exponential backoff and jitter, structured error logging with context, and source map integration for production stack traces.

## Goals
- Create a hierarchy of custom error classes (NetworkError, ValidationError, etc.)
- Implement an error boundary that catches errors without crashing the app
- Add error context: user ID, session ID, component name, breadcrumbs
- Implement structured error serialization to JSON
- Add retry logic: retryable vs non-retryable errors
- Parse and symbolicate stack traces (source map integration)
- Implement global error handlers for uncaught errors and unhandled rejections
- Create an error aggregation and grouping system

## Core Concepts Practiced
- Custom Error classes with instanceof chains
- window.onerror and unhandledrejection events
- Source maps and stack trace parsing
- Error fingerprinting for grouping similar errors
- Circuit breaker pattern for cascading failure prevention

## Bonus Challenges
- Integrate with Sentry-like remote error reporting
- Add performance tracing tied to error context
- Implement an error replay system using recorded breadcrumbs

## Getting Started
```bash
cd 30-error-system
# No dependencies needed - pure vanilla JS
open index.html   # or use Live Server in VS Code
```

## Project Structure
```
30-error-system/
├── README.md
├── index.html
├── index.js
└── tests/
    └── index.test.js
```

---
> Part of the **JS Mastery 30-Project Roadmap**

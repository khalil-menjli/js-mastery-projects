# 16. Form Validation Engine

## Description
Build a framework-agnostic form validation library with declarative schema-based validation, sync and async validators, field dependencies, custom error messages, touched/dirty/valid tracking, and array field support.

## Goals
- Define schemas: required, minLength, maxLength, pattern, email, min, max
- Support synchronous and async validators (e.g., check if username exists)
- Track per-field state: touched, dirty, valid, validating
- Support field dependencies (validate fieldB when fieldA changes)
- Implement array fields with add/remove/move operations
- Provide a clean API to integrate with any HTML form
- Support conditional validation rules

## Core Concepts Practiced
- Schema-based validation patterns
- Async validation with debouncing
- Form state as a finite state machine
- Dependency graphs for cross-field validation
- Yup/Zod-like API design

## Bonus Challenges
- Add a form wizard (multi-step) coordinator
- Implement real-time suggestions alongside validation errors
- Generate form HTML automatically from a schema

## Getting Started
```bash
cd 16-form-validation
# No dependencies needed - pure vanilla JS
open index.html   # or use Live Server in VS Code
```

## Project Structure
```
16-form-validation/
├── README.md
├── index.html
├── index.js
└── tests/
    └── index.test.js
```

---
> Part of the **JS Mastery 30-Project Roadmap**

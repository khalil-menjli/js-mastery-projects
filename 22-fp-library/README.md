# 22. Functional Programming Utility Library

## Description
Build a functional programming library similar to Ramda or lodash/fp. Focus on composition, currying, immutability, and algebraic data types like Maybe and Either for safe null handling and error management.

## Goals
- Implement compose(...fns) and pipe(...fns) for function composition
- Implement curry(fn) that auto-curries any function
- Implement partial(fn, ...args) for partial application
- Implement immutable helpers: set, update, remove for nested paths
- Implement Maybe monad for null-safe chaining
- Implement Either monad for error-safe computation
- Implement IO monad for wrapping side effects

## Core Concepts Practiced
- Currying and partial application
- Function composition and pipelines
- Functor, Applicative, Monad concepts
- Immutable update patterns
- Point-free programming style

## Bonus Challenges
- Add a Task/Future monad for lazy async computation
- Implement lenses for composable data access/update
- Build a transducer implementation for efficient collection transformations

## Getting Started
```bash
cd 22-fp-library
# No dependencies needed - pure vanilla JS
open index.html   # or use Live Server in VS Code
```

## Project Structure
```
22-fp-library/
├── README.md
├── index.html
├── index.js
└── tests/
    └── index.test.js
```

---
> Part of the **JS Mastery 30-Project Roadmap**

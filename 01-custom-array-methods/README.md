# 01. Custom Array Methods Library

## Description
Reimplement JavaScript's built-in array methods from scratch without using the originals. Cover map, filter, reduce, flatMap, some, every, find, findIndex, flat, and forEach.

## Goals
- Implement each method on Array.prototype or as standalone functions
- Handle edge cases: sparse arrays, empty arrays, index out of bounds
- Match the exact callback signature (element, index, array)
- Handle the optional thisArg parameter correctly
- Write tests comparing your output to native methods

## Core Concepts Practiced
- Higher-order functions and callbacks
- Prototype chain and Array.prototype
- this binding and call/apply
- Sparse arrays and array-like objects
- Iterator patterns

## Bonus Challenges
- Implement a lazy evaluation version that chains without intermediate arrays
- Add your own custom method: groupBy, zip, chunk, partition
- Support async versions: asyncMap, asyncFilter

## Getting Started
```bash
cd 01-custom-array-methods
# No dependencies needed - pure vanilla JS
open index.html   # or use Live Server in VS Code
```

## Project Structure
```
01-custom-array-methods/
├── README.md
├── index.html
├── index.js
└── tests/
    └── index.test.js
```

---
> Part of the **JS Mastery 30-Project Roadmap**

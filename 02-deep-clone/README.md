# 02. Deep Clone with Circular References

## Description
Build a deepClone(obj) function that handles all JavaScript value types including nested objects, arrays, Date, RegExp, Map, Set, functions, Symbols, and circular references using WeakMap tracking.

## Goals
- Clone primitives, objects, arrays, Date, RegExp, Map, Set, Symbol
- Detect and handle circular references using WeakMap
- Preserve prototype chains on cloned objects
- Handle null, undefined, and function values correctly
- Write tests for deeply nested and circular structures

## Core Concepts Practiced
- WeakMap and memory management
- Recursion and call stack awareness
- JavaScript type system (typeof, instanceof, Object.prototype.toString)
- Prototype chain and Object.create
- Structured cloning concepts

## Bonus Challenges
- Support custom clone strategies via a cloneCustomizer callback
- Handle TypedArrays and ArrayBuffer
- Add a deepEqual function as a companion utility

## Getting Started
```bash
cd 02-deep-clone
# No dependencies needed - pure vanilla JS
open index.html   # or use Live Server in VS Code
```

## Project Structure
```
02-deep-clone/
├── README.md
├── index.html
├── index.js
└── tests/
    └── index.test.js
```

---
> Part of the **JS Mastery 30-Project Roadmap**

# 10. Virtual DOM & Diff Algorithm

## Description
Implement a minimal virtual DOM library with a createElement function, a diff algorithm that computes the minimal set of changes between two trees, and a patch function that applies those changes to the real DOM efficiently.

## Goals
- Implement h(tag, props, children) to create virtual nodes
- Implement render(vNode) to convert vNode to real DOM
- Implement diff(oldVNode, newVNode) to compute a patch
- Implement patch(domNode, patches) to apply changes
- Handle keyed children for list reconciliation
- Support function components

## Core Concepts Practiced
- Tree data structures and recursion
- DOM manipulation and performance
- Reconciliation algorithms (keyed diffing)
- Object comparison and structural equality
- Patch/command pattern

## Bonus Challenges
- Add support for component lifecycle hooks (mount, update, unmount)
- Implement a simple JSX transformer (Babel plugin or string-based)
- Add a portal feature for rendering outside the tree

## Getting Started
```bash
cd 10-virtual-dom
# No dependencies needed - pure vanilla JS
open index.html   # or use Live Server in VS Code
```

## Project Structure
```
10-virtual-dom/
├── README.md
├── index.html
├── index.js
└── tests/
    └── index.test.js
```

---
> Part of the **JS Mastery 30-Project Roadmap**

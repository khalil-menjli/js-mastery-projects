# 15. Infinite Scroll Engine with Virtualization

## Description
Build an infinite scroll component that fetches data as the user scrolls, with smooth loading placeholders, bi-directional scrolling, jump-to-item by index, and DOM virtualization so only visible items are rendered.

## Goals
- Use IntersectionObserver to detect when user nears the bottom
- Fetch and append new items automatically
- Show skeleton/placeholder loading states
- Support bi-directional loading (scroll up for older items)
- Implement jump-to-index that loads items around a target position
- Virtual rendering: only render visible items + buffer
- Handle errors with retry UI

## Core Concepts Practiced
- IntersectionObserver API
- DOM virtualization (windowing) techniques
- RequestAnimationFrame for smooth updates
- Dynamic height measurement with ResizeObserver
- Scroll position preservation during updates

## Bonus Challenges
- Add pull-to-refresh gesture support
- Implement grouped sections with sticky headers
- Add smooth animations when items enter/leave the viewport

## Getting Started
```bash
cd 15-infinite-scroll
# No dependencies needed - pure vanilla JS
open index.html   # or use Live Server in VS Code
```

## Project Structure
```
15-infinite-scroll/
├── README.md
├── index.html
├── index.js
└── tests/
    └── index.test.js
```

---
> Part of the **JS Mastery 30-Project Roadmap**

# 18. Lazy Loading Manager

## Description
Build a comprehensive lazy loading manager for images and components. Implement progressive image loading (blur-up technique), error handling with fallbacks, retry logic, priority queuing so above-the-fold loads first, and a preload API.

## Goals
- Use IntersectionObserver to detect when images enter viewport
- Implement blur-up: show tiny blurred placeholder then load full image
- Handle load errors with configurable fallback images
- Retry failed loads with exponential backoff
- Implement priority: load visible images before off-screen ones
- Add a preload(url) API for critical assets
- Support lazy loading iframes and background CSS images

## Core Concepts Practiced
- IntersectionObserver with threshold and rootMargin
- Image decoding and rendering pipeline
- Base64 encoded placeholder generation
- Priority queue for load ordering
- Network Information API for adaptive quality

## Bonus Challenges
- Integrate with Service Worker for offline caching
- Add responsive image support (srcset and sizes)
- Generate WebP alternatives on-the-fly using Canvas API

## Getting Started
```bash
cd 18-lazy-loading-manager
# No dependencies needed - pure vanilla JS
open index.html   # or use Live Server in VS Code
```

## Project Structure
```
18-lazy-loading-manager/
├── README.md
├── index.html
├── index.js
└── tests/
    └── index.test.js
```

---
> Part of the **JS Mastery 30-Project Roadmap**

# 24. Performance Monitoring Library

## Description
Create a browser performance monitoring library that tracks frames per second, memory usage, long tasks that block the main thread, Core Web Vitals (LCP, FID, CLS), and provides actionable recommendations to developers.

## Goals
- Track FPS using requestAnimationFrame loop
- Monitor JS heap size using performance.memory
- Detect long tasks (>50ms) with PerformanceObserver
- Measure LCP (Largest Contentful Paint)
- Measure CLS (Cumulative Layout Shift)
- Measure FID/INP (Interaction to Next Paint)
- Provide a visual overlay dashboard showing all metrics
- Export metrics as JSON for reporting

## Core Concepts Practiced
- requestAnimationFrame timing
- PerformanceObserver API
- Navigation Timing and Resource Timing APIs
- Core Web Vitals metrics specification
- Memory profiling in V8

## Bonus Challenges
- Add custom user timing marks (start/end measurements)
- Implement metric aggregation (p50, p75, p95, p99)
- Create an automated suggestions engine based on detected issues

## Getting Started
```bash
cd 24-performance-monitor
# No dependencies needed - pure vanilla JS
open index.html   # or use Live Server in VS Code
```

## Project Structure
```
24-performance-monitor/
├── README.md
├── index.html
├── index.js
└── tests/
    └── index.test.js
```

---
> Part of the **JS Mastery 30-Project Roadmap**

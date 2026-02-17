# 14. HTTP Client Library (Axios Clone)

## Description
Build a full-featured HTTP client library similar to Axios. The library should handle all common HTTP needs including interceptors, request/response transformation, automatic JSON parsing, timeout, retry, cancel tokens, and upload/download progress.

## Goals
- Support all HTTP methods: GET, POST, PUT, PATCH, DELETE
- Add request and response interceptors (like middleware)
- Implement automatic JSON serialization/deserialization
- Add request timeout with proper cleanup
- Implement retry logic with exponential backoff
- Add cancel token support using AbortController
- Track upload and download progress
- Create a create() factory for instances with base URL and defaults

## Core Concepts Practiced
- Fetch API and XMLHttpRequest
- AbortController and AbortSignal
- Interceptor chain (like middleware)
- Stream API for progress tracking
- Error normalization and custom error types

## Bonus Challenges
- Add request deduplication (same URL = single in-flight request)
- Implement response caching with TTL
- Add HAR (HTTP Archive) recording for debugging

## Getting Started
```bash
cd 14-http-client
# No dependencies needed - pure vanilla JS
open index.html   # or use Live Server in VS Code
```

## Project Structure
```
14-http-client/
├── README.md
├── index.html
├── index.js
└── tests/
    └── index.test.js
```

---
> Part of the **JS Mastery 30-Project Roadmap**

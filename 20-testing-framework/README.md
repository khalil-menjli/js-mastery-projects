# 20. Custom Testing Framework

## Description
Build a minimal but complete JavaScript testing framework from scratch — like a tiny Jest or Mocha. Implement test suites (describe), test cases (it/test), lifecycle hooks, assertions, async test support, mocking, spies, and a test reporter.

## Goals
- Implement describe(name, fn) for test suites
- Implement it/test(name, fn) for test cases
- Implement beforeAll, afterAll, beforeEach, afterEach hooks
- Build an assertion library: expect(val).toBe/toEqual/toThrow/etc.
- Support async tests (returning Promises or using async/await)
- Implement mock functions (jest.fn() equivalent) with call tracking
- Implement spyOn to wrap existing functions
- Build a test reporter showing pass/fail/error counts

## Core Concepts Practiced
- Test runner architecture and execution order
- Assertion error types and stack traces
- Async test coordination
- Function wrapping and call tracking (spies)
- Module mocking strategies

## Bonus Challenges
- Add snapshot testing
- Implement code coverage tracking with Proxy
- Add parallel test execution using Web Workers

## Getting Started
```bash
cd 20-testing-framework
# No dependencies needed - pure vanilla JS
open index.html   # or use Live Server in VS Code
```

## Project Structure
```
20-testing-framework/
├── README.md
├── index.html
├── index.js
└── tests/
    └── index.test.js
```

---
> Part of the **JS Mastery 30-Project Roadmap**

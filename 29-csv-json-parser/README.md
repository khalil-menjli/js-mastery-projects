# 29. CSV & JSON Streaming Parser

## Description
Build production-grade parsers for CSV and JSON that handle edge cases: quoted fields with embedded commas/newlines, escaped characters, large files via streaming, and malformed input with helpful error messages.

## Goals
- CSV: parse quoted fields with embedded newlines and commas
- CSV: handle different delimiters, BOM markers, and line endings
- CSV: stream large files line by line without loading all into memory
- CSV: detect and handle type inference (numbers, booleans, dates)
- JSON: implement a recursive descent parser from scratch
- JSON: streaming parse for large JSON arrays/objects
- Both: provide detailed error messages with line and column numbers

## Core Concepts Practiced
- State machine parsing (CSV states: normal, quoted, escaped)
- Recursive descent parsing for JSON grammar
- Streaming and iterator patterns for large files
- Unicode handling and BOM detection
- Parser error recovery strategies

## Bonus Challenges
- Add schema validation while parsing
- Implement a CSV-to-JSON converter with header mapping
- Build an NDJSON (newline-delimited JSON) streaming parser

## Getting Started
```bash
cd 29-csv-json-parser
# No dependencies needed - pure vanilla JS
open index.html   # or use Live Server in VS Code
```

## Project Structure
```
29-csv-json-parser/
├── README.md
├── index.html
├── index.js
└── tests/
    └── index.test.js
```

---
> Part of the **JS Mastery 30-Project Roadmap**

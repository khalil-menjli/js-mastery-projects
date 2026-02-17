# 23. Binary File Parser

## Description
Build a binary file parser that can read and decode binary file formats. Start by parsing PNG file headers and metadata, then build a generic binary parsing DSL that makes it easy to define new binary formats declaratively.

## Goals
- Read ArrayBuffer using DataView with big/little endian support
- Parse PNG file: signature, IHDR, IDAT, IEND chunks
- Extract image metadata: width, height, bit depth, color type
- Build a binary schema DSL: uint8, uint16, uint32, bytes(n), string(n)
- Implement a BinaryReader class with a cursor/offset approach
- Handle CRC checksum verification for PNG chunks

## Core Concepts Practiced
- ArrayBuffer, DataView, and TypedArrays
- Big-endian vs little-endian byte ordering
- Bitwise operations and bit manipulation
- Binary file format specifications
- CRC and checksum algorithms

## Bonus Challenges
- Add BMP or JPEG header parsing
- Build a MIDI file parser to extract note events
- Create a binary format writer (not just reader)

## Getting Started
```bash
cd 23-binary-parser
# No dependencies needed - pure vanilla JS
open index.html   # or use Live Server in VS Code
```

## Project Structure
```
23-binary-parser/
├── README.md
├── index.html
├── index.js
└── tests/
    └── index.test.js
```

---
> Part of the **JS Mastery 30-Project Roadmap**

# 25. Internationalization (i18n) Library

## Description
Build a complete internationalization library handling message formatting with variables and pluralization, number formatting, date/time formatting across timezones, locale fallback chains, and dynamic locale loading.

## Goals
- Implement message formatting: 'Hello, {name}! You have {count} messages.'
- Handle ICU-style pluralization rules including complex plural forms (Arabic, Russian)
- Format numbers with locale-appropriate separators and currency symbols
- Format dates and times in locale-specific formats with timezone support
- Implement locale fallback chains (en-US → en → default)
- Support dynamic/lazy locale loading
- Handle RTL (right-to-left) text direction detection

## Core Concepts Practiced
- Intl API: DateTimeFormat, NumberFormat, PluralRules, Collator
- ICU message format parsing
- CLDR (Common Locale Data Repository) plural rules
- Locale tags and BCP 47 standard
- Lazy loading with dynamic import()

## Bonus Challenges
- Add a Babel/compiler plugin to extract translation keys at build time
- Implement pseudo-localization for testing untranslated strings
- Add support for translating HTML with data-i18n attributes

## Getting Started
```bash
cd 25-i18n-library
# No dependencies needed - pure vanilla JS
open index.html   # or use Live Server in VS Code
```

## Project Structure
```
25-i18n-library/
├── README.md
├── index.html
├── index.js
└── tests/
    └── index.test.js
```

---
> Part of the **JS Mastery 30-Project Roadmap**

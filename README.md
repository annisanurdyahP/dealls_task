# Dealls Project README

## Project Overview
This is an automated testing project using Playwright for web application testing.

## Test Reports
Test reports are generated in the playwright-report directory.

Technologies Used: 
- Playwright
- TypeScript

## Challenge 1 & 3 Result
1. Challenge 1: Automation Testing (Technical Skills) -> please open word document from this repo with title "Challenge 1: Automation Testing (Technical Skills)"
2. Challenge 3: Exploration & Bug - > please open word document from this repo with title "Challenge 3: Exploration & Bug"


## Project Structure
- `tests/`: Contains test specification files
  - `bookingSession.spec.ts`: Tests related to booking sessions
  - `login.spec.ts`: Login functionality tests
  - `register.spec.ts`: User registration tests
  - `search.spec.ts`: Search functionality tests

- `utils/`: Utility functions and helpers
- `playwright.config.ts`: Playwright configuration file

## Prerequisites
- Node.js
- npm (Node Package Manager)

## Installation
1. Clone the repository
```bash
git clone [https://github.com/annisanurdyahP/dealls_task.git](https://github.com/annisanurdyahP/dealls_task.git)
cd dealls_task
```

2. Install dependencies
```bash
npm install
```

3. Running Tests
To run all tests:
```bash
npx playwright test
```

To run specific test files:
```bash
npx playwright test login.spec.ts
```

To run Playwright in UI mode (great for debugging):
```bash
npx playwright test --ui --headed
```


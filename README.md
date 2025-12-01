# ScannerFlow-Document-Capture-Mobile-App

[![GitHub License](https://img.shields.io/github/license/USERNAME/ScannerFlow-Document-Capture-Mobile-App?style=for-the-badge&color=3478F6)](LICENSE)
[![CI Status](https://img.shields.io/github/workflow/status/USERNAME/ScannerFlow-Document-Capture-Mobile-App/ci.yml?style=for-the-badge)](.github/workflows/ci.yml)
[![TypeScript](https://img.shields.io/badge/Language-TypeScript%206.x-blue?style=for-the-badge&logo=typescript&logoColor=white)]()
[![Build Status](https://img.shields.io/badge/Status-Production%20Ready-brightgreen?style=for-the-badge&logo=zapier&logoColor=white)]()
[![Code Style](https://img.shields.io/badge/Linter%20%26%20Formatter-Biome-orange?style=for-the-badge&logo=biome&logoColor=white)]()
[![Testing](https://img.shields.io/badge/Testing-Vitest%20%26%20Playwright-green?style=for-the-badge&logo=vitest&logoColor=white)]()

[**Star ⭐ this Repo** if you value high-fidelity mobile tooling!]

---

## BLUF: Bottom Line Up Front

**ScannerFlow** is a state-of-the-art, high-performance document capture application built with **React Native and Expo**, engineered for rapid, intelligent digital archiving. It enforces future-proof architecture, delivering superior image quality and optimized UX using the latest 2026 mobile development standards.

## 🧭 Architecture Overview (Feature-Sliced Design)

This application adheres strictly to the Feature-Sliced Design (FSD) pattern, ensuring strict separation of concerns, high testability, and modular scalability for the React Native environment.

```ascii
. (Root)
├── src/
│   ├── app/            (Application Entry & Global State)
│   ├── features/       (Business Logic & Features)
│   │   ├── scanner/    (Core Document Capture Logic)
│   │   ├── history/    (Archive Browsing & Search)
│   │   └── settings/   (User Preferences & Configuration)
│   ├── shared/
│   │   ├── ui/         (Atomic/Shared Components: Buttons, Icons)
│   │   └── lib/        (Utility Functions, API Clients)
│   └── pages/
│       ├── Home.tsx
│       └── ArchiveView.tsx
├── .github/            (DevOps & Governance)
├── tests/              (Isolated Test Suites)
└── package.json
```

## 📋 Table of Contents

1. [Features](#features)
2. [Apex Technology Stack (2026 Standard)](#apex-technology-stack-2026-standard)
3. [Development & Setup](#development--setup)
4. [Development Principles](#development-principles)
5. [🤖 AI Agent Directives (Read First)](#-ai-agent-directives-read-first)
6. [Contribution & Security](#contribution--security)

---

## ✨ Features

*   **Fidelity Capture:** Utilizes native camera APIs via Expo for 16-bit color depth capture, minimizing compression artifacts.
*   **Intelligent Edge Detection:** Real-time, high-speed visual algorithms for perfect automatic cropping and perspective correction.
*   **Batch Processing:** Capture multiple pages into a single, consolidated PDF/JSON object.
*   **Optimized Archiving:** Integration with cloud storage services (Configurable via Environment Variables).
*   **Hyper-Configurable UX:** Full adherence to Material You 3.0 theming, allowing users to customize contrast, font sizing, and motion profiles.

## ⚛️ Apex Technology Stack (2026 Standard)

This project is built using the most modern, high-velocity toolchain available, ensuring long-term maintainability and performance.

| Category | Technology | Version/Standard |
| :--- | :--- | :--- |
| **Platform** | React Native | Latest Stable (Expo Managed) |
| **Language** | TypeScript | Strict Mode 6.x |
| **Bundler** | Vite | 7.x (High-speed HMR) |
| **State Mgmt** | Signals / Zustand | Modern, performant state patterns |
| **Styling** | TailwindCSS / Tamagui | Utility-first, highly configurable |
| **Testing** | Vitest / Playwright | Unit & End-to-End Validation |
| **Formatting** | Biome | Consolidated formatter/linter |

## 🚀 Development & Setup

Follow these instructions to get a copy of the project running on your local machine for development and testing purposes.

### Prerequisites

Ensure you have Node.js (v20+), Yarn/NPM, and the Expo CLI installed.

### Installation

```bash
git clone https://github.com/USERNAME/ScannerFlow-Document-Capture-Mobile-App.git
cd ScannerFlow-Document-Capture-Mobile-App

# Use uv/npm/yarn for dependency management (uv recommended for speed)
npm install
# or
yarn install
```

### Execution

Run the application via Expo for local simulation or development:

| Script | Command | Description |
| :--- | :--- | :--- |
| **Start** | `npm run dev` | Runs the application with HMR enabled via Vite/Expo. |
| **Type Check** | `npm run typecheck` | Enforces TypeScript strict compliance. |
| **Lint/Format** | `npx @biomejs/biome check --apply` | Automatically fixes formatting and style issues. |
| **Test (Unit)** | `npm run test:unit` | Executes isolated component and logic tests (Vitest). |
| **Test (E2E)** | `npm run test:e2e` | Executes user flow validation (Playwright). |

## 🏗️ Development Principles

All code committed to this repository must strictly adhere to these architectural mandates:

1.  **SOLID Compliance:** Design for extensibility and maintainability (Single Responsibility, Open/Closed, etc.).
2.  **DRY & KISS:** Eliminate all possible repetition. Logic must be transparently simple.
3.  **Fail Fast & Resilience:** Input validation must be aggressive. Application must **NEVER** crash due to expected user errors; use robust `try-catch` for all I/O operations.
4.  **UI/UX Singularitry:** Every interactive element requires immediate, fluid feedback (INP < 200ms goal).

## 🤖 AI Agent Directives (Read First)

<details>
<summary><strong>⚙️ Agent Configuration & Verification Commands (CRITICAL)</strong></summary>

This system relies on **TypeScript 6.x**, **React Native (Expo)**, and the **Feature-Sliced Design (FSD)** pattern.

### Apex Toolchain Definition
*   **Language:** TypeScript (Strict)
*   **Linter/Formatter:** Biome (Used for all file modifications)
*   **Testing:** Vitest (Unit), Playwright (E2E)
*   **Architecture:** FSD (Ensure separation between `features/`, `shared/`, and `pages/` layers.)
*   **Design Mandate:** Adhere to Material You 3.0 aesthetic standards and prioritize low Interaction to Next Paint (INP).

### Verification Commands

To verify alignment with architectural standards, execute the following sequence:

1.  **Full Lint & Format:** `npx @biomejs/biome check --apply src/`
2.  **Unit Test Verification:** `npm run test:unit` (Must pass with 100% coverage mandate met for modified files).
3.  **E2E Simulation:** `npx playwright test` (Simulate full capture-and-archive workflow).

*Agents must recursively re-run verification steps until zero errors/warnings are reported.*

</details>

## 🤝 Contribution & Security

We welcome contributions from engineers who prioritize code quality and architectural rigor. Please adhere to our standards:

1.  **Fork & Clone:** Create a feature branch off `main`.
2.  **Conventional Commits:** All commits **MUST** follow the [Conventional Commits Specification](https://www.conventionalcommits.org/en/v1.0.0/) (e.g., `feat: add batch scanning mode`).
3.  **Review Process:** Pull Requests must pass CI checks automatically before review.

**Security Policy:** All API interactions and data storage must be encrypted in transit and at rest. Sensitive user configurations are stored only in environment variables or secure local storage (not committed to the repository). Review the full policy in `.github/SECURITY.md`.

--- 

*ScannerFlow: Capturing Tomorrow, Today.*
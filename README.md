# ScannerFlow: Document Capture & Archive Mobile App

<p align="center">
  <img src="https://raw.githubusercontent.com/chirag127/ScannerFlow-Document-Capture-And-Archive-Mobile-App/main/.github/assets/hero_banner.png" alt="ScannerFlow Hero Banner">
</p>

<p align="center">
    <a href="https://github.com/chirag127/ScannerFlow-Document-Capture-And-Archive-Mobile-App/actions/workflows/ci.yml"><img src="https://img.shields.io/github/actions/workflow/status/chirag127/ScannerFlow-Document-Capture-And-Archive-Mobile-App/ci.yml?branch=main&style=flat-square&logo=githubactions&logoColor=white" alt="Build Status"></a>
    <a href="https://codecov.io/gh/chirag127/ScannerFlow-Document-Capture-And-Archive-Mobile-App"><img src="https://img.shields.io/codecov/c/github/chirag127/ScannerFlow-Document-Capture-And-Archive-Mobile-App?style=flat-square&logo=codecov&logoColor=white" alt="Code Coverage"></a>
    <a href="#"><img src="https://img.shields.io/badge/React_Native-20232A?style=flat-square&logo=react&logoColor=61DAFB" alt="React Native"></a>
    <a href="#"><img src="https://img.shields.io/badge/Expo-000020?style=flat-square&logo=expo&logoColor=white" alt="Expo"></a>
    <a href="#"><img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript"></a>
    <a href="https://biomejs.dev/"><img src="https://img.shields.io/badge/linted_with-Biome-blue?style=flat-square&logo=biome&logoColor=white" alt="Biome Linter"></a>
    <a href="https://github.com/chirag127/ScannerFlow-Document-Capture-And-Archive-Mobile-App/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-CC_BY--NC_4.0-lightgrey.svg?style=flat-square" alt="License"></a>
    <a href="https://github.com/chirag127/ScannerFlow-Document-Capture-And-Archive-Mobile-App/stargazers"><img src="https://img.shields.io/github/stars/chirag127/ScannerFlow-Document-Capture-And-Archive-Mobile-App?style=flat-square&logo=github&logoColor=white" alt="GitHub stars"></a>
</p>

<p align="center">
  <a href="https://github.com/chirag127/ScannerFlow-Document-Capture-And-Archive-Mobile-App/stargazers"><strong>Star ⭐ this Repo</strong></a> to support its development!
</p>

---

**ScannerFlow** is a high-fidelity document scanning and digital archiving mobile app built with React Native & Expo. It provides a production-ready, cross-platform solution for iOS and Android, featuring advanced image processing, OCR, and a seamless user experience architected with Feature-Sliced Design.

This repository represents a modern, scalable, and maintainable approach to mobile application development, enforcing FAANG-level engineering standards.

## Table of Contents

- [Architecture](#-architecture)
- [Key Features](#-key-features)
- [Getting Started](#-getting-started)
- [Development Scripts](#-development-scripts)
- [Core Principles](#-core-principles)
- [AI Agent Directives](#-ai-agent-directives)
- [Contributing](#-contributing)
- [License](#-license)

## 🏛️ Architecture

ScannerFlow strictly adheres to **Feature-Sliced Design (FSD)**, a professional architectural methodology for frontend applications. This structure ensures high cohesion, low coupling, and clear separation of concerns, making the codebase scalable and easy to maintain.

sh
src/
├── app/                 # 1. App-level logic (routing, providers, global styles)
├── processes/           # 2. Multi-screen business processes (e.g., user onboarding)
├── pages/               # 3. Full-screen components (e.g., HomePage, ScanPage)
│   ├── HomePage/
│   └── ScanPage/
├── features/            # 4. Business logic features (e.g., DocumentScan, OcrProcessing)
│   ├── DocumentScan/
│   └── OcrProcessing/
├── entities/            # 5. Core business entities (e.g., Document model and UI)
│   └── Document/
├── shared/              # 6. Reusable, non-business logic code (UI kit, libs, API)
│   ├── api/
│   ├── config/
│   ├── lib/
│   └── ui/              # Reusable UI components (Button, Card, etc.)
└── tsconfig.json


## ✨ Key Features

- **Cross-Platform:** Single codebase for both iOS and Android using React Native and Expo.
- **High-Fidelity Scanning:** Advanced image processing for clear, crisp document captures.
- **OCR Integration:** On-device or cloud-based Optical Character Recognition to extract text from documents.
- **Digital Archiving:** Organize, tag, and search scanned documents efficiently.
- **Modern Stack:** Built with TypeScript, ensuring type safety and developer productivity.
- **Scalable Architecture:** Feature-Sliced Design enables parallel development and simplified maintenance.
- **High-Performance Tooling:** Utilizes Biome for ultra-fast linting/formatting and Vitest for testing.

## 🚀 Getting Started

Follow these instructions to get the development environment running.

**Prerequisites:**

- Node.js (LTS version)
- Yarn or NPM
- Expo Go app on your mobile device or an emulator/simulator

**Installation:**

1.  **Clone the repository:**

    bash
    git clone https://github.com/chirag127/ScannerFlow-Document-Capture-And-Archive-Mobile-App.git
    cd ScannerFlow-Document-Capture-And-Archive-Mobile-App
    

2.  **Install dependencies:**

    bash
    npm install
    

3.  **Run the application:**

    bash
    npx expo start
    

    Scan the QR code with the Expo Go app on your device, or press `a` for Android Emulator or `i` for iOS Simulator.

## 🛠️ Development Scripts

| Script          | Description                                    |
| --------------- | ---------------------------------------------- |
| `npm start`     | Starts the Metro bundler for development.      |
| `npm run android` | Runs the app on a connected Android device/emulator. |
| `npm run ios`     | Runs the app on the iOS simulator.             |
| `npm run web`     | Runs the app in a web browser.                 |
| `npm test`      | Executes tests using Vitest.                   |
| `npm run lint`    | Lints the codebase with Biome.                 |
| `npm run format`  | Formats the codebase with Biome.               |

## 🏗️ Core Principles

- **SOLID:** Adherence to the five fundamental principles of object-oriented design.
- **DRY (Don't Repeat Yourself):** Reusable code is abstracted into the `shared` layer.
- **YAGNI (You Ain't Gonna Need It):** Features are implemented only when necessary to avoid bloat.

## 🤖 AI Agent Directives

<details>
<summary><strong>SYSTEM: APEX TECHNICAL AUTHORITY (DECEMBER 2025 EDITION)</strong></summary>

### 1. IDENTITY & PRIME DIRECTIVE
**Role:** You are a Senior Principal Software Architect and Master Technical Copywriter with **40+ years of elite industry experience**. You operate with absolute precision, enforcing FAANG-level standards.
**Context:** Current Date is **December 2025**. You are building for the 2026 standard.
**Output Standard:** Deliver **EXECUTION-ONLY** results. No plans, no "reporting"—only executed code, updated docs, and applied fixes.
**Philosophy:** "Zero-Defect, High-Velocity, Future-Proof."

### 2. CONTEXT-AWARE APEX TECH STACKS (LATE 2025 STANDARDS)
This repository, `ScannerFlow-Document-Capture-And-Archive-Mobile-App`, is a TypeScript-based mobile application. Apply the corresponding Apex Toolchain.

*   **PRIMARY SCENARIO: MOBILE APP (TypeScript / React Native)**
    *   **Stack:** This project leverages **React Native** (with the **Expo** framework), **TypeScript 6.x** (Strict Mode), **Zustand** (for simple, scalable state management), and **TanStack Query** (for robust server-state management and data fetching).
    *   **Architecture:** Strictly adheres to **Feature-Sliced Design (FSD)**, enforcing a clear hierarchy from `shared` libraries up to `app`-level composition. This modularizes features like `DocumentScan` and `OcrProcessing` for maximum scalability and maintainability.
    *   **Tooling:** **Biome** is mandated for all linting and formatting, ensuring sub-second feedback loops and consistent code style. **Vitest** is the standard for unit and integration testing. E2E testing should utilize **Maestro** for its simplicity and reliability in the mobile context.
    *   **UI/UX:** The component library is built within `shared/ui`, following atomic design principles. All components must be themeable, accessible, and performant.

*   **VERIFICATION COMMANDS (MANDATORY):**
    *   Run `npm run lint` before every commit to ensure code quality.
    *   Run `npm test` to verify that all unit and integration tests are passing.
    *   All new features must be developed within their designated FSD slice (`features/` or `entities/`).
    *   No business logic is permitted within the `pages/` or `app/` layers.

</details>

## 🤝 Contributing

Contributions are welcome! Please read the [CONTRIBUTING.md](.github/CONTRIBUTING.md) file for guidelines on how to submit pull requests.

## 📜 License

This project is licensed under the **Creative Commons Attribution-NonCommercial 4.0 International License** - see the [LICENSE](LICENSE) file for details.

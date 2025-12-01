---
name: Bug Report
about: Report a bug in the ScannerFlow-Document-Capture-Mobile-App
title: "[BUG] Short, descriptive summary of the issue"
labels: bug, needs-triage
assignees: ""


}}

## 🐛 Bug Description

A clear and concise description of what the bug is. What were you trying to do, and what happened instead?

## 📸 Steps to Reproduce

1. Go to '...' (e.g., screen, feature).
2. Click on '....' (e.g., button, link).
3. Scroll down on '....'.
4. See error '....' or unexpected behavior.

## 💻 Environment

*   **Device:** (e.g., iPhone 15 Pro, Samsung Galaxy S23)
*   **OS Version:** (e.g., iOS 17.2.1, Android 14)
*   **App Version:** (e.g., 1.2.3 - **See `package.json` for precise version**)
*   **Expo SDK Version:** (If applicable, **See `app.json` or `package.json`**)

## 📈 Expected Behavior

What did you expect to happen?

## ⬇️ Actual Behavior

What actually happened? Please include any error messages or screenshots.

## 🖼️ Screenshots / Screen Recordings (Optional)

If applicable, add screenshots or screen recordings to help explain your problem. You can drag files here to upload them.

## 📝 Additional Information (Optional)

Any other context about the problem. This might include relevant logs, configuration details, or specific scenarios where the bug occurs.

--- ## AI AGENT DIRECTIVES (FOR FUTURE AUTOMATION)

This section provides critical metadata for AI agents interacting with this repository.

<details>
<summary>AI Directives - Click to Expand</summary>

### Repository Profile
*   **Name:** ScannerFlow-Document-Capture-Mobile-App
*   **Primary Function:** High-fidelity document scanning and intelligent digital archiving.
*   **Platform:** Mobile (React Native, Expo).
*   **Primary Language:** TypeScript.

### Apex Toolchain (Late 2025 Standard)
*   **Language:** TypeScript 6.x
*   **Framework/Runtime:** React Native, Expo
*   **Build/Bundler:** Vite 7 (if applicable for build process)
*   **Native Layer:** Tauri v2.x (If integrated for desktop/hybrid aspects, else N/A for pure mobile)
*   **State Management:** Signals
*   **Linting/Formatting:** Biome
*   **Testing:** Vitest (Unit), Playwright (E2E - if applicable to web views/desktop targets)
*   **Package Manager:** npm/yarn (standard for React Native)

### Architectural Principles
*   **Core Pattern:** Modular Monolith / Feature-Sliced Design (FSD) for React Native.
*   **SOLID:** Applied rigorously.
*   **CQS:** Enforced.
*   **12-Factor App:** Adhered to where applicable for mobile.

### Developer Workflow Requirements
*   **Lint/Format Command:** `npx @biomejs/biome format --write .`
*   **Check Command:** `npx @biomejs/biome check --apply .`
*   **Unit Test Command:** `npx vitest`
*   **E2E Test Command:** `npx playwright test` (If applicable)
*   **CI/CD:** GitHub Actions (See `.github/workflows/ci.yml`)
*   **License:** CC BY-NC

### Security Mandates
*   **Input Sanitization:** OWASP Top 10 2025 compliance.
*   **SBOM Generation:** Required for builds.
*   **Fail Fast:** Immediate error throwing for invalid states.
*   **Encryption:** Sensitive data protected.

### UI/UX Directives
*   **Visual Style:** Liquid Glass + Neo-Brutalist + Material You 3.0 blend.
*   **Performance:** INP < 200ms, Optimistic UI.
*   **Interaction:** Hyper-personalization, Micro-interactions.
*   **Configurability:** User-configurable features and colors.

</details>

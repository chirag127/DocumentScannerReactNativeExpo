# 🚀 Contributing to ScannerFlow-Document-Capture-Mobile-App

## 1. Our Vision & Philosophy

Welcome! We are building **ScannerFlow**, a state-of-the-art React Native mobile application engineered for high-fidelity document scanning and intelligent digital archiving. Our core philosophy is **Zero-Defect, High-Velocity, Future-Proof**. We strive for pristine code quality, rapid iteration, and long-term maintainability.

This project adheres to FAANG-level standards and the principles of "Managing the Unmanageable." We aim for a codebase that is not just functional but elegant, performant, and a joy to work with.

## 2. Prerequisites for Contribution

Before you dive in, ensure your development environment is up to snuff:

*   **Node.js:** Version 20.x or higher.
*   **npm/Yarn/pnpm:** A modern package manager (we use npm by default).
*   **React Native:** Familiarity with the framework and its ecosystem.
*   **Expo:** Understanding of Expo's build and development tools.
*   **TypeScript:** Proficiency in strict TypeScript is mandatory.
*   **Git:** Basic Git commands and a GitHub account.
*   **Editor:** VS Code with recommended extensions (e.g., ESLint, Prettier, TypeScript).

## 3. Getting Started: The Apex Toolchain & Local Setup

We utilize a standardized, high-performance toolchain to ensure consistency and efficiency.

1.  **Clone the Repository:**
    ```bash
    git clone git@github.com:your-org/ScannerFlow-Document-Capture-Mobile-App.git
    cd ScannerFlow-Document-Capture-Mobile-App
    ```

2.  **Install Dependencies:**
    We use `npm` for package management. For faster installs, consider using `pnpm` if you have it globally installed.
    ```bash
    npm install
    ```

3.  **Environment Variables:**
    This project uses environment variables for configuration. Copy the example environment file:
    ```bash
    cp .env.example .env
    ```
    *Edit the `.env` file to configure your local development settings.*

## 4. Development Workflow: The Recursive Perfection Loop

Our development process is guided by the **Recursive Perfection Loop**, ensuring that every change is tested, linted, and meets our high standards before merging.

1.  **Feature Development:**
    *   **Branching Strategy:** Always create a new branch for your feature or fix. Use descriptive names adhering to Conventional Commits (e.g., `feat/add-image-compression`, `fix/resolve-scanner-orientation-bug`).
    *   **Code Structure:** Follow the **Feature-Sliced Design (FSD)** principles where applicable for organizing code within the `src/` directory. Prioritize modularity and low coupling.
    *   **TypeScript Strictness:** Ensure all TypeScript configurations are set to their strictest levels.

2.  **Testing:**
    *   **Unit Tests:** Write comprehensive unit tests using **Vitest** located in parallel `__tests__` or `*.test.ts` files within feature modules.
    *   **E2E Tests:** For critical user flows, implement End-to-End (E2E) tests using **Playwright** (if integrated for mobile/web). Ensure all tests pass.
    *   **Coverage:** Aim for 100% code coverage for critical modules. Every source file **MUST** have a corresponding test file.

3.  **Linting & Formatting:**
    *   We use **Biome** for lightning-fast linting and formatting. It enforces our code style automatically.
    *   Run the linter and formatter before committing:
        ```bash
        npx @biomejs/biome check --apply
        ```

4.  **Committing:**
    *   **Conventional Commits:** All commit messages must adhere to the Conventional Commits specification (e.g., `feat: Implement OCR processing`, `fix: Correct image scaling on Android`).
    *   **Atomic Commits:** Each commit should represent a single, logical change. Ensure tests and linters pass *before* committing.

5.  **Pull Requests (PRs):**
    *   **Create PR:** Open a Pull Request against the `main` branch.
    *   **PR Template:** Fill out the PR template completely, describing the changes and the problem they solve.
    *   **Code Review:** Expect thorough code reviews from maintainers. Be responsive to feedback.
    *   **CI Checks:** Automated checks (linting, testing, builds) will run on your PR. All checks must pass.

## 5. Code Standards & Principles

*   **SOLID:** Adhere strictly to the SOLID principles (SRP, OCP, LSP, ISP, DIP).
*   **DRY (Don't Repeat Yourself):** Eliminate duplicate code.
*   **KISS (Keep It Simple, Stupid):** Prefer simple, straightforward solutions.
*   **YAGNI (You Ain't Gonna Need It):** Do not implement functionality that isn't currently required.
*   **CQS (Command Query Separation):** Methods should either perform an action (Command) or return data (Query), not both.
*   **Self-Documenting Code:** Write clear, concise code. Avoid comments unless explaining the *why* behind a complex or non-obvious decision.
*   **Error Handling:** Implement robust error handling. The application must **NEVER** crash. Use `try-catch-finally` blocks diligently.
*   **Security:** Sanitize **ALL** inputs. Follow OWASP Top 10 (2025) guidelines. Consider security implications in all changes.

## 6. Project Structure (Feature-Sliced Design - FSD)

We organize the project structure based on features, promoting modularity and separation of concerns.

```
src/
├── app/           # App entry point, routing, global providers
├── features/
│   ├── document-scanning/ # Feature: Core scanning logic, camera integration
│   │   ├── ui/
│   │   ├── api/
│   │   ├── model/
│   │   └── index.ts
│   ├── image-processing/
│   │   ├── ui/
│   │   ├── lib/
│   │   └── index.ts
│   └── ... (other features like auth, settings, archiving)
├── entities/
│   ├── document/
│   │   ├── model/
│   │   └── ...
├── shared/
│   ├── ui/        # Reusable UI components (e.g., Button, Input)
│   ├── lib/       # Utility functions, helpers
│   ├── api/
│   ├── config/
│   └── ...
├── main.tsx       # App root component
└── ...
```

## 7. Reporting Issues & Feature Requests

*   **Bug Reports:** Please provide a detailed description of the bug, steps to reproduce, expected behavior, and actual behavior. Include relevant device information and console logs if possible.
*   **Feature Requests:** Clearly articulate the proposed feature, its benefits, and potential use cases.
*   **Use Issue Templates:** Utilize the provided GitHub issue templates (`bug_report.md`) for consistency.

## 8. Asking for Help & Communication

If you encounter issues or need clarification, please:

1.  Check the documentation (`README.md`, `AGENTS.md`).
2.  Search existing issues.
3.  If still stuck, open a GitHub Issue tagged appropriately (e.g., `question`, `help-wanted`).

## 9. Code of Conduct

All contributors are expected to adhere to our [Code of Conduct](CODE_OF_CONDUCT.md) (if applicable, otherwise, adopt a standard like the Contributor Covenant).

## 10. Licensing

This project is licensed under the [CC BY-NC 4.0 License](LICENSE). See the `LICENSE` file for more details.

---
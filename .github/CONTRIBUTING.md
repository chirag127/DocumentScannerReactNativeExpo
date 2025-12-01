# Contributing to ScannerFlow-Document-Capture-And-Archive-Mobile-App

Welcome, esteemed contributor, to the ScannerFlow project! We are thrilled you're considering contributing to this high-fidelity document scanning and digital archiving mobile app. This project operates under the **Apex Technical Authority** standards, emphasizing zero-defect, high-velocity, and future-proof development.

Our collective mission is to deliver a production-ready mobile application built with React Native and Expo, featuring advanced image processing, OCR, and a seamless UX across iOS & Android. Every contribution, no matter how small, is a step towards achieving this vision.

## 💡 Apex Philosophy & Standards

*   **Zero-Defect:** Strive for bug-free code. All contributions must pass thorough testing and adhere to linting/formatting standards.
*   **High-Velocity:** Optimize for efficient development cycles, clear communication, and rapid iteration without compromising quality.
*   **Future-Proof:** Design and implement with scalability, maintainability, and extensibility in mind. Adhere to the Feature-Sliced Design (FSD) architecture.

## ✍️ Code of Conduct

We adhere to the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct.html). By participating, you are expected to uphold this code. Please report unacceptable behavior to [chirag127.dev@gmail.com](mailto:chirag127.dev@gmail.com).

## 🎯 How Can You Contribute?

There are many ways to contribute to ScannerFlow:

### 🐞 Reporting Bugs

Encountered a bug? Your detailed reports are invaluable! Please open an issue using our [Bug Report template](https://github.com/chirag127/ScannerFlow-Document-Capture-And-Archive-Mobile-App/issues/new?assignees=&labels=bug&projects=&template=bug_report.md&title=).

Before submitting, please:

*   Check existing issues to see if the bug has already been reported.
*   Provide clear, concise steps to reproduce the bug.
*   Include relevant environment details (OS, device, Expo version).
*   Attach screenshots or screen recordings if applicable.

### 🚀 Suggesting Enhancements

Have an idea for a new feature or an improvement? We welcome your suggestions!

*   Open a new issue describing your idea in detail.
*   Explain the problem it solves and how it benefits users.
*   Provide mockups or examples if possible.

### 💻 Contributing Code

Ready to dive into the codebase? Follow these guidelines for a smooth contribution process:

#### 1. Development Setup

To get your local development environment ready, follow these steps:

*   **Prerequisites:** Ensure you have [Node.js](https://nodejs.org/) (LTS recommended), `npm` or `yarn`, and the [Expo CLI](https://docs.expo.dev/get-started/installation/) installed on your machine.
    bash
    # Install Expo CLI globally
    npm install -g expo-cli
    # or
    yarn global add expo-cli
    

*   **Fork the Repository:** Start by forking `[ScannerFlow-Document-Capture-And-Archive-Mobile-App](https://github.com/chirag127/ScannerFlow-Document-Capture-And-Archive-Mobile-App)` to your GitHub account.

*   **Clone Your Fork:**
    bash
    git clone https://github.com/YOUR_USERNAME/ScannerFlow-Document-Capture-And-Archive-Mobile-App.git
    cd ScannerFlow-Document-Capture-And-Archive-Mobile-App
    

*   **Install Dependencies:**
    bash
    npm install
    # or
    yarn install
    

*   **Run the Application:**
    bash
    npm start
    # or
    expo start
    
    This will open the Expo Dev Tools in your browser. You can then open the app on your physical device using the Expo Go app or an iOS/Android simulator.

#### 2. Coding Guidelines

We maintain strict coding standards to ensure code quality and consistency:

*   **Language:** All code must be written in **TypeScript (Strict Mode)**.
*   **Architecture:** Adhere to the **Feature-Sliced Design (FSD)** principles for structuring the application.
    *   Organize code into `app`, `pages`, `widgets`, `features`, `entities`, `shared` layers.
    *   Respect import rules and layer boundaries.
*   **Linting & Formatting:** We use **Biome** for blazing-fast linting and formatting. Ensure your code passes all Biome checks before committing.
    bash
    # Check for issues
    npm run lint
    # Automatically fix fixable issues and format code
    npm run format
    
*   **Testing:** All new features and bug fixes require corresponding tests. We use **Vitest** for unit and integration testing.
    bash
    # Run all tests
    npm test
    # Run tests in watch mode
    npm run test:watch
    
*   **Principles:** Adhere to **SOLID**, **DRY** (Don't Repeat Yourself), and **YAGNI** (You Ain't Gonna Need It) principles.
*   **Commit Messages:** Follow the [Conventional Commits specification](https://www.conventionalcommits.org/en/v1.0.0/) for clear and consistent commit history.
    *   Examples: `feat: add document scanning`, `fix: resolve OCR text alignment`, `docs: update contributing guide`.

#### 3. Pull Request Process

1.  **Create a New Branch:** Always create a new branch for your feature or bug fix from the `main` branch.
    bash
    git checkout main
    git pull origin main
    git checkout -b feature/my-awesome-feature
    
2.  **Develop Your Changes:** Implement your feature or fix, ensuring all coding guidelines are met.
3.  **Test Your Changes:** Write and run tests, ensuring all existing and new tests pass.
4.  **Lint & Format:** Run `npm run format` and `npm run lint` to ensure code consistency.
5.  **Commit Your Changes:** Use Conventional Commits for your commit messages.
6.  **Push Your Branch:**
    bash
    git push origin feature/my-awesome-feature
    
7.  **Open a Pull Request (PR):** Navigate to your fork on GitHub and open a new Pull Request targeting the `main` branch of `[chirag127/ScannerFlow-Document-Capture-And-Archive-Mobile-App](https://github.com/chirag127/ScannerFlow-Document-Capture-And-Archive-Mobile-App)`. Our [PR template](https://github.com/chirag127/ScannerFlow-Document-Capture-And-Archive-Mobile-App/blob/main/.github/PULL_REQUEST_TEMPLATE.md) will guide you through providing essential information.
8.  **Address Feedback:** Our team will review your PR. Be responsive to feedback and make necessary adjustments.

### 📝 Improving Documentation

Good documentation is crucial. If you find errors, omissions, or areas for improvement in our `README.md` or any other documentation files, please feel free to open a PR with your suggested changes.

## 🛡️ Security

If you discover a security vulnerability, please refer to our [Security Policy](https://github.com/chirag127/ScannerFlow-Document-Capture-And-Archive-Mobile-App/blob/main/.github/SECURITY.md) for instructions on how to report it responsibly. Do not open a public issue.

## 📄 License

By contributing to ScannerFlow, you agree that your contributions will be licensed under the [Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0) License](https://github.com/chirag127/ScannerFlow-Document-Capture-And-Archive-Mobile-App/blob/main/LICENSE).

Thank you for making ScannerFlow a better project!
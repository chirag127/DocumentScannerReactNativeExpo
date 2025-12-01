---
name: "🚀 Feature / Enhancement / Fix"
about: Submit changes to enhance, fix, or add new features to ScannerFlow.
title: "feat: <Short, Imperative Commit Message>"
labels: "enhancement, pending-review"
assignees: "@github/maintainers"
---

## ⭐ Star this Repo! ⭐

If you find **ScannerFlow-Mobile-Document-Capture-React-Native-App** useful, please consider giving it a star! Your support is highly appreciated and helps our project grow. Thank you!

---

## Pull Request Checklist

Please ensure you have completed the following items before submitting your pull request. This helps us review and merge your changes efficiently.

- [ ] I have read the [CONTRIBUTING.md](.github/CONTRIBUTING.md) guidelines.
- [ ] My code adheres to the project's coding standards (e.g., Biome formatting, clean code principles).
- [ ] All new and existing unit tests pass (`vitest`).
- [ ] All new and existing integration tests pass (if applicable).
- [ ] All new and existing end-to-end tests pass (`Playwright`) (if applicable).
- [ ] My changes do not introduce any new console errors or warnings.
- [ ] I have updated the documentation (README.md, inline comments) where necessary.
- [ ] I have considered the security implications of my changes, especially regarding user input and data handling.
- [ ] My changes are performant and do not introduce significant performance regressions.
- [ ] My changes are accessible and adhere to WCAG guidelines for mobile applications.
- [ ] I have tested my changes on relevant target devices/simulators.
- [ ] I have followed the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification for my commit messages.
- [ ] If this PR introduces a breaking change, I have described the impact and migration path below.

---

## What does this Pull Request do?

<!-- Briefly describe the overall purpose and context of this change. Why is it needed? What problem does it solve? -->

## Related Issues

<!--
Link any related GitHub issues here. Use keywords like `Closes #123`, `Fixes #456`, or `Resolves #789` to automatically close issues when the PR is merged.
Example: Closes #123
-->

## Changes Made

<!-- List the specific changes or additions made in this PR using bullet points. -->
- Added/Updated feature X.
- Refactored component Y for improved performance/readability.
- Fixed bug Z where [describe bug].

## How to Test

<!-- Provide clear, step-by-step instructions for reviewers to replicate the issue (if it's a fix) and verify your changes. Include any special setup or configuration. -->

1. `git clone [repo-url]`
2. `cd ScannerFlow-Mobile-Document-Capture-React-Native-App`
3. `npm install` (or `yarn install` / `pnpm install`)
4. `npm run start` (or `expo start`)
5. On your mobile device/emulator, navigate to [specific screen/feature].
6. Perform these steps: [...]
7. Verify that [...].

## Screenshots/Videos (Optional)

<!--
If your changes involve UI updates or new features, please include screenshots or short videos demonstrating the changes.
Drag and drop images/videos here or paste URLs.
-->

## Reviewer Checklist

<!-- This section is for the PR reviewer. -->
- [ ] Code is clean, well-structured, and easy to understand.
- [ ] Functionality matches the description and addresses the identified problem.
- [ ] Tests cover critical paths and edge cases.
- [ ] Documentation is accurate and up-to-date.
- [ ] Performance implications have been considered and optimized where necessary.
- [ ] Security vulnerabilities have been addressed.
- [ ] Changes adhere to the project's architectural principles (e.g., FSD for UI, Hexagonal for systems).

## Deployment Notes (Optional)

<!-- Are there any special considerations for deploying this change (e.g., database migrations, environment variables, specific deployment order)? -->

## Security Checklist

- [ ] All user inputs are sanitized and validated to prevent common vulnerabilities (e.g., XSS, SQLi).
- [ ] Sensitive data is handled securely (encrypted in transit/at rest, not logged unnecessarily).
- [ ] Dependencies have been audited for known vulnerabilities (e.g., using `npm audit` or equivalent).
- [ ] Access controls (if applicable) are correctly implemented and enforced.

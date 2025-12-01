# Security Policy

## Supported Versions

We are committed to providing a secure product. Security vulnerabilities are taken very seriously and will be addressed promptly. We actively support and patch the latest stable version of the application.

| Version | Supported          |
| ------- | ------------------ |
| Latest  | :white_check_mark: |

We will not be providing security patches for older versions. Please upgrade to the latest version to ensure you have the latest security fixes.

## Reporting a Vulnerability

We encourage responsible disclosure of security vulnerabilities. If you find a security issue, please report it to us using one of the following methods:

1.  **Primary Method (Recommended):** Open a **Private Security Vulnerability Report** using GitHub's security advisory feature. This ensures your report is handled securely and confidentially. [Submit a Private Vulnerability Report](https://github.com/YourUsername/YourRepoName/security/advisories/new)

2.  **Email:** Send an email to `security@yourdomain.com` (replace with your actual security contact email). Please use a clear subject line such as "Security Vulnerability Report".

**Please do NOT disclose the vulnerability publicly before it has been fixed.**

When reporting a vulnerability, please provide the following information:

*   **Vulnerability Type:** (e.g., Cross-Site Scripting (XSS), SQL Injection, Authentication Bypass, etc.)
*   **Affected Component/Version:** Specify the exact part of the application and version where the vulnerability exists.
*   **Steps to Reproduce:** Provide clear, step-by-step instructions to reproduce the vulnerability.
*   **Proof of Concept (PoC):** If available, include any code snippets, screenshots, or recordings that demonstrate the vulnerability.
*   **Impact Assessment:** Describe the potential impact of the vulnerability.
*   **Your Contact Information:** So we can follow up with you regarding your report.

## Our Commitment

*   We will acknowledge your report within **72 hours**.
*   We will **NOT** take legal action against researchers who act in good faith and follow this security policy.
*   We aim to fix valid security vulnerabilities within **30 days** of confirmation.
*   We will notify the reporter once a fix has been deployed and will publicly acknowledge their contribution (if desired) after the fix is released.

## Security Best Practices

*   **Zero Trust Architecture:** All inputs are treated as untrusted. Input validation and sanitization are critical. (OWASP Top 10 2025 Principles).
*   **Dependency Auditing:** Regular scanning of dependencies for known vulnerabilities (SBOM generation mandated).
*   **Secure Coding:** Adherence to SOLID, DRY, KISS principles. Use of guard clauses and CQS for maintainable and secure code.
*   **Fail Fast:** Errors are propagated and handled immediately to prevent unexpected states.
*   **Encryption:** Sensitive data is encrypted at rest and in transit using industry-standard algorithms.
*   **Supply Chain Security:** Secure development practices and artifact integrity checks are enforced.

Thank you for helping to keep ScannerFlow secure!

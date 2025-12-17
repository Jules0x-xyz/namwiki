# Contributing to NamWiki

Thank you for your interest in contributing to NamWiki! This document provides guidelines for contributions.

## Ways to Contribute

### 1. Content Contributions

- Write new guides and tutorials
- Improve existing documentation
- Fix typos and errors
- Add translations

### 2. Technical Contributions

- Fix bugs
- Add features
- Improve performance
- Enhance accessibility

### 3. Review Contributions

- Review pull requests
- Test changes
- Provide feedback

## Getting Started

### Prerequisites

- Node.js 18+
- Git
- A GitHub account

### Setup

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR-USERNAME/namwiki.git
   cd namwiki
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

### Making Changes

1. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. Make your changes
3. Test locally
4. Commit with a clear message:
   ```bash
   git commit -m "Add: description of your change"
   ```
5. Push to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
6. Open a Pull Request

## Content Guidelines

### Writing Style

- Use clear, simple language
- Write for beginners unless specifically advanced content
- Include practical examples
- Use proper Markdown formatting

### Article Structure

Every article should have:
- Clear title (H1)
- Frontmatter with title, description, tags
- Introduction paragraph
- Organized sections (H2, H3)
- Next steps or related links

### Frontmatter Template

```yaml
---
title: Your Article Title
description: A brief SEO-friendly description
sidebar_position: 1
tags: [relevant, tags]
keywords: [seo, keywords]
---
```

## Commit Messages

Use conventional commit format:

- `Add:` - New content or features
- `Fix:` - Bug fixes or corrections
- `Update:` - Updates to existing content
- `Remove:` - Removing content
- `Refactor:` - Code refactoring
- `Docs:` - Documentation changes

Examples:
- `Add: staking rewards guide`
- `Fix: broken link in FAQ`
- `Update: wallet comparison table`

## Pull Request Process

1. Ensure your PR description clearly explains the changes
2. Link any related issues
3. Wait for review (usually 1-3 days)
4. Address any feedback
5. Once approved, we'll merge!

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Help newcomers
- Focus on the content, not the person

## Questions?

- Open an issue for questions
- Join the Namada Discord
- Tag maintainers in your PR

## License

By contributing, you agree that your contributions will be licensed under:
- Content: CC BY-SA 4.0
- Code: MIT

Thank you for helping make NamWiki better! 🎉

---
title: How to Contribute
description: Guide for contributing to NamWiki
sidebar_position: 1
tags: [contributing, community, open-source, guide]
keywords: [contribute namwiki, open source, community contribution, wiki editing]
---

# How to Contribute

NamWiki is a community-driven project. We welcome contributions from everyone!

## Why Contribute?

- 📚 Help others learn about Namada
- 🏆 Get recognized as a contributor
- 💰 Potential bounty rewards
- 🌱 Grow your skills
- 🤝 Join the community

## Ways to Contribute

### 1. Write Content

Create new articles or improve existing ones:

- Tutorials and guides
- Concept explanations
- FAQ answers
- Translations

### 2. Fix Issues

Help improve quality:

- Fix typos and grammar
- Update outdated information
- Correct technical errors
- Improve clarity

### 3. Add Media

Visual content is valuable:

- Screenshots with annotations
- Diagrams and flowcharts
- Video tutorials
- Infographics

### 4. Review & Feedback

Help maintain quality:

- Review pull requests
- Report issues
- Suggest improvements
- Test guides

### 5. Translate

Make content accessible:

- Translate articles
- Review translations
- Improve existing translations

## Getting Started

### Step 1: Set Up

1. **Fork the repository**
   ```bash
   # Go to github.com/namwiki/namwiki
   # Click "Fork" button
   ```

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR-USERNAME/namwiki.git
   cd namwiki
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start development server**
   ```bash
   npm start
   ```

5. **Open in browser**: http://localhost:3000

### Step 2: Make Changes

1. **Create a branch**
   ```bash
   git checkout -b my-contribution
   ```

2. **Edit or create files**
   - Articles are in `/docs/`
   - Use Markdown format
   - Follow the [Content Guidelines](/docs/contributing/content-guidelines)

3. **Preview your changes**
   - Development server auto-reloads
   - Check formatting and links

### Step 3: Submit

1. **Commit your changes**
   ```bash
   git add .
   git commit -m "Add: guide for XYZ"
   ```

2. **Push to your fork**
   ```bash
   git push origin my-contribution
   ```

3. **Open a Pull Request**
   - Go to your fork on GitHub
   - Click "New Pull Request"
   - Describe your changes
   - Submit!

## Article Structure

### File Location

```
docs/
├── getting-started/
│   └── new-article.md
├── guides/
│   ├── wallets/
│   ├── transactions/
│   ├── staking/
│   └── governance/
├── concepts/
├── resources/
└── contributing/
```

### Frontmatter Template

Every article needs metadata:

```markdown
---
title: Your Article Title
description: A brief description for SEO
sidebar_position: 1
tags: [tag1, tag2, tag3]
keywords: [keyword1, keyword2, keyword3]
---

# Your Article Title

Content starts here...
```

### Content Template

```markdown
---
title: How to Do X
description: Step-by-step guide to doing X on Namada
sidebar_position: 1
tags: [guide, tutorial]
keywords: [how to, tutorial, guide]
---

# How to Do X

Brief introduction to what this guide covers.

:::tip Time & Difficulty
⏱️ **X minutes** | 🎯 **Difficulty**: Beginner/Intermediate/Advanced
:::

## Prerequisites

- Requirement 1
- Requirement 2

## Step 1: First Step

Explanation and instructions.

### Sub-step if needed

Details...

## Step 2: Second Step

Continue with next steps...

## Troubleshooting

### Common Issue 1

Solution...

## FAQ

### Question 1?

Answer...

## Next Steps

- [Related Guide 1](/docs/path)
- [Related Guide 2](/docs/path)
```

## Contribution Types

### Small Contributions

Quick fixes, anyone can do:

- Typo corrections
- Grammar improvements
- Link fixes
- Small clarifications

**Process**: Direct PR, quick review

### Medium Contributions

Significant improvements:

- New sections in existing articles
- Updated guides for new features
- New FAQ answers
- Diagrams and images

**Process**: PR with description, standard review

### Large Contributions

Major new content:

- Complete new guides
- New concept explanations
- Translations of multiple articles
- Video tutorials

**Process**: Discuss in issue first, thorough review

## Style Guide

### Writing Style

- **Be clear**: Simple language, avoid jargon
- **Be concise**: Get to the point
- **Be helpful**: Focus on user needs
- **Be accurate**: Verify technical details

### Formatting

- Use headers for structure (## H2, ### H3)
- Use tables for comparisons
- Use code blocks for commands
- Use admonitions for tips/warnings

### Admonitions

```markdown
:::tip Title
Helpful tips
:::

:::info Information
General information
:::

:::warning Warning
Important cautions
:::

:::danger Danger
Critical warnings
:::
```

## Review Process

### What We Look For

- ✅ Accuracy of information
- ✅ Clarity of explanation
- ✅ Proper formatting
- ✅ Working links
- ✅ Follows style guide

### Review Timeline

- Small fixes: 1-2 days
- Medium contributions: 3-5 days
- Large contributions: 1-2 weeks

### Feedback

We may request changes. This is normal and helps maintain quality!

## Recognition

### Contributor Credits

All contributors are:
- Listed in article footers
- Shown on GitHub contributors page
- Recognized in community channels

### Bounties

Some contributions may be eligible for bounties. See [Bounties](/docs/contributing/bounties).

## Getting Help

### Questions?

- **Discord**: #namwiki channel
- **GitHub Issues**: Ask questions in issues
- **Existing contributors**: Tag in PRs

### Resources

- [Content Guidelines](/docs/contributing/content-guidelines)
- [Markdown Guide](https://www.markdownguide.org/)
- [Docusaurus Docs](https://docusaurus.io/docs)

## Code of Conduct

We follow a respectful, inclusive code of conduct:

- Be welcoming and friendly
- Be patient with newcomers
- Be constructive in feedback
- Respect different perspectives

## Thank You!

Every contribution helps the Namada community. Whether it's fixing a typo or writing a complete guide, your help is appreciated!

---

Ready to start? [View open issues](https://github.com/namwiki/namwiki/issues) or create something new!

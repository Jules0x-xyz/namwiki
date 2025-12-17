---
title: How to Contribute
description: Complete guide to contributing to NamWiki
sidebar_position: 1
---

# How to Contribute

NamWiki is a community-driven project. This guide explains how you can contribute content, translations, and improvements.

## Quick Start

The fastest way to contribute:

1. Find a page you want to improve
2. Click "Edit this page" at the bottom
3. Make your changes on GitHub
4. Submit a Pull Request

That's it! Our team will review and merge your contribution.

## Contribution Types

### Documentation

Write or improve guides, tutorials, and explanations.

**How to add a new page:**

1. Go to the [GitHub repository](https://github.com/Jules0x-xyz/namwiki)
2. Navigate to the `docs/` folder
3. Choose the appropriate category folder
4. Create a new `.md` file
5. Add frontmatter and content
6. Submit a Pull Request

**Example file structure:**
```
docs/
├── getting-started/
├── guides/
│   ├── wallets/
│   ├── transactions/
│   ├── staking/
│   └── governance/
├── concepts/
├── resources/
└── contributing/
```

### Blog Posts

Share news, updates, tutorials, or analysis.

**How to submit a blog post:**

1. Navigate to the `blog/` folder
2. Create a new file: `YYYY-MM-DD-your-title.md`
3. Add the required frontmatter
4. Write your content
5. Submit a Pull Request

**Blog post template:**
```markdown
---
slug: your-post-slug
title: Your Post Title
authors: [your-github-username]
tags: [tag1, tag2]
---

Your introduction paragraph.

<!-- truncate -->

Rest of your content...
```

### Translations

Help translate content to other languages.

**Supported languages:**
- English (default)
- Spanish (es)
- Portuguese (pt)
- French (fr)
- Chinese (zh)

**How to translate:**

1. Navigate to `i18n/[language-code]/`
2. Find the corresponding file
3. Translate the content
4. Submit a Pull Request

### Videos

Add video tutorials to the Videos page.

1. Edit `src/pages/videos.tsx`
2. Add your video to the `videos` array
3. Submit a Pull Request

## File Format

All content uses Markdown with YAML frontmatter.

### Required Frontmatter

```yaml
---
title: Page Title
description: Brief description for SEO
sidebar_position: 1
---
```

### Optional Frontmatter

```yaml
---
tags: [namada, tutorial, staking]
keywords: [additional, seo, keywords]
---
```

## Writing Guidelines

### Style

- Write clearly and concisely
- Use active voice
- Address the reader directly (you/your)
- Break complex topics into steps
- Include practical examples

### Structure

1. Start with an introduction
2. Organize content with headings (H2, H3)
3. Use lists for steps or options
4. Add code blocks where relevant
5. End with next steps or related content

### Formatting

```markdown
# Main Title (H1)
## Section (H2)
### Subsection (H3)

**Bold text** for emphasis
`inline code` for commands or values

- Bullet list item
- Another item

1. Numbered step
2. Next step

| Table | Header |
|-------|--------|
| Data  | Data   |

> Blockquote for important notes

:::tip
Tip callout for helpful information
:::

:::warning
Warning callout for cautions
:::
```

## Local Development

To preview changes locally:

```bash
# Clone the repository
git clone https://github.com/Jules0x-xyz/namwiki.git
cd namwiki

# Install dependencies
npm install

# Start development server
npm start
```

Open http://localhost:3000 to view your changes.

## Pull Request Process

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally if possible
5. Submit a Pull Request
6. Address any review feedback
7. Your contribution gets merged

## Getting Help

- Open an [issue](https://github.com/Jules0x-xyz/namwiki/issues) for questions
- Join [Discord](https://discord.gg/namada) for community support
- Contact hello@namwiki.xyz for direct inquiries

## Recognition

Contributors are recognized on the site and in our documentation. Thank you for helping improve NamWiki!

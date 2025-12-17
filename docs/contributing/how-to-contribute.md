---
title: How to Contribute
description: Complete guide to contributing to NamWiki
sidebar_position: 1
---

# How to Contribute

NamWiki is open source and community-driven. Anyone can contribute content, translations, or improvements.

## Quick Start (5 minutes)

The fastest way to contribute:

| Step | Action |
|------|--------|
| 1 | Find a page you want to improve |
| 2 | Click **Edit this page** at the bottom |
| 3 | Make your changes on GitHub |
| 4 | Submit a Pull Request |

Our team reviews and merges contributions within 24-48 hours.

## Ways to Contribute

### Write Documentation

Add new guides, tutorials, or explanations.

**Steps:**
1. Go to [GitHub repository](https://github.com/Jules0x-xyz/namwiki)
2. Navigate to `docs/` folder
3. Choose the appropriate category
4. Create a new `.md` file
5. Add frontmatter and content
6. Submit a Pull Request

**Folder structure:**
```
docs/
├── getting-started/     # Intro content
├── guides/
│   ├── wallets/         # Wallet tutorials
│   ├── transactions/    # Transaction guides
│   ├── staking/         # Staking guides
│   └── governance/      # Governance guides
├── concepts/            # Technical explanations
├── resources/           # Reference materials
└── contributing/        # Contribution docs
```

### Submit Blog Posts

Share news, tutorials, or analysis with the community.

**Steps:**
1. Navigate to `blog/` folder
2. Create file: `YYYY-MM-DD-your-title.md`
3. Add required frontmatter
4. Write your content
5. Submit Pull Request

**Template:**
```markdown
---
slug: your-post-slug
title: Your Post Title
authors: [your-github-username]
tags: [tutorial, namada]
---

Introduction paragraph.

<!-- truncate -->

Rest of content...
```

### Translate Content

Help make NamWiki accessible globally.

**Supported languages:**

| Code | Language |
|------|----------|
| en | English (default) |
| es | Spanish |
| pt | Portuguese |
| fr | French |
| zh | Chinese |

**Steps:**
1. Navigate to `i18n/[language-code]/`
2. Copy the English file structure
3. Translate the content
4. Submit Pull Request

### Add Videos

Submit video tutorials to the Videos page.

**Steps:**
1. Edit `src/pages/videos.tsx`
2. Add your video to the `videos` array
3. Include title, URL, channel name, and description
4. Submit Pull Request

## File Format

All content uses Markdown with YAML frontmatter.

**Required frontmatter:**
```yaml
---
title: Page Title
description: Brief SEO description
sidebar_position: 1
---
```

**Optional frontmatter:**
```yaml
---
tags: [namada, tutorial]
keywords: [additional, seo, keywords]
---
```

## Writing Guidelines

### Style

- Write clearly and directly
- Use active voice
- Address reader as "you"
- Break complex topics into steps
- Include practical examples

### Structure

1. Start with introduction
2. Use headings (H2, H3)
3. Use lists for steps
4. Add code blocks where relevant
5. End with next steps

### Formatting Reference

```markdown
## Section Heading

**Bold** for emphasis
`code` for commands

- Bullet point
- Another point

1. Numbered step
2. Next step

| Table | Header |
|-------|--------|
| Data  | Data   |

> Important note

:::tip
Helpful tip
:::

:::warning
Caution message
:::
```

## Local Development

Preview changes locally:

```bash
git clone https://github.com/Jules0x-xyz/namwiki.git
cd namwiki
npm install
npm start
```

Open http://localhost:3000 to view changes.

## Pull Request Process

| Step | Action |
|------|--------|
| 1 | Fork the repository |
| 2 | Create feature branch |
| 3 | Make changes |
| 4 | Test locally |
| 5 | Submit Pull Request |
| 6 | Address review feedback |
| 7 | Merged |

## Getting Help

- [GitHub Issues](https://github.com/Jules0x-xyz/namwiki/issues) for questions
- [Discord](https://discord.gg/namada) for community support
- hello@namwiki.xyz for direct inquiries

## Recognition

Contributors are recognized on the site. Thank you for improving NamWiki.

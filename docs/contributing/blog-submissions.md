---
title: Blog Submissions
description: How to submit blog posts to NamWiki
sidebar_position: 4
---

# Blog Submissions

Share your knowledge with the Namada community by writing for the NamWiki blog.

## What We Accept

- Tutorials and how-to guides
- Technical deep-dives
- Ecosystem updates and analysis
- Community project showcases
- Event recaps and announcements
- Opinion pieces on privacy and blockchain

## Submission Process

### Step 1: Prepare Your Post

Create a Markdown file with this naming format:
```
YYYY-MM-DD-your-post-title.md
```

Example: `2025-12-17-understanding-masp.md`

### Step 2: Add Frontmatter

Every post needs this header:

```yaml
---
slug: understanding-masp
title: Understanding MASP
authors:
  - name: Your Name
    title: Your Role (optional)
    url: https://your-website.com
    image_url: https://your-avatar-url.jpg
tags: [masp, privacy, tutorial]
---
```

### Step 3: Write Your Content

Start with an engaging introduction, then add:

```markdown
Your introduction paragraph goes here.

<!-- truncate -->

The rest of your content appears after "Read More"...

## Section Heading

Your detailed content...
```

The `<!-- truncate -->` marker separates the preview from the full content.

### Step 4: Submit via GitHub

1. Go to [github.com/Jules0x-xyz/namwiki](https://github.com/Jules0x-xyz/namwiki)
2. Navigate to the `blog/` folder
3. Click "Add file" then "Create new file"
4. Paste your content
5. Submit a Pull Request

## Content Guidelines

### Length

- Minimum: 500 words
- Recommended: 1000-2000 words
- Maximum: No limit for comprehensive guides

### Formatting

Use proper Markdown:

```markdown
## Headings for sections

**Bold** for emphasis

`code` for technical terms

```bash
# Code blocks for commands
namadac balance
```

- Bullet points for lists
- Keep paragraphs short

> Blockquotes for important notes
```

### Images

If including images:

1. Add images to `static/img/blog/`
2. Reference with: `![Alt text](/img/blog/your-image.png)`

## Review Timeline

- Initial review: 1-3 days
- Feedback (if needed): You'll receive comments on the PR
- Publication: After approval and merge

## Author Profile

First-time authors: Add yourself to `blog/authors.yml`:

```yaml
your-github-username:
  name: Your Full Name
  title: Your Title or Role
  url: https://your-website.com
  image_url: https://your-avatar-url.jpg
```

## Questions?

Contact hello@namwiki.xyz or open an issue on GitHub.

---
title: Content Guidelines
description: Standards and guidelines for NamWiki content
sidebar_position: 2
tags: [guidelines, standards, quality, content]
keywords: [content guidelines, writing standards, quality, style guide]
---

# Content Guidelines

These guidelines ensure NamWiki content is consistent, high-quality, and helpful.

## Core Principles

### 1. Accuracy First

- Verify all technical information
- Link to official sources when possible
- Update content when things change
- Admit uncertainty when relevant

### 2. User-Focused

- Write for the target audience
- Anticipate questions
- Provide practical next steps
- Make content actionable

### 3. Accessibility

- Use simple language
- Explain jargon when used
- Provide context for beginners
- Support different learning styles

### 4. Consistency

- Follow established patterns
- Use standard formatting
- Maintain consistent voice
- Cross-reference related content

## Writing Style

### Voice & Tone

| Do | Don't |
|----|-------|
| Be friendly and approachable | Be overly casual or use slang |
| Be confident but not arrogant | Make absolute claims without evidence |
| Be concise and direct | Pad content unnecessarily |
| Use "you" to address reader | Use "we" or "one" |

### Examples

**Good:**
> You can shield your NAM by clicking the Shield button in your wallet.

**Not as good:**
> Users should utilize the shielding functionality via the wallet interface.

### Language

- Write in English (primary language)
- Use American English spelling
- Avoid idioms that may not translate well
- Define technical terms on first use

## Article Structure

### Required Elements

Every article must have:

1. **Title** (H1) - Clear and descriptive
2. **Introduction** - What the article covers
3. **Body** - Main content with clear sections
4. **Next Steps** - Where to go next

### Recommended Elements

When appropriate, include:

- Time estimate and difficulty
- Prerequisites
- Step-by-step instructions
- Screenshots or diagrams
- Troubleshooting section
- FAQ
- Related links

### Frontmatter

```yaml
---
title: "Clear, Descriptive Title"
description: "Concise SEO description under 160 characters"
sidebar_position: 1
tags: [relevant, tags, here]
keywords: [seo, keywords, for, search]
---
```

## Formatting Standards

### Headings

```markdown
# H1 - Article title (one per page)
## H2 - Major sections
### H3 - Subsections
#### H4 - Minor subsections (use sparingly)
```

### Lists

Use bullet points for:
- Unordered items
- Features and benefits
- Quick references

Use numbered lists for:
1. Sequential steps
2. Ordered processes
3. Rankings

### Code Blocks

Always specify language:

```bash
# For shell commands
namadac transfer --source wallet --target address
```

```json
{
  "for": "configuration files"
}
```

### Tables

Use tables for comparisons:

| Feature | Option A | Option B |
|---------|----------|----------|
| Speed | Fast | Slow |
| Cost | Low | High |

### Links

Internal links:
```markdown
See [Shield Assets](/docs/guides/transactions/shield-assets)
```

External links:
```markdown
Visit [official docs](https://docs.namada.net)
```

### Admonitions

Use appropriately:

```markdown
:::tip Title
For helpful suggestions
:::

:::info Information
For general information
:::

:::warning Caution
For important warnings
:::

:::danger Critical
For critical security warnings
:::
```

## Content Types

### Tutorials / How-To Guides

**Purpose**: Step-by-step instructions to accomplish a task

**Structure**:
1. Goal statement
2. Prerequisites
3. Numbered steps
4. Verification
5. Next steps

**Example topics**:
- How to stake NAM
- How to shield assets
- How to vote on proposals

### Concept Explanations

**Purpose**: Explain ideas and how things work

**Structure**:
1. What is it?
2. Why does it matter?
3. How does it work?
4. Practical implications
5. Related concepts

**Example topics**:
- What is MASP?
- Understanding zk-SNARKs
- Governance basics

### Reference Pages

**Purpose**: Quick lookup of facts

**Structure**:
- Organized categories
- Consistent format
- Easy to scan
- Comprehensive but concise

**Example topics**:
- Glossary
- FAQ
- Ecosystem tools

## Quality Standards

### Before Publishing

Check that content:

- [ ] Is technically accurate
- [ ] Has proper frontmatter
- [ ] Follows formatting standards
- [ ] Has no broken links
- [ ] Includes relevant visuals if helpful
- [ ] Has been proofread

### Accuracy Requirements

- Command syntax must be correct
- Addresses must be valid format (example placeholders)
- Links must work
- Numbers must be accurate or noted as approximate

### Screenshots

Guidelines for images:

- Use high resolution
- Highlight relevant areas
- Add captions/alt text
- Keep file sizes reasonable
- Update when UI changes

## Sensitive Topics

### Financial Information

- Never give financial advice
- Use disclaimers where appropriate
- Present factual information only
- Encourage own research

### Security Topics

- Be accurate about risks
- Don't share exploits or vulnerabilities
- Emphasize safe practices
- Link to official security resources

### Compliance

- Respect regional differences
- Note where regulations may apply
- Don't make legal claims
- Suggest professional consultation

## Updating Content

### When to Update

- Protocol changes
- UI updates
- New features
- Errors discovered
- Better information available

### How to Update

1. Create issue or PR
2. Clearly describe changes
3. Update "last updated" if significant
4. Verify all related content

## Translation Guidelines

### For Translators

- Maintain original meaning
- Adapt cultural references
- Keep technical terms consistent
- Use natural language for target audience

### Translation Review

- Native speaker review preferred
- Check technical accuracy
- Verify links work for locale
- Test formatting

## Rejected Content

We don't publish:

- Price predictions or investment advice
- Promotional content for specific projects
- Inaccurate or unverified information
- Content that violates community guidelines
- Duplicate content from other sources

## Questions?

Need clarification on guidelines?

- Ask in Discord #namwiki
- Open a GitHub issue
- Tag maintainers in PR

---

These guidelines help maintain NamWiki's quality. Thank you for following them!

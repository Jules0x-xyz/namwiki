# NamWiki

Community-driven education hub for Namada blockchain.

**Website**: [namwiki.xyz](https://namwiki.xyz)

## About

NamWiki provides educational resources for the Namada ecosystem:

- Getting started guides
- Step-by-step tutorials
- Technical concept explanations
- Community resources
- Multi-language support

## Quick Start

```bash
git clone https://github.com/Jules0x-xyz/namwiki.git
cd namwiki
npm install
npm start
```

Open http://localhost:3000 to view locally.

## Project Structure

```
namwiki/
├── docs/                    # Documentation content
│   ├── getting-started/
│   ├── guides/
│   ├── concepts/
│   ├── resources/
│   └── contributing/
├── blog/                    # Blog posts
├── i18n/                    # Translations
├── src/
│   ├── pages/              # Static pages
│   ├── components/         # React components
│   └── css/                # Styles
└── static/                 # Static assets
```

## Contributing

We welcome contributions:

1. Fork this repository
2. Create your content or changes
3. Submit a Pull Request

See [How to Contribute](https://namwiki.xyz/docs/contributing/how-to-contribute) for details.

### Adding Content

Create a new `.md` file in the appropriate `docs/` subfolder:

```markdown
---
title: Your Title
description: Brief description
sidebar_position: 1
---

# Your Title

Your content here...
```

### Adding Blog Posts

Create a file in `blog/` with format `YYYY-MM-DD-title.md`:

```markdown
---
slug: post-slug
title: Post Title
authors: [your-username]
tags: [tag1, tag2]
---

Introduction.

<!-- truncate -->

Full content...
```

### Adding Translations

1. Navigate to `i18n/[language-code]/`
2. Add translated versions of documentation
3. Submit a Pull Request

## Tech Stack

- Docusaurus 3
- TypeScript
- React
- GitHub Pages

## Contact

- Email: hello@namwiki.xyz
- Twitter: [@namwiki_xyz](https://twitter.com/namwiki_xyz)
- GitHub: [Issues](https://github.com/Jules0x-xyz/namwiki/issues)

## License

Content: CC BY-SA 4.0  
Code: MIT

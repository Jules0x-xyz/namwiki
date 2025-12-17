import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'NamWiki',
  tagline: 'Learn Namada: Privacy-first blockchain education',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://jules0x-xyz.github.io',
  baseUrl: '/namwiki/',

  organizationName: 'namwiki',
  projectName: 'namwiki',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/namwiki/namwiki/edit/main/',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          breadcrumbs: true,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/namwiki/namwiki/edit/main/',
          blogTitle: 'NamWiki Updates',
          blogDescription: 'Latest updates and news from NamWiki',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/namwiki-social-card.png',
    metadata: [
      {name: 'keywords', content: 'namada, privacy, blockchain, masp, zk-snarks, crypto, education'},
      {name: 'twitter:card', content: 'summary_large_image'},
    ],
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    announcementBar: {
      id: 'welcome',
      content: '🎉 Welcome to NamWiki! Your community-driven Namada education hub. <a href="/docs/contributing/how-to-contribute">Contribute today!</a>',
      backgroundColor: '#FFFF00',
      textColor: '#000000',
      isCloseable: true,
    },
    navbar: {
      title: 'NamWiki',
      logo: {
        alt: 'NamWiki Logo',
        src: 'img/logo.svg',
      },
      hideOnScroll: false,
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'mainSidebar',
          position: 'left',
          label: 'Get Started',
        },
        {
          type: 'dropdown',
          label: 'Guides',
          position: 'left',
          items: [
            {label: '💼 Wallets', to: '/docs/guides/wallets/install-namada-extension'},
            {label: '💸 Transactions', to: '/docs/guides/transactions/buy-nam'},
            {label: '🥩 Staking', to: '/docs/guides/staking/understanding-staking'},
            {label: '🗳️ Governance', to: '/docs/guides/governance/vote-on-proposals'},
          ],
        },
        {
          to: '/docs/concepts/masp-explained',
          label: 'Concepts',
          position: 'left',
        },
        {
          to: '/docs/resources/glossary',
          label: 'Resources',
          position: 'left',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          type: 'search',
          position: 'right',
        },
        {
          href: 'https://namwiki.substack.com',
          label: '📧',
          position: 'right',
          title: 'Newsletter',
        },
        {
          href: 'https://discord.gg/namada',
          label: '💬',
          position: 'right',
          title: 'Discord',
        },
        {
          href: 'https://github.com/namwiki/namwiki',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learn',
          items: [
            {label: 'Get Started', to: '/docs/getting-started/what-is-namada'},
            {label: 'Guides', to: '/docs/guides/wallets/install-namada-extension'},
            {label: 'Concepts', to: '/docs/concepts/masp-explained'},
            {label: 'FAQ', to: '/docs/resources/faq'},
          ],
        },
        {
          title: 'Community',
          items: [
            {label: 'Discord', href: 'https://discord.gg/namada'},
            {label: 'Forum', href: 'https://forum.namada.net'},
            {label: 'Twitter', href: 'https://twitter.com/namada'},
            {label: 'Telegram', href: 'https://t.me/namadaprotocol'},
          ],
        },
        {
          title: 'Resources',
          items: [
            {label: 'Ecosystem Tools', to: '/docs/resources/ecosystem-tools'},
            {label: 'Block Explorers', to: '/docs/resources/block-explorers'},
            {label: 'Where to Buy NAM', to: '/docs/resources/where-to-buy'},
            {label: 'Glossary', to: '/docs/resources/glossary'},
          ],
        },
        {
          title: 'Contribute',
          items: [
            {label: 'GitHub', href: 'https://github.com/namwiki/namwiki'},
            {label: 'How to Contribute', to: '/docs/contributing/how-to-contribute'},
            {label: 'Content Guidelines', to: '/docs/contributing/content-guidelines'},
            {label: 'Bounties', to: '/docs/contributing/bounties'},
          ],
        },
        {
          title: 'More',
          items: [
            {label: 'Newsletter', href: 'https://namwiki.substack.com'},
            {label: 'Blog', to: '/blog'},
            {label: 'About', to: '/about'},
            {label: 'Roadmap', to: '/roadmap'},
          ],
        },
      ],
      copyright: `Built by the community, for the community. Open source on <a href="https://github.com/namwiki/namwiki" target="_blank" rel="noopener noreferrer">GitHub</a>. © ${new Date().getFullYear()} NamWiki`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'toml', 'rust'],
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

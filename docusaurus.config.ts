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

  url: 'https://namwiki.xyz',
  baseUrl: '/',

  organizationName: 'Jules0x-xyz',
  projectName: 'namwiki',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'pt', 'fr', 'zh'],
    localeConfigs: {
      en: { label: 'English', direction: 'ltr' },
      es: { label: 'Español', direction: 'ltr' },
      pt: { label: 'Português', direction: 'ltr' },
      fr: { label: 'Français', direction: 'ltr' },
      zh: { label: '中文', direction: 'ltr' },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/Jules0x-xyz/namwiki/edit/main/',
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
          editUrl: 'https://github.com/Jules0x-xyz/namwiki/edit/main/',
          blogTitle: 'NamWiki Blog',
          blogDescription: 'Latest updates, tutorials and news from the Namada community',
          blogSidebarTitle: 'Recent Posts',
          blogSidebarCount: 10,
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
      {name: 'author', content: 'NamWiki Community'},
    ],
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'NamWiki',
      logo: {
        alt: 'NamWiki Logo',
        src: 'img/logo.svg',
      },
      hideOnScroll: false,
      style: 'dark',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'mainSidebar',
          position: 'left',
          label: 'Learn',
        },
        {
          type: 'dropdown',
          label: 'Guides',
          position: 'left',
          items: [
            {label: 'Wallets', to: '/docs/guides/wallets/install-namada-extension'},
            {label: 'Transactions', to: '/docs/guides/transactions/buy-nam'},
            {label: 'Staking', to: '/docs/guides/staking/understanding-staking'},
            {label: 'Governance', to: '/docs/guides/governance/vote-on-proposals'},
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
        {to: '/videos', label: 'Videos', position: 'left'},
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/Jules0x-xyz/namwiki',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learn',
          items: [
            {label: 'Getting Started', to: '/docs/getting-started/what-is-namada'},
            {label: 'Guides', to: '/docs/guides/wallets/install-namada-extension'},
            {label: 'Concepts', to: '/docs/concepts/masp-explained'},
            {label: 'FAQ', to: '/docs/resources/faq'},
          ],
        },
        {
          title: 'Community',
          items: [
            {label: 'Discord', href: 'https://discord.gg/namada'},
            {label: 'Twitter', href: 'https://twitter.com/namwiki_xyz'},
            {label: 'Telegram', href: 'https://t.me/namwiki'},
            {label: 'YouTube', href: 'https://youtube.com/@namwiki'},
          ],
        },
        {
          title: 'Resources',
          items: [
            {label: 'Glossary', to: '/docs/resources/glossary'},
            {label: 'Ecosystem Tools', to: '/docs/resources/ecosystem-tools'},
            {label: 'Block Explorers', to: '/docs/resources/block-explorers'},
            {label: 'Videos', to: '/videos'},
          ],
        },
        {
          title: 'Contribute',
          items: [
            {label: 'GitHub', href: 'https://github.com/Jules0x-xyz/namwiki'},
            {label: 'How to Contribute', to: '/docs/contributing/how-to-contribute'},
            {label: 'Content Guidelines', to: '/docs/contributing/content-guidelines'},
            {label: 'Blog Submissions', to: '/docs/contributing/blog-submissions'},
          ],
        },
      ],
      copyright: `NamWiki - Open source Namada education. Contact: hello@namwiki.xyz`,
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

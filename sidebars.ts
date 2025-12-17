import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  mainSidebar: [
    {
      type: 'category',
      label: '🚀 Getting Started',
      link: {
        type: 'generated-index',
        title: 'Getting Started',
        description: 'Begin your Namada journey here',
        slug: '/getting-started',
      },
      collapsed: false,
      items: [
        'getting-started/what-is-namada',
        'getting-started/why-privacy-matters',
        'getting-started/first-steps',
        'getting-started/quick-start-guide',
        'getting-started/shielded-vs-transparent',
      ],
    },
    {
      type: 'category',
      label: '📖 Guides',
      link: {
        type: 'generated-index',
        title: 'Guides',
        description: 'Step-by-step tutorials for using Namada',
        slug: '/guides',
      },
      items: [
        {
          type: 'category',
          label: '💼 Wallets',
          link: {
            type: 'generated-index',
            title: 'Wallet Guides',
            slug: '/guides/wallets',
          },
          items: [
            'guides/wallets/install-namada-extension',
            'guides/wallets/setup-keplr',
            'guides/wallets/cli-wallet-intro',
            'guides/wallets/wallet-comparison',
          ],
        },
        {
          type: 'category',
          label: '💸 Transactions',
          link: {
            type: 'generated-index',
            title: 'Transaction Guides',
            slug: '/guides/transactions',
          },
          items: [
            'guides/transactions/buy-nam',
            'guides/transactions/send-to-wallet',
            'guides/transactions/ibc-transfers',
            'guides/transactions/shield-assets',
            'guides/transactions/unshield-assets',
            'guides/transactions/send-shielded-transaction',
          ],
        },
        {
          type: 'category',
          label: '🥩 Staking',
          link: {
            type: 'generated-index',
            title: 'Staking Guides',
            slug: '/guides/staking',
          },
          items: [
            'guides/staking/understanding-staking',
            'guides/staking/how-to-stake',
            'guides/staking/choose-validator',
            'guides/staking/claim-rewards',
          ],
        },
        {
          type: 'category',
          label: '🗳️ Governance',
          link: {
            type: 'generated-index',
            title: 'Governance Guides',
            slug: '/guides/governance',
          },
          items: [
            'guides/governance/vote-on-proposals',
            'guides/governance/create-proposal',
            'guides/governance/apply-for-pgf',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '💡 Concepts',
      link: {
        type: 'generated-index',
        title: 'Concepts',
        description: 'Understand the technology behind Namada',
        slug: '/concepts',
      },
      items: [
        'concepts/masp-explained',
        'concepts/zk-snarks-eli5',
        'concepts/pgf-system',
        'concepts/governance-basics',
        'concepts/privacy-best-practices',
        'concepts/transaction-fees',
      ],
    },
    {
      type: 'category',
      label: '📚 Resources',
      link: {
        type: 'generated-index',
        title: 'Resources',
        description: 'Helpful resources for Namada users',
        slug: '/resources',
      },
      items: [
        'resources/glossary',
        'resources/faq',
        'resources/ecosystem-tools',
        'resources/where-to-buy',
        'resources/block-explorers',
        'resources/community-links',
      ],
    },
    {
      type: 'category',
      label: '🤝 Contributing',
      link: {
        type: 'generated-index',
        title: 'Contributing',
        description: 'Help us grow NamWiki',
        slug: '/contributing',
      },
      items: [
        'contributing/how-to-contribute',
        'contributing/content-guidelines',
        'contributing/bounties',
      ],
    },
  ],
};

export default sidebars;

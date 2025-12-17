import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  mainSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      link: {
        type: 'doc',
        id: 'getting-started/what-is-namada',
      },
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
      label: 'Guides',
      items: [
        {
          type: 'category',
          label: 'Wallets',
          items: [
            'guides/wallets/install-namada-extension',
            'guides/wallets/setup-keplr',
            'guides/wallets/cli-wallet-intro',
            'guides/wallets/wallet-comparison',
          ],
        },
        {
          type: 'category',
          label: 'Transactions',
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
          label: 'Staking',
          items: [
            'guides/staking/understanding-staking',
            'guides/staking/how-to-stake',
            'guides/staking/choose-validator',
            'guides/staking/claim-rewards',
          ],
        },
        {
          type: 'category',
          label: 'Governance',
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
      label: 'Concepts',
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
      label: 'Resources',
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
      label: 'Contributing',
      items: [
        'contributing/how-to-contribute',
        'contributing/content-guidelines',
        'contributing/blog-submissions',
        'contributing/bounties',
      ],
    },
  ],
};

export default sidebars;

import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/zh/blog',
    component: ComponentCreator('/zh/blog', '876'),
    exact: true
  },
  {
    path: '/zh/blog/archive',
    component: ComponentCreator('/zh/blog/archive', '3be'),
    exact: true
  },
  {
    path: '/zh/blog/authors',
    component: ComponentCreator('/zh/blog/authors', '55d'),
    exact: true
  },
  {
    path: '/zh/blog/tags',
    component: ComponentCreator('/zh/blog/tags', 'e48'),
    exact: true
  },
  {
    path: '/zh/blog/tags/announcement',
    component: ComponentCreator('/zh/blog/tags/announcement', 'd35'),
    exact: true
  },
  {
    path: '/zh/blog/tags/namwiki',
    component: ComponentCreator('/zh/blog/tags/namwiki', '4b9'),
    exact: true
  },
  {
    path: '/zh/blog/welcome',
    component: ComponentCreator('/zh/blog/welcome', '9b6'),
    exact: true
  },
  {
    path: '/zh/videos',
    component: ComponentCreator('/zh/videos', '7cf'),
    exact: true
  },
  {
    path: '/zh/docs',
    component: ComponentCreator('/zh/docs', 'a2b'),
    routes: [
      {
        path: '/zh/docs',
        component: ComponentCreator('/zh/docs', 'b5f'),
        routes: [
          {
            path: '/zh/docs/tags',
            component: ComponentCreator('/zh/docs/tags', '860'),
            exact: true
          },
          {
            path: '/zh/docs/tags/advanced',
            component: ComponentCreator('/zh/docs/tags/advanced', 'a02'),
            exact: true
          },
          {
            path: '/zh/docs/tags/applications',
            component: ComponentCreator('/zh/docs/tags/applications', '339'),
            exact: true
          },
          {
            path: '/zh/docs/tags/basics',
            component: ComponentCreator('/zh/docs/tags/basics', 'ea6'),
            exact: true
          },
          {
            path: '/zh/docs/tags/beginner',
            component: ComponentCreator('/zh/docs/tags/beginner', '731'),
            exact: true
          },
          {
            path: '/zh/docs/tags/best-practices',
            component: ComponentCreator('/zh/docs/tags/best-practices', '90a'),
            exact: true
          },
          {
            path: '/zh/docs/tags/blockchain',
            component: ComponentCreator('/zh/docs/tags/blockchain', 'e54'),
            exact: true
          },
          {
            path: '/zh/docs/tags/bounties',
            component: ComponentCreator('/zh/docs/tags/bounties', '1f7'),
            exact: true
          },
          {
            path: '/zh/docs/tags/browser',
            component: ComponentCreator('/zh/docs/tags/browser', '2f2'),
            exact: true
          },
          {
            path: '/zh/docs/tags/buy',
            component: ComponentCreator('/zh/docs/tags/buy', 'a24'),
            exact: true
          },
          {
            path: '/zh/docs/tags/choosing',
            component: ComponentCreator('/zh/docs/tags/choosing', '66d'),
            exact: true
          },
          {
            path: '/zh/docs/tags/claim',
            component: ComponentCreator('/zh/docs/tags/claim', 'b57'),
            exact: true
          },
          {
            path: '/zh/docs/tags/cli',
            component: ComponentCreator('/zh/docs/tags/cli', 'e85'),
            exact: true
          },
          {
            path: '/zh/docs/tags/command-line',
            component: ComponentCreator('/zh/docs/tags/command-line', '936'),
            exact: true
          },
          {
            path: '/zh/docs/tags/community',
            component: ComponentCreator('/zh/docs/tags/community', '9e0'),
            exact: true
          },
          {
            path: '/zh/docs/tags/comparison',
            component: ComponentCreator('/zh/docs/tags/comparison', '0c9'),
            exact: true
          },
          {
            path: '/zh/docs/tags/concepts',
            component: ComponentCreator('/zh/docs/tags/concepts', 'bd7'),
            exact: true
          },
          {
            path: '/zh/docs/tags/content',
            component: ComponentCreator('/zh/docs/tags/content', '63e'),
            exact: true
          },
          {
            path: '/zh/docs/tags/contribution',
            component: ComponentCreator('/zh/docs/tags/contribution', 'd66'),
            exact: true
          },
          {
            path: '/zh/docs/tags/cosmos',
            component: ComponentCreator('/zh/docs/tags/cosmos', 'd7d'),
            exact: true
          },
          {
            path: '/zh/docs/tags/costs',
            component: ComponentCreator('/zh/docs/tags/costs', '03a'),
            exact: true
          },
          {
            path: '/zh/docs/tags/create',
            component: ComponentCreator('/zh/docs/tags/create', '689'),
            exact: true
          },
          {
            path: '/zh/docs/tags/criteria',
            component: ComponentCreator('/zh/docs/tags/criteria', '952'),
            exact: true
          },
          {
            path: '/zh/docs/tags/cryptography',
            component: ComponentCreator('/zh/docs/tags/cryptography', 'ba8'),
            exact: true
          },
          {
            path: '/zh/docs/tags/decentralization',
            component: ComponentCreator('/zh/docs/tags/decentralization', 'a7a'),
            exact: true
          },
          {
            path: '/zh/docs/tags/delegate',
            component: ComponentCreator('/zh/docs/tags/delegate', 'ed8'),
            exact: true
          },
          {
            path: '/zh/docs/tags/delegation',
            component: ComponentCreator('/zh/docs/tags/delegation', 'c6e'),
            exact: true
          },
          {
            path: '/zh/docs/tags/earn',
            component: ComponentCreator('/zh/docs/tags/earn', 'ee0'),
            exact: true
          },
          {
            path: '/zh/docs/tags/ecosystem',
            component: ComponentCreator('/zh/docs/tags/ecosystem', 'c22'),
            exact: true
          },
          {
            path: '/zh/docs/tags/exchange',
            component: ComponentCreator('/zh/docs/tags/exchange', 'a63'),
            exact: true
          },
          {
            path: '/zh/docs/tags/exchanges',
            component: ComponentCreator('/zh/docs/tags/exchanges', '21d'),
            exact: true
          },
          {
            path: '/zh/docs/tags/explorer',
            component: ComponentCreator('/zh/docs/tags/explorer', '066'),
            exact: true
          },
          {
            path: '/zh/docs/tags/extension',
            component: ComponentCreator('/zh/docs/tags/extension', '209'),
            exact: true
          },
          {
            path: '/zh/docs/tags/faq',
            component: ComponentCreator('/zh/docs/tags/faq', '8aa'),
            exact: true
          },
          {
            path: '/zh/docs/tags/fees',
            component: ComponentCreator('/zh/docs/tags/fees', '214'),
            exact: true
          },
          {
            path: '/zh/docs/tags/fundamentals',
            component: ComponentCreator('/zh/docs/tags/fundamentals', 'f1a'),
            exact: true
          },
          {
            path: '/zh/docs/tags/funding',
            component: ComponentCreator('/zh/docs/tags/funding', '882'),
            exact: true
          },
          {
            path: '/zh/docs/tags/gas',
            component: ComponentCreator('/zh/docs/tags/gas', 'eac'),
            exact: true
          },
          {
            path: '/zh/docs/tags/getting-started',
            component: ComponentCreator('/zh/docs/tags/getting-started', '437'),
            exact: true
          },
          {
            path: '/zh/docs/tags/governance',
            component: ComponentCreator('/zh/docs/tags/governance', '2a2'),
            exact: true
          },
          {
            path: '/zh/docs/tags/grants',
            component: ComponentCreator('/zh/docs/tags/grants', '7c3'),
            exact: true
          },
          {
            path: '/zh/docs/tags/guidelines',
            component: ComponentCreator('/zh/docs/tags/guidelines', 'e6b'),
            exact: true
          },
          {
            path: '/zh/docs/tags/help',
            component: ComponentCreator('/zh/docs/tags/help', 'cc6'),
            exact: true
          },
          {
            path: '/zh/docs/tags/ibc',
            component: ComponentCreator('/zh/docs/tags/ibc', 'de6'),
            exact: true
          },
          {
            path: '/zh/docs/tags/interchain',
            component: ComponentCreator('/zh/docs/tags/interchain', '297'),
            exact: true
          },
          {
            path: '/zh/docs/tags/introduction',
            component: ComponentCreator('/zh/docs/tags/introduction', 'd59'),
            exact: true
          },
          {
            path: '/zh/docs/tags/keplr',
            component: ComponentCreator('/zh/docs/tags/keplr', 'df2'),
            exact: true
          },
          {
            path: '/zh/docs/tags/links',
            component: ComponentCreator('/zh/docs/tags/links', '5c1'),
            exact: true
          },
          {
            path: '/zh/docs/tags/masp',
            component: ComponentCreator('/zh/docs/tags/masp', '1b4'),
            exact: true
          },
          {
            path: '/zh/docs/tags/nam',
            component: ComponentCreator('/zh/docs/tags/nam', 'b44'),
            exact: true
          },
          {
            path: '/zh/docs/tags/namada',
            component: ComponentCreator('/zh/docs/tags/namada', 'e77'),
            exact: true
          },
          {
            path: '/zh/docs/tags/opsec',
            component: ComponentCreator('/zh/docs/tags/opsec', 'f05'),
            exact: true
          },
          {
            path: '/zh/docs/tags/participation',
            component: ComponentCreator('/zh/docs/tags/participation', '2ed'),
            exact: true
          },
          {
            path: '/zh/docs/tags/pgf',
            component: ComponentCreator('/zh/docs/tags/pgf', '542'),
            exact: true
          },
          {
            path: '/zh/docs/tags/pos',
            component: ComponentCreator('/zh/docs/tags/pos', '696'),
            exact: true
          },
          {
            path: '/zh/docs/tags/privacy',
            component: ComponentCreator('/zh/docs/tags/privacy', '2be'),
            exact: true
          },
          {
            path: '/zh/docs/tags/private',
            component: ComponentCreator('/zh/docs/tags/private', '1e7'),
            exact: true
          },
          {
            path: '/zh/docs/tags/proposals',
            component: ComponentCreator('/zh/docs/tags/proposals', '3ce'),
            exact: true
          },
          {
            path: '/zh/docs/tags/public-goods',
            component: ComponentCreator('/zh/docs/tags/public-goods', 'dd1'),
            exact: true
          },
          {
            path: '/zh/docs/tags/purchase',
            component: ComponentCreator('/zh/docs/tags/purchase', 'd57'),
            exact: true
          },
          {
            path: '/zh/docs/tags/quality',
            component: ComponentCreator('/zh/docs/tags/quality', 'edd'),
            exact: true
          },
          {
            path: '/zh/docs/tags/questions',
            component: ComponentCreator('/zh/docs/tags/questions', '30f'),
            exact: true
          },
          {
            path: '/zh/docs/tags/quick-start',
            component: ComponentCreator('/zh/docs/tags/quick-start', 'e28'),
            exact: true
          },
          {
            path: '/zh/docs/tags/receive',
            component: ComponentCreator('/zh/docs/tags/receive', '437'),
            exact: true
          },
          {
            path: '/zh/docs/tags/resources',
            component: ComponentCreator('/zh/docs/tags/resources', 'de5'),
            exact: true
          },
          {
            path: '/zh/docs/tags/rewards',
            component: ComponentCreator('/zh/docs/tags/rewards', '695'),
            exact: true
          },
          {
            path: '/zh/docs/tags/security',
            component: ComponentCreator('/zh/docs/tags/security', 'd5f'),
            exact: true
          },
          {
            path: '/zh/docs/tags/selection',
            component: ComponentCreator('/zh/docs/tags/selection', 'a2d'),
            exact: true
          },
          {
            path: '/zh/docs/tags/send',
            component: ComponentCreator('/zh/docs/tags/send', '172'),
            exact: true
          },
          {
            path: '/zh/docs/tags/setup',
            component: ComponentCreator('/zh/docs/tags/setup', '5b5'),
            exact: true
          },
          {
            path: '/zh/docs/tags/shield',
            component: ComponentCreator('/zh/docs/tags/shield', 'a36'),
            exact: true
          },
          {
            path: '/zh/docs/tags/shielded',
            component: ComponentCreator('/zh/docs/tags/shielded', '133'),
            exact: true
          },
          {
            path: '/zh/docs/tags/social',
            component: ComponentCreator('/zh/docs/tags/social', 'b2c'),
            exact: true
          },
          {
            path: '/zh/docs/tags/staking',
            component: ComponentCreator('/zh/docs/tags/staking', '023'),
            exact: true
          },
          {
            path: '/zh/docs/tags/standards',
            component: ComponentCreator('/zh/docs/tags/standards', '323'),
            exact: true
          },
          {
            path: '/zh/docs/tags/submit',
            component: ComponentCreator('/zh/docs/tags/submit', 'd28'),
            exact: true
          },
          {
            path: '/zh/docs/tags/support',
            component: ComponentCreator('/zh/docs/tags/support', '700'),
            exact: true
          },
          {
            path: '/zh/docs/tags/technology',
            component: ComponentCreator('/zh/docs/tags/technology', 'fc3'),
            exact: true
          },
          {
            path: '/zh/docs/tags/tokens',
            component: ComponentCreator('/zh/docs/tags/tokens', 'b66'),
            exact: true
          },
          {
            path: '/zh/docs/tags/tools',
            component: ComponentCreator('/zh/docs/tags/tools', 'bc7'),
            exact: true
          },
          {
            path: '/zh/docs/tags/trading',
            component: ComponentCreator('/zh/docs/tags/trading', 'f64'),
            exact: true
          },
          {
            path: '/zh/docs/tags/transaction',
            component: ComponentCreator('/zh/docs/tags/transaction', '677'),
            exact: true
          },
          {
            path: '/zh/docs/tags/transactions',
            component: ComponentCreator('/zh/docs/tags/transactions', 'e03'),
            exact: true
          },
          {
            path: '/zh/docs/tags/transfer',
            component: ComponentCreator('/zh/docs/tags/transfer', '378'),
            exact: true
          },
          {
            path: '/zh/docs/tags/transparent',
            component: ComponentCreator('/zh/docs/tags/transparent', '89b'),
            exact: true
          },
          {
            path: '/zh/docs/tags/tutorial',
            component: ComponentCreator('/zh/docs/tags/tutorial', '092'),
            exact: true
          },
          {
            path: '/zh/docs/tags/unshield',
            component: ComponentCreator('/zh/docs/tags/unshield', '423'),
            exact: true
          },
          {
            path: '/zh/docs/tags/validators',
            component: ComponentCreator('/zh/docs/tags/validators', 'ed2'),
            exact: true
          },
          {
            path: '/zh/docs/tags/voting',
            component: ComponentCreator('/zh/docs/tags/voting', '7ec'),
            exact: true
          },
          {
            path: '/zh/docs/tags/wallet',
            component: ComponentCreator('/zh/docs/tags/wallet', '0c3'),
            exact: true
          },
          {
            path: '/zh/docs/tags/withdraw',
            component: ComponentCreator('/zh/docs/tags/withdraw', 'ef2'),
            exact: true
          },
          {
            path: '/zh/docs/tags/zk-snarks',
            component: ComponentCreator('/zh/docs/tags/zk-snarks', 'ff5'),
            exact: true
          },
          {
            path: '/zh/docs',
            component: ComponentCreator('/zh/docs', '48b'),
            routes: [
              {
                path: '/zh/docs/concepts/governance-basics',
                component: ComponentCreator('/zh/docs/concepts/governance-basics', '234'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/zh/docs/concepts/masp-explained',
                component: ComponentCreator('/zh/docs/concepts/masp-explained', 'a20'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/zh/docs/concepts/pgf-system',
                component: ComponentCreator('/zh/docs/concepts/pgf-system', 'cfd'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/zh/docs/concepts/privacy-best-practices',
                component: ComponentCreator('/zh/docs/concepts/privacy-best-practices', 'ece'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/zh/docs/concepts/transaction-fees',
                component: ComponentCreator('/zh/docs/concepts/transaction-fees', '77f'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/zh/docs/concepts/zk-snarks-eli5',
                component: ComponentCreator('/zh/docs/concepts/zk-snarks-eli5', 'cd2'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/zh/docs/contributing/blog-submissions',
                component: ComponentCreator('/zh/docs/contributing/blog-submissions', 'a97'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/zh/docs/contributing/bounties',
                component: ComponentCreator('/zh/docs/contributing/bounties', 'd45'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/zh/docs/contributing/content-guidelines',
                component: ComponentCreator('/zh/docs/contributing/content-guidelines', 'e8c'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/zh/docs/contributing/how-to-contribute',
                component: ComponentCreator('/zh/docs/contributing/how-to-contribute', 'a9f'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/zh/docs/getting-started/first-steps',
                component: ComponentCreator('/zh/docs/getting-started/first-steps', 'ca9'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/zh/docs/getting-started/quick-start-guide',
                component: ComponentCreator('/zh/docs/getting-started/quick-start-guide', 'c5b'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/zh/docs/getting-started/shielded-vs-transparent',
                component: ComponentCreator('/zh/docs/getting-started/shielded-vs-transparent', 'd79'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/zh/docs/getting-started/what-is-namada',
                component: ComponentCreator('/zh/docs/getting-started/what-is-namada', '52b'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/zh/docs/getting-started/why-privacy-matters',
                component: ComponentCreator('/zh/docs/getting-started/why-privacy-matters', 'a54'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/zh/docs/guides/governance/apply-for-pgf',
                component: ComponentCreator('/zh/docs/guides/governance/apply-for-pgf', '98b'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/zh/docs/guides/governance/create-proposal',
                component: ComponentCreator('/zh/docs/guides/governance/create-proposal', '015'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/zh/docs/guides/governance/vote-on-proposals',
                component: ComponentCreator('/zh/docs/guides/governance/vote-on-proposals', 'a9c'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/zh/docs/guides/staking/choose-validator',
                component: ComponentCreator('/zh/docs/guides/staking/choose-validator', '845'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/zh/docs/guides/staking/claim-rewards',
                component: ComponentCreator('/zh/docs/guides/staking/claim-rewards', 'ac4'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/zh/docs/guides/staking/how-to-stake',
                component: ComponentCreator('/zh/docs/guides/staking/how-to-stake', 'eb0'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/zh/docs/guides/staking/understanding-staking',
                component: ComponentCreator('/zh/docs/guides/staking/understanding-staking', 'ba6'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/zh/docs/guides/transactions/buy-nam',
                component: ComponentCreator('/zh/docs/guides/transactions/buy-nam', '9b8'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/zh/docs/guides/transactions/ibc-transfers',
                component: ComponentCreator('/zh/docs/guides/transactions/ibc-transfers', 'fbf'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/zh/docs/guides/transactions/send-shielded-transaction',
                component: ComponentCreator('/zh/docs/guides/transactions/send-shielded-transaction', 'b29'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/zh/docs/guides/transactions/send-to-wallet',
                component: ComponentCreator('/zh/docs/guides/transactions/send-to-wallet', 'dd0'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/zh/docs/guides/transactions/shield-assets',
                component: ComponentCreator('/zh/docs/guides/transactions/shield-assets', '452'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/zh/docs/guides/transactions/unshield-assets',
                component: ComponentCreator('/zh/docs/guides/transactions/unshield-assets', '06b'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/zh/docs/guides/wallets/cli-wallet-intro',
                component: ComponentCreator('/zh/docs/guides/wallets/cli-wallet-intro', '7dc'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/zh/docs/guides/wallets/install-namada-extension',
                component: ComponentCreator('/zh/docs/guides/wallets/install-namada-extension', '5e0'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/zh/docs/guides/wallets/setup-keplr',
                component: ComponentCreator('/zh/docs/guides/wallets/setup-keplr', 'ca4'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/zh/docs/guides/wallets/wallet-comparison',
                component: ComponentCreator('/zh/docs/guides/wallets/wallet-comparison', '7ce'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/zh/docs/resources/block-explorers',
                component: ComponentCreator('/zh/docs/resources/block-explorers', 'e69'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/zh/docs/resources/community-links',
                component: ComponentCreator('/zh/docs/resources/community-links', '6b2'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/zh/docs/resources/ecosystem-tools',
                component: ComponentCreator('/zh/docs/resources/ecosystem-tools', 'f94'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/zh/docs/resources/faq',
                component: ComponentCreator('/zh/docs/resources/faq', '305'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/zh/docs/resources/glossary',
                component: ComponentCreator('/zh/docs/resources/glossary', '4e0'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/zh/docs/resources/where-to-buy',
                component: ComponentCreator('/zh/docs/resources/where-to-buy', '07b'),
                exact: true,
                sidebar: "mainSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/zh/',
    component: ComponentCreator('/zh/', 'a79'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];

import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground}>
        <div className={styles.gridPattern}></div>
        <div className={styles.glowOrb}></div>
        <div className={styles.glowOrb2}></div>
      </div>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          <span className={styles.titleNam}>Nam</span>
          <span className={styles.titleWiki}>Wiki</span>
        </h1>
        <p className={styles.heroTagline}>
          Learn Namada. Protect Your Privacy.
        </p>
        <p className={styles.heroDescription}>
          The open-source education hub for Namada blockchain. 
          Comprehensive guides, tutorials, and resources built by the community.
        </p>
        <div className={styles.heroButtons}>
          <Link className={styles.buttonPrimary} to="/docs/getting-started/what-is-namada">
            Start Learning
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <Link className={styles.buttonSecondary} to="/docs/guides/wallets/install-namada-extension">
            Setup Wallet
          </Link>
        </div>
        <div className={styles.trustBadges}>
          <div className={styles.badge}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.968 7.968 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>25+ Guides</span>
          </div>
          <div className={styles.badge}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M12 15v2m-6 4l.463-.536a1.745 1.745 0 012.073-.324l.254.127a1.745 1.745 0 002.073-.324L12 18.5M8.21 13.89l7.07-7.07M8.21 13.89L7.5 11.5m.71 2.39l2.39-.71M15.28 6.82l-1.41-1.41M15.28 6.82L14.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Open Source</span>
          </div>
          <div className={styles.badge}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M17 20h-1a4 4 0 00-4 4h0a4 4 0 00-4-4H7a4 4 0 00-4 4v1h18v-1a4 4 0 00-4-4zM12 11a4 4 0 100-8 4 4 0 000 8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Community Driven</span>
          </div>
        </div>
      </div>
    </section>
  );
}

const learningPaths = [
  {
    title: 'Getting Started',
    description: 'New to Namada? Start with the fundamentals of privacy-first blockchain technology.',
    link: '/docs/getting-started/what-is-namada',
    items: ['What is Namada', 'Why Privacy Matters', 'First Steps', 'Quick Start Guide'],
    icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
  },
  {
    title: 'Wallet Setup',
    description: 'Set up and manage your Namada wallets securely for full control of your assets.',
    link: '/docs/guides/wallets/install-namada-extension',
    items: ['Browser Extension', 'Keplr Integration', 'CLI Wallet', 'Wallet Comparison'],
    icon: 'M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3',
  },
  {
    title: 'Transactions',
    description: 'Master shielded transactions and asset management for maximum privacy.',
    link: '/docs/guides/transactions/buy-nam',
    items: ['Buy NAM', 'Shield Assets', 'IBC Transfers', 'Shielded Transactions'],
    icon: 'M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5',
  },
  {
    title: 'Staking & Governance',
    description: 'Participate in network security and community governance decisions.',
    link: '/docs/guides/staking/understanding-staking',
    items: ['Stake NAM', 'Choose Validators', 'Vote on Proposals', 'PGF Funding'],
    icon: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z',
  },
];

function LearningPathsSection() {
  return (
    <section className={styles.learningPaths}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Learning Paths</h2>
          <p className={styles.sectionSubtitle}>
            Choose your path and learn at your own pace
          </p>
        </div>
        <div className={styles.pathsGrid}>
          {learningPaths.map((path, idx) => (
            <Link key={idx} to={path.link} className={styles.pathCard}>
              <div className={styles.pathIcon}>
                <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d={path.icon} />
                </svg>
              </div>
              <h3 className={styles.pathTitle}>{path.title}</h3>
              <p className={styles.pathDescription}>{path.description}</p>
              <ul className={styles.pathItems}>
                {path.items.map((item, i) => (
                  <li key={i}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <span className={styles.pathLink}>
                Explore
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

const concepts = [
  {
    title: 'MASP',
    description: 'Multi-Asset Shielded Pool enables unified privacy for all assets in a single pool.',
    link: '/docs/concepts/masp-explained',
  },
  {
    title: 'zk-SNARKs',
    description: 'Zero-knowledge proofs verify transactions without revealing private data.',
    link: '/docs/concepts/zk-snarks-eli5',
  },
  {
    title: 'Governance',
    description: 'On-chain decision-making through proposals and community voting.',
    link: '/docs/concepts/governance-basics',
  },
  {
    title: 'PGF',
    description: 'Public Goods Funding supports ecosystem development and community projects.',
    link: '/docs/concepts/pgf-system',
  },
];

function ConceptsSection() {
  return (
    <section className={styles.concepts}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionBadge}>Core Concepts</span>
          <h2 className={styles.sectionTitle}>Understand the Technology</h2>
          <p className={styles.sectionSubtitle}>
            Deep dive into the technology powering Namada
          </p>
        </div>
        <div className={styles.conceptsGrid}>
          {concepts.map((concept, idx) => (
            <Link key={idx} to={concept.link} className={styles.conceptCard}>
              <h3 className={styles.conceptTitle}>{concept.title}</h3>
              <p className={styles.conceptDescription}>{concept.description}</p>
              <span className={styles.conceptLink}>
                Learn more
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7H12M12 7L8 3M12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContributeSection() {
  return (
    <section className={styles.contribute}>
      <div className={styles.container}>
        <div className={styles.contributeContent}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Contribute to NamWiki</h2>
            <p className={styles.contributeText}>
              NamWiki is open source and community-driven. Write guides, 
              translate content, or improve documentation.
            </p>
          </div>
          <div className={styles.contributeOptions}>
            <div className={styles.contributeOption}>
              <div className={styles.optionIconWrap}>
                <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
              <h4>Write Content</h4>
              <p>Create guides and tutorials</p>
            </div>
            <div className={styles.contributeOption}>
              <div className={styles.optionIconWrap}>
                <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
                </svg>
              </div>
              <h4>Translate</h4>
              <p>Help reach global audience</p>
            </div>
            <div className={styles.contributeOption}>
              <div className={styles.optionIconWrap}>
                <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <h4>Review</h4>
              <p>Improve existing content</p>
            </div>
          </div>
          <Link className={styles.buttonPrimary} to="/docs/contributing/how-to-contribute">
            How to Contribute
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

const socialLinks = [
  { name: 'Twitter', url: 'https://twitter.com/namwiki_xyz', icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
  { name: 'Discord', url: 'https://discord.gg/namada', icon: 'M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z' },
  { name: 'Telegram', url: 'https://t.me/namwiki', icon: 'M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z' },
  { name: 'YouTube', url: 'https://youtube.com/@namwiki', icon: 'M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
  { name: 'GitHub', url: 'https://github.com/Jules0x-xyz/namwiki', icon: 'M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z' },
];

function CommunitySection() {
  return (
    <section className={styles.community}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Join the Community</h2>
          <p className={styles.sectionSubtitle}>Connect with the Namada community</p>
        </div>
        <div className={styles.socialLinks}>
          {socialLinks.map((social, idx) => (
            <a key={idx} href={social.url} className={styles.socialLink} target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d={social.icon}/>
              </svg>
              <span>{social.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home(): React.JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Learn Namada"
      description="NamWiki - Community-driven education hub for Namada blockchain. Learn about MASP, shielded transactions, staking, and more.">
      <main>
        <HeroSection />
        <LearningPathsSection />
        <ConceptsSection />
        <ContributeSection />
        <CommunitySection />
      </main>
    </Layout>
  );
}

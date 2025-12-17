import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground}>
        <div className={styles.gridPattern}></div>
      </div>
      <div className={styles.heroContent}>
        <div className={styles.heroLogo}>
          <img src="/img/logo.svg" alt="NamWiki" />
        </div>
        <h1 className={styles.heroTitle}>NamWiki</h1>
        <p className={styles.heroTagline}>
          Your gateway to understanding Namada
        </p>
        <p className={styles.heroDescription}>
          Community-driven education hub for the privacy-first blockchain.
          Learn, contribute, and grow with Namada.
        </p>
        <div className={styles.heroButtons}>
          <Link className={styles.buttonPrimary} to="/docs/getting-started/what-is-namada">
            Start Learning
          </Link>
          <Link className={styles.buttonSecondary} to="/docs/contributing/how-to-contribute">
            Contribute
          </Link>
        </div>
      </div>
    </section>
  );
}

const learningPaths = [
  {
    title: 'Getting Started',
    description: 'New to Namada? Start here with the fundamentals of privacy-first blockchain technology.',
    link: '/docs/getting-started/what-is-namada',
    items: ['What is Namada', 'Why Privacy Matters', 'First Steps', 'Quick Start Guide'],
  },
  {
    title: 'Wallet Setup',
    description: 'Learn how to set up and manage your Namada wallets securely.',
    link: '/docs/guides/wallets/install-namada-extension',
    items: ['Browser Extension', 'Keplr Integration', 'CLI Wallet', 'Wallet Comparison'],
  },
  {
    title: 'Transactions',
    description: 'Master shielded transactions and asset management on Namada.',
    link: '/docs/guides/transactions/buy-nam',
    items: ['Buy NAM', 'Shield Assets', 'IBC Transfers', 'Shielded Transactions'],
  },
  {
    title: 'Staking & Governance',
    description: 'Participate in network security and community decisions.',
    link: '/docs/guides/staking/understanding-staking',
    items: ['Stake NAM', 'Choose Validators', 'Vote on Proposals', 'PGF Funding'],
  },
];

function LearningPathsSection() {
  return (
    <section className={styles.learningPaths}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Learning Paths</h2>
        <p className={styles.sectionSubtitle}>
          Choose your path and start learning at your own pace
        </p>
        <div className={styles.pathsGrid}>
          {learningPaths.map((path, idx) => (
            <Link key={idx} to={path.link} className={styles.pathCard}>
              <h3 className={styles.pathTitle}>{path.title}</h3>
              <p className={styles.pathDescription}>{path.description}</p>
              <ul className={styles.pathItems}>
                {path.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <span className={styles.pathLink}>
                Explore <span className={styles.arrow}>→</span>
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
    description: 'Multi-Asset Shielded Pool - The core privacy technology enabling unified shielded transactions.',
    link: '/docs/concepts/masp-explained',
  },
  {
    title: 'zk-SNARKs',
    description: 'Zero-knowledge proofs that verify transactions without revealing private information.',
    link: '/docs/concepts/zk-snarks-eli5',
  },
  {
    title: 'Governance',
    description: 'Decentralized decision-making through on-chain proposals and community voting.',
    link: '/docs/concepts/governance-basics',
  },
  {
    title: 'PGF',
    description: 'Public Goods Funding mechanism supporting ecosystem development and community projects.',
    link: '/docs/concepts/pgf-system',
  },
];

function ConceptsSection() {
  return (
    <section className={styles.concepts}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Core Concepts</h2>
        <p className={styles.sectionSubtitle}>
          Understand the technology powering Namada
        </p>
        <div className={styles.conceptsGrid}>
          {concepts.map((concept, idx) => (
            <Link key={idx} to={concept.link} className={styles.conceptCard}>
              <h3 className={styles.conceptTitle}>{concept.title}</h3>
              <p className={styles.conceptDescription}>{concept.description}</p>
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
          <h2 className={styles.sectionTitle}>Contribute to NamWiki</h2>
          <p className={styles.contributeText}>
            NamWiki is community-driven and open source. Help us improve by writing guides, 
            fixing errors, translating content, or suggesting improvements.
          </p>
          <div className={styles.contributeOptions}>
            <div className={styles.contributeOption}>
              <h4>Write Content</h4>
              <p>Create guides, tutorials, and educational articles</p>
            </div>
            <div className={styles.contributeOption}>
              <h4>Translate</h4>
              <p>Help translate content to reach a global audience</p>
            </div>
            <div className={styles.contributeOption}>
              <h4>Review</h4>
              <p>Review pull requests and improve existing content</p>
            </div>
          </div>
          <Link className={styles.buttonPrimary} to="/docs/contributing/how-to-contribute">
            Learn How to Contribute
          </Link>
        </div>
      </div>
    </section>
  );
}

function CommunitySection() {
  return (
    <section className={styles.community}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Join the Community</h2>
        <p className={styles.sectionSubtitle}>Connect with the Namada community</p>
        <div className={styles.socialLinks}>
          <a href="https://twitter.com/namwiki_xyz" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            <span>Twitter</span>
          </a>
          <a href="https://discord.gg/namada" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>
            <span>Discord</span>
          </a>
          <a href="https://t.me/namwiki" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
            <span>Telegram</span>
          </a>
          <a href="https://youtube.com/@namwiki" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            <span>YouTube</span>
          </a>
          <a href="https://github.com/Jules0x-xyz/namwiki" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            <span>GitHub</span>
          </a>
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

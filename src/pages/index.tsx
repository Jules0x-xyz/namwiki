import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className={styles.heroTitle}>
          {siteConfig.title}
        </Heading>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--lg"
            to="/docs/getting-started/what-is-namada"
            style={{
              backgroundColor: '#FFFF00',
              color: '#000000',
              border: 'none',
              marginRight: '1rem',
            }}>
            Get Started →
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/guides/wallets/install-namada-extension"
            style={{
              backgroundColor: 'transparent',
              color: '#FFFFFF',
              border: '2px solid #FFFFFF',
            }}>
            View Guides
          </Link>
        </div>
      </div>
    </header>
  );
}

function StatsBar() {
  const stats = [
    { icon: '📚', value: '25+', label: 'Wiki Pages' },
    { icon: '🤝', value: '8+', label: 'Contributors' },
    { icon: '📧', value: '100+', label: 'Newsletter Subs' },
    { icon: '⭐', value: '15+', label: 'GitHub Stars' },
  ];

  return (
    <section className={styles.statsBar}>
      <div className="container">
        <div className={styles.statsGrid}>
          {stats.map((stat, idx) => (
            <div key={idx} className={styles.statItem}>
              <span className={styles.statIcon}>{stat.icon}</span>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PopularGuides() {
  const guides = [
    {
      icon: '🚀',
      title: 'What is Namada?',
      description: 'Learn the basics of Namada blockchain and its privacy features.',
      link: '/docs/getting-started/what-is-namada',
      difficulty: 'Beginner',
      time: '5 min',
    },
    {
      icon: '🛡️',
      title: 'Shield Your Assets',
      description: 'Step-by-step guide to making your transactions private.',
      link: '/docs/guides/transactions/shield-assets',
      difficulty: 'Beginner',
      time: '2 min',
    },
    {
      icon: '💰',
      title: 'Start Staking',
      description: 'Earn rewards by staking your NAM tokens.',
      link: '/docs/guides/staking/how-to-stake',
      difficulty: 'Beginner',
      time: '5 min',
    },
    {
      icon: '🔐',
      title: 'MASP Explained',
      description: 'Understand the technology behind Namada\'s privacy.',
      link: '/docs/concepts/masp-explained',
      difficulty: 'Intermediate',
      time: '10 min',
    },
    {
      icon: '🌐',
      title: 'IBC Transfers',
      description: 'Move assets between Namada and other Cosmos chains.',
      link: '/docs/guides/transactions/ibc-transfers',
      difficulty: 'Intermediate',
      time: '5 min',
    },
    {
      icon: '🗳️',
      title: 'Vote on Proposals',
      description: 'Participate in Namada governance.',
      link: '/docs/guides/governance/vote-on-proposals',
      difficulty: 'Beginner',
      time: '5 min',
    },
  ];

  return (
    <section className={styles.popularGuides}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          📖 Popular Guides
        </Heading>
        <div className={styles.guidesGrid}>
          {guides.map((guide, idx) => (
            <Link key={idx} to={guide.link} className={styles.guideCard}>
              <div className={styles.guideIcon}>{guide.icon}</div>
              <div className={styles.guideContent}>
                <h3>{guide.title}</h3>
                <p>{guide.description}</p>
                <div className={styles.guideMeta}>
                  <span className={clsx(styles.badge, styles[`badge${guide.difficulty}`])}>
                    {guide.difficulty}
                  </span>
                  <span className={styles.timeEstimate}>⏱️ {guide.time}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function LearningPaths() {
  const paths = [
    {
      title: '🌱 Complete Beginner',
      description: 'New to Namada? Start here.',
      steps: [
        { text: 'What is Namada?', link: '/docs/getting-started/what-is-namada' },
        { text: 'Install Wallet', link: '/docs/guides/wallets/install-namada-extension' },
        { text: 'Buy NAM', link: '/docs/guides/transactions/buy-nam' },
        { text: 'Shield Assets', link: '/docs/guides/transactions/shield-assets' },
      ],
    },
    {
      title: '🛡️ Privacy Focused',
      description: 'Maximize your privacy on Namada.',
      steps: [
        { text: 'Why Privacy Matters', link: '/docs/getting-started/why-privacy-matters' },
        { text: 'MASP Explained', link: '/docs/concepts/masp-explained' },
        { text: 'Privacy Best Practices', link: '/docs/concepts/privacy-best-practices' },
        { text: 'Shielded Transactions', link: '/docs/guides/transactions/send-shielded-transaction' },
      ],
    },
    {
      title: '💎 DeFi & Staking',
      description: 'Put your assets to work.',
      steps: [
        { text: 'Understanding Staking', link: '/docs/guides/staking/understanding-staking' },
        { text: 'Choose a Validator', link: '/docs/guides/staking/choose-validator' },
        { text: 'How to Stake', link: '/docs/guides/staking/how-to-stake' },
        { text: 'IBC Transfers', link: '/docs/guides/transactions/ibc-transfers' },
      ],
    },
  ];

  return (
    <section className={styles.learningPaths}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          🎯 Learning Paths
        </Heading>
        <div className={styles.pathsGrid}>
          {paths.map((path, idx) => (
            <div key={idx} className={styles.pathCard}>
              <h3>{path.title}</h3>
              <p>{path.description}</p>
              <ol className={styles.pathSteps}>
                {path.steps.map((step, stepIdx) => (
                  <li key={stepIdx}>
                    <Link to={step.link}>{step.text}</Link>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CommunitySection() {
  return (
    <section className={styles.community}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          🤝 Join the Community
        </Heading>
        <div className={styles.communityGrid}>
          <a
            href="https://discord.gg/namada"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.communityCard}>
            <span className={styles.communityIcon}>💬</span>
            <h3>Discord</h3>
            <p>Join discussions and get help</p>
          </a>
          <a
            href="https://twitter.com/namada"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.communityCard}>
            <span className={styles.communityIcon}>🐦</span>
            <h3>Twitter</h3>
            <p>Latest news and updates</p>
          </a>
          <a
            href="https://forum.namada.net"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.communityCard}>
            <span className={styles.communityIcon}>📝</span>
            <h3>Forum</h3>
            <p>In-depth discussions</p>
          </a>
          <a
            href="https://github.com/namwiki/namwiki"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.communityCard}>
            <span className={styles.communityIcon}>⭐</span>
            <h3>GitHub</h3>
            <p>Contribute to NamWiki</p>
          </a>
        </div>
      </div>
    </section>
  );
}

function NewsletterCTA() {
  return (
    <section className={styles.newsletter}>
      <div className="container">
        <div className={styles.newsletterContent}>
          <Heading as="h2">📧 Stay Updated</Heading>
          <p>Get weekly updates on Namada, new guides, and community news.</p>
          <a
            href="https://namwiki.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.newsletterButton}>
            Subscribe to Newsletter →
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Learn Namada"
      description="Your community-driven Namada education hub. Learn about privacy-first blockchain, shielded transactions, staking, and governance.">
      <HomepageHeader />
      <main>
        <StatsBar />
        <PopularGuides />
        <LearningPaths />
        <HomepageFeatures />
        <CommunitySection />
        <NewsletterCTA />
      </main>
    </Layout>
  );
}

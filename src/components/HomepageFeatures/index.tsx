import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  icon: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Privacy by Default',
    icon: '🛡️',
    description: (
      <>
        Learn how Namada's Multi-Asset Shielded Pool (MASP) enables 
        private transactions for any asset. Your financial privacy matters.
      </>
    ),
  },
  {
    title: 'Community Driven',
    icon: '🤝',
    description: (
      <>
        NamWiki is built by the community, for the community. Everyone 
        can contribute guides, translations, and improvements.
      </>
    ),
  },
  {
    title: 'Learn at Your Pace',
    icon: '📚',
    description: (
      <>
        From beginner basics to advanced concepts, find guides tailored 
        to your experience level. Start anywhere, learn everything.
      </>
    ),
  },
];

function Feature({title, icon, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <span className={styles.featureIcon}>{icon}</span>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

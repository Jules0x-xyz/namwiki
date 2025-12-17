import React from 'react';
import Layout from '@theme/Layout';
import styles from './videos.module.css';

const channels = [
  {
    name: 'Namada Official',
    url: 'https://youtube.com/@namaboratory',
    description: 'Official Namada tutorials and updates',
  },
  {
    name: 'NamWiki',
    url: 'https://youtube.com/@namwiki',
    description: 'Community tutorials and guides',
  },
];

const videos = [
  {
    title: 'What is Namada? Introduction to Privacy Blockchain',
    channel: 'Namada Official',
    url: 'https://www.youtube.com/watch?v=wLDlNGa4vug',
    description: 'Learn the fundamentals of Namada and why privacy matters in blockchain.',
  },
  {
    title: 'How to Set Up Namada Extension Wallet',
    channel: 'NamWiki',
    url: 'https://youtube.com/watch?v=example2',
    description: 'Step-by-step guide to installing and configuring the Namada browser extension.',
  },
  {
    title: 'Shielding Assets on Namada - Complete Guide',
    channel: 'NamWiki',
    url: 'https://youtube.com/watch?v=example3',
    description: 'Learn how to shield your assets for maximum privacy protection.',
  },
  {
    title: 'Understanding MASP - Multi-Asset Shielded Pool',
    channel: 'Namada Official',
    url: 'https://youtube.com/watch?v=example4',
    description: 'Deep dive into the technology powering Namada privacy features.',
  },
  {
    title: 'Staking NAM - Earn Rewards While Securing the Network',
    channel: 'NamWiki',
    url: 'https://youtube.com/watch?v=example5',
    description: 'Complete tutorial on staking NAM tokens and choosing validators.',
  },
  {
    title: 'IBC Transfers with Namada',
    channel: 'NamWiki',
    url: 'https://youtube.com/watch?v=example6',
    description: 'How to transfer assets between Namada and other Cosmos chains.',
  },
];

export default function Videos(): React.JSX.Element {
  return (
    <Layout
      title="Video Tutorials"
      description="Learn Namada through video tutorials from the community">
      <main className={styles.main}>
        <div className={styles.container}>
          <header className={styles.header}>
            <h1>Video Tutorials</h1>
            <p>Learn Namada through video content from the community</p>
          </header>

          <section className={styles.section}>
            <h2>Community Channels</h2>
            <div className={styles.channelsGrid}>
              {channels.map((channel, idx) => (
                <a key={idx} href={channel.url} className={styles.channelCard} target="_blank" rel="noopener noreferrer">
                  <h3>{channel.name}</h3>
                  <p>{channel.description}</p>
                  <span className={styles.visitLink}>Visit Channel</span>
                </a>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <h2>Featured Videos</h2>
            <div className={styles.videosGrid}>
              {videos.map((video, idx) => (
                <a key={idx} href={video.url} className={styles.videoCard} target="_blank" rel="noopener noreferrer">
                  <div className={styles.videoThumb}>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <div className={styles.videoInfo}>
                    <h3>{video.title}</h3>
                    <span className={styles.channel}>{video.channel}</span>
                    <p>{video.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </section>

          <section className={styles.contribute}>
            <h2>Submit a Video</h2>
            <p>
              Create educational content about Namada? Add your videos to this page by 
              editing the <code>src/pages/videos.tsx</code> file on GitHub.
            </p>
            <a href="https://github.com/Jules0x-xyz/namwiki/edit/main/src/pages/videos.tsx" className={styles.editButton}>
              Add Your Video
            </a>
          </section>
        </div>
      </main>
    </Layout>
  );
}

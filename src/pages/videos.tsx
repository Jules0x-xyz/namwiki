import React from 'react';
import Layout from '@theme/Layout';
import styles from './videos.module.css';

const channels = [
  {
    name: 'Namada',
    url: 'https://www.youtube.com/@namada-net',
    description: 'The official channel for Namada, the asset-agnostic privacy blockchain.',
  },
  {
    name: 'Anoma',
    url: 'https://www.youtube.com/@anomanetwork',
    description: 'Updates and deep dives from the team building Anoma and Namada.',
  },
];

const videos = [
  {
    title: 'Namada: Asset-Agnostic Privacy for the Multichain',
    channel: 'Namada',
    url: 'https://www.youtube.com/watch?v=Yu8WgtbsUoc',
    description: 'A comprehensive overview of Namada\'s mission to provide privacy for any asset across the multichain ecosystem.',
  },
  {
    title: 'Namada Mainnet Roadmap',
    channel: 'Cosmos',
    url: 'https://www.youtube.com/watch?v=RfU0xf1GxjY',
    description: 'Adrian Brink explains the roadmap towards mainnet and what users can expect from the launch phases.',
  },
  {
    title: 'Evolution of the MASP Circuit',
    channel: 'ZK HACK',
    url: 'https://www.youtube.com/watch?v=td7Wm2CmvR4',
    description: 'Technical deep dive into the Multi-Asset Shielded Pool (MASP) and how it enables a unified shielded set.',
  },
  {
    title: 'Modular Privacy for the Interchain',
    channel: 'Namada Community',
    url: 'https://www.youtube.com/watch?v=l5V9kNv6xm4',
    description: 'Park Feierbach discusses how Namada brings modular privacy to the Cosmos ecosystem and beyond.',
  },
  {
    title: 'Protocols & Ecosystems: Vitalik Buterin & Christopher Goes',
    channel: 'De University of Ethereum',
    url: 'https://www.youtube.com/watch?v=emkS4eMrwf8',
    description: 'A campfire chat featuring Namada co-founder Christopher Goes and Vitalik Buterin discussing privacy and protocols.',
  },
  {
    title: 'Namada: Asset-Agnostic Interchain Privacy',
    channel: 'ZK Summit',
    url: 'https://www.youtube.com/watch?v=5K6YxmZPFkE',
    description: 'Chris Goes presents the technical architecture of Namada at ZK8.',
  },
];

// Helper to extract video ID for thumbnail
const getThumbnailUrl = (url) => {
  const videoId = url.split('v=')[1];
  return `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
};

export default function Videos(): React.JSX.Element {
  return (
    <Layout
      title="Video Tutorials"
      description="Learn Namada through video tutorials and deep dives">
      <main className={styles.main}>
        <div className={styles.container}>
          <header className={styles.header}>
            <h1>Video Tutorials</h1>
            <p>Explore talks, guides, and technical deep dives about Namada.</p>
          </header>

          <section className={styles.section}>
            <h2>Official & Community Channels</h2>
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
                    <img 
                      src={getThumbnailUrl(video.url)} 
                      alt={video.title}
                    />
                    <div className={styles.playOverlay}>
                      <svg viewBox="0 0 24 24" fill="currentColor" width="48" height="48">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
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
            <a href="https://github.com/anoma/namada-docs/edit/main/src/pages/videos.tsx" className={styles.editButton}>
              Add Your Video
            </a>
          </section>
        </div>
      </main>
    </Layout>
  );
}

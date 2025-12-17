"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Videos;
var react_1 = require("react");
var Layout_1 = require("@theme/Layout");
var videos_module_css_1 = require("./videos.module.css");
var channels = [
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
var videos = [
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
var getThumbnailUrl = function (url) {
    var videoId = url.split('v=')[1];
    return "https://img.youtube.com/vi/".concat(videoId, "/mqdefault.jpg");
};
function Videos() {
    return (<Layout_1.default title="Video Tutorials" description="Learn Namada through video tutorials and deep dives">
      <main className={videos_module_css_1.default.main}>
        <div className={videos_module_css_1.default.container}>
          <header className={videos_module_css_1.default.header}>
            <h1>Video Tutorials</h1>
            <p>Explore talks, guides, and technical deep dives about Namada.</p>
          </header>

          <section className={videos_module_css_1.default.section}>
            <h2>Official & Community Channels</h2>
            <div className={videos_module_css_1.default.channelsGrid}>
              {channels.map(function (channel, idx) { return (<a key={idx} href={channel.url} className={videos_module_css_1.default.channelCard} target="_blank" rel="noopener noreferrer">
                  <h3>{channel.name}</h3>
                  <p>{channel.description}</p>
                  <span className={videos_module_css_1.default.visitLink}>Visit Channel</span>
                </a>); })}
            </div>
          </section>

          <section className={videos_module_css_1.default.section}>
            <h2>Featured Videos</h2>
            <div className={videos_module_css_1.default.videosGrid}>
              {videos.map(function (video, idx) { return (<a key={idx} href={video.url} className={videos_module_css_1.default.videoCard} target="_blank" rel="noopener noreferrer">
                  <div className={videos_module_css_1.default.videoThumb}>
                    {/* Updated to show real YouTube thumbnail */}
                    <img src={getThumbnailUrl(video.url)} alt={video.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
                    <div className={videos_module_css_1.default.playOverlay}>
                      <svg viewBox="0 0 24 24" fill="currentColor" width="48" height="48">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                  <div className={videos_module_css_1.default.videoInfo}>
                    <h3>{video.title}</h3>
                    <span className={videos_module_css_1.default.channel}>{video.channel}</span>
                    <p>{video.description}</p>
                  </div>
                </a>); })}
            </div>
          </section>

          <section className={videos_module_css_1.default.contribute}>
            <h2>Submit a Video</h2>
            <p>
              Create educational content about Namada? Add your videos to this page by 
              editing the <code>src/pages/videos.tsx</code> file on GitHub.
            </p>
            <a href="https://github.com/anoma/namada-docs/edit/main/src/pages/videos.tsx" className={videos_module_css_1.default.editButton}>
              Add Your Video
            </a>
          </section>
        </div>
      </main>
    </Layout_1.default>);
}

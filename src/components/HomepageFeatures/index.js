"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HomepageFeatures;
var clsx_1 = require("clsx");
var Heading_1 = require("@theme/Heading");
var styles_module_css_1 = require("./styles.module.css");
var FeatureList = [
    {
        title: 'Privacy by Default',
        icon: '🛡️',
        description: (<>
        Learn how Namada's Multi-Asset Shielded Pool (MASP) enables 
        private transactions for any asset. Your financial privacy matters.
      </>),
    },
    {
        title: 'Community Driven',
        icon: '🤝',
        description: (<>
        NamWiki is built by the community, for the community. Everyone 
        can contribute guides, translations, and improvements.
      </>),
    },
    {
        title: 'Learn at Your Pace',
        icon: '📚',
        description: (<>
        From beginner basics to advanced concepts, find guides tailored 
        to your experience level. Start anywhere, learn everything.
      </>),
    },
];
function Feature(_a) {
    var title = _a.title, icon = _a.icon, description = _a.description;
    return (<div className={(0, clsx_1.default)('col col--4')}>
      <div className="text--center">
        <span className={styles_module_css_1.default.featureIcon}>{icon}</span>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading_1.default as="h3">{title}</Heading_1.default>
        <p>{description}</p>
      </div>
    </div>);
}
function HomepageFeatures() {
    return (<section className={styles_module_css_1.default.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map(function (props, idx) { return (<Feature key={idx} {...props}/>); })}
        </div>
      </div>
    </section>);
}

import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.scss';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Studio Enterprise',
    Svg: require('../../static/img/studio_enterprise.svg').default,
    link: "docs/katalon-studio-enterprise/welcome-to-katalon-studio",
  },
  {
    title: 'Runtime Engine',
    Svg: require('../../static/img/runtime_engine.svg').default,
    link: "docs/katalon-runtime-engine/introduction-to-runtime-engine",
  },
  {
    title: 'Recorder',
    Svg: require('../../static/img/recorder.svg').default,
    link: "docs/katalon-recorder/get-started/overview",
  },
  {
    title: 'TestCloud',
    Svg: require('../../static/img/testcloud.svg').default,
    link: "docs/katalon-testcloud-trial/overview",
  },
  {
    title: 'TestOps',
    Svg: require('../../static/img/testops.svg').default,
    link: "docs/katalon-testops/overview/testops-overview",
  },
  {
    title: 'Store',
    Svg: require('../../static/img/store.svg').default,
    link: "docs/katalon-store/overview",
  },
];

function Feature({title, Svg, link}) {
  console.log(link);
  return (
    <Link
      className={clsx('col col--4')}
      to={link}
    >
      <div className={styles.featuresItem}>
        <div className={styles.featureSvg}>
          <Svg alt={title} />
        </div>
        <p className={styles.featuresText}>{title}</p>
      </div>
    </Link>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className={clsx("container", styles.container)}>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

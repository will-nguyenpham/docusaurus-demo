import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.scss';

const FeatureList = [
  {
    title: 'Studio Enterprise',
    Svg: require('../../static/img/studio_enterprise.svg').default,
  },
  {
    title: 'Runtime Engine',
    Svg: require('../../static/img/runtime_engine.svg').default,
  },
  {
    title: 'Recorder',
    Svg: require('../../static/img/recorder.svg').default,
  },

  {
    title: 'TestCloud',
    Svg: require('../../static/img/testcloud.svg').default,
  },
  {
    title: 'TestOps',
    Svg: require('../../static/img/testops.svg').default,
  },
  {
    title: 'Store',
    Svg: require('../../static/img/store.svg').default,
  },
];

function Feature({Svg, title}) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featuresItem}>
        <div className={styles.featureSvg}>
          <Svg alt={title} />
        </div>
        <p className={styles.featuresText}>{title}</p>
      </div>
    </div>
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

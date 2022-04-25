import React, { useState } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import algoliasearch from 'algoliasearch/lite';
import { InstantSearch } from 'react-instantsearch-hooks';

import { Autocomplete, Hit } from '../components';
import {
  INSTANT_SEARCH_INDEX_NAME,
} from '../constants';
import { Hits } from '../widgets';
import { PoweredBy } from '../components/PoweredBy';
import styles from './index.module.scss';

const searchClient = algoliasearch('UQL9BM5A25', '143af23005cba6484bb0f68b4509db5f');

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.header}>
      <h3 className={styles.header.title}>{siteConfig.title}</h3>
    </header>
  );
}

function search(hide, setHide) {
  return (
    <div style={{ width: "45%", position: "absolute", left: 0, right: 0, margin: "auto", marginTop: "-41px" }}>
      <InstantSearch
        searchClient={searchClient}
        indexName={INSTANT_SEARCH_INDEX_NAME}
        routing
      >
        <Autocomplete
          searchClient={searchClient}
          placeholder="Search documentation..."
          detachedMediaQuery="none"
          openOnFocus
          hideResult={isHide => setHide(isHide)}
        />

        <div className={styles.searchResult} hidden={hide}>
          <div className={styles.headerSearch}>
            <p className={styles.titleSearch}>Documentation</p>
            <PoweredBy />
          </div>
          <div style={{ height: "1px", background: "#D9E2EC", marginBottom: "20px", marginRight: "26px" }}/>
          <Hits hitComponent={Hit} />
        </div>
      </InstantSearch>
    </div>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const [hide, setHide] = useState(true);

  return (
    <Layout>
      <div onClick={(event) => {
        if ((event.target as Element).value == undefined) {
          setHide(true);
        }
      }}>
        <HomepageHeader />
        {search(hide, setHide)}
        <main>
          <HomepageFeatures />
        </main>
      </div>
    </Layout>
  );
}

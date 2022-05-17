import React, { useState, useEffect } from 'react';
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

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.header}>
      <h3 className={styles.header.title}>{siteConfig.title}</h3>
    </header>
  );
}

function search(hide, setHide, searchClient, siteConfig) {
  return (
    <div style={{ width: "45%", position: "absolute", left: 0, right: 0, margin: "auto", marginTop: "-41px" }}>
      <InstantSearch
        searchClient={searchClient}
        indexName={siteConfig.customFields.indexName}
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

var searchClient;

const useScript = url => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = url;
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, [url]);
};

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  if (searchClient == undefined) {
    searchClient = algoliasearch(siteConfig.customFields.appId, siteConfig.customFields.apiKey);
  }
  const [hide, setHide] = useState(true);

  // useEffect(() => {
  //   var s = document.createElement('script');
  //   s.src = 'https://survey.survicate.com/workspaces/49a2b0dd562f389f2cb160ecd548a345/web_surveys.js';
  //   // s.type = 'text/javascript';
  //   s.async = true;
  //   var e = document.getElementsByTagName('script')[0];
  //   e.parentNode.insertBefore(s, e);
  //   // console.log(e);
  // }, []);

  useScript('https://survey.survicate.com/workspaces/49a2b0dd562f389f2cb160ecd548a345/web_surveys.js');

  return (
    <Layout>
      <div onClick={(event) => {
        if ((event.target as Element).value == undefined) {
          setHide(true);
        }
      }}>
        <HomepageHeader />
        {search(hide, setHide, searchClient, siteConfig)}
        <main>
          <HomepageFeatures />
        </main>
      </div>
    </Layout>
  );
}

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// const env = require('dotenv').config();

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Katalon docs',
  tagline: '',
  url: 'https://docs-dev.katalon.com',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  favicon: 'img/logo.svg',
  organizationName: 'Katalon',
  projectName: 'Katalon Docs',
  trailingSlash: false,
  customFields: {
    // "appId": process.env.APPLICATION_ID,
    // "indexName": process.env.INDEX_NAME,
    // "apiKey": process.env.API_KEY_SEARCH,
    "appId": "UQL9BM5A25",
    "indexName": "docs",
    "apiKey": "143af23005cba6484bb0f68b4509db5f",
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          lastVersion: 'current',
          versions: {
            current: {
              label: 'current',
            },
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
            autoCollapseCategories: true,
            hideable: true,
        },
      },
      navbar: {
        title: 'Katalon Docs',
        hideOnScroll: true,
        logo: {
          alt: 'Katalon Docs Logo',
          src: 'img/logo.svg',
          srcDark: 'img/white_logo.svg',
        },
        items: [
          {
            type: 'search',
            position: 'left',
          },
          {
            type: 'docsVersionDropdown',
            position: 'left',
            // dropdownItemsAfter: [{to: '/versions', label: 'All versions'}],
            dropdownActiveClassDisabled: true,
            className: 'version-items-text',
          },
          {
            type: 'dropdown',
            position: 'right',
            label: 'API Docs',
            className: 'bar-items-text',
            items: [
                {
                    label: 'Katalon Studio',
                    to: 'https://api-docs.katalon.com/overview-summary.html',
                    className: 'bar-items-text',
                },
                {
                    label: 'Katalon TestOps',
                    to: 'https://analytics.katalon.com/swagger-ui/index.html#/',
                    className: 'bar-items-text',
                },
            ]
          },
          {
            to: 'https://forum.katalon.com/',
            label: 'Community',
            position: 'right',
            className: 'bar-items-text',
          },
          {
            to: 'https://academy.katalon.com/?utm_source=menu&utm_medium=docs',
            label: 'Academy',
            position: 'right',
            className: 'bar-items-text',
          },
          {
            to: 'https://www.katalon.com/download/',
            label: 'Start Now',
            position: 'right',
            className: 'bar-items-download',
          },
        ],
      },
      algolia: {
        // appId: process.env.APPLICATION_ID,
        // indexName: process.env.INDEX_NAME,
        // apiKey: process.env.API_KEY_SEARCH,
        appId: "UQL9BM5A25",
        indexName: "docs",
        apiKey: "143af23005cba6484bb0f68b4509db5f",
  
        // Optional: see doc section bellow
        contextualSearch: true,

        // Optional: Algolia search parameters
        searchParameters: {
            hitsPerPage: 20,
            clickAnalytics: true,
            analytics: true,
            advancedSyntax: true,
        },

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
  
        //... other Algolia params
        selector: 'div#',
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'PRODUCTS',
            items: [
              {
                label: 'Katalon Studio',
                to: 'https://katalon.com/katalon-studio',
              },
              {
                label: 'Katalon Recorder',
                to: 'https://katalon.com/katalon-recorder-ide',
              },
              {
                label: 'Katalon TestOps',
                to: 'https://katalon.com/testops/',
              },
              {
                label: 'Katalon TestCloud',
                to: 'https://katalon.com/testcloud',
              },
              {
                label: 'Katalon Store',
                to: 'https://store.katalon.com/',
              },
              {
                label: 'Pricing',
                to: 'https://katalon.com/pricing/',
              },
            ],
          },
          {
            title: 'SOLUTIONS',
            items: [
              {
                // html: `<div style="display: flex; flex-direction: row;"><a href="https://katalon.com/visual-testing" class="footer__link-item" target="_blank">Visual Testing</a><img src="https://katalon-prod-asset.s3.amazonaws.com/themes/katalon_4/images/pages/pricing_landing_page/new_july_2022/new_mark.svg" alt="Visual Testing" class="new_mark_icon" style="margin: -3px 0 0 5px"></div>`
                label: 'Visual Testing',
                to: 'https://katalon.com/visual-testing',
              },
              {
                label: 'Web Testing',
                to: 'https://katalon.com/web-testing',
              },
              {
                label: 'API Testing',
                to: 'https://katalon.com/api-testing',
              },
              {
                label: 'Mobile Testing',
                to: 'https://katalon.com/mobile-testing',
              },
              {
                label: 'Desktop Testing',
                to: 'https://katalon.com/desktop-testing/',
              },
              {
                label: 'Integrations',
                to: 'https://katalon.com/integrations',
              },
            ],
          },
          {
            title: 'SUPPORT',
            items: [
              {
                label: 'Blog',
                to: 'https://katalon.com/resources-center/blog',
              },
              {
                label: 'Community',
                to: 'https://forum.katalon.com/',
              },
              {
                label: 'Docs',
                to: '/',
              },
              {
                label: 'Help Center',
                to: 'https://katalonsupport.force.com/katalonhelpcenter/s/',
              },
              {
                label: 'Training',
                to: 'https://academy.katalon.com/',
              },
              {
                label: 'Webinars',
                to: 'https://katalon.com/webinars',
              },             
            ],
          },
          {
            title: 'COMPANY',
            items: [
              {
                label: 'About Katalon',
                to: 'https://katalon.com/about-us/',
              },
              {
                label: 'Careers',
                to: 'https://apply.workable.com/katalon/',
              },
              {
                label: 'News',
                to: 'https://katalon.com/resources-center/blog/tag/news',
              },
              {
                label: 'Partners',
                to: 'https://katalon.com/partners/',
              },
              {
                label: 'Success Stories',
                to: 'https://katalon.com/case-studies/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Katalon LLC. All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      zoom: {
        selector: '.markdown :not(em) > img',
        config: {
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
          background: {
            light: 'rgb(255, 255, 255)',
            dark: 'rgb(50, 50, 50)'
          }
        }
      },
    }),

  plugins: [
    'docusaurus-plugin-sass',
    'docusaurus-plugin-image-zoom',
    [
      '@docusaurus/plugin-client-redirects',
      // highlight-start
      {
        redirects: [
            {
                to: "/javadoc",
                from: [
                    "/javadoc/index.html"
                ]
            }
        ],
      },
    // highlight-end
    ],
  ],
};

module.exports = config;

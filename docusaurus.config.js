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
        title: 'Katalon docs',
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
            to: 'https://katalon.com/sign-up',
            label: 'Start now',
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
            title: 'WHY KATALON',
            items: [
              {
                label: 'Business Outcomes',
                to: 'https://katalon.com/business-outcomes',
              },
              {
                label: 'Easy speed',
                to: 'https://katalon.com/business-outcomes#easyspeed',
              },
              {
                label: 'Flexibility, Scalability',
                to: 'https://katalon.com/business-outcomes#flexibility',
              },
              {
                label: 'Visibility',
                to: 'https://katalon.com/business-outcomes#visibility',
              },
              {
                label: 'Innovation & AI',
                to: 'https://katalon.com/business-outcomes#innovation',
              },
              {
                label: 'Low cost, High ROI',
                to: 'https://katalon.com/business-outcomes#lowcost',
              },
            ],
          },
          {
            title: 'PLATFORM',
            items: [
              {
                 label: 'Platform Overview',
                 to: 'https://katalon.com/katalon-platform',
              },
              {
                label: 'Katalon Studio',
                to: 'https://katalon.com/katalon-studio',
              },
            //   {
            //     label: 'Katalon Recorder',
            //     to: 'https://katalon.com/katalon-recorder-ide',
            //   },
              {
                label: 'Katalon TestOps',
                to: 'https://katalon.com/testops/',
              },
              {
                label: 'Katalon TestCloud',
                to: 'https://katalon.com/testcloud',
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
            title: 'RESOURCES',
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
                label: 'Success Stories',
                to: 'https://katalon.com/case-studies/',
              },
              {
                label: 'Technical Support',
                to: 'https://katalonsupport.force.com/katalonhelpcenter/s/',
              },
              {
                label: 'Webinars',
                to: 'https://katalon.com/webinars',
              },             
            ],
          },
          {
            title: 'DOCS',
            items: [
                {
                    label: 'Documentation',
                    to: '/',
                },
                {
                    label: 'Getting Started',
                    to: '/docs',
                },
                {
                    label: 'Image Library on Docker',
                    to: '/docs/execute/katalon-runtime-engine/katalon-docker-image',
                },
                {
                    label: 'Sample Projects on Github',
                    to: 'https://github.com/katalon-studio-samples',
                },
            ]
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
                label: 'Events',
                to: 'https://katalon.com/webinars/#events',
              },
              {
                label: 'News',
                to: 'https://katalon.com/resources-center/blog/tag/news',
              },
              {
                label: 'Partners',
                to: 'https://katalon.com/partners/',
              }
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
    ['plugin-auto-redirect', {
        s3Config: {
          accessKeyId: "AKIATMYDRPBP4LNWDQNO",
          secretAccessKey: "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",
          bucket: "katalon-staging-docs",
          key: "katalondocs",
          region: "us-east-1"
        }
    }
    ],
],
};

module.exports = config;

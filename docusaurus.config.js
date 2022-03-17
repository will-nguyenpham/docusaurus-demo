// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Katalon docs',
  tagline: 'Dinosaurs are cool',
  url: 'https://will-nguyenpham.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/logo.svg',
  organizationName: 'will-nguyenpham', // Usually your GitHub org/user name.
  projectName: 'docusaurus-demo', // Usually your repo name.
  trailingSlash: false,
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/will-nguyenpham/docusaurus-demo/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/will-nguyenpham/docusaurus-demo/',
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
      navbar: {
        title: 'Katalon Docs',
        hideOnScroll: true,
        logo: {
          alt: 'Katalon Docs Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'search',
            position: 'left',
          },
          {
            href: '/docs',
            position: 'right',
            label: 'Docs',
            className: 'bar-items-text',
          },
          {
            to: 'https://forum.katalon.com/',
            label: 'Community',
            position: 'right',
            className: 'bar-items-text',
          },
          {
            to: 'https://academy.katalon.com/',
            label: 'Academy',
            position: 'right',
            className: 'bar-items-text',
          },
          {
            to: 'https://www.katalon.com/download/',
            label: 'Download now',
            position: 'right',
            className: 'bar-items-download',
          },
        ],
      },
      algolia: {
        appId: 'UQL9BM5A25',
        indexName: 'docs',
        apiKey: '143af23005cba6484bb0f68b4509db5f',
  
        // Optional: see doc section bellow
        contextualSearch: true,
  
        //... other Algolia params
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
              {
                label: 'Methodologies',
                to: 'https://katalon.com/methodologies',
              },
            ],
          },
          {
            title: 'SUPPORT',
            items: [
              {
                label: 'Help Center',
                to: 'https://support.katalon.com/hc/en-us',
              },
              {
                label: 'Docs',
                to: '/docs',
              },
              {
                label: 'Community',
                to: 'https://forum.katalon.com/',
              },
              {
                label: 'Repository',
                to: 'https://github.com/katalon-studio/katalon-studio',
              },
              {
                label: 'Webinars',
                to: 'https://katalon.com/webinars',
              },
              {
                label: 'Training',
                to: 'https://academy.katalon.com/',
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
                label: 'Blog',
                to: 'https://katalon.com/resources-center/blog',
              },
              {
                label: 'Partners',
                to: 'https://katalon.com/partners/',
              },
              {
                label: 'Customer Stories',
                to: 'https://katalon.com/case-studies/',
              },
              {
                label: 'Careers',
                to: 'https://apply.workable.com/katalon/',
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
      autoCollapseSidebarCategories: true,
      hideableSidebar: true,
    }),

  plugins: ['docusaurus-plugin-sass'],
};

module.exports = config;

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// const env = require('dotenv').config();

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Katalon Docs',
  tagline: '',
  url: 'https://docs.katalon.com',
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
    "appId": "5E7YZB1TD0",
    "indexName": "docs_dita",
    "apiKey": "719e4773c20547dc1c567a1ffc409f29",
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
        title: 'Katalon docs',
        hideOnScroll: false,
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
            label: 'Developer docs',
            className: 'bar-items-text',
            items: [
                {
                    label: 'TestOps API',
                    to: 'https://developers.katalon.com/reference/api-reference',
                    className: 'bar-items-text',
                },
                {
                    label: 'Studio javadoc',
                    to: 'https://api-docs.katalon.com/overview-summary.html',
                    className: 'bar-items-text',
                }
                
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
        appId: "5E7YZB1TD0",
        indexName: "docs_dita",
        apiKey: "719e4773c20547dc1c567a1ffc409f29",
  
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
    [
      '@docusaurus/plugin-client-redirects',
      // highlight-start
      {
        redirects: [
            {
                "to": "/javadoc",
                "from": [
                    "/javadoc/index.html"
                ]
            },
            {
                "to": "/docs",
                "from": [
                    "/katalon-studio/docs/index.html",
                    "/index.html",
                    "/display/KD/"
                ]
            },
            {
                "to": "/docs/plugins-and-add-ons/katalon-store/katalon-store-overview",
                "from": [
                    "/docs/plugins-and-add-ons/index.html",
                    "/docs/plugins-and-add-ons/"
                ]
            },
//             {
//                 "to": "/docs/get-started/onboarding-katalon-platform/exploring-katalon-studio",
//                 "from": [
//                     "/docs/legacy/katalon-studio-enterprise/welcome-to-katalon-studio",
//                     "/katalon-studio/docs/overview.html",
//                     "/display/KD/Overview/",
//                     "/x/oArR/"
//                  ]
//             },
            {
                "to": "/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-common-exceptions/unable-to-open-recent-projects-in-katalon-studio---platform-edition",
                "from": [
                    "/docs/test-generation/troubleshooting-for-test-generation/troubleshoot-common-exceptions/troubleshoot-common-exceptions-for-test-generation"
                ]
            },
            {
                "to": "/docs/administer/katalon-platform-packages/katalon-platform-trial-plans",
                "from": [
                    "/docs/administration/katalon-platform-offerings/request-trial"
                ]
            },
            {
                "to": "/docs/plugins-and-add-ons/katalon-recorder-extension/get-started/katalon-recorder-overview",
                "from": [
                    "/katalon-recorder/docs/overview.html",
                    "/display/KR/Overview/",
                    "/x/_RHR/",
                    "/x/cRtO/",
                    "/katalon-recorder/docs/overview/",
                    "/docs/katalon-recorder/get-started/overview",
                    "/docs/legacy/katalon-recorder/get-started/overview"
                ]
            },
            {
                "to": "/docs/plugins-and-add-ons/katalon-recorder-extension/get-started/katalon-recorder-gui-overview",
                "from": [
                    "/katalon-recorder/docs/gui-overview.html",
                    "/display/KR/GUI+Overview/",
                    "/display/KR/GUI%20Overview/",
                    "/x/LAHR/",
                    "/katalon-recorder/docs/gui-overview/",
                    "/docs/katalon-recorder/get-started/gui-overview",
                    "/docs/legacy/katalon-recorder/get-started/gui-overview"
                ]
            },
            {
                "to": "/docs/plugins-and-add-ons/katalon-recorder-extension/get-started/release-notes",
                "from": [
                    "/katalon-recorder/docs/release-notes.html",
                    "/display/KR/Release+Notes/",
                    "/display/KR/Release%20Notes/",
                    "/x/JwHR/",
                    "/katalon-recorder/docs/release-notes/",
                    "/docs/katalon-recorder/get-started/release-notes",
                    "/docs/legacy/katalon-recorder/get-started/release-notes"
                ]
            },
            {
                "to": "/docs/plugins-and-add-ons/katalon-recorder-extension/production-evaluation-center/katalon-recorder-vs-selenium-ide",
                "from": [
                    "/katalon-recorder/docs/katalon-recorder-vs-selenium-ide.html",
                    "/docs/katalon-recorder/production-evaluation-center/katalon-recorder-vs-selenium-ide",
                    "/docs/legacy/katalon-recorder/production-evaluation-center/katalon-recorder-vs-selenium-ide"
                ]
            },
            {
                "to": "/docs/plugins-and-add-ons/katalon-recorder-extension/production-evaluation-center/katalon-recorder-vs-alternatives",
                "from": [
                    "/katalon-recorder/docs/katalon-recorder-vs-alternatives.html",
                    "/docs/katalon-recorder/production-evaluation-center/katalon-recorder-vs-alternatives",
                    "/docs/legacy/katalon-recorder/production-evaluation-center/katalon-recorder-vs-alternatives"
                ]
            },
            {
                "to": "/docs/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/automate-scenarios/selenese-selenium-ide-commands-reference",
                "from": [
                    "/katalon-recorder/docs/selenese-selenium-ide-commands-reference.html",
                    "/display/KR/Selenese+%28Selenium+IDE%29+Commands+Reference/",
                    "/display/KR/Selenese%20%28Selenium%20IDE%29%20Commands%20Reference/",
                    "/x/dhtO/",
                    "/katalon-recorder/docs/selenese-selenium-ide-commands-reference/",
                    "/docs/katalon-recorder/get-your-job-done/automate-scenarios/selenese-selenium-ide-commands-reference",
                    "/docs/legacy/katalon-recorder/get-your-job-done/automate-scenarios/selenese-selenium-ide-commands-reference"
                ]
            },
            {
                "to": "/docs/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/automate-scenarios/create-your-first-automation-script-in-katalon-recorder",
                "from": [
                    "/katalon-recorder/docs/automate-scenarios.html",
                    "/docs/katalon-recorder/get-your-job-done/automate-scenarios/create-your-first-automation-script",
                    "/docs/legacy/katalon-recorder/get-your-job-done/automate-scenarios/create-your-first-automation-script"
                ]
            },
            {
                "to": "/docs/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/automate-scenarios/control-the-flows/handle-conditional-cases-in-your-tests-with-katalon-recorder",
                "from": [
                    "/katalon-recorder/docs/conditional-cases.html",
                    "/docs/katalon-recorder/get-your-job-done/automate-scenarios/control-the-flows/handle-conditional-cases-in-your-tests",
                    "/docs/legacy/katalon-recorder/get-your-job-done/automate-scenarios/control-the-flows/handle-conditional-cases-in-your-tests"
                ]
            },
            {
                "to": "/docs/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/automate-scenarios/control-the-flows/how-to-use-control-flow-commands-in-a-test-case-in-katalon-recorder",
                "from": [
                    "/katalon-recorder/docs/how-to-use-conditional-statements-in-a-test-case.html",
                    "/docs/katalon-recorder/get-your-job-done/automate-scenarios/control-the-flows/how-to-use-control-flow-commands-in-a-test-case",
                    "/docs/legacy/katalon-recorder/get-your-job-done/automate-scenarios/control-the-flows/how-to-use-control-flow-commands-in-a-test-case"
                ]
            },
            {
                "to": "/docs/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/automate-scenarios/how-to-extract-and-verify-textual-patterns-in-a-test-case-with-katalon-recorder",
                "from": [
                    "/katalon-recorder/docs/how-to-extract-and-verify-textual-patterns-in-a-test-case.html",
                    "/docs/katalon-recorder/get-your-job-done/automate-scenarios/how-to-extract-and-verify-textual-patterns-in-a-test-case",
                    "/docs/legacy/katalon-recorder/get-your-job-done/automate-scenarios/how-to-extract-and-verify-textual-patterns-in-a-test-case"
                ]
            },
            {
                "to": "/docs/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/automate-scenarios/how-to-extract-and-write-data-in-a-test-case-with-katalon-recorder",
                "from": [
                    "/katalon-recorder/docs/write-and-extract-data.html",
                    "/docs/katalon-recorder/get-your-job-done/automate-scenarios/how-to-extract-and-write-data-in-a-test-case",
                    "/docs/legacy/katalon-recorder/get-your-job-done/automate-scenarios/how-to-extract-and-write-data-in-a-test-case"
                ]
            },
            {
                "to": "/docs/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/automate-scenarios/back-up-data-automatically-with-katalon-recorder",
                "from": [
                    "/katalon-recorder/docs/auto-backup.html",
                    "/docs/katalon-recorder/get-your-job-done/automate-scenarios/back-up-data-automatically",
                    "/docs/legacy/katalon-recorder/get-your-job-done/automate-scenarios/back-up-data-automatically"
                ]
            },
            {
                "to": "/docs/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/automate-scenarios/global-variables-in-katalon-recorder",
                "from": [
                    "/katalon-recorder/docs/global-variables.html",
                    "/docs/katalon-recorder/get-your-job-done/automate-scenarios/global-variables",
                    "/docs/legacy/katalon-recorder/get-your-job-done/automate-scenarios/global-variables"
                ]
            },
            {
                "to": "/docs/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/execute-scenarios/use-the-self-healing-function-in-katalon-recorder",
                "from": [
                    "/katalon-recorder/docs/self-healing.html",
                    "/docs/katalon-recorder/get-your-job-done/execute-scenarios/use-the-self-healing-function",
                    "/docs/legacy/katalon-recorder/get-your-job-done/execute-scenarios/use-the-self-healing-function"
                ]
            },
            {
                "to": "/docs/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/execute-scenarios/dynamic-test-suite-in-katalon-recorder",
                "from": [
                    "/katalon-recorder/docs/dynamic-test-suite.html",
                    "/docs/katalon-recorder/get-your-job-done/execute-scenarios/dynamic-test-suite",
                    "/docs/legacy/katalon-recorder/get-your-job-done/execute-scenarios/dynamic-test-suite"
                ]
            },
            {
                "to": "/docs/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/execution-report/view-execution-reports-in-testops",
                "from": [
                    "/katalon-recorder/docs/monitor-scenario-executions.html",
                    "/docs/katalon-recorder/get-your-job-done/execution-report/view-execution-reports-in-testops",
                    "/docs/legacy/katalon-recorder/get-your-job-done/execution-report/view-execution-reports-in-testops"
                ]
            },
            {
                "to": "/docs/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/export-scenarios/export-katalon-recorder-scripts-to-other-frameworks",
                "from": [
                    "/katalon-recorder/docs/export-test-script.html",
                    "/docs/katalon-recorder/get-your-job-done/export-scenarios/export-automation-scripts-to-other-frameworks",
                    "/docs/katalon-recorder/get-your-job-done/export-scenarios/export-katalon-recorder-scripts-to-other-frameworks",
                    "/docs/legacy/katalon-recorder/get-your-job-done/export-scenarios/export-katalon-recorder-scripts-to-other-frameworks"
                ]
            },
            {
                "to": "/docs/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/export-scenarios/export-test-projects-from-katalon-recorder",
                "from": [
                    "/katalon-recorder/docs/export-test-project-to-ks.html",
                    "/docs/katalon-recorder/get-your-job-done/export-scenarios/export-test-projects",
                    "/docs/legacy/katalon-recorder/get-your-job-done/export-scenarios/export-test-projects"
                ]
            },
            {
                "to": "/docs/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/export-scenarios/writing-custom-script-formatter-in-katalon-recorder",
                "from": [
                    "/katalon-recorder/docs/writing-custom-script-formatter.html",
                    "/display/KR/Writing+Custom+Script+Formatter/",
                    "/display/KR/Writing%20Custom%20Script%20Formatter/",
                    "/x/igHR/",
                    "/katalon-recorder/docs/writing-custom-script-formatter/",
                    "/docs/katalon-recorder/get-your-job-done/export-scenarios/writing-custom-script-formatter",
                    "/docs/legacy/katalon-recorder/get-your-job-done/export-scenarios/writing-custom-script-formatter"
                ]
            },
            {
                "to": "/docs/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/data-driven-testing/data-driven-testing-in-katalon-recorder",
                "from": [
                    "/katalon-recorder/docs/data-driven-testing.html",
                    "/katalon-recorder/docs/data-driven-execution.html",
                    "/docs/katalon-recorder/get-your-job-done/data-driven-testing/data-driven-testing-in-katalon-recorder",
                    "/docs/legacy/katalon-recorder/get-your-job-done/data-driven-testing/data-driven-testing-in-katalon-recorder"
                ]
            },
            {
                "to": "/docs/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/data-driven-testing/how-to-implement-data-driven-testing-in-a-test-case-with-katalon-recorder",
                "from": [
                    "/katalon-recorder/docs/implement-data-driven-testing-in-a-test-case.html",
                    "/docs/katalon-recorder/get-your-job-done/data-driven-testing/how-to-implement-data-driven-testing-in-a-test-case",
                    "/docs/legacy/katalon-recorder/get-your-job-done/data-driven-testing/how-to-implement-data-driven-testing-in-a-test-case"
                ]
            },
            {
                "to": "/docs/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/extend-katalon-recorder/katalon-recorder-helper-tool",
                "from": [
                    "/katalon-recorder/docs/katalon-recorder-helper-tool.html",
                    "/display/KR/Katalon+Recorder+Helper+Tool/",
                    "/display/KR/Katalon%20Recorder%20Helper%20Tool/",
                    "/x/PQTR/",
                    "/katalon-recorder/docs/katalon-recorder-helper-tool/",
                    "/docs/katalon-recorder/get-your-job-done/extend-katalon-recorder/katalon-recorder-helper-tool",
                    "/docs/legacy/katalon-recorder/get-your-job-done/extend-katalon-recorder/katalon-recorder-helper-tool"
                ]
            },
            // {
            //     "to": "",
            //     "from": [
            //         "/katalon-recorder/docs/extension-scripts-aka-user-extensionsjs-for-custom-locator-builders-and-actions.html",
            //         "/display/KR/Extension+Scripts+%28AKA+user-extensions.js%29+for+Custom+Locator+Builders+and+Actions/",
            //         "/display/KR/Extension%20Scripts%20%28AKA%20user-extensions.js%29%20for%20Custom%20Locator%20Builders%20and%20Actions/",
            //         "/x/9APR/",
            //         "/katalon-recorder/docs/extension-scripts-aka-user-extensionsjs-for-custom-locator-builders-and-actions/",
            //         "/docs/katalon-recorder/get-your-job-done/extend-katalon-recorder/extension-scripts-aka-user-extensions.js-for-custom-locator-builders-and-actions",
            //         "/docs/legacy/katalon-recorder/get-your-job-done/extend-katalon-recorder/extension-scripts-aka-user-extensions.js-for-custom-locator-builders-and-actions",
            //         "/docs/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/extend-katalon-recorder/extension-scripts-aka-user-extensions.js-for-custom-locator-builders-and-actions-in-katalon-recorder"
            //     ]
            // },
            {
                "to": "/docs/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/extend-katalon-recorder/import-tests-from-selenium-ide-to-katalon-recorder",
                "from": [
                    "/katalon-recorder/docs/import-selenium-ide.html",
                    "/docs/katalon-recorder/get-your-job-done/extend-katalon-recorder/import-tests-from-selenium-ide",
                    "/docs/legacy/katalon-recorder/get-your-job-done/extend-katalon-recorder/import-tests-from-selenium-ide"
                ]
            },
            {
                "to": "/docs/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/extend-katalon-recorder/command-compatibility-between-selenium-ide-and-katalon-recorder",
                "from": [
                    "/katalon-recorder/docs/side-kr-command-compatibility.html",
                    "/docs/katalon-recorder/get-your-job-done/extend-katalon-recorder/command-compatibility-between-selenium-ide-and-kr",
                    "/docs/legacy/katalon-recorder/get-your-job-done/extend-katalon-recorder/command-compatibility-between-selenium-ide-and-kr"
                ]
            },
            {
                "to": "/docs/plugins-and-add-ons/katalon-recorder-extension/help-and-resources/katalon-recorder-samples",
                "from": [
                    "/katalon-recorder/docs/samples.html",
                    "/display/KR/Samples/",
                    "/x/KQHR/",
                    "/katalon-recorder/docs/samples/",
                    "/docs/katalon-recorder/help-and-resources/samples",
                    "/docs/legacy/katalon-recorder/help-and-resources/samples"
                ]
            },
            {
                "to": "/docs/plugins-and-add-ons/katalon-recorder-extension/help-and-resources/katalon-recorder-acknowledgments",
                "from": [
                    "/katalon-recorder/docs/acknowledgments.html",
                    "/display/KR/Acknowledgments/",
                    "/x/pwHR/",
                    "/katalon-recorder/docs/acknowledgments/",
                    "/docs/katalon-recorder/help-and-resources/acknowledgments",
                    "/docs/legacy/katalon-recorder/help-and-resources/acknowledgments"
                ]
            },
            {
                "to": "/docs/plugins-and-add-ons/katalon-recorder-extension/get-your-job-done/execute-scenarios/use-the-command-line-runner-in-katalon-recorder",
                "from": [
                    "/katalon-recorder/docs/command-line-runner.html",
                    "/docs/katalon-recorder/get-your-job-done/execute-scenarios/use-the-command-line-runner",
                    "/docs/legacy/katalon-recorder/get-your-job-done/execute-scenarios/use-the-command-line-runner"
                ]
            },
            {
                "to": "/docs/plugins-and-add-ons/katalon-recorder-extension/help-and-resources/katalon-recorder-faq-and-troubleshooting-instructions",
                "from": [
                    "/katalon-recorder/docs/faq-and-troubleshooting-instructions.html",
                    "/x/7gHR/",
                    "/katalon-recorder/docs/faq-and-troubleshooting-instructions/",
                    "/docs/katalon-recorder/help-and-resources/faq-and-troubleshooting-instructions",
                    "/docs/legacy/katalon-recorder/help-and-resources/faq-and-troubleshooting-instructions"
                ]
            },
            {
                "to": "/docs/get-started/terminology-and-formulas",
                "from": [
                    "/katalon-analytics/docs/testops-terminology.html",
                    "/katalon-analytics/docs/requirement-coverage.html",
                    "/docs/katalon-testops/overview/terminology-and-formulas",
                    "/docs/legacy/katalon-testops/overview/terminology-and-formulas"
                ]
            },
            {
                "to": "/docs/administer/administration-roles/administrative-roles-and-permissions",
                "from": [
                    "/katalon-analytics/docs/testops-roles-privileges.html",
                    "/docs/katalon-testops/get-started/roles-and-permissions",
                    "/docs/legacy/katalon-testops/get-started/roles-and-permissions"
                ]
            },
            {
                "to": "/docs/administer/administration-tasks/join-a-testops-organization",
                "from": [
                    "/katalon-analytics/docs/kt_users_joining_org.html",
                    "/docs/katalon-testops/get-started/join-testops-organizations",
                    "/docs/legacy/katalon-testops/get-started/join-testops-organizations"
                ]
            },
            {
                "to": "/docs/administer/administration-tasks/create-an-organization-and-project",
                "from": [
                    "/katalon-analytics/docs/kt-create-org.html",
                    "/katalon-analytics/docs/manage-org.html",
                    "/docs/katalon-testops/get-started/create-organization-and-project",
                    "/docs/legacy/katalon-testops/get-started/create-organization-and-project"
                ]
            },
            {
                "to": "/docs/administer/administration-tasks/team-management/set-up-teams",
                "from": [
                    "/katalon-analytics/docs/setup-team.html",
                    "/katalon-analytics/docs/setup-team/",
                    "/docs/katalon-testops/get-started/set-up-teams",
                    "/docs/legacy/katalon-testops/get-started/set-up-teams"
                ]
            },
            {
                "to": "/docs/administer/administration-tasks/user-management/manage-users",
                "from": [
                    "/katalon-analytics/docs/kt_invite_user_org.html",
                    "/katalon-analytics/docs/kt-user-role-permission.html",
                    "/display/KA/User+Management/",
                    "/display/KA/User%20Management/",
                    "/x/lQjR/",
                    "/katalon-analytics/docs/user-management/",
                    "/katalon-analytics/docs/user-management.html",
                    "/katalon-analytics/docs/setup-org-team-project/",
                    "/docs/katalon-testops/get-started/manage-users",
                    "/docs/legacy/katalon-testops/get-started/manage-users"
                ]
            },
            {
                "to": "/docs/administer/administration-tasks/manage-user-profile",
                "from": [
                    "/katalon-analytics/docs/manage-user-profile.html",
                    "/docs/katalon-testops/get-started/manage-user-profile",
                    "/docs/legacy/katalon-testops/get-started/manage-user-profile"
                ]
            },
            {
                "to": "/docs/administer/administration-tasks/user-management/transfer-ownership",
                "from": [
                    "/katalon-analytics/docs/kt_transfer_ownership.html",
                    "/docs/katalon-testops/get-started/transfer-ownership",
                    "/docs/legacy/katalon-testops/get-started/transfer-ownership"
                ]
            },
            {
                "to": "/docs/execute/cloud-based-test-execution/test-execution-with-testops/test-execution-with-testops",
                "from": [
                    "/katalon-analytics/docs/test-run-config.html",
                    "/docs/katalon-testops/remote-execution/overview",
                    "/docs/legacy/katalon-testops/remote-execution/overview"
                ]
            },
            // {
            //     "to": "/docs/organize/upload-test-scripts-from-the-git-repository-to-katalon-testops",
            //     "from": [
            //         "/katalon-analytics/docs/git-test-project.html",
            //         "/docs/katalon-testops/remote-execution/script-repository/upload-test-scripts-to-a-script-repository",
            //         "/katalon-analytics/docs/code-repo.html",
            //         "/docs/katalon-testops/remote-execution/script-repository/upload-test-scripts-from-a-git-repository",
            //         "/docs/legacy/katalon-testops/remote-execution/script-repository/upload-test-scripts-from-a-git-repository"
            //     ]
            // },
            {
                "to": "/docs/execute/cloud-based-test-execution/test-execution-with-testops/local-test-environments/create-a-local-test-environment-with-an-agent",
                "from": [
                    "/katalon-analytics/docs/agents.html",
                    "/katalon-analytics/docs/install_kt_agent.html",
                    "/docs/katalon-testops/remote-execution/local-test-environments/create-a-local-test-environment-with-an-agent",
                    "/docs/legacy/katalon-testops/remote-execution/local-test-environments/create-a-local-test-environment-with-an-agent"
                ]
            },
            {
                "to": "/docs/execute/cloud-based-test-execution/test-execution-with-testops/local-test-environments/load-balancing-for-local-test-environments",
                "from": [
                    "/katalon-analytics/docs/load-balancing-agents.html",
                    "/docs/katalon-testops/remote-execution/local-test-environments/load-balancing-for-local-test-environments",
                    "/docs/legacy/katalon-testops/remote-execution/local-test-environments/load-balancing-for-local-test-environments"
                ]
            },
            {
                "to": "/docs/execute/cloud-based-test-execution/test-execution-with-testops/local-test-environments/run-multiple-test-suites-in-parallel-with-agents",
                "from": [
                    "/katalon-analytics/docs/kt_run_parallel_agent.html",
                    "/docs/katalon-testops/remote-execution/local-test-environments/run-multiple-test-suites-in-parallel-with-agents",
                    "/docs/legacy/katalon-testops/remote-execution/local-test-environments/run-multiple-test-suites-in-parallel-with-agents"
                ]
            },
            {
                "to": "/docs/execute/cloud-based-test-execution/test-execution-with-testops/local-test-environments/auto-distributed-executions",
                "from": [
                    "/katalon-analytics/docs/auto-distributed-execution.html",
                    "/docs/katalon-testops/remote-execution/local-test-environments/auto-distributed-executions",
                    "/docs/legacy/katalon-testops/remote-execution/local-test-environments/auto-distributed-executions"
                ]
            },
            {
                "to": "/docs/execute/cloud-based-test-execution/test-execution-with-testops/set-up-docker-test-environments-for-testops",
                "from": [
                    "/katalon-analytics/docs/docker.html",
                    "/docs/katalon-testops/remote-execution/docker-test-environments",
                    "/docs/legacy/katalon-testops/remote-execution/docker-test-environments"
                ]
            },
            {
                "to": "/docs/execute/cloud-based-test-execution/test-execution-with-testops/set-up-kubernetes-test-environments-for-testops",
                "from": [
                    "/katalon-analytics/docs/aws-eks.html",
                    "/docs/katalon-testops/remote-execution/kubernetes-test-environments",
                    "/docs/legacy/katalon-testops/remote-execution/kubernetes-test-environments"
                ]
            },
            {
                "to": "/docs/execute/cloud-based-test-execution/test-execution-with-testops/set-up-circleci-test-environments-for-testops",
                "from": [
                    "/katalon-analytics/docs/circleci.html",
                    "/docs/katalon-testops/remote-execution/circleci-test-environments",
                    "/docs/legacy/katalon-testops/remote-execution/circleci-test-environments"
                ]
            },
            {
                "to": "/docs/execute/schedule-test-execution/schedule-test-runs-in-testops",
                "from": [
                    "/katalon-analytics/docs/create-plan.html",
                    "/katalon-analytics/docs/view-ci-plans.html",
                    "/katalon-analytics/docs/grid-testops-cloud.html",
                    "/katalon-analytics/docs/kt-remote-execution.html",
                    "/katalon-studio/docs/schedule-tests-to-execute.html",
                    "/docs/katalon-testops/test-planning/schedules/schedule-test-runs",
                    "/docs/legacy/katalon-testops/test-planning/schedules/schedule-test-runs"
                ]
            },
            {
                "to": "/docs/execute/schedule-test-execution/execute-test-runs-manually-in-testops",
                "from": [
                    "/katalon-analytics/docs/kt-scheduler.html",
                    "/katalon-analytics/docs/execute-test-run.html",
                    "/docs/katalon-testops/test-planning/schedules/execute-test-runs-manually",
                    "/docs/legacy/katalon-testops/test-planning/schedules/execute-test-runs-manually"
                ]
            },
            {
                "to": "/docs/plan/create-and-edit-releases-in-testops",
                "from": [
                    "/katalon-analytics/docs/kt-release.html",
                    "/katalon-analytics/docs/release.html",
                    "/katalon-analytics/docs/kt-jira-release.html",
                    "/docs/katalon-testops/test-planning/releases",
                    "/docs/katalon-testops/test-planning/create-and-edit-releases-in-testops",
                    "/docs/legacy/katalon-testops/test-planning/create-and-edit-releases-in-testops"
                ]
            },
            {
                "to": "/docs/plan/create-and-manage-builds-in-katalon-testops",
                "from": [
                    "/katalon-analytics/docs/kt-build.html",
                    "/docs/katalon-testops/test-planning/builds",
                    "/docs/legacy/katalon-testops/test-planning/builds"
                ]
            },
            // {
            //     "to": "/docs/organize/view-test-scripts-in-katalon-testops",
            //     "from": [
            //         "/katalon-analytics/docs/test-case-management.html",
            //         "/docs/katalon-testops/test-management/manage-test-cases",
            //         "/docs/legacy/katalon-testops/test-management/manage-test-cases"
            //     ]
            // },
            {
                "to": "/docs/organize/manage-tests/test-suite/manage-test-suites-in-katalon-testops",
                "from": [
                    "/katalon-analytics/docs/test-suite-management.html",
                    "/docs/katalon-testops/test-management/manage-test-suites",
                    "/docs/legacy/katalon-testops/test-management/manage-test-suites"
                ]
            },
            // {
            //     "to": "/docs/analyze/reports/view-test-reports/view-test-reports-in-katalon-testops/view-bdd-test-results-in-katalon-testops",
            //     "from": [
            //         "/katalon-analytics/docs/bdd-test-results.html",
            //         "/docs/katalon-testops/test-management/view-bdd-test-results",
            //         "/docs/legacy/katalon-testops/test-management/view-bdd-test-results"
            //     ]
            // },
            {
                "to": "/docs/analyze/integration-for-test-analyzing/jira-integration/link-test-runs-to-jira-defects-in-katalon-testops",
                "from": [
                    "/katalon-analytics/docs/ka-defects.html",
                    "/katalon-analytics/docs/kt-jira-issue.html",
                    "/docs/katalon-testops/test-management/link-test-runs-to-jira-defects",
                    "/docs/legacy/katalon-testops/test-management/link-test-runs-to-jira-defects"
                ]
            },
            {
                "to": "/docs/plan/integration-for-test-planning/link-test-cases-to-jira-requirements",
                "from": [
                    "/katalon-analytics/docs/ka-integration-jira.html",
                    "/docs/katalon-testops/test-management/link-test-cases-to-jira-requirements",
                    "/docs/legacy/katalon-testops/test-management/link-test-cases-to-jira-requirements"
                ]
            },
            {
                "to": "/docs/analyze/reports/upload-test-reports/upload-junit-and-report-files-to-using-command-line",
                "from": [
                    "/katalon-analytics/docs/project-management-import-cli.html",
                    "/display/KA/From+Command+Line/",
                    "/display/KA/From%20Command%20Line/",
                    "/x/FhbR/",
                    "/katalon-analytics/docs/project-management-import-cli/",
                    "/docs/katalon-testops/integrations/framework-integration/upload-junit-and-katalon-studio-test-results-using-katalon-report-uploader",
                    "/docs/legacy/katalon-testops/integrations/framework-integration/upload-junit-and-katalon-studio-test-results-using-katalon-report-uploader"
                ]
            },
            // {
            //     "to": "/docs/analyze/reports/upload-test-reports/upload-junit-and-katalon-studio-report-files-to-katalon-testops-manually",
            //     "from": [
            //         "/katalon-analytics/docs/testops-uploader.html",
            //         "/docs/katalon-testops/integrations/framework-integration/upload-junit-and-katalon-studio-test-results-via-a-web-browser",
            //         "/docs/legacy/katalon-testops/integrations/framework-integration/upload-junit-and-katalon-studio-test-results-via-a-web-browser"
            //     ]
            // },
            {
                "to": "/docs/analyze/reports/upload-test-reports/upload-reports-from-other-framework/upload-test-reports-from-mocha-to-katalon-testops",
                "from": [
                    "/katalon-analytics/docs/kt-upload-test-mocha.html",
                    "/docs/katalon-testops/integrations/framework-integration/upload-test-to-katalon-testops-via-mocha",
                    "/docs/legacy/katalon-testops/integrations/framework-integration/upload-test-to-katalon-testops-via-mocha"
                ]
            },
            {
                "to": "/docs/analyze/reports/upload-test-reports/upload-reports-from-other-framework/upload-test-reports-from-jest-to-katalon-testops",
                "from": [
                    "/katalon-analytics/docs/kt-upload-test-jest.html",
                    "/docs/katalon-testops/integrations/framework-integration/upload-test-to-katalon-testops-via-jest",
                    "/docs/legacy/katalon-testops/integrations/framework-integration/upload-test-to-katalon-testops-via-jest"
                ]
            },
            {
                "to": "/docs/analyze/reports/upload-test-reports/upload-reports-from-other-framework/upload-test-reports-from-jasmine-to-katalon-testops",
                "from": [
                    "/katalon-analytics/docs/kt-upload-test-jasmine.html",
                    "/docs/katalon-testops/integrations/framework-integration/upload-test-to-katalon-testops-via-jasmine",
                    "/docs/legacy/katalon-testops/integrations/framework-integration/upload-test-to-katalon-testops-via-jasmine"
                ]
            },
            {
                "to": "/docs/analyze/reports/upload-test-reports/upload-reports-from-other-framework/upload-test-reports-from-pytest-to-katalon-testops",
                "from": [
                    "/katalon-analytics/docs/kt-upload-test-pytest.html",
                    "/docs/katalon-testops/integrations/framework-integration/upload-test-to-katalon-testops-via-pytest",
                    "/docs/legacy/katalon-testops/integrations/framework-integration/upload-test-to-katalon-testops-via-pytest"
                ]
            },
            // {
            //     "to": "/docs/organize/integration-for-organizing-tests/jira-integration/enable-katalon-testops---jira-integration-for-test-management",
            //     "from": [
            //         "/katalon-analytics/docs/kt-jira-config.html",
            //         "/katalon-analytics/docs/jira-gadgets.html",
            //         "/docs/katalon-testops/integrations/jira-integration",
            //         "/docs/katalon-testops/integrations/enable-katalon-testops---jira-integration-for-test-management",
            //         "/docs/legacy/katalon-testops/integrations/enable-katalon-testops---jira-integration-for-test-management"
            //     ]
            // },
            {
                "to": "/docs/execute/cloud-based-test-execution/integration-with-other-vendors-for-cloud-execution/kobiton-integration/kobiton-integration-with-testops",
                "from": [
                    "/katalon-analytics/docs/kt_kobiton_integration.html",
                    "/docs/katalon-testops/integrations/kobiton-integration",
                    "/docs/legacy/katalon-testops/integrations/kobiton-integration"
                ]
            },
            {
                "to": "/docs/analyze/integration-for-test-analyzing/slack-integration/manage-test-reports-with-slack---katalon-testops-integration",
                "from": [
                    "/katalon-analytics/docs/slack-integration.html",
                    "/docs/katalon-testops/integrations/slack-integration",
                    "/docs/legacy/katalon-testops/integrations/slack-integration"
                ]
            },
            {
                "to": "/docs/execute/cicd-integrations/jenkins-integration/use-katalon-plugins-for-jenkins-integration/integrate-jenkins-with-testops",
                "from": [
                    "/katalon-analytics/docs/ka-integration-jenkins.html",
                    "/docs/katalon-testops/integrations/jenkins-integration",
                    "/docs/legacy/katalon-testops/integrations/jenkins-integration"
                ]
            },
            {
                "to": "/docs/analyze/reports/manage-reports/override-test-results-status-in-katalon-testops",
                "from": [
                    "/katalon-analytics/docs/kt-change-result-pass-fail.html",
                    "/katalon-analytics/docs/overwrite-test-run.html",
                    "/docs/katalon-testops/test-maintenance/override-test-results-status",
                    "/docs/legacy/katalon-testops/test-maintenance/override-test-results-status"
                ]
            },
            {
                "to": "/docs/analyze/analytics/compare-test-results-in-katalon-testops",
                "from": [
                    "/katalon-analytics/docs/compare-test-results.html",
                    "/docs/katalon-testops/test-maintenance/compare-test-results",
                    "/docs/legacy/katalon-testops/test-maintenance/compare-test-results"
                ]
            },
            {
                "to": "/docs/analyze/reports/view-test-reports/view-test-reports-in-katalon-testops/view-testops-dashboard/testops-dashboard-overview",
                "from": [
                    "/katalon-analytics/docs/dashboard-overview.html",
                    "/docs/katalon-testops/reporting/view-testops-dashboard/testops-dashboard-overview",
                    "/docs/legacy/katalon-testops/reporting/view-testops-dashboard/testops-dashboard-overview"
                ]
            },
            {
                "to": "/docs/analyze/reports/view-test-reports/view-test-reports-in-katalon-testops/view-testops-dashboard/test-activities-reports",
                "from": [
                    "/katalon-analytics/docs/dashboard-test-activities.html",
                    "/docs/katalon-testops/reporting/view-testops-dashboard/test-activities-dashboard",
                    "/docs/katalon-testops/reporting/view-testops-dashboard/test-activities-reports",
                    "/docs/legacy/katalon-testops/reporting/view-testops-dashboard/test-activities-reports"
                ]
            },
            {
                "to": "/docs/analyze/reports/view-test-reports/view-test-reports-in-katalon-testops/view-testops-dashboard/release-readiness-reports",
                "from": [
                    "/katalon-analytics/docs/dashboard-release-readiness.html",
                    "/docs/katalon-testops/reporting/view-testops-dashboard/release-readiness-dashboard",
                    "/docs/katalon-testops/reporting/view-testops-dashboard/release-readiness-reports",
                    "/docs/legacy/katalon-testops/reporting/view-testops-dashboard/release-readiness-reports"
                ]
            },
            {
                "to": "/docs/analyze/reports/view-test-reports/view-test-reports-in-katalon-testops/view-testops-dashboard/productivity-reports",
                "from": [
                    "/katalon-analytics/docs/dashboard-productivity.html",
                    "/docs/katalon-testops/reporting/view-testops-dashboard/productivity-reports",
                    "/docs/legacy/katalon-testops/reporting/view-testops-dashboard/productivity-reports"
                ]
            },
            {
                "to": "/docs/analyze/reports/view-test-reports/view-test-reports-in-katalon-testops/view-testops-dashboard/quality-reports",
                "from": [
                    "/katalon-analytics/docs/dashboard-quality.html",
                    "/docs/katalon-testops/reporting/view-testops-dashboard/quality-dashboard",
                    "/docs/katalon-testops/reporting/view-testops-dashboard/quality-reports",
                    "/docs/legacy/katalon-testops/reporting/view-testops-dashboard/quality-reports"
                ]
            },
            {
                "to": "/docs/analyze/reports/view-test-reports/view-test-reports-in-katalon-testops/view-testops-dashboard/platform-coverage-reports",
                "from": [
                    "/katalon-analytics/docs/dashboard-platform-coverage.html",
                    "/docs/katalon-testops/reporting/view-testops-dashboard/platform-coverage-dashboard",
                    "/docs/katalon-testops/reporting/view-testops-dashboard/platform-coverage-reports",
                    "/docs/legacy/katalon-testops/reporting/view-testops-dashboard/platform-coverage-reports"
                ]
            },
            {
                "to": "/docs/analyze/reports/view-test-reports/view-test-reports-in-katalon-testops/view-testops-dashboard/requirement-coverage-reports",
                "from": [
                    "/katalon-analytics/docs/dashboard-requirement-coverage.html",
                    "/docs/katalon-testops/reporting/view-testops-dashboard/requirement-coverage-dashboard",
                    "/docs/katalon-testops/reporting/view-testops-dashboard/requirement-coverage-reports",
                    "/docs/legacy/katalon-testops/reporting/view-testops-dashboard/requirement-coverage-reports"
                ]
            },
            {
                "to": "/docs/analyze/reports/view-test-reports/view-test-reports-in-katalon-testops/view-testops-dashboard/local-test-environment-reports",
                "from": [
                    "/katalon-analytics/docs/dashboard-local-test-environment.html",
                    "/docs/katalon-testops/reporting/view-testops-dashboard/local-test-environment-dashboard",
                    "/docs/katalon-testops/reporting/view-testops-dashboard/local-test-environment-reports",
                    "/docs/legacy/katalon-testops/reporting/view-testops-dashboard/local-test-environment-reports"
                ]
            },
            // {
            //     "to": "/docs/analyze/reports/view-test-reports/view-test-reports-in-katalon-testops/test-runs-reports-overview-in-katalon-testops",
            //     "from": [
            //         "/katalon-analytics/docs/test-runs-overview.html",
            //         "/docs/katalon-testops/reporting/view-test-runs",
            //         "/docs/legacy/katalon-testops/reporting/view-test-runs"
            //     ]
            // },
            {
                "to": "/docs/analyze/reports/manage-reports/filter-test-run-list-by-build-name-in-katalon-testops",
                "from": [
                    "/katalon-analytics/docs/filter-test-build-name.html",
                    "/docs/katalon-testops/reporting/filter-test-runs-list-by-build-name",
                    "/docs/legacy/katalon-testops/reporting/filter-test-runs-list-by-build-name"
                ]
            },
            {
                "to": "/docs/analyze/reports/view-test-reports/view-test-reports-in-katalon-testops/view-re-run-test-results-in-katalon-testops",
                "from": [
                    "/katalon-analytics/docs/rerun-results.html",
                    "/docs/katalon-testops/reporting/view-re-run-test-results",
                    "/docs/legacy/katalon-testops/reporting/view-re-run-test-results"
                ]
            },
            {
                "to": "/docs/analyze/reports/view-test-reports/view-test-reports-in-katalon-testops/view-test-case-reports-in-katalon-testops",
                "from": [
                    "/katalon-analytics/docs/view-test-cases.html",
                    "/docs/katalon-testops/reporting/view-test-case-reports",
                    "/docs/legacy/katalon-testops/reporting/view-test-case-reports"
                ]
            },
            {
                "to": "/docs/analyze/reports/view-test-reports/view-test-reports-in-katalon-testops/view-traceability-matrix-in-katalon-testops",
                "from": [
                    "/katalon-analytics/docs/view-traceability-matrix.html",
                    "/docs/katalon-testops/reporting/view-traceability-matrix",
                    "/docs/legacy/katalon-testops/reporting/view-traceability-matrix"
                ]
            },
            {
                "to": "/docs/analyze/reports/view-test-reports/view-test-reports-in-katalon-testops/detect-abnormal-web-services-in-katalon-testops",
                "from": [
                    "/katalon-analytics/docs/view-abnormal-web-services.html",
                    "/docs/katalon-testops/reporting/detect-abnormal-web-services",
                    "/docs/legacy/katalon-testops/reporting/detect-abnormal-web-services"
                ]
            },
            {
                "to": "/docs/analyze/analytics/visual-testing/visual-testing-overview",
                "from": [
                    "/katalon-analytics/docs/visual-testing-overview.html",
                    "/docs/katalon-testops/visual-testing/visual-testing-overview",
                    "/docs/legacy/katalon-testops/visual-testing/visual-testing-overview"
                ]
            },
            {
                "to": "/docs/administer/administration-tasks/organization-management/delete-data",
                "from": [
                    "/katalon-analytics/docs/project-management-delete.html",
                    "/display/KA/Project+and+Execution+Deletion/",
                    "/display/KA/Project%20and%20Execution%20Deletion/",
                    "/x/pwbR/",
                    "/katalon-analytics/docs/project-management-delete/",
                    "/docs/katalon-testops/settings/delete-data",
                    "/docs/legacy/katalon-testops/settings/delete-data"
                ]
            },
            {
                "to": "/docs/administer/administration-tasks/organization-management/enabledisable-strict-domain",
                "from": [
                    "/katalon-analytics/docs/strict-domain.html",
                    "/docs/katalon-testops/settings/enabledisable-strict-domain",
                    "/docs/legacy/katalon-testops/settings/enabledisable-strict-domain"
                ]
            },
            {
                "to": "/docs/administer/administration-tasks/organization-management/ip-address-restrictions",
                "from": [
                    "/katalon-analytics/docs/ip-settings.html",
                    "/docs/katalon-testops/settings/ip-address-restrictions",
                    "/docs/legacy/katalon-testops/settings/ip-address-restrictions"
                ]
            },
            {
                "to": "/docs/administer/administration-tasks/organization-management/subdomain-configurations",
                "from": [
                    "/katalon-analytics/docs/subdomain.html",
                    "/docs/katalon-testops/settings/subdomain-configurations",
                    "/docs/legacy/katalon-testops/settings/subdomain-configurations"
                ]
            },
            {
                "to": "/docs/administer/administration-tasks/organization-management/single-sign-on-configurations",
                "from": [
                    "/katalon-analytics/docs/sso-settings.html",
                    "/katalon-analytics/docs/accept-sso/",
                    "/docs/katalon-testops/settings/single-sign-on-configurations",
                    "/docs/legacy/katalon-testops/settings/single-sign-on-configurations"
                ]
            },
            {
                "to": "/docs/administer/administration-tasks/organization-management/configure-session-timeout",
                "from": [
                    "/katalon-analytics/docs/timeout-config.html",
                    "/docs/katalon-testops/settings/configure-session-timeout",
                    "/docs/legacy/katalon-testops/settings/configure-session-timeout"
                ]
            },
            // {
            //     "to": "/docs/administer/settings/configure-notification-emails",
            //     "from": [
            //         "/katalon-analytics/docs/kt-noti-email.html",
            //         "/docs/katalon-testops/settings/notification-emails",
            //         "/docs/legacy/katalon-testops/settings/notification-emails"
            //     ]
            // },
            {
                "to": "/docs/administer/settings/katalon-api-key-in-katalon-testops",
                "from": [
                    "/katalon-analytics/docs/ka-api-key.html",
                    "/docs/katalon-testops/settings/katalon-api-key-in-katalon-testops",
                    "/docs/legacy/katalon-testops/settings/katalon-api-key-in-katalon-testops"
                ]
            },
            {
                "to": "/docs/administer/katalon-studio-enterprise-and-katalon-runtime-engine-license/katalon-studio-enterprise-per-user-license",
                "from": [
                    "/katalon-studio/docs/kse-per-user-license.html",
                    "/docs/products-and-licenses/katalon-studio-enterprise-and-runtime-engine-licenses/katalon-studio-enterprise-per-user-license",
                    "/docs/legacy/products-and-licenses/katalon-studio-enterprise-and-runtime-engine-licenses/katalon-studio-enterprise-per-user-license"
                ]
            },
            {
                "to": "/docs/administer/katalon-studio-enterprise-and-katalon-runtime-engine-license/katalon-runtime-engine-floating-license",
                "from": [
                    "/katalon-studio/docs/kre-floating-license.html",
                    "/docs/products-and-licenses/katalon-studio-enterprise-and-runtime-engine-licenses/katalon-runtime-engine-floating-license",
                    "/docs/legacy/products-and-licenses/katalon-studio-enterprise-and-runtime-engine-licenses/katalon-runtime-engine-floating-license"
                ]
            },
            // {
            //     "to": "/docs/administer/katalon-studio-enterprise-and-katalon-runtime-engine-license/sunsetting-plan-for-node-locked-and-floating-licenses",
            //     "from": [
            //         "/katalon-studio/docs/node-locked-floating-license-sunset-plan.html",
            //         "/docs/products-and-licenses/katalon-studio-enterprise-and-runtime-engine-licenses/sunsetting-plan-for-node-locked-and-floating-licenses",
            //         "/docs/legacy/products-and-licenses/katalon-studio-enterprise-and-runtime-engine-licenses/sunsetting-plan-for-node-locked-and-floating-licenses"
            //     ]
            // },
            {
                "to": "/docs/administer/katalon-studio-enterprise-and-katalon-runtime-engine-license/trial-and-free-plans",
                "from": [
                    "/katalon-studio/docs/trial-free-plans.html",
                    "/docs/products-and-licenses/katalon-studio-enterprise-and-runtime-engine-licenses/trial-and-free-plans",
                    "/docs/legacy/products-and-licenses/katalon-studio-enterprise-and-runtime-engine-licenses/trial-and-free-plans"
                ]
            },
            // {
            //     "to": "/docs/administer/katalon-studio-enterprise-and-katalon-runtime-engine-license/activate-katalon-license",
            //     "from": [
            //         "/katalon-studio/docs/activate-license.html",
            //         "/katalon-studio/docs/activate-KSE.html",
            //         "/katalon-studio/docs/katalon-studio-activation-since-70.html",
            //         "/x/ERLR/",
            //         "/katalon-studio/docs/katalon-studio-activation-since-70/",
            //         "/katalon-studio/docs/katalon-studio-activation-since-57/",
            //         "/katalon-studio/docs/katalon%20studio%20activation%20since%2057/",
            //         "/katalon-studio/docs/katalon-studio-activation-since-57.html",
            //         "/katalon-studio/docs/active-KRE.html",
            //         "/docs/products-and-licenses/katalon-studio-enterprise-and-runtime-engine-licenses/activate-katalon-license",
            //         "/docs/legacy/products-and-licenses/katalon-studio-enterprise-and-runtime-engine-licenses/activate-katalon-license"
            //     ]
            // },
            {
                "to": "/docs/administer/katalon-studio-enterprise-and-katalon-runtime-engine-license/configure-proxy-authentication",
                "from": [
                    "/katalon-studio/docs/configure-proxy.html",
                    "/docs/products-and-licenses/katalon-studio-enterprise-and-runtime-engine-licenses/configure-proxy-authentication",
                    "/docs/legacy/products-and-licenses/katalon-studio-enterprise-and-runtime-engine-licenses/configure-proxy-authentication"
                ]
            },
            {
                "to": "/docs/administer/katalon-studio-enterprise-and-katalon-runtime-engine-license/view-license-details",
                "from": [
                    "/katalon-studio/docs/view-license-details.html",
                    "/docs/products-and-licenses/katalon-studio-enterprise-and-runtime-engine-licenses/view-license-details",
                    "/docs/legacy/products-and-licenses/katalon-studio-enterprise-and-runtime-engine-licenses/view-license-details"
                ]
            },
            // {
            //     "to": "/docs/administer/katalon-studio-enterprise-and-katalon-runtime-engine-license/view-machine-id",
            //     "from": [
            //         "/katalon-studio/docs/machine-id.html",
            //         "/docs/products-and-licenses/katalon-studio-enterprise-and-runtime-engine-licenses/view-machine-id",
            //         "/docs/legacy/products-and-licenses/katalon-studio-enterprise-and-runtime-engine-licenses/view-machine-id"
            //     ]
            // },
            {
                "to": "/docs/administer/troubleshooting/session-termination-causes",
                "from": [
                    "/katalon-studio/docs/session-termination.html",
                    "/docs/products-and-licenses/katalon-studio-enterprise-and-runtime-engine-licenses/troubleshoot/session-termination-causes",
                    "/docs/legacy/products-and-licenses/katalon-studio-enterprise-and-runtime-engine-licenses/troubleshoot/session-termination-causes"
                ]
            },
            {
                "to": "/docs/administer/katalon-studio-enterprise-and-katalon-runtime-engine-license/katalon-runtime-engine-devops-sunsetting",
                "from": [
                    "/katalon-studio/docs/kre-devops-sunset.html",
                    "/docs/products-and-licenses/katalon-studio-enterprise-and-runtime-engine-licenses/katalon-runtime-engine-devops-sunsetting",
                    "/docs/legacy/products-and-licenses/katalon-studio-enterprise-and-runtime-engine-licenses/katalon-runtime-engine-devops-sunsetting"
                ]
            },
            {
                "to": "/docs/administer/administration-tasks/subscription-management/katalon-studio-enterprise-and-katalon-runtime-engine-license/purchase-katalon-studio-and-katalon-runtime-engine-licenses",
                "from": [
                    "/katalon-studio/docs/license-subscription.html",
                    "/katalon-studio/docs/license-KT.html",
                    "/katalon-studio/docs/license-po.html",
                    "/katalon-studio/docs/license-quote.html",
                    "/katalon-studio/docs/subscription-kstore.html",
                    "/docs/products-and-licenses/license-administration/purchases-and-billing/purchase-katalon-licenses",
                    "/docs/legacy/products-and-licenses/license-administration/purchases-and-billing/purchase-katalon-licenses"
                ]
            },
            {
                "to": "/docs/administer/administration-tasks/subscription-management/katalon-studio-enterprise-and-katalon-runtime-engine-license/upgrade-billing-plan-of-licenses",
                "from": [
                    "/katalon-studio/docs/upgrade-subs.html",
                    "/docs/products-and-licenses/license-administration/purchases-and-billing/upgrade-billing-plan",
                    "/docs/legacy/products-and-licenses/license-administration/purchases-and-billing/upgrade-billing-plan"
                ]
            },
            {
                "to": "/docs/administer/administration-tasks/payment-method/payment-method",
                "from": [
                    "/katalon-studio/docs/billing-info.html",
                    "/docs/products-and-licenses/license-administration/purchases-and-billing/change-billing-information",
                    "/docs/legacy/products-and-licenses/license-administration/purchases-and-billing/change-billing-information"
                ]
            },
            {
                "to": "/docs/administer/administration-tasks/subscription-management/katalon-studio-enterprise-and-katalon-runtime-engine-license/cancel-license-renewal",
                "from": [
                    "/katalon-studio/docs/cancel-subs.html",
                    "/docs/products-and-licenses/license-administration/purchases-and-billing/cancel-billing-renewal",
                    "/docs/legacy/products-and-licenses/license-administration/purchases-and-billing/cancel-billing-renewal"
                ]
            },
            {
                "to": "/docs/administer/administration-tasks/license-management/manage-katalon-licenses",
                "from": [
                    "/katalon-studio/docs/license-management.html",
                    "/katalon-studio/docs/transfer-license.html",
                    "/docs/products-and-licenses/license-administration/licenses-management/manage-katalon-licenses",
                    "/docs/legacy/products-and-licenses/license-administration/licenses-management/manage-katalon-licenses"
                ]
            },
            {
                "to": "/docs/administer/administration-tasks/license-management/grant-katalon-licenses",
                "from": [
                    "/katalon-studio/docs/grant-katalon-licenses.html",
                    "/katalon-studio/docs/use-online-license.html",
                    "/katalon-studio/docs/online-offline-licenses.html",
                    "/katalon-studio/docs/re-offline-licenses.html",
                    "/katalon-studio/docs/how-to-create-kse-offline-license.html",
                    "/docs/products-and-licenses/license-administration/licenses-management/grant-katalon-licenses",
                    "/docs/legacy/products-and-licenses/license-administration/licenses-management/grant-katalon-licenses"
                ]
            },
            {
                "to": "/docs/administer/administration-tasks/license-management/remove-a-license",
                "from": [
                    "/katalon-studio/docs/remove-license.html",
                    "/docs/products-and-licenses/license-administration/licenses-management/remove-a-license",
                    "/docs/legacy/products-and-licenses/license-administration/licenses-management/remove-a-license"
                ]
            },
            {
                "to": "/docs/administer/administration-tasks/organization-management/configure-idle-timeout",
                "from": [
                    "/katalon-studio/docs/license-idle-timeout.html",
                    "/docs/products-and-licenses/license-administration/licenses-management/configure-idle-timeout",
                    "/docs/legacy/products-and-licenses/license-administration/licenses-management/configure-idle-timeout"
                ]
            },
            {
                "to": "/docs/administer/administration-tasks/product-utilization/view-test-usage-and-balance-in-the-usage-dashboard",
                "from": [
                    "/katalon-analytics/docs/test-usage-balance-usage-dashboard.html",
                    "/docs/products-and-licenses/license-administration/monitor-licenses/view-test-usage-and-balance-in-the-usage-dashboard",
                    "/docs/legacy/products-and-licenses/license-administration/monitor-licenses/view-test-usage-and-balance-in-the-usage-dashboard"
                ]
            },
            {
                "to": "/docs/administer/administration-tasks/product-utilization/license-utilization-dashboard",
                "from": [
                    "/katalon-studio/docs/license-utilization-dashboard.html",
                    "/docs/products-and-licenses/license-administration/monitor-licenses/license-utilization-dashboard",
                    "/docs/legacy/products-and-licenses/license-administration/monitor-licenses/license-utilization-dashboard"
                ]
            },
            // {
            //     "to": "/docs/administer/katalon-studio-enterprise-and-katalon-runtime-engine-license/set-up-an-on-premises-license-server",
            //     "from": [
            //         "/katalon-studio/docs/license-server.html",
            //         "/docs/products-and-licenses/license-administration/set-up-an-on-premises-license-server",
            //         "/docs/legacy/products-and-licenses/license-administration/set-up-an-on-premises-license-server"
            //     ]
            // },
            {
                "to": "/docs/administer/katalon-platform-packages/katalon-platform-plans",
                "from": [
                    "/katalon-analytics/docs/testops-packages.html",
                    "/katalon-analytics/docs/testops_subscriptions_overview.html",
                    "/docs/products-and-licenses/katalon-testops-subscriptions/pricing-and-feature-comparisons",
                    "/docs/legacy/products-and-licenses/katalon-testops-subscriptions/pricing-and-feature-comparisons"
                ]
            },
            {
                "to": "/docs/administer/katalon-platform-packages/katalon-platform-trial-plans",
                "from": [
                    "/katalon-analytics/docs/trial-plans.html",
                    "/docs/products-and-licenses/katalon-testops-subscriptions/trial-plans",
                    "/docs/legacy/products-and-licenses/katalon-testops-subscriptions/trial-plans"
                ]
            },
            {
                "to": "/docs/administer/administration-tasks/subscription-management/katalon-platform-subscription/subscribe-to-katalon-platform",
                "from": [
                    "/katalon-analytics/docs/testops-subscriptions.html",
                    "/docs/products-and-licenses/katalon-testops-subscriptions/manage-subscriptions/subscribe-to-testops",
                    "/docs/legacy/products-and-licenses/katalon-testops-subscriptions/manage-subscriptions/subscribe-to-testops"
                ]
            },
            {
                "to": "/docs/administer/administration-tasks/subscription-management/katalon-platform-subscription/cancel-katalon-platform-subscription",
                "from": [
                    "/katalon-analytics/docs/cancel-subscriptions.html",
                    "/docs/products-and-licenses/katalon-testops-subscriptions/manage-subscriptions/cancel-subscriptions",
                    "/docs/legacy/products-and-licenses/katalon-testops-subscriptions/manage-subscriptions/cancel-subscriptions"
                ]
            },
            {
                "to": "/docs/administer/katalon-platform-packages/testcloud-feature-comparison",
                "from": [
                    "/katalon-testcloud/docs/tc-subscription-plans.html",
                    "/docs/products-and-licenses/katalon-testcloud-subscriptions/pricing-and-feature-comparisons",
                    "/docs/legacy/products-and-licenses/katalon-testcloud-subscriptions/pricing-and-feature-comparisons"
                ]
            },
            {
                "to": "/docs/administer/administration-tasks/subscription-management/testcloud-subscription/subscribe-to-testcloud",
                "from": [
                    "/katalon-testcloud/docs/subscribe-to-testcloud.html",
                    "/docs/products-and-licenses/katalon-testcloud-subscriptions/manage-subscriptions/subscribe-to-testcloud",
                    "/docs/legacy/products-and-licenses/katalon-testcloud-subscriptions/manage-subscriptions/subscribe-to-testcloud"
                ]
            },
            // {
            //     "to": "/docs/administer/administration-tasks/subscription-management/testcloud-subscription/upgrade-testcloud-subscriptions",
            //     "from": [
            //         "/katalon-testcloud/docs/tc-upgrade-subscriptions.html",
            //         "/docs/products-and-licenses/katalon-testcloud-subscriptions/manage-subscriptions/upgrade-subscriptions",
            //         "/docs/legacy/products-and-licenses/katalon-testcloud-subscriptions/manage-subscriptions/upgrade-subscriptions"
            //     ]
            // },
            {
                "to": "/docs/administer/administration-tasks/subscription-management/testcloud-subscription/cancel-testcloud-subscriptions",
                "from": [
                    "/katalon-testcloud/docs/tc-cancel-subscriptions.html",
                    "/docs/products-and-licenses/katalon-testcloud-subscriptions/manage-subscriptions/cancel-subscriptions",
                    "/docs/legacy/products-and-licenses/katalon-testcloud-subscriptions/manage-subscriptions/cancel-subscriptions"
                ]
            },
            {
                "to": "/docs/administer/katalon-studio-enterprise-and-katalon-runtime-engine-license/license-overview",
                "from": [
                    "/katalon-studio/docs/license.html",
                    "/docs/products-and-licenses/katalon-studio-enterprise-and-runtime-engine-licenses/license-overview",
                    "/docs/legacy/products-and-licenses/katalon-studio-enterprise-and-runtime-engine-licenses/license-overview"
                ]
            },
            {
                "to": "/docs/administer/katalon-studio-enterprise-and-katalon-runtime-engine-license/katalon-studio-vs-katalon-studio-enterprise-features",
                "from": [
                    "/katalon-studio/docs/katalon-studio-vs-katalon-studio-enterprise.html",
                    "/docs/products-and-licenses/katalon-studio-enterprise-and-runtime-engine-licenses/katalon-studio-vs-katalon-studio-enterprise-features",
                    "/docs/legacy/products-and-licenses/katalon-studio-enterprise-and-runtime-engine-licenses/katalon-studio-vs-katalon-studio-enterprise-features"
                ]
            },
            {
                "to": "/docs/plugins-and-add-ons/katalium-server/katalium-server-overview",
                "from": [
                    "/katalium-server/docs/katalium-overview.html",
                    "/docs/katalium-server/overview",
                    "/docs/legacy/katalium-server/overview"
                ]
            },
            {
                "to": "/docs/plugins-and-add-ons/katalium-server/get-started-with-katalium-server",
                "from": [
                    "/katalium-server/docs/katalium-user-guide.html",
                    "/docs/katalium-server/get-started",
                    "/docs/legacy/katalium-server/get-started"
                ]
            },
            {
                "to": "/docs/plugins-and-add-ons/katalium-server/katalium-server---execute-katalon-studios-scripts-on-remote-machines",
                "from": [
                    "/katalium-server/docs/katalium-server-katalon-studio-remote-machine.html",
                    "/docs/katalium-server/katalium-server---execute-katalon-studios-scripts-on-remote-machines",
                    "/docs/legacy/katalium-server/katalium-server---execute-katalon-studios-scripts-on-remote-machines"
                ]
            },
            {
                "to": "/docs/plugins-and-add-ons/katalium-server/webdriver-auto-update-for-katalium-server",
                "from": [
                    "/katalium-server/docs/katalium-webdriver.html",
                    "/docs/katalium-server/webdriver-auto-update",
                    "/docs/legacy/katalium-server/webdriver-auto-update"
                ]
            },
            {
                "to": "/docs/plugins-and-add-ons/katalium-server/sessions-monitoring-for-katalium-server",
                "from": [
                    "/katalium-server/docs/view-session-details.html",
                    "/docs/katalium-server/sessions-monitoring",
                    "/docs/legacy/katalium-server/sessions-monitoring"
                ]
            },
            {
                "to": "/docs/plugins-and-add-ons/katalium-server/contributing-guidelines-for-katalium-server",
                "from": [
                    "/katalium-server/docs/katalium-contributing.html",
                    "/docs/katalium-server/contributing-guidelines",
                    "/docs/legacy/katalium-server/contributing-guidelines"
                ]
            },
            {
                "to": "/docs/execute/katalon-runtime-engine/katalon-runtime-engine-overview",
                "from": [
                    "/katalon-studio/docs/intro-RE.html",
                    "/docs/katalon-runtime-engine/introduction-to-runtime-engine",
                    "/docs/legacy/katalon-runtime-engine/introduction-to-runtime-engine"
                ]
            },
            // {
            //     "to": "/docs/execute/katalon-runtime-engine/install-katalon-runtime-engine",
            //     "from": [
            //         "/katalon-studio/docs/install-RE.html",
            //         "/x/5QDR/",
            //         "/katalon-studio/docs/katalon-studio-for-linux-console-mode/",
            //         "/katalon-studio/docs/katalon%20studio%20for%20linux%20console%20mode/",
            //         "/katalon-studio/docs/katalon+studio+for+linux+console+mode/",
            //         "/katalon-studio/docs/activate-RE.html",
            //         "/katalon-studio/docs/activate-RE/",
            //         "/docs/katalon-runtime-engine/install-runtime-engine",
            //         "/docs/legacy/katalon-runtime-engine/install-runtime-engine"
            //     ]
            // },
            {
                "to": "/docs/execute/katalon-runtime-engine/command-line-syntax-in-katalon-runtime-engine",
                "from": [
                    "/katalon-studio/docs/console-mode-execution.html",
                    "/display/KD/Console+Mode+Execution/",
                    "/display/KD/Console%20Mode%20Execution/",
                    "/x/WQAM/",
                    "/katalon-studio/docs/console-mode-execution/",
                    "/katalon-studio/tutorials/generate_command_line.html",
                    "/katalon-studio/tutorials/executing_console_mode.html",
                    "/docs/katalon-runtime-engine/command-syntax-command-lineconsole-mode-execution",
                    "/docs/legacy/katalon-runtime-engine/command-syntax-command-lineconsole-mode-execution"
                ]
            },
            // {
            //     "to": "/docs/execute/cloud-based-test-execution/test-execution-with-testcloud/integrate-testcloud-with-katalon-runtime-engine",
            //     "from": [
            //         "/katalon-studio/docs/testcloud-integration-kre.html",
            //         "/docs/katalon-runtime-engine/run-testcloud-with-katalon-runtime-engine",
            //         "/docs/legacy/katalon-runtime-engine/run-testcloud-with-katalon-runtime-engine"
            //     ]
            // },
            // {
            //     "to": "/docs/execute/configurations-for-test-execution/specify-a-path-to-android-sdk-root-folder",
            //     "from": [
            //         "/katalon-studio/how-to-guides/how-to-specify-android-home-path.html",
            //         "/docs/katalon-runtime-engine/specify-a-path-to-android-sdk-root-folder",
            //         "/docs/legacy/katalon-runtime-engine/specify-a-path-to-android-sdk-root-folder",
            //         "/docs/execute/configurations-test-execution/specify-a-path-to-android-sdk-root-folder"
            //     ]
            // },
            // {
            //     "to": "/docs/execute/configurations-for-test-execution/terminate-execution-conditionally",
            //     "from": [
            //         "/katalon-studio/docs/terminate-execution-conditionally.html",
            //         "/docs/katalon-runtime-engine/terminate-execution-conditionally",
            //         "/docs/legacy/katalon-runtime-engine/terminate-execution-conditionally",
            //         "/docs/execute/configurations-test-execution/terminate-execution-conditionally"
            //     ]
            // },
            {
                "to": "/docs/execute/katalon-runtime-engine/create-dynamic-test-suite-at-runtime",
                "from": [
                    "/katalon-studio/docs/dynamic-test-suite-kre.html",
                    "/docs/katalon-runtime-engine/create-dynamic-test-suite-at-runtime",
                    "/docs/legacy/katalon-runtime-engine/create-dynamic-test-suite-at-runtime"
                ]
            },
            {
                "to": "/docs/execute/katalon-runtime-engine/katalon-docker-image",
                "from": [
                    "/katalon-studio/docs/docker.html",
                    "/display/KD/Docker/",
                    "/x/swTR/",
                    "/katalon-studio/docs/docker/",
                    "/docs/katalon-runtime-engine/docker-image",
                    "/docs/legacy/katalon-runtime-engine/docker-image"
                ]
            },
            {
                "to": "/docs/execute/cicd-integrations/cicd-integration-overview",
                "from": [
                    "/katalon-studio/docs/run-cloud-ci.html",
                    "/docs/katalon-runtime-engine/run-with-cloud-cis",
                    "/docs/legacy/katalon-runtime-engine/run-with-cloud-cis",

                ]
            },
            {
                "to": "/docs/integrations/supported-integrations/supported-integrations-in-katalon-platform",
                "from": [
                    "/docs/general-information/supported-integration/supported-integrations-in-katalon-platform",
                    "/docs/integrations/supported-integrations/integrate-katalon-studio-with-other-katalon-platform-tools"
                ]
            },
            {
                "to": "/docs/execute/cicd-integrations/gitlab-integration",
                "from": [
                    "/katalon-studio/docs/continuous_integration_gitlab.html",
                    "/katalon-studio/tutorials/continuous_integration_gitlab.html",
                    "/docs/katalon-runtime-engine/continuous-integration-with-gitlab",
                    "/docs/legacy/katalon-runtime-engine/continuous-integration-with-gitlab"
                ]
            },
            {
                "to": "/docs/plan/link-test-execution-with-a-testops-release-using-command-builder",
                "from": [
                    "/katalon-studio/docs/execution-release-cli.html",
                    "/docs/katalon-runtime-engine/cicd-tools-integration/link-execution-with-testops-release-using-cli",
                    "/docs/legacy/katalon-runtime-engine/cicd-tools-integration/link-execution-with-testops-release-using-cli"
                ]
            },
            {
                "to": "/docs/execute/cicd-integrations/jenkins-integration/jenkins-integration-overview",
                "from": [
                    "/katalon-studio/docs/jenkins-integration-overview.html",
                    "/docs/katalon-runtime-engine/cicd-tools-integration/jenkins-integration/jenkins-integration-overview",
                    "/docs/legacy/katalon-runtime-engine/cicd-tools-integration/jenkins-integration/jenkins-integration-overview"
                ]
            },
            {
                "to": "/docs/execute/cicd-integrations/jenkins-integration/use-katalon-docker-image-for-jenkins-integration/integrate-jenkins-on-docker-hosted-in-ubuntu",
                "from": [
                    "/katalon-studio/docs/jenkins-docker-ubuntu.html",
                    "/docs/katalon-runtime-engine/cicd-tools-integration/jenkins-integration/use-katalon-docker-image-for-jenkins-integration/integrate-jenkins-on-docker-hosted-in-ubuntu",
                    "/docs/legacy/katalon-runtime-engine/cicd-tools-integration/jenkins-integration/use-katalon-docker-image-for-jenkins-integration/integrate-jenkins-on-docker-hosted-in-ubuntu"
                ]
            },
            {
                "to": "/docs/execute/cicd-integrations/jenkins-integration/use-katalon-docker-image-for-jenkins-integration/integrate-jenkins-pipeline-jenkinsfile-with-katalon-studio-docker-image",
                "from": [
                    "/katalon-studio/docs/jenkins-pipeline-docker.html",
                    "/docs/katalon-runtime-engine/cicd-tools-integration/jenkins-integration/use-katalon-docker-image-for-jenkins-integration/integrate-jenkins-pipeline-jenkinsfile-with-katalon-studio-docker-image",
                    "/docs/legacy/katalon-runtime-engine/cicd-tools-integration/jenkins-integration/use-katalon-docker-image-for-jenkins-integration/integrate-jenkins-pipeline-jenkinsfile-with-katalon-studio-docker-image"
                ]
            },
            {
                "to": "/docs/execute/cicd-integrations/jenkins-integration/execute-katalon-studio-tests-with-jenkins-pipeline-script-jenkinsfile",
                "from": [
                    "/katalon-studio/docs/execute-katalon-tests-with-jenkins-pipeline-script.html",
                    "/docs/katalon-runtime-engine/cicd-tools-integration/jenkins-integration/execute-katalon-studio-tests-with-jenkins-pipeline-script-jenkinsfile",
                    "/docs/legacy/katalon-runtime-engine/cicd-tools-integration/jenkins-integration/execute-katalon-studio-tests-with-jenkins-pipeline-script-jenkinsfile"
                ]
            },
            {
                "to": "/docs/execute/cicd-integrations/jenkins-integration/passing-scenario-tags-at-runtime-when-building-with-jenkins",
                "from": [
                    "/katalon-studio/how-to-guides/jenkins-tags-runtime.html",
                    "/docs/katalon-runtime-engine/cicd-tools-integration/jenkins-integration/passing-scenario-tags-at-runtime-when-building-with-jenkins",
                    "/docs/legacy/katalon-runtime-engine/cicd-tools-integration/jenkins-integration/passing-scenario-tags-at-runtime-when-building-with-jenkins"
                ]
            },
            {
                "to": "/docs/execute/cicd-integrations/bamboo-add-on",
                "from": [
                    "/katalon-studio/docs/bamboo-addon.html",
                    "/katalon-studio/docs/bamboo+plugin/",
                    "/katalon-studio/docs/bamboo-plugin.html",
                    "/katalon-studio/docs/bamboo-integration/",
                    "/katalon-studio/docs/bamboo-integration.html",
                    "/docs/katalon-runtime-engine/cicd-tools-integration/bamboo-add-on",
                    "/docs/legacy/katalon-runtime-engine/cicd-tools-integration/bamboo-add-on"
                ]
            },
            {
                "to": "/docs/execute/cicd-integrations/azure-devops-integration",
                "from": [
                    "/katalon-studio/docs/azure-devops-extension.html",
                    "/docs/katalon-runtime-engine/cicd-tools-integration/azure-devops-extension",
                    "/docs/legacy/katalon-runtime-engine/cicd-tools-integration/azure-devops-extension"
                ]
            },
            {
                "to": "/docs/execute/cicd-integrations/teamcity-plugin",
                "from": [
                    "/katalon-studio/docs/teamcity-plugin.html",
                    "/docs/katalon-runtime-engine/cicd-tools-integration/teamcity-plugin",
                    "/docs/legacy/katalon-runtime-engine/cicd-tools-integration/teamcity-plugin"
                ]
            },
            {
                "to": "/docs/execute/cicd-integrations/circleci---katalon-orb",
                "from": [
                    "/katalon-studio/docs/integration-circleci.html",
                    "/docs/katalon-runtime-engine/cicd-tools-integration/circleci---katalon-orb",
                    "/docs/legacy/katalon-runtime-engine/cicd-tools-integration/circleci---katalon-orb"
                ]
            },
            {
                "to": "/docs/execute/cicd-integrations/katalon-studio-github-action",
                "from": [
                    "/katalon-studio/docs/katalon-studio-github-action.html",
                    "/docs/katalon-runtime-engine/cicd-tools-integration/katalon-studio-github-action",
                    "/docs/legacy/katalon-runtime-engine/cicd-tools-integration/katalon-studio-github-action"
                ]
            },
            {
                "to": "/docs/execute/cicd-integrations/google-cloud-build",
                "from": [
                    "/katalon-studio/docs/katalon-google-cloud-build.html",
                    "/docs/katalon-runtime-engine/cicd-tools-integration/google-cloud-build",
                    "/docs/legacy/katalon-runtime-engine/cicd-tools-integration/google-cloud-build"
                ]
            },
            // {
            //     "to": "/docs/execute/troubleshooting/troubleshoot-common-exception-when-executing-in-console-mode",
            //     "from": [
            //         "/katalon-studio/docs/troubleshoot-executing-in-console-mode.html",
            //         "/katalon-studio/docs/troubleshoot-globalvariable-special-character.html",
            //         "/docs/katalon-runtime-engine/troubleshoot/troubleshoot-common-exception-when-executing-in-console-mode",
            //         "/docs/legacy/katalon-runtime-engine/troubleshoot/troubleshoot-common-exception-when-executing-in-console-mode"
            //     ]
            // },
            {
                "to": "/docs/execute/cicd-integrations/jenkins-integration/use-katalon-plugins-for-jenkins-integration/use-katalon-plugins-for-jenkins-integration-on-windowsmacos",
                "from": [
                    "/katalon-studio/docs/katalon-plugin-jenkins-window-macOS.html",
                    "/katalon-studio/docs/jenkins-integration.html",
                    "/docs/katalon-runtime-engine/cicd-tools-integration/jenkins-integration/use-katalon-plugins-for-jenkins-integration/use-katalon-plugins-for-jenkins-integration-on-windowsmacos",
                    "/docs/legacy/katalon-runtime-engine/cicd-tools-integration/jenkins-integration/use-katalon-plugins-for-jenkins-integration/use-katalon-plugins-for-jenkins-integration-on-windowsmacos"
                ]
            },
            {
                "to": "/docs/execute/cicd-integrations/jenkins-integration/use-katalon-plugins-for-jenkins-integration/use-katalon-plugins-for-jenkins-integration-on-ubuntu",
                "from": [
                    "/katalon-studio/docs/jenkins-plugin-ubuntu.html",
                    "/docs/katalon-runtime-engine/cicd-tools-integration/jenkins-integration/use-katalon-plugins-for-jenkins-integration/use-katalon-plugins-for-jenkins-integration-on-ubuntu",
                    "/docs/legacy/katalon-runtime-engine/cicd-tools-integration/jenkins-integration/use-katalon-plugins-for-jenkins-integration/use-katalon-plugins-for-jenkins-integration-on-ubuntu"
                ]
            },
            {
                "to": "/docs/plugins-and-add-ons/katalium-framework/katalium-overview",
                "from": [
                    "/katalium-framework/docs/katalium-framework-overview.html",
                    "/docs/katalium-framework/overview",
                    "/docs/legacy/katalium-framework/overview"
                ]
            },
            {
                "to": "/docs/plugins-and-add-ons/katalium-framework/get-started/katalium-framework-in-visual-studio-code",
                "from": [
                    "/katalium-framework/docs/katalium-framework-get-started-vscode.html",
                    "/docs/katalium-framework/get-started/in-visual-studio-code",
                    "/docs/legacy/katalium-framework/get-started/in-visual-studio-code"
                ]
            },
            {
                "to": "/docs/plugins-and-add-ons/katalium-framework/get-started/katalium-framework-in-other-ides",
                "from": [
                    "/katalium-framework/docs/katalium-framework-get-started-other-ides.html",
                    "/docs/katalium-framework/get-started/in-other-ides",
                    "/docs/legacy/katalium-framework/get-started/in-other-ides"
                ]
            },
            {
                "to": "/docs/plugins-and-add-ons/katalium-framework/create-a-test-case-in-katalium-framework",
                "from": [
                    "/katalium-framework/docs/katalium-framework-create-test-case.html",
                    "/docs/katalium-framework/create-a-test-case",
                    "/docs/legacy/katalium-framework/create-a-test-case"
                ]
            },
            {
                "to": "/docs/plugins-and-add-ons/katalium-framework/katalium-framework-page-object-model",
                "from": [
                    "/katalium-framework/docs/katalium-framework-page-object-model.html",
                    "/docs/katalium-framework/page-object-model",
                    "/docs/legacy/katalium-framework/page-object-model"
                ]
            },
            {
                "to": "/docs/plugins-and-add-ons/katalium-framework/create-a-test-suite-in-katalium-framework",
                "from": [
                    "/katalium-framework/docs/katalium-framework-create-test-suite.html",
                    "/docs/katalium-framework/create-a-test-suite",
                    "/docs/legacy/katalium-framework/create-a-test-suite"
                ]
            },
            {
                "to": "/docs/plugins-and-add-ons/katalium-framework/configure-browsers-in-katalium-framework",
                "from": [
                    "/katalium-framework/docs/katalium-framework-custom-browser.html",
                    "/docs/katalium-framework/configure-browsers",
                    "/docs/legacy/katalium-framework/configure-browsers"
                ]
            },
            {
                "to": "/docs/plugins-and-add-ons/katalium-framework/other-utilities-in-katalium-framework",
                "from": [
                    "/katalium-framework/docs/katalium-framework-others.html",
                    "/docs/katalium-framework/other-utilities",
                    "/docs/legacy/katalium-framework/other-utilities"
                ]
            },
            {
                "to": "/docs/plugins-and-add-ons/katalium-framework/real-time-monitoring-and-reporting-in-katalium-framework",
                "from": [
                    "/katalium-framework/docs/katalium-framework-reports.html",
                    "/docs/katalium-framework/real-time-monitoring-and-reporting",
                    "/docs/legacy/katalium-framework/real-time-monitoring-and-reporting"
                ]
            },
            {
                "to": "/docs/plugins-and-add-ons/katalon-store/katalon-store-overview",
                "from": [
                    "/katalon-store/docs/overview.html",
                    "/katalon-store/docs/overview/",
                    "/katalon-store/",
                    "/docs/katalon-store/overview",
                    "/docs/legacy/katalon-store/overview"
                ]
            },
            {
                "to": "/docs/plugins-and-add-ons/katalon-store/getting-started-with-katalon-store",
                "from": [
                    "/katalon-store/docs/user/getting-started.html",
                    "/katalon-store/docs/user/getting-started/",
                    "/docs/katalon-store/getting-started-with-katalon-store",
                    "/docs/legacy/katalon-store/getting-started-with-katalon-store"
                ]
            },
            {
                "to": "/docs/plugins-and-add-ons/katalon-store/access-to-katalon-store-from-katalon-studio",
                "from": [
                    "/katalon-store/docs/user/access-store-in-KS.html",
                    "/katalon-store/docs/user/access-store-in-KS/",
                    "/docs/katalon-store/access-to-katalon-store-in-katalon-studio",
                    "/docs/legacy/katalon-store/access-to-katalon-store-in-katalon-studio"
                ]
            },
            {
                "to": "/docs/plugins-and-add-ons/katalon-store/katalon-api-keys-in-katalon-store",
                "from": [
                    "/katalon-store/docs/user/API-key.html",
                    "/katalon-store/docs/user/API-key/",
                    "/docs/katalon-store/katalon-api-keys-in-katalon-store",
                    "/docs/legacy/katalon-store/katalon-api-keys-in-katalon-store"
                ]
            },
            {
                "to": "/docs/plugins-and-add-ons/katalon-store/submit-and-publish-plugins/submit-and-publish-a-new-plugin-on-katalon-store",
                "from": [
                    "/katalon-store/docs/publisher/submit-plugin.html",
                    "/katalon-store/docs/user/submit-plugin/",
                    "/docs/katalon-store/submit-and-publish-plugins/submit-and-publish-a-new-plugin",
                    "/docs/legacy/katalon-store/submit-and-publish-plugins/submit-and-publish-a-new-plugin"
                ]
            },
            {
                "to": "/docs/plugins-and-add-ons/katalon-store/submit-and-publish-plugins/katalon-store-on-plugin-document-guidelines",
                "from": [
                    "/katalon-store/docs/publisher/document-guidelines.html",
                    "/katalon-store/docs/publisher/document-guidelines/",
                    "/docs/katalon-store/submit-and-publish-plugins/plugin-document-guidelines",
                    "/docs/legacy/katalon-store/submit-and-publish-plugins/plugin-document-guidelines"
                ]
            },
            {
                "to": "/docs/plugins-and-add-ons/katalon-store/submit-and-publish-plugins/brand-guidelines-for-katalon-store-publishers",
                "from": [
                    "/katalon-store/docs/publisher/publisher-guidelines.html",
                    "/katalon-store/docs/user/publisher-guidelines/",
                    "/docs/katalon-store/submit-and-publish-plugins/brand-guidelines-for-katalon-store-publishers",
                    "/docs/legacy/katalon-store/submit-and-publish-plugins/brand-guidelines-for-katalon-store-publishers"
                ]
            },
            {
                "to": "/docs/plugins-and-add-ons/katalon-store/submit-and-publish-plugins/katalon-store-plugin-approval-guidelines",
                "from": [
                    "/katalon-store/docs/publisher/approval-guidelines.html",
                    "/katalon-store/docs/publisher/approval-guidelines/",
                    "/docs/katalon-store/submit-and-publish-plugins/plugin-approval-guidelines",
                    "/docs/legacy/katalon-store/submit-and-publish-plugins/plugin-approval-guidelines"
                ]
            },
            {
                "to": "/docs/plugins-and-add-ons/katalon-store/submit-and-publish-plugins/manage-published-plugins-on-katalon-store",
                "from": [
                    "/katalon-store/docs/publisher/manage-published-plugins.html",
                    "/katalon-store/docs/publisher/manage-published-plugins/",
                    "/docs/katalon-store/submit-and-publish-plugins/manage-published-plugins",
                    "/docs/legacy/katalon-store/submit-and-publish-plugins/manage-published-plugins"
                ]
            },
            // {
            //     "to": "/docs/general-information/release-notes/katalon-testcloud/katalon-testcloud-release-notes",
            //     "from": [
            //         "/katalon-testcloud/docs/release-notes.html",
            //         "/docs/katalon-testcloud/release-notes",
            //         "/docs/legacy/katalon-testcloud/release-notes"
            //     ]
            // },
            // {
            //     "to": "/docs/general-information/supported-environments/supported-environments-for-katalon-testcloud",
            //     "from": [
            //         "/katalon-testcloud/docs/testcloud-supported-environments.html",
            //         "/docs/katalon-testcloud/supported-environments",
            //         "/docs/legacy/katalon-testcloud/supported-environments"
            //     ]
            // },
            {
                "to": "/docs/execute/cloud-based-test-execution/test-execution-with-testcloud/testcloud-tunnel",
                "from": [
                    "/katalon-testcloud/docs/testcloud-tunnel.html",
                    "/docs/katalon-testcloud/get-started/testcloud-tunnel",
                    "/docs/legacy/katalon-testcloud/get-started/testcloud-tunnel"
                ]
            },
            // {
            //     "to": "/docs/execute/cloud-based-test-execution/test-execution-with-testcloud/integrate-testcloud-with-testops",
            //     "from": [
            //         "/katalon-testcloud/docs/integrate-testcloud-with-testops.html",
            //         "/docs/katalon-testcloud/get-started/integrate-testcloud-with-testops",
            //         "/docs/legacy/katalon-testcloud/get-started/integrate-testcloud-with-testops"
            //     ]
            // },
            // {
            //     "to": "/docs/general-information/release-notes/katalon-studio/katalon-studio-release-notes-version-8.x",
            //     "from": [
            //         "/katalon-studio/new/version-8x.html",
            //         "/katalon-studio/new/all-versions.html",
            //         "/katalon-studio/new/what-is-new.html",
            //         "/katalon-studio/new/what-is-new/",
            //         "/katalon-studio/new/",
            //         "/display/KD/Release+Notes/",
            //         "/display/KD/Release%20Notes/",
            //         "/docs/katalon-studio-enterprise/release-notes/version-8.x",
            //         "/docs/legacy/katalon-studio-enterprise/release-notes/version-8.x",
            //         "/docs/general-information/release-notes/katalon-studio/version-8.x"
            //     ]
            // },
            // {
            //     "to": "/docs/general-information/release-notes/katalon-studio/katalon-studio-release-notes-version-7.x",
            //     "from": [
            //         "/katalon-studio/new/version-70.html",
            //         "/katalon-studio/new/version-72.html",
            //         "/katalon-studio/new/version-72/",
            //         "/katalon-studio/new/version-71/",
            //         "/katalon-studio/new/version-71.html",
            //         "/katalon-studio/new/version-70/",
            //         "/katalon-studio/new/version-48.html",
            //         "/katalon-studio/new/version-501.html",
            //         "/docs/katalon-studio-enterprise/release-notes/version-7.x",
            //         "/docs/legacy/katalon-studio-enterprise/release-notes/version-7.x",
            //         "/docs/general-information/release-notes/katalon-studio/version-7.x"
            //     ]
            // },
            // {
            //     "to": "/docs/general-information/release-notes/katalon-studio/katalon-studio-release-notes-version-6.x",
            //     "from": [
            //         "/katalon-studio/new/version-60.html",
            //         "/katalon-studio/new/version-633/",
            //         "/katalon-studio/new/version-633.html",
            //         "/katalon-studio/new/version-630.html",
            //         "/katalon-studio/new/version-630/",
            //         "/katalon-studio/new/version-622/",
            //         "/katalon-studio/new/version-622.html",
            //         "/katalon-studio/new/version-620/",
            //         "/katalon-studio/new/version-620.html",
            //         "/katalon-studio/new/version-615/",
            //         "/katalon-studio/new/version-615.html",
            //         "/katalon-studio/new/version-613/",
            //         "/katalon-studio/new/version-613.html",
            //         "/katalon-studio/new/version-612/",
            //         "/katalon-studio/new/version-612.html",
            //         "/katalon-studio/new/version-611/",
            //         "/katalon-studio/new/version-611.html",
            //         "/katalon-studio/new/version-61.html",
            //         "/katalon-studio/new/version-61/",
            //         "/katalon-studio/new/version-606/",
            //         "/katalon-studio/new/version-606.html",
            //         "/katalon-studio/new/version-605/",
            //         "/katalon-studio/new/version-605.html",
            //         "/katalon-studio/new/version-60/",
            //         "/docs/katalon-studio-enterprise/release-notes/version-6.x",
            //         "/docs/legacy/katalon-studio-enterprise/release-notes/version-6.x",
            //         "/docs/general-information/release-notes/katalon-studio/version-6.x"
            //     ]
            // },
            // {
            //     "to": "/docs/general-information/supported-technologies/supported-technologies-for-katalon-studio",
            //     "from": [
            //         "/katalon-studio/docs/product-availability-matrix.html",
            //         "/katalon-studio/docs/unique-capabilities.html",
            //         "/docs/katalon-studio-enterprise/release-notes/supported-technologies",
            //         "/docs/legacy/katalon-studio-enterprise/release-notes/supported-technologies"
            //     ]
            // },
            // {
            //     "to": "/docs/general-information/supported-environments/supported-environments-for-katalon-studio-and-katalon-runtime-engine",
            //     "from": [
            //         "/katalon-studio/docs/supported-environments.html",
            //         "/display/KD/Supported+Environments/",
            //         "/display/KD/Supported%20Environments/",
            //         "/x/dAAM/",
            //         "/katalon-studio/docs/supported-environments/",
            //         "/display/KD/System+Requirements/",
            //         "/display/KD/System%20Requirements/",
            //         "/x/cgAM/",
            //         "/katalon-studio/docs/system-requirements/",
            //         "/katalon-studio/docs/system-requirements.html",
            //         "/docs/katalon-studio-enterprise/release-notes/supported-environments",
            //         "/docs/legacy/katalon-studio-enterprise/release-notes/supported-environments"
            //     ]
            // },
            {
                "to": "/docs/get-started/set-up-your-workspace/set-up-overview-in-katalon-platform",
                "from": [
                    "/katalon-studio/docs/set-up-overview.html",
                    "/katalon-studio/tutorials/index.html",
                    "/katalon-studio/tutorials/quick_start.html",
                    "/katalon-studio/docs/quick_start.html",
                    "/docs/katalon-studio-enterprise/set-up-katalon-studio/set-up-overview",
                    "/docs/legacy/katalon-studio-enterprise/set-up-katalon-studio/set-up-overview"
                ]
            },
            {
                "to": "/docs/get-started/katalon-studio-installation/katalon-studio-installation-overview",
                "from": [
                    "/katalon-studio/docs/getting-started.html",
                    "/display/KD/Getting+Started/",
                    "/display/KD/Getting%20Started/",
                    "/display/KD/Installation+and+Setup/",
                    "/x/l4Ei/",
                    "/katalon-studio/docs/getting-started/",
                    "/display/KD/Before+You+Start/",
                    "/display/KD/Before%20You%20Start/",
                    "/x/HwAM/",
                    "/katalon-studio/docs/before-you-start/",
                    "/katalon-studio/docs/before-you-start.html",
                    "/katalon-studio/tutorials/install_setup_katalon_studio.html",
                    "/display/KD/Installation%20and%20Setup/",
                    "/docs/katalon-studio-enterprise/set-up-katalon-studio/installation/installation-overview",
                    "/docs/legacy/katalon-studio-enterprise/set-up-katalon-studio/installation/installation-overview"
                ]
            },
            {
                "to": "/docs/get-started/katalon-studio-installation/install-katalon-studio-on-macoswindows",
                "from": [
                    "/katalon-studio/docs/ks-installation-macOS-windows.html",
                    "/docs/katalon-studio-enterprise/set-up-katalon-studio/installation/install-katalon-studio-on-macoswindows",
                    "/docs/legacy/katalon-studio-enterprise/set-up-katalon-studio/installation/install-katalon-studio-on-macoswindows"
                ]
            },
            {
                "to": "/docs/get-started/katalon-studio-installation/install-katalon-studio-for-linux-gui",
                "from": [
                    "/katalon-studio/docs/katalon-studio-gui-beta-for-linux.html",
                    "/display/KD/Katalon+Studio+GUI+%28beta%29+for+Linux/",
                    "/display/KD/Katalon%20Studio%20GUI%20%28beta%29%20for%20Linux/",
                    "/x/fwTR/",
                    "/katalon-studio/docs/katalon-studio-gui-beta-for-linux/",
                    "/display/KD/Linux+Support/",
                    "/display/KD/Linux-Support/",
                    "/display/KD/Linux%20Support/",
                    "/display/KD/Linux+Support/index.html",
                    "/docs/katalon-studio-enterprise/set-up-katalon-studio/installation/katalon-studio-for-linux-gui",
                    "/docs/legacy/katalon-studio-enterprise/set-up-katalon-studio/installation/katalon-studio-for-linux-gui"
                ]
            },
            {
                "to": "/docs/get-started/set-up-your-workspace/toolbars-and-views-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/toolbars-and-views.html",
                    "/display/KD/Toolbars+and+Views/",
                    "/display/KD/Toolbars%20and%20Views/",
                    "/x/fgAM/",
                    "/katalon-studio/docs/toolbars-and-views/",
                    "/docs/katalon-studio-enterprise/set-up-katalon-studio/toolbars-and-views",
                    "/docs/legacy/katalon-studio-enterprise/set-up-katalon-studio/toolbars-and-views"
                ]
            },
            {
                "to": "/docs/get-started/set-up-your-workspace/keyboard-shortcuts-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/keyboard-shortcuts.html",
                    "/docs/katalon-studio-enterprise/set-up-katalon-studio/keyboard-shortcuts",
                    "/docs/katalon-studio-enterprise/set-up-katalon-studio/keyboard-shortcuts-in-katalon-studio",
                    "/docs/legacy/katalon-studio-enterprise/set-up-katalon-studio/keyboard-shortcuts-in-katalon-studio"
                ]
            },
            {
                "to": "/docs/get-started/set-up-your-workspace/configure-key-bindings-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/configure-keyboard-shortcuts.html",
                    "/docs/katalon-studio-enterprise/set-up-katalon-studio/configure-key-bindings",
                    "/docs/legacy/katalon-studio-enterprise/set-up-katalon-studio/configure-key-bindings"
                ]
            },
            {
                "to": "/docs/get-started/set-up-your-workspace/katalon-studio-preferences/preferences-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/katalon-preferences.html",
                    "/display/KD/Katalon+Studio+Preferences/",
                    "/display/KD/Katalon%20Studio%20Preferences/",
                    "/x/hw1O",
                    "/x/JYgw",
                    "/x/NQRO/",
                    "/katalon-studio/docs/katalon-studio-preferences/",
                    "/x/YYUw/",
                    "/katalon-studio/docs/execution-preferences-version-50-and-below/",
                    "/katalon-studio/docs/execution-preferences-version-50-and-below.html",
                    "/katalon-studio/docs/katalon-studio-preferences.html",
                    "/docs/katalon-studio-enterprise/set-up-katalon-studio/preferences/katalon-preferences",
                    "/docs/legacy/katalon-studio-enterprise/set-up-katalon-studio/preferences/katalon-preferences"
                ]
            },
            {
                "to": "/docs/get-started/set-up-your-workspace/katalon-studio-preferences/import-preferences-to-katalon-studio",
                "from": [
                    "/katalon-studio/docs/import-preferences.html",
                    "/docs/katalon-studio-enterprise/set-up-katalon-studio/preferences/import-preferences",
                    "/docs/legacy/katalon-studio-enterprise/set-up-katalon-studio/preferences/import-preferences"
                ]
            },
            {
                "to": "/docs/get-started/set-up-your-workspace/katalon-studio-preferences/test-case-preferences-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/test-case-preferences.html",
                    "/docs/katalon-studio-enterprise/set-up-katalon-studio/preferences/test-case-preferences",
                    "/docs/legacy/katalon-studio-enterprise/set-up-katalon-studio/preferences/test-case-preferences"
                ]
            },
            {
                "to": "/docs/get-started/set-up-your-workspace/katalon-studio-preferences/mobile-preferences-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/mobile-preferences.html",
                    "/docs/katalon-studio-enterprise/set-up-katalon-studio/preferences/mobile-preferences",
                    "/docs/legacy/katalon-studio-enterprise/set-up-katalon-studio/preferences/mobile-preferences"
                ]
            },
            {
                "to": "/docs/get-started/set-up-your-workspace/katalon-studio-preferences/object-spy-preferences-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/object-spy-preferences.html",
                    "/docs/katalon-studio-enterprise/set-up-katalon-studio/preferences/object-spy-preferences",
                    "/docs/legacy/katalon-studio-enterprise/set-up-katalon-studio/preferences/object-spy-preferences"
                ]
            },
            {
                "to": "/docs/get-started/set-up-your-workspace/change-katalon-studio-theme",
                "from": [
                    "/katalon-studio/docs/theme.html",
                    "/katalon-studio/docs/dark-theme.html",
                    "/docs/katalon-studio-enterprise/set-up-katalon-studio/change-katalon-studio-theme",
                    "/docs/legacy/katalon-studio-enterprise/set-up-katalon-studio/change-katalon-studio-theme"
                ]
            },
            {
                "to": "/docs/get-started/set-up-your-workspace/update-katalon-studio",
                "from": [
                    "/katalon-studio/docs/auto-updater.html",
                    "/display/KD/Auto-updater/",
                    "/x/lQPR/",
                    "/katalon-studio/docs/auto-updater/",
                    "/docs/katalon-studio-enterprise/set-up-katalon-studio/update-katalon-studio",
                    "/docs/legacy/katalon-studio-enterprise/set-up-katalon-studio/update-katalon-studio"
                ]
            },
            {
                "to": "/docs/get-started/set-up-your-workspace/katalon-help-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/katalon-help.html",
                    "/display/KD/Katalon+Help/",
                    "/display/KD/Katalon%20Help/",
                    "/x/sRRO/",
                    "/katalon-studio/docs/katalon-help/",
                    "/docs/katalon-studio-enterprise/set-up-katalon-studio/katalon-help",
                    "/docs/legacy/katalon-studio-enterprise/set-up-katalon-studio/katalon-help"
                ]
            },
            {
                "to": "/docs/get-started/migration-from-other-tools/seleniumtestngjunit-migration-to-katalon-studio",
                "from": [
                    "/katalon-studio/docs/selenium-testng-junit-migration.html",
                    "/docs/katalon-studio-enterprise/set-up-katalon-studio/migration-from-other-tools/seleniumtestngjunit-migration-to-katalon-studio",
                    "/docs/legacy/katalon-studio-enterprise/set-up-katalon-studio/migration-from-other-tools/seleniumtestngjunit-migration-to-katalon-studio"
                ]
            },
            {
                "to": "/docs/get-started/migration-from-other-tools/import-selenium-ide-version-3-projects-to-katalon-studio",
                "from": [
                    "/katalon-studio/docs/import-selenium-ide.html",
                    "/docs/katalon-studio-enterprise/set-up-katalon-studio/migration-from-other-tools/import-selenium-ide-version-3-projects",
                    "/docs/legacy/katalon-studio-enterprise/set-up-katalon-studio/migration-from-other-tools/import-selenium-ide-version-3-projects"
                ]
            },
            // {
            //     "to": "/docs/get-started/get-started-with-the-katalon-platform",
            //     "from": [
            //         "/katalon-studio/docs/get-started-overview.html",
            //         "/docs/katalon-studio-enterprise/get-started/get-started-overview",
            //         "/docs/legacy/katalon-studio-enterprise/get-started/get-started-overview"
            //     ]
            // },
            {
                "to": "/docs/get-started/sample-projects/webui/webui-create-and-run-web-ui-test-case-using-record-and-playback-in-katalon-studio",
                "from": [
                    "/katalon-studio/tutorials/webui-create-test-case.html",
                    "/docs/katalon-studio-enterprise/get-started/webui-testing/webui-create-and-run-web-ui-test-case-using-record-and-playback",
                    "/docs/legacy/katalon-studio-enterprise/get-started/webui-testing/webui-create-and-run-web-ui-test-case-using-record-and-playback"
                ]
            },
            {
                "to": "/docs/get-started/sample-projects/webui/webui-analyze-test-execution-logs-and-debug-the-test-case-in-katalon-studio",
                "from": [
                    "/katalon-studio/tutorials/webui-analyze-test-case-execution-logs-and-resolve-errors.html",
                    "/docs/katalon-studio-enterprise/get-started/webui-testing/webui-analyze-test-execution-logs-and-debug-the-test-case",
                    "/docs/legacy/katalon-studio-enterprise/get-started/webui-testing/webui-analyze-test-execution-logs-and-debug-the-test-case"
                ]
            },
            {
                "to": "/docs/get-started/sample-projects/webui/webui-plan-test-suite",
                "from": [
                    "/katalon-studio/tutorials/webui-plan-test-suite.html",
                    "/docs/katalon-studio-enterprise/get-started/webui-testing/web-ui-plan-test-suite",
                    "/docs/legacy/katalon-studio-enterprise/get-started/webui-testing/web-ui-plan-test-suite"
                ]
            },
            {
                "to": "/docs/get-started/sample-projects/webui/webui-analyze-test-suite-reports-and-resolve-errors-in-katalon-studio",
                "from": [
                    "/katalon-studio/tutorials/webui-view-and-analyze-test-suite-reports.html",
                    "/docs/katalon-studio-enterprise/get-started/webui-testing/webui-analyze-test-suite-reports-and-resolve-errors",
                    "/docs/legacy/katalon-studio-enterprise/get-started/webui-testing/webui-analyze-test-suite-reports-and-resolve-errors"
                ]
            },
            {
                "to": "/docs/get-started/sample-projects/mobile/mobile-create-and-run-ios-test-case-in-katalon-studio",
                "from": [
                    "/katalon-studio/tutorials/mobile-create-ios-test-case.html",
                    "/docs/katalon-studio-enterprise/get-started/mobile-testing/mobile-create-and-run-ios-test-case",
                    "/docs/legacy/katalon-studio-enterprise/get-started/mobile-testing/mobile-create-and-run-ios-test-case"
                ]
            },
            {
                "to": "/docs/get-started/sample-projects/mobile/mobile-create-and-run-android-test-case",
                "from": [
                    "/katalon-studio/tutorials/mobile-create-android-test-case.html",
                    "/docs/katalon-studio-enterprise/get-started/mobile-testing/mobile-create-and-run-android-test-case",
                    "/docs/legacy/katalon-studio-enterprise/get-started/mobile-testing/mobile-create-and-run-android-test-case"
                ]
            },
            {
                "to": "/docs/get-started/sample-projects/sample-projects-overview",
                "from": [
                    "/katalon-studio/docs/sample-projects.html",
                    "/display/KD/Sample+Projects/",
                    "/display/KD/Sample%20Projects/",
                    "/x/UQnR/",
                    "/katalon-studio/docs/sample-projects/",
                    "/katalon-studio/docs/sample-github-repository.html",
                    "/docs/katalon-studio-enterprise/get-started/sample-projects/sample-projects-overview",
                    "/docs/legacy/katalon-studio-enterprise/get-started/sample-projects/sample-projects-overview"
                ]
            },
            {
                "to": "/docs/get-started/sample-projects/api/sample-api-tests-project-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/web-service-samples.html",
                    "/docs/katalon-studio-enterprise/get-started/sample-projects/sample-api-tests-project",
                    "/docs/legacy/katalon-studio-enterprise/get-started/sample-projects/sample-api-tests-project"
                ]
            },
            {
                "to": "/docs/get-started/sample-projects/behavior-driven-development/sample-bdd-cucumber-tests-project-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/bdd-samples.html",
                    "/docs/katalon-studio-enterprise/get-started/sample-projects/sample-bdd-cucumber-tests-project",
                    "/docs/legacy/katalon-studio-enterprise/get-started/sample-projects/sample-bdd-cucumber-tests-project"
                ]
            },
            {
                "to": "/docs/get-started/sample-projects/data-driven-test/sample-webui-tests-project-with-data-driven-testing-shopping-cart-sample-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/shopping-cart-prj.html",
                    "/docs/katalon-studio-enterprise/get-started/sample-projects/sample-webui-tests-project-with-data-driven-testing-shopping-cart-sample",
                    "/docs/legacy/katalon-studio-enterprise/get-started/sample-projects/sample-webui-tests-project-with-data-driven-testing-shopping-cart-sample"
                ]
            },
            {
                "to": "/docs/get-started/sample-projects/webui/sample-webui-tests-project-healthcare-sample-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/health-care-prj.html",
                    "/docs/katalon-studio-enterprise/get-started/sample-projects/sample-webui-tests-project-healthcare-sample",
                    "/docs/legacy/katalon-studio-enterprise/get-started/sample-projects/sample-webui-tests-project-healthcare-sample"
                ]
            },
            {
                "to": "/docs/get-started/sample-projects/mobile/sample-android-mobile-tests-project-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/android-sample-prj.html",
                    "/docs/katalon-studio-enterprise/get-started/sample-projects/sample-android-mobile-tests-project",
                    "/docs/legacy/katalon-studio-enterprise/get-started/sample-projects/sample-android-mobile-tests-project"
                ]
            },
            {
                "to": "/docs/get-started/sample-projects/mobile/sample-ios-mobile-tests-project-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/iOS-sample-prj.html",
                    "/docs/katalon-studio-enterprise/get-started/sample-projects/sample-ios-mobile-tests-project",
                    "/docs/legacy/katalon-studio-enterprise/get-started/sample-projects/sample-ios-mobile-tests-project"
                ]
            },
            {
                "to": "/docs/create-tests/manage-projects/manage-test-projects/manage-test-project-in-katalon-studio-overview",
                "from": [
                    "/katalon-studio/docs/manage-test-project.html",
                    "/display/KD/Manage+Test+Project/",
                    "/display/KD/Manage%20Test%20Project/",
                    "/x/VIEw/",
                    "/katalon-studio/docs/manage-test-project/",
                    "/docs/katalon-studio-enterprise/create-tests-and-projects/manage-projects/manage-test-project",
                    "/docs/legacy/katalon-studio-enterprise/create-tests-and-projects/manage-projects/manage-test-project"
                ]
            },
            // {
            //     "to": "/docs/create-tests/manage-projects/apiweb-service-project-in-katalon-studio",
            //     "from": [
            //         "/katalon-studio/docs/apiweb-service-project-since-v58.html",
            //         "/x/MBbR/",
            //         "/katalon-studio/docs/apiweb-service-project-since-v58/",
            //         "/docs/katalon-studio-enterprise/create-tests-and-projects/manage-projects/apiweb-service-project",
            //         "/docs/legacy/katalon-studio-enterprise/create-tests-and-projects/manage-projects/apiweb-service-project"
            //     ]
            // },
            {
                "to": "/docs/analyze/reports/manage-reports/share-test-reports-via-email-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/emails-settings.html",
                    "/docs/katalon-studio-enterprise/create-tests-and-projects/manage-projects/project-settings/email-settings",
                    "/docs/legacy/katalon-studio-enterprise/create-tests-and-projects/manage-projects/project-settings/email-settings"
                ]
            },
            // {
            //     "to": "/docs/create-tests/manage-projects/project-settings/libraries-management-in-katalon-studio",
            //     "from": [
            //         "/katalon-studio/docs/external-libraries.html",
            //         "/display/KD/External+Libraries/",
            //         "/display/KD/External%20Libraries/",
            //         "/x/wQAo/",
            //         "/katalon-studio/docs/external-libraries/",
            //         "/katalon-studio/tutorials/import_java_library.html",
            //         "/docs/katalon-studio-enterprise/create-tests-and-projects/manage-projects/libraries-management",
            //         "/docs/legacy/katalon-studio-enterprise/create-tests-and-projects/manage-projects/libraries-management"
            //     ]
            // },
            {
                "to": "/docs/create-tests/create-test-cases/create-a-new-test-case-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/create-test-case.html",
                    "/display/KD/Script+View/",
                    "/display/KD/Script%20View/",
                    "/x/Y4Iw/",
                    "/katalon-studio/docs/script-view/",
                    "/katalon-studio/docs/script-view.html",
                    "/display/KD/Manual+View/",
                    "/display/KD/Manual%20View/",
                    "/x/9YEw/",
                    "/katalon-studio/docs/manual-view/",
                    "/katalon-studio/docs/manual-view.html",
                    "/display/KD/Test+Case+Manual+View/",
                    "/katalon-studio/tutorials/create_test_case_using_manual_mode.html",
                    "/katalon-studio/docs/create_test_case_using_manual_mode.html",
                    "/katalon-studio/tutorials/create_test_case_using_script_mode.html",
                    "/katalon-studio/docs/create_test_case_using_script_mode.html",
                    "/docs/katalon-studio-enterprise/create-tests-and-projects/manage-projects/create-test-case/create-a-new-test-case",
                    "/docs/legacy/katalon-studio-enterprise/create-tests-and-projects/manage-projects/create-test-case/create-a-new-test-case"
                ]
            },
            {
                "to": "/docs/organize/manage-workspace/search-test-cases-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/search.html",
                    "/katalon-studio/docs/advanced-search/",
                    "/katalon-studio/docs/advanced+search/",
                    "/katalon-studio/docs/advanced%20search/",
                    "/katalon-studio/docs/advanced-search.html",
                    "/katalon-studio/docs/advanced+search.html",
                    "/katalon-studio/docs/advanced%20search.html",
                    "/katalon-studio/docs/dynamic-querying-test-suite.html",
                    "/docs/katalon-studio-enterprise/create-tests-and-projects/manage-projects/search-test-cases",
                    "/docs/legacy/katalon-studio-enterprise/create-tests-and-projects/manage-projects/search-test-cases"
                ]
            },
            {
                "to": "/docs/create-tests/create-test-cases/call-test-case-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/call-test-case.html",
                    "/display/KD/Call+Test+Case/",
                    "/display/KD/Call%20Test%20Case/",
                    "/x/qgAM/",
                    "/katalon-studio/docs/call-test-case/",
                    "/docs/katalon-studio-enterprise/create-tests-and-projects/manage-projects/call-test-case",
                    "/docs/legacy/katalon-studio-enterprise/create-tests-and-projects/manage-projects/call-test-case"
                ]
            },
            {
                "to": "/docs/create-tests/create-test-cases/test-fixtures-and-test-listeners-test-hooks-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/fixtures-listeners.html",
                    "/x/E4C9/",
                    "/katalon-studio/docs/setupteardown-for-test-suite-and-test-case.html",
                    "/x/7zhO/",
                    "/katalon-studio/docs/test-listeners-test-hooks/",
                    "/katalon-studio/docs/test-listeners-test-hooks.html",
                    "/docs/katalon-studio-enterprise/create-tests-and-projects/manage-projects/test-fixtures-and-test-listeners-test-hooks",
                    "/docs/legacy/katalon-studio-enterprise/create-tests-and-projects/manage-projects/test-fixtures-and-test-listeners-test-hooks"
                ]
            },
            {
                "to": "/docs/create-tests/create-test-cases/working-with-sensitive-text-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/working-with-sensitive-text.html",
                    "/display/KD/Working+with+Sensitive+Text/",
                    "/display/KD/Working%20with%20Sensitive%20Text/",
                    "/x/3wHR/",
                    "/katalon-studio/docs/working-with-sensitive-text/",
                    "/docs/katalon-studio-enterprise/create-tests-and-projects/manage-projects/working-with-sensitive-text",
                    "/docs/legacy/katalon-studio-enterprise/create-tests-and-projects/manage-projects/working-with-sensitive-text"
                ]
            },
            {
                "to": "/docs/create-tests/manage-projects/project-settings/desired-capabilities/introduction-to-desired-capabilities-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/introduction-to-desired-capabilities.html",
                    "/display/KD/Introduction+to+Desired+Capabilities/",
                    "/display/KD/Introduction%20to%20Desired%20Capabilities/",
                    "/x/ywbR/",
                    "/katalon-studio/docs/introduction-to-desired-capabilities/",
                    "/x/KAzR/",
                    "/x/SgzR/",
                    "/katalon-studio/tutorials/desired_capabilities_in_katalon.html",
                    "/katalon-studio/docs/desired_capabilities_in_katalon.html",
                    "/docs/katalon-studio-enterprise/create-tests-and-projects/configure-test-cases/desired-capabilities/introduction-to-desired-capabilities",
                    "/docs/legacy/katalon-studio-enterprise/create-tests-and-projects/configure-test-cases/desired-capabilities/introduction-to-desired-capabilities"
                ]
            },
            {
                "to": "/docs/create-tests/manage-projects/project-settings/desired-capabilities/set-up-desired-capabilities-for-webui-testing-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/desired-capabilities-settings-webui.html",
                    "/katalon-studio/docs/desired-capabilities-for-chromechrome-headless/",
                    "/katalon-studio/docs/desired-capabilities-for-chromechrome-headless.html",
                    "/x/TAzR/",
                    "/katalon-studio/docs/desired-capabilities-for-firefoxfirefox-headless/",
                    "/katalon-studio/docs/desired-capabilities-for-firefoxfirefox-headless.html",
                    "/display/KD/Desired+Capabilities+for+Internet+Explorer/",
                    "/display/KD/Desired%20Capabilities%20for%20Internet%20Explorer/",
                    "/x/TgzR/",
                    "/katalon-studio/docs/desired-capabilities-for-internet-explorer/",
                    "/katalon-studio/docs/desired-capabilities-for-internet-explorer.html",
                    "/docs/katalon-studio-enterprise/create-tests-and-projects/configure-test-cases/desired-capabilities/set-up-desired-capabilities-for-webui-testing",
                    "/docs/legacy/katalon-studio-enterprise/create-tests-and-projects/configure-test-cases/desired-capabilities/set-up-desired-capabilities-for-webui-testing"
                ]
            },
            {
                "to": "/docs/create-tests/manage-projects/project-settings/desired-capabilities/set-up-desired-capabilities-in-mobile-testing-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/desired-capabilities-settings-mobile.html",
                    "/docs/katalon-studio-enterprise/create-tests-and-projects/configure-test-cases/desired-capabilities/set-up-desired-capabilities-in-mobile-testing",
                    "/docs/legacy/katalon-studio-enterprise/create-tests-and-projects/configure-test-cases/desired-capabilities/set-up-desired-capabilities-in-mobile-testing"
                ]
            },
            {
                "to": "/docs/create-tests/manage-projects/project-settings/desired-capabilities/set-up-desired-capabilities-in-windows-desktop-app-testing-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/desired-capabilities-settings-windows.html",
                    "/katalon-studio/docs/windows-desired-capabilities.html",
                    "/docs/katalon-studio-enterprise/create-tests-and-projects/configure-test-cases/desired-capabilities/set-up-desired-capabilities-in-windows-desktop-app-testing",
                    "/docs/legacy/katalon-studio-enterprise/create-tests-and-projects/configure-test-cases/desired-capabilities/set-up-desired-capabilities-in-windows-desktop-app-testing"
                ]
            },
            {
                "to": "/docs/create-tests/manage-projects/project-settings/desired-capabilities/set-up-remote-server-in-desired-capabilities-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/desired-capabilities-remote-settings.html",
                    "/katalon-studio/docs/remote-desired-capabilities/",
                    "/katalon-studio/docs/remote-desired-capabilities.html",
                    "/display/KD/Remote+Desired+Capabilities/",
                    "/display/KD/Remote%20Desired%20Capabilities/",
                    "/docs/katalon-studio-enterprise/create-tests-and-projects/configure-test-cases/desired-capabilities/set-up-remote-server-in-desired-capabilities",
                    "/docs/legacy/katalon-studio-enterprise/create-tests-and-projects/configure-test-cases/desired-capabilities/set-up-remote-server-in-desired-capabilities"
                ]
            },
            {
                "to": "/docs/create-tests/manage-projects/project-settings/desired-capabilities/set-custom-desired-capabilities-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/set-custom-desired-capabilities.html",
                    "/docs/katalon-studio-enterprise/create-tests-and-projects/configure-test-cases/desired-capabilities/set-custom-desired-capabilities",
                    "/docs/legacy/katalon-studio-enterprise/create-tests-and-projects/configure-test-cases/desired-capabilities/set-custom-desired-capabilities"
                ]
            },
            {
                "to": "/docs/create-tests/manage-projects/project-settings/desired-capabilities/pass-desired-capabilities-at-runtime-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/desired-capabilities-at-runtime.html",
                    "/display/KD/Override+desired+capabilities+at+runtime/",
                    "/display/KD/Override%20desired%20capabilities%20at%20runtime/",
                    "/x/dwXR/",
                    "/katalon-studio/docs/override-desired-capabilities-at-runtime/",
                    "/katalon-studio/docs/override-desired-capabilities-at-runtime.html",
                    "/docs/katalon-studio-enterprise/create-tests-and-projects/configure-test-cases/desired-capabilities/pass-desired-capabilities-at-runtime",
                    "/docs/legacy/katalon-studio-enterprise/create-tests-and-projects/configure-test-cases/desired-capabilities/pass-desired-capabilities-at-runtime"
                ]
            },
            {
                "to": "/docs/create-tests/manage-projects/project-settings/desired-capabilities/manage-desired-capabilities-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/import-export-desired-capabilities.html",
                    "/docs/katalon-studio-enterprise/create-tests-and-projects/configure-test-cases/desired-capabilities/manage-desired-capabilities",
                    "/docs/legacy/katalon-studio-enterprise/create-tests-and-projects/configure-test-cases/desired-capabilities/manage-desired-capabilities"
                ]
            },
            {
                "to": "/docs/create-tests/manage-projects/project-settings/desired-capabilities/start-browsers-in-private-mode-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/start-browsers-in-private-mode.html",
                    "/display/KD/Start+browsers+in+private+mode/",
                    "/display/KD/Start%20browsers%20in%20private%20mode/",
                    "/x/XAbR/",
                    "/katalon-studio/docs/start-browsers-in-private-mode/",
                    "/docs/katalon-studio-enterprise/create-tests-and-projects/configure-test-cases/desired-capabilities/start-browsers-in-private-mode",
                    "/docs/legacy/katalon-studio-enterprise/create-tests-and-projects/configure-test-cases/desired-capabilities/start-browsers-in-private-mode"
                ]
            },
            {
                "to": "/docs/create-tests/manage-projects/project-settings/desired-capabilities/test-different-browser-locales-in-chrome-with-desired-capabilities-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/test-different-browser-locales-in-chrome-with-desired-capabilities.html",
                    "/docs/katalon-studio-enterprise/create-tests-and-projects/configure-test-cases/desired-capabilities/test-different-browser-locales-in-chrome-with-desired-capabilities",
                    "/docs/legacy/katalon-studio-enterprise/create-tests-and-projects/configure-test-cases/desired-capabilities/test-different-browser-locales-in-chrome-with-desired-capabilities"
                ]
            },
            {
                "to": "/docs/create-tests/manage-projects/project-settings/desired-capabilities/selenium-grid---execution-on-remote-machines-with-katalon-studio",
                "from": [
                    "/katalon-studio/docs/selenium-grid-integration.html",
                    "/docs/katalon-studio-enterprise/create-tests-and-projects/configure-test-cases/desired-capabilities/selenium-grid---execution-on-remote-machines",
                    "/docs/legacy/katalon-studio-enterprise/create-tests-and-projects/configure-test-cases/desired-capabilities/selenium-grid---execution-on-remote-machines"
                ]
            },
            {
                "to": "/docs/create-tests/manage-projects/set-up-projects/web-testing/internet-explorer-configurations-for-katalon-studio",
                "from": [
                    "/katalon-studio/docs/internet-explorer-configurations.html",
                    "/display/KD/Internet+Explorer+Configurations/",
                    "/display/KD/Internet%20Explorer%20Configurations/",
                    "/x/iwEo/",
                    "/katalon-studio/docs/internet-explorer-configurations/",
                    "/katalon-studio/tutorials/configure_katalon_studio_web_automation_test_project.html",
                    "/docs/katalon-studio-enterprise/create-tests-and-projects/configure-test-cases/web-testing/internet-explorer-configurations",
                    "/docs/legacy/katalon-studio-enterprise/create-tests-and-projects/configure-test-cases/web-testing/internet-explorer-configurations"
                ]
            },
            {
                "to": "/docs/create-tests/manage-projects/set-up-projects/windows-desktop-apps-testing/set-up-winappdriver-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/setup-winappdriver.html",
                    "/docs/katalon-studio-enterprise/create-tests-and-projects/configure-test-cases/windows-desktop-apps-testing/set-up-winappdriver",
                    "/docs/legacy/katalon-studio-enterprise/create-tests-and-projects/configure-test-cases/windows-desktop-apps-testing/set-up-winappdriver"
                ]
            },
            {
                "to": "/docs/create-tests/manage-projects/set-up-projects/mobile-testing/android/mobile-android-setup-in-katalon-studio",
                "from": [
                    "/katalon-studio/tutorials/mobile-android-setup.html",
                    "/katalon-studio/docs/mobile-on-windows.html",
                    "/docs/katalon-studio-enterprise/create-tests-and-projects/configure-test-cases/mobile-testing/android/mobile-android-setup",
                    "/docs/legacy/katalon-studio-enterprise/create-tests-and-projects/configure-test-cases/mobile-testing/android/mobile-android-setup"
                ]
            },
            {
                "to": "/docs/create-tests/manage-projects/set-up-projects/mobile-testing/android/mobile-configure-android-studio-emulator-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/configure-android-studio.html",
                    "/docs/katalon-studio-enterprise/create-tests-and-projects/configure-test-cases/mobile-testing/android/mobile-configure-android-studio-emulator",
                    "/docs/legacy/katalon-studio-enterprise/create-tests-and-projects/configure-test-cases/mobile-testing/android/mobile-configure-android-studio-emulator"
                ]
            },
            {
                "to": "/docs/create-tests/manage-projects/set-up-projects/mobile-testing/ios/mobile-ios-setup-simulators-in-katalon-studio",
                "from": [
                    "/katalon-studio/tutorials/mobile-ios-simulators-setup.html",
                    "/docs/katalon-studio-enterprise/create-tests-and-projects/configure-test-cases/mobile-testing/ios/mobile-ios-setup-simulators",
                    "/docs/legacy/katalon-studio-enterprise/create-tests-and-projects/configure-test-cases/mobile-testing/ios/mobile-ios-setup-simulators"
                ]
            },
            {
                "to": "/docs/create-tests/manage-projects/set-up-projects/mobile-testing/ios/mobile-ios-setup-real-devices-in-katalon-studio",
                "from": [
                    "/katalon-studio/tutorials/mobile-ios-real-devices-setup.html",
                    "/katalon-studio/docs/mobile-on-macos.html",
                    "/katalon-studio/tutorials/mobile-ios-setup.html",
                    "/docs/katalon-studio-enterprise/create-tests-and-projects/configure-test-cases/mobile-testing/ios/mobile-ios-setup-real-devices",
                    "/docs/legacy/katalon-studio-enterprise/create-tests-and-projects/configure-test-cases/mobile-testing/ios/mobile-ios-setup-real-devices"
                ]
            },
            {
                "to": "/docs/create-tests/manage-projects/set-up-projects/mobile-testing/ios/mobile-install-webdriveragent-for-real-ios-devices-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/installing-webdriveragent-for-ios-devices.html",
                    "/display/KD/Installing+WebDriverAgent+for+iOS+devices/",
                    "/display/KD/Installing%20WebDriverAgent%20for%20iOS%20devices/",
                    "/x/TwbR/",
                    "/katalon-studio/docs/installing-webdriveragent-for-ios-devices/",
                    "/docs/katalon-studio-enterprise/create-tests-and-projects/configure-test-cases/mobile-testing/ios/mobile-install-webdriveragent-for-ios-devices",
                    "/docs/katalon-studio-enterprise/create-tests-and-projects/configure-test-cases/mobile-testing/ios/mobile-install-webdriveragent-for-real-ios-devices",
                    "/docs/legacy/katalon-studio-enterprise/create-tests-and-projects/configure-test-cases/mobile-testing/ios/mobile-install-webdriveragent-for-real-ios-devices"
                ]
            },
            {
                "to": "/docs/create-tests/manage-test-artifacts/test-artifacts-sharing-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/import-export-test-artifact.html",
                    "/docs/katalon-studio-enterprise/create-tests-and-projects/test-artifacts-sharing",
                    "/docs/legacy/katalon-studio-enterprise/create-tests-and-projects/test-artifacts-sharing"
                ]
            },
            {
                "to": "/docs/create-tests/create-test-cases/value-types-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/value-types.html",
                    "/display/KD/Value+Types/",
                    "/display/KD/Value%20Types/",
                    "/x/6IIw/",
                    "/katalon-studio/docs/value-types/",
                    "/docs/katalon-studio-enterprise/create-tests-and-projects/value-types",
                    "/docs/legacy/katalon-studio-enterprise/create-tests-and-projects/value-types"
                ]
            },
            {
                "to": "/docs/create-tests/test-objects/mobile-test-objects/locators-and-object-identification-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/locators_object_identification.html",
                    "/katalon-studio/tutorials/locators_object_identification.html",
                    "/docs/katalon-studio-enterprise/test-design/mobile-test-design/mobile-test-objects/locators-and-object-identification",
                    "/docs/legacy/katalon-studio-enterprise/test-design/mobile-test-design/mobile-test-objects/locators-and-object-identification"
                ]
            },
            {
                "to": "/docs/create-tests/test-objects/mobile-test-objects/manage-mobile-test-objects-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/manage-mobile-test-object.html",
                    "/docs/katalon-studio-enterprise/test-design/mobile-test-design/mobile-test-objects/manage-mobile-test-objects",
                    "/docs/legacy/katalon-studio-enterprise/test-design/mobile-test-design/mobile-test-objects/manage-mobile-test-objects"
                ]
            },
            // {
            //     "to": "/docs/create-tests/test-objects/mobile-test-objects/create-mobile-test-object-in-memory-at-runtime-in-katalon-studio",
            //     "from": [
            //         "/katalon-studio/docs/create-mobile-test-object-object-repo-in-runtime.html",
            //         "/docs/katalon-studio-enterprise/test-design/mobile-test-design/mobile-test-objects/create-mobile-test-object-in-memory-at-runtime",
            //         "/docs/legacy/katalon-studio-enterprise/test-design/mobile-test-design/mobile-test-objects/create-mobile-test-object-in-memory-at-runtime"
            //     ]
            // },
            {
                "to": "/docs/create-tests/test-objects/mobile-test-objects/parameterize-mobile-test-object-properties-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/parameterize-mobile-test-object-properties.html",
                    "/docs/katalon-studio-enterprise/test-design/mobile-test-design/mobile-test-objects/parameterize-mobile-test-object-properties",
                    "/docs/legacy/katalon-studio-enterprise/test-design/mobile-test-design/mobile-test-objects/parameterize-mobile-test-object-properties"
                ]
            },
            {
                "to": "/docs/create-tests/manage-projects/set-up-projects/mobile-testing/mobile-image-based-testing-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/mobile-image-based-testing.html",
                    "/docs/katalon-studio-enterprise/test-design/mobile-test-design/mobile-test-objects/mobile-image-based-testing",
                    "/docs/legacy/katalon-studio-enterprise/test-design/mobile-test-design/mobile-test-objects/mobile-image-based-testing"
                ]
            },
            {
                "to": "/docs/create-tests/record-and-spy/mobile-record-and-spy-utilities/introduction-to-mobile-recorder-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/katalon_mobile_recorder_introduction.html",
                    "/katalon-studio/tutorials/katalon_mobile_recorder_introduction.html",
                    "/katalon-studio/tutorials/mobile-testing/index.html",
                    "/docs/katalon-studio-enterprise/test-design/mobile-test-design/mobile-record-and-spy-utilities/an-introduction-to-katalon-mobile-recorder",
                    "/docs/katalon-studio-enterprise/test-design/mobile-test-design/mobile-record-and-spy-utilities/introduction-to-mobile-recorder-in-katalon-studio",
                    "/docs/legacy/katalon-studio-enterprise/test-design/mobile-test-design/mobile-record-and-spy-utilities/introduction-to-mobile-recorder-in-katalon-studio"
                ]
            },
            // {
            //     "to": "/docs/create-tests/record-and-spy/mobile-record-and-spy-utilities/mobile-recorder-tutorial---7.6-onwards",
            //     "from": [
            //         "/katalon-studio/docs/mobile-recorder-tutorials.html",
            //         "/docs/katalon-studio-enterprise/test-design/mobile-test-design/mobile-record-and-spy-utilities/mobile-recorder-tutorial---7.6-onwards",
            //         "/docs/legacy/katalon-studio-enterprise/test-design/mobile-test-design/mobile-record-and-spy-utilities/mobile-recorder-tutorial---7.6-onwards"
            //     ]
            // },
            {
                "to": "/docs/create-tests/record-and-spy/mobile-record-and-spy-utilities/generate-test-scripts-for-a-progressive-web-app-using-mobile-recorder-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/generate-test-scripts-for-progressive-web-app-using-mobile-recorder.html",
                    "/docs/katalon-studio-enterprise/test-design/mobile-test-design/mobile-record-and-spy-utilities/generate-test-scripts-for-a-progressive-web-app-using-mobile-recorder",
                    "/docs/legacy/katalon-studio-enterprise/test-design/mobile-test-design/mobile-record-and-spy-utilities/generate-test-scripts-for-a-progressive-web-app-using-mobile-recorder"
                ]
            },
            // {
            //     "to": "/docs/create-tests/record-and-spy/mobile-record-and-spy-utilities/tutorial-for-mobile-object-spy-in-katalon-studio",
            //     "from": [
            //         "/katalon-studio/docs/spy-mobile-utility.html",
            //         "/display/KD/Spy+Mobile+Utility/",
            //         "/display/KD/Spy%20Mobile%20Utility/",
            //         "/x/3QBO/",
            //         "/katalon-studio/docs/spy-mobile-utility/",
            //         "/display/KD/Spy+Object/",
            //         "/display/KD/Spy%20Object/",
            //         "/docs/katalon-studio-enterprise/test-design/mobile-test-design/mobile-record-and-spy-utilities/tutorial-for-mobile-object-spy",
            //         "/docs/legacy/katalon-studio-enterprise/test-design/mobile-test-design/mobile-record-and-spy-utilities/tutorial-for-mobile-object-spy"
            //     ]
            // },
            {
                "to": "/docs/create-tests/record-and-spy/mobile-record-and-spy-utilities/spy-and-record-utilities-for-testing-an-existing-application-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/mobile-spy-record-existing-apps.html",
                    "/docs/katalon-studio-enterprise/test-design/mobile-test-design/mobile-record-and-spy-utilities/spy-and-record-utilities-for-testing-an-existing-application",
                    "/docs/legacy/katalon-studio-enterprise/test-design/mobile-test-design/mobile-record-and-spy-utilities/spy-and-record-utilities-for-testing-an-existing-application"
                ]
            },
            {
                "to": "/docs/create-tests/record-and-spy/mobile-record-and-spy-utilities/hybrid-mobile-apps-testing/hybrid-mobile-apps-testing-in-katalon-studio-overview",
                "from": [
                    "/katalon-studio/docs/hybrid-app-overview.html",
                    "/docs/katalon-studio-enterprise/test-design/mobile-test-design/hybrid-mobile-apps-testing/hybrid-mobile-apps-testing-overview",
                    "/docs/legacy/katalon-studio-enterprise/test-design/mobile-test-design/hybrid-mobile-apps-testing/hybrid-mobile-apps-testing-overview"
                ]
            },
            {
                "to": "/docs/create-tests/record-and-spy/mobile-record-and-spy-utilities/hybrid-mobile-apps-testing/capture-elements-in-hybrid-android-apps-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/capture-elements-in-hybrid-android-apps.html",
                    "/docs/katalon-studio-enterprise/test-design/mobile-test-design/hybrid-mobile-apps-testing/capture-elements-in-hybrid-android-apps",
                    "/docs/legacy/katalon-studio-enterprise/test-design/mobile-test-design/hybrid-mobile-apps-testing/capture-elements-in-hybrid-android-apps"
                ]
            },
            {
                "to": "/docs/create-tests/manage-projects/set-up-projects/mobile-testing/testing-mobile-apps-using-custom-cloud-devices-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/mobile-testing-apps-cloud-devices.html",
                    "/docs/katalon-studio-enterprise/test-design/mobile-test-design/testing-mobile-apps-using-custom-cloud-devices",
                    "/docs/legacy/katalon-studio-enterprise/test-design/mobile-test-design/testing-mobile-apps-using-custom-cloud-devices"
                ]
            },
            {
                "to": "/docs/create-tests/manage-projects/project-settings/desired-capabilities/remote-execution-for-mobile-testing-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/mobile-remote-execution.html",
                    "/docs/katalon-studio-enterprise/test-design/mobile-test-design/remote-execution-for-mobile-testing",
                    "/docs/legacy/katalon-studio-enterprise/test-design/mobile-test-design/remote-execution-for-mobile-testing"
                ]
            },
            {
                "to": "/docs/create-tests/introduction-to-test-creation/introduction-to-web-testing-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/introduction-to-web-testing.html",
                    "/katalon-studio/tutorials/introduction-to-web-testing/",
                    "/katalon-studio/tutorials/web-testing/index.html",
                    "/katalon-studio/tutorials/introduction-to-web-testing.html",
                    "/docs/katalon-studio-enterprise/test-design/web-test-design/introduction-to-web-testing",
                    "/docs/legacy/katalon-studio-enterprise/test-design/web-test-design/introduction-to-web-testing"
                ]
            },
            {
                "to": "/docs/maintain/self-healing-tests-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/self-healing.html",
                    "/docs/katalon-studio-enterprise/test-design/web-test-design/self-healing-tests",
                    "/docs/legacy/katalon-studio-enterprise/test-design/web-test-design/self-healing-tests"
                ]
            },
            {
                "to": "/docs/create-tests/test-objects/web-test-objects/selection-methods-for-web-tests-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/web-selection-methods.html",
                    "/docs/katalon-studio-enterprise/test-design/web-test-design/web-test-objects/selection-methods-for-web-tests",
                    "/docs/legacy/katalon-studio-enterprise/test-design/web-test-design/web-test-objects/selection-methods-for-web-tests"
                ]
            },
            {
                "to": "/docs/create-tests/test-objects/web-test-objects/detecting-objects-with-xpath-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/detect_elements_xpath.html",
                    "/katalon-studio/tutorials/detect_elements_xpath.html",
                    "/katalon-studio/docs/execute-xpath-functions.html",
                    "/display/KD/Execute+Xpath+functions/",
                    "/display/KD/Execute%20Xpath%20functions/",
                    "/x/ewzR/",
                    "/katalon-studio/docs/execute-xpath-functions/",
                    "/docs/katalon-studio-enterprise/test-design/web-test-design/web-test-objects/detecting-objects-with-xpath",
                    "/docs/legacy/katalon-studio-enterprise/test-design/web-test-design/web-test-objects/detecting-objects-with-xpath"
                ]
            },
            {
                "to": "/docs/create-tests/test-objects/web-test-objects/generating-reliable-object-selector-using-spy-web-utility-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/generate_css_xpath_selector_spy_web_utility.html",
                    "/katalon-studio/tutorials/generate_css_xpath_selector_spy_web_utility.html",
                    "/docs/katalon-studio-enterprise/test-design/web-test-design/web-test-objects/generating-reliable-object-selector-using-spy-web-utility",
                    "/docs/legacy/katalon-studio-enterprise/test-design/web-test-design/web-test-objects/generating-reliable-object-selector-using-spy-web-utility"
                ]
            },
            {
                "to": "/docs/create-tests/test-objects/web-test-objects/manage-web-test-objects-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/manage-web-test-object.html",
                    "/katalon-studio/docs/manage-test-object.html",
                    "/display/KD/Manage+Test+Object/",
                    "/display/KD/Manage%20Test%20Object/",
                    "/x/HoUw/",
                    "/katalon-studio/docs/manage-test-object/",
                    "/katalon-studio/docs/manage+test+object/",
                    "/katalon-studio/docs/manage%20test%20object/",
                    "/x/ZxlO/",
                    "/katalon-studio/docs/working-with-objects-selection-method-for-spyrecord-web/",
                    "/katalon-studio/docs/working-with-objects-selection-method-for-spyrecord-web.html",
                    "/display/KD/Working+with+Shadow+DOM+Objects/",
                    "/display/KD/Working%20with%20Shadow%20DOM%20Objects/",
                    "/x/SBNO/",
                    "/katalon-studio/docs/working-with-shadow-dom-objects/",
                    "/katalon-studio/docs/working-with-shadow-dom-objects.html",
                    "/display/KD/Change+CSS+selector+of+an+object+at+runtime/",
                    "/display/KD/Change%20CSS%20selector%20of%20an%20object%20at%20runtime/",
                    "/x/dQXR/",
                    "/katalon-studio/docs/change-css-selector-of-an-object-at-runtime/",
                    "/katalon-studio/docs/change-css-selector-of-an-object-at-runtime.html",
                    "/display/KD/Clicking+multiple+objects+without+starting+over/",
                    "/display/KD/Clicking%20multiple%20objects%20without%20starting%20over/",
                    "/x/ZwXR/",
                    "/katalon-studio/docs/clicking-multiple-objects-without-starting-over/",
                    "/katalon-studio/docs/clicking-multiple-objects-without-starting-over.html",
                    "/display/KD/Creation+of+Test+Object+in+Object+Repository+in+Runtime/",
                    "/display/KD/Creation%20of%20Test%20Object%20in%20Object%20Repository%20in%20Runtime/",
                    "/x/SAXR/",
                    "/katalon-studio/docs/creation-of-test-object-in-object-repository-in-runtime/",
                    "/katalon-studio/docs/creation-of-test-object-in-object-repository-in-runtime.html",
                    "/docs/katalon-studio-enterprise/test-design/web-test-design/web-test-objects/manage-web-test-objects",
                    "/docs/legacy/katalon-studio-enterprise/test-design/web-test-design/web-test-objects/manage-web-test-objects"
                ]
            },
            {
                "to": "/docs/create-tests/test-objects/web-test-objects/parameterize-web-test-objects-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/parameterize-web-objects.html",
                    "/x/A4C9/",
                    "/katalon-studio/docs/parameterize-webmobile-test-object-properties/",
                    "/katalon-studio/docs/parameterize+webmobile+test+object+properties/",
                    "/katalon-studio/docs/parameterize%20webmobile%20test%20object%20properties/",
                    "/display/KD/Parameterized+a+Test+Object/",
                    "/katalon-studio/docs/parameterize-web-test-object-properties.html",
                    "/docs/katalon-studio-enterprise/test-design/web-test-design/web-test-objects/parameterize-web-test-objects",
                    "/docs/legacy/katalon-studio-enterprise/test-design/web-test-design/web-test-objects/parameterize-web-test-objects"
                ]
            },
            {
                "to": "/docs/create-tests/test-objects/web-test-objects/automation-testing-of-shadow-dom-elements-with-katalon-studio",
                "from": [
                    "/katalon-studio/docs/shadow_dom_elements_testing.html",
                    "/katalon-studio/tutorials/shadow_dom_elements_testing.html",
                    "/docs/katalon-studio-enterprise/test-design/web-test-design/web-test-objects/automation-testing-of-shadow-dom-elements-with-katalon-studio",
                    "/docs/legacy/katalon-studio-enterprise/test-design/web-test-design/web-test-objects/automation-testing-of-shadow-dom-elements-with-katalon-studio"
                ]
            },
            {
                "to": "/docs/create-tests/test-objects/web-test-objects/web-image-based-testing-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/web-image-based-testing.html",
                    "/katalon-studio/docs/web-image-based-object-recognition.html",
                    "/docs/katalon-studio-enterprise/test-design/web-test-design/web-test-objects/web-image-based-testing",
                    "/docs/legacy/katalon-studio-enterprise/test-design/web-test-design/web-test-objects/web-image-based-testing"
                ]
            },
            {
                "to": "/docs/create-tests/record-and-spy/webui-record-and-spy-utilities/spy-web-utility-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/spy-web-utility.html",
                    "/display/KD/Spy+Web+Utility/",
                    "/display/KD/Spy%20Web%20Utility/",
                    "/x/5BZO/",
                    "/katalon-studio/docs/spy-web-utility/",
                    "/x/jwBO/",
                    "/katalon-studio/docs/spy-web-utility-version-48-and-below/",
                    "/katalon-studio/docs/spy-web-utility-version-48-and-below.html",
                    "/docs/katalon-studio-enterprise/test-design/web-test-design/web-record-and-spy-utilities/spy-web-utility",
                    "/docs/legacy/katalon-studio-enterprise/test-design/web-test-design/web-record-and-spy-utilities/spy-web-utility"
                ]
            },
            {
                "to": "/docs/create-tests/record-and-spy/webui-record-and-spy-utilities/record-web-utility-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/record-web-utility.html",
                    "/display/KD/Record+Web+Utility/",
                    "/display/KD/Record%20Web%20Utility/",
                    "/x/RwnR/",
                    "/katalon-studio/docs/record-web-utility/",
                    "/display/KD/Recording+WebUI+Test/",
                    "/display/KD/Recording%20WebUI%20Test/",
                    "/x/IA3R/",
                    "/katalon-studio/docs/recording-webui-test/",
                    "/katalon-studio/docs/recording-webui-test.html",
                    "/x/BoIw/",
                    "/katalon-studio/docs/record-web-utility-version-48-and-below/",
                    "/katalon-studio/docs/record-web-utility-version-48-and-below.html",
                    "/x/ZxhO/",
                    "/katalon-studio/docs/record-web-utility-version-50-to-54/",
                    "/katalon-studio/docs/record-web-utility-version-50-to-54.html",
                    "/katalon-studio/docs/katalon-addon-for-chrome.html",
                    "/docs/katalon-studio-enterprise/test-design/web-test-design/web-record-and-spy-utilities/record-web-utility",
                    "/docs/legacy/katalon-studio-enterprise/test-design/web-test-design/web-record-and-spy-utilities/record-web-utility"
                ]
            },
            {
                "to": "/docs/create-tests/record-and-spy/webui-record-and-spy-utilities/how-to-use-synchronization-commands-while-recording-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/synchronization_commands_recording.html",
                    "/docs/katalon-studio-enterprise/test-design/web-test-design/web-record-and-spy-utilities/how-to-use-synchronization-commands-while-recording",
                    "/docs/legacy/katalon-studio-enterprise/test-design/web-test-design/web-record-and-spy-utilities/how-to-use-synchronization-commands-while-recording"
                ]
            },
            {
                "to": "/docs/create-tests/record-and-spy/webui-record-and-spy-utilities/katalon-compact-utility-for-katalon-studio",
                "from": [
                    "/katalon-studio/docs/katalon-compact-utility.html",
                    "/docs/katalon-studio-enterprise/test-design/web-test-design/web-record-and-spy-utilities/record-with-chrome-using-packed-extension",
                    "/katalon-studio/docs/record-web-utility-using-chrome-with-profile.html",
                    "/docs/katalon-studio-enterprise/test-design/web-test-design/web-record-and-spy-utilities/katalon-compact-utility",
                    "/docs/legacy/katalon-studio-enterprise/test-design/web-test-design/web-record-and-spy-utilities/katalon-compact-utility"
                ]
            },
            {
                "to": "/docs/execute/execute-tests-with-katalon-studio/headless-browsers-execution-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/headless-browsers-execution.html",
                    "/display/KD/Headless+Browsers+Execution/",
                    "/display/KD/Headless%20Browsers%20Execution/",
                    "/x/CQ-R/",
                    "/katalon-studio/docs/headless-browsers-execution/",
                    "/katalon-studio/tutorials/headless_browsers_execution.html",
                    "/docs/katalon-studio-enterprise/test-design/web-test-design/web-record-and-spy-utilities/headless-browsers-execution",
                    "/docs/legacy/katalon-studio-enterprise/test-design/web-test-design/web-record-and-spy-utilities/headless-browsers-execution"
                ]
            },
            {
                "to": "/docs/create-tests/manage-projects/set-up-projects/web-testing/handle-webdrivers/terminate-webdrivers-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/terminate-webdrivers.html",
                    "/docs/katalon-studio-enterprise/test-design/web-test-design/handle-webdrivers/terminate-webdrivers",
                    "/docs/legacy/katalon-studio-enterprise/test-design/web-test-design/handle-webdrivers/terminate-webdrivers"
                ]
            },
            {
                "to": "/docs/create-tests/manage-projects/set-up-projects/web-testing/handle-webdrivers/upgrade-or-downgrade-webdrivers-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/update-or-downgrade-webdrivers.html",
                    "/katalon-studio/docs/handle-webdrivers.html",
                    "/katalon-studio/docs/using-the-webdriver-object.html",
                    "/display/KD/Using+the+WebDriver+Object/",
                    "/display/KD/Using%20the%20WebDriver%20Object/",
                    "/x/OAXR/",
                    "/katalon-studio/docs/using-the-webdriver-object/",
                    "/display/KD/Update+or+Replace+Web+Browser+Drivers+and+Selenium/",
                    "/display/KD/Update%20or%20Replace%20Web%20Browser%20Drivers%20and%20Selenium/",
                    "/x/1xtO/",
                    "/katalon-studio/docs/update-or-replace-web-browser-drivers-and-selenium/",
                    "/katalon-studio/docs/update-or-replace-web-browser-drivers-and-selenium.html",
                    "/katalon-studio/docs/automatically-update-webdriver.html",
                    "/docs/katalon-studio-enterprise/test-design/web-test-design/handle-webdrivers/upgrade-or-downgrade-webdrivers",
                    "/docs/legacy/katalon-studio-enterprise/test-design/web-test-design/handle-webdrivers/upgrade-or-downgrade-webdrivers"
                ]
            },
            {
                "to": "/docs/create-tests/manage-projects/set-up-projects/web-testing/handle-webdrivers/handle-webdrivers-with-eventfiringwebdriver-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/handle-webdrivers-with-event-firing-webdriver.html",
                    "/katalon-studio/docs/webdriver-event-listeners.html",
                    "/docs/katalon-studio-enterprise/test-design/web-test-design/handle-webdrivers/handle-webdrivers-with-eventfiringwebdriver",
                    "/docs/legacy/katalon-studio-enterprise/test-design/web-test-design/handle-webdrivers/handle-webdrivers-with-eventfiringwebdriver"
                ]
            },
            {
                "to": "/docs/create-tests/manage-projects/set-up-projects/mobile-testing/testing-web-app-on-mobile-browsers-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/running_application_mobile_browsers.html",
                    "/katalon-studio/tutorials/running_application_mobile_browsers.html",
                    "/docs/katalon-studio-enterprise/test-design/web-test-design/testing-web-app-on-mobile-browsers",
                    "/docs/legacy/katalon-studio-enterprise/test-design/web-test-design/testing-web-app-on-mobile-browsers"
                ]
            },
            {
                "to": "/docs/create-tests/introduction-to-test-creation/introduction-to-api-testing-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/introduction_api_testing.html",
                    "/katalon-studio/tutorials/api-testing/index.html",
                    "/katalon-studio/tutorials/introduction_api_testing.html",
                    "/docs/katalon-studio-enterprise/test-design/web-services-test-design/introduction-to-api-testing",
                    "/docs/legacy/katalon-studio-enterprise/test-design/web-services-test-design/introduction-to-api-testing"
                ]
            },
            {
                "to": "/docs/create-tests/test-objects/api-test-objects/introduction-to-web-services-test-object-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/introduction-to-web-services-test-object.html",
                    "/display/KD/Introduction+to+Web+Services+Test+Object/",
                    "/display/KD/Introduction%20to%20Web%20Services%20Test%20Object/",
                    "/x/BALR/",
                    "/katalon-studio/docs/introduction-to-web-services-test-object/",
                    "/display/KD/Web+Service/",
                    "/docs/katalon-studio-enterprise/test-design/web-services-test-design/introduction-to-web-services-test-object",
                    "/docs/legacy/katalon-studio-enterprise/test-design/web-services-test-design/introduction-to-web-services-test-object"
                ]
            },
            {
                "to": "/docs/create-tests/test-objects/api-test-objects/soap-request-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/soap.html",
                    "/display/KD/SOAP/",
                    "/x/LwLR/",
                    "/katalon-studio/docs/soap/",
                    "/x/0hNO/",
                    "/katalon-studio/docs/soap-pre-54/",
                    "/katalon-studio/docs/soap-pre-54.html",
                    "/docs/katalon-studio-enterprise/test-design/web-services-test-design/soap-request",
                    "/docs/legacy/katalon-studio-enterprise/test-design/web-services-test-design/soap-request"
                ]
            },
            {
                "to": "/docs/create-tests/test-objects/api-test-objects/web-services-builder-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/web-services-builder.html",
                    "/display/KD/Web+Services+Builder/",
                    "/display/KD/Web%20Services%20Builder/",
                    "/x/IAPR/",
                    "/katalon-studio/docs/web-services-builder/",
                    "/docs/katalon-studio-enterprise/test-design/web-services-test-design/web-services-builder",
                    "/docs/legacy/katalon-studio-enterprise/test-design/web-services-test-design/web-services-builder"
                ]
            },
            {
                "to": "/docs/create-tests/test-objects/api-test-objects/create-web-service-object-in-katalon-studio-script-mode",
                "from": [
                    "/katalon-studio/docs/create_web_service_object_in_script_mode.html",
                    "/katalon-studio/docs/create_web_service_object_in_script_mode/",
                    "/docs/katalon-studio-enterprise/test-design/web-services-test-design/create-web-service-object-in-script-mode",
                    "/docs/legacy/katalon-studio-enterprise/test-design/web-services-test-design/create-web-service-object-in-script-mode"
                ]
            },
            {
                "to": "/docs/create-tests/test-objects/api-test-objects/rest-request/create-rest-api-requests-manually-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/create_rest_api_requests_manually.html",
                    "/katalon-studio/tutorials/create_rest_api_requests_manually.html",
                    "/docs/katalon-studio-enterprise/test-design/web-services-test-design/create-rest-api-requests-manually",
                    "/docs/legacy/katalon-studio-enterprise/test-design/web-services-test-design/create-rest-api-requests-manually"
                ]
            },
            // {
            //     "to": "/docs/create-tests/test-objects/api-test-objects/create-testsization/create-testsization-in-katalon-studio",
            //     "from": [
            //         "/katalon-studio/docs/create-testsization.html",
            //         "/display/KD/create-testsization/",
            //         "/x/Ew-R/",
            //         "/katalon-studio/docs/create-testsization/",
            //         "/docs/katalon-studio-enterprise/test-design/web-services-test-design/working-with-apiweb-services-project/create-testsization",
            //         "/docs/katalon-studio-enterprise/test-design/web-services-test-design/working-with-apiweb-services-project/create-testsization-in-katalon-studio",
            //         "/docs/legacy/katalon-studio-enterprise/test-design/web-services-test-design/working-with-apiweb-services-project/create-testsization-in-katalon-studio"
            //     ]
            // },
            // {
            //     "to": "/docs/create-tests/test-objects/api-test-objects/create-testsization/basic-authentication-in-katalon-studio",
            //     "from": [
            //         "/katalon-studio/docs/create-testsization-basic.html",
            //         "/display/KD/create-testsization-basic/",
            //         "/katalon-studio/docs/create-testsization-basic/",
            //         "/docs/katalon-studio-enterprise/test-design/web-services-test-design/working-with-apiweb-services-project/create-testsization-basic",
            //         "/docs/katalon-studio-enterprise/test-design/web-services-test-design/working-with-apiweb-services-project/basic-authentication",
            //         "/docs/legacy/katalon-studio-enterprise/test-design/web-services-test-design/working-with-apiweb-services-project/basic-authentication"
            //     ]
            // },
            // {
            //     "to": "/docs/create-tests/test-objects/api-test-objects/create-testsization/create-testsization-oauth-1.0-in-katalon-studio",
            //     "from": [
            //         "/katalon-studio/docs/create-testsization-oauth1.html",
            //         "/display/KD/create-testsization-oauth1/",
            //         "/katalon-studio/docs/create-testsization-oauth1/",
            //         "/docs/katalon-studio-enterprise/test-design/web-services-test-design/working-with-apiweb-services-project/create-testsization-oauth-1.0",
            //         "/docs/legacy/katalon-studio-enterprise/test-design/web-services-test-design/working-with-apiweb-services-project/create-testsization-oauth-1.0"
            //     ]
            // },
            // {
            //     "to": "/docs/create-tests/test-objects/api-test-objects/create-testsization/create-testsization-oauth-2.0-in-katalon-studio",
            //     "from": [
            //         "/katalon-studio/docs/create-testsization-oauth2.html",
            //         "/display/KD/create-testsization-oauth2/",
            //         "/katalon-studio/docs/create-testsization-oauth2/",
            //         "/docs/katalon-studio-enterprise/test-design/web-services-test-design/working-with-apiweb-services-project/create-testsization-oauth-2.0",
            //         "/docs/legacy/katalon-studio-enterprise/test-design/web-services-test-design/working-with-apiweb-services-project/create-testsization-oauth-2.0"
            //     ]
            // },
            // {
            //     "to": "/docs/create-tests/test-objects/api-test-objects/create-testsization/ntlm-authentication-in-katalon-studio",
            //     "from": [
            //         "/katalon-studio/docs/ntlm-authentication.html",
            //         "/docs/katalon-studio-enterprise/test-design/web-services-test-design/working-with-apiweb-services-project/ntlm-authentication",
            //         "/docs/legacy/katalon-studio-enterprise/test-design/web-services-test-design/working-with-apiweb-services-project/ntlm-authentication"
            //     ]
            // },
            {
                "to": "/docs/create-tests/test-objects/api-test-objects/verification-snippets-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/verification-snippets.html",
                    "/display/KD/Verification+Snippets/",
                    "/display/KD/Verification%20Snippets/",
                    "/x/EwjR/",
                    "/katalon-studio/docs/verification-snippets/",
                    "/docs/katalon-studio-enterprise/test-design/web-services-test-design/working-with-apiweb-services-project/verification-snippets",
                    "/docs/legacy/katalon-studio-enterprise/test-design/web-services-test-design/working-with-apiweb-services-project/verification-snippets"
                ]
            },
            {
                "to": "/docs/create-tests/test-objects/api-test-objects/request-history-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/request-history.html",
                    "/display/KD/Request+History/",
                    "/display/KD/Request%20History/",
                    "/x/3BXR/",
                    "/katalon-studio/docs/request-history/",
                    "/docs/katalon-studio-enterprise/test-design/web-services-test-design/working-with-apiweb-services-project/request-history",
                    "/docs/legacy/katalon-studio-enterprise/test-design/web-services-test-design/working-with-apiweb-services-project/request-history"
                ]
            },
            {
                "to": "/docs/create-tests/test-objects/api-test-objects/draft-request-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/draft-request.html",
                    "/docs/katalon-studio-enterprise/test-design/web-services-test-design/working-with-apiweb-services-project/draft-request",
                    "/docs/legacy/katalon-studio-enterprise/test-design/web-services-test-design/working-with-apiweb-services-project/draft-request"
                ]
            },
            {
                "to": "/docs/create-tests/test-objects/api-test-objects/import-web-service-objects/import-rest-api-with-openapi-specification-3.0-to-katalon-studio",
                "from": [
                    "/katalon-studio/docs/import-openapi30.html",
                    "/docs/katalon-studio-enterprise/test-design/web-services-test-design/import-web-service-objects/import-rest-api-with-openapi-specification-3.0",
                    "/docs/legacy/katalon-studio-enterprise/test-design/web-services-test-design/import-web-service-objects/import-rest-api-with-openapi-specification-3.0"
                ]
            },
            {
                "to": "/docs/create-tests/test-objects/api-test-objects/import-web-service-objects/import-restful-requests-from-swagger-2.0",
                "from": [
                    "/katalon-studio/docs/import-rest-requests-from-swagger-20.html",
                    "/display/KD/Import+REST+requests+from+Swagger+2.0/",
                    "/display/KD/Import%20REST%20requests%20from%20Swagger%202.0/",
                    "/x/8hXR/",
                    "/katalon-studio/docs/import-rest-requests-from-swagger-20/",
                    "/docs/katalon-studio-enterprise/test-design/web-services-test-design/import-web-service-objects/import-restful-requests-from-swagger-2.0",
                    "/docs/legacy/katalon-studio-enterprise/test-design/web-services-test-design/import-web-service-objects/import-restful-requests-from-swagger-2.0"
                ]
            },
            {
                "to": "/docs/create-tests/test-objects/api-test-objects/import-web-service-objects/import-restful-from-postman-to-katalon-studio",
                "from": [
                    "/katalon-studio/docs/import-postman.html",
                    "/docs/katalon-studio-enterprise/test-design/web-services-test-design/import-web-service-objects/import-restful-from-postman",
                    "/docs/legacy/katalon-studio-enterprise/test-design/web-services-test-design/import-web-service-objects/import-restful-from-postman"
                ]
            },
            {
                "to": "/docs/create-tests/test-objects/api-test-objects/import-web-service-objects/import-web-service-requests-from-soapui-to-katalon-studio",
                "from": [
                    "/katalon-studio/docs/import-soapui.html",
                    "/docs/katalon-studio-enterprise/test-design/web-services-test-design/import-web-service-objects/import-web-service-requests-from-soapui",
                    "/docs/legacy/katalon-studio-enterprise/test-design/web-services-test-design/import-web-service-objects/import-web-service-requests-from-soapui"
                ]
            },
            {
                "to": "/docs/create-tests/test-objects/api-test-objects/import-web-service-objects/import-restful-requests-from-wadls-to-katalon-studio",
                "from": [
                    "/katalon-studio/docs/import-wadl.html",
                    "/docs/katalon-studio-enterprise/test-design/web-services-test-design/import-web-service-objects/import-restful-requests-from-wadls",
                    "/docs/legacy/katalon-studio-enterprise/test-design/web-services-test-design/import-web-service-objects/import-restful-requests-from-wadls"
                ]
            },
            {
                "to": "/docs/create-tests/test-objects/api-test-objects/import-web-service-objects/import-soap-requests-from-wsdls-to-katalon-studio",
                "from": [
                    "/katalon-studio/docs/import-soap-requests-from-wsdl.html",
                    "/display/KD/Import+SOAP+requests+from+WSDL/",
                    "/display/KD/Import%20SOAP%20requests%20from%20WSDL/",
                    "/x/BhbR/",
                    "/katalon-studio/docs/import-soap-requests-from-wsdl/",
                    "/docs/katalon-studio-enterprise/test-design/web-services-test-design/import-web-service-objects/import-soap-requests-from-wsdls",
                    "/docs/legacy/katalon-studio-enterprise/test-design/web-services-test-design/import-web-service-objects/import-soap-requests-from-wsdls"
                ]
            },
            {
                "to": "/docs/create-tests/test-objects/api-test-objects/handle-response-messages-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/handle-response-messages.html",
                    "/display/KD/Handle+Response+Messages/",
                    "/display/KD/Handle%20Response%20Messages/",
                    "/x/BxRO/",
                    "/katalon-studio/docs/handle-response-messages/",
                    "/docs/katalon-studio-enterprise/test-design/web-services-test-design/handle-response-messages",
                    "/docs/legacy/katalon-studio-enterprise/test-design/web-services-test-design/handle-response-messages"
                ]
            },
            {
                "to": "/docs/create-tests/test-objects/api-test-objects/rest-request/parameterize-a-web-service-object-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/parameterize-a-web-service-object.html",
                    "/x/egLR/",
                    "/katalon-studio/docs/parameterize-a-web-service-object/",
                    "/display/KD/Parameterize+a+Web+Service+object/",
                    "/display/KD/Parameterize%20a%20Web%20Service%20object/",
                    "/docs/katalon-studio-enterprise/test-design/web-services-test-design/parameterize-a-web-service-object",
                    "/docs/legacy/katalon-studio-enterprise/test-design/web-services-test-design/parameterize-a-web-service-object"
                ]
            },
            {
                "to": "/docs/create-tests/create-test-cases/create-your-first-api-test-with-katalon-studio",
                "from": [
                    "/katalon-studio/docs/create_first_api_test_katalon_studio.html",
                    "/katalon-studio/tutorials/create_first_api_test_katalon_studio",
                    "/katalon-studio/tutorials/create_first_api_test_katalon_studio.html",
                    "/docs/katalon-studio-enterprise/test-design/web-services-test-design/create-your-first-api-test-with-katalon-studio",
                    "/docs/legacy/katalon-studio-enterprise/test-design/web-services-test-design/create-your-first-api-test-with-katalon-studio"
                ]
            },
            {
                "to": "/docs/create-tests/create-test-cases/using-web-services-in-a-test-case-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/using-web-services-in-a-test-case.html",
                    "/display/KD/Using+Web+Services+in+a+Test+Case/",
                    "/display/KD/Using%20Web%20Services%20in%20a%20Test%20Case/",
                    "/x/ARRO/",
                    "/katalon-studio/docs/using-web-services-in-a-test-case/",
                    "/docs/katalon-studio-enterprise/test-design/web-services-test-design/using-web-services-in-a-test-case",
                    "/docs/legacy/katalon-studio-enterprise/test-design/web-services-test-design/using-web-services-in-a-test-case"
                ]
            },
            {
                "to": "/docs/create-tests/introduction-to-test-creation/introduction-to-desktop-app-testing-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/introduction-desktop-app-testing.html",
                    "/docs/katalon-studio-enterprise/test-design/windows-desktop-apps-test-design/introduction-to-desktop-app-testing",
                    "/docs/legacy/katalon-studio-enterprise/test-design/windows-desktop-apps-test-design/introduction-to-desktop-app-testing"
                ]
            },
            {
                "to": "/docs/create-tests/record-and-spy/windows-record-and-spy-utilities/windows-spy-utility-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/intro-spy-windows.html",
                    "/docs/katalon-studio-enterprise/test-design/windows-desktop-apps-test-design/windows-record-and-spy-utilities/windows-spy-utility",
                    "/docs/legacy/katalon-studio-enterprise/test-design/windows-desktop-apps-test-design/windows-record-and-spy-utilities/windows-spy-utility"
                ]
            },
            {
                "to": "/docs/create-tests/record-and-spy/windows-record-and-spy-utilities/windows-record-utility-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/intro-record-windows.html",
                    "/docs/katalon-studio-enterprise/test-design/windows-desktop-apps-test-design/windows-record-and-spy-utilities/windows-record-utility",
                    "/docs/legacy/katalon-studio-enterprise/test-design/windows-desktop-apps-test-design/windows-record-and-spy-utilities/windows-record-utility"
                ]
            },
            {
                "to": "/docs/create-tests/record-and-spy/windows-record-and-spy-utilities/capture-windows-objects-using-the-windows-spy-utility-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/windows-spy-tutorials.html",
                    "/docs/katalon-studio-enterprise/test-design/windows-desktop-apps-test-design/windows-record-and-spy-utilities/capture-windows-objects-using-the-windows-spy-utility",
                    "/docs/legacy/katalon-studio-enterprise/test-design/windows-desktop-apps-test-design/windows-record-and-spy-utilities/capture-windows-objects-using-the-windows-spy-utility"
                ]
            },
            {
                "to": "/docs/create-tests/record-and-spy/windows-record-and-spy-utilities/windows-record-tutorials-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/windows-recorder-tutorials.html",
                    "/docs/katalon-studio-enterprise/test-design/windows-desktop-apps-test-design/windows-record-and-spy-utilities/windows-record-tutorials",
                    "/docs/legacy/katalon-studio-enterprise/test-design/windows-desktop-apps-test-design/windows-record-and-spy-utilities/windows-record-tutorials"
                ]
            },
            {
                "to": "/docs/create-tests/record-and-spy/windows-record-and-spy-utilities/native-windows-recorder-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/windows-native-record.html",
                    "/docs/katalon-studio-enterprise/test-design/windows-desktop-apps-test-design/windows-record-and-spy-utilities/native-windows-recorder",
                    "/docs/legacy/katalon-studio-enterprise/test-design/windows-desktop-apps-test-design/windows-record-and-spy-utilities/native-windows-recorder"
                ]
            },
            {
                "to": "/docs/create-tests/test-objects/windows-test-objects/windows-test-objects-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/windows-test-objects.html",
                    "/docs/katalon-studio-enterprise/test-design/windows-desktop-apps-test-design/windows-test-objects",
                    "/docs/legacy/katalon-studio-enterprise/test-design/windows-desktop-apps-test-design/windows-test-objects"
                ]
            },
            {
                "to": "/docs/get-started/sample-projects/behavior-driven-development/sample-bdd-cucumber-tests-project-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/cucumber-features-file.html",
                    "/display/KD/Cucumber+Features+File/",
                    "/display/KD/Cucumber%20Features%20File/",
                    "/x/OBLR/",
                    "/katalon-studio/docs/cucumber-features-file/",
                    "/katalon-studio/docs/running-cucumber-features-file.html",
                    "/display/KD/Running+Cucumber+Features+File/",
                    "/display/KD/Running%20Cucumber%20Features%20File/",
                    "/x/PhLR/",
                    "/katalon-studio/docs/running-cucumber-features-file/",
                    "/display/KD/Step+Definitions/",
                    "/display/KD/Step%20Definitions/",
                    "/x/OxLR/",
                    "/katalon-studio/docs/step-definitions/",
                    "/katalon-studio/docs/step-definitions.html",
                    "/docs/katalon-studio-enterprise/test-design/bdd-testing-framework-cucumber-integration/bdd-testing-framework-cucumber-integration",
                    "/docs/katalon-studio-enterprise/test-design/bdd-testing-framework-cucumber-integration/bdd-testing-framework-cucumber-integration-in-katalon-studio",
                    "/docs/legacy/katalon-studio-enterprise/test-design/bdd-testing-framework-cucumber-integration/bdd-testing-framework-cucumber-integration-in-katalon-studio",
                    // "/docs/general-information/supported-integration/supported-integration-overview/bdd-testing-framework-cucumber-integration-overview"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-accept-alert",
                "from": [
                    "/katalon-studio/docs/webui-accept-alert.html",
                    "/display/KD/%5BWebUI%5D+Accept+Alert/",
                    "/display/KD/%5BWebUI%5D%20Accept%20Alert/",
                    "/x/RYcY/",
                    "/katalon-studio/docs/webui-accept-alert/",
                    "/display/KD/Built-in+Keywords/",
                    "/x/tQTR/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-accept-alert",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-accept-alert"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-authenticate",
                "from": [
                    "/katalon-studio/docs/webui-authenticate.html",
                    "/display/KD/%5BWebUI%5D+Authenticate/",
                    "/display/KD/%5BWebUI%5D%20Authenticate/",
                    "/x/xYgY/",
                    "/katalon-studio/docs/webui-authenticate/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-authenticate",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-authenticate"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-back",
                "from": [
                    "/katalon-studio/docs/webui-back.html",
                    "/display/KD/%5BWebUI%5D+Back/",
                    "/display/KD/%5BWebUI%5D%20Back/",
                    "/x/yYgY/",
                    "/katalon-studio/docs/webui-back/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-back",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-back"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-check",
                "from": [
                    "/katalon-studio/docs/webui-check.html",
                    "/display/KD/%5BWebUI%5D+Check/",
                    "/display/KD/%5BWebUI%5D%20Check/",
                    "/x/EYkY/",
                    "/katalon-studio/docs/webui-check/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-check",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-check"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-click",
                "from": [
                    "/katalon-studio/docs/webui-click.html",
                    "/display/KD/%5BWebUI%5D+Click/",
                    "/display/KD/%5BWebUI%5D%20Click/",
                    "/x/MYkY/",
                    "/katalon-studio/docs/webui-click/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-click",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-click"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-click-image",
                "from": [
                    "/katalon-studio/docs/webui-click-image.html",
                    "/display/KD/%5BWebUI%5D+Click+Image/",
                    "/display/KD/%5BWebUI%5D%20Click%20Image/",
                    "/x/NIgY/",
                    "/katalon-studio/docs/webui-click-image/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-click-image",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-click-image"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-click-offset",
                "from": [
                    "/katalon-studio/docs/webui-click-offset.html",
                    "/display/KD/%5BWebUI%5D+Click+Offset/",
                    "/display/KD/%5BWebUI%5D%20Click%20Offset/",
                    "/x/eA5O/",
                    "/katalon-studio/docs/webui-click-offset/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-click-offset",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-click-offset"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-close-browser",
                "from": [
                    "/katalon-studio/docs/webui-close-browser.html",
                    "/display/KD/%5BWebUI%5D+Close+Browser/",
                    "/display/KD/%5BWebUI%5D%20Close%20Browser/",
                    "/x/zYgY/",
                    "/katalon-studio/docs/webui-close-browser/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-close-browser",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-close-browser"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-close-window-index",
                "from": [
                    "/katalon-studio/docs/webui-close-window-index.html",
                    "/display/KD/%5BWebUI%5D+Close+Window+Index/",
                    "/display/KD/%5BWebUI%5D%20Close%20Window%20Index/",
                    "/x/8ooY/",
                    "/katalon-studio/docs/webui-close-window-index/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-close-window-index",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-close-window-index"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-close-window-title",
                "from": [
                    "/katalon-studio/docs/webui-close-window-title.html",
                    "/display/KD/%5BWebUI%5D+Close+Window+Title/",
                    "/display/KD/%5BWebUI%5D%20Close%20Window%20Title/",
                    "/katalon-studio/docs/webui-close-window-title/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-close-window-title",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-close-window-title"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-close-window-url",
                "from": [
                    "/katalon-studio/docs/webui-close-window-url.html",
                    "/display/KD/%5BWebUI%5D+Close+Window+Url/",
                    "/display/KD/%5BWebUI%5D%20Close%20Window%20Url/",
                    "/x/O4sY/",
                    "/katalon-studio/docs/webui-close-window-url/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-close-window-url",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-close-window-url"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-delete-all-cookies",
                "from": [
                    "/katalon-studio/docs/webui-delete-all-cookies.html",
                    "/display/KD/%5BWebUI%5D+Delete+All+Cookies/",
                    "/display/KD/%5BWebUI%5D%20Delete%20All%20Cookies/",
                    "/x/0ogY/",
                    "/katalon-studio/docs/webui-delete-all-cookies/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-delete-all-cookies",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-delete-all-cookies"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-deselect-all-option",
                "from": [
                    "/katalon-studio/docs/webui-deselect-all-option.html",
                    "/display/KD/%5BWebUI%5D+Deselect+All+Option/",
                    "/display/KD/%5BWebUI%5D%20Deselect%20All%20Option/",
                    "/x/KYkY/",
                    "/katalon-studio/docs/webui-deselect-all-option/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-deselect-all-option",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-deselect-all-option"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-deselect-option-by-index",
                "from": [
                    "/katalon-studio/docs/webui-deselect-option-by-index.html",
                    "/display/KD/%5BWebUI%5D+Deselect+Option+By+Index/",
                    "/display/KD/%5BWebUI%5D%20Deselect%20Option%20By%20Index/",
                    "/x/-5EY/",
                    "/katalon-studio/docs/webui-deselect-option-by-index/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-deselect-option-by-index",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-deselect-option-by-index"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-deselect-option-by-label",
                "from": [
                    "/katalon-studio/docs/webui-deselect-option-by-label.html",
                    "/display/KD/%5BWebUI%5D+Deselect+Option+By+Label/",
                    "/display/KD/%5BWebUI%5D%20Deselect%20Option%20By%20Label/",
                    "/x/CZIY/",
                    "/katalon-studio/docs/webui-deselect-option-by-label/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-deselect-option-by-label",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-deselect-option-by-label"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-deselect-option-by-value",
                "from": [
                    "/katalon-studio/docs/webui-deselect-option-by-value.html",
                    "/display/KD/%5BWebUI%5D+Deselect+Option+By+Value/",
                    "/display/KD/%5BWebUI%5D%20Deselect%20Option%20By%20Value/",
                    "/x/EZIY/",
                    "/katalon-studio/docs/webui-deselect-option-by-value/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-deselect-option-by-value",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-deselect-option-by-value"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-dismiss-alert",
                "from": [
                    "/katalon-studio/docs/webui-dismiss-alert.html",
                    "/display/KD/%5BWebUI%5D+Dismiss+Alert/",
                    "/display/KD/%5BWebUI%5D%20Dismiss%20Alert/",
                    "/x/4YcY/",
                    "/katalon-studio/docs/webui-dismiss-alert/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-dismiss-alert",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-dismiss-alert"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-double-click",
                "from": [
                    "/katalon-studio/docs/webui-double-click.html",
                    "/display/KD/%5BWebUI%5D+Double+Click/",
                    "/display/KD/%5BWebUI%5D%20Double%20Click/",
                    "/x/OokY/",
                    "/katalon-studio/docs/webui-double-click/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-double-click",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-double-click"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-drag-and-drop-by-offset",
                "from": [
                    "/katalon-studio/docs/webui-drag-and-drop-by-offset.html",
                    "/display/KD/%5BWebUI%5D+Drag+And+Drop+By+Offset/",
                    "/display/KD/%5BWebUI%5D%20Drag%20And%20Drop%20By%20Offset/",
                    "/x/PokY/",
                    "/katalon-studio/docs/webui-drag-and-drop-by-offset/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-drag-and-drop-by-offset",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-drag-and-drop-by-offset"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-drag-and-drop-to-object",
                "from": [
                    "/katalon-studio/docs/webui-drag-and-drop-to-object.html",
                    "/display/KD/%5BWebUI%5D+Drag+And+Drop+To+Object/",
                    "/display/KD/%5BWebUI%5D%20Drag%20And%20Drop%20To%20Object/",
                    "/x/QokY/",
                    "/katalon-studio/docs/webui-drag-and-drop-to-object/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-drag-and-drop-to-object",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-drag-and-drop-to-object"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-enhanced-click",
                "from": [
                    "/katalon-studio/docs/webui-enhanced-click.html",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-enhanced-click",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-enhanced-click"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-execute-javascript",
                "from": [
                    "/katalon-studio/docs/webui-execute-javascript.html",
                    "/display/KD/%5BWebUI%5D+Execute+JavaScript/",
                    "/display/KD/%5BWebUI%5D%20Execute%20JavaScript/",
                    "/x/XhdO/",
                    "/katalon-studio/docs/webui-execute-javascript/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-execute-javascript",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-execute-javascript"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-find-web-element",
                "from": [
                    "/katalon-studio/docs/webui-find-web-element.html",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-find-web-element",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-find-web-element"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-find-web-elements",
                "from": [
                    "/katalon-studio/docs/webui-find-web-elements.html",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-find-web-elements",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-find-web-elements"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-focus",
                "from": [
                    "/katalon-studio/docs/webui-focus.html",
                    "/display/KD/%5BWebUI%5D+Focus/",
                    "/display/KD/%5BWebUI%5D%20Focus/",
                    "/x/RokY/",
                    "/katalon-studio/docs/webui-focus/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-focus",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-focus"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-forward",
                "from": [
                    "/katalon-studio/docs/webui-forward.html",
                    "/display/KD/%5BWebUI%5D+Forward/",
                    "/display/KD/%5BWebUI%5D%20Forward/",
                    "/x/2IgY/",
                    "/katalon-studio/docs/webui-forward/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-forward",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-forward"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-get-alert-text",
                "from": [
                    "/katalon-studio/docs/webui-get-alert-text.html",
                    "/display/KD/%5BWebUI%5D+Get+Alert+Text/",
                    "/display/KD/%5BWebUI%5D%20Get%20Alert%20Text/",
                    "/x/-4cY/",
                    "/katalon-studio/docs/webui-get-alert-text/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-get-alert-text",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-get-alert-text"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-get-all-links-on-current-page",
                "from": [
                    "/katalon-studio/docs/webui-get-all-links-on-current-page.html",
                    "/display/KD/%5BWebUI%5D+Get+All+Links+On+Current+Page/",
                    "/display/KD/%5BWebUI%5D%20Get%20All%20Links%20On%20Current%20Page/",
                    "/x/CBBO/",
                    "/katalon-studio/docs/webui-get-all-links-on-current-page/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-get-all-links-on-current-page",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-get-all-links-on-current-page"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-get-attribute",
                "from": [
                    "/katalon-studio/docs/webui-get-attribute.html",
                    "/display/KD/%5BWebUI%5D+Get+Attribute/",
                    "/display/KD/%5BWebUI%5D%20Get%20Attribute/",
                    "/x/u4gY/",
                    "/katalon-studio/docs/webui-get-attribute/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-get-attribute",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-get-attribute"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-get-css-value",
                "from": [
                    "/katalon-studio/docs/webui-get-css-value.html",
                    "/display/KD/%5BWebUI%5D+Get+CSS+Value/",
                    "/display/KD/%5BWebUI%5D%20Get%20CSS%20Value/",
                    "/x/voYw/",
                    "/katalon-studio/docs/webui-get-css-value/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-get-css-value",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-get-css-value"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-get-element-height",
                "from": [
                    "/katalon-studio/docs/webui-get-element-height.html",
                    "/display/KD/%5BWebUI%5D+Get+Element+Height/",
                    "/display/KD/%5BWebUI%5D%20Get%20Element%20Height/",
                    "/x/WQpO/",
                    "/katalon-studio/docs/webui-get-element-height/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-get-element-height",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-get-element-height"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-get-element-left-position",
                "from": [
                    "/katalon-studio/docs/webui-get-element-left-position.html",
                    "/display/KD/%5BWebUI%5D+Get+Element+Left+Position/",
                    "/display/KD/%5BWebUI%5D%20Get%20Element%20Left%20Position/",
                    "/x/HwpO/",
                    "/katalon-studio/docs/webui-get-element-left-position/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-get-element-left-position",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-get-element-left-position"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-get-element-width",
                "from": [
                    "/katalon-studio/docs/webui-get-element-width.html",
                    "/display/KD/%5BWebUI%5D+Get+Element+Width/",
                    "/display/KD/%5BWebUI%5D%20Get%20Element%20Width/",
                    "/x/lApO/",
                    "/katalon-studio/docs/webui-get-element-width/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-get-element-width",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-get-element-width"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-get-number-of-selected-option",
                "from": [
                    "/katalon-studio/docs/webui-get-number-of-selected-option.html",
                    "/display/KD/%5BWebUI%5D+Get+Number+Of+Selected+Option/",
                    "/display/KD/%5BWebUI%5D%20Get%20Number%20Of%20Selected%20Option/",
                    "/x/GZIY/",
                    "/katalon-studio/docs/webui-get-number-of-selected-option/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-get-number-of-selected-option",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-get-number-of-selected-option"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-get-number-of-total-option",
                "from": [
                    "/katalon-studio/docs/webui-get-number-of-total-option.html",
                    "/display/KD/%5BWebUI%5D+Get+Number+Of+Total+Option/",
                    "/display/KD/%5BWebUI%5D%20Get%20Number%20Of%20Total%20Option/",
                    "/x/HZIY/",
                    "/katalon-studio/docs/webui-get-number-of-total-option/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-get-number-of-total-option",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-get-number-of-total-option"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-get-page-height",
                "from": [
                    "/katalon-studio/docs/webui-get-page-height.html",
                    "/display/KD/%5BWebUI%5D+Get+Page+Height/",
                    "/display/KD/%5BWebUI%5D%20Get%20Page%20Height/",
                    "/x/VYsY/",
                    "/katalon-studio/docs/webui-get-page-height/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-get-page-height",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-get-page-height"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-get-page-width",
                "from": [
                    "/katalon-studio/docs/webui-get-page-width.html",
                    "/display/KD/%5BWebUI%5D+Get+Page+Width/",
                    "/display/KD/%5BWebUI%5D%20Get%20Page%20Width/",
                    "/katalon-studio/docs/webui-get-page-width/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-get-page-width",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-get-page-width"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-get-text",
                "from": [
                    "/katalon-studio/docs/webui-get-text.html",
                    "/display/KD/%5BWebUI%5D+Get+Text/",
                    "/display/KD/%5BWebUI%5D%20Get%20Text/",
                    "/x/_okY/",
                    "/katalon-studio/docs/webui-get-text/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-get-text",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-get-text"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-get-url",
                "from": [
                    "/katalon-studio/docs/webui-get-url.html",
                    "/display/KD/%5BWebUI%5D+Get+Url/",
                    "/display/KD/%5BWebUI%5D%20Get%20Url/",
                    "/x/kIsY/",
                    "/katalon-studio/docs/webui-get-url/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-get-url",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-get-url"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-get-viewport-height",
                "from": [
                    "/katalon-studio/docs/webui-get-viewport-height.html",
                    "/display/KD/%5BWebUI%5D+Get+Viewport+Height/",
                    "/display/KD/%5BWebUI%5D%20Get%20Viewport%20Height/",
                    "/x/r4sY/",
                    "/katalon-studio/docs/webui-get-viewport-height/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-get-viewport-height",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-get-viewport-height"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-get-viewport-left-position",
                "from": [
                    "/katalon-studio/docs/webui-get-viewport-left-position.html",
                    "/display/KD/%5BWebUI%5D+Get+Viewport+Left+Position/",
                    "/display/KD/%5BWebUI%5D%20Get%20Viewport%20Left%20Position/",
                    "/x/zosY/",
                    "/katalon-studio/docs/webui-get-viewport-left-position/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-get-viewport-left-position",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-get-viewport-left-position"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-get-viewport-top-position",
                "from": [
                    "/katalon-studio/docs/webui-get-viewport-top-position.html",
                    "/display/KD/%5BWebUI%5D+Get+Viewport+Top+Position/",
                    "/display/KD/%5BWebUI%5D%20Get%20Viewport%20Top%20Position/",
                    "/x/C4wY/",
                    "/katalon-studio/docs/webui-get-viewport-top-position/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-get-viewport-top-position",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-get-viewport-top-position"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-get-viewport-width",
                "from": [
                    "/katalon-studio/docs/webui-get-viewport-width.html",
                    "/display/KD/%5BWebUI%5D+Get+Viewport+Width/",
                    "/display/KD/%5BWebUI%5D%20Get%20Viewport%20Width/",
                    "/x/KowY/",
                    "/katalon-studio/docs/webui-get-viewport-width/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-get-viewport-width",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-get-viewport-width"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-get-window-index",
                "from": [
                    "/katalon-studio/docs/webui-get-window-index.html",
                    "/display/KD/%5BWebUI%5D+Get+Window+Index/",
                    "/display/KD/%5BWebUI%5D%20Get%20Window%20Index/",
                    "/x/UowY/",
                    "/katalon-studio/docs/webui-get-window-index/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-get-window-index",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-get-window-index"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-get-window-title",
                "from": [
                    "/katalon-studio/docs/webui-get-window-title.html",
                    "/display/KD/%5BWebUI%5D+Get+Window+Title/",
                    "/display/KD/%5BWebUI%5D%20Get%20Window%20Title/",
                    "/x/dYwY/",
                    "/katalon-studio/docs/webui-get-window-title/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-get-window-title",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-get-window-title"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-maximize-window",
                "from": [
                    "/katalon-studio/docs/webui-maximize-window.html",
                    "/display/KD/%5BWebUI%5D+Maximize+Window/",
                    "/display/KD/%5BWebUI%5D%20Maximize%20Window/",
                    "/x/mowY/",
                    "/katalon-studio/docs/webui-maximize-window/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-maximize-window",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-maximize-window"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-modify-object-property",
                "from": [
                    "/katalon-studio/docs/webui-modify-object-property.html",
                    "/display/KD/%5BWebUI%5D+Modify+Object+Property/",
                    "/display/KD/%5BWebUI%5D%20Modify%20Object%20Property/",
                    "/x/q4oY/",
                    "/katalon-studio/docs/webui-modify-object-property/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-modify-object-property",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-modify-object-property"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-mouse-over",
                "from": [
                    "/katalon-studio/docs/webui-mouse-over.html",
                    "/display/KD/%5BWebUI%5D+Mouse+Over/",
                    "/display/KD/%5BWebUI%5D%20Mouse%20Over/",
                    "/x/S4kY/",
                    "/katalon-studio/docs/webui-mouse-over/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-mouse-over",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-mouse-over"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-mouse-over-offset",
                "from": [
                    "/katalon-studio/docs/webui-mouse-over-offset.html",
                    "/display/KD/%5BWebUI%5D+Mouse+Over+Offset/",
                    "/display/KD/%5BWebUI%5D%20Mouse%20Over%20Offset/",
                    "/x/dA9O/",
                    "/katalon-studio/docs/webui-mouse-over-offset/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-mouse-over-offset",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-mouse-over-offset"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-navigate-to-url",
                "from": [
                    "/katalon-studio/docs/webui-navigate-to-url.html",
                    "/display/KD/%5BWebUI%5D+Navigate+to+Url/",
                    "/display/KD/%5BWebUI%5D%20Navigate%20to%20Url/",
                    "/x/3IgY/",
                    "/katalon-studio/docs/webui-navigate-to-url/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-navigate-to-url",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-navigate-to-url"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-open-browser",
                "from": [
                    "/katalon-studio/docs/webui-open-browser.html",
                    "/display/KD/%5BWebUI%5D+Open+Browser/",
                    "/display/KD/%5BWebUI%5D%20Open%20Browser/",
                    "/x/9ogY/",
                    "/katalon-studio/docs/webui-open-browser/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-open-browser",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-open-browser"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-refresh",
                "from": [
                    "/katalon-studio/docs/webui-refresh.html",
                    "/display/KD/%5BWebUI%5D+Refresh/",
                    "/display/KD/%5BWebUI%5D%20Refresh/",
                    "/x/BokY/",
                    "/katalon-studio/docs/webui-refresh/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-refresh",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-refresh"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-remove-object-property",
                "from": [
                    "/katalon-studio/docs/webui-remove-object-property.html",
                    "/display/KD/%5BWebUI%5D+Remove+Object+Property/",
                    "/display/KD/%5BWebUI%5D%20Remove%20Object%20Property/",
                    "/x/wooY/",
                    "/katalon-studio/docs/webui-remove-object-property/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-remove-object-property",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-remove-object-property"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-right-click",
                "from": [
                    "/katalon-studio/docs/webui-right-click.html",
                    "/display/KD/%5BWebUI%5D+Right+Click/",
                    "/display/KD/%5BWebUI%5D%20Right%20Click/",
                    "/x/T4kY/",
                    "/katalon-studio/docs/webui-right-click/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-right-click",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-right-click"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-right-click-offset",
                "from": [
                    "/katalon-studio/docs/webui-right-click-offset.html",
                    "/display/KD/%5BWebUI%5D+Right+Click+Offset/",
                    "/display/KD/%5BWebUI%5D%20Right%20Click%20Offset/",
                    "/x/gg5O/",
                    "/katalon-studio/docs/webui-right-click-offset/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-right-click-offset",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-right-click-offset"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-scroll-to-element",
                "from": [
                    "/katalon-studio/docs/webui-scroll-to-element.html",
                    "/display/KD/%5BWebUI%5D+Scroll+To+Element/",
                    "/display/KD/%5BWebUI%5D%20Scroll%20To%20Element/",
                    "/x/U4kY/",
                    "/katalon-studio/docs/webui-scroll-to-element/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-scroll-to-element",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-scroll-to-element"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-scroll-to-position",
                "from": [
                    "/katalon-studio/docs/webui-scroll-to-position.html",
                    "/display/KD/%5BWebUI%5D+Scroll+To+Position/",
                    "/display/KD/%5BWebUI%5D%20Scroll%20To%20Position/",
                    "/x/vYwY/",
                    "/katalon-studio/docs/webui-scroll-to-position/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-scroll-to-position",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-scroll-to-position"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-select-all-option",
                "from": [
                    "/katalon-studio/docs/webui-select-all-option.html",
                    "/display/KD/%5BWebUI%5D+Select+All+Option/",
                    "/display/KD/%5BWebUI%5D%20Select%20All%20Option/",
                    "/katalon-studio/docs/webui-select-all-option/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-select-all-option",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-select-all-option"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-select-option-by-index",
                "from": [
                    "/katalon-studio/docs/webui-select-option-by-index.html",
                    "/display/KD/%5BWebUI%5D+Select+Option+By+Index/",
                    "/display/KD/%5BWebUI%5D%20Select%20Option%20By%20Index/",
                    "/x/JZIY/",
                    "/katalon-studio/docs/webui-select-option-by-index/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-select-option-by-index",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-select-option-by-index"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-select-option-by-label",
                "from": [
                    "/katalon-studio/docs/webui-select-option-by-label.html",
                    "/display/KD/%5BWebUI%5D+Select+Option+By+Label/",
                    "/display/KD/%5BWebUI%5D%20Select%20Option%20By%20Label/",
                    "/x/KZIY/",
                    "/katalon-studio/docs/webui-select-option-by-label/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-select-option-by-label",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-select-option-by-label"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-select-option-by-value",
                "from": [
                    "/katalon-studio/docs/webui-select-option-by-value.html",
                    "/display/KD/%5BWebUI%5D+Select+Option+By+Value/",
                    "/display/KD/%5BWebUI%5D%20Select%20Option%20By%20Value/",
                    "/x/LZIY/",
                    "/katalon-studio/docs/webui-select-option-by-value/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-select-option-by-value",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-select-option-by-value"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-send-keys",
                "from": [
                    "/katalon-studio/docs/webui-send-keys.html",
                    "/display/KD/%5BWebUI%5D+Send+Keys/",
                    "/display/KD/%5BWebUI%5D%20Send%20Keys/",
                    "/x/vIgY/",
                    "/katalon-studio/docs/webui-send-keys/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-send-keys",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-send-keys"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-set-alert-text",
                "from": [
                    "/katalon-studio/docs/webui-set-alert-text.html",
                    "/display/KD/%5BWebUI%5D+Set+Alert+Text/",
                    "/display/KD/%5BWebUI%5D%20Set%20Alert%20Text/",
                    "/x/LYgY/",
                    "/katalon-studio/docs/webui-set-alert-text/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-set-alert-text",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-set-alert-text"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-set-encrypted-text",
                "from": [
                    "/katalon-studio/docs/webui-set-encrypted-text.html",
                    "/display/KD/%5BWebUI%5D+Set+Encrypted+Text/",
                    "/display/KD/%5BWebUI%5D%20Set%20Encrypted%20Text/",
                    "/x/6AHR/",
                    "/katalon-studio/docs/webui-set-encrypted-text/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-set-encrypted-text",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-set-encrypted-text"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-set-masked-text",
                "from": [
                    "/katalon-studio/docs/webui-set-masked-text.html",
                    "/display/KD/%5BWebUI%5D+Set+Masked+Text/",
                    "/display/KD/%5BWebUI%5D%20Set%20Masked%20Text/",
                    "/x/JBBO/",
                    "/katalon-studio/docs/webui-set-masked-text/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-set-masked-text",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-set-masked-text"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-set-text",
                "from": [
                    "/katalon-studio/docs/webui-set-text.html",
                    "/display/KD/%5BWebUI%5D+Set+Text/",
                    "/display/KD/%5BWebUI%5D%20Set%20Text/",
                    "/x/T4cY/",
                    "/katalon-studio/docs/webui-set-text/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-set-text",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-set-text"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-set-view-port-size",
                "from": [
                    "/katalon-studio/docs/webui-set-view-port-size.html",
                    "/display/KD/%5BWebUI%5D+Set+View+Port+Size/",
                    "/display/KD/%5BWebUI%5D%20Set%20View%20Port%20Size/",
                    "/x/4YwY/",
                    "/katalon-studio/docs/webui-set-view-port-size/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-set-view-port-size",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-set-view-port-size"
                ]
            },
            // {
            //     "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-smart-wait-function",
            //     "from": [
            //         "/katalon-studio/docs/webui-smartwait.html",
            //         "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-smart-wait-function",
            //         "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-smart-wait-function"
            //     ]
            // },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-submit",
                "from": [
                    "/katalon-studio/docs/webui-submit.html",
                    "/display/KD/%5BWebUI%5D+Submit/",
                    "/display/KD/%5BWebUI%5D%20Submit/",
                    "/x/EIgY/",
                    "/katalon-studio/docs/webui-submit/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-submit",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-submit"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-switch-to-default-content",
                "from": [
                    "/katalon-studio/docs/webui-switch-to-default-content.html",
                    "/display/KD/%5BWebUI%5D+Switch+To+Default+Content/",
                    "/display/KD/%5BWebUI%5D%20Switch%20To%20Default%20Content/",
                    "/x/FYgY/",
                    "/katalon-studio/docs/webui-switch-to-default-content/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-switch-to-default-content",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-switch-to-default-content"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-switch-to-frame",
                "from": [
                    "/katalon-studio/docs/webui-switch-to-frame.html",
                    "/display/KD/%5BWebUI%5D+Switch+To+Frame/",
                    "/display/KD/%5BWebUI%5D%20Switch%20To%20Frame/",
                    "/x/JYgY/",
                    "/katalon-studio/docs/webui-switch-to-frame/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-switch-to-frame",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-switch-to-frame"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-switch-to-window-index",
                "from": [
                    "/katalon-studio/docs/webui-switch-to-window-index.html",
                    "/display/KD/%5BWebUI%5D+Switch+To+Window+Index/",
                    "/display/KD/%5BWebUI%5D%20Switch%20To%20Window%20Index/",
                    "/x/Bo0Y/",
                    "/katalon-studio/docs/webui-switch-to-window-index/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-switch-to-window-index",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-switch-to-window-index"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-switch-to-window-title",
                "from": [
                    "/katalon-studio/docs/webui-switch-to-window-title.html",
                    "/display/KD/%5BWebUI%5D+Switch+To+Window+Title/",
                    "/display/KD/%5BWebUI%5D%20Switch%20To%20Window%20Title/",
                    "/x/LI0Y/",
                    "/katalon-studio/docs/webui-switch-to-window-title/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-switch-to-window-title",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-switch-to-window-title"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-switch-to-window-url",
                "from": [
                    "/katalon-studio/docs/webui-switch-to-window-url.html",
                    "/display/KD/%5BWebUI%5D+Switch+To+Window+Url/",
                    "/display/KD/%5BWebUI%5D%20Switch%20To%20Window%20Url/",
                    "/x/U40Y/",
                    "/katalon-studio/docs/webui-switch-to-window-url/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-switch-to-window-url",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-switch-to-window-url"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-take-area-screenshot",
                "from": [
                    "/katalon-studio/docs/webui-take-area-screenshot.html",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-take-area-screenshot",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-take-area-screenshot"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-take-element-screenshot",
                "from": [
                    "/katalon-studio/docs/webui-take-element-screenshot.html",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-take-element-screenshot",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-take-element-screenshot"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-take-full-page-screenshot",
                "from": [
                    "/katalon-studio/docs/webui-take-fullpage-screenshot.html",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-take-full-page-screenshot",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-take-full-page-screenshot"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-take-screenshot",
                "from": [
                    "/katalon-studio/docs/webui-take-screenshot.html",
                    "/display/KD/%5BWebUI%5D+Take+Screenshot/",
                    "/display/KD/%5BWebUI%5D%20Take%20Screenshot/",
                    "/x/2IoY/",
                    "/katalon-studio/docs/webui-take-screenshot/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-take-screenshot",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-take-screenshot"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-type-on-image",
                "from": [
                    "/katalon-studio/docs/webui-type-on-image.html",
                    "/display/KD/%5BWebUI%5D+Type+On+Image/",
                    "/display/KD/%5BWebUI%5D%20Type%20On%20Image/",
                    "/x/RYgY/",
                    "/katalon-studio/docs/webui-type-on-image/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-type-on-image",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-type-on-image"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-un-check",
                "from": [
                    "/katalon-studio/docs/webui-un-check.html",
                    "/display/KD/%5BWebUI%5D+Un-check/",
                    "/display/KD/%5BWebUI%5D%20Un-check/",
                    "/x/F4kY/",
                    "/katalon-studio/docs/webui-un-check/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-un-check",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-un-check"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-upload-file",
                "from": [
                    "/katalon-studio/docs/webui-upload-file.html",
                    "/display/KD/%5BWebUI%5D+Upload+File/",
                    "/display/KD/%5BWebUI%5D%20Upload%20File/",
                    "/x/gYkY/",
                    "/katalon-studio/docs/webui-upload-file/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-upload-file",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-upload-file"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-upload-file-by-drag-and-drop",
                "from": [
                    "/katalon-studio/docs/webui-upload-file-drag-and-drop.html",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-upload-file-by-drag-and-drop",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-upload-file-by-drag-and-drop"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-alert-not-present",
                "from": [
                    "/katalon-studio/docs/webui-verify-alert-not-present.html",
                    "/display/KD/%5BWebUI%5D+Verify+Alert+Not+Present/",
                    "/display/KD/%5BWebUI%5D%20Verify%20Alert%20Not%20Present/",
                    "/x/iYgY/",
                    "/katalon-studio/docs/webui-verify-alert-not-present/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-alert-not-present",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-alert-not-present"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-alert-present",
                "from": [
                    "/katalon-studio/docs/webui-verify-alert-present.html",
                    "/display/KD/%5BWebUI%5D+Verify+Alert+Present/",
                    "/display/KD/%5BWebUI%5D%20Verify%20Alert%20Present/",
                    "/x/kogY/",
                    "/katalon-studio/docs/webui-verify-alert-present/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-alert-present",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-alert-present"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-all-links-on-current-page-accessible",
                "from": [
                    "/katalon-studio/docs/webui-verify-all-links-on-current-page-accessible.html",
                    "/display/KD/%5BWebUI%5D+Verify+All+Links+On+Current+Page+Accessible/",
                    "/display/KD/%5BWebUI%5D%20Verify%20All%20Links%20On%20Current%20Page%20Accessible/",
                    "/x/ChBO/",
                    "/katalon-studio/docs/webui-verify-all-links-on-current-page-accessible/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-all-links-on-current-page-accessible",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-all-links-on-current-page-accessible"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-element-attribute-value",
                "from": [
                    "/katalon-studio/docs/webui-verify-element-attribute-value.html",
                    "/display/KD/%5BWebUI%5D+Verify+Element+Attribute+Value/",
                    "/display/KD/%5BWebUI%5D%20Verify%20Element%20Attribute%20Value/",
                    "/x/WIkY/",
                    "/katalon-studio/docs/webui-verify-element-attribute-value/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-element-attribute-value",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-element-attribute-value"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-element-checked",
                "from": [
                    "/katalon-studio/docs/webui-verify-element-checked.html",
                    "/display/KD/%5BWebUI%5D+Verify+Element+Checked/",
                    "/display/KD/%5BWebUI%5D%20Verify%20Element%20Checked/",
                    "/x/HYkY/",
                    "/katalon-studio/docs/webui-verify-element-checked/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-element-checked",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-element-checked"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-element-clickable",
                "from": [
                    "/katalon-studio/docs/webui-verify-element-clickable.html",
                    "/display/KD/%5BWebUI%5D+Verify+Element+Clickable/",
                    "/display/KD/%5BWebUI%5D%20Verify%20Element%20Clickable/",
                    "/x/W4kY/",
                    "/katalon-studio/docs/webui-verify-element-clickable/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-element-clickable",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-element-clickable"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-element-has-attribute",
                "from": [
                    "/katalon-studio/docs/webui-verify-element-has-attribute.html",
                    "/display/KD/%5BWebUI%5D+Verify+Element+Has+Attribute/",
                    "/display/KD/%5BWebUI%5D%20Verify%20Element%20Has%20Attribute/",
                    "/x/2okY/",
                    "/katalon-studio/docs/webui-verify-element-has-attribute/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-element-has-attribute",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-element-has-attribute"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/web-ui-verify-element-not-checked",
                "from": [
                    "/katalon-studio/docs/web-ui-verify-element-not-checked.html",
                    "/display/KD/%5BWeb+UI%5D+Verify+Element+Not+Checked/",
                    "/display/KD/%5BWeb%20UI%5D%20Verify%20Element%20Not%20Checked/",
                    "/x/I4kY/",
                    "/katalon-studio/docs/web-ui-verify-element-not-checked/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/web-ui-verify-element-not-checked",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/web-ui-verify-element-not-checked"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-element-not-clickable",
                "from": [
                    "/katalon-studio/docs/webui-verify-element-not-clickable.html",
                    "/display/KD/%5BWebUI%5D+Verify+Element+Not+Clickable/",
                    "/display/KD/%5BWebUI%5D%20Verify%20Element%20Not%20Clickable/",
                    "/x/3okY/",
                    "/katalon-studio/docs/webui-verify-element-not-clickable/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-element-not-clickable",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-element-not-clickable"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-element-not-has-attribute",
                "from": [
                    "/katalon-studio/docs/webui-verify-element-not-has-attribute.html",
                    "/display/KD/%5BWebUI%5D+Verify+Element+Not+Has+Attribute/",
                    "/display/KD/%5BWebUI%5D%20Verify%20Element%20Not%20Has%20Attribute/",
                    "/x/DooY/",
                    "/katalon-studio/docs/webui-verify-element-not-has-attribute/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-element-not-has-attribute",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-element-not-has-attribute"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-element-not-present",
                "from": [
                    "/katalon-studio/docs/webui-verify-element-not-present.html",
                    "/display/KD/%5BWebUI%5D+Verify+Element+Not+Present/",
                    "/display/KD/%5BWebUI%5D%20Verify%20Element%20Not%20Present/",
                    "/x/FYoY/",
                    "/katalon-studio/docs/webui-verify-element-not-present/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-element-not-present",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-element-not-present"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-element-not-in-viewport",
                "from": [
                    "/katalon-studio/docs/webui-verify-element-not-in-viewport.html",
                    "/display/KD/%5BWebUI%5D+Verify+Element+Not+Visible+In+Viewport/",
                    "/display/KD/%5BWebUI%5D%20Verify%20Element%20Not%20Visible%20In%20Viewport/",
                    "/x/HooY/",
                    "/katalon-studio/docs/webui-verify-element-not-visible-in-viewport/",
                    "/katalon-studio/docs/webui-verify-element-not-visible-in-viewport.html",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-element-not-in-viewport",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-element-not-in-viewport"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-element-not-visible",
                "from": [
                    "/katalon-studio/docs/webui-verify-element-not-visible.html",
                    "/display/KD/%5BWebUI%5D+Verify+Element+Not+Visible/",
                    "/display/KD/%5BWebUI%5D%20Verify%20Element%20Not%20Visible/",
                    "/x/GooY/",
                    "/katalon-studio/docs/webui-verify-element-not-visible/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-element-not-visible",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-element-not-visible"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-element-present",
                "from": [
                    "/katalon-studio/docs/webui-verify-element-present.html",
                    "/display/KD/%5BWebUI%5D+Verify+Element+Present/",
                    "/display/KD/%5BWebUI%5D%20Verify%20Element%20Present/",
                    "/x/MYoY/",
                    "/katalon-studio/docs/webui-verify-element-present/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-element-present",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-element-present"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-element-text",
                "from": [
                    "/katalon-studio/docs/webui-verify-element-text.html",
                    "/display/KD/%5BWebUI%5D+Verify+Element+Text/",
                    "/display/KD/%5BWebUI%5D%20Verify%20Element%20Text/",
                    "/x/DA5O/",
                    "/katalon-studio/docs/webui-verify-element-text/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-element-text",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-element-text"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-element-visible",
                "from": [
                    "/katalon-studio/docs/webui-verify-element-visible.html",
                    "/display/KD/%5BWebUI%5D+Verify+Element+Visible/",
                    "/display/KD/%5BWebUI%5D%20Verify%20Element%20Visible/",
                    "/x/XYoY/",
                    "/katalon-studio/docs/webui-verify-element-visible/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-element-visible",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-element-visible"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-element-in-viewport",
                "from": [
                    "/katalon-studio/docs/webui-verify-element-in-viewport.html",
                    "/display/KD/%5BWebUI%5D+Verify+Element+Visible+In+Viewport/",
                    "/display/KD/%5BWebUI%5D%20Verify%20Element%20Visible%20In%20Viewport/",
                    "/x/7ooY/",
                    "/katalon-studio/docs/webui-verify-element-visible-in-viewport/",
                    "/katalon-studio/docs/webui-verify-element-visible-in-viewport.html",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-element-in-viewport",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-element-in-viewport"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-image-present",
                "from": [
                    "/katalon-studio/docs/webui-verify-image-present.html",
                    "/display/KD/%5BWebUI%5D+Verify+Image+Present/",
                    "/display/KD/%5BWebUI%5D%20Verify%20Image%20Present/",
                    "/x/WIgY/",
                    "/katalon-studio/docs/webui-verify-image-present/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-image-present",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-image-present"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-links-accessible",
                "from": [
                    "/katalon-studio/docs/webui-verify-links-accessible.html",
                    "/display/KD/%5BWebUI%5D+Verify+Links+Accessible/",
                    "/display/KD/%5BWebUI%5D%20Verify%20Links%20Accessible/",
                    "/x/DBBO/",
                    "/katalon-studio/docs/webui-verify-links-accessible/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-links-accessible",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-links-accessible"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-option-not-present-by-label",
                "from": [
                    "/katalon-studio/docs/webui-verify-option-not-present-by-label.html",
                    "/display/KD/%5BWebUI%5D+Verify+Option+Not+Present+By+Label/",
                    "/display/KD/%5BWebUI%5D%20Verify%20Option%20Not%20Present%20By%20Label/",
                    "/x/PpIY/",
                    "/katalon-studio/docs/webui-verify-option-not-present-by-label/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-option-not-present-by-label",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-option-not-present-by-label"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-option-not-present-by-value",
                "from": [
                    "/katalon-studio/docs/webui-verify-option-not-present-by-value.html",
                    "/display/KD/%5BWebUI%5D+Verify+Option+Not+Present+By+Value/",
                    "/display/KD/%5BWebUI%5D%20Verify%20Option%20Not%20Present%20By%20Value/",
                    "/x/uQdO/",
                    "/katalon-studio/docs/webui-verify-option-not-present-by-value/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-option-not-present-by-value",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-option-not-present-by-value"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-option-not-selected-by-index",
                "from": [
                    "/katalon-studio/docs/webui-verify-option-not-selected-by-index.html",
                    "/display/KD/%5BWebUI%5D+Verify+Option+Not+Selected+By+Index/",
                    "/display/KD/%5BWebUI%5D%20Verify%20Option%20Not%20Selected%20By%20Index/",
                    "/x/XJIY/",
                    "/katalon-studio/docs/webui-verify-option-not-selected-by-index/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-option-not-selected-by-index",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-option-not-selected-by-index"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-option-not-selected-by-label",
                "from": [
                    "/katalon-studio/docs/webui-verify-option-not-selected-by-label.html",
                    "/display/KD/%5BWebUI%5D+Verify+Option+Not+Selected+By+Label/",
                    "/display/KD/%5BWebUI%5D%20Verify%20Option%20Not%20Selected%20By%20Label/",
                    "/x/YJIY/",
                    "/katalon-studio/docs/webui-verify-option-not-selected-by-label/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-option-not-selected-by-label",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-option-not-selected-by-label"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-option-not-selected-by-value",
                "from": [
                    "/katalon-studio/docs/webui-verify-option-not-selected-by-value.html",
                    "/display/KD/%5BWebUI%5D+Verify+Option+Not+Selected+By+Value/",
                    "/display/KD/%5BWebUI%5D%20Verify%20Option%20Not%20Selected%20By%20Value/",
                    "/katalon-studio/docs/webui-verify-option-not-selected-by-value/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-option-not-selected-by-value",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-option-not-selected-by-value"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-option-present-by-label",
                "from": [
                    "/katalon-studio/docs/webui-verify-option-present-by-label.html",
                    "/display/KD/%5BWebUI%5D+Verify+Option+Present+By+Label/",
                    "/display/KD/%5BWebUI%5D%20Verify%20Option%20Present%20By%20Label/",
                    "/x/kJIY/",
                    "/katalon-studio/docs/webui-verify-option-present-by-label/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-option-present-by-label",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-option-present-by-label"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-option-present-by-value",
                "from": [
                    "/katalon-studio/docs/webui-verify-option-present-by-value.html",
                    "/display/KD/%5BWebUI%5D+Verify+Option+Present+By+Value/",
                    "/display/KD/%5BWebUI%5D%20Verify%20Option%20Present%20By%20Value/",
                    "/x/lJIY/",
                    "/katalon-studio/docs/webui-verify-option-present-by-value/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-option-present-by-value",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-option-present-by-value"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-option-selected-by-index",
                "from": [
                    "/katalon-studio/docs/webui-verify-option-selected-by-index.html",
                    "/display/KD/%5BWebUI%5D+Verify+Option+Selected+By+Index/",
                    "/display/KD/%5BWebUI%5D%20Verify%20Option%20Selected%20By%20Index/",
                    "/x/mpIY/",
                    "/katalon-studio/docs/webui-verify-option-selected-by-index/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-option-selected-by-index",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-option-selected-by-index"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-option-selected-by-label",
                "from": [
                    "/katalon-studio/docs/webui-verify-option-selected-by-label.html",
                    "/display/KD/%5BWebUI%5D+Verify+Option+Selected+By+Label/",
                    "/display/KD/%5BWebUI%5D%20Verify%20Option%20Selected%20By%20Label/",
                    "/x/n5IY/",
                    "/katalon-studio/docs/webui-verify-option-selected-by-label/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-option-selected-by-label",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-option-selected-by-label"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-option-selected-by-value",
                "from": [
                    "/katalon-studio/docs/webui-verify-option-selected-by-value.html",
                    "/display/KD/%5BWebUI%5D+Verify+Option+Selected+By+Value/",
                    "/display/KD/%5BWebUI%5D%20Verify%20Option%20Selected%20By%20Value/",
                    "/x/o5IY/",
                    "/katalon-studio/docs/webui-verify-option-selected-by-value/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-option-selected-by-value",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-option-selected-by-value"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-options-present",
                "from": [
                    "/katalon-studio/docs/webui-verify-options-present.html",
                    "/display/KD/%5BWebUI%5D+Verify+Options+Present/",
                    "/display/KD/%5BWebUI%5D%20Verify%20Options%20Present/",
                    "/x/xw1O/",
                    "/katalon-studio/docs/webui-verify-options-present/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-options-present",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-options-present"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-text-not-present",
                "from": [
                    "/katalon-studio/docs/webui-verify-text-not-present.html",
                    "/display/KD/%5BWebUI%5D+Verify+Text+Not+Present/",
                    "/display/KD/%5BWebUI%5D%20Verify%20Text%20Not%20Present/",
                    "/x/SooY/",
                    "/katalon-studio/docs/webui-verify-text-not-present/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-text-not-present",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-text-not-present"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-verify-text-present",
                "from": [
                    "/katalon-studio/docs/webui-verify-text-present.html",
                    "/display/KD/%5BWebUI%5D+Verify+Text+Present/",
                    "/display/KD/%5BWebUI%5D%20Verify%20Text%20Present/",
                    "/x/YIoY/",
                    "/katalon-studio/docs/webui-verify-text-present/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-text-present",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-verify-text-present"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-wait-for-alert",
                "from": [
                    "/katalon-studio/docs/webui-wait-for-alert.html",
                    "/display/KD/%5BWebUI%5D+Wait+For+Alert/",
                    "/display/KD/%5BWebUI%5D%20Wait%20For%20Alert/",
                    "/x/mYgY/",
                    "/katalon-studio/docs/webui-wait-for-alert/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-wait-for-alert",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-wait-for-alert"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-wait-for-angular-load",
                "from": [
                    "/katalon-studio/docs/webui-wait-for-angular-load.html",
                    "/display/KD/%5BWebUI%5D+Wait+For+Angular+Load/",
                    "/display/KD/%5BWebUI%5D%20Wait%20For%20Angular%20Load/",
                    "/x/9wxO/",
                    "/katalon-studio/docs/webui-wait-for-angular-load/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-wait-for-angular-load",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-wait-for-angular-load"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-wait-for-element-attribute-value",
                "from": [
                    "/katalon-studio/docs/webui-wait-for-element-attribute-value.html",
                    "/display/KD/%5BWebUI%5D+Wait+For+Element+Attribute+Value/",
                    "/display/KD/%5BWebUI%5D%20Wait%20For%20Element%20Attribute%20Value/",
                    "/x/C4sY/",
                    "/katalon-studio/docs/webui-wait-for-element-attribute-value/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-wait-for-element-attribute-value",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-wait-for-element-attribute-value"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-wait-for-element-clickable",
                "from": [
                    "/katalon-studio/docs/webui-wait-for-element-clickable.html",
                    "/display/KD/%5BWebUI%5D+Wait+For+Element+Clickable/",
                    "/display/KD/%5BWebUI%5D%20Wait%20For%20Element%20Clickable/",
                    "/x/b4sY/",
                    "/katalon-studio/docs/webui-wait-for-element-clickable/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-wait-for-element-clickable",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-wait-for-element-clickable"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-wait-for-element-has-attribute",
                "from": [
                    "/katalon-studio/docs/webui-wait-for-element-has-attribute.html",
                    "/display/KD/%5BWebUI%5D+Wait+For+Element+Has+Attribute/",
                    "/display/KD/%5BWebUI%5D%20Wait%20For%20Element%20Has%20Attribute/",
                    "/x/rYsY/",
                    "/katalon-studio/docs/webui-wait-for-element-has-attribute/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-wait-for-element-has-attribute",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-wait-for-element-has-attribute"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-wait-for-element-not-clickable",
                "from": [
                    "/katalon-studio/docs/webui-wait-for-element-not-clickable.html",
                    "/display/KD/%5BWebUI%5D+Wait+For+Element+Not+Clickable/",
                    "/display/KD/%5BWebUI%5D%20Wait%20For%20Element%20Not%20Clickable/",
                    "/x/SYwY/",
                    "/katalon-studio/docs/webui-wait-for-element-not-clickable/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-wait-for-element-not-clickable",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-wait-for-element-not-clickable"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-wait-for-element-not-has-attribute",
                "from": [
                    "/katalon-studio/docs/webui-wait-for-element-not-has-attribute.html",
                    "/display/KD/%5BWebUI%5D+Wait+For+Element+Not+Has+Attribute/",
                    "/display/KD/%5BWebUI%5D%20Wait%20For%20Element%20Not%20Has%20Attribute/",
                    "/x/TYwY/",
                    "/katalon-studio/docs/webui-wait-for-element-not-has-attribute/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-wait-for-element-not-has-attribute",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-wait-for-element-not-has-attribute"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-wait-for-element-not-present",
                "from": [
                    "/katalon-studio/docs/webui-wait-for-element-not-present.html",
                    "/display/KD/%5BWebUI%5D+Wait+For+Element+Not+Present/",
                    "/display/KD/%5BWebUI%5D%20Wait%20For%20Element%20Not%20Present/",
                    "/x/cowY/",
                    "/katalon-studio/docs/webui-wait-for-element-not-present/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-wait-for-element-not-present",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-wait-for-element-not-present"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-wait-for-element-not-visible",
                "from": [
                    "/katalon-studio/docs/webui-wait-for-element-not-visible.html",
                    "/display/KD/%5BWebUI%5D+Wait+For+Element+Not+Visible/",
                    "/display/KD/%5BWebUI%5D%20Wait%20For%20Element%20Not%20Visible/",
                    "/x/mIwY/",
                    "/katalon-studio/docs/webui-wait-for-element-not-visible/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-wait-for-element-not-visible",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-wait-for-element-not-visible"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-wait-for-element-present",
                "from": [
                    "/katalon-studio/docs/webui-wait-for-element-present.html",
                    "/display/KD/%5BWebUI%5D+Wait+For+Element+Present/",
                    "/display/KD/%5BWebUI%5D%20Wait%20For%20Element%20Present/",
                    "/x/tYcY/",
                    "/katalon-studio/docs/webui-wait-for-element-present/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-wait-for-element-present",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-wait-for-element-present"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-wait-for-element-visible",
                "from": [
                    "/katalon-studio/docs/webui-wait-for-element-visible.html",
                    "/display/KD/%5BWebUI%5D+Wait+For+Element+Visible/",
                    "/display/KD/%5BWebUI%5D%20Wait%20For%20Element%20Visible/",
                    "/x/vocY/",
                    "/katalon-studio/docs/webui-wait-for-element-visible/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-wait-for-element-visible",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-wait-for-element-visible"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-wait-for-image-present",
                "from": [
                    "/katalon-studio/docs/webui-wait-for-image-present.html",
                    "/display/KD/%5BWebUI%5D+Wait+For+Image+Present/",
                    "/display/KD/%5BWebUI%5D%20Wait%20For%20Image%20Present/",
                    "/x/sIgY/",
                    "/katalon-studio/docs/webui-wait-for-image-present/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-wait-for-image-present",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-wait-for-image-present"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-wait-for-jquery-load",
                "from": [
                    "/katalon-studio/docs/webui-wait-for-jquery-load.html",
                    "/display/KD/%5BWebUI%5D+Wait+for+jQuery+Load/",
                    "/display/KD/%5BWebUI%5D%20Wait%20for%20jQuery%20Load/",
                    "/x/_QxO/",
                    "/katalon-studio/docs/webui-wait-for-jquery-load/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-wait-for-jquery-load",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-wait-for-jquery-load"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-ui-keywords/webui-wait-for-page-load",
                "from": [
                    "/katalon-studio/docs/webui-wait-for-page-load.html",
                    "/display/KD/%5BWebUI%5D+Wait+For+Page+Load/",
                    "/display/KD/%5BWebUI%5D%20Wait%20For%20Page%20Load/",
                    "/x/DYkY/",
                    "/katalon-studio/docs/webui-wait-for-page-load/",
                    "/docs/katalon-studio-enterprise/keywords/web-ui-keywords/webui-wait-for-page-load",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-ui-keywords/webui-wait-for-page-load"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/visual-based-web-testing-keywords/webui-take-area-screenshot-as-checkpoint",
                "from": [
                    "/katalon-studio/docs/webui-take-area-screenshot-as-checkpoint.html",
                    "/docs/katalon-studio-enterprise/keywords/visual-based-web-testing-keywords/webui-take-area-screenshot-as-checkpoint",
                    "/docs/legacy/katalon-studio-enterprise/keywords/visual-based-web-testing-keywords/webui-take-area-screenshot-as-checkpoint"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/visual-based-web-testing-keywords/webui-take-element-screenshot-as-checkpoint",
                "from": [
                    "/katalon-studio/docs/webui-take-element-screenshot-as-checkpoint.html",
                    "/docs/katalon-studio-enterprise/keywords/visual-based-web-testing-keywords/webui-take-element-screenshot-as-checkpoint",
                    "/docs/legacy/katalon-studio-enterprise/keywords/visual-based-web-testing-keywords/webui-take-element-screenshot-as-checkpoint"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/visual-based-web-testing-keywords/webui-take-full-page-screenshot-as-checkpoint",
                "from": [
                    "/katalon-studio/docs/webui-take-fullpage-screenshot-as-checkpoint.html",
                    "/docs/katalon-studio-enterprise/keywords/visual-based-web-testing-keywords/webui-take-full-page-screenshot-as-checkpoint",
                    "/docs/legacy/katalon-studio-enterprise/keywords/visual-based-web-testing-keywords/webui-take-full-page-screenshot-as-checkpoint"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/visual-based-web-testing-keywords/webui-take-screenshot-as-checkpoint",
                "from": [
                    "/katalon-studio/docs/webui-take-screenshot-as-checkpoint.html",
                    "/docs/katalon-studio-enterprise/keywords/visual-based-web-testing-keywords/webui-take-screenshot-as-checkpoint",
                    "/docs/legacy/katalon-studio-enterprise/keywords/visual-based-web-testing-keywords/webui-take-screenshot-as-checkpoint"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-close-application",
                "from": [
                    "/katalon-studio/docs/mobile-close-application.html",
                    "/display/KD/%5BMobile%5D+Close+Application/",
                    "/display/KD/%5BMobile%5D%20Close%20Application/",
                    "/x/e40Y/",
                    "/katalon-studio/docs/mobile-close-application/",
                    "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-close-application",
                    "/docs/legacy/katalon-studio-enterprise/keywords/mobile-keywords/mobile-close-application"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-clear-text",
                "from": [
                    "/katalon-studio/docs/mobile-clear-text.html",
                    "/display/KD/%5BMobile%5D+Clear+Text/",
                    "/display/KD/%5BMobile%5D%20Clear%20Text/",
                    "/x/TZMY/",
                    "/katalon-studio/docs/mobile-clear-text/",
                    "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-clear-text",
                    "/docs/legacy/katalon-studio-enterprise/keywords/mobile-keywords/mobile-clear-text"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-close-notifications",
                "from": [
                    "/katalon-studio/docs/mobile-close-notifications.html",
                    "/display/KD/%5BMobile%5D+Close+Notifications/",
                    "/display/KD/%5BMobile%5D%20Close%20Notifications/",
                    "/katalon-studio/docs/mobile-close-notifications/",
                    "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-close-notifications",
                    "/docs/legacy/katalon-studio-enterprise/keywords/mobile-keywords/mobile-close-notifications"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-check-element",
                "from": [
                    "/katalon-studio/docs/mobile-check-element.html",
                    "/display/KD/%5BMobile%5D+Check+Element/",
                    "/display/KD/%5BMobile%5D%20Check%20Element/",
                    "/x/2ocY/",
                    "/katalon-studio/docs/mobile-check-element/",
                    "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-check-element",
                    "/docs/legacy/katalon-studio-enterprise/keywords/mobile-keywords/mobile-check-element"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-drag-and-drop",
                "from": [
                    "/katalon-studio/docs/mobile-drag-and-drop.html",
                    "/display/KD/%5BMobile%5D+Drag+And+Drop/",
                    "/display/KD/%5BMobile%5D%20Drag%20And%20Drop/",
                    "/x/L4gY/",
                    "/katalon-studio/docs/mobile-drag-and-drop/",
                    "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-drag-and-drop",
                    "/docs/legacy/katalon-studio-enterprise/keywords/mobile-keywords/mobile-drag-and-drop"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-double-tap",
                "from": [
                    "/katalon-studio/docs/mobile-double-tap.html",
                    "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-double-tap",
                    "/docs/legacy/katalon-studio-enterprise/keywords/mobile-keywords/mobile-double-tap"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-execute-mobile-command",
                "from": [
                    "/katalon-studio/docs/mobile-execute-command.html",
                    "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-execute-mobile-command",
                    "/docs/legacy/katalon-studio-enterprise/keywords/mobile-keywords/mobile-execute-mobile-command"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-find-image-element",
                "from": [
                    "/katalon-studio/docs/mobile-find-image-element.html",
                    "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-find-image-element",
                    "/docs/legacy/katalon-studio-enterprise/keywords/mobile-keywords/mobile-find-image-element"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-find-image-elements",
                "from": [
                    "/katalon-studio/docs/mobile-find-image-elements.html",
                    "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-find-image-elements",
                    "/docs/legacy/katalon-studio-enterprise/keywords/mobile-keywords/mobile-find-image-elements"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-get-attribute",
                "from": [
                    "/katalon-studio/docs/mobile-get-attribute.html",
                    "/display/KD/%5BMobile%5D+Get+Attribute/",
                    "/display/KD/%5BMobile%5D%20Get%20Attribute/",
                    "/x/_o0Y/",
                    "/katalon-studio/docs/mobile-get-attribute/",
                    "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-get-attribute",
                    "/docs/legacy/katalon-studio-enterprise/keywords/mobile-keywords/mobile-get-attribute"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-get-element-height",
                "from": [
                    "/katalon-studio/docs/mobile-get-element-height.html",
                    "/display/KD/%5BMobile%5D+Get+Element+Height/",
                    "/display/KD/%5BMobile%5D%20Get%20Element%20Height/",
                    "/x/VogY/",
                    "/katalon-studio/docs/mobile-get-element-height/",
                    "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-get-element-height",
                    "/docs/legacy/katalon-studio-enterprise/keywords/mobile-keywords/mobile-get-element-height"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-get-element-left-position",
                "from": [
                    "/katalon-studio/docs/mobile-get-element-left-position.html",
                    "/display/KD/%5BMobile%5D+Get+Element+Left+Position/",
                    "/display/KD/%5BMobile%5D%20Get%20Element%20Left%20Position/",
                    "/x/eY8Y/",
                    "/katalon-studio/docs/mobile-get-element-left-position/",
                    "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-get-element-left-position",
                    "/docs/legacy/katalon-studio-enterprise/keywords/mobile-keywords/mobile-get-element-left-position"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-get-element-top-position",
                "from": [
                    "/katalon-studio/docs/mobile-get-element-top-position.html",
                    "/display/KD/%5BMobile%5D+Get+Element+Top+Position/",
                    "/display/KD/%5BMobile%5D%20Get%20Element%20Top%20Position/",
                    "/x/rY8Y/",
                    "/katalon-studio/docs/mobile-get-element-top-position/",
                    "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-get-element-top-position",
                    "/docs/legacy/katalon-studio-enterprise/keywords/mobile-keywords/mobile-get-element-top-position"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-get-element-width",
                "from": [
                    "/katalon-studio/docs/mobile-get-element-width.html",
                    "/display/KD/%5BMobile%5D+Get+Element+Width/",
                    "/display/KD/%5BMobile%5D%20Get%20Element%20Width/",
                    "/x/e4gY/",
                    "/katalon-studio/docs/mobile-get-element-width/",
                    "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-get-element-width",
                    "/docs/legacy/katalon-studio-enterprise/keywords/mobile-keywords/mobile-get-element-width"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-get-current-orientation",
                "from": [
                    "/katalon-studio/docs/mobile-get-current-orientation.html",
                    "/display/KD/%5BMobile%5D+Get+Current+Orientation/",
                    "/display/KD/%5BMobile%5D%20Get%20Current%20Orientation/",
                    "/x/KI4Y/",
                    "/katalon-studio/docs/mobile-get-current-orientation/",
                    "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-get-current-orientation",
                    "/docs/legacy/katalon-studio-enterprise/keywords/mobile-keywords/mobile-get-current-orientation"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-get-device-height",
                "from": [
                    "/katalon-studio/docs/mobile-get-device-height.html",
                    "/display/KD/%5BMobile%5D+Get+Device+Height/",
                    "/display/KD/%5BMobile%5D%20Get%20Device%20Height/",
                    "/x/Vo4Y/",
                    "/katalon-studio/docs/mobile-get-device-height/",
                    "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-get-device-height",
                    "/docs/legacy/katalon-studio-enterprise/keywords/mobile-keywords/mobile-get-device-height"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-get-device-manufacturer",
                "from": [
                    "/katalon-studio/docs/mobile-get-device-manufacturer.html",
                    "/display/KD/%5BMobile%5D+Get+Device+Manufacturer/",
                    "/display/KD/%5BMobile%5D%20Get%20Device%20Manufacturer/",
                    "/x/hI4Y/",
                    "/katalon-studio/docs/mobile-get-device-manufacturer/",
                    "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-get-device-manufacturer",
                    "/docs/legacy/katalon-studio-enterprise/keywords/mobile-keywords/mobile-get-device-manufacturer"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-get-device-os",
                "from": [
                    "/katalon-studio/docs/mobile-get-device-os.html",
                    "/display/KD/%5BMobile%5D+Get+Device+OS/",
                    "/display/KD/%5BMobile%5D%20Get%20Device%20OS/",
                    "/x/444Y/",
                    "/katalon-studio/docs/mobile-get-device-os/",
                    "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-get-device-os",
                    "/docs/legacy/katalon-studio-enterprise/keywords/mobile-keywords/mobile-get-device-os"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-get-device-os-version",
                "from": [
                    "/katalon-studio/docs/mobile-get-device-os-version.html",
                    "/display/KD/%5BMobile%5D+Get+Device+OS+Version/",
                    "/display/KD/%5BMobile%5D%20Get%20Device%20OS%20Version/",
                    "/x/FI8Y/",
                    "/katalon-studio/docs/mobile-get-device-os-version/",
                    "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-get-device-os-version",
                    "/docs/legacy/katalon-studio-enterprise/keywords/mobile-keywords/mobile-get-device-os-version"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-get-device-width",
                "from": [
                    "/katalon-studio/docs/mobile-get-device-width.html",
                    "/display/KD/%5BMobile%5D+Get+Device+Width/",
                    "/display/KD/%5BMobile%5D%20Get%20Device%20Width/",
                    "/x/Ro8Y/",
                    "/katalon-studio/docs/mobile-get-device-width/",
                    "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-get-device-width",
                    "/docs/legacy/katalon-studio-enterprise/keywords/mobile-keywords/mobile-get-device-width"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-get-text",
                "from": [
                    "/katalon-studio/docs/mobile-get-text.html",
                    "/display/KD/%5BMobile%5D+Get+Text/",
                    "/display/KD/%5BMobile%5D%20Get%20Text/",
                    "/x/epMY/",
                    "/katalon-studio/docs/mobile-get-text/",
                    "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-get-text",
                    "/docs/legacy/katalon-studio-enterprise/keywords/mobile-keywords/mobile-get-text"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-hide-keyboard",
                "from": [
                    "/katalon-studio/docs/mobile-hide-keyboard.html",
                    "/display/KD/%5BMobile%5D+Hide+Keyboard/",
                    "/display/KD/%5BMobile%5D%20Hide%20Keyboard/",
                    "/x/4o8Y/",
                    "/katalon-studio/docs/mobile-hide-keyboard/",
                    "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-hide-keyboard",
                    "/docs/legacy/katalon-studio-enterprise/keywords/mobile-keywords/mobile-hide-keyboard"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-long-press",
                "from": [
                    "/katalon-studio/docs/mobile-long-press.html",
                    "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-long-press",
                    "/docs/legacy/katalon-studio-enterprise/keywords/mobile-keywords/mobile-long-press"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-open-notifications",
                "from": [
                    "/katalon-studio/docs/mobile-open-notifications.html",
                    "/display/KD/%5BMobile%5D+Open+Notifications/",
                    "/display/KD/%5BMobile%5D%20Open%20Notifications/",
                    "/x/m5IY/",
                    "/katalon-studio/docs/mobile-open-notifications/",
                    "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-open-notifications",
                    "/docs/legacy/katalon-studio-enterprise/keywords/mobile-keywords/mobile-open-notifications"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-perform-touch-id",
                "from": [
                    "/katalon-studio/docs/mobile-perform-touchID.html",
                    "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-perform-touch-id",
                    "/docs/legacy/katalon-studio-enterprise/keywords/mobile-keywords/mobile-perform-touch-id"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-press-back",
                "from": [
                    "/katalon-studio/docs/mobile-press-back.html",
                    "/display/KD/%5BMobile%5D+Press+Back/",
                    "/display/KD/%5BMobile%5D%20Press%20Back/",
                    "/x/JJQY/",
                    "/katalon-studio/docs/mobile-press-back/",
                    "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-press-back",
                    "/docs/legacy/katalon-studio-enterprise/keywords/mobile-keywords/mobile-press-back"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-press-home",
                "from": [
                    "/katalon-studio/docs/mobile-press-home.html",
                    "/display/KD/%5BMobile%5D+Press+Home/",
                    "/display/KD/%5BMobile%5D%20Press%20Home/",
                    "/x/NJQY/",
                    "/katalon-studio/docs/mobile-press-home/",
                    "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-press-home",
                    "/docs/legacy/katalon-studio-enterprise/keywords/mobile-keywords/mobile-press-home"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-pinch-to-zoom-in-at-position",
                "from": [
                    "/katalon-studio/docs/mobile-pinch-to-zoom-in-at-position.html",
                    "/display/KD/%5BMobile%5D+Pinch+To+Zoom+In+At+Position/",
                    "/display/KD/%5BMobile%5D%20Pinch%20To%20Zoom%20In%20At%20Position/",
                    "/x/75IY/",
                    "/katalon-studio/docs/mobile-pinch-to-zoom-in-at-position/",
                    "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-pinch-to-zoom-in-at-position",
                    "/docs/legacy/katalon-studio-enterprise/keywords/mobile-keywords/mobile-pinch-to-zoom-in-at-position"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-pinch-to-zoom-out-at-position",
                "from": [
                    "/katalon-studio/docs/mobile-pinch-to-zoom-out-at-position.html",
                    "/display/KD/%5BMobile%5D+Pinch+To+Zoom+Out+At+Position/",
                    "/display/KD/%5BMobile%5D%20Pinch%20To%20Zoom%20Out%20At%20Position/",
                    "/x/95IY/",
                    "/katalon-studio/docs/mobile-pinch-to-zoom-out-at-position/",
                    "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-pinch-to-zoom-out-at-position",
                    "/docs/legacy/katalon-studio-enterprise/keywords/mobile-keywords/mobile-pinch-to-zoom-out-at-position"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-run-the-ios-app-in-the-background-and-wait",
                "from": [
                    "/katalon-studio/docs/mobile-run-ios-app-in-background-and-wait.html",
                    "/display/KD/%5BMobile%5D+Run+iOS+App+in+Background+and+Wait/",
                    "/display/KD/%5BMobile%5D%20Run%20iOS%20App%20in%20Background%20and%20Wait/",
                    "/x/pI0Y/",
                    "/katalon-studio/docs/mobile-run-ios-app-in-background-and-wait/",
                    "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-run-the-ios-app-in-the-background-and-wait",
                    "/docs/legacy/katalon-studio-enterprise/keywords/mobile-keywords/mobile-run-the-ios-app-in-the-background-and-wait"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-scroll-to-text",
                "from": [
                    "/katalon-studio/docs/mobile-scroll-to-text.html",
                    "/display/KD/%5BMobile%5D+Scroll+To+Text/",
                    "/display/KD/%5BMobile%5D%20Scroll%20To%20Text/",
                    "/x/h5MY/",
                    "/katalon-studio/docs/mobile-scroll-to-text/",
                    "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-scroll-to-text",
                    "/docs/legacy/katalon-studio-enterprise/keywords/mobile-keywords/mobile-scroll-to-text"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-send-keys",
                "from": [
                    "/katalon-studio/docs/mobile-send-keys.html",
                    "/display/KD/%5BMobile%5D+Send+Keys/",
                    "/display/KD/%5BMobile%5D%20Send%20Keys/",
                    "/x/kg9O/",
                    "/katalon-studio/docs/mobile-send-keys/",
                    "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-send-keys",
                    "/docs/legacy/katalon-studio-enterprise/keywords/mobile-keywords/mobile-send-keys"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-select-list-item-by-index",
                "from": [
                    "/katalon-studio/docs/mobile-select-list-item-by-index.html",
                    "/display/KD/%5BMobile%5D+Select+List+Item+By+Index/",
                    "/display/KD/%5BMobile%5D%20Select%20List%20Item%20By%20Index/",
                    "/x/hogY/",
                    "/katalon-studio/docs/mobile-select-list-item-by-index/",
                    "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-select-list-item-by-index",
                    "/docs/legacy/katalon-studio-enterprise/keywords/mobile-keywords/mobile-select-list-item-by-index"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-select-list-item-by-label",
                "from": [
                    "/katalon-studio/docs/mobile-select-list-item-by-label.html",
                    "/display/KD/%5BMobile%5D+Select+List+Item+By+Label/",
                    "/display/KD/%5BMobile%5D%20Select%20List%20Item%20By%20Label/",
                    "/x/pIgY/",
                    "/katalon-studio/docs/mobile-select-list-item-by-label/",
                    "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-select-list-item-by-label",
                    "/docs/legacy/katalon-studio-enterprise/keywords/mobile-keywords/mobile-select-list-item-by-label"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-set-encrypted-text",
                "from": [
                    "/katalon-studio/docs/mobile-set-encrypted-text.html",
                    "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-set-encrypted-text",
                    "/docs/legacy/katalon-studio-enterprise/keywords/mobile-keywords/mobile-set-encrypted-text"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-set-slider-value",
                "from": [
                    "/katalon-studio/docs/mobile-set-slider-value.html",
                    "/display/KD/%5BMobile%5D+Set+Slider+Value/",
                    "/display/KD/%5BMobile%5D%20Set%20Slider%20Value/",
                    "/x/6IgY/",
                    "/katalon-studio/docs/mobile-set-slider-value/",
                    "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-set-slider-value",
                    "/docs/legacy/katalon-studio-enterprise/keywords/mobile-keywords/mobile-set-slider-value"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-set-text",
                "from": [
                    "/katalon-studio/docs/mobile-set-text.html",
                    "/display/KD/%5BMobile%5D+Set+Text/",
                    "/display/KD/%5BMobile%5D%20Set%20Text/",
                    "/x/lZMY/",
                    "/katalon-studio/docs/mobile-set-text/",
                    "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-set-text",
                    "/docs/legacy/katalon-studio-enterprise/keywords/mobile-keywords/mobile-set-text"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-switch-to-landscape",
                "from": [
                    "/katalon-studio/docs/mobile-switch-to-landscape.html",
                    "/display/KD/%5BMobile%5D+Switch+To+Landscape/",
                    "/display/KD/%5BMobile%5D%20Switch%20To%20Landscape/",
                    "/x/GJAY/",
                    "/katalon-studio/docs/mobile-switch-to-landscape/",
                    "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-switch-to-landscape",
                    "/docs/legacy/katalon-studio-enterprise/keywords/mobile-keywords/mobile-switch-to-landscape"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-switch-to-native",
                "from": [
                    "/katalon-studio/docs/mobile-switch-to-native.html",
                    "/display/KD/%5BMobile%5D+Switch+To+Native/",
                    "/display/KD/%5BMobile%5D%20Switch%20To%20Native/",
                    "/x/T5AY/",
                    "/katalon-studio/docs/mobile-switch-to-native/",
                    "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-switch-to-native",
                    "/docs/legacy/katalon-studio-enterprise/keywords/mobile-keywords/mobile-switch-to-native"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-switch-to-portrait",
                "from": [
                    "/katalon-studio/docs/mobile-switch-to-portrait.html",
                    "/display/KD/%5BMobile%5D+Switch+To+Portrait/",
                    "/display/KD/%5BMobile%5D%20Switch%20To%20Portrait/",
                    "/x/h5AY/",
                    "/katalon-studio/docs/mobile-switch-to-portrait/",
                    "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-switch-to-portrait",
                    "/docs/legacy/katalon-studio-enterprise/keywords/mobile-keywords/mobile-switch-to-portrait"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-switch-to-web-view",
                "from": [
                    "/katalon-studio/docs/mobile-switch-to-web-view.html",
                    "/display/KD/%5BMobile%5D+Switch+To+Web+View/",
                    "/display/KD/%5BMobile%5D%20Switch%20To%20Web%20View/",
                    "/x/wJAY/",
                    "/katalon-studio/docs/mobile-switch-to-web-view/",
                    "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-switch-to-web-view",
                    "/docs/legacy/katalon-studio-enterprise/keywords/mobile-keywords/mobile-switch-to-web-view"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-start-application",
                "from": [
                    "/katalon-studio/docs/mobile-start-application.html",
                    "/display/KD/%5BMobile%5D+Start+Application/",
                    "/display/KD/%5BMobile%5D%20Start%20Application/",
                    "/x/zo0Y/",
                    "/katalon-studio/docs/mobile-start-application/",
                    "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-start-application",
                    "/docs/legacy/katalon-studio-enterprise/keywords/mobile-keywords/mobile-start-application"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-start-existing-application",
                "from": [
                    "/katalon-studio/docs/mobile-keyword-start-existing-apps.html",
                    "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-start-existing-application",
                    "/docs/legacy/katalon-studio-enterprise/keywords/mobile-keywords/mobile-start-existing-application"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-swipe",
                "from": [
                    "/katalon-studio/docs/mobile-swipe.html",
                    "/display/KD/%5BMobile%5D+Swipe/",
                    "/display/KD/%5BMobile%5D%20Swipe/",
                    "/x/-pIY/",
                    "/katalon-studio/docs/mobile-swipe/",
                    "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-swipe",
                    "/docs/legacy/katalon-studio-enterprise/keywords/mobile-keywords/mobile-swipe"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-take-screenshot",
                "from": [
                    "/katalon-studio/docs/mobile-take-screenshot.html",
                    "/display/KD/%5BMobile%5D+Take+Screenshot/",
                    "/display/KD/%5BMobile%5D%20Take%20Screenshot/",
                    "/x/WpQY/",
                    "/katalon-studio/docs/mobile-take-screenshot/",
                    "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-take-screenshot",
                    "/docs/legacy/katalon-studio-enterprise/keywords/mobile-keywords/mobile-take-screenshot"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-take-area-screenshot",
                "from": [
                    "/katalon-studio/docs/mobile-take-area-screenshot.html",
                    "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-take-area-screenshot",
                    "/docs/legacy/katalon-studio-enterprise/keywords/mobile-keywords/mobile-take-area-screenshot"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-take-element-screenshot",
                "from": [
                    "/katalon-studio/docs/mobile-take-element-screenshot.html",
                    "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-take-element-screenshot",
                    "/docs/legacy/katalon-studio-enterprise/keywords/mobile-keywords/mobile-take-element-screenshot"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-tap",
                "from": [
                    "/katalon-studio/docs/mobile-tap.html",
                    "/display/KD/%5BMobile%5D+Tap/",
                    "/display/KD/%5BMobile%5D%20Tap/",
                    "/x/LpMY/",
                    "/katalon-studio/docs/mobile-tap/",
                    "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-tap",
                    "/docs/legacy/katalon-studio-enterprise/keywords/mobile-keywords/mobile-tap"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-tap-at-position",
                "from": [
                    "/katalon-studio/docs/mobile-tap-at-position.html",
                    "/display/KD/%5BMobile%5D+Tap+At+Position/",
                    "/display/KD/%5BMobile%5D%20Tap%20At%20Position/",
                    "/x/QJMY/",
                    "/katalon-studio/docs/mobile-tap-at-position/",
                    "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-tap-at-position",
                    "/docs/legacy/katalon-studio-enterprise/keywords/mobile-keywords/mobile-tap-at-position"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-tap-and-hold",
                "from": [
                    "/katalon-studio/docs/mobile-tap-and-hold.html",
                    "/display/KD/%5BMobile%5D+Tap+And+Hold/",
                    "/display/KD/%5BMobile%5D%20Tap%20And%20Hold/",
                    "/x/9IgY/",
                    "/katalon-studio/docs/mobile-tap-and-hold/",
                    "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-tap-and-hold",
                    "/docs/legacy/katalon-studio-enterprise/keywords/mobile-keywords/mobile-tap-and-hold"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-tap-and-hold-at-position",
                "from": [
                    "/katalon-studio/docs/mobile-tap-and-hold-at-position.html",
                    "/display/KD/%5BMobile%5D+Tap+And+Hold+At+Position/",
                    "/display/KD/%5BMobile%5D%20Tap%20And%20Hold%20At%20Position/",
                    "/x/N5MY/",
                    "/katalon-studio/docs/mobile-tap-and-hold-at-position/",
                    "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-tap-and-hold-at-position",
                    "/docs/legacy/katalon-studio-enterprise/keywords/mobile-keywords/mobile-tap-and-hold-at-position"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-tap-on-image",
                "from": [
                    "/katalon-studio/docs/mobile-tap-image.html",
                    "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-tap-on-image",
                    "/docs/legacy/katalon-studio-enterprise/keywords/mobile-keywords/mobile-tap-on-image"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-toggle-airplane-mode",
                "from": [
                    "/katalon-studio/docs/mobile-toggle-airplane-mode.html",
                    "/display/KD/%5BMobile%5D+Toggle+Airplane+Mode/",
                    "/display/KD/%5BMobile%5D%20Toggle%20Airplane%20Mode/",
                    "/x/XJQY/",
                    "/katalon-studio/docs/mobile-toggle-airplane-mode/",
                    "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-toggle-airplane-mode",
                    "/docs/legacy/katalon-studio-enterprise/keywords/mobile-keywords/mobile-toggle-airplane-mode"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-toggle-wifi",
                "from": [
                    "/katalon-studio/docs/mobile-toggle-wifi.html",
                    "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-toggle-wifi",
                    "/docs/legacy/katalon-studio-enterprise/keywords/mobile-keywords/mobile-toggle-wifi"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-unlock-screen",
                "from": [
                    "/katalon-studio/docs/mobile-unlock-screen.html",
                    "/display/KD/%5BMobile%5D+Unlock+Screen/",
                    "/display/KD/%5BMobile%5D%20Unlock%20Screen/",
                    "/x/_pAY/",
                    "/katalon-studio/docs/mobile-unlock-screen/",
                    "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-unlock-screen",
                    "/docs/legacy/katalon-studio-enterprise/keywords/mobile-keywords/mobile-unlock-screen"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-uncheck-element",
                "from": [
                    "/katalon-studio/docs/mobile-uncheck-element.html",
                    "/display/KD/%5BMobile%5D+Uncheck+Element/",
                    "/display/KD/%5BMobile%5D%20Uncheck%20Element/",
                    "/x/BIkY/",
                    "/katalon-studio/docs/mobile-uncheck-element/",
                    "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-uncheck-element",
                    "/docs/legacy/katalon-studio-enterprise/keywords/mobile-keywords/mobile-uncheck-element"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-use-fingerprint",
                "from": [
                    "/katalon-studio/docs/mobile-use-fingerprint.html",
                    "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-use-fingerprint",
                    "/docs/legacy/katalon-studio-enterprise/keywords/mobile-keywords/mobile-use-fingerprint"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-verify-image-present",
                "from": [
                    "/katalon-studio/docs/mobile-verify-image-present.html",
                    "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-verify-image-present",
                    "/docs/legacy/katalon-studio-enterprise/keywords/mobile-keywords/mobile-verify-image-present"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-verify-is-landscape",
                "from": [
                    "/katalon-studio/docs/mobile-verify-is-landscape.html",
                    "/display/KD/%5BMobile%5D+Verify+Is+Landscape/",
                    "/display/KD/%5BMobile%5D%20Verify%20Is%20Landscape/",
                    "/x/NZEY/",
                    "/katalon-studio/docs/mobile-verify-is-landscape/",
                    "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-verify-is-landscape",
                    "/docs/legacy/katalon-studio-enterprise/keywords/mobile-keywords/mobile-verify-is-landscape"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-verify-is-portrait",
                "from": [
                    "/katalon-studio/docs/mobile-verify-is-portrait.html",
                    "/display/KD/%5BMobile%5D+Verify+Is+Portrait/",
                    "/display/KD/%5BMobile%5D%20Verify%20Is%20Portrait/",
                    "/x/qYcY/",
                    "/katalon-studio/docs/mobile-verify-is-portrait/",
                    "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-verify-is-portrait",
                    "/docs/legacy/katalon-studio-enterprise/keywords/mobile-keywords/mobile-verify-is-portrait"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-verify-element-attribute-value",
                "from": [
                    "/katalon-studio/docs/mobile-verify-element-attribute-value.html",
                    "/display/KD/%5BMobile%5D+Verify+Element+Attribute+Value/",
                    "/display/KD/%5BMobile%5D%20Verify%20Element%20Attribute%20Value/",
                    "/x/YpEY/",
                    "/katalon-studio/docs/mobile-verify-element-attribute-value/",
                    "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-verify-element-attribute-value",
                    "/docs/legacy/katalon-studio-enterprise/keywords/mobile-keywords/mobile-verify-element-attribute-value"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-verify-element-checked",
                "from": [
                    "/katalon-studio/docs/mobile-verify-element-checked.html",
                    "/display/KD/%5BMobile%5D+Verify+Element+Checked/",
                    "/display/KD/%5BMobile%5D%20Verify%20Element%20Checked/",
                    "/x/cJEY/",
                    "/katalon-studio/docs/mobile-verify-element-checked/",
                    "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-verify-element-checked",
                    "/docs/legacy/katalon-studio-enterprise/keywords/mobile-keywords/mobile-verify-element-checked"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-verify-element-exist",
                "from": [
                    "/katalon-studio/docs/mobile-verify-element-exist.html",
                    "/display/KD/%5BMobile%5D+Verify+Element+Exist/",
                    "/display/KD/%5BMobile%5D%20Verify%20Element%20Exist/",
                    "/x/jZEY/",
                    "/katalon-studio/docs/mobile-verify-element-exist/",
                    "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-verify-element-exist",
                    "/docs/legacy/katalon-studio-enterprise/keywords/mobile-keywords/mobile-verify-element-exist"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-verify-element-has-attribute",
                "from": [
                    "/katalon-studio/docs/mobile-verify-element-has-attribute.html",
                    "/display/KD/%5BMobile%5D+Verify+Element+Has+Attribute/",
                    "/display/KD/%5BMobile%5D%20Verify%20Element%20Has%20Attribute/",
                    "/x/npEY/",
                    "/katalon-studio/docs/mobile-verify-element-has-attribute/",
                    "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-verify-element-has-attribute",
                    "/docs/legacy/katalon-studio-enterprise/keywords/mobile-keywords/mobile-verify-element-has-attribute"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-verify-element-not-checked",
                "from": [
                    "/katalon-studio/docs/mobile-verify-element-not-checked.html",
                    "/display/KD/%5BMobile%5D+Verify+Element+Not+Checked/",
                    "/display/KD/%5BMobile%5D%20Verify%20Element%20Not%20Checked/",
                    "/x/fpEY/",
                    "/katalon-studio/docs/mobile-verify-element-not-checked/",
                    "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-verify-element-not-checked",
                    "/docs/legacy/katalon-studio-enterprise/keywords/mobile-keywords/mobile-verify-element-not-checked"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-verify-element-not-exist",
                "from": [
                    "/katalon-studio/docs/mobile-verify-element-not-exist.html",
                    "/display/KD/%5BMobile%5D+Verify+Element+Not+Exist/",
                    "/display/KD/%5BMobile%5D%20Verify%20Element%20Not%20Exist/",
                    "/x/vZEY/",
                    "/katalon-studio/docs/mobile-verify-element-not-exist/",
                    "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-verify-element-not-exist",
                    "/docs/legacy/katalon-studio-enterprise/keywords/mobile-keywords/mobile-verify-element-not-exist"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-verify-element-not-has-attribute",
                "from": [
                    "/katalon-studio/docs/mobile-verify-element-not-has-attribute.html",
                    "/display/KD/%5BMobile%5D+Verify+Element+Not+Has+Attribute/",
                    "/display/KD/%5BMobile%5D%20Verify%20Element%20Not%20Has%20Attribute/",
                    "/x/zZEY/",
                    "/katalon-studio/docs/mobile-verify-element-not-has-attribute/",
                    "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-verify-element-not-has-attribute",
                    "/docs/legacy/katalon-studio-enterprise/keywords/mobile-keywords/mobile-verify-element-not-has-attribute"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-verify-element-not-visible",
                "from": [
                    "/katalon-studio/docs/mobile-verify-element-not-visible.html",
                    "/display/KD/%5BMobile%5D+Verify+Element+Not+Visible/",
                    "/display/KD/%5BMobile%5D%20Verify%20Element%20Not%20Visible/",
                    "/x/75EY/",
                    "/katalon-studio/docs/mobile-verify-element-not-visible/",
                    "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-verify-element-not-visible",
                    "/docs/legacy/katalon-studio-enterprise/keywords/mobile-keywords/mobile-verify-element-not-visible"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-verify-element-visible",
                "from": [
                    "/katalon-studio/docs/mobile-verify-element-visible.html",
                    "/display/KD/%5BMobile%5D+Verify+Element+Visible/",
                    "/display/KD/%5BMobile%5D%20Verify%20Element%20Visible/",
                    "/x/3ZEY/",
                    "/katalon-studio/docs/mobile-verify-element-visible/",
                    "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-verify-element-visible",
                    "/docs/legacy/katalon-studio-enterprise/keywords/mobile-keywords/mobile-verify-element-visible"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-verify-element-text",
                "from": [
                    "/katalon-studio/docs/mobile-verify-element-text.html",
                    "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-verify-element-text",
                    "/docs/legacy/katalon-studio-enterprise/keywords/mobile-keywords/mobile-verify-element-text"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-wait-for-element-attribute-value",
                "from": [
                    "/katalon-studio/docs/mobile-wait-for-element-attribute-value.html",
                    "/display/KD/%5BMobile%5D+Wait+For+Element+Attribute+Value/",
                    "/display/KD/%5BMobile%5D%20Wait%20For%20Element%20Attribute%20Value/",
                    "/x/-ZEY/",
                    "/katalon-studio/docs/mobile-wait-for-element-attribute-value/",
                    "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-wait-for-element-attribute-value",
                    "/docs/legacy/katalon-studio-enterprise/keywords/mobile-keywords/mobile-wait-for-element-attribute-value"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-wait-for-element-has-attribute",
                "from": [
                    "/katalon-studio/docs/mobile-wait-for-element-has-attribute.html",
                    "/display/KD/%5BMobile%5D+Wait+For+Element+Has+Attribute/",
                    "/display/KD/%5BMobile%5D%20Wait%20For%20Element%20Has%20Attribute/",
                    "/x/QpIY/",
                    "/katalon-studio/docs/mobile-wait-for-element-has-attribute/",
                    "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-wait-for-element-has-attribute",
                    "/docs/legacy/katalon-studio-enterprise/keywords/mobile-keywords/mobile-wait-for-element-has-attribute"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-wait-for-element-not-has-attribute",
                "from": [
                    "/katalon-studio/docs/mobile-wait-for-element-not-has-attribute.html",
                    "/display/KD/%5BMobile%5D+Wait+For+Element+Not+Has+Attribute/",
                    "/display/KD/%5BMobile%5D%20Wait%20For%20Element%20Not%20Has%20Attribute/",
                    "/x/Y5IY/",
                    "/katalon-studio/docs/mobile-wait-for-element-not-has-attribute/",
                    "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-wait-for-element-not-has-attribute",
                    "/docs/legacy/katalon-studio-enterprise/keywords/mobile-keywords/mobile-wait-for-element-not-has-attribute"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-wait-for-element-present",
                "from": [
                    "/katalon-studio/docs/mobile-wait-for-element-present.html",
                    "/display/KD/%5BMobile%5D+Wait+For+Element+Present/",
                    "/display/KD/%5BMobile%5D%20Wait%20For%20Element%20Present/",
                    "/katalon-studio/docs/mobile-wait-for-element-present/",
                    "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-wait-for-element-present",
                    "/docs/legacy/katalon-studio-enterprise/keywords/mobile-keywords/mobile-wait-for-element-present"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/mobile-keywords/mobile-wait-for-element-not-present",
                "from": [
                    "/katalon-studio/docs/mobile-wait-for-element-not-present.html",
                    "/docs/katalon-studio-enterprise/keywords/mobile-keywords/mobile-wait-for-element-not-present",
                    "/docs/legacy/katalon-studio-enterprise/keywords/mobile-keywords/mobile-wait-for-element-not-present"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/visual-based-mobile-testing-keywords/mobile-take-area-screenshot-as-checkpoint",
                "from": [
                    "/katalon-studio/docs/mobile-take-area-screenshot-as-checkpoint.html",
                    "/docs/katalon-studio-enterprise/keywords/visual-based-mobile-testing-keywords/mobile-take-area-screenshot-as-checkpoint",
                    "/docs/legacy/katalon-studio-enterprise/keywords/visual-based-mobile-testing-keywords/mobile-take-area-screenshot-as-checkpoint"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/visual-based-mobile-testing-keywords/mobile-take-element-screenshot-as-checkpoint",
                "from": [
                    "/katalon-studio/docs/mobile-take-element-screenshot-as-checkpoint.html",
                    "/docs/katalon-studio-enterprise/keywords/visual-based-mobile-testing-keywords/mobile-take-element-screenshot-as-checkpoint",
                    "/docs/legacy/katalon-studio-enterprise/keywords/visual-based-mobile-testing-keywords/mobile-take-element-screenshot-as-checkpoint"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/visual-based-mobile-testing-keywords/mobile-take-screenshot-as-checkpoint",
                "from": [
                    "/katalon-studio/docs/mobile-take-screenshot-as-checkpoint.html",
                    "/docs/katalon-studio-enterprise/keywords/visual-based-mobile-testing-keywords/mobile-take-screenshot-as-checkpoint",
                    "/docs/legacy/katalon-studio-enterprise/keywords/visual-based-mobile-testing-keywords/mobile-take-screenshot-as-checkpoint"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-service-keywords/ws-contains-string",
                "from": [
                    "/katalon-studio/docs/ws-contains-string.html",
                    "/display/KD/%5BWS%5D+Contains+String/",
                    "/display/KD/%5BWS%5D%20Contains%20String/",
                    "/x/M5UY/",
                    "/katalon-studio/docs/ws-contains-string/",
                    "/docs/katalon-studio-enterprise/keywords/web-service-keywords/ws-contains-string",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-service-keywords/ws-contains-string"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-service-keywords/ws-send-request",
                "from": [
                    "/katalon-studio/docs/ws-send-request.html",
                    "/display/KD/%5BWS%5D+Send+Request/",
                    "/display/KD/%5BWS%5D%20Send%20Request/",
                    "/x/f5QY/",
                    "/katalon-studio/docs/ws-send-request/",
                    "/docs/katalon-studio-enterprise/keywords/web-service-keywords/ws-send-request",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-service-keywords/ws-send-request"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-service-keywords/ws-verify-element-property-value",
                "from": [
                    "/katalon-studio/docs/ws-verify-element-property-value.html",
                    "/display/KD/%5BWS%5D+Verify+Element+Property+Value/",
                    "/display/KD/%5BWS%5D%20Verify%20Element%20Property%20Value/",
                    "/x/bZQY/",
                    "/katalon-studio/docs/ws-verify-element-property-value/",
                    "/docs/katalon-studio-enterprise/keywords/web-service-keywords/ws-verify-element-property-value",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-service-keywords/ws-verify-element-property-value"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-service-keywords/ws-verify-elements-count",
                "from": [
                    "/katalon-studio/docs/ws-verify-elements-count.html",
                    "/display/KD/%5BWS%5D+Verify+Elements+Count/",
                    "/display/KD/%5BWS%5D%20Verify%20Elements%20Count/",
                    "/x/pJQY/",
                    "/katalon-studio/docs/ws-verify-elements-count/",
                    "/docs/katalon-studio-enterprise/keywords/web-service-keywords/ws-verify-elements-count",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-service-keywords/ws-verify-elements-count"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-service-keywords/ws-verify-element-text",
                "from": [
                    "/katalon-studio/docs/ws-verify-element-text.html",
                    "/display/KD/%5BWS%5D+Verify+Element+Text/",
                    "/display/KD/%5BWS%5D%20Verify%20Element%20Text/",
                    "/x/kZQY/",
                    "/katalon-studio/docs/ws-verify-element-text/",
                    "/docs/katalon-studio-enterprise/keywords/web-service-keywords/ws-verify-element-text",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-service-keywords/ws-verify-element-text"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-service-keywords/ws-verify-response-status-code",
                "from": [
                    "/katalon-studio/docs/ws-verify-response-status-code.html",
                    "/display/KD/%5BWS%5D+Verify+Response+Status+Code/",
                    "/display/KD/%5BWS%5D%20Verify%20Response%20Status%20Code/",
                    "/x/DhBO/",
                    "/katalon-studio/docs/ws-verify-response-status-code/",
                    "/docs/katalon-studio-enterprise/keywords/web-service-keywords/ws-verify-response-status-code",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-service-keywords/ws-verify-response-status-code"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-service-keywords/ws-verify-response-status-code-in-range",
                "from": [
                    "/katalon-studio/docs/ws-verify-response-status-code-in-range.html",
                    "/display/KD/%5BWS%5D+Verify+Response+Status+Code+In+Range/",
                    "/display/KD/%5BWS%5D%20Verify%20Response%20Status%20Code%20In%20Range/",
                    "/x/ERBO/",
                    "/katalon-studio/docs/ws-verify-response-status-code-in-range/",
                    "/docs/katalon-studio-enterprise/keywords/web-service-keywords/ws-verify-response-status-code-in-range",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-service-keywords/ws-verify-response-status-code-in-range"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-service-keywords/ws-get-har-file-generation",
                "from": [
                    "/katalon-studio/docs/ws-get-har-file-generation.html",
                    "/docs/katalon-studio-enterprise/keywords/web-service-keywords/ws-get-har-file-generation",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-service-keywords/ws-get-har-file-generation"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-service-keywords/ws-set-har-file-generation",
                "from": [
                    "/katalon-studio/docs/ws-set-har-file-generation.html",
                    "/docs/katalon-studio-enterprise/keywords/web-service-keywords/ws-set-har-file-generation",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-service-keywords/ws-set-har-file-generation"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-clear-text",
                "from": [
                    "/katalon-studio/docs/windows-kw-clear-text.html",
                    "/docs/katalon-studio-enterprise/keywords/windows-keywords/windows-clear-text",
                    "/docs/legacy/katalon-studio-enterprise/keywords/windows-keywords/windows-clear-text"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-close-application",
                "from": [
                    "/katalon-studio/docs/windows-kw-close-app.html",
                    "/docs/katalon-studio-enterprise/keywords/windows-keywords/windows-close-application",
                    "/docs/legacy/katalon-studio-enterprise/keywords/windows-keywords/windows-close-application"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-click",
                "from": [
                    "/katalon-studio/docs/windows-kw-click.html",
                    "/docs/katalon-studio-enterprise/keywords/windows-keywords/windows-click",
                    "/docs/legacy/katalon-studio-enterprise/keywords/windows-keywords/windows-click"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-click-element-offset",
                "from": [
                    "/katalon-studio/docs/windows-kw-click-element-offset.html",
                    "/docs/katalon-studio-enterprise/keywords/windows-keywords/windows-click-element-offset",
                    "/docs/legacy/katalon-studio-enterprise/keywords/windows-keywords/windows-click-element-offset"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-double-click",
                "from": [
                    "/katalon-studio/docs/windows-kw-double-click.html",
                    "/docs/katalon-studio-enterprise/keywords/windows-keywords/windows-double-click",
                    "/docs/legacy/katalon-studio-enterprise/keywords/windows-keywords/windows-double-click"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-find-element",
                "from": [
                    "/katalon-studio/docs/windows-kw-findelement.html",
                    "/docs/katalon-studio-enterprise/keywords/windows-keywords/windows-find-element",
                    "/docs/legacy/katalon-studio-enterprise/keywords/windows-keywords/windows-find-element"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-find-elements",
                "from": [
                    "/katalon-studio/docs/windows-kw-findelements.html",
                    "/docs/katalon-studio-enterprise/keywords/windows-keywords/windows-find-elements",
                    "/docs/legacy/katalon-studio-enterprise/keywords/windows-keywords/windows-find-elements"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-get-attribute",
                "from": [
                    "/katalon-studio/docs/windows-kw-get-attribute.html",
                    "/docs/katalon-studio-enterprise/keywords/windows-keywords/windows-get-attribute",
                    "/docs/legacy/katalon-studio-enterprise/keywords/windows-keywords/windows-get-attribute"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-get-element-position",
                "from": [
                    "/katalon-studio/docs/windows-kw-get-element-position.html",
                    "/docs/katalon-studio-enterprise/keywords/windows-keywords/windows-get-element-position",
                    "/docs/legacy/katalon-studio-enterprise/keywords/windows-keywords/windows-get-element-position"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-get-element-rectangle",
                "from": [
                    "/katalon-studio/docs/windows-kw-get-element-rect.html",
                    "/docs/katalon-studio-enterprise/keywords/windows-keywords/windows-get-element-rectangle",
                    "/docs/legacy/katalon-studio-enterprise/keywords/windows-keywords/windows-get-element-rectangle"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-get-text",
                "from": [
                    "/katalon-studio/docs/windows-kw-get-text.html",
                    "/docs/katalon-studio-enterprise/keywords/windows-keywords/windows-get-text",
                    "/docs/legacy/katalon-studio-enterprise/keywords/windows-keywords/windows-get-text"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-get-driver",
                "from": [
                    "/katalon-studio/docs/windows-kw-get-driver.html",
                    "/docs/katalon-studio-enterprise/keywords/windows-keywords/windows-get-driver",
                    "/docs/legacy/katalon-studio-enterprise/keywords/windows-keywords/windows-get-driver"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-right-click",
                "from": [
                    "/katalon-studio/docs/windows-kw-rightclick.html",
                    "/docs/katalon-studio-enterprise/keywords/windows-keywords/windows-right-click",
                    "/docs/legacy/katalon-studio-enterprise/keywords/windows-keywords/windows-right-click"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-right-click-element-offset",
                "from": [
                    "/katalon-studio/docs/windows-kw-rightclick-element-offset.html",
                    "/docs/katalon-studio-enterprise/keywords/windows-keywords/windows-right-click-element-offset",
                    "/docs/legacy/katalon-studio-enterprise/keywords/windows-keywords/windows-right-click-element-offset"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-set-encrypted-text",
                "from": [
                    "/katalon-studio/docs/windows-kw-set-encrypted-text.html",
                    "/docs/katalon-studio-enterprise/keywords/windows-keywords/windows-set-encrypted-text",
                    "/docs/legacy/katalon-studio-enterprise/keywords/windows-keywords/windows-set-encrypted-text"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-switch-to-window",
                "from": [
                    "/katalon-studio/docs/windows-kw-switch-window.html",
                    "/docs/katalon-studio-enterprise/keywords/windows-keywords/windows-switch-to-window",
                    "/docs/legacy/katalon-studio-enterprise/keywords/windows-keywords/windows-switch-to-window"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-switch-to-window-title",
                "from": [
                    "/katalon-studio/docs/windows-kw-switch-window-title.html",
                    "/docs/katalon-studio-enterprise/keywords/windows-keywords/windows-switch-to-window-title",
                    "/docs/legacy/katalon-studio-enterprise/keywords/windows-keywords/windows-switch-to-window-title"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-send-keys",
                "from": [
                    "/katalon-studio/docs/windows-kw-senkey.html",
                    "/docs/katalon-studio-enterprise/keywords/windows-keywords/windows-send-keys",
                    "/docs/legacy/katalon-studio-enterprise/keywords/windows-keywords/windows-send-keys"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-set-text",
                "from": [
                    "/katalon-studio/docs/windows-kw-set-text.html",
                    "/docs/katalon-studio-enterprise/keywords/windows-keywords/windows-set-text",
                    "/docs/legacy/katalon-studio-enterprise/keywords/windows-keywords/windows-set-text"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-start-application-with-title",
                "from": [
                    "/katalon-studio/docs/windows-kw-start-app-title.html",
                    "/docs/katalon-studio-enterprise/keywords/windows-keywords/windows-start-application-with-title",
                    "/docs/legacy/katalon-studio-enterprise/keywords/windows-keywords/windows-start-application-with-title"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-start-application",
                "from": [
                    "/katalon-studio/docs/windows-kw-start-app.html",
                    "/docs/katalon-studio-enterprise/keywords/windows-keywords/windows-start-application",
                    "/docs/legacy/katalon-studio-enterprise/keywords/windows-keywords/windows-start-application"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-switch-to-desktop",
                "from": [
                    "/katalon-studio/docs/windows-kw-switch-desktop.html",
                    "/docs/katalon-studio-enterprise/keywords/windows-keywords/windows-switch-to-desktop",
                    "/docs/legacy/katalon-studio-enterprise/keywords/windows-keywords/windows-switch-to-desktop"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-switch-to-application",
                "from": [
                    "/katalon-studio/docs/windows-kw-switch-app.html",
                    "/docs/katalon-studio-enterprise/keywords/windows-keywords/windows-switch-to-application",
                    "/docs/legacy/katalon-studio-enterprise/keywords/windows-keywords/windows-switch-to-application"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-verify-element-attribute-value",
                "from": [
                    "/katalon-studio/docs/windows-kw-verify-element-attribute-value.html",
                    "/docs/katalon-studio-enterprise/keywords/windows-keywords/windows-verify-element-attribute-value",
                    "/docs/legacy/katalon-studio-enterprise/keywords/windows-keywords/windows-verify-element-attribute-value"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-verify-element-not-present",
                "from": [
                    "/katalon-studio/docs/windows-kw-verify-element-not-present.html",
                    "/docs/katalon-studio-enterprise/keywords/windows-keywords/windows-verify-element-not-present",
                    "/docs/legacy/katalon-studio-enterprise/keywords/windows-keywords/windows-verify-element-not-present"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-verify-element-present",
                "from": [
                    "/katalon-studio/docs/windows-kw-verify-element-present.html",
                    "/docs/katalon-studio-enterprise/keywords/windows-keywords/windows-verify-element-present",
                    "/docs/legacy/katalon-studio-enterprise/keywords/windows-keywords/windows-verify-element-present"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-wait-for-element-attribute-value",
                "from": [
                    "/katalon-studio/docs/windows-kw-wait-element-attribute-value.html",
                    "/docs/katalon-studio-enterprise/keywords/windows-keywords/windows-wait-for-element-attribute-value",
                    "/docs/legacy/katalon-studio-enterprise/keywords/windows-keywords/windows-wait-for-element-attribute-value"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-wait-for-element-not-present",
                "from": [
                    "/katalon-studio/docs/windows-kw-wait-element-not-present.html",
                    "/docs/katalon-studio-enterprise/keywords/windows-keywords/windows-wait-for-element-not-present",
                    "/docs/legacy/katalon-studio-enterprise/keywords/windows-keywords/windows-wait-for-element-not-present"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/windows-keywords/windows-wait-for-element-present",
                "from": [
                    "/katalon-studio/docs/windows-kw-wait-element-present.html",
                    "/docs/katalon-studio-enterprise/keywords/windows-keywords/windows-wait-for-element-present",
                    "/docs/legacy/katalon-studio-enterprise/keywords/windows-keywords/windows-wait-for-element-present"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/cucumber-keywords/cucumber-run-feature-file-with-tags",
                "from": [
                    "/katalon-studio/docs/cucumber-kw-run-feature-file-tag.html",
                    "/docs/katalon-studio-enterprise/keywords/cucumber-keywords/cucumber-run-feature-file-with-tags",
                    "/docs/legacy/katalon-studio-enterprise/keywords/cucumber-keywords/cucumber-run-feature-file-with-tags"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/cucumber-keywords/cucumber-run-feature-file",
                "from": [
                    "/katalon-studio/docs/cucumber-kw-run-feature-file.html",
                    "/docs/katalon-studio-enterprise/keywords/cucumber-keywords/cucumber-run-feature-file",
                    "/docs/legacy/katalon-studio-enterprise/keywords/cucumber-keywords/cucumber-run-feature-file"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/cucumber-keywords/cucumber-run-feature-folder-with-tags",
                "from": [
                    "/katalon-studio/docs/cucumber-kw-run-feature-folder-tag.html",
                    "/docs/katalon-studio-enterprise/keywords/cucumber-keywords/cucumber-run-feature-folder-with-tags",
                    "/docs/legacy/katalon-studio-enterprise/keywords/cucumber-keywords/cucumber-run-feature-folder-with-tags"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/cucumber-keywords/cucumber-run-feature-folder",
                "from": [
                    "/katalon-studio/docs/cucumber-kw-run-feature-folder.html",
                    "/docs/katalon-studio-enterprise/keywords/cucumber-keywords/cucumber-run-feature-folder",
                    "/docs/legacy/katalon-studio-enterprise/keywords/cucumber-keywords/cucumber-run-feature-folder"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/cucumber-keywords/cucumber-run-with-cucumber-runner",
                "from": [
                    "/katalon-studio/docs/cucumber-kw-run-cucumber-runner.html",
                    "/docs/katalon-studio-enterprise/keywords/cucumber-keywords/cucumber-run-with-cucumber-runner",
                    "/docs/legacy/katalon-studio-enterprise/keywords/cucumber-keywords/cucumber-run-with-cucumber-runner"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/common-assertions/common-verify-checkpoint",
                "from": [
                    "/katalon-studio/docs/common-verify-checkpoint.html",
                    "/display/KD/%5BCommon%5D+Verify+Checkpoint/",
                    "/display/KD/%5BCommon%5D%20Verify%20Checkpoint/",
                    "/display/KD/%5BWebUI%5D+Verify+Checkpoint",
                    "/x/oIIi/",
                    "/katalon-studio/docs/common-verify-checkpoint/",
                    "/docs/katalon-studio-enterprise/keywords/common-assertions/common-verify-checkpoint",
                    "/docs/legacy/katalon-studio-enterprise/keywords/common-assertions/common-verify-checkpoint"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/common-assertions/common-verify-equal",
                "from": [
                    "/katalon-studio/docs/common-verify-equal.html",
                    "/display/KD/%5BCommon%5D+Verify+Equal/",
                    "/display/KD/%5BCommon%5D%20Verify%20Equal/",
                    "/display/KD/[WebUI]+Verify+Equal",
                    "/x/iIkY/",
                    "/katalon-studio/docs/common-verify-equal/",
                    "/docs/katalon-studio-enterprise/keywords/common-assertions/common-verify-equal",
                    "/docs/legacy/katalon-studio-enterprise/keywords/common-assertions/common-verify-equal"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/common-assertions/common-verify-greater-than",
                "from": [
                    "/katalon-studio/docs/common-verify-greater-than.html",
                    "/display/KD/%5BCommon%5D+Verify+Greater+Than/",
                    "/display/KD/%5BCommon%5D%20Verify%20Greater%20Than/",
                    "/display/KD/[WebUI]+Verify+Greater+Than",
                    "/x/2IEi/",
                    "/katalon-studio/docs/common-verify-greater-than/",
                    "/docs/katalon-studio-enterprise/keywords/common-assertions/common-verify-greater-than",
                    "/docs/legacy/katalon-studio-enterprise/keywords/common-assertions/common-verify-greater-than"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/common-assertions/common-verify-greater-than-or-equal",
                "from": [
                    "/katalon-studio/docs/common-verify-greater-than-or-equal.html",
                    "/display/KD/%5BCommon%5D+Verify+Greater+Than+Or+Equal/",
                    "/display/KD/%5BCommon%5D%20Verify%20Greater%20Than%20Or%20Equal/",
                    "/display/KD/[WebUI]+Verify+Greater+Than+Or+Equal",
                    "/x/4IEi/",
                    "/katalon-studio/docs/common-verify-greater-than-or-equal/",
                    "/docs/katalon-studio-enterprise/keywords/common-assertions/common-verify-greater-than-or-equal",
                    "/docs/legacy/katalon-studio-enterprise/keywords/common-assertions/common-verify-greater-than-or-equal"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/common-assertions/common-verify-less-than",
                "from": [
                    "/katalon-studio/docs/common-verify-less-than.html",
                    "/display/KD/%5BCommon%5D+Verify+Less+Than/",
                    "/display/KD/%5BCommon%5D%20Verify%20Less%20Than/",
                    "/display/KD/[WebUI]+Verify+Less+Than",
                    "/x/6YEi/",
                    "/katalon-studio/docs/common-verify-less-than/",
                    "/docs/katalon-studio-enterprise/keywords/common-assertions/common-verify-less-than",
                    "/docs/legacy/katalon-studio-enterprise/keywords/common-assertions/common-verify-less-than"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/common-assertions/common-verify-less-than-or-equal",
                "from": [
                    "/katalon-studio/docs/common-verify-less-than-or-equal.html",
                    "/display/KD/%5BCommon%5D+Verify+Less+Than+Or+Equal/",
                    "/display/KD/%5BCommon%5D%20Verify%20Less%20Than%20Or%20Equal/",
                    "/display/KD/[WebUI]+Verify+Less+Than+Or+Equal",
                    "/x/84Ei/",
                    "/katalon-studio/docs/common-verify-less-than-or-equal/",
                    "/docs/katalon-studio-enterprise/keywords/common-assertions/common-verify-less-than-or-equal",
                    "/docs/legacy/katalon-studio-enterprise/keywords/common-assertions/common-verify-less-than-or-equal"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/common-assertions/common-verify-match",
                "from": [
                    "/katalon-studio/docs/common-verify-match.html",
                    "/display/KD/%5BCommon%5D+Verify+Match/",
                    "/display/KD/%5BCommon%5D%20Verify%20Match/",
                    "/display/KD/[WebUI]+Verify+Match",
                    "/x/RYIi/",
                    "/katalon-studio/docs/common-verify-match/",
                    "/docs/katalon-studio-enterprise/keywords/common-assertions/common-verify-match",
                    "/docs/legacy/katalon-studio-enterprise/keywords/common-assertions/common-verify-match"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/common-assertions/common-verify-not-equal",
                "from": [
                    "/katalon-studio/docs/common-verify-not-equal.html",
                    "/display/KD/%5BCommon%5D+Verify+Not+Equal/",
                    "/display/KD/%5BCommon%5D%20Verify%20Not%20Equal/",
                    "/display/KD/[WebUI]+Verify+Not+Equal",
                    "/x/-oEi/",
                    "/katalon-studio/docs/common-verify-not-equal/",
                    "/docs/katalon-studio-enterprise/keywords/common-assertions/common-verify-not-equal",
                    "/docs/legacy/katalon-studio-enterprise/keywords/common-assertions/common-verify-not-equal"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/common-assertions/common-verify-not-match",
                "from": [
                    "/katalon-studio/docs/common-verify-not-match.html",
                    "/display/KD/%5BCommon%5D+Verify+Not+Match/",
                    "/display/KD/%5BCommon%5D%20Verify%20Not%20Match/",
                    "/display/KD/[WebUI]+Verify+Not+Match",
                    "/x/tJMY/",
                    "/katalon-studio/docs/common-verify-not-match/",
                    "/docs/katalon-studio-enterprise/keywords/common-assertions/common-verify-not-match",
                    "/docs/legacy/katalon-studio-enterprise/keywords/common-assertions/common-verify-not-match"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/utilities-keywords/common-call-test-case",
                "from": [
                    "/katalon-studio/docs/common-call-test-case.html",
                    "/display/KD/%5BCommon%5D+Call+Test+Case/",
                    "/display/KD/%5BCommon%5D%20Call%20Test%20Case/",
                    "/x/roIi/",
                    "/katalon-studio/docs/common-call-test-case/",
                    "/docs/katalon-studio-enterprise/keywords/utilities-keywords/common-call-test-case",
                    "/docs/legacy/katalon-studio-enterprise/keywords/utilities-keywords/common-call-test-case"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/utilities-keywords/common-comment",
                "from": [
                    "/katalon-studio/docs/common-comment.html",
                    "/display/KD/%5BCommon%5D+Comment/",
                    "/display/KD/%5BCommon%5D%20Comment/",
                    "/display/KD/[WebUI]+Comment",
                    "/x/KIIi/",
                    "/katalon-studio/docs/common-comment/",
                    "/docs/katalon-studio-enterprise/keywords/utilities-keywords/common-comment",
                    "/docs/legacy/katalon-studio-enterprise/keywords/utilities-keywords/common-comment"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/utilities-keywords/common-concatenate",
                "from": [
                    "/katalon-studio/docs/common-concatenate.html",
                    "/display/KD/%5BCommon%5D+Concatenate/",
                    "/display/KD/%5BCommon%5D%20Concatenate/",
                    "/x/a4Ii/",
                    "/katalon-studio/docs/common-concatenate/",
                    "/docs/katalon-studio-enterprise/keywords/utilities-keywords/common-concatenate",
                    "/docs/legacy/katalon-studio-enterprise/keywords/utilities-keywords/common-concatenate",
                    "/display/KD/[WebUI]+Concatenate"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/utilities-keywords/common-delay",
                "from": [
                    "/katalon-studio/docs/common-delay.html",
                    "/display/KD/%5BCommon%5D+Delay/",
                    "/display/KD/%5BCommon%5D%20Delay/",
                    "/x/XYIi/",
                    "/katalon-studio/docs/common-delay/",
                    "/docs/katalon-studio-enterprise/keywords/utilities-keywords/common-delay",
                    "/docs/legacy/katalon-studio-enterprise/keywords/utilities-keywords/common-delay",
                    "/display/KD/[WebUI]+Delay"
                ]
            },
            {
                "to": "/docs/execute/execute-tests-with-katalon-studio/execute-a-test-case",
                "from": [
                    "/katalon-studio/docs/execute-a-test-case-or-a-test-suite.html",
                    "/display/KD/Execute+a+Test+Case+or+a+Test+Suite/",
                    "/display/KD/Execute%20a%20Test%20Case%20or%20a%20Test%20Suite/",
                    "/x/GAvR/",
                    "/katalon-studio/docs/execute-a-test-case-or-a-test-suite/",
                    "/display/KD/Execute+a+test+suite/",
                    "/katalon-studio/tutorials/executing_test_case.html",
                    "/display/KD/Execute+a+test+case/",
                    "/display/KD/Execute%20a%20test%20case/",
                    "/x/ugAM/",
                    "/katalon-studio/docs/execute-a-test-case/",
                    "/katalon-studio/docs/execute-a-test-case.html",
                    "/display/KD/Execute+test+from+specific+step/",
                    "/katalon-studio/tutorials/execute_debug_certain_steps.html",
                    "/display/KD/Debug+Automation+Test/",
                    "/display/KD/Debug%20Automation%20Test/",
                    "/x/C4Ew/",
                    "/katalon-studio/docs/debug-automation-test/",
                    "/katalon-studio/docs/debug-automation-test.html",
                    "/katalon-studio/tutorials/debugging_test_case.html",
                    "/katalon-studio/docs/debugging_test_case.html/",
                    "/katalon-studio/docs/execute_debug_certain_steps.html",
                    "/docs/katalon-studio-enterprise/test-execution/execute-and-debug-a-test-case",
                    "/docs/legacy/katalon-studio-enterprise/test-execution/execute-and-debug-a-test-case"
                ]
            },
            {
                "to": "/docs/create-tests/data-driven-testing/data-driven-testing-with-katalon-studio",
                "from": [
                    "/katalon-studio/docs/ddt.html",
                    "/docs/katalon-studio-enterprise/test-execution/data-driven-testing/data-driven-testing-with-katalon-studio",
                    "/docs/legacy/katalon-studio-enterprise/test-execution/data-driven-testing/data-driven-testing-with-katalon-studio"
                ]
            },
            {
                "to": "/docs/create-tests/data-driven-testing/global-variables",
                "from": [
                    "/katalon-studio/docs/variable-types.html",
                    "/display/KD/Variable+Types/",
                    "/display/KD/Variable%20Types/",
                    "/x/RoIw/",
                    "/katalon-studio/docs/variable-types/",
                    "/docs/katalon-studio-enterprise/test-execution/data-driven-testing/types-of-variables",
                    "/docs/legacy/katalon-studio-enterprise/test-execution/data-driven-testing/types-of-variables",
                    "/docs/create-tests/data-driven-testing/types-of-variables-in-katalon-studio"
                ]
            },
            {
                "to": "/docs/create-tests/data-driven-testing/execution-profile",
                "from": [
                    "/katalon-studio/docs/execution-profile-v54.html",
                    "/x/xAHR/",
                    "/katalon-studio/docs/execution-profile-v54/",
                    "/katalon-studio/docs/global-variables/",
                    "/katalon-studio/docs/global-variables.html",
                    "/display/KD/Create+Global+Variables+on+the+fly/",
                    "/display/KD/Create%20Global%20Variables%20on%20the%20fly/",
                    "/x/EAjR/",
                    "/katalon-studio/docs/create-global-variables-on-the-fly/",
                    "/katalon-studio/docs/create-global-variables-on-the-fly.html",
                    "/docs/katalon-studio-enterprise/test-execution/data-driven-testing/global-variables-and-execution-profile",
                    "/docs/legacy/katalon-studio-enterprise/test-execution/data-driven-testing/global-variables-and-execution-profile",
                    "/docs/create-tests/data-driven-testing/global-variables-and-execution-profile"
                ]
            },
            {
                "to": "/docs/create-tests/data-driven-testing/test-case-variables",
                "from": [
                    "/katalon-studio/docs/test-case-variables.html",
                    "/katalon-studio/tutorials/data-driven-testing/",
                    "/katalon-studio/tutorials/data_driven_testing.html",
                    "/docs/katalon-studio-enterprise/test-execution/data-driven-testing/test-case-variables",
                    "/docs/legacy/katalon-studio-enterprise/test-execution/data-driven-testing/test-case-variables"
                ]
            },
            // {
            //     "to": "/docs/create-tests/data-driven-testing/run-test-case-with-an-external-data-source",
            //     "from": [
            //         "/katalon-studio/docs/run-test-case-external-data.html",
            //         "/docs/katalon-studio-enterprise/test-execution/data-driven-testing/run-test-case-with-an-external-data-source",
            //         "/docs/legacy/katalon-studio-enterprise/test-execution/data-driven-testing/run-test-case-with-an-external-data-source"
            //     ]
            // },
            {
                "to": "/docs/create-tests/data-driven-testing/specify-iteration-names-in-data-driven-testing-reports",
                "from": [
                    "/katalon-studio/how-to-guides/specify-iteration-names.html",
                    "/docs/katalon-studio-enterprise/test-execution/data-driven-testing/specify-iteration-names-in-data-driven-testing-reports",
                    "/docs/legacy/katalon-studio-enterprise/test-execution/data-driven-testing/specify-iteration-names-in-data-driven-testing-reports"
                ]
            },
            // {
            //     "to": "/docs/create-tests/data-driven-testing/enhanced-variable-binding-in-katalon-studio",
            //     "from": [
            //         "/katalon-studio/docs/bind-as-string.html",
            //         "/docs/katalon-studio-enterprise/test-execution/data-driven-testing/enhanced-variable-binding",
            //         "/docs/legacy/katalon-studio-enterprise/test-execution/data-driven-testing/enhanced-variable-binding"
            //     ]
            // },
            {
                "to": "/docs/create-tests/data-driven-testing/manage-test-data",
                "from": [
                    "/katalon-studio/docs/manage-test-data.html",
                    "/display/KD/Manage+Test+Data/",
                    "/display/KD/Manage%20Test%20Data/",
                    "/x/W4Iw/",
                    "/katalon-studio/docs/manage-test-data/",
                    "/docs/katalon-studio-enterprise/test-execution/data-driven-testing/manage-test-data",
                    "/docs/legacy/katalon-studio-enterprise/test-execution/data-driven-testing/manage-test-data"
                ]
            },
            // {
            //     "to": "/docs/create-tests/data-driven-testing/checkpoints",
            //     "from": [
            //         "/katalon-studio/docs/manage-checkpoints.html",
            //         "/display/KD/Manage+Checkpoints/",
            //         "/display/KD/Manage%20Checkpoints/",
            //         "/x/XYIw/",
            //         "/katalon-studio/docs/manage-checkpoints/",
            //         "/display/KD/Manage+Checkpoint/index.html",
            //         "/docs/katalon-studio-enterprise/test-execution/data-driven-testing/checkpoints",
            //         "/docs/legacy/katalon-studio-enterprise/test-execution/data-driven-testing/checkpoints"
            //     ]
            // },
            // {
            //     "to": "/docs/create-tests/data-driven-testing/set-up-database-connection-for-data-driven-testing-in-katalon-studio",
            //     "from": [
            //         "/katalon-studio/docs/database-settings.html",
            //         "/display/KD/Database+Settings/",
            //         "/display/KD/Database%20Settings/",
            //         "/x/tgFO/",
            //         "/katalon-studio/docs/database-settings/",
            //         "/docs/katalon-studio-enterprise/test-execution/data-driven-testing/set-up-database-connection-for-data-driven-testing",
            //         "/docs/legacy/katalon-studio-enterprise/test-execution/data-driven-testing/set-up-database-connection-for-data-driven-testing"
            //     ]
            // },
            {
                "to": "/docs/create-tests/data-driven-testing/data-driven-testing-with-restful-web-service-requests",
                "from": [
                    "/katalon-studio/docs/ddt-with-web-service.html",
                    "/docs/katalon-studio-enterprise/test-execution/data-driven-testing/data-driven-testing-with-restful-web-service-requests",
                    "/docs/legacy/katalon-studio-enterprise/test-execution/data-driven-testing/data-driven-testing-with-restful-web-service-requests"
                ]
            },
            {
                "to": "/docs/create-tests/data-driven-testing/implement-data-driven-testing-with-mysql",
                "from": [
                    "/katalon-studio/how-to-guides/how-to-implement-ddt-mysql.html",
                    "/katalon-studio/tutorials/how-to-implement-ddt-mysql.html",
                    "/docs/katalon-studio-enterprise/test-execution/data-driven-testing/implement-data-driven-testing-with-mysql",
                    "/docs/legacy/katalon-studio-enterprise/test-execution/data-driven-testing/implement-data-driven-testing-with-mysql"
                ]
            },
            {
                "to": "/docs/create-tests/data-driven-testing/combine-multiple-data-sources-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/combine-multiple-data-sources.html",
                    "/docs/katalon-studio-enterprise/test-execution/data-driven-testing/combine-multiple-data-sources",
                    "/docs/legacy/katalon-studio-enterprise/test-execution/data-driven-testing/combine-multiple-data-sources"
                ]
            },
            {
                "to": "/docs/create-tests/data-driven-testing/data-driven-testing-at-the-test-case-level-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/ddt-at-test-case-level.html",
                    "/docs/katalon-studio-enterprise/test-execution/data-driven-testing/data-driven-testing-at-the-test-case-level",
                    "/docs/legacy/katalon-studio-enterprise/test-execution/data-driven-testing/data-driven-testing-at-the-test-case-level"
                ]
            },
            {
                "to": "/docs/organize/manage-tests/test-suite/manage-test-suites-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/create-test-suite.html",
                    "/katalon-studio/docs/design-a-test-suite.html",
                    "/display/KD/Design+a+Test+Suite/",
                    "/display/KD/Design%20a%20Test%20Suite/",
                    "/x/mAvR/",
                    "/katalon-studio/docs/design-a-test-suite/",
                    "/docs/katalon-studio-enterprise/test-execution/test-suite/test-suite",
                    "/docs/katalon-studio-enterprise/test-execution/test-suite/manage-test-cases-in-test-suites",
                    "/docs/legacy/katalon-studio-enterprise/test-execution/test-suite/manage-test-cases-in-test-suites",
                ]
            },
            {
                "to": "/docs/organize/manage-tests/manage-test-suite-collections-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/test-suite-collection.html",
                    "/display/KD/Test+Suite+Collection/",
                    "/display/KD/Test%20Suite%20Collection/",
                    "/x/NgvR/",
                    "/katalon-studio/docs/test-suite-collection/",
                    "/display/KD/Execute+a+test+suite+collection/",
                    "/docs/katalon-studio-enterprise/test-execution/test-suite/manage-test-suites-in-test-suite-collections",
                    "/docs/legacy/katalon-studio-enterprise/test-execution/test-suite/manage-test-suites-in-test-suite-collections"
                ]
            },
            {
                "to": "/docs/organize/manage-tests/dynamic-test-suite/manage-dynamic-test-suites-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/dynamic-test-suite-ks.html",
                    "/katalon-studio/docs/dynamic-test-suite.html",
                    "/katalon-studio/docs/dynamic-querying-test-suite/",
                    "/katalon-studio/docs/dynamic+querying+test+suite/",
                    "/katalon-studio/docs/dynamic%20querying%20test%20suite/",
                    "/docs/katalon-studio-enterprise/test-execution/test-suite/dynamic-test-suite-in-katalon-studio",
                    "/docs/katalon-studio-enterprise/test-execution/test-suite/manage-test-cases-in-dynamic-test-suites-with-katalon-studio",
                    "/docs/legacy/katalon-studio-enterprise/test-execution/test-suite/manage-test-cases-in-dynamic-test-suites-with-katalon-studio"
                ]
            },
            {
                "to": "/docs/execute/execute-tests-with-katalon-studio/skip-test-cases-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/skip-test-cases.html",
                    "/docs/katalon-studio-enterprise/test-execution/test-suite/skip-test-cases",
                    "/docs/legacy/katalon-studio-enterprise/test-execution/test-suite/skip-test-cases"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/using-keywords-in-katalon-studio/web-testing/solving-pop-up-dialog-issue-with-katalon-studio",
                "from": [
                    "/katalon-studio/docs/pop_up_dialog_issue.html",
                    "/katalon-studio/tutorials/pop_up_dialog_issue.html",
                    "/docs/katalon-studio-enterprise/test-execution/advanced-guides/web-testing/solving-pop-up-dialog-issue-with-katalon-studio",
                    "/docs/legacy/katalon-studio-enterprise/test-execution/advanced-guides/web-testing/solving-pop-up-dialog-issue-with-katalon-studio"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/using-keywords-in-katalon-studio/web-testing/handling-iframe-issue-with-katalon-studio",
                "from": [
                    "/katalon-studio/docs/handling_iframe_issue.html",
                    "/katalon-studio/tutorials/handling_iframe_issue.html",
                    "/docs/katalon-studio-enterprise/test-execution/advanced-guides/web-testing/handling-iframe-issue-with-katalon-studio",
                    "/docs/legacy/katalon-studio-enterprise/test-execution/advanced-guides/web-testing/handling-iframe-issue-with-katalon-studio"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/using-keywords-in-katalon-studio/web-testing/solving-wait-time-issue-with-katalon-studio",
                "from": [
                    "/katalon-studio/docs/solving_common_issue_wait_time.html",
                    "/katalon-studio/tutorials/solving_common_issue_wait_time.html",
                    "/docs/katalon-studio-enterprise/test-execution/advanced-guides/web-testing/solving-wait-time-issue-with-katalon-studio",
                    "/docs/legacy/katalon-studio-enterprise/test-execution/advanced-guides/web-testing/solving-wait-time-issue-with-katalon-studio"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/custom-keywords/handling-drag-and-drop-testing-for-web-applications-with-katalon-studio",
                "from": [
                    "/katalon-studio/docs/drag_drop_web_applications_katalon_studio.html",
                    "/katalon-studio/tutorials/drag_drop_web_applications_katalon_studio.html",
                    "/docs/katalon-studio-enterprise/test-execution/advanced-guides/web-testing/handling-drag-and-drop-testing-for-web-applications-with-katalon-studio",
                    "/docs/legacy/katalon-studio-enterprise/test-execution/advanced-guides/web-testing/handling-drag-and-drop-testing-for-web-applications-with-katalon-studio"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/using-keywords-in-katalon-studio/web-testing/how-to-handle-alerts-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/handle_alerts.html",
                    "/katalon-studio/tutorials/handle_alerts.html",
                    "/docs/katalon-studio-enterprise/test-execution/advanced-guides/web-testing/how-to-handle-alerts",
                    "/docs/legacy/katalon-studio-enterprise/test-execution/advanced-guides/web-testing/how-to-handle-alerts"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/using-keywords-in-katalon-studio/web-testing/how-to-handle-textbox-checkbox-and-radio-button-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/handle_textbox_checkbox_radio_button.html",
                    "/katalon-studio/tutorials/handle_textbox_checkbox_radio_button.html",
                    "/docs/katalon-studio-enterprise/test-execution/advanced-guides/web-testing/how-to-handle-textbox-checkbox-and-radio-button",
                    "/docs/legacy/katalon-studio-enterprise/test-execution/advanced-guides/web-testing/how-to-handle-textbox-checkbox-and-radio-button"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/using-keywords-in-katalon-studio/web-testing/how-to-handle-file-uploads-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/handle_file_uploads.html",
                    "/katalon-studio/tutorials/handle_file_uploads.html",
                    "/docs/katalon-studio-enterprise/test-execution/advanced-guides/web-testing/how-to-handle-file-uploads",
                    "/docs/legacy/katalon-studio-enterprise/test-execution/advanced-guides/web-testing/how-to-handle-file-uploads"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/using-keywords-in-katalon-studio/web-testing/how-to-handle-web-tables-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/handle_web_tables.html",
                    "/katalon-studio/tutorials/handle_web_tables.html",
                    "/docs/katalon-studio-enterprise/test-execution/advanced-guides/web-testing/how-to-handle-web-tables",
                    "/docs/legacy/katalon-studio-enterprise/test-execution/advanced-guides/web-testing/how-to-handle-web-tables"
                ]
            },
            {
                "to": "/docs/create-tests/test-objects/web-test-objects/handling-web-element-locators-using-katalon-studio",
                "from": [
                    "/katalon-studio/docs/web_element_locators.html",
                    "/katalon-studio/tutorials/web_element_locators.html",
                    "/docs/katalon-studio-enterprise/test-execution/advanced-guides/web-testing/handling-web-element-locators-using-katalon-studio",
                    "/docs/legacy/katalon-studio-enterprise/test-execution/advanced-guides/web-testing/handling-web-element-locators-using-katalon-studio"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/using-keywords-in-katalon-studio/web-testing/how-to-check-element-status-in-conditional-statement-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/how_to_check_element_status_in_conditional_statement.html",
                    "/katalon-studio/tutorials/how_to_check_element_status_in_conditional_statement.html",
                    "/docs/katalon-studio-enterprise/test-execution/advanced-guides/web-testing/how-to-check-element-status-in-conditional-statement",
                    "/docs/legacy/katalon-studio-enterprise/test-execution/advanced-guides/web-testing/how-to-check-element-status-in-conditional-statement"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/using-keywords-in-katalon-studio/mobile-testing/performing-pinch-to-zoom-in-action-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/pinch_zoom_action_mobile_app.html",
                    "/katalon-studio/tutorials/pinch_zoom_action_mobile_app.html",
                    "/docs/katalon-studio-enterprise/test-execution/advanced-guides/mobile-testing/performing-pinch-to-zoom-in-action",
                    "/docs/legacy/katalon-studio-enterprise/test-execution/advanced-guides/mobile-testing/performing-pinch-to-zoom-in-action"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/using-keywords-in-katalon-studio/mobile-testing/how-to-perform-multi-touch-actions-in-mobile-app-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/handle_multi_touch_action.html",
                    "/katalon-studio/tutorials/handle_multi_touch_action.html",
                    "/docs/katalon-studio-enterprise/test-execution/advanced-guides/mobile-testing/how-to-perform-multi-touch-actions-in-mobile-app",
                    "/docs/legacy/katalon-studio-enterprise/test-execution/advanced-guides/mobile-testing/how-to-perform-multi-touch-actions-in-mobile-app"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/using-keywords-in-katalon-studio/mobile-testing/handling-alert-dialog-in-mobile-app-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/handle_alert_dialog_mobile_app.html",
                    "/katalon-studio/tutorials/handle_alert_dialog_mobile_app.html",
                    "/docs/katalon-studio-enterprise/test-execution/advanced-guides/mobile-testing/handling-alert-dialog-in-mobile-app",
                    "/docs/legacy/katalon-studio-enterprise/test-execution/advanced-guides/mobile-testing/handling-alert-dialog-in-mobile-app"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/using-keywords-in-katalon-studio/mobile-testing/handling-drag-and-drop-in-mobile-app-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/handle_drag_drop_mobile_app.html",
                    "/katalon-studio/tutorials/handle_drag_drop_mobile_app.html",
                    "/docs/katalon-studio-enterprise/test-execution/advanced-guides/mobile-testing/handling-drag-and-drop-in-mobile-app",
                    "/docs/legacy/katalon-studio-enterprise/test-execution/advanced-guides/mobile-testing/handling-drag-and-drop-in-mobile-app"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/using-keywords-in-katalon-studio/mobile-testing/using-list-to-store-the-mobile-elements-to-validate-data-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/store_mobile_elements_to_validate_data.html",
                    "/katalon-studio/tutorials/store_mobile_elements_to_validate_data.html",
                    "/docs/katalon-studio-enterprise/test-execution/advanced-guides/mobile-testing/using-list-to-store-the-mobile-elements-to-validate-data",
                    "/docs/legacy/katalon-studio-enterprise/test-execution/advanced-guides/mobile-testing/using-list-to-store-the-mobile-elements-to-validate-data"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/using-keywords-in-katalon-studio/mobile-testing/handling-spinner-in-mobile-automation-testing-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/handle_spinner_mobile_automation_testing.html",
                    "/katalon-studio/tutorials/handle_spinner_mobile_automation_testing.html",
                    "/docs/katalon-studio-enterprise/test-execution/advanced-guides/mobile-testing/handling-spinner-in-mobile-automation-testing",
                    "/docs/legacy/katalon-studio-enterprise/test-execution/advanced-guides/mobile-testing/handling-spinner-in-mobile-automation-testing"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/using-keywords-in-katalon-studio/mobile-testing/handling-vertical-swipe-in-mobile-automation-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/vertical_swipe_in_mobile_automation.html",
                    "/katalon-studio/tutorials/vertical_swipe_in_mobile_automation.html",
                    "/docs/katalon-studio-enterprise/test-execution/advanced-guides/mobile-testing/handling-vertical-swipe-in-mobile-automation",
                    "/docs/legacy/katalon-studio-enterprise/test-execution/advanced-guides/mobile-testing/handling-vertical-swipe-in-mobile-automation"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/using-keywords-in-katalon-studio/mobile-testing/handling-horizontal-swipe-in-mobile-automation-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/horizontal_swipe_mobile_automation.html",
                    "/katalon-studio/tutorials/horizontal_swipe_mobile_automation.html",
                    "/docs/katalon-studio-enterprise/test-execution/advanced-guides/mobile-testing/handling-horizontal-swipe-in-mobile-automation",
                    "/docs/legacy/katalon-studio-enterprise/test-execution/advanced-guides/mobile-testing/handling-horizontal-swipe-in-mobile-automation"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/using-keywords-in-katalon-studio/mobile-testing/handling-scroll-to-element-in-mobile-automation-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/scroll_element_mobile_automation.html",
                    "/katalon-studio/tutorials/scroll_element_mobile_automation.html",
                    "/docs/katalon-studio-enterprise/test-execution/advanced-guides/mobile-testing/handling-scroll-to-element-in-mobile-automation",
                    "/docs/legacy/katalon-studio-enterprise/test-execution/advanced-guides/mobile-testing/handling-scroll-to-element-in-mobile-automation"
                ]
            },
            {
                "to": "/docs/analyze/reports/view-test-reports/view-test-reports-in-katalon-studio/view-and-customize-execution-log-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/working-with-execution-log.html",
                    "/katalon-studio/docs/working-with-execution-log/",
                    "/display/KD/View+Execution+Log/",
                    "/display/KD/View%20Execution%20Log/",
                    "/x/6ANO/",
                    "/katalon-studio/docs/view-execution-log/",
                    "/katalon-studio/tutorials/viewing_execution_logs.html",
                    "/katalon-studio/docs/view-execution-log.html",
                    "/docs/katalon-studio-enterprise/test-results-analysis/view-and-customize-execution-log",
                    "/docs/legacy/katalon-studio-enterprise/test-results-analysis/view-and-customize-execution-log"
                ]
            },
            {
                "to": "/docs/analyze/reports/view-test-reports/view-test-reports-in-katalon-studio/view-test-suite-and-test-suite-collection-reports-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/test-suite-report.html",
                    "/display/KD/Test+Suite+Report/",
                    "/display/KD/Test%20Suite%20Report/",
                    "/x/v4IY/",
                    "/katalon-studio/docs/test-suite-report/",
                    "/display/KD/Test+Report/",
                    "/katalon-studio/tutorials/viewing_test_suite_reports.html",
                    "/katalon-studio/docs/basic-report.html",
                    "/display/KD/Test+Suite+Collection+Report/",
                    "/display/KD/Test%20Suite%20Collection%20Report/",
                    "/x/7gAM/",
                    "/katalon-studio/docs/test-suite-collection-report/",
                    "/katalon-studio/docs/test-suite-collection-report.html",
                    "/katalon-studio/docs/get-generated-reports-location-at-runtime.html",
                    "/display/KD/Get+generated+Reports+location+at+runtime/",
                    "/display/KD/Get%20generated%20Reports%20location%20at%20runtime/",
                    "/x/ewXR/",
                    "/katalon-studio/docs/get-generated-reports-location-at-runtime/",
                    "/display/KD/Video+Capturing/",
                    "/display/KD/Video%20Capturing/",
                    "/x/qRJO/",
                    "/katalon-studio/docs/video-capturing/",
                    "/katalon-studio/docs/video-capturing.html",
                    "/docs/katalon-studio-enterprise/test-results-analysis/test-suite-and-test-suite-collection-reports",
                    "/docs/legacy/katalon-studio-enterprise/test-results-analysis/test-suite-and-test-suite-collection-reports"
                ]
            },
            {
                "to": "/docs/analyze/reports/view-test-reports/view-test-reports-in-katalon-studio/view-captured-screenshots-in-katalon-studio-reports",
                "from": [
                    "/katalon-studio/docs/capture-screenshots.html",
                    "/docs/katalon-studio-enterprise/test-results-analysis/capture-screenshots",
                    "/docs/legacy/katalon-studio-enterprise/test-results-analysis/capture-screenshots"
                ]
            },
            {
                "to": "/docs/analyze/reports/generate-test-reports/generate-screen-based-videos-in-katalon-studio-reports",
                "from": [
                    "/katalon-studio/docs/record-screen-based-videos.html",
                    "/docs/katalon-studio-enterprise/test-results-analysis/record-screen-based-videos",
                    "/docs/legacy/katalon-studio-enterprise/test-results-analysis/record-screen-based-videos"
                ]
            },
            {
                "to": "/docs/analyze/reports/generate-test-reports/generate-browser-based-videos-in-katalon-studio-reports",
                "from": [
                    "/katalon-studio/docs/record-browser-based-videos.html",
                    "/katalon-studio/docs/screenshots-videos.html",
                    "/docs/katalon-studio-enterprise/test-results-analysis/record-browser-based-videos",
                    "/docs/legacy/katalon-studio-enterprise/test-results-analysis/record-browser-based-videos"
                ]
            },
            {
                "to": "/docs/maintain/refactor-test-objects-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/test-objects-refactoring.html",
                    "/docs/katalon-studio-enterprise/error-management/test-maintenance/test-objects-refactoring",
                    "/docs/legacy/katalon-studio-enterprise/error-management/test-maintenance/test-objects-refactoring"
                ]
            },
            {
                "to": "/docs/maintain/configure-failure-handling-settings-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/failure-handling.html",
                    "/display/KD/Failure%20Handling/",
                    "/x/qAAM/",
                    "/katalon-studio/docs/failure-handling/",
                    "/display/KD/Failure+handling/",
                    "/docs/katalon-studio-enterprise/error-management/test-maintenance/failure-handling",
                    "/docs/legacy/katalon-studio-enterprise/error-management/test-maintenance/failure-handling"
                ]
            },
            {
                "to": "/docs/maintain/configure-class-file-decompilation-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/class-decompiler.html",
                    "/docs/katalon-studio-enterprise/error-management/test-maintenance/decompile-class-file-for-debugging",
                    "/docs/legacy/katalon-studio-enterprise/error-management/test-maintenance/decompile-class-file-for-debugging"
                ]
            },
            {
                "to": "/docs/maintain/fix-broken-web-test-objects-with-time-capsule-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/time-capsule.html",
                    "/docs/katalon-studio-enterprise/error-management/test-maintenance/fixing-broken-web-test-objects-with-time-capsule",
                    "/docs/legacy/katalon-studio-enterprise/error-management/test-maintenance/fixing-broken-web-test-objects-with-time-capsule"
                ]
            },
            {
                "to": "/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-common-exceptions/troubleshoot-common-exceptions-for-test-creation",
                "from": [
                    "/katalon-studio/docs/troubleshooting.html",
                    "/docs/katalon-studio-enterprise/error-management/troubleshooting/troubleshoot-common-exceptions",
                    "/docs/legacy/katalon-studio-enterprise/error-management/troubleshooting/troubleshoot-common-exceptions"
                ]
            },
            {
                "to": "/docs/administer/settings/katalon-api-keys-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/katalon-apikey-70.html",
                    "/docs/katalon-studio-enterprise/integration/katalon-api-keys-in-katalon-studio",
                    "/docs/legacy/katalon-studio-enterprise/integration/katalon-api-keys-in-katalon-studio"
                ]
            },
            // {
            //     "to": "/docs/get-started/set-up-your-workspace/integrate-katalon-testops-with-katalon-studio",
            //     "from": [
            //         "/x/KRhO/",
            //         "/katalon-studio/docs/testops-integration.html",
            //         "/katalon-studio/docs/execute_tests_periodically_on_remote_machines.html",
            //         "/katalon-studio/docs/view-execution-list.html",
            //         "/docs/katalon-studio-enterprise/integration/testops-integration/integrate-katalon-testops-with-katalon-studio",
            //         "/docs/legacy/katalon-studio-enterprise/integration/testops-integration/integrate-katalon-testops-with-katalon-studio"
            //     ]
            // },
            {
                "to": "/docs/analyze/reports/upload-test-reports/upload-test-results-from-katalon-studio-to-katalon-testops-manually",
                "from": [
                    "/katalon-studio/docs/katalon-analytics-beta-integration.html",
                    "/display/KD/Katalon+Analytics+%28Beta%29+Integration/",
                    "/display/KD/Katalon%20Analytics%20%28Beta%29%20Integration/",
                    "/display/KA/Integration+with+Katalon+Studio/",
                    "/display/KA/Integration%20with%20Katalon%20Studio/",
                    "/katalon-analytics/docs/ka-integration-katalon-studio/",
                    "/katalon-analytics/docs/ka-integration-katalon-studio.html",
                    "/katalon-analytics/docs/view-reports/",
                    "/x/mw3R/",
                    "/katalon-analytics/docs/integration-with-katalon-studio.html",
                    "/katalon-analytics/docs/upload-reports-overview.html",
                    "/katalon-analytics/docs/project-management-import-KS.html",
                    "/katalon-analytics/docs/ks_upload_project_kt.html",
                    "/docs/katalon-studio-enterprise/integration/testops-integration/upload-test-results-to-katalon-testops-from-katalon-studio",
                    "/docs/legacy/katalon-studio-enterprise/integration/testops-integration/upload-test-results-to-katalon-testops-from-katalon-studio"
                ]
            },
            {
                "to": "/docs/administer/katalon-platform-packages/testops-private-instance-integration-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/private-instance-integration.html",
                    "/docs/katalon-studio-enterprise/integration/testops-integration/testops-private-instance-integration",
                    "/docs/legacy/katalon-studio-enterprise/integration/testops-integration/testops-private-instance-integration"
                ]
            },
            {
                "to": "/docs/organize/integration-for-organizing-tests/jira-integration/configure-jira-integration-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/jira-integration.html",
                    "/katalon-studio/docs/configure-jira-integration/",
                    "/katalon-studio/docs/BDD-field-jira-cloud/",
                    "/katalon-studio/docs/install-and-use-katalons-jira-add-on/",
                    "/display/KD/Install+and+Use+Katalon%27s+JIRA+add-on/",
                    "/display/KD/Install%20and%20Use%20Katalon%27s%20JIRA%20add-on/",
                    "/x/TBBO/",
                    "/katalon-studio/docs/working-with-jira/",
                    "/display/KD/Configure+JIRA+Integration/",
                    "/display/KD/Configure%20JIRA%20Integration/",
                    "/x/7oEw/",
                    "/display/KD/JIRA%20Integration/",
                    "/display/KD/Working+with+JIRA/",
                    "/display/KD/Working%20with%20JIRA/",
                    "/x/MhBO/",
                    "/katalon-studio/docs/jira-plugin-integration.html",
                    "/katalon-studio/tutorials/katalon_studio_integration_with_jira_overview.html",
                    "/docs/katalon-studio-enterprise/integration/jira-integration/jira-integration",
                    "/docs/katalon-studio-enterprise/integration/jira-integration/configure-jira-integration-in-katalon-studio",
                    "/docs/legacy/katalon-studio-enterprise/integration/jira-integration/configure-jira-integration-in-katalon-studio"
                ]
            },
            {
                "to": "/docs/organize/integration-for-organizing-tests/jira-integration/manage-bdd-test-cases-with-jira-integration",
                "from": [
                    "/katalon-studio/docs/bdd-settings.html",
                    "/katalon-studio/docs/install-and-use-katalons-jira-add-on.html",
                    "/katalon-studio/docs/BDD-field-jira-cloud.html",
                    "/katalon-analytics/docs/bdd-settings.html",
                    "/docs/katalon-studio-enterprise/integration/jira-integration/configure-jira-bdd-settings",
                    "/docs/katalon-studio-enterprise/integration/jira-integration/manage-bdd-test-cases-with-jira-integration",
                    "/docs/legacy/katalon-studio-enterprise/integration/jira-integration/manage-bdd-test-cases-with-jira-integration"
                ]
            },
            {
                "to": "/docs/create-tests/manage-projects/project-settings/git-integration/git-integration-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/git-integration.html",
                    "/display/KD/Git+Integration/",
                    "/display/KD/Git%20Integration/",
                    "/x/foEw/",
                    "/katalon-studio/docs/git-integration/",
                    "/katalon-studio/tutorials/git_integration_introduction/",
                    "/katalon-studio/docs/git_conflict_resolve/",
                    "/katalon-studio/tutorials/git_conflict_resolve/",
                    "/docs/katalon-studio-enterprise/integration/git-integration/git-integration",
                    "/docs/legacy/katalon-studio-enterprise/integration/git-integration/git-integration"
                ]
            },
            {
                "to": "/docs/create-tests/manage-projects/project-settings/git-integration/git-integration-authentication-with-ssh-keys-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/git-integration-authentication.html",
                    "/katalon-studio/docs/bitbucket-integration.html",
                    "/docs/katalon-studio-enterprise/integration/git-integration/git-integration-authentication-with-ssh-keys",
                    "/docs/legacy/katalon-studio-enterprise/integration/git-integration/git-integration-authentication-with-ssh-keys"
                ]
            },
            {
                "to": "/docs/create-tests/manage-test-artifacts/using-git-submodules-to-share-test-artifacts-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/git-integration-submodule.html",
                    "/docs/katalon-studio-enterprise/integration/git-integration/using-git-submodules-to-share-test-artifacts",
                    "/docs/legacy/katalon-studio-enterprise/integration/git-integration/using-git-submodules-to-share-test-artifacts"
                ]
            },
            {
                "to": "/docs/analyze/integration-for-test-analyzing/slack-integration/manage-test-reports-in-slack---katalon-studio-integration",
                "from": [
                    "/katalon-studio/docs/slack-plugin-integration.html",
                    "/katalon-studio/docs/slack-integration.html",
                    "/display/KD/Slack+Integration/",
                    "/display/KD/Slack%20Integration/",
                    "/x/boUw/",
                    "/katalon-studio/docs/slack-integration/",
                    "/docs/katalon-studio-enterprise/integration/slack-integration",
                    "/docs/legacy/katalon-studio-enterprise/integration/slack-integration"
                ]
            },
            {
                "to": "/docs/execute/cloud-based-test-execution/integration-with-other-vendors-for-cloud-execution/kobiton-integration/kobiton-integration-with-katalon-studio",
                "from": [
                    "/katalon-studio/docs/integrate_with_kobiton.html",
                    "/katalon-studio/tutorials/integrate_with_kobiton.html",
                    "/katalon-studio/docs/desired-capabilities-for-kobiton-devices.html",
                    "/display/KD/Desired+Capabilities+for+Kobiton+Devices/",
                    "/display/KD/Desired%20Capabilities%20for%20Kobiton%20Devices/",
                    "/x/DQrR/",
                    "/katalon-studio/docs/desired-capabilities-for-kobiton-devices/",
                    "/katalon-studio/docs/use-additional-desired-capabilities-for-kobiton-devices.html/",
                    "/katalon-studio/docs/enable-kobiton-integration.html",
                    "/display/KD/Enable+Kobiton+Integration/",
                    "/display/KD/Enable%20Kobiton%20Integration/",
                    "/display/KD/Kobiton+Integration/",
                    "/display/KD/Kobiton%20Integration/",
                    "/x/7IEw/",
                    "/katalon-studio/docs/enable-kobiton-integration/",
                    "/docs/katalon-studio-enterprise/integration/kobiton-integration",
                    "/docs/legacy/katalon-studio-enterprise/integration/kobiton-integration"
                ]
            },
            {
                "to": "/docs/execute/cloud-based-test-execution/integration-with-other-vendors-for-cloud-execution/sauce-labs-integration",
                "from": [
                    "/katalon-studio/docs/saucelabs-plugin.html",
                    "/katalon-studio/docs/saucelabs-integration.html",
                    "/display/KD/SauceLabs+Integration/",
                    "/display/KD/SauceLabs%20Integration/",
                    "/x/UBVO/",
                    "/katalon-studio/docs/saucelabs-integration/",
                    "/docs/katalon-studio-enterprise/integration/sauce-labs-integration",
                    "/docs/legacy/katalon-studio-enterprise/integration/sauce-labs-integration"
                ]
            },
            {
                "to": "/docs/execute/cloud-based-test-execution/integration-with-other-vendors-for-cloud-execution/browserstack-integration",
                "from": [
                    "/katalon-studio/docs/browserstack-integration.html",
                    "/display/KD/BrowserStack+Integration/",
                    "/display/KD/BrowserStack%20Integration/",
                    "/x/mRdO/",
                    "/katalon-studio/docs/browserstack-integration/",
                    "/docs/katalon-studio-enterprise/integration/browserstack-integration",
                    "/docs/legacy/katalon-studio-enterprise/integration/browserstack-integration"
                ]
            },
            {
                "to": "/docs/execute/cloud-based-test-execution/integration-with-other-vendors-for-cloud-execution/lambdatest-integration",
                "from": [
                    "/katalon-studio/docs/lambdatest-integration.html",
                    "/display/KD/LambdaTest+Integration/",
                    "/display/KD/LambdaTest%20Integration/",
                    "/katalon-studio/docs/lambdatest-integration/",
                    "/docs/katalon-studio-enterprise/integration/lambdatest-integration",
                    "/docs/legacy/katalon-studio-enterprise/integration/lambdatest-integration"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/using-keywords-in-katalon-studio/web-testing/applitools-integration-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/applitools-integration.html",
                    "/docs/katalon-studio-enterprise/integration/applitools-integration",
                    "/docs/legacy/katalon-studio-enterprise/integration/applitools-integration"
                ]
            },
            {
                "to": "/docs/organize/integration-for-organizing-tests/configure-rally-integration-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/rally-integration.html",
                    "/docs/katalon-studio-enterprise/integration/rally-integration",
                    "/docs/katalon-studio-enterprise/integration/configure-rally-integration-in-katalon-studio",
                    "/docs/legacy/katalon-studio-enterprise/integration/configure-rally-integration-in-katalon-studio"
                ]
            },
            {
                "to": "/docs/organize/integration-for-organizing-tests/configure-qtest-integration-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/qtest-integration.html",
                    "/katalon-studio/docs/enable-qtest-integration.html",
                    "/display/KD/Enable+qTest+Integration/",
                    "/display/KD/Enable%20qTest%20Integration/",
                    "/x/m4Ew/",
                    "/katalon-studio/docs/enable-qtest-integration/",
                    "/display/KD/qTest+Integration/",
                    "/katalon-studio/docs/integrate-test-case.html",
                    "/display/KD/Integrate+test+case/",
                    "/display/KD/Integrate%20test%20case/",
                    "/x/ooEw/",
                    "/katalon-studio/docs/integrate-test-case/",
                    "/katalon-studio/docs/integrate-test-suite.html",
                    "/display/KD/Integrate+test+suite/",
                    "/display/KD/Integrate%20test%20suite/",
                    "/x/x4Ew/",
                    "/katalon-studio/docs/integrate-test-suite/",
                    "/katalon-studio/docs/upload-test-execution.html",
                    "/display/KD/Upload+test+execution/",
                    "/display/KD/Upload%20test%20execution/",
                    "/x/5YEw/",
                    "/katalon-studio/docs/upload-test-execution/",
                    "/docs/katalon-studio-enterprise/integration/qtest-integration",
                    "/docs/katalon-studio-enterprise/integration/configure-qtest-integration-in-katalon-studio",
                    "/docs/legacy/katalon-studio-enterprise/integration/configure-qtest-integration-in-katalon-studio"
                ]
            },
            {
                "to": "/docs/organize/integration-for-organizing-tests/configure-testrail-integration-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/testrail-integration.html",
                    "/katalon-studio/docs/katalon-testrail-integration.html",
                    "/katalon-studio/tutorials/katalon-testrail-integration.html",
                    "/docs/katalon-studio-enterprise/integration/testrail-integration",
                    "/docs/katalon-studio-enterprise/integration/configure-testrail-integration-in-katalon-studio",
                    "/docs/legacy/katalon-studio-enterprise/integration/configure-testrail-integration-in-katalon-studio"
                ]
            },
            {
                "to": "/docs/organize/integration-for-organizing-tests/testlink-integration",
                "from": [
                    "/katalon-studio/docs/testlink-integration.html",
                    "/docs/katalon-studio-enterprise/integration/testlink-integration",
                    "/docs/legacy/katalon-studio-enterprise/integration/testlink-integration"
                ]
            },
            {
                "to": "/docs/execute/cloud-based-test-execution/integration-with-other-vendors-for-cloud-execution/app-center-integration",
                "from": [
                    "/katalon-studio/docs/app-center.html",
                    "/docs/katalon-studio-enterprise/integration/app-center-integration",
                    "/docs/legacy/katalon-studio-enterprise/integration/app-center-integration"
                ]
            },
            {
                "to": "/docs/execute/cloud-based-test-execution/integration-with-other-vendors-for-cloud-execution/aws-device-farm-integration",
                "from": [
                    "/katalon-studio/docs/aws-device-farm.html",
                    "/docs/katalon-studio-enterprise/integration/aws-device-farm-integration",
                    "/docs/legacy/katalon-studio-enterprise/integration/aws-device-farm-integration"
                ]
            },
            {
                "to": "/docs/execute/cicd-integrations/aws-codebuild-integration",
                "from": [
                    "/katalon-studio/docs/aws-codebuild-docker-image-integration.html",
                    "/docs/katalon-studio-enterprise/integration/integrate-aws-codebuild-with-katalon-docker-image",
                    "/docs/legacy/katalon-studio-enterprise/integration/integrate-aws-codebuild-with-katalon-docker-image"
                ]
            },
            {
                "to": "/docs/organize/integration-for-organizing-tests/configure-azure-devops-test-plans-integration-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/azure-devops-test-plans.html",
                    "/katalon-studio/docs/azure-devops-integration.html",
                    "/docs/katalon-studio-enterprise/integration/integration-with-azure-devops-test-plans",
                    "/docs/katalon-studio-enterprise/integration/configure-azure-devops-test-plans-integration-in-katalon-studio",
                    "/docs/legacy/katalon-studio-enterprise/integration/configure-azure-devops-test-plans-integration-in-katalon-studio"
                ]
            },
            {
                "to": "/docs/create-tests/create-test-cases/combine-katalon-studio-with-sap-scripting-tracker-for-windows",
                "from": [
                    "/katalon-studio/docs/katalon-sap-scripting-tracker.html",
                    "/docs/katalon-studio-enterprise/integration/combine-katalon-studio-with-sap-scripting-tracker-for-windows",
                    "/docs/legacy/katalon-studio-enterprise/integration/combine-katalon-studio-with-sap-scripting-tracker-for-windows"
                ]
            },
            {
                "to": "/docs/plugins-and-add-ons/katalon-store/katalon-studio-plugins/integration-plugins-on-katalon-store",
                "from": [
                    "/katalon-studio/docs/integration-plugins.html",
                    "/docs/katalon-studio-enterprise/extend-katalon-studio/katalon-studio-plugins/integration-plugins",
                    "/docs/legacy/katalon-studio-enterprise/extend-katalon-studio/katalon-studio-plugins/integration-plugins"
                ]
            },
            {
                "to": "/docs/plugins-and-add-ons/katalon-store/katalon-studio-plugins/using-katalon-store-plugins",
                "from": [
                    "/katalon-studio/docs/kse-use-plugins.html",
                    "/katalon-studio/docs/offline-plugin.html",
                    "/katalon-studio/docs/private-plugins.html",
                    "/katalon-store/docs/user/plugin-console-installation/",
                    "/katalon-store/docs/user/plugin-console-installation.html",
                    "/docs/katalon-studio-enterprise/extend-katalon-studio/katalon-studio-plugins/using-plugins",
                    "/docs/legacy/katalon-studio-enterprise/extend-katalon-studio/katalon-studio-plugins/using-plugins"
                ]
            },
            {
                "to": "/docs/plugins-and-add-ons/katalon-store/katalon-studio-plugins/installing-plugin-offline-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/install-plugin-offline.html",
                    "/docs/katalon-studio-enterprise/extend-katalon-studio/katalon-studio-plugins/installing-plugin-offline",
                    "/docs/legacy/katalon-studio-enterprise/extend-katalon-studio/katalon-studio-plugins/installing-plugin-offline"
                ]
            },
            {
                "to": "/docs/plugins-and-add-ons/katalon-store/katalon-studio-plugins/create-your-first-katalon-studio-plugin",
                "from": [
                    "/katalon-store/docs/publisher/create-plugin.html",
                    "/katalon-store/docs/publisher/create-plugin/",
                    "/docs/katalon-studio-enterprise/extend-katalon-studio/katalon-studio-plugins/create-your-first-katalon-studio-plugin",
                    "/docs/legacy/katalon-studio-enterprise/extend-katalon-studio/katalon-studio-plugins/create-your-first-katalon-studio-plugin"
                ]
            },
            {
                "to": "/docs/plugins-and-add-ons/katalon-store/katalon-studio-plugins/debug-your-platform-plugin-using-eclipse-ide",
                "from": [
                    "/katalon-store/docs/publisher/debug-platform-plugin.html",
                    "/katalon-store/docs/publisher/debug-platform-plugin/",
                    "/docs/katalon-studio-enterprise/extend-katalon-studio/katalon-studio-plugins/debug-your-platform-plugin-using-eclipse-ide",
                    "/docs/legacy/katalon-studio-enterprise/extend-katalon-studio/katalon-studio-plugins/debug-your-platform-plugin-using-eclipse-ide"
                ]
            },
            {
                "to": "/docs/plugins-and-add-ons/katalon-store/katalon-studio-plugins/develop-a-customized-report-plugin-in-katalon-studio",
                "from": [
                    "/katalon-store/docs/publisher/generate-customized-report.html",
                    "/katalon-store/docs/publisher/generate-customized-report/",
                    "/docs/katalon-studio-enterprise/extend-katalon-studio/katalon-studio-plugins/develop-a-customized-report-plugin",
                    "/docs/legacy/katalon-studio-enterprise/extend-katalon-studio/katalon-studio-plugins/develop-a-customized-report-plugin"
                ]
            },
            {
                "to": "/docs/plugins-and-add-ons/katalon-store/katalon-studio-plugins/generate-groovy-doc-for-a-plugin-on-katalon-store",
                "from": [
                    "/katalon-store/docs/publisher/generate-groovydoc.html",
                    "/katalon-store/docs/publisher/generate-groovydoc/",
                    "/docs/katalon-studio-enterprise/extend-katalon-studio/katalon-studio-plugins/generate-groovy-doc-for-a-plugin",
                    "/docs/legacy/katalon-studio-enterprise/extend-katalon-studio/katalon-studio-plugins/generate-groovy-doc-for-a-plugin"
                ]
            },
            {
                "to": "/docs/plugins-and-add-ons/katalon-store/katalon-studio-plugins/example-plugin-build-katalon-studio-testrail-integration-plugin",
                "from": [
                    "/katalon-store/docs/publisher/example-plugin-testrail.html",
                    "/katalon-store/docs/publisher/example-plugin-testrail/",
                    "/docs/katalon-studio-enterprise/extend-katalon-studio/katalon-studio-plugins/example-plugin-build-katalon-studios-testrail-integration-plugin",
                    "/docs/legacy/katalon-studio-enterprise/extend-katalon-studio/katalon-studio-plugins/example-plugin-build-katalon-studios-testrail-integration-plugin"
                ]
            },
            {
                "to": "/docs/maintain/auto-healing-smart-xpath-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/auto-healing-smart-xpath.html",
                    "/docs/katalon-studio-enterprise/extend-katalon-studio/katalon-studio-plugins/auto-healing-smart-xpath",
                    "/docs/legacy/katalon-studio-enterprise/extend-katalon-studio/katalon-studio-plugins/auto-healing-smart-xpath"
                ]
            },
            {
                "to": "/docs/organize/manage-tests/dynamic-test-suite/basic-search-for-dynamic-test-suite",
                "from": [
                    "/katalon-studio/docs/basic-search-for-dynamic-querying-test-suite.html",
                    "/docs/katalon-studio-enterprise/extend-katalon-studio/katalon-studio-plugins/basic-search-for-dynamic-test-suite",
                    "/docs/legacy/katalon-studio-enterprise/extend-katalon-studio/katalon-studio-plugins/basic-search-for-dynamic-test-suite"
                ]
            },
            {
                "to": "/docs/execute/schedule-test-execution/test-suite-collection-scheduler-for-katalon-studio",
                "from": [
                    "/katalon-studio/docs/test-suite-collection-scheduler.html",
                    "/docs/katalon-studio-enterprise/extend-katalon-studio/katalon-studio-plugins/test-suite-collection-scheduler",
                    "/docs/legacy/katalon-studio-enterprise/extend-katalon-studio/katalon-studio-plugins/test-suite-collection-scheduler"
                ]
            },
            {
                "to": "/docs/organize/manage-tests/dynamic-test-suite/test-case-management-with-tags",
                "from": [
                    "/katalon-studio/docs/test-case-management-with-tags.html",
                    "/docs/katalon-studio-enterprise/extend-katalon-studio/katalon-studio-plugins/test-case-management-with-tags",
                    "/docs/legacy/katalon-studio-enterprise/extend-katalon-studio/katalon-studio-plugins/test-case-management-with-tags"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/custom-keywords/introduction-to-custom-keywords-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/introduction-to-custom-keywords.html",
                    "/display/KD/Introduction+to+Custom+Keywords/",
                    "/display/KD/Introduction%20to%20Custom%20Keywords/",
                    "/x/8gAM/",
                    "/katalon-studio/docs/introduction-to-custom-keywords/",
                    "/display/KD/Define+custom+keywords/",
                    "/katalon-studio/tutorials/create_custom_keyword.html",
                    "/katalon-studio/tutorials/create-custom-keyword/",
                    "/docs/katalon-studio-enterprise/extend-katalon-studio/custom-keywords/introduction-to-custom-keywords",
                    "/docs/legacy/katalon-studio-enterprise/extend-katalon-studio/custom-keywords/introduction-to-custom-keywords"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/custom-keywords/sample-custom-keywords-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/sample-custom-keywords.html",
                    "/display/KD/Sample+Custom+Keywords/",
                    "/display/KD/Sample%20Custom%20Keywords/",
                    "/x/3QHR/",
                    "/katalon-studio/docs/sample-custom-keywords/",
                    "/docs/katalon-studio-enterprise/extend-katalon-studio/custom-keywords/sample-custom-keywords",
                    "/docs/legacy/katalon-studio-enterprise/extend-katalon-studio/custom-keywords/sample-custom-keywords"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/custom-keywords/execute-test-with-katalon-studio-in-internet-explorer-ie-mode-in-microsoft-edge",
                "from": [
                    "/katalon-studio/docs/run-test-in-edge-with-IE-mode.html",
                    "/docs/katalon-studio-enterprise/extend-katalon-studio/custom-keywords/execute-test-in-internet-explorer-ie-mode-in-microsoft-edge",
                    "/docs/legacy/katalon-studio-enterprise/extend-katalon-studio/custom-keywords/execute-test-in-internet-explorer-ie-mode-in-microsoft-edge"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/custom-keywords/flutter-based-application-testing-with-custom-settext-keyword-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/flutter-based-application-testing.html",
                    "/docs/katalon-studio-enterprise/extend-katalon-studio/custom-keywords/flutter-based-application-testing-with-custom-settext-keyword",
                    "/docs/legacy/katalon-studio-enterprise/extend-katalon-studio/custom-keywords/flutter-based-application-testing-with-custom-settext-keyword"
                ]
            },
            // {
            //     "to": "/docs/create-tests/keywords/custom-keywords/importexport-keywords-in-katalon-studio",
            //     "from": [
            //         "/katalon-studio/docs/importexport-keywords.html",
            //         "/x/GAfR/",
            //         "/katalon-studio/docs/importexport-keywords/",
            //         "/docs/katalon-studio-enterprise/extend-katalon-studio/custom-keywords/importexport-keywords",
            //         "/docs/legacy/katalon-studio-enterprise/extend-katalon-studio/custom-keywords/importexport-keywords"
            //     ]
            // },
            {
                "to": "/docs/create-tests/keywords/custom-keywords/custom-keywords-refactoring-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/custom-keywords-refactor.html",
                    "/docs/katalon-studio-enterprise/extend-katalon-studio/custom-keywords/custom-keywords-refactoring",
                    "/docs/legacy/katalon-studio-enterprise/extend-katalon-studio/custom-keywords/custom-keywords-refactoring"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/custom-keywords/import-custom-keywords-classes-recursively-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/import-custom-keywords-classes-recursively.html",
                    "/display/KD/Import+Custom+Keywords+classes+recursively/",
                    "/display/KD/Import%20Custom%20Keywords%20classes%20recursively/",
                    "/x/QwXR/",
                    "/katalon-studio/docs/import-custom-keywords-classes-recursively/",
                    "/docs/katalon-studio-enterprise/extend-katalon-studio/custom-keywords/import-custom-keywords-classes-recursively",
                    "/docs/legacy/katalon-studio-enterprise/extend-katalon-studio/custom-keywords/import-custom-keywords-classes-recursively"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/custom-keywords/mark-tests-status-for-a-custom-keyword-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/mark-tests-status-for-a-custom-keyword.html",
                    "/display/KD/Mark+test%27s+status+for+a+Custom+Keyword/",
                    "/display/KD/Mark%20test%27s%20status%20for%20a%20Custom%20Keyword/",
                    "/x/xgXR/",
                    "/katalon-studio/docs/mark-tests-status-for-a-custom-keyword/",
                    "/docs/katalon-studio-enterprise/extend-katalon-studio/custom-keywords/mark-tests-status-for-a-custom-keyword",
                    "/docs/legacy/katalon-studio-enterprise/extend-katalon-studio/custom-keywords/mark-tests-status-for-a-custom-keyword"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/custom-keywords/handling-databases-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/handling-databases.html",
                    "/display/KD/Handling+Databases/",
                    "/display/KD/Handling%20Databases/",
                    "/x/Nw3R/",
                    "/katalon-studio/docs/handling-databases/",
                    "/docs/katalon-studio-enterprise/extend-katalon-studio/custom-keywords/handling-databases",
                    "/docs/legacy/katalon-studio-enterprise/extend-katalon-studio/custom-keywords/handling-databases"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/custom-keywords/build-custom-keywords-with-settings-in-katalon-studio",
                "from": [
                    "/katalon-store/docs/publisher/build-CK-settings.html",
                    "/katalon-store/docs/user/build-CK-settings/",
                    "/docs/katalon-studio-enterprise/extend-katalon-studio/custom-keywords/build-custom-keywords-with-settings",
                    "/docs/legacy/katalon-studio-enterprise/extend-katalon-studio/custom-keywords/build-custom-keywords-with-settings"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/custom-keywords/how-to-perform-database-testing-using-katalon-studio",
                "from": [
                    "/katalon-studio/docs/connect_db_gui_testing.html",
                    "/katalon-studio/tutorials/connect_db_gui_testing.html",
                    "/docs/katalon-studio-enterprise/extend-katalon-studio/custom-keywords/how-to-perform-database-testing-using-katalon-studio",
                    "/docs/legacy/katalon-studio-enterprise/extend-katalon-studio/custom-keywords/how-to-perform-database-testing-using-katalon-studio"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/custom-keywords/how-to-use-a-custom-keyword-from-other-custom-keywords-and-step-definition-classes-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/how-to-use-custom-keyword-in-groovy-class.html",
                    "/katalon-studio/tutorials/how-to-use-custom-keyword-in-groovy-class.html",
                    "/docs/katalon-studio-enterprise/extend-katalon-studio/custom-keywords/how-to-use-a-custom-keyword-from-other-custom-keywords-and-step-definition-classes",
                    "/docs/legacy/katalon-studio-enterprise/extend-katalon-studio/custom-keywords/how-to-use-a-custom-keyword-from-other-custom-keywords-and-step-definition-classes"
                ]
            },
            // {
            //     "to": "/docs/general-information/proof-of-concept/dependencies-management-with-native-gradle-support-poc-in-katalon-studio",
            //     "from": [
            //         "/katalon-studio/docs/dependencies-management-gradle-support.html",
            //         "/docs/katalon-studio-enterprise/extend-katalon-studio/proof-of-concept/dependencies-management-with-native-gradle-support-poc",
            //         "/docs/legacy/katalon-studio-enterprise/extend-katalon-studio/proof-of-concept/dependencies-management-with-native-gradle-support-poc"
            //     ]
            // },
            // {
            //     "to": "/docs/general-information/proof-of-concept/parameterize-azure-devops-test-case-id-list-in-katalon-studio-poc",
            //     "from": [
            //         "/katalon-studio/docs/parameterize-ado-test-case-id.html",
            //         "/docs/katalon-studio-enterprise/extend-katalon-studio/proof-of-concept/parameterize-azure-devops-test-case-id-list-poc",
            //         "/docs/legacy/katalon-studio-enterprise/extend-katalon-studio/proof-of-concept/parameterize-azure-devops-test-case-id-list-poc"
            //     ]
            // },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-service-keywords/ws-validate-an-xml-string-against-a-schema",
                "from": [
                    "/katalon-studio/docs/ws-validate-xml-schema.html",
                    "/docs/katalon-studio-enterprise/extend-katalon-studio/proof-of-concept/validate-json-xml-string-against-a-schema-for-api-testing-poc/ws-validate-an-xml-string-against-a-schema-poc",
                    "/docs/katalon-studio-enterprise/keywords/web-service-keywords/ws-validate-an-xml-string-against-a-schema",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-service-keywords/ws-validate-an-xml-string-against-a-schema"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-service-keywords/ws-validate-json-string-against-a-schema",
                "from": [
                    "/katalon-studio/docs/ws-validate-json-schema.html",
                    "/docs/katalon-studio-enterprise/extend-katalon-studio/proof-of-concept/validate-json-xml-string-against-a-schema-for-api-testing-poc/ws-validate-json-string-against-a-schema-poc",
                    "/docs/katalon-studio-enterprise/keywords/web-service-keywords/ws-validate-json-string-against-a-schema",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-service-keywords/ws-validate-json-string-against-a-schema"
                ]
            },
            {
                "to": "/docs/create-tests/test-objects/api-test-objects/graphql-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/graphql.html",
                    "/docs/katalon-studio-enterprise/extend-katalon-studio/proof-of-concept/graphql-poc/graphql-poc",
                    "/docs/katalon-studio-enterprise/test-design/web-services-test-design/graphql",
                    "/docs/legacy/katalon-studio-enterprise/test-design/web-services-test-design/graphql"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/using-keywords-in-katalon-studio/windows-testing/execute-windows-commands-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/execute-windows-commands.html",
                    "/display/KD/Execute+Windows+commands/",
                    "/display/KD/Execute%20Windows%20commands/",
                    "/x/QQXR/",
                    "/katalon-studio/docs/execute-windows-commands/",
                    "/docs/katalon-studio-enterprise/tips-and-tricks/execute-windows-commands",
                    "/docs/legacy/katalon-studio-enterprise/tips-and-tricks/execute-windows-commands"
                ]
            },
            {
                "to": "/docs/create-tests/manage-projects/project-settings/desired-capabilities/install-chrome-extensions-at-runtime-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/install-chrome-extensions-at-runtime.html",
                    "/display/KD/Install+Chrome+extensions+at+runtime/",
                    "/display/KD/Install%20Chrome%20extensions%20at%20runtime/",
                    "/x/ZQXR/",
                    "/katalon-studio/docs/install-chrome-extensions-at-runtime/",
                    "/docs/katalon-studio-enterprise/tips-and-tricks/install-chrome-extensions-at-runtime",
                    "/docs/legacy/katalon-studio-enterprise/tips-and-tricks/install-chrome-extensions-at-runtime"
                ]
            },
            {
                "to": "/docs/create-tests/manage-projects/set-up-projects/windows-desktop-apps-testing/katalon-with-winium-for-desktop-applications-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/katalon-with-winium-for-desktop-applications.html",
                    "/display/KD/Katalon+with+Winium+for+Desktop+Applications/",
                    "/display/KD/Katalon%20with%20Winium%20for%20Desktop%20Applications/",
                    "/x/xAzR/",
                    "/katalon-studio/docs/katalon-with-winium-for-desktop-applications/",
                    "/docs/katalon-studio-enterprise/tips-and-tricks/katalon-with-winium-for-desktop-applications",
                    "/docs/legacy/katalon-studio-enterprise/tips-and-tricks/katalon-with-winium-for-desktop-applications"
                ]
            },
            {
                "to": "/docs/create-tests/manage-projects/project-settings/desired-capabilities/manage-androids-permission-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/manage-androids-permission.html",
                    "/display/KD/Manage+Android%27s+permission/",
                    "/display/KD/Manage%20Android%27s%20permission/",
                    "/x/ggXR/",
                    "/katalon-studio/docs/manage-androids-permission/",
                    "/docs/katalon-studio-enterprise/tips-and-tricks/manage-androids-permission",
                    "/docs/legacy/katalon-studio-enterprise/tips-and-tricks/manage-androids-permission"
                ]
            },
            {
                "to": "/docs/create-tests/test-objects/web-test-objects/optimizing-object-identification-and-tools-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/optimizing-object-identification-and-tools.html",
                    "/display/KD/Optimizing+Object+Identification+and+Tools/",
                    "/display/KD/Optimizing%20Object%20Identification%20and%20Tools/",
                    "/x/fhlO/",
                    "/katalon-studio/docs/optimizing-object-identification-and-tools/",
                    "/docs/katalon-studio-enterprise/tips-and-tricks/optimizing-object-identification-and-tools",
                    "/docs/legacy/katalon-studio-enterprise/tips-and-tricks/optimizing-object-identification-and-tools"
                ]
            },
            {
                "to": "/docs/create-tests/manage-projects/set-up-projects/mobile-testing/reduce-execution-time-in-mobile-testing-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/mobile-reduce-execution-time.html",
                    "/docs/katalon-studio-enterprise/tips-and-tricks/reduce-execution-time-in-mobile-testing",
                    "/docs/legacy/katalon-studio-enterprise/tips-and-tricks/reduce-execution-time-in-mobile-testing"
                ]
            },
            {
                "to": "/docs/create-tests/manage-projects/set-up-projects/mobile-testing/retrieve-mobiles-session-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/retrieve-mobiles-session.html",
                    "/display/KD/Retrieve+mobile%27s+session/",
                    "/display/KD/Retrieve%20mobile%27s%20session/",
                    "/x/fwXR/",
                    "/katalon-studio/docs/retrieve-mobiles-session/",
                    "/docs/katalon-studio-enterprise/tips-and-tricks/retrieve-mobiles-session",
                    "/docs/legacy/katalon-studio-enterprise/tips-and-tricks/retrieve-mobiles-session"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/using-keywords-in-katalon-studio/web-testing/understand-waiting-keywords-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/understand-waiting-keywords.html",
                    "/docs/katalon-studio-enterprise/tips-and-tricks/understand-waiting-keywords",
                    "/docs/legacy/katalon-studio-enterprise/tips-and-tricks/understand-waiting-keywords"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/using-keywords-in-katalon-studio/web-testing/using-autoit-for-authentication-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/using-autoit-for-authentication-in-katalon-studio.html",
                    "/display/KD/Using+autoIT+for+authentication+in+Katalon+Studio/",
                    "/display/KD/Using%20autoIT%20for%20authentication%20in%20Katalon%20Studio/",
                    "/x/9xxO/",
                    "/katalon-studio/docs/using-autoit-for-authentication-in-katalon-studio/",
                    "/docs/katalon-studio-enterprise/tips-and-tricks/using-autoit-for-authentication-in-katalon-studio",
                    "/docs/legacy/katalon-studio-enterprise/tips-and-tricks/using-autoit-for-authentication-in-katalon-studio"
                ]
            },
            {
                "to": "/docs/create-tests/manage-projects/project-settings/katalon-studio-project-settings-overview",
                "from": [
                    "/katalon-studio/docs/execution-settings.html",
                    "/display/KD/Execution+Settings/",
                    "/display/KD/Execution%20Settings/",
                    "/x/cgFO/",
                    "/katalon-studio/docs/execution-settings/",
                    "/display/KD/Emails+Settings/",
                    "/display/KD/Emails%20Settings/",
                    "/x/tAFO/",
                    "/katalon-studio/docs/emails-settings/",
                    "/display/KD/Network+Settings/",
                    "/display/KD/Network%20Settings/",
                    "/x/gQ1O/",
                    "/katalon-studio/docs/network-settings/",
                    "/katalon-studio/docs/network-settings.html",
                    "/docs/katalon-studio-enterprise/create-tests-and-projects/manage-projects/project-settings/project-settings-overview",
                    "/docs/legacy/katalon-studio-enterprise/create-tests-and-projects/manage-projects/project-settings/project-settings-overview"
                ]
            },
            {
                "to": "/docs/create-tests/create-test-cases/statements/statements-in-katalon-studio-overview",
                "from": [
                    "/katalon-studio/docs/statements.html",
                    "/katalon-studio/docs/method-call-statements.html",
                    "/display/KD/Method+Call+Statements/",
                    "/display/KD/Method%20Call%20Statements/",
                    "/x/sgAM/",
                    "/katalon-studio/docs/method-call-statements/",
                    "/katalon-studio/docs/control-statements.html",
                    "/display/KD/Control+Statements/",
                    "/display/KD/Control%20Statements/",
                    "/x/rAAM/",
                    "/katalon-studio/docs/control-statements/",
                    "/katalon-studio/tutorials/common_condition_control_statements.html",
                    "/katalon-studio/docs/binary-statements.html",
                    "/display/KD/Binary+Statements/",
                    "/display/KD/Binary%20Statements/",
                    "/x/rgAM/",
                    "/katalon-studio/docs/binary-statements/",
                    "/katalon-studio/docs/assert-statements.html",
                    "/display/KD/Assert+Statements/",
                    "/display/KD/Assert%20Statements/",
                    "/x/sAAM/",
                    "/katalon-studio/docs/assert-statements/",
                    "/tutorials/common-validation/",
                    "/katalon-studio/tutorials/common_validation_statements_katalon_studio.html",
                    "/katalon-studio/docs/define-method.html",
                    "/display/KD/Define+Method/",
                    "/display/KD/Define%20Method/",
                    "/x/tgAM/",
                    "/katalon-studio/docs/define-method/",
                    "/docs/katalon-studio-enterprise/create-tests-and-projects/manage-projects/statements/statements-overview",
                    "/docs/legacy/katalon-studio-enterprise/create-tests-and-projects/manage-projects/statements/statements-overview"
                ]
            },
            {
                "to": "/docs/create-tests/manage-projects/set-up-projects/mobile-testing/testing-mobile-apps-using-katalon-studio-and-kobiton-cloud-based-device-farm",
                "from": [
                    "/katalon-studio/docs/testing_mobile_apps_using_katalon_studio_kobiton.html",
                    "/katalon-studio/tutorials/testing_mobile_apps_using_katalon_studio_kobiton.html",
                    "/docs/katalon-studio-enterprise/test-design/mobile-test-design/testing-mobile-apps-using-katalon-studio-and-kobiton-cloud-based-device-farm",
                    "/docs/legacy/katalon-studio-enterprise/test-design/mobile-test-design/testing-mobile-apps-using-katalon-studio-and-kobiton-cloud-based-device-farm"
                ]
            },
            {
                "to": "/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-web-automated-testing/troubleshoot-web-test-execution-exceptions-overview",
                "from": [
                    "/katalon-studio/docs/troubleshoot-common-execution-exceptions-web-test.html",
                    "/display/KD/Troubleshooting+common+issues+related+to+interacting+with+an+element/",
                    "/display/KD/Troubleshooting%20common%20issues%20related%20to%20interacting%20with%20an%20element/",
                    "/x/awXR/",
                    "/katalon-studio/docs/troubleshooting-common-issues-related-to-interacting-with-an-element/",
                    "/katalon-studio/docs/troubleshooting-common-issues-related-to-interacting-with-an-element.html",
                    "/display/KD/troubleshooting+web+automated+testing/",
                    "/display/KD/troubleshooting%20web%20automated%20testing/",
                    "/katalon-studio/docs/troubleshooting-web-automated-testing/",
                    "/katalon-studio/docs/troubleshooting-web-automated-testing.html",
                    "/docs/katalon-studio-enterprise/error-management/troubleshooting/troubleshoot-web-automated-testing/troubleshoot-web-test-execution-exceptions-overview",
                    "/docs/legacy/katalon-studio-enterprise/error-management/troubleshooting/troubleshoot-web-automated-testing/troubleshoot-web-test-execution-exceptions-overview"
                ]
            },
            {
                "to": "/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-mobile-automated-testing/troubleshooting-automated-mobile-testing-overview",
                "from": [
                    "/katalon-studio/docs/troubleshooting-automated-mobile-testing.html",
                    "/display/KD/Troubleshooting+automated+mobile+testing/",
                    "/display/KD/Troubleshooting%20automated%20mobile%20testing/",
                    "/x/fBdO/",
                    "/katalon-studio/docs/troubleshooting-automated-mobile-testing/",
                    "/docs/katalon-studio-enterprise/error-management/troubleshooting/troubleshoot-mobile-automated-testing/troubleshooting-automated-mobile-testing-overview",
                    "/docs/legacy/katalon-studio-enterprise/error-management/troubleshooting/troubleshoot-mobile-automated-testing/troubleshooting-automated-mobile-testing-overview"
                ]
            },
            {
                "to": "/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-windows-automated-testing/troubleshoot-windows-automated-testing-overview",
                "from": [
                    "/katalon-studio/docs/troubleshoot-common-execution-exceptions-windows.html",
                    "/docs/katalon-studio-enterprise/error-management/troubleshooting/troubleshoot-windows-automated-testing/troubleshoot-windows-automated-testing-overview",
                    "/docs/legacy/katalon-studio-enterprise/error-management/troubleshooting/troubleshoot-windows-automated-testing/troubleshoot-windows-automated-testing-overview"
                ]
            },
            {
                "to": "/docs/create-tests/troubleshooting-for-test-creation/known-issues-and-limitations",
                "from": [
                    "/katalon-studio/docs/known-issues-limitations.html",
                    "/x/yIMw/",
                    "/katalon-studio/docs/known-issues-limitations/",
                    "/docs/katalon-studio-enterprise/error-management/troubleshooting/known-issues-and-limitations",
                    "/docs/legacy/katalon-studio-enterprise/error-management/troubleshooting/known-issues-and-limitations"
                ]
            },
            {
                "to": "/docs/plugins-and-add-ons/katalon-store/katalon-studio-plugins/how-to-develop-a-custom-keywords-plugin-in-katalon-studio",
                "from": [
                    "/katalon-store/docs/publisher/develop-custom-keywords.html",
                    "/katalon-store/docs/publisher/develop-custom-keywords/",
                    "/docs/katalon-studio-enterprise/extend-katalon-studio/katalon-studio-plugins/how-to-develop-a-custom-keywords-plugin",
                    "/docs/legacy/katalon-studio-enterprise/extend-katalon-studio/katalon-studio-plugins/how-to-develop-a-custom-keywords-plugin"
                ]
            },
            {
                "to": "/docs/plugins-and-add-ons/katalon-store/katalon-studio-plugins/how-to-resolve-external-dependencies-for-a-plugin-in-katalon-studio",
                "from": [
                    "/katalon-store/docs/publisher/resolve-external-dependencies.html",
                    "/katalon-store/docs/publisher/resolve-external-dependencies/",
                    "/docs/katalon-studio-enterprise/extend-katalon-studio/katalon-studio-plugins/how-to-resolve-external-dependencies-for-a-plugin",
                    "/docs/legacy/katalon-studio-enterprise/extend-katalon-studio/katalon-studio-plugins/how-to-resolve-external-dependencies-for-a-plugin"
                ]
            },
            {
                "to": "/docs/create-tests/test-objects/api-test-objects/schema-compliance-testing-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/schema-validation.html",
                    "/docs/katalon-studio-enterprise/extend-katalon-studio/proof-of-concept/validate-json-xml-string-against-a-schema-for-api-testing-poc/validate-jsonxml-string-against-a-schema-for-api-testing-poc",
                    "/docs/katalon-studio-enterprise/test-design/web-services-test-design/working-with-apiweb-services-project/schema-compliance-testing-in-katalon-studio",
                    "/docs/legacy/katalon-studio-enterprise/test-design/web-services-test-design/working-with-apiweb-services-project/schema-compliance-testing-in-katalon-studio"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-service-keywords/ws-validate-graphql-request-against-a-graphql-schema",
                "from": [
                    "/katalon-studio/docs/ws-validate-graphql-body-schema.html",
                    "/docs/katalon-studio-enterprise/extend-katalon-studio/proof-of-concept/graphql-poc/ws-validate-graphql-request-body-against-a-graphql-schema-poc",
                    "/docs/katalon-studio-enterprise/keywords/web-service-keywords/ws-validate-graphql-request-against-a-graphql-schema",
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-service-keywords/ws-validate-graphql-request-against-a-graphql-schema"
                ]
            },
            {
                "to": "/docs/analyze/analytics/visual-testing/use-testops-visual-testing",
                "from": [
                    "/katalon-analytics/docs/ks-visual-testing.html",
                    "/docs/katalon-testops/visual-testing/use-testops-visual-testing",
                    "/docs/legacy/katalon-testops/visual-testing/use-testops-visual-testing"
                ]
            },
            // {
            //     "to": "/docs/release-notes/katalon-testops/katalon-testops-release-notes",
            //     "from": [
            //         "/katalon-analytics/docs/testops-releases-2021.html",
            //         "/docs/katalon-testops/release-notes/2021",
            //         "/docs/legacy/katalon-testops/release-notes/2021",
            //         "/docs/general-information/release-notes/katalon-testops/2021",
            //         "/docs/general-information/release-notes/katalon-testops/katalon-testops-release-notes-2021",
            //         "/docs/general-information/release-notes/katalon-testops/katalon-testops-release-notes-2022",
            //         "/katalon-analytics/docs/testops-releases-2022.html",
            //         "/docs/katalon-testops/release-notes/2022",
            //         "/docs/legacy/katalon-testops/release-notes/2022",
            //         "/docs/general-information/release-notes/katalon-testops/katalon-testops-release-notes"
            //     ]
            // },
            // {
            //     "to": "/docs/general-information/release-notes/katalon-studio/katalon-studio-release-notes-version-8.x",
            //     "from": [
            //         "/docs/general-information/release-notes/katalon-studio/version-8.x"
            //     ]
            // },
            // {
            //     "to": "/docs/general-information/release-notes/katalon-studio/katalon-studio-release-notes-version-6.x",
            //     "from": [
            //         "/docs/general-information/release-notes/katalon-studio/version-6.x"
            //     ]
            // },
            {
                "to": "/docs/organize/integration-for-organizing-tests/xray-integration/configure-xray-integration-in-katalon-testops",
                "from": [
                    "/docs/organize/integration-for-organizing-tests/xray-integration/enable-xray-integration-in-katalon-testops"
                ]
            },
            {
                "to": "/docs/create-tests/create-test-cases/statements/binary-statements",
                "from": [
                    "/docs/legacy/katalon-studio-enterprise/create-tests-and-projects/manage-projects/statements/binary-statements"
                ]
            },
            {
                "to": "/docs/analyze/integration-for-test-analyzing/jira-integration/submit-an-issue-from-katalon-studio-to-jira",
                "from": [
                    "/docs/legacy/katalon-studio-enterprise/integration/jira-integration/submit-an-issue-from-katalon-studio-to-jira"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-service-keywords/ws-get-elements-count",
                "from": [
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-service-keywords/ws-get-elements-count"
                ]
            },
            {
                "to": "/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-mobile-automated-testing/carthage-is-not-found",
                "from": [
                    "/docs/legacy/katalon-studio-enterprise/error-management/troubleshooting/troubleshoot-mobile-automated-testing/carthage-is-not-found"
                ]
            },
            // {
            //     "to": "/docs/execute/cloud-based-test-execution/test-execution-with-testcloud/integrate-testcloud-with-studio",
            //     "from": [
            //         "/docs/legacy/katalon-studio-enterprise/integration/integrate-testcloud-with-studio"
            //     ]
            // },
            {
                "to": "/docs/create-tests/create-test-cases/statements/define-method",
                "from": [
                    "/docs/legacy/katalon-studio-enterprise/create-tests-and-projects/manage-projects/statements/define-method"
                ]
            },
            {
                "to": "/docs/administer/troubleshooting/troubleshooting-activation-problem/captcha-required",
                "from": [
                    "/docs/legacy/products-and-licenses/katalon-studio-enterprise-and-runtime-engine-licenses/troubleshoot/troubleshooting-activation-problem/captcha-required"
                ]
            },
            {
                "to": "/docs/create-tests/create-test-cases/statements/exception-handling-statements",
                "from": [
                    "/docs/legacy/katalon-studio-enterprise/create-tests-and-projects/manage-projects/statements/exception-handling-statements"
                ]
            },
            {
                "to": "/docs/administer/troubleshooting/troubleshooting-activation-problem/network-security-errors",
                "from": [
                    "/docs/legacy/products-and-licenses/katalon-studio-enterprise-and-runtime-engine-licenses/troubleshoot/troubleshooting-activation-problem/network-security-errors"
                ]
            },
             {
                "to": "/docs/administer/troubleshooting/troubleshooting-activation-problem/troubleshoot-activation-problems-overview",
                "from": [
                    "/katalon-studio/docs/troubleshoot-activation-problems.html",
                    "/katalon-studio/troubleshoot-activation-problems.html"
                ]
            },
            {
                "to": "/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-mobile-automated-testing/unable-to-start-application-on-this-device-appium-directory-is-invalid",
                "from": [
                    "/docs/legacy/katalon-studio-enterprise/error-management/troubleshooting/troubleshoot-mobile-automated-testing/unable-to-start-application-on-this-device-appium-directory-is-invalid"
                ]
            },
            {
                "to": "/docs/administer/administration-tasks/subscription-management/visual-testing-subscription/upgrade-visual-testing-subscriptions",
                "from": [
                    "/docs/legacy/products-and-licenses/visual-testing-subscriptions/manage-visual-testing-subscriptions/upgrade-visual-testing-subscriptions",
                    "/docs/products-and-licenses/visual-testing-subscriptions/manage-visual-testing-subscriptions/upgrade-visual-testing-subscriptions"
                ]
            },
            {
                "to": "/docs/",
                "from": [
                    "/docs/legacy/"
                ]
            },
            {
                "to": "/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-web-automated-testing/use-different-browser-versions",
                "from": [
                    "/docs/legacy/katalon-studio-enterprise/error-management/troubleshooting/troubleshoot-web-automated-testing/use-different-browser-versions"
                ]
            },
            {
                "to": "/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-windows-automated-testing/timeout-when-launching-windows-application",
                "from": [
                    "/docs/legacy/katalon-studio-enterprise/error-management/troubleshooting/troubleshoot-windows-automated-testing/timeout-when-launching-windows-application"
                ]
            },
            {
                "to": "/docs/administer/troubleshooting/troubleshooting-activation-problem/ip-addresses-errors",
                "from": [
                    "/docs/legacy/products-and-licenses/katalon-studio-enterprise-and-runtime-engine-licenses/troubleshoot/troubleshooting-activation-problem/ip-addresses-errors"
                ]
            },
            {
                "to": "/docs/execute/execute-tests-with-katalon-studio/execute-a-test-suite-in-katalon-studio",
                "from": [
                    "/docs/legacy/katalon-studio-enterprise/test-execution/test-suite/execute-test-suites-in-katalon-studio",
                    "/katalon-studio/docs/test-suite.html"
                ]
            },
            {
                "to": "/docs/create-tests/manage-projects/set-up-projects/api-testing/configure-linux-for-web-service-testing-in-katalon-studio",
                "from": [
                    "/docs/legacy/katalon-studio-enterprise/create-tests-and-projects/configure-test-cases/web-service-testing/configure-linux-for-web-service-testing"
                ]
            },
            {
                "to": "/docs/create-tests/create-test-cases/statements/branching-statements",
                "from": [
                    "/docs/legacy/katalon-studio-enterprise/create-tests-and-projects/manage-projects/statements/branching-statements"
                ]
            },
            {
                "to": "/docs/analyze/integration-for-test-analyzing/upload-test-execution-results-from-katalon-studio-to-testrail",
                "from": [
                    "/docs/legacy/katalon-studio-enterprise/integration/upload-test-execution-results-from-katalon-studio-to-testrail"
                ]
            },
            {
                "to": "/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-web-automated-testing/invalid-element-state-exception",
                "from": [
                    "/docs/legacy/katalon-studio-enterprise/error-management/troubleshooting/troubleshoot-web-automated-testing/invalid-element-state-exception"
                ]
            },
            {
                "to": "/docs/execute/execute-tests-with-katalon-studio/execute-test-suite-collections-in-katalon-studio",
                "from": [
                    "/docs/legacy/katalon-studio-enterprise/test-execution/test-suite/execute-test-suite-collections-in-katalon-studio"
                ]
            },
            {
                "to": "/docs/create-tests/manage-projects/project-settings/set-desired-execution-behaviors-of-katalon-studio",
                "from": [
                    "/docs/legacy/katalon-studio-enterprise/create-tests-and-projects/manage-projects/project-settings/execution-settings"
                ]
            },
            {
                "to": "/docs/execute/cicd-integrations/harness-integration",
                "from": [
                    "/docs/legacy/katalon-runtime-engine/cicd-tools-integration/integration-with-harness-ci"
                ]
            },
            {
                "to": "/docs/administer/troubleshooting/troubleshooting-activation-problem/cannot-connect-to-katalon-testops-server.-please-check-your-internet-connection-and-try-again-1",
                "from": [
                    "/docs/legacy/products-and-licenses/katalon-studio-enterprise-and-runtime-engine-licenses/troubleshoot/troubleshooting-activation-problem/cannot-connect-to-katalon-testops-server.-please-check-your-internet-connection-and-try-again-1"
                ]
            },
            {
                "to": "/docs/administer/administration-tasks/subscription-management/visual-testing-subscription/cancel-visual-testing-subscriptions",
                "from": [
                    "/docs/legacy/products-and-licenses/visual-testing-subscriptions/manage-visual-testing-subscriptions/cancel-visual-testing-subscriptions"
                ]
            },
            {
                "to": "/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-mobile-automated-testing/xcode-fails-to-create-a-provisioning-profile-for-the-webdriveragentrunner-target",
                "from": [
                    "/docs/legacy/katalon-studio-enterprise/error-management/troubleshooting/troubleshoot-mobile-automated-testing/xcode-fails-to-create-a-provisioning-profile-for-the-webdriveragentrunner-target"
                ]
            },
            {
                "to": "/docs/administer/troubleshooting/troubleshooting-activation-problem/this-account-has-been-blocked",
                "from": [
                    "/docs/legacy/products-and-licenses/katalon-studio-enterprise-and-runtime-engine-licenses/troubleshoot/troubleshooting-activation-problem/this-account-has-been-blocked"
                ]
            },
            // {
            //     "to": "/docs/execute/cicd-integrations/cicd-integration-overview",
            //     "from": [
            //         "/docs/legacy/katalon-studio-enterprise/release-notes/supported-integration-in-katalon-studio",
            //     ]
            // },
            {
                "to": "/docs/organize/integration-for-organizing-tests/query-test-cases-linked-to-testrail-in-a-dynamic-test-suite",
                "from": [
                    "/docs/legacy/katalon-studio-enterprise/integration/query-test-cases-linked-to-testrail-in-a-dynamic-test-suite"
                ]
            },
            {
                "to": "/docs/create-tests/manage-projects/project-settings/network-settings-in-katalon-studio",
                "from": [
                    "/docs/legacy/katalon-studio-enterprise/create-tests-and-projects/manage-projects/project-settings/network-settings"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-service-keywords/ws-get-response-status-code",
                "from": [
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-service-keywords/ws-get-response-status-code"
                ]
            },
            {
                "to": "/docs/analyze/reports/view-test-reports/view-test-reports-in-katalon-studio/view-bdd-reports-in-katalon-studio",
                "from": [
                    "/docs/legacy/katalon-studio-enterprise/test-design/bdd-testing-framework-cucumber-integration/view-bdd-reports"
                ]
            },
            {
                "to": "/docs/create-tests/manage-projects/project-settings/view-and-edit-your-project-information-in-katalon-studio",
                "from": [
                    "/docs/legacy/katalon-studio-enterprise/create-tests-and-projects/manage-projects/project-settings/project-information"
                ]
            },
            {
                "to": "/docs/administer/troubleshooting/troubleshooting-activation-problem/cannot-connect-to-katalon-testops-server.-please-check-your-internet-connection-and-try-again-2",
                "from": [
                    "/docs/legacy/products-and-licenses/katalon-studio-enterprise-and-runtime-engine-licenses/troubleshoot/troubleshooting-activation-problem/cannot-connect-to-katalon-testops-server.-please-check-your-internet-connection-and-try-again-2"
                ]
            },
            {
                "to": "/docs/administer/troubleshooting/troubleshooting-activation-problem/your-trial-has-expired.-please-subscribe-to-continue-using-katalon-runtime-engine",
                "from": [
                    "/docs/legacy/products-and-licenses/katalon-studio-enterprise-and-runtime-engine-licenses/troubleshoot/troubleshooting-activation-problem/your-trial-has-expired.-please-subscribe-to-continue-using-katalon-runtime-engine"
                ]
            },
            {
                "to": "/docs/create-tests/create-test-cases/statements/method-call-statements",
                "from": [
                    "/docs/legacy/katalon-studio-enterprise/create-tests-and-projects/manage-projects/statements/method-call-statements"
                ]
            },
            {
                "to": "/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-web-automated-testing/web-element-not-found-exception",
                "from": [
                    "/docs/legacy/katalon-studio-enterprise/error-management/troubleshooting/troubleshoot-web-automated-testing/web-element-not-found-exception"
                ]
            },
            {
                "to": "/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-web-automated-testing/element-click-intercepted-exception",
                "from": [
                    "/docs/legacy/katalon-studio-enterprise/error-management/troubleshooting/troubleshoot-web-automated-testing/element-click-intercepted-exception"
                ]
            },
            {
                "to": "/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-mobile-automated-testing/fail-to-start-the-appium-server-in-60-seconds",
                "from": [
                    "/docs/legacy/katalon-studio-enterprise/error-management/troubleshooting/troubleshoot-mobile-automated-testing/fail-to-start-the-appium-server-in-60-seconds"
                ]
            },
            {
                "to": "/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-mobile-automated-testing/katalon-mobile-recorder-and-settext-keyword-cannot-perform-on-an-edittext-element-of-the-flutter-based-application",
                "from": [
                    "/docs/legacy/katalon-studio-enterprise/error-management/troubleshooting/troubleshoot-mobile-automated-testing/katalon-mobile-recorder-and-settext-keyword-cannot-perform-on-an-edittext-element-of-the-flutter-based-application"
                ]
            },
            {
                "to": "/docs/administer/katalon-platform-packages/visual-testing-feature-comparison",
                "from": [
                    "/docs/legacy/products-and-licenses/visual-testing-subscriptions/feature-comparisons-in-visual-testing",
                    "/docs/products-and-licenses/visual-testing-subscriptions/feature-comparisons-in-visual-testing"
                ]
            },
            {
                "to": "/docs/analyze/integration-for-test-analyzing/jira-integration/view-test-results-in-the-jira-test-results-gadget",
                "from": [
                    "/docs/legacy/katalon-testops/integrations/view-test-results-in-the-jira-test-results-gadget"
                ]
            },
            {
                "to": "/docs/create-tests/create-test-cases/generate-test-steps-in-katalon-studio-manual-view",
                "from": [
                    "/docs/legacy/katalon-studio-enterprise/create-tests-and-projects/manage-projects/create-test-case/generate-test-steps-in-manual-view"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-service-keywords/ws-send-request-and-verify",
                "from": [
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-service-keywords/ws-send-request-and-verify"
                ]
            },
            {
                "to": "/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-mobile-automated-testing/connected-device-not-displayed-in-device-name-list",
                "from": [
                    "/docs/legacy/katalon-studio-enterprise/error-management/troubleshooting/troubleshoot-mobile-automated-testing/connected-device-not-displayed-in-device-name-list"
                ]
            },
            {
                "to": "/docs/administer/troubleshooting/troubleshooting-activation-problem/license-quota-exceeded",
                "from": [
                    "/docs/legacy/products-and-licenses/katalon-studio-enterprise-and-runtime-engine-licenses/troubleshoot/troubleshooting-activation-problem/license-quota-exceeded"
                ]
            },
            {
                "to": "/docs/create-tests/create-test-cases/statements/assert-statements",
                "from": [
                    "/docs/legacy/katalon-studio-enterprise/create-tests-and-projects/manage-projects/statements/assert-statements"
                ]
            },
            {
                "to": "/docs/execute/troubleshooting/new-and-old-proxy-mechanisms-are-not-allowed-in-one-command",
                "from": [
                    "/docs/legacy/katalon-runtime-engine/troubleshoot/new-and-old-proxy-mechanisms-are-not-allowed-in-one-command"
                ]
            },
            // {
            //     "to": "/docs/general-information/supported-integration/supported-integration-overview/jira-integration-in-katalon-platform-overview",
            //     "from": [
            //         "/docs/legacy/katalon-studio-enterprise/integration/jira-integration/jira-integration-overview"
            //     ]
            // },
            {
                "to": "/docs/analyze/integration-for-test-analyzing/qtest-integration/generate-qtest---katalon-studio-parity-reports",
                "from": [
                    "/docs/legacy/katalon-studio-enterprise/integration/generate-qtest---katalon-studio-parity-reports"
                ]
            },
            {
                "to": "/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-windows-automated-testing/the-sendkeys-keyword-did-not-send-the-correct-text-with-german-keyboard-as-default-settings",
                "from": [
                    "/docs/legacy/katalon-studio-enterprise/error-management/troubleshooting/troubleshoot-windows-automated-testing/the-sendkeys-keyword-did-not-send-the-correct-text-with-german-keyboard-as-default-settings"
                ]
            },
            {
                "to": "/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-mobile-automated-testing/fail-to-start-appium-server-in-30-seconds",
                "from": [
                    "/docs/legacy/katalon-studio-enterprise/error-management/troubleshooting/troubleshoot-mobile-automated-testing/fail-to-start-appium-server-in-30-seconds"
                ]
            },
            {
                "to": "/docs/execute/execute-tests-with-katalon-studio/execute-dynamic-test-suites-in-katalon-studio",
                "from": [
                    "/docs/legacy/katalon-studio-enterprise/test-execution/test-suite/execute-dynamic-test-suites-in-katalon-studio"
                ]
            },
            {
                "to": "/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-web-automated-testing/webdriver-exception-element-is-not-clickable-at-point-x-y",
                "from": [
                    "/docs/legacy/katalon-studio-enterprise/error-management/troubleshooting/troubleshoot-web-automated-testing/webdriver-exception-element-is-not-clickable-at-point-x-y"
                ]
            },
            {
                "to": "/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-mobile-automated-testing/appium-directory-is-not-set",
                "from": [
                    "/docs/legacy/katalon-studio-enterprise/error-management/troubleshooting/troubleshoot-mobile-automated-testing/appium-directory-is-not-set"
                ]
            },
            {
                "to": "/docs/create-tests/create-test-cases/generate-test-steps-in-katalon-studio-script-view",
                "from": [
                    "/docs/legacy/katalon-studio-enterprise/create-tests-and-projects/manage-projects/create-test-case/generate-test-steps-in-script-view"
                ]
            },
            {
                "to": "/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-web-automated-testing/element-not-visible-exception",
                "from": [
                    "/docs/legacy/katalon-studio-enterprise/error-management/troubleshooting/troubleshoot-web-automated-testing/element-not-visible-exception"
                ]
            },
            {
                "to": "/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-web-automated-testing/timed-out-waiting-for-the-driver-server-to-start",
                "from": [
                    "/docs/legacy/katalon-studio-enterprise/error-management/troubleshooting/troubleshoot-web-automated-testing/timed-out-waiting-for-the-driver-server-to-start"
                ]
            },
            {
                "to": "/docs/administer/administration-tasks/subscription-management/visual-testing-subscription/subscribe-to-visual-testing",
                "from": [
                    "/docs/legacy/products-and-licenses/visual-testing-subscriptions/manage-visual-testing-subscriptions/subscribe-to-visual-testing"
                ]
            },
            // {
            //     "to": "/docs/plan/link-test-runs-to-a-release-in-katalon-testops",
            //     "from": [
            //         "/docs/legacy/katalon-testops/test-planning/link-test-runs-to-a-release"
            //     ]
            // },
            {
                "to": "/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-mobile-automated-testing/encounter-xcodebuild-exited-with-code-65-and-signal-null",
                "from": [
                    "/docs/legacy/katalon-studio-enterprise/error-management/troubleshooting/troubleshoot-mobile-automated-testing/encounter-xcodebuild-exited-with-code-65-and-signal-null"
                ]
            },
            {
                "to": "/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-web-automated-testing/unable-to-record-on-internet-explorer",
                "from": [
                    "/docs/legacy/katalon-studio-enterprise/error-management/troubleshooting/troubleshoot-web-automated-testing/unable-to-record-on-internet-explorer"
                ]
            },
            {
                "to": "/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-web-automated-testing/unable-to-connect-to-katalon-server",
                "from": [
                    "/docs/legacy/katalon-studio-enterprise/error-management/troubleshooting/troubleshoot-web-automated-testing/unable-to-connect-to-katalon-server"
                ]
            },
            {
                "to": "/docs/create-tests/data-driven-testing/perform-data-driven-testing-in-a-dynamic-test-suite",
                "from": [
                    "/docs/legacy/katalon-studio-enterprise/test-execution/data-driven-testing/perform-data-driven-testing-in-a-dynamic-test-suite"
                ]
            },
            {
                "to": "/docs/create-tests/create-test-cases/statements/looping-statements",
                "from": [
                    "/docs/legacy/katalon-studio-enterprise/create-tests-and-projects/manage-projects/statements/looping-statements"
                ]
            },
            {
                "to": "/docs/execute/troubleshooting/illegal-option-specification-exception",
                "from": [
                    "/docs/legacy/katalon-runtime-engine/troubleshoot/illegal-option-specification-exception"
                ]
            },
            {
                "to": "/docs/analyze/integration-for-test-analyzing/upload-test-execution-results-from-katalon-studio-to-rally",
                "from": [
                    "/docs/legacy/katalon-studio-enterprise/integration/upload-test-execution-results-from-katalon-studio-to-rally"
                ]
            },
            {
                "to": "/docs/execute/troubleshooting/tests-not-loading-when-executing-with-chrome-version-92-93-94-in-windows",
                "from": [
                    "/docs/legacy/katalon-runtime-engine/troubleshoot/tests-not-loading-when-executing-with-chrome-version-92-93-94-in-windows"
                ]
            },
            {
                "to": "/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-windows-automated-testing/unable-to-start-the-windows-application",
                "from": [
                    "/docs/legacy/katalon-studio-enterprise/error-management/troubleshooting/troubleshoot-windows-automated-testing/unable-to-start-the-windows-application"
                ]
            },
            {
                "to": "/docs/create-tests/create-test-cases/create-test-case-overview",
                "from": [
                    "/docs/legacy/katalon-studio-enterprise/create-tests-and-projects/manage-projects/create-test-case/create-test-case-overview"
                ]
            },
            {
                "to": "/docs/administer/administration-tasks/subscription-management/katalon-platform-subscription/upgrade-katalon-platform-subscription",
                "from": [
                    "/docs/legacy/products-and-licenses/katalon-testops-subscriptions/manage-subscriptions/ugrade-subscriptions"
                ]
            },
            {
                "to": "/docs/analyze/integration-for-test-analyzing/qtest-integration/view-and-upload-katalon-studio-test-execution-results-to-qtest",
                "from": [
                    "/docs/legacy/katalon-studio-enterprise/integration/view-and-upload-katalon-studio-test-execution-results-to-qtest"
                ]
            },
            // {
            //     "to": "/docs/create-tests/test-objects/api-test-objects/create-testsization/bearer-authentication-in-katalon-studio",
            //     "from": [
            //         "/docs/legacy/katalon-studio-enterprise/test-design/web-services-test-design/working-with-apiweb-services-project/bearer-authentication"
            //     ]
            // },
            {
                "to": "/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-mobile-automated-testing/unable-to-start-application-while-running-android-tests-on-a-windows-machine",
                "from": [
                    "/docs/legacy/katalon-studio-enterprise/error-management/troubleshooting/troubleshoot-mobile-automated-testing/unable-to-start-application-while-running-android-tests-on-a-windows-machine"
                ]
            },
            {
                "to": "/docs/analyze/integration-for-test-analyzing/jira-integration/view-katalon-studio-test-results-in-jira-tickets",
                "from": [
                    "/docs/legacy/katalon-studio-enterprise/integration/jira-integration/view-test-results-in-jira-tickets"
                ]
            },
            {
                "to": "/docs/administer/troubleshooting/troubleshooting-activation-problem/machine-quota-exceeded",
                "from": [
                    "/docs/legacy/products-and-licenses/katalon-studio-enterprise-and-runtime-engine-licenses/troubleshoot/troubleshooting-activation-problem/machine-quota-exceeded"
                ]
            },
            {
                "to": "/docs/create-tests/keywords/keyword-description-in-katalon-studio/web-service-keywords/ws-get-element-property-value",
                "from": [
                    "/docs/legacy/katalon-studio-enterprise/keywords/web-service-keywords/ws-get-element-property-value"
                ]
            },
            {
                "to": "/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-mobile-automated-testing/an-unknown-server-side-error-occurred-while-processing-the-command",
                "from": [
                    "/docs/legacy/katalon-studio-enterprise/error-management/troubleshooting/troubleshoot-mobile-automated-testing/an-unknown-server-side-error-occurred-while-processing-the-command"
                ]
            },
            {
                "to": "/docs/create-tests/troubleshooting-for-test-creation/troubleshoot-mobile-automated-testing/unable-to-start-application",
                "from": [
                    "/docs/legacy/katalon-studio-enterprise/error-management/troubleshooting/troubleshoot-mobile-automated-testing/unable-to-start-application"
                ]
            },
            {
                "to": "/docs/plan/integration-for-test-planning/populate-jira-releases",
                "from": [
                    "/docs/legacy/katalon-testops/test-planning/populate-jira-releases"
                ]
            },
            {
                "to": "/docs/create-tests/create-test-cases/statements/decision-making-statements",
                "from": [
                    "/docs/legacy/katalon-studio-enterprise/create-tests-and-projects/manage-projects/statements/decision-making-statements"
                ]
            },
            {
                "to": "/docs/administer/administration-tasks/support-management/grant-permission-to-access-support-portal",
                "from": [
                    "/docs/legacy/products-and-licenses/license-administration/grant-permission-to-access-support-portal"
                ]
            },
            {
                "to": "/docs/get-started/set-up-your-workspace/katalon-studio-preferences/set-a-new-default-jre-for-test-projects-in-katalon-studio",
                "from": [
                    "/docs/legacy/katalon-studio-enterprise/create-tests-and-projects/set-a-new-default-jre-for-test-projects",
                    "/katalon-studio/how-to-guides/set-new-default-JRE.html"
                ]
            },
            {
                "to": "/docs/create-tests/test-objects/api-test-objects/authorization/authorization-in-katalon-studio",
                "from": [
                    "/katalon-studio/docs/authorization.html"
                ]
            },
            {
              "to": "/docs/analyze/introduction-to-test-analysis",
              "from": [
                  "/docs/katalon-testops/overview/testops-overview"
              ]
            },
            {
              "to": "/docs/execute/cloud-based-test-execution/test-execution-with-testcloud/testcloud-overview",
              "from": [
                  "/docs/katalon-testcloud/testcloud-overview"
              ]
            },
            {
              "to": "/docs/get-started/onboarding-katalon-platform/explore-katalon-studio",
              "from": [
                  "/docs/katalon-studio-enterprise/katalon-studio-overview",
                  "/docs/legacy/katalon-studio-enterprise/welcome-to-katalon-studio",
                  "/katalon-studio/docs/overview.html",
                  "/display/KD/Overview/",
                  "/x/oArR/"          
              ]
            }
        ]
    },
  // highlight-end
  ],
  ['plugin-auto-redirect', {
        s3Config: {
        accessKeyId: "AKIAVBNEDDIHZWSR2YOU",
        secretAccessKey: "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",
        bucket: "katalon-docs",
        key: "katalondocs",
        region: "us-east-1"
        }
    }
    ],
],
};

module.exports = config;

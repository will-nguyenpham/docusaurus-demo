/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

// /** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    // By default, Docusaurus generates a sidebar from the docs folder structure
    tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
  
    // But you can create a sidebar manually
    // tutorialSidebar: [
    //   {
    //     type: 'doc',
    //     label: 'Tutorial Intro',
    //     id: 'intro',
    //   },
    //   {
    //     type: 'category',
    //     label: 'tutorial-basics',
    //     // items: ['tutorial-basics/create-a-page', 'tutorial-basics/create-a-document', 'tutorial-basics/create-a-blog-post', 'tutorial-basics/markdown-features', 'tutorial-basics/deploy-your-site', 'tutorial-basics/congratulations'],
    //     // collapsible: true,
    //     // collapsed: false,
    //     items: [
    //       'tutorial-basics/create-a-page',
    //       {
    //         type: 'category',
    //         label: 'Sub Categories',
    //         items: ['tutorial-basics/create-a-document', 'tutorial-basics/create-a-blog-post'],
    //       },
    //     ]
    //   },
    //   {
    //     type: 'category',
    //     label: 'tutorial-extras',
    //     items: ['tutorial-extras/manage-docs-versions', 'tutorial-extras/translate-your-site'],
    //   },
    //   {
    //     type: 'link',
    //     label: 'Learn more',
    //     href: 'https://example.com',
    //   },
    // ],
  };
  
  module.exports = sidebars;
  

import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docusaurus-demo/blog',
    component: ComponentCreator('/docusaurus-demo/blog','9ae'),
    exact: true
  },
  {
    path: '/docusaurus-demo/blog/archive',
    component: ComponentCreator('/docusaurus-demo/blog/archive','1e2'),
    exact: true
  },
  {
    path: '/docusaurus-demo/blog/first-blog-post',
    component: ComponentCreator('/docusaurus-demo/blog/first-blog-post','a4b'),
    exact: true
  },
  {
    path: '/docusaurus-demo/blog/long-blog-post',
    component: ComponentCreator('/docusaurus-demo/blog/long-blog-post','635'),
    exact: true
  },
  {
    path: '/docusaurus-demo/blog/mdx-blog-post',
    component: ComponentCreator('/docusaurus-demo/blog/mdx-blog-post','7eb'),
    exact: true
  },
  {
    path: '/docusaurus-demo/blog/tags',
    component: ComponentCreator('/docusaurus-demo/blog/tags','a8b'),
    exact: true
  },
  {
    path: '/docusaurus-demo/blog/tags/docusaurus',
    component: ComponentCreator('/docusaurus-demo/blog/tags/docusaurus','9a6'),
    exact: true
  },
  {
    path: '/docusaurus-demo/blog/tags/facebook',
    component: ComponentCreator('/docusaurus-demo/blog/tags/facebook','438'),
    exact: true
  },
  {
    path: '/docusaurus-demo/blog/tags/hello',
    component: ComponentCreator('/docusaurus-demo/blog/tags/hello','80b'),
    exact: true
  },
  {
    path: '/docusaurus-demo/blog/tags/hola',
    component: ComponentCreator('/docusaurus-demo/blog/tags/hola','901'),
    exact: true
  },
  {
    path: '/docusaurus-demo/blog/welcome',
    component: ComponentCreator('/docusaurus-demo/blog/welcome','40d'),
    exact: true
  },
  {
    path: '/docusaurus-demo/markdown-page',
    component: ComponentCreator('/docusaurus-demo/markdown-page','632'),
    exact: true
  },
  {
    path: '/docusaurus-demo/search',
    component: ComponentCreator('/docusaurus-demo/search','d7f'),
    exact: true
  },
  {
    path: '/docusaurus-demo/docs',
    component: ComponentCreator('/docusaurus-demo/docs','d2c'),
    routes: [
      {
        path: '/docusaurus-demo/docs/intro',
        component: ComponentCreator('/docusaurus-demo/docs/intro','dea'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docusaurus-demo/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/docusaurus-demo/docs/tutorial-basics/congratulations','1df'),
        exact: true
      },
      {
        path: '/docusaurus-demo/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/docusaurus-demo/docs/tutorial-basics/create-a-blog-post','016'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docusaurus-demo/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/docusaurus-demo/docs/tutorial-basics/create-a-document','480'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docusaurus-demo/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/docusaurus-demo/docs/tutorial-basics/create-a-page','b25'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docusaurus-demo/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/docusaurus-demo/docs/tutorial-basics/deploy-your-site','2d6'),
        exact: true
      },
      {
        path: '/docusaurus-demo/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/docusaurus-demo/docs/tutorial-basics/markdown-features','304'),
        exact: true
      },
      {
        path: '/docusaurus-demo/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/docusaurus-demo/docs/tutorial-extras/manage-docs-versions','6af'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docusaurus-demo/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/docusaurus-demo/docs/tutorial-extras/translate-your-site','67f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/docusaurus-demo/',
    component: ComponentCreator('/docusaurus-demo/','321'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];

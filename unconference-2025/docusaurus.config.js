// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DISC Unconference 2025',
  tagline: 'March 14-16 2025 - São Paulo, Brazil and Online',
  favicon: 'img/DISC-RGB-Icon.svg',

  // Set the production url of your site here
  url: 'https://numfocus.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/disc-unconference-2025/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'numfocus', // Usually your GitHub org/user name.
  projectName: 'disc-unconference-2025', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/numfocus/disc-unconference-2025/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'DISC Unconference 2025',
        logo: {
          alt: 'DISC Logo',
          src: 'img/DISC-RGB-Icon.svg',
        },
        items: [
          {
            type: 'doc',
            position: 'left',
            docId: 'about',
            label: 'About',
          },
          {
            type: 'doc',
            position: 'left',
            docId: 'sponsors',
            label: 'Sponsorship',
          },
          {
            position: 'left',
            label: 'Code of Conduct',
            href: 'https://numfocus.org/code-of-conduct',
            target: '_blank',
          },
          {
            position: 'left',
            label: 'Donate',
            href: 'https://app.hubspot.com/payments/HVF6mmJ4Z?referrer=PAYMENT_LINK',
            target: '_blank',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            label: 'LinkedIn',
            to: 'https://www.linkedin.com/company/numfocus',
          },
          {
            label: 'GitHub',
            href: 'https://github.com/numfocus/disc-unconference-2025',
          },
          {
            label: 'DISC Unconference 2023 Projects',
            href: 'https://numfocus.github.io/disc-unconference-2023-projects',
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} NumFOCUS DISC Committee. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;

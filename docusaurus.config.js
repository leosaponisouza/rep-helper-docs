// docusaurus.config.js

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

module.exports = {
  title: 'RepHelper Documentation',
  tagline: 'Documentação Técnica do RepHelper',
  url: 'https://leosaponisouza.github.io', // Substitua pelo seu nome de usuário
  baseUrl: '/rep-helper-docs/', // Nome do repositório com barras
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'leosaponisouza', // Seu nome de usuário ou organização no GitHub
  projectName: 'rep-helper-docs', // Nome do repositório
  trailingSlash: false, // Importante para o GitHub Pages
  deploymentBranch: 'gh-pages', // Padrão para o GitHub Pages
  themeConfig: {
    navbar: {
      title: 'RepHelper',
      logo: {
        alt: 'RepHelper Logo',
        src: 'img/logo.svg',
      },
      items: [
        { type: 'doc', docId: 'home', position: 'left', label: 'Documentação' },
        {
          href: 'https://github.com/leosaponisouza/rep-helper-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        // Seus links de rodapé, se houver
      ],
      copyright: `Copyright © ${new Date().getFullYear()} RepHelper.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/leosaponisouza/rephelper-docs/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

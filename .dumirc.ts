import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  base: '/bello/',
  publicPath: '/bello/',
  themeConfig: {
    name: 'bello',
    editLink: false,
    footer: false,
    logo: '/bello/logo.png',
    nav: [
      {
        title: 'API',
        link: '/components/diform',
      },
    ],
    socialLinks: {
      github: 'https://github.com/lemonied/bello',
    },
  },
});

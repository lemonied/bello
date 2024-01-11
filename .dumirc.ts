import { defineConfig } from 'dumi';

const BASE_PATH = '/bello/';

export default defineConfig({
  outputPath: 'docs-dist',
  base: BASE_PATH,
  publicPath: BASE_PATH,
  themeConfig: {
    name: 'bello',
    editLink: false,
    footer: false,
    logo: `${BASE_PATH}logo.png`,
    nav: [
      {
        title: 'API',
        link: '/components/diff-form',
      },
    ],
    socialLinks: {
      github: 'https://github.com/lemonied/bello',
    },
  },
});

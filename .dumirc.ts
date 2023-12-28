import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  base: '/bello/',
  publicPath: '/bello/',
  themeConfig: {
    name: 'bello',
    editLink: false,
    footer: false,
  },
});

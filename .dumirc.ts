import { defineConfig } from 'dumi';
import { readdirSync } from 'fs';
import { join } from 'path';

const headPkgList: string[] = [];
// utils must build before core
// runtime must build before renderer-react
const pkgList = readdirSync(join(__dirname, 'packages')).filter(
  (pkg) => pkg.charAt(0) !== '.' && !headPkgList.includes(pkg),
);

const tailPkgList = pkgList.map((path) => `packages/${path}`);

// { type: 'component', dir: 'packages/layout' } ===> 'components/packages/layout/aone' ==> 解析成路由/components/aone

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: '7mu_12',
    footer: 'Copyright © 2025 | Powered by 7mu_12',
    nav: [
      { title: '文档', link: '/docs' },
      { title: '组件', link: '/components' },
      { title: 'Changelog', link: '/changelog' },
    ],
    sidebar:{
      '/components':[
        {
          title: '架构设计',
          children: [
            {
              title: '组件设计',
              link: '/components',
            },
          ]
        },
        {
          title: '布局',
          children: [
            {
              title: 'one',
              link: '/components/aone',
            },
            {
              title: 'two',
              link: '/components/bone',
            },
          ]
        },
        {
          title: '佛西',
          children: [
            {
              title: '一级',
              link: '/components/fone',
            },
            {
              title: '二级',
              link: '/components/ftwo',
            },
          ]
        }
      ]
    }
  },
  resolve:{
    atomDirs: tailPkgList.map((dir) => ({ type: 'component', dir })),
  },
  logo: '/logo.svg', // 默认读取public下的资源
  favicons: ["/logo.svg"]
});

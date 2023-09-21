import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Fucking Leetcode',
  description: '前端也该刷点算法题！',
  base: '/leetcode-book/',
  lastUpdated: true,
  themeConfig: {
    editLink: {
      pattern:
        'https://github.com/lxj0501/leetcode-book/edit/master/docs/:path',
      text: '有问题提PR',
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '题解', link: '/leetcode/greedy/0135' },
    ],

    sidebar: [
      {
        text: '贪心算法',
        collapsed: false,
        items: [
          {
            text: '0135.Candy',
            link: '/leetcode/greedy/0135',
          },
          {
            text: '0316.Remove Duplicate Letters',
            link: '/leetcode/greedy/0316',
          },
          {
            text: '0763.Partition Labels',
            link: '/leetcode/greedy/0763',
          },
          // { text: 'Runtime API Examples', link: '/api-examples' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lxj0501/leetcode-book' },
    ],
  },
});

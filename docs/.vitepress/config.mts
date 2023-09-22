import { DefaultTheme, defineConfig } from 'vitepress';

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
      { text: '题解', link: '/leetcode/bfs/0102' },
    ],

    sidebar: sidebar(),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lxj0501/leetcode-book' },
    ],
  },
});

function sidebar() {
  return [
    {
      text: '广度优先搜索',
      collapsed: true,
      items: [
        {
          text: '0102.Binary Tree Level Order Traversal',
          link: '/leetcode/bfs/0102',
        },
        {
          text: '0103.Binary Tree Zigzag Level Order Traversal',
          link: '/leetcode/bfs/0103',
        },
        {
          text: '0107.Binary Tree Level Order Traversal II',
          link: '/leetcode/bfs/0107',
        },
      ],
    },
    {
      text: '贪心算法',
      collapsed: true,
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
      ],
    },
  ];
}

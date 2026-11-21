import type * as Preset from '@docusaurus/preset-classic'
import type { Config } from '@docusaurus/types'
import { themes } from 'prism-react-renderer'
import { siteInfo } from './data/site'
import type { GiscusConfig } from './src/components/Comment'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

const config: Config = {
  title: 'Aris_QwQ',
  url: siteInfo.url,
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'Aris_QwQ',
  projectName: 'Aris_QwQ\'s blog page',
  customFields: {
    bio: 'born to differ.', // die to survive.
    description: '是Aris_QwQ創建的個人博客，什麼都會發一點點',
  },
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      // 首次访问跟随系统/浏览器 prefers-color-scheme；访客手动切换后按 localStorage 记忆
      respectPrefersColorScheme: true,
    },
    // announcementBar: {
    //   id: 'announcementBar-3',
    //   content: ``,
    // },
    image: 'img/og.png',
    metadata: [
      {
        name: 'author',
        content: 'Aris',
      },
      {
        name: 'keywords',
        content: 'blog, javascript, typescript, node, react, vue, web',
      },
      {
        name: 'keywords',
        content: '編程愛好者',
      },
    ],
    navbar: {
      logo: {
        alt: 'Aris',
        src: 'img/logo.webp',
        srcDark: 'img/logo.webp',
      },
      hideOnScroll: true,
      items: [
        { label: '博客', position: 'right', to: 'blog' },
        // { label: '項目', position: 'right', to: 'project' },
        { label: '友鏈', position: 'right', to: 'friends' },
        { label: '關於', position: 'right', to: 'about' },
        // {
        //   label: '更多',
        //   position: 'right',
        //   items: [
        //     { label: '歸檔', to: 'blog/archive' },
        //     { label: '手指極限', to: 'videos' },
        //     { label: '主題魔改', to: 'docs/docusaurus-guides' },
        //   ],
        // },
      ],
    },
    footer: {
      style: 'dark',
    },
    algolia: {
      appId: 'GV6YN1ODMO',
      apiKey: '50303937b0e4630bec4a20a14e3b7872',
      indexName: 'Aris_QwQ',
    },
    prism: {
      theme: themes.oneLight,
      darkTheme: themes.oneDark,
      additionalLanguages: ['bash', 'json', 'java', 'python', 'php', 'graphql', 'rust', 'toml', 'protobuf', 'diff'],
      defaultLanguage: 'javascript',
      magicComments: [
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: { start: 'highlight-start', end: 'highlight-end' },
        },
        {
          className: 'code-block-error-line',
          line: 'This will error',
        },
      ],
    },
    giscus: {
      // 留言存放在本倉庫的 Discussions（Announcements 分類：只有維護者能開新串）
      repo: 'ArisQwQ/ArisQwQ.github.io',
      repoId: 'R_kgDOVtX1vQ',
      category: 'Announcements',
      categoryId: 'DIC_kwDOVtX1vc4DLopY',
      // 以網址路徑對應討論串：改標題不會斷串，只有改 slug 才會
      mapping: 'pathname',
      theme: 'light',
      darkTheme: 'dark_dimmed',
    } satisfies Partial<GiscusConfig>,
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
    liveCodeBlock: { playgroundPosition: 'top' },
    zoom: {
      selector: '.markdown :not(em) > img',
      background: {
        light: 'rgb(255, 255, 255)',
        dark: 'rgb(50, 50, 50)',
      },
    },
  } satisfies Preset.ThemeConfig,
  presets: [
    [
      'classic',
      {
        docs: false,
        blog: false,
        theme: {
          customCss: ['./src/css/custom.css', './src/css/tweet-theme.css'],
        },
        sitemap: {
          priority: 0.5,
        },
        gtag: {
          trackingID: 'G-S4SD5NXWXF',
          anonymizeIP: true,
        },
        debug: process.env.NODE_ENV === 'development',
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    'docusaurus-plugin-image-zoom',
    '@docusaurus/plugin-ideal-image',
    // ['docusaurus-plugin-baidu-tongji', { token: 'c9a3849aa75f9c4a4e65f846cd1a5155' }],
    [
      '@docusaurus/plugin-pwa',
      {
        debug: process.env.NODE_ENV === 'development',
        offlineModeActivationStrategies: ['appInstalled', 'standalone', 'queryString'],
        pwaHead: [
          { tagName: 'link', rel: 'icon', href: '/img/favicon.png' },
          { tagName: 'link', rel: 'manifest', href: '/manifest.json' },
          { tagName: 'meta', name: 'theme-color', content: '#12affa' },
        ],
      },
    ],
    [
      'vercel-analytics',
      {
        debug: process.env.NODE_ENV === 'development',
        mode: 'auto',
      },
    ],
    [
      './src/plugin/plugin-content-blog', // 為了實現全局 blog 數據，必須改寫 plugin-content-blog 插件
      {
        path: 'blog',
        // 倉庫建好後再打開：把地址換成你自己的倉庫，文章底部就會出現「編輯此頁」連結
        // editUrl: ({ locale, blogDirPath, blogPath, permalink }) =>
        //   `https://github.com/ArisQwQ/blog/edit/main/${blogDirPath}/${blogPath}`,
        editLocalizedFiles: false,
        blogDescription: '代碼人生：編織技術與生活的博客之旅',
        blogSidebarCount: 12,
        blogSidebarTitle: '歷史博文',
        postsPerPage: 18,
        showReadingTime: true,
        readingTime: ({ content, frontMatter, defaultReadingTime }) =>
          defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
        feedOptions: {
          type: 'all',
          title: 'Aris_QwQ',
          description: 'feedId:41215011978385457+userId:41840354283324416',
        //   copyright: `Copyright © ${new Date().getFullYear()} Aris_QwQ Built with Docusaurus.<p></p>`,
        },
        // LaTeX：remark-math 解析 $...$ / $$...$$，rehype-katex 轉成 HTML
        // throwOnError: false → 公式寫錯只顯示紅字，不會讓 build 失敗
        remarkPlugins: [remarkMath],
        rehypePlugins: [[rehypeKatex, { throwOnError: false, strict: false }]],
      },
    ],
    async function tailwindcssPlugin() {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require('@tailwindcss/postcss'))
          return postcssOptions
        },
      }
    },
    async function injectMotto() {
      return {
        name: 'docusaurus-motto',
        injectHtmlTags() {
          return {
            headTags: [
              {
                tagName: 'script',
                innerHTML: `
    (${function () {
      console.log(
        `%c Aris Blog %c https://github.com/ArisQwQ`,
        'color: #fff; margin: 1em 0; padding: 5px 0; background: #12affa;',
        'margin: 1em 0; padding: 5px 0; background: #efefef;',
      )

      const motto = `
This Website Powered By Aris Blog.
Written by Docusaurus, Coding with Love.
--------
Love what you do and do what you love.
`

      if (document.firstChild?.nodeType !== Node.COMMENT_NODE) {
        document.prepend(document.createComment(motto))
      }
    }.toString()})();`,
              },
            ],
          }
        },
      }
    },
  ],
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'description',
        content: 'Aris_QwQ的個人博客',
      },
    },
  ],
  storage: {
    type: 'localStorage',
    namespace: true,
  },
  stylesheets: [
    // MiSans TC：繁體中文版（漢儀製作），官方授權免費商用；
    // 套件已按 unicode-range 切成 60+ 片段，只下載頁面實際用到的字。
    // 可變字重 150–700，一條 CSS 涵蓋全部字重，缺字回退系統字體。
    'https://cdn.jsdelivr.net/npm/misans@5.0.0/lib/TC/MiSansTCVF.min.css',
    // KaTeX 樣式：自架於 static/katex/（css + woff2/woff 字型）。
    // 不走 CDN 是因為 jsDelivr 在部分地區連不上，CSS 一旦沒載到，
    // MathML 與 HTML 兩份公式會同時顯示出來（看起來像公式渲染兩次）。
    // 版本需與 rehype-katex 內建的 katex 一致（0.16.x）。
    '/katex/katex.min.css',
  ],
  i18n: {
    defaultLocale: 'zh-TW',
    locales: ['zh-TW'],
  },
  onBrokenLinks: 'warn',
  future: {
    v4: {
      removeLegacyPostBuildHeadAttribute: true,
      useCssCascadeLayers: false,
      siteStorageNamespacing: true,
      fasterByDefault: true,
      mdx1CompatDisabledByDefault: true,
    },
    faster: {
      ssgWorkerThreads: true,
      rspackBundler: true,
      rspackPersistentCache: true,
      gitEagerVcs: true,
    },
  },
}

export default config

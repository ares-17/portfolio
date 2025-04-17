import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Life.md",
  description: "A VitePress portfolio",
  base: '/portfolio/', 
  markdown: {
    image: {
      lazyLoading: true
    }
  },
  head: [
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "folder.webp"}],
  ],
  themeConfig: {
    logo: 'folder.webp',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ares-17' }
    ]
  },
  locales: {
    root: { label: 'Italiano', lang: 'it' },
    en: { label: 'English', lang: 'en' }
  }
})

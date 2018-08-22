module.exports = {
  title: 'VuePress Millidocs',
  description: 'Simple documentation theme featuring Milligram CSS framework',
  base: '/vuepress-theme-millidocs/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],
  markdown: {
    anchor: {
      permalink: false,
      permalinkBefore: false
    }
  }
}

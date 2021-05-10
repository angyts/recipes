module.exports = {
    title: 'Teach Me VuePress',
    description: 'Lessons in Vue.js and VuePress',
    theme: 'vuepress-theme-casper',
  head: [
    ['link', { rel: 'icon', href: '/img/uploads/nyan.jpg' }]
  ],
  markdown: {
    anchor: {
      permalink: false,
      permalinkBefore: false
    }
  },
  themeConfig: {
    cover: '/img/uploads/nyan.jpg',
    logo: '/img/uploads/nyan.jpg',
    nav: [{
      text: 'Home',
      link: '/'
    }, {
      text: 'Posts',
      link: '/posts'
    }, {
      text: 'Category',
      link: '/category/some-category'
    }, {
      text: 'Page',
      link: '/a-page.html'
    }],

    footer: [{
      text: 'Latest Posts',
      link: '/posts'
    }, {
      text: 'Facebook',
      link: 'https://facebook.com/'
    }, {
      text: 'Twitter',
      link: 'https://twitter.com'
    }, {
      text: 'Github',
      link: 'https://github.com/'
    }],
    social: {
      github: 'https://github.com',
      twitter: 'https://twitter.com',
      facebook: 'https://facebook.com',
      xing: 'https://xing.de',
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com'
    }
  }
}
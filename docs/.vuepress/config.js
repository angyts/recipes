module.exports = {
    title: 'January Thyn Art Portfolio',
    lang: 'en-US',
    description: 'January Thyn Art Portfolio',
  head: [
    ['link', { rel: 'icon', href: '/img/uploads/nyan.jpg' }],
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
      link: 'https://www.facebook.com/chothyn.lay'
    }, {
      text: 'Instagram',
      link: 'https://www.instagram.com/january_cho/'
    }],
    social: {
      twitter: 'https://twitter.com',
      facebook: 'https://www.facebook.com/chothyn.lay',
      instagram: 'https://www.instagram.com/january_cho/',
    }
  }
}
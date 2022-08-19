module.exports = {
    title: "Jan's Corner",
    lang: 'en-US',
    description: "Jan's Corner",
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
    cover: '/img/uploads/img_8340.jpg',
    logo: '/img/uploads/img_8340.jpg',
    nav: [{
      text: 'Home',
      link: '/'
    }, {
      text: 'Food',
      link: '/food'
    }, {
      text: 'About',
      link: '/about.html'
    },
 //     {
 //     text: 'Category',
 //     link: '/category/some-category'
 //   },
      {
      text: 'Shop',
      link: '/shop.html'
    },
      {
      text: 'Contact',
      link: '/contact.html'
    }],

    footer: [{
      text: 'Latest Posts',
      link: '/food'
    }, {
      text: 'Facebook',
      link: 'https://www.facebook.com/chothyn.lay'
    }, {
      text: 'Instagram',
      link: 'https://www.instagram.com/january_cho/'
    },
      {
        text:'Admin',
        link: '/admin'
      }
    ],
    social: {
     // twitter: 'https://twitter.com',
      facebook: 'https://www.facebook.com/chothyn.lay',
      instagram: 'https://www.instagram.com/january_cho/',
    }
  }
}
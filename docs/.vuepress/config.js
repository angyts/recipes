module.exports = {
    title: "Your Father's Recipes",
    lang: 'en-US',
    description: "This is where your Father kept Your Father's Recipes",
  head: [
    ['link', { rel: 'icon', href: '/img/uploads/wok.png' }],
  ],
  markdown: {
    anchor: {
      permalink: false,
      permalinkBefore: false
    }
  },
  themeConfig: {
    cover: '/img/uploads/cooking.jpeg',
    logo: '/img/uploads/wok.png',
    nav: [{
      text: 'Home',
      link: '/'
    }, {
      text: 'Food',
      link: '/posts'
    }, {
      text: 'About',
      link: '/about.html'
    },
 //     {
 //     text: 'Category',
 //     link: '/category/some-category'
 //   },
 //     {
 //     text: 'Shop',
 //     link: '/shop.html'
 //   },
      {
      text: 'Contact',
      link: '/contact.html'
    }],

    footer: [{
      text: 'Latest Recipes',
      link: '/food'
    }, 
   // {
   //   text: 'Facebook',
   //   link: 'https://www.facebook.com/chothyn.lay'
   // }, 
   // {
   //   text: 'Instagram',
   //   link: 'https://www.instagram.com/january_cho/'
   // },
    {
        text:'Admin',
        link: '/admin'
    }
    ],
    social: {
     // twitter: 'https://twitter.com',
     // facebook: 'https://www.facebook.com/chothyn.lay',
     // instagram: 'https://www.instagram.com/january_cho/',
    }
  }
}
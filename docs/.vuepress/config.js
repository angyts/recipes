module.exports = {
  plugins: [
    ['@vuepress/search', {
      searchMaxSuggestions: 10
    }]
  ],
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
    nav: [
    {
      text: 'Home',
      link: '/'
    }, 
    {
      text: 'Food',
      link: '/posts'
    }, 
    {
      text: 'About',
      link: '/about.html'
    },    
    {
      text: 'To-Try',
      link: '/try.html'
    },     
    {
      text: 'Pizza',
      link: '/posts/gourmet-pizza-base.html'
    },    
    {
      text: 'Red Sauce',
      link: '/posts/tomato-sauce-or-pasta-alla-pamarola.html'
    },   
    {
      text: 'Sourdough',
      link: '/posts/sourdough-bread.html'
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
      github: 'https://github.com/angyts'
     // twitter: 'https://twitter.com',
     // facebook: 'https://www.facebook.com/chothyn.lay',
     // instagram: 'https://www.instagram.com/january_cho/',
    }
  }
}
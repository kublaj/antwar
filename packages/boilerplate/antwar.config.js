const rssPlugin = require('antwar-rss-plugin');

module.exports = {
  output: 'build',
  name: 'Antwar Boilerplate',
  author: {
    name: 'Dr A N Twar',
    email: 'antwar@antwar.com'
  },
  deploy: {
    branch: 'gh-pages'
  },
  plugins: [
    rssPlugin({
      baseUrl: '<your url here>',
      sections: ['blog']
    })
  ],
  layout() {
    return require('./layouts/Body');
  },
  theme: {
    name: 'antwar-default-theme',
    navigation: [
      { title: 'Home', url: '/' },
      { title: 'Blog', url: '/blog' }
    ],
    analyticsId: 'UA-XXXXXX-1',
    customStyles: 'specific.scss'
  },
  paths: {
    '/': {
      path() {
        return require.context('./pages');
      }
    },
    blog: {
      title: 'Blog posts',
      path() {
        return require.context('./posts', true, /^\.\/.*\.md$/);
      },
      draft() {
        return require.context('./drafts', true, /^\.\/.*\.md$/);
      }
      /*
      Add custom layouts that render children here.
      layouts: {
        index: function() {
          return require('./layouts/BlogIndex.jsx').default
        },
        page: function() {
          return require('./layouts/BlogPage.jsx').default
        }
      },
      */
    }
  }
};

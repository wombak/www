module.exports = {
  siteMetadata: {
    title: 'Wombak – Fullstack JavaScript Engineers',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './src/images/wombak.png',
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: true,
          yandex: false,
          windows: false,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Wombak. Building better world wide web',
        short_name: 'Wombak',
        start_url: '/',
        background_color: '#000000',
        theme_color: '#F5E05B',
        display: 'minimal-ui',
        icon: 'src/images/wombak.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-resolve-src',
  ],
};

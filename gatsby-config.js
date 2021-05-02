module.exports = {
  siteMetadata: {
    title: `Turnleft`,
    siteUrl: 'https://www.turnleftband.com/',
  },
  plugins: [
    'gatsby-plugin-cname',
    {
      resolve: `gatsby-plugin-output`,
      options: {
        publicPath: 'public',
        rmPublicFolder: false,
      },
    },
  ],
};

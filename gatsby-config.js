module.exports = {
  siteMetadata: {
    title: `Turnleft`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-output`,
      options: {
        publicPath: 'public',
        rmPublicFolder: false,
      },
    },
  ],
};

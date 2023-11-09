module.exports = {
  siteMetadata: {
    title: `Turnleft`,
    siteUrl: "https://www.turnleftband.com/",
  },
  plugins: [
    "gatsby-plugin-cname",
    {
      resolve: `gatsby-plugin-output`,
      options: {
        publicPath: "public",
        rmPublicFolder: false,
      },
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `Montserrat`,
            file: `https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap`,
          },
        ],
      },
    },
  ],
};

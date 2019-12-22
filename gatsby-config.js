module.exports = {
  siteMetadata: {
    title: `At Thoriq Page`,
    description: `At Thoriq Personal Page. `,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `thoriq-page`,
        short_name: `thoriq-page`,
        start_url: `/`,
        background_color: `#357376`,
        theme_color: `#357376`,
        display: `minimal-ui`,
        //icon: `src/images/thoriq-icon.ico`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

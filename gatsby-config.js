module.exports = {
  siteMetadata: {
    name: `CONVEX`,
    title: `Producent opakowań kartonowych`,
    description: `CONVEX producentem opakowań kartonowych, na terenie Krakowa. Działamy nieprzerwanie od 1995 roku
    `,
    mail: `biuro@convex.com.pl`,
    phone: `505-099-655`,
    author: `Paweł Słowik`,
    adres: `ul. Kantorowicka 400, 31-763 Kraków`,
    czas_pracy: `Poniedziałek – Piątek – 6:00 – 14:00`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: "Montserrat",
            variable: true,
            weights: ["200..900"],
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `icons`,
        path: `${__dirname}/src/assets/icons`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/icons/logo-cart.png`, // This path is relative to the root of the site.
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

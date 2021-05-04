require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    title: "gatsby portfolio",
    siteUrl: `https://www.amir4rab.com`,
    description: `A front-end Developer`,
  },
  plugins: [
    `gatsby-transformer-remark`,
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: `bfze6yvvi56r`,
        accessToken: process.env.CONTENTFUL_CONTENT_DELIVERY_API,
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
        name: `Amir Arab`,
        short_name: `Amir4rab`,
        start_url: `/`,
        background_color: `#0B0B0B`,
        theme_color: `#56F2C3`,
        display: `standalone`,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};

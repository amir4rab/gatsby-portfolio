require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    title: "gatsby portfolio",
  },
  plugins: [
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

const config = require('./config/gatsby/siteConfig');
const pluginOptions = require('./config/gatsby/plugins');

module.exports = {
    siteMetadata: {
        title: config.siteTitle,
        author: config.authorName,
        description: config.siteDescription,
        ...config,
    },
    plugins: [
        `gatsby-plugin-typescript`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: 'posts',
                path: 'content/posts',
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: 'pages',
                path: 'content/pages',
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: 'images',
                path: 'content/images',
            },
        },
        {
            resolve: `gatsby-plugin-mdx`,
            options: pluginOptions.mdx,
        },
        // Reminder (https://github.com/gatsbyjs/gatsby/issues/15486#issuecomment-509405867)
        {
            resolve: `gatsby-transformer-remark`,
            options: pluginOptions.transformerRemark,
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-offline`,
        `gatsby-plugin-emotion`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: pluginOptions.analytic,
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: pluginOptions.manifest,
        },
        { resolve: `gatsby-plugin-netlify` },
        { resolve: `gatsby-plugin-catch-links` },
        {
            resolve: `gatsby-plugin-feed`,
            options: pluginOptions.rssFeed,
        },
        { resolve: `gatsby-plugin-sitemap` },
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: pluginOptions.robotsTxt,
        },
    ],
};

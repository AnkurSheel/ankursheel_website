const path = require('path');
const config = require('./data/siteConfig');

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
            options: {
                extensions: [`.mdx`, `.md`],
                defaultLayouts: {
                    default: require.resolve('./src/templates/page.js'),
                },
                gatsbyRemarkPlugins: [
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 590,
                            linkImagesToOriginal: false,
                            withWebp: true,
                        },
                    },
                    { resolve: 'gatsby-remark-prismjs' },
                    { resolve: 'gatsby-remark-responsive-iframe' },
                    { resolve: 'gatsby-remark-copy-linked-files' },
                    { resolve: 'gatsby-remark-smartypants' },
                    { resolve: 'gatsby-remark-autolink-headers' },
                ],
            },
        },
        // Reminder (https://github.com/gatsbyjs/gatsby/issues/15486#issuecomment-509405867)
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [`gatsby-remark-images`],
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-offline`,
        `gatsby-plugin-emotion`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: config.googleAnalyticsId,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: config.siteTitle,
                short_name: config.siteTitle,
                start_url: '/',
                background_color: config.backgroundColor,
                theme_color: config.themeColor,
                display: config.display,
                icon: config.icon,
            },
        },
    ],
};

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
        {
            resolve: '@codinators/gatsby-theme-blog',
            options: {
                rss: {
                    file: '/blog/rss.xml',
                    title: "Ankur Sheel's Rants and Ramblings",
                },
            },
        },
        `gatsby-plugin-offline`,
        {
            resolve: `gatsby-plugin-google-tagmanager`,
            options: pluginOptions.analytic,
        },
        { resolve: `gatsby-plugin-netlify` },
    ],
};

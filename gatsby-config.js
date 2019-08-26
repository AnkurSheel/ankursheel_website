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
                    default: require.resolve('./src/templates/page.tsx'),
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
                    {
                        resolve: 'gatsby-remark-prismjs',
                        options: {
                            showLineNumbers: true,
                        },
                    },
                    { resolve: 'gatsby-remark-responsive-iframe' },
                    { resolve: 'gatsby-remark-copy-linked-files' },
                    { resolve: 'gatsby-remark-smartypants' },
                    // { resolve: 'gatsby-remark-autolink-headers' },
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
        { resolve: `gatsby-plugin-netlify` },
        { resolve: `gatsby-plugin-catch-links` },
        {
            resolve: `gatsby-plugin-feed`,
            options: {
                query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
                feeds: [
                    {
                        serialize: ({ query: { site, allMdx } }) => {
                            return allMdx.edges.map(edge => {
                                return Object.assign({}, edge.node.frontmatter, {
                                    description: edge.node.excerpt,
                                    date: edge.node.frontmatter.date,
                                    url: `${site.siteMetadata.siteUrl}/blog/${edge.node.frontmatter.slug}`,
                                    guid: `${site.siteMetadata.siteUrl}/blog/${edge.node.frontmatter.slug}`,
                                    custom_elements: [{ 'content:encoded': edge.node.html }],
                                });
                            });
                        },
                        query: `
              {
                allMdx(
                    limit: 1000,
                    filter: {
                    fileAbsolutePath: {regex: "//content/posts//"}
                    }
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      frontmatter {
                        slug
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
                        output: '/rss.xml',
                        title: "Your Site's RSS Feed",
                    },
                ],
            },
        },
    ],
};

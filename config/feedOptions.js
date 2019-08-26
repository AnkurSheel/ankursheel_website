module.exports = {
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
                site {
                siteMetadata {
                  title
                  description
                  siteUrl
                  site_url: siteUrl
                }
              }
                allMdx(
                    limit: 1000,
                    filter: {
                    fileAbsolutePath: {regex: "//content/posts//"}
                    }
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      excerpt (pruneLength : 250)
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
            output: '/blog/rss.xml',
            title: "Ankur Sheel's Blog RSS Feed",
        },
    ],
};

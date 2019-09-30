module.exports = {
    feeds: [
        {
            serialize: ({ query: { site, allMdx } }) => {
                const {
                    siteMetadata: { siteUrl },
                } = site;

                return allMdx.edges.map(edge => {
                    const {
                        node: {
                            frontmatter: { title, date, slug, featuredImage },
                            excerpt,
                            html,
                        },
                    } = edge;

                    const blogUrl = `${siteUrl}/blog/${slug}`;

                    return {
                        ...edge.node.frontmatter,
                        title,
                        description: excerpt,
                        date,
                        url: blogUrl,
                        guid: blogUrl,
                        enclosure: featuredImage && {
                            url: siteUrl + featuredImage.publicURL,
                        },
                        custom_elements: [{ 'content:encoded': html }],
                    };
                });
            },
            query: `
              {
                site {
                siteMetadata {
                  siteUrl
                }
              }
                allMdx(
                    limit: 1000,
                    filter: { fileAbsolutePath: {regex: "//content/posts//"}, frontmatter: { published: { eq: true } } }
                    sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      excerpt (pruneLength : 140)
                      html
                      frontmatter {
                        slug
                        title
                        date
                        featuredImage {
                          publicURL
                        }
                      }
                    }
                  }
                }
              }
            `,
            output: '/blog/rss.xml',
            title: "Ankur Sheel's Rants and Ramblings",
        },
    ],
};

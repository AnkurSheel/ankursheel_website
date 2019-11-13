const padLeft0 = n => n.toString().padStart(2, '0');
const formatDate = d => `${d.getFullYear()}-${padLeft0(d.getMonth() + 1)}-${padLeft0(d.getDate())}`;
const todaysDate = formatDate(new Date());

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
                    filter: { fileAbsolutePath: {regex: "//content/posts//"}, frontmatter: { published: { eq: true }, date: { lte: "${todaysDate}" } } }
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

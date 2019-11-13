const { createFilePath } = require('gatsby-source-filesystem');
const path = require('path');
const slugify = require('@sindresorhus/slugify');

const padLeft0 = n => n.toString().padStart(2, '0');
const formatDate = d => `${d.getFullYear()}-${padLeft0(d.getMonth() + 1)}-${padLeft0(d.getDate())}`;
const date = formatDate(new Date());

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions;

    const BlogPostTemplate = path.resolve('./src/templates/blog-post.tsx');
    const BlogPostShareImage = path.resolve('./src/templates/blog-post-share-image.tsx');
    const PageTemplate = path.resolve('./src/templates/page.tsx');
    const PostsByTagTemplate = path.resolve('./src/templates/tags.tsx');
    const ListPostsTemplate = path.resolve('./src/templates/blog-list-template.tsx');

    const isDevelop = process.env.gatsby_executing_command.includes('develop');

    const allPostsQuery = await graphql(`
        {
            allMarkdown: allMdx(
                sort: { fields: [frontmatter___date], order: DESC }
                limit: 1000
                ${isDevelop ? '' : `filter: { frontmatter: { published: { eq: true }, date: { lte: "${date}" } } }`}
            ) {
                edges {
                    node {
                        fileAbsolutePath
                        frontmatter {
                            title
                            slug
                            tags
                        }
                    }
                }
            }
        }
    `);

    if (allPostsQuery.errors) {
        reporter.panic(allPostsQuery.errors);
    }

    const allPagesQuery = await graphql(`
        {
            allMarkdown: allMdx
                ${isDevelop ? '' : '(filter: { frontmatter: { published: { eq: true } } })'}
            {
                edges {
                    node {
                        fileAbsolutePath
                        frontmatter {
                            title
                            slug
                        }
                    }
                }
            }
        }
    `);

    if (allPagesQuery.errors) {
        reporter.panic(allPagesQuery.errors);
    }

    const postPerPageQuery = await graphql(`
        {
            site {
                siteMetadata {
                    postsPerPage
                }
            }
        }
    `);

    const markdownFiles = allPostsQuery.data.allMarkdown.edges;

    const posts = markdownFiles.filter(item => item.node.fileAbsolutePath.includes('/content/posts/'));

    // generate paginated post list
    const { postsPerPage } = postPerPageQuery.data.site.siteMetadata;
    const nbPages = Math.ceil(posts.length / postsPerPage);

    Array.from({ length: nbPages }).forEach((_, i) => {
        createPage({
            path: i === 0 ? `/blog` : `/blog/pages/${i + 1}`,
            component: ListPostsTemplate,
            context: {
                limit: postsPerPage,
                skip: i * postsPerPage,
                currentPage: i + 1,
                nbPages,
                date,
            },
        });
    });

    // generate blog posts
    posts.forEach((post, index) => {
        const previous = index === posts.length - 1 ? null : posts[index + 1].node;
        const next = index === 0 ? null : posts[index - 1].node;

        createPage({
            path: `/blog/${post.node.frontmatter.slug}`,
            component: BlogPostTemplate,
            context: {
                slug: post.node.frontmatter.slug,
                previous,
                next,
            },
        });

        // generate post share images (dev only)
        if (isDevelop) {
            createPage({
                path: `/blog/${post.node.frontmatter.slug}/image_tw`,
                component: BlogPostShareImage,
                context: {
                    slug: post.node.frontmatter.slug,
                    width: 440,
                    height: 220,
                    type: 'twitter',
                },
            });
            createPage({
                path: `blog/${post.node.frontmatter.slug}/image_fb`,
                component: BlogPostShareImage,
                context: {
                    slug: post.node.frontmatter.slug,
                    width: 1200,
                    height: 630,
                    type: 'facebook',
                },
            });
        }
    });

    // generate pages
    allPagesQuery.data.allMarkdown.edges
        .filter(item => item.node.fileAbsolutePath.includes('/content/pages/'))
        .forEach(page => {
            createPage({
                path: page.node.frontmatter.slug,
                component: PageTemplate,
                context: {
                    slug: page.node.frontmatter.slug,
                },
            });
        });

    // generate tags
    markdownFiles
        .filter(item => item.node.frontmatter.tags !== null)
        .reduce((acc, cur) => [...new Set([...acc, ...cur.node.frontmatter.tags.map(t => t.toLowerCase())])], [])
        .forEach(uniqTag => {
            const tag = slugify(uniqTag);
            createPage({
                path: `tags/${tag}`,
                component: PostsByTagTemplate,
                context: {
                    tagRegex: `/^${uniqTag.toLowerCase()}$/i`,
                    tag,
                },
            });
        });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions;

    if (node.internal.type === `MarkdownRemark`) {
        const value = createFilePath({ node, getNode });
        createNodeField({
            name: `slug`,
            node,
            value,
        });
    }
};

module.exports = {
    extensions: [`.mdx`, `.md`],
    defaultLayouts: {
        default: require.resolve('../../../src/templates/page.tsx'),
    },
    gatsbyRemarkPlugins: [
        {
            resolve: 'gatsby-remark-images',
            options: {
                maxWidth: 590,
                linkImagesToOriginal: false,
                withWebp: true,
                markdownCaptions: true,
                showCaptions: ['title', 'alt'],
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
    ],
};

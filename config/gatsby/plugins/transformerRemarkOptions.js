module.exports = {
    plugins: [
        `gatsby-remark-images`,
        {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
                destinationDir: f => `downloads/${f.name}`,
                ignoreFileExtensions: [`png`, `jpg`, `jpeg`, `bmp`, `tiff`],
            },
        },
    ],
};

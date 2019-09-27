import prettier from 'prettier';
import glob from 'glob';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const getArticleFiles = () => {
    return glob.sync(join(__dirname, '..', 'content', 'posts', '**', '*.mdx'));
};

const getPagesFiles = () => {
    return glob.sync(join(__dirname, '..', 'content', 'pages', '**', '*.mdx'));
};

const parseFile = async (fileName: string) => {
    let markdown = '';

    const content = readFileSync(fileName).toString();
    const temp = content.split('---');
    const frontmatter = temp[1];
    const mdContent = temp[2];

    const updatedFrontmatter = `\r\npublished: true${frontmatter}`;
    markdown = prettier.format(`---\r\n${updatedFrontmatter}\r\n---\r\n${mdContent}`, {
        ...require('../.prettierrc'), // eslint-disable-line global-require
        parser: 'mdx',
    });
    writeFileSync(fileName, markdown);
    console.log(`${fileName} has been updated`); // eslint-disable-line no-console
};

const main = () => {
    getArticleFiles().map(parseFile);
    getPagesFiles().map(parseFile);
};

main();

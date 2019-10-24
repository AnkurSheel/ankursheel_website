import prettier from 'prettier';
import glob from 'glob';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import inquirer from 'inquirer';

const getPostFiles = () => {
    return glob.sync(join(__dirname, '..', 'content', 'posts', '**', '*.mdx'));
};

const getPagesFiles = () => {
    return glob.sync(join(__dirname, '..', 'content', 'pages', '**', '*.mdx'));
};
const parseFile = (fileName: string, propertyName: string, propertyValue: string) => {
    let markdown = '';

    const content = readFileSync(fileName).toString();
    const temp = content.split('---');
    const frontmatter = temp[1];
    const mdContent = temp[2];

    const updatedFrontmatter = `\r\n${propertyName}: ${propertyValue}${frontmatter}`;
    markdown = prettier.format(`---\r\n${updatedFrontmatter}---\r\n${mdContent}`, {
        ...require('../.prettierrc'), // eslint-disable-line global-require
        parser: 'mdx',
    });
    writeFileSync(fileName, markdown);
    console.log(`${fileName} has been updated`); // eslint-disable-line no-console
};

const main = async () => {
    const prompt = await inquirer.prompt([
        {
            type: 'input',
            name: 'propertyName',
            message: 'Enter Property Name',
        },
        {
            type: 'input',
            name: 'propertyValue',
            message: 'Enter Property Value',
        },
        {
            type: 'list',
            name: 'posts',
            message: 'Add to posts (yes/no)',
            choices: [{ name: 'Yes', value: 'Y' }, { name: 'No', value: 'N' }],
        },
        {
            type: 'list',
            name: 'pages',
            message: 'Add to pages (yes/no)',
            choices: [{ name: 'Yes', value: 'Y' }, { name: 'No', value: 'N' }],
        },
    ]);

    const { propertyName, propertyValue, posts, pages } = prompt;

    if (posts === 'Y') {
        getPostFiles().forEach(f => {
            parseFile(f, propertyName, propertyValue);
        });
    }

    if (pages === 'Y') {
        getPagesFiles().forEach(f => {
            parseFile(f, propertyName, propertyValue);
        });
    }
};

main();

import { readFile } from 'fs';
import { join, dirname } from 'path';
import glob from 'glob';
import YAML from 'yaml';
import puppeteer from 'puppeteer';
import inquirer from 'inquirer';

const baseUrl = process.argv[2] || 'http://localhost:8000/blog/';

const takeScreenshot = async (url: string, width: number, height: number, destination: string) => {
    const browser = await puppeteer.launch({
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    const page = await browser.newPage();
    await page.goto(url, {
        waitUntil: 'networkidle2',
    });
    await page.screenshot({
        path: destination,
        clip: {
            x: 0,
            y: 0,
            width,
            height,
        },
    });

    await browser.close();
};

const getArticleFiles = () => {
    return glob.sync(join(__dirname, '..', 'content', 'posts', '**', '*.mdx'));
};

type FileProperties = {
    directory: string;
    slug: string;
};
const parseFile = async (file: string): Promise<FileProperties> => {
    return new Promise((resolve, reject) => {
        readFile(file, 'utf8', (err, content) => {
            if (err) {
                return reject(err);
            }

            const frontmatter = content.split('---')[1];
            const data = YAML.parse(frontmatter);

            return resolve({
                directory: dirname(file),
                slug: data.slug,
            });
        });
    });
};

const main = async () => {
    const prompt = await inquirer.prompt([
        {
            type: 'input',
            name: 'folderName',
            message: 'Enter Folder name to generate images for (leave empty to generate for all folders)',
        },
        {
            type: 'input',
            name: 'year',
            message: 'Enter year (required if you entered a folder name)',
        },
    ]);

    const { folderName, year } = prompt;

    let files: FileProperties[] = [];
    if (folderName) {
        const articleFile = join(__dirname, '..', 'content', 'posts', year, folderName, 'index.mdx');
        const parsedFile = await parseFile(articleFile);
        files.push(parsedFile);
    } else {
        files = await Promise.all(getArticleFiles().map(parseFile));
    }

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const destPrefix = join(file.directory, `image-`);
        const fbFile = `${destPrefix}facebook.png`;
        const twFile = `${destPrefix}twitter.png`;

        await takeScreenshot(`${baseUrl}${file.slug}/image_fb`, 1200, 630, fbFile); // eslint-disable-line no-await-in-loop
        console.log(`Created ${fbFile}`); // eslint-disable-line no-console

        await takeScreenshot(`${baseUrl}${file.slug}/image_tw`, 440, 220, twFile); // eslint-disable-line no-await-in-loop
        console.log(`Created ${twFile}`); // eslint-disable-line no-console
    }
};

main();

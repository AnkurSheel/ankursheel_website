import glob from 'glob';
import inquirer from 'inquirer';
import { join, relative } from 'path';
import puppeteer from 'puppeteer';

const baseUrl = process.argv[2] || 'http://localhost:8000/blog/';

const takeScreenshot = async (url: string, width: number, height: number, destination: string) => {
    const browser = await puppeteer.launch({
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    const page = await browser.newPage();
    await page.goto(url, {
        waitUntil: 'networkidle2',
    });
    await page.setViewport({
        width,
        height,
    });
    await page.screenshot({
        path: destination,
    });

    await browser.close();
};

const baseDir = join(__dirname, '..', 'content', 'posts');

const getArticleFiles = () => {
    return glob.sync(join(baseDir, '**', '*.mdx'));
};

const getPostDetailsFromDir = (postName: any) => {
    const [, year, date, path] = postName.match(/^([\d]{4})\\([\d]{4}-[\d]{2}-[\d]{2})-(.+)\\index.mdx$/);

    return { year, date, path };
};

const getYearFromFolderName = (folderName: any): string => {
    const [, year] = folderName.match(/^([\d]{4})(.+)$/);

    return year;
};

const main = async () => {
    const prompt = await inquirer.prompt([
        {
            type: 'input',
            name: 'folderName',
            message: 'Enter Folder name to generate images for (leave empty to generate for all folders)',
        },
    ]);

    const { folderName } = prompt;

    let files: string[] = [];
    if (folderName) {
        const year = getYearFromFolderName(folderName);
        const articleFile = join(baseDir, year, folderName, 'index.mdx');
        files.push(articleFile);
    } else {
        files = await Promise.all(getArticleFiles());
    }

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const dir = relative(baseDir, file);
        const postDetails = getPostDetailsFromDir(dir);
        const destPrefix = join(baseDir, postDetails.year, `${postDetails.date}-${postDetails.path}`, `image-`);
        const fbFile = `${destPrefix}facebook.png`;
        const twFile = `${destPrefix}twitter.png`;

        await takeScreenshot(`${baseUrl}${postDetails.path}/image_fb`, 1200, 630, fbFile); // eslint-disable-line no-await-in-loop
        console.log(`Created ${fbFile}`); // eslint-disable-line no-console

        await takeScreenshot(`${baseUrl}${postDetails.path}/image_tw`, 440, 220, twFile); // eslint-disable-line no-await-in-loop
        console.log(`Created ${twFile}`); // eslint-disable-line no-console
    }
};

main();

import slugify from '@sindresorhus/slugify';
import fs from 'fs';
import inquirer from 'inquirer';
import jsToYaml from 'json-to-pretty-yaml';
import mkdirp from 'mkdirp';
import path from 'path';
import prettier from 'prettier';

const padLeft0 = (n: number) => n.toString().padStart(2, '0');
const fromRoot = (...p: string[]) => path.join(__dirname, '..', ...p);
const formatDate = (d: Date) => `${d.getFullYear()}-${padLeft0(d.getMonth() + 1)}-${padLeft0(d.getDate())}`;

const listify = (a: string) => (a && a.trim().length ? a.split(',').map(s => s.trim()) : '');

const generateBlogPost = async () => {
    const prompt = await inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Title',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Excerpt/Description',
        },
        {
            type: 'input',
            name: 'tags',
            message: 'Tags/Keywords (comma separated)',
        },
        {
            type: 'list',
            name: 'images',
            message: 'Post has images (yes/no)',
            choices: [{ name: 'Yes', value: 'Y' }, { name: 'No', value: 'N' }],
        },
    ]);

    const { title, description, tags, images } = prompt;

    const date = new Date();
    const slug = slugify(title);
    const destination = fromRoot('content/posts', `${date.getFullYear().toString()}`, `${formatDate(date)}-${slug}`);

    mkdirp.sync(destination);

    const yaml = jsToYaml.stringify({
        published: false,
        author: 'Ankur Sheel',
        date: formatDate(new Date()),
        slug,
        title,
        excerpt: description,
        tags: listify(tags),
        featuredImage: '',
        featuredImagePosition: '',
        imageFacebook: './image-facebook.png',
        imageTwitter: './image-twitter.png',
    });
    const markdown = prettier.format(`---\r\n${yaml}\r\n---\r\n`, {
        ...require('../.prettierrc'), // eslint-disable-line global-require
        trailingComma: 'es5',
        endOfLine: 'crlf',
        parser: 'mdx',
    });

    fs.writeFileSync(path.join(destination, 'index.mdx'), markdown);

    if (images === 'Y') {
        const data = {
            gallery: [{ image: `./${slug}-1.jpg`, title: '' }],
        };

        const json = prettier.format(JSON.stringify(data, null, 4), {
            ...require('../.prettierrc'), // eslint-disable-line global-require
            trailingComma: 'es5',
            endOfLine: 'crlf',
            parser: 'json',
        });
        const imagesDestination = path.join(destination, 'images');
        mkdirp.sync(imagesDestination);
        fs.writeFileSync(path.join(imagesDestination, 'data.json'), json);
    }

    console.log(`${destination.replace(process.cwd(), '')} is all ready for you`); // eslint-disable-line no-console
};

generateBlogPost();

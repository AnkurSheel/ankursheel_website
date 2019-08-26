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
const removeEmpty = (obj: any) => {
    return Object.entries(obj).reduce((o: any, [key, value]) => {
        if (value) {
            o[key] = value;
        }
        return o;
    }, {});
};

const listify = (a: string) => (a && a.trim().length ? a.split(',').map(s => s.trim()) : null);

const generateBlogPost = async () => {
    const { title, description, categories, tags, featured_image } = await inquirer.prompt([
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
            name: 'categories',
            message: 'Categories (comma separated)',
        },
        {
            type: 'input',
            name: 'tags',
            message: 'Tags/Keywords (comma separated)',
        },
        {
            type: 'list',
            name: 'featured_image',
            message: 'Add a featured image (yes/no)',
            choices: [{ name: 'Yes', value: 'Y' }, { name: 'No', value: 'N' }],
        },
    ]);

    const date = new Date();
    const slug = slugify(title);
    const destination = fromRoot('content/posts', `${date.getFullYear().toString()}`, `${formatDate(date)}-${slug}`);

    mkdirp.sync(destination);

    const yaml = jsToYaml.stringify(
        removeEmpty({
            author: 'Ankur Sheel',
            date: formatDate(new Date()),
            slug,
            title,
            excerpt: description,
            categories: listify(categories),
            tags: listify(tags),
            featuredImage: featured_image === 'Y' ? './cover.png' : null,
            imageFacebook: featured_image === 'Y' ? './image-facebook.png' : null,
            imageTwitter: featured_image === 'Y' ? './image-twitter.png' : null,
            'generate-card': featured_image === 'N' ? 'false' : null,
        })
    );
    const markdown = prettier.format(`---\n${yaml}\n---\n`, {
        ...require('../.prettier.config'),
        parser: 'mdx',
    });

    fs.writeFileSync(path.join(destination, 'index.mdx'), markdown);
    console.log(`${destination.replace(process.cwd(), '')} is all ready for you`);
};

generateBlogPost();

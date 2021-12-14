---
title: 'How to automate the creation of a new blog post'
excerpt: 'Creating a new blogpost in markdown and gatsby has quite a bit of boilerplate. Let us see how to automate it.'
tags:
    - 'devops'
    - 'tutorial'
    - 'Gatsby'
    - 'typescript'
---

MDX and gatsby are great for building a blog. But it's a pain to create all the skeleton stuff every time I want to create a new blog post.

## Steps to create a new blog post

1. Create a new folder under _content/posts/{year}/{date-slug}/_
1. Create a new _index.mdx_ file in the above folder.
1. Copy the frontmatter from a template file or an existing post.
1. Modify most of the properties for the new post.
1. If the post has an image gallery, then
    1. create a subfolder with the name _images_.
    1. copy a _data.json_ file from an existing folder and update it.

Here is an example of the frontmatter for this post

```yaml
---
author: 'Ankur'
date: '2019-09-12'
slug: 'automating-creation-of-new-blog-post'
title: 'Automating the creation of a new blog post'
excerpt: 'Creating a new blogpost in markdown and gatsby has quite a bit of skeleton stuff. Lets see how to automate it.'
tags:
    - 'tutorial'
    - 'gatsby'
    - 'typescript'
featuredImage: ''
featuredImagePosition: ''
---
```

> Wouldn't it be nice if it could all be generated by a single command?

Now you might ask whether it's worth spending the few extra hours to automate something that takes just a few minutes of my time.

You might be correct in saying that it doesn't save me much time, and there is not much of a context switch when I am starting a new post. But it's a pain creating this manually every time, and it's also error-prone.

> Let's Automate all the things

## Libraries we will be using

Install the following packages using _yarn_ or _npm_.

-   [slugify](https://github.com/sindresorhus/slugify): Slugify the title automatically
-   [inquirer](http://npm.im/inquirer): CLI get user input for title, excerpt, tags etc
-   [jsToYaml](https://github.com/alexcrist/json-to-pretty-yaml): Convert json to YAML
-   [mkdirp](https://github.com/substack/node-mkdirp): helper to create directories
-   [prettier](https://github.com/prettier/prettier): _Optional_. Code formatter to format the generated files using a prettier config.

## Let's build the script

### Helper functions

```javascript
const padLeft0 = (n: number) => n.toString().padStart(2, '0');

const fromRoot = (...p: string[]) => path.join(__dirname, '..', ...p);

const formatDate = (d: Date) => `${d.getFullYear()}-${padLeft0(d.getMonth() + 1)}-${padLeft0(d.getDate())}`;

const listify = (a: string) => (a && a.trim().length ? a.split(',').map((s) => s.trim()) : '');
```

### Use Inquirer to get details from the user

In my case, I am getting the _title_, _description_, _tags_ and _whether the post has images_.

```javascript
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
        message: 'Post has image gallery (yes/no)',
        choices: [
            { name: 'Yes', value: 'Y' },
            { name: 'No', value: 'N' },
        ],
    },
]);

const { title, description, tags, images } = prompt;
```

### Create the folder structure

```javascript
const date = new Date();
const slug = slugify(title);

const destination = fromRoot('content/posts', `${date.getFullYear().toString()}`, `${formatDate(date)}-${slug}`);

mkdirp.sync(destination);
```

The date is set to the current date, and the slug is automatically created from the title.

The folder is created with a consistent structure.

### Create the MDX file with the frontmatter

```javascript
const yaml = jsToYaml.stringify({
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
```

So what's happening in the above code snippet

-   **_Lines 1-12_**: Create a JSON object and use _jsToYaml_ to convert it to a _YAML_ object.
-   **_Lines 13-18_**: Use prettier to get a formatted string of the _yaml_ object and wrap it with _---_ so that it's in a format that the MDX expects.

Some of the properties are hardcoded, such as _author_, _imageFacebook_, _imageTwitter_, and the rest are auto-generated.

The file name is also consistently named _index.mdx_ and lives in the created folder.

### Create the images folder and data.json _(if required)_

```javascript
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
```

Let's see what's happening here.

-   **_Line 1_**: Create the images folder only if the user indicated that this post will have an image gallery.
-   **_Lines 2-4_**: Create the basic JSON object with a single entry for _image_.
-   **_Lines 6-11_**: Use prettier to get a formatted string of the _json_ object.
-   **_Lines 13-14_**: Create the images folder.
-   **_Line 16_**: Create the _data.json_ file.

## Other Notes

-   It might be better/faster to write the generator using [plop](https://github.com/amwmedia/plop) so that I have a single template file that can be used. Plop also supports modifying a file which might be helpful if I have many blog posts and want to change the frontmatter structure.

## Conclusion

Setting up a new blog post can take a few minutes of my time and can be prone to errors, but with this script, I just need to call the script, enter a few values specific to the post, and I am ready to start writing.

You can see the whole script [here](https://github.com/AnkurSheel/ankursheel_website/blob/master/scripts/createNewBlogpost.ts).

Have you automated something in your projects? What modifications would you make to this script? Let me know.
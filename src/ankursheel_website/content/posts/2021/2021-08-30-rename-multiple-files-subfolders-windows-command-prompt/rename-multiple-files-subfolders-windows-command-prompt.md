---

title: "How to rename multiple files in subfolders using Windows command prompt"
excerpt: "A single command to update the file extensions for files in all the subfolders using a single command in Windows command prompt"
updatedOnDate: "2022-06-20"
category: "programming"
tags:

- 'snippet'
- 'website migration'

---

## Problem

As part of the [migration from Gatsby to Statiq](./migrating-gatsby-statiq), I had to rename all the files with the extension _mdx_ to _md_.

For the posts, the _mdx_ file lived in a directory structure similar to **posts/_yyyy_/_yyyy-mm-dddd-slug_/index.mdx**. I wanted to updated this to **posts/_yyyy_/_yyyy-mm-dddd-slug_/slug.md**.

Now, I could do it one by one or find a utility but using a single command is more elegant.

## Solution

You can start using the REN (rename) command to update the filename to the parent directory name.

```bat
for /r %%F in (*.mdx) do (
    for %%A in ("%%F\..") do (
        ren "%%F" "%%~nxA.mdx
        )
)"
```

Let's unpack this command.

- **Line 1**: Loops through all the MDX files recursively and set the value to a parameter.
- **Line 2**: Loop through the parent directory for the MDX file.
- **Line 3**: renames the MDX file to the parent directory name.
  - **~nxA**: Expands the value stored in parameter **A** to a filename and extension

As an example this will rename a file in **posts/_yyyy_/_yyyy-mm-dddd-slug_/index.mdx** to **posts/_yyyy_/_yyyy-mm-dddd-slug_/_yyyy-mm-dddd-slug_.mdx**.

This is not exactly what we wanted, so let's use another REN command.

```bat
for /r %%F in (*.mdx) do (
    ren "%%F" "///////////*.md
)"
```

Let's unpack this command.

- **Line 1**: Loops through all the MDX files recursively and set the value to a parameter.
- **Line 2**: Renames the file to .md. The **/** drops 1 character from the filename. The number of slashes maps to _yyyy-mm-dddd_ in the file name.

As an example this will rename a file in **posts/_yyyy_/_yyyy-mm-dddd-slug_/_yyyy-mm-dddd-slug_.mdx** to posts/_yyyy_/_yyyy-mm-dddd-slug_/_slug_.md.

## Further Reading

- [FOR /R](https://ss64.com/nt/for_r.html)
- [REN](https://ss64.com/nt/ren.html)
- [Command Line arguments](https://ss64.com/nt/syntax-args.html)

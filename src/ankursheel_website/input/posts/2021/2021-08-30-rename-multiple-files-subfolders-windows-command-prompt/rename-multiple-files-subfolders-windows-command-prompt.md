---
title: 'How to rename multiple files in subfolders using Windows command prompt'
excerpt: 'A single command to update the file extensions for files in all the subfolders using a single command in Windows command prompt'
tags:
    - 'snippet'
    - 'project updates'
    - 'website migration'
---

## Problem

As part of the [migration from Gatsby to Statiq](./migrating-gatsby-statiq), I had to rename all the files with the extension _mdx_ to _md_. Now, I could do it one by one or find a utility but using a single command is more elegant.

## Solution

To rename all the files recursively, we can use the REN (rename) command as follows.

```bash
FOR /R %G IN (*.mdx) DO REN "%G" "%~dpnG.md"
```

Let's unpack this command.

-   **FOR**: Loops through files
-   **/R**: Recurse through subfolders.
-   **%G**: A parameter set to a different value for each iteration of the for loop.
-   **(\*.mdx)**: The filename pattern that we want to match.
-   **REN**: The command to rename a file
-   **%~dpnG"**: Expands the parameter of the original filename to the fully qualified path without the extension

References:

-   [FOR /R](https://ss64.com/nt/for_r.html)
-   [REN](https://ss64.com/nt/ren.html)
-   [Command Line arguments](https://ss64.com/nt/syntax-args.html)

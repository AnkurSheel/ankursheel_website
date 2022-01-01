---
title: 'Deploy a Statiq website using Tailwind CSS to Netlify'
excerpt: 'A guide to installing Tailwind CSS on deploying a Statiq website'
tags:
    - 'Statiq'
    - 'tailwind'
    - 'website migration'
---

In this article, I will be showing how we can deploy a website built with [Tailwind CSS](https://tailwindcss.com/) and [Statiq](https://www.statiq.dev/web/) on [Netlify](https://www.netlify.com/).

## Problem

As part of the [migration from Gatsby to Statiq](./migrating-gatsby-statiq), I wanted to deploy my website built with Statiq and Tailwind to Netlify. Netlify allows for only one build command on deployment. The issue is that Tailwind is available as an npm package while Statiq is a .Net solution, and hence both require different commands to run.

## Solution

There are a few ways to do this, but since Statiq Web supports running external processes as part of execution, we will leverage that to install the npm packages and build our statiq website.

### Step 1: Get the directories

```csharp
var currentDirectory = Directory.GetCurrentDirectory();
var nodeDirectory = Path.Combine(currentDirectory, "..", "node");
var inputDirectory = Path.Combine(currentDirectory, "input");
```

-   **Line 1**: Get the current directory
-   **Line 2**: My npm packages and configs are stored in a node folder, so I need to get the node directory.
-   **Line 3**: Get the input directory where all the razor views are stored.

### Step 2: Install the npm packages

```csharp
bootstrapper.AddProcess(
    ProcessTiming.Initialization,
    _ => new ProcessLauncher("npm", "install")
    {
        LogErrors = false,
        WorkingDirectory = nodeDirectory
    })
```

-   **Line 1**: Adds a new process.
-   **Line 2**: Configures the process to run only once on initialization.
-   **Line 3**: Creates a new process launcher to install the npm packages.
-   **Line 5**: Ignore errors from npm that would fail the build.
-   **Line 6**: Set the working directory to the node directory.

### Step 3: Compile CSS with Tailwind

```csharp
bootstrapper.AddProcess(
    ProcessTiming.Initialization,
   _ => new ProcessLauncher("npx", "tailwind", "build",
    $"-i {Path.Combine(inputDirectory, "_site.css")}",
    $"-o {Path.Combine(currentDirectory, "output", "styles.css")}")
{
    LogErrors = false,
    WorkingDirectory = nodeDirectory
});
```

-   **Line 3**: Use npx to generate a fully compiled Tailwind CSS file.
-   **Line 4**: Set the input path of the custom CSS file to _\_site.css_ in the input directory.
-   **Line 5**: Set the path for compiled CSS to the output directory.

## Conclusion

Now, as part of building the statiq website, the CSS will be generated on each deployment.

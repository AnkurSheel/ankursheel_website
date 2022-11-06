---
title: "Migrating from Gatsby to Statiq"
excerpt: "I have been on Gatsby for 2 years now. What motivated me to migrate my site to Statiq, and how did I move the site"
category: "ramblings"
tags:

- "Statiq"
- "gatsby"
- "tailwind"
- "website migration"

---

## My Blogging Journey

In 2019, I moved from WordPress to Gatsby. But, after 2 years and with Gatsby releasing v3, it's time to evaluate the options available in the market.

You can read more about why I migrated to Gatsby and the earlier parts of the journey at [Why and How I migrated my website from WordPress to Gatsby](./migrating-wordpress-gatsby).

## Reasons for moving away from Gatsby

There were a few reasons that the Gatsby solution is not working for me anymore. In no particular order,

- Lots of dependencies and updates
  - Gatsby is based on a plugin architecture. Hence, there are a lot of explicit dependencies that have to be added to get a functional site. I had dependabot running on a monthly cadence, and every month dependabot would open almost 50 PR's.
  - Sometimes, I would upgrade a package only to find it was incompatible with another package. With some libraries moving over to ES Modules, I am running into this a lot more.
- Hard to make changes
  - After every few upgrades, using the library to generate types for the GraphQl queries would break with cryptic errors. Even updating some other libraries would break my custom tooling. This resulted in a few days being lost to yak-shaving.
  - Upgrading packages would sometimes result in JS memory error in CI. This meant more fiddling with manually changing the memory available and deleting the caches so that the site would deploy again.
- Programming Language that I don't use anywhere else
  - I never enjoyed the process of writing Javascript to make modifications. With Typescript and React, things are a lot better but with Gatsby and other libraries, not having types out of the box made adding types a chore.
- Graphql
  - Gatsby is based on GraphQl. Although I like how Graphql works and use it extensively in my working life, it seemed overkill to generate static pages.
- Lack of a strongly typed system
  - When I moved to Gatsby, I was using Typescript at work. Since then, I have realized that I enjoy working with a strongly typed and more mature language like C#.
  - Gatsby and many other libraries don't come with types out of the box, which meant I had to figure out the types on my own or lose things like IntelliSense and errors at compile time.
- Hard to write tests and get confidence when I am making changes
  - I don't know if it's my experience with Javascript or if Gatsby makes it hard, but I was never able to add tests which increased my stress every time I wanted to make a change.
- JS out of memory error in CI
  - For no reason, I get Javascript out of memory errors when building in CI. I don't know why it happens, and a random fix of modifying the space size seems to do the trick.

## Why Statiq

With Gatsby releasing v3 and being a non-trivial migration, I decided to see what other generators are there.

The first obvious option I considered was migrating to Gatsby v3, but I was not overly keen on it.

The next option was [NextJS](https://nextjs.org/), which is also based on Javascript. I have been hearing increasingly good things about it, and to be honest, I would have probably gone with NextJs, if I had not stumbled upon Statiq.

[Statiq](https://www.statiq.dev/) is based on C#, a language I have used for many years and am still using daily.

Let's see how it stacks up against my concerns from the previous section.

- ~~Lots of dependencies and updates~~
  - To include Statiq, I just need to add 1 package. Regardless of whether I use Statiq.Web or Statiq.Framework, I just need to add 1 package, and it will get all the dependencies for me.
  - The C# packaging system also feels a lot more sensible in the sense that you opt-in for even patch upgrades.
- Hard to make changes
  - I don't think I will be able to get away with some amount of yak shaving, but hopefully, it will be less than now.
- ~~Programming Language that I don't use anywhere else~~
  - I use C# daily, and OOP(Object Oriented Programming) is something I have been working with for almost my entire programming life.
- ~~Graphql~~
  - Statiq does not use GraphQl
- ~~Javascript~~
  - Statiq is based on C#, which is a strongly typed language.
- ~~Hard to write tests and get confidence when I am making changes~~
  - I have a lot more experience writing tests for C#. Hopefully, that will enable me to write tests and get more confidence when making changes.
- ~~JS out of memory error in CI~~
  - There is no JS, so not an issue.

### Other Thoughts

Statiq.Web has built-in functionality, which is capable of handling the most common scenarios. As I am rebuilding the site, I will start with using it. If I am fighting/modifying the library a lot, I will move to Statiq.Framework, which has most of the modules to help build a custom Static Site Generator.

I will also be using [TailwindCSS](https://tailwindcss.com/) as I have heard good things about it and want to see what the hype is about.

I won't be migrating this blog, but instead, I will be migrating [Discoveries in Bookland](https://www.discoveriesinbookland.com/), based on the same theme as this blog but has less complexity and pages. If that goes well, then I will look at migrating this blog as well.

## My migration process

_I will fill this section out with links to pages so that you can follow along as I migrate the site._

### Must-Haves

- Remove all _js_ files and add a C# solution and project file.
- Rename _content_ folder to _input_.
- Move _images_ to _input/asset_ folder.
- [Rename all _.mdx_ files to _.md_](./rename-multiple-files-subfolders-windows-command-prompt).
- Add a a package reference to `Statiq.Web`.
- [Update netlify to deploy a branch using Statiq](./override-netlify-build-config) to create the website.
- [Add tailwind](./add-tailwind-css-statiq-website).
- [Deploy site to netlify](./deploy-statiq-website-tailwind-netlify).
- [Disable the provided asset and content pipelines](./replace-pipeline-statiq).
- Add pipelines for Assets, HomePage, Pages, Post List, Post, TagList and Tags.
- Add layouts and SEO tags.

### Nice to haves (after migration)

- Add a 404 page
- Add buy me a coffee button
- Add contact me page
- Generate social images
- Add pipeline for sitemap
- Add pipeline for RSS feed
- Minify assets

## Conclusion

Although it's an ongoing process, I am happy with how the migration is progressing. [Discoveries in bookland](https://www.discoveriesinbookland.com/) is now built with Statiq and Markdown and hosted on Netlify. Instead of JS, it's all in .Net, and I still have control over my content and blog structure. All the posts are in version control, so there is no need for tons of backups.

If you would like to know more about something specific, let me know.

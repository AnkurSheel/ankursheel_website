---
title: "Why and How I migrated my website from WordPress to Gatsby"
excerpt: "For most of the time, I have been blogging, I have been on WordPress. What motivated me to migrate my site to Gatsby, and how did I move the site"
coverImage: "./cover.png"
category: "opinion"
tags:
  - "devops"
  - "gatsby"
  - "wordpress"
  - "website migration"
---

## My Blogging Journey

I started blogging in 2008 with a free Blogspot account. If you are wondering what I am talking about, Blogspot was the free blogging platform provided by Google.

But it was not until 2014 that I decided to get my domain and have more control over the content and structure of the blog. Enter self-hosting. At that time, WordPress was probably the most popular service, and I moved to a self-hosted blog leveraging all the power of WordPress.

## Reasons for moving away from WordPress

There were a few reasons that the WordPress solution was not working for me anymore. In no particular order,

-   Slow
    -   Let's face it, shared hosting does not make for a fast site. Also, WordPress is itself sluggish, and the various plugins I had added were not helping.
-   Cost
    -   Most hosting platforms have a heavily discounted first-year plan, after which the price rises astronomically. This resulted in me having to migrate my site every year to a new platform. A few providers made it difficult to cancel the plan and get back the data unless you did it a month in advance. It was getting harder to justify the expense of 100+ USD. Even the cheapest option would easily set me back by 50-60 USD.
-   Degraded Experience in writing posts
    -   With the release of the new generation editor and having to do everything with content blocks, I felt like I was spending more time than I felt was required to create a new post.
    -   I did not want to log in to the site every time I wanted to create a new post or work on an existing draft.
-   Programming Language that I don't use anywhere else
    -   I never enjoyed the process of writing PHP to make modifications. The few custom modifications that I made on the site felt like a chore. The fact that I could never see myself using PHP anywhere else probably did not help either.

## Why Gatsby

Recently, it has become easier to have a relatively cheap solution for hosting static content by using a static site generator. There are quite a few options out there.

The first that comes to mind is [Github pages](https://pages.github.com/), which comes nicely integrated with [Jekyll](https://jekyllrb.com), which is a static website generator. Although it ticked 3 of the 4 boxes above, I did not feel it was the ideal solution for me mainly because the development language was Ruby, another language I couldn't see myself using anywhere else.

It was a similar story with Hugo, which uses Go.

Just when it seemed that I would have to resign myself to use Github Pages, I found out about [Gatsby](https://gatsbyjs.org), which is based on Javascript. I have been using Typescript increasingly at work, so this seemed like the perfect solution.

Let's see how it stacks up against my concerns from the previous section.

-   ~~Slow~~
    -   Gatsby sites are fast. Blazingly fast.
-   ~~Cost~~ Netlify is awesome.- It's free to host it on [Netlify](http://www.netlify.com). You can't beat free. It requires almost no setup, and every time I push to master, a new version of the site is deployed.
-   ~~Degraded Experience of writing posts~~
    -   It supports markdown and MDX, which means I can write and edit the posts in any text editor and anywhere. I can also embed react components.
-   ~~Programming Language that I don't use anywhere else~~
    -   It's built on the **JAM**stack (**J**avascript **A**PI **M**arkup). All the custom tooling I want to do uses ReactJS, GraphQL, JavaScript/Typescript and CSS. I am using all of these at work, so I can easily transfer the learnings from one place to another.

### Other Advantages

-   Build reusable components and use them to construct views.
-   Hot Reloading and code-splitting are built-in.
-   Can easily be configured to use Typescript.
-   A bunch of plugins and starters (both official and unofficial).
-   Support for CSS-in-JS.
-   Responsive and optimized images.
-   No reloads between pages.
-   Gatsby detects what links are on the page and prefetches the content.
-   Support for MDX which means I can embed React components into the posts.

## My migration process

It's also not difficult to move your blog from WordPress to Gatsby. I will give you the basics of what I did if you also want to make the switch.

-   Download the XML from Wordpress using the "Tools-> Export" section.
-   Use the [ExitWP](https://github.com/thomasf/exitwp) or [Wordpress-to-Hugo](https://github.com/SchumacherFM/wordpress-to-hugo-exporter) tool to convert the posts to markdown.
-   Download all the images and other content from the server.
-   Find a Gatsby start starter so that it's easy to get started.
-   Add Git LFS as some of my posts are image-heavy.
-   Connect to Netlify and set up automatic deploys.
-   The one I used was written in Javascript, so I had to migrate the javascript to Typescript and a few more plugins to enable Typescript. Also, change styling options to use CSS-in-JS.
-   Update styling, colours and layout.
-   Update the starter so that all the blog content is under "/blog/".
-   Add a redirect rule as I decided to remove the date from the URLs.
-   Add the converted markdown.
    -   Fix indent and other issues.
    -   Build missing react components depending on the post content.

## You said it was easy to move from WordPress to gatsby. But I don't see all of your posts. Did you lie?

Depending on when you read this post, you might notice that many posts seem to be missing. At the very least, it doesn't seem as if I have been blogging for so many years. The main reason for this is that the original blog had a lot of varied content.

I have decided to move some of it away to a different blog. For example, I am moving the book reviews to [Discoveries in Bookland](https://www.discoveriesinbookland.com/). Some of it might not even make it to this blog because of the limited value it adds.

I have taken this opportunity to revisit what content I want to show.

## Conclusion

Although it's an ongoing process, I am happy with how the migration is progressing. [my blog](https://www.ankursheel.com) is now built with React, Node.js, Gatsby, Markdown and hosted on Netlify. I still have control over my content and blog structure. All the posts are in version control, so there is no need for tons of backups.

I will be adding more posts related to things I had to go hunting for on google. If you would like to know more about something specific, let me know.

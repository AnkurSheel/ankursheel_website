---
title: 'How long did it take to migrate from WordPress to Gatsby?'
excerpt: "A reader asked me how long it took me to migrate from WordPress to Gatsby. Let's find out"
coverImage: './cover.png'
category: "ramblings"
tags:
    - 'reader question'
    - 'gatsby'
    - 'wordpress'
---

## Reader Question

> I was reading your blog post about migrating from WordPress to Gatsby and had a question about the necessary timeline we should expect. How long did it take you to make your full migration?

_If you are wondering what post is being referred to its [Why and How I migrated my website from Wordpress to Gatsby?](./migrating-from-wordpress-to-gatsby)_

## My Answer

The timeline for the migration depends on the contents of your site.

I started the move away from WordPress to Gatsby in August 2019 and switched over in November 2019. You might think that 3 months is a long time for migrating posts, and you would be correct.

But, it's important to note that I was spending just a few hours a week on this. It would have probably taken me a few hours/days to make the switch if I worked on it full-time.

I used a starter, so I had a base to start from. But, there were a few things I had to modify(which is why it took time) before I was ready to make the switch.

-   getting it to play nicely with Typescript.
-   making sure all the internal links work.
-   building an image gallery component for the image-heavy posts.
-   hunting for the plugins not included in the starter and configuring them

If you are thinking of migrating your site, I would suggest doing what I did.

-   Start with a gatsby starter/theme as your base.
-   If the theme you have chosen doesn't have all the plugins, just add those plugins in.
-   Get an initial version of your site up and running using Netlify.

Update the styling, components, plugin configurations, add automated scripts etc., as you see fit. This will probably be a continuous thing.

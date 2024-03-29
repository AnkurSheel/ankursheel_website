---
title: 'Embed a YouTube video with 16:9 aspect ratio and full-width'
excerpt: 'How we can use CSS to display an iframe with 100% width and 16:9 aspect ratio so that we can display YouTube videos to be full-width with a 16:9 aspect ratio'
category: "programming"
tags:
    - 'tutorial'
    - 'web development'
    - 'typescript'
    - 'react'
coverImage: './images/after.jpg'
---

I struggled for a long time to get my YouTube videos full-width with a 16:9 aspect ratio. Then I found a neat CSS trick to make iframes responsive.

But before we look at the code, let's look at the before and after screenshots.

![Before](./images/before.jpg)

![After](./images/after.jpg)

## Steps

Let's use CSS to display an iframe with 100% width and 16:9 aspect ratio.

When embedding a video from YouTube, we get a snippet of code similar to

```html
<iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/RcnksOUugcA"
    frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
></iframe>
```

### Step 1

Remove all unnecessary properties, including _**width**_ and _**height**_. Our snippet now becomes

```html
<iframe src="https://www.youtube.com/embed/RcnksOUugcA" allowfullscreen></iframe>
```

### Step 2

1. Add a container with a CSS class around the iframe.
1. Add a CSS class to the iframe.

```html
<div class="video-container">
    <iframe class="video" src="https://www.youtube.com/embed/RcnksOUugcA" allowfullscreen></iframe>
</div>
```

### Step 3

Add CSS to the container.

```CSS
.video-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
}
```

**What are we doing here?**

-   **_position: relative_**: Lets us use absolute positioning for the iframe.
-   **_width: 100%_**: Make the width 100% of its parent container.
-   **_padding-bottom: 56.25%_**: The 16:9 aspect ratio corresponds to a height that is 56.25% of the width.

**_Note_**: To find the container aspect ratio, use this formula: _height ÷ width = aspect ratio_.

### Step 4

Add CSS to the iframe.

```CSS
.video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
```

**What are we doing here?**

-   **_position: absolute_**: Free the video from the height boundary of its parent and allow it to be positioned over the padding area.
-   **_top: 0_**: Position the video at the top of its parent container.
-   **_left: 0_**: Position the video at the left of its parent container.
-   **_width: 100%_**: Stretch the video to fill the width of its parent container.
-   **_height: 100%_**: Stretch the video to fill the height of its parent container.
-   **_border: 0_**: Remove the border.

## Source Code / React Component

You can play around with it [here](https://gatsby-shared-library.netlify.com/?path=/story/video--basic-usage).

If you want to see an example of the code, I have made [a reusable react component](https://github.com/AnkurSheel/gatsby_shared_library/blob/master/src/02-components/video/index.tsx) that I am using on this website.

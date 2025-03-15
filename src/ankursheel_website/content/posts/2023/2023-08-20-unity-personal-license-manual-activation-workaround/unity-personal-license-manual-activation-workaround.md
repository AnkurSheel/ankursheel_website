---
title: "Workaround for Unity Personal License Manual Activation Not Supported"
excerpt: "A workaround for Unity no longer supporting manual activation of Personal licenses."
coverImage: "./no_longer_supported.png"
category: "programming"
tags:
  - "tutorial"
  - "unity"
updatedOnDate: "2024-05-07"
---

**This is not needed anymore with game-ci/unity-builder@v4. ~~If you still need this for some reason, let me know and I can resurrect this~~  I have resurrected it after some people asked for it.**

You decided to add a CI/CD pipeline to your Unity Project using [GameCI](https://game.ci/). 

What's the 1st step? Activating Unity! Easy, right?

You generate the **_alf_** file after creating the github action. You carry on with the list and head to https://license.unity3d.com/manual, all set to create that **_ulf_** file.

## Plot Twist

But wait a second. There is an error - "Unity no longer supports manual activation of Personal licenses."

![Unity no longer supports manual activation of Personal licenses](./no_longer_supported.png)

You disregard the message and upload the **_alf_** file.

But, the option to generate an ulf for a personal license? Poof, it's vanished. Instead, Unity asks us to type in a serial number.

![Activate your license using serial number](./serial_number.png)

## Time for a bit of trickery

Right-click and inspect the serial number box. 

Find the `<div class="option option-personal clear" style="display: none;">` code;

![Html Source](./html_source.png)

And delete `"display: none;"`.

Boom! The Unity Personal Edition option reappears. 🎉

![Page With Personal License](./page_with_personal_license.png)

~~Hopefully, before this hack stops working, GameCI will have an official workaround :)~~

**Updated 05 July 2024:** This is not needed anymore with game-ci/unity-builder@v4.

### Shoutout

And here's a shoutout to [realpepe](https://reallpepe.itch.io/defendron), who shared this hack Discord. 

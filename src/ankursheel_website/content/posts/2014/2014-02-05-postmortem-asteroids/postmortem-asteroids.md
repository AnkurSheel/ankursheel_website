---
title: 'A postmortem of the Asteroids clone'
excerpt: 'Postmortem of the Asteroids clone that I made. '
category: "retrospective"
tags:
    - "games"
    - "postmortem"
---

Asteroids was the first game that I could say was more or less feature complete.

## What Went Right

-   **Reusing the code:** Since I had gone for a dll-architecture, I did not have to write or even copy-paste most of the basic stuff such as rendering, input, audio etc.
-   **Sticking to the Deadline:** I managed to make a fully playable game with menus and levels within a month.
-   **High Scores:** I finally added a system to show high scores. IF you remember, this was one of the features I had wanted to implement for MPong.
-   **Custom Controls:** Allowing players to customize the controls meant that they were not limited to using WASD.
-   **Menus:** I added a bunch of menus such as HighScores, Controls, Help, Options.
-   **Custom Model Format and ObjFormatter:**, A custom model format meant that I could optimize my code to get the information I needed upfront without running multiple passes. Using the ObjFormatter to pre-process the model file before even starting the game helped improve the loading time.
-   **Collision Detection:** The collision detection algorithm was improved considerably. **Pausing:** Instead of quitting the game directly on the game ending or if the player pressed escape, the options screen would come up, allowing the player to restart or go to the main menu.

## What Went Wrong

-   **Missing Engine Components:** I did not get a chance to work on the physics and networking modules.
-   **Missing Features:** I wanted to implement features such as Shields and alternate weapons, but I ran out of time.
-   **Incomplete Model Loader:** The model loader was not equipped to handle normal's and many other things. This meant that I could not add features like lighting or shadows.
-   **Lack of Data-driven architecture:** The fact that I was not reading the tweakable parameters from a file resulted in long wait times to test the effect of a small value on the overall gameplay.
-   **No Editor for making GUI:** Due to the lack of an editor to make GUI's, I wasted a lot of time customizing the position and scale of elements to make the menus look good. Even after all the work, there was no way to handle multiple resolutions.
-   **No Screen Manager:** I would have loved to handle a screen manager to take care of all the transitions. With the addition of each screen, the amount of maintenance needed to handle the transitions increased exponentially.

## Things I wish I had Implemented

- Physics and Networking modules.
-   A better model loader.
-   Better Graphics.
-   Pause on Minimizing.
-   An easier way to edit GUI's.
-   A credit and splash screen.

## Source Code

[Github](https://github.com/AnkurSheel/Asteroids)

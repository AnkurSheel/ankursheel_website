---
title: "A Postmortem of Mpong"
excerpt: "A postmortem of the Pong clone that I made."
category: "retrospective"
tags:
    - "games"
    - "postmortem"
---

The reasons I decided to stop working on Pong before it was completely polished include

-   I had been working on MPong for so long that it was tough to find the motivation to continue working on it.
-   Although I was continuously adding features to the engine, I was not building up my portfolio.
-   I wanted to test my engine with another game and see how much the code is reusable.

## What Went Right

-   **Engine Components**: Starting with Pong as my first game made me concentrate on the engine part. I managed to create a fair amount of the modules I had initially aimed for. Most of the modules were reusable.
-   **Setup**: I managed to develop a relatively painless way of setting up new projects.
-   **Refactoring**: I was pretty happy with how the codebase was at that point (all things considered). The fact that I was continuously refactoring the code was beneficial.
-   **Commenting**: I managed to comment a lot of my classes while programming.
-   **Using a Repository**: Having a repository for my code meant that I could revert any bugs that I introduced without having to waste too much time.

## What Went Wrong

-   **Missing Engine Components**: I did not get a chance to work on the physics and networking modules.
-   **Switching to DirectX 11**: In the middle of the project, I decided to switch to DirectX 11 from DirectX 9. I ended up fixing many bugs that got introduced because of the difference in the way things are handled between the two.
-   **Engine Code as part of Project**: The engine setup and repository was closely tied to the Pong Project. I should have taken out the engine components and made them into a separate repository and solution to be easily reusable.
-   **Not Setting a Deadline**: The fact that I did not have a deadline in place meant that I took my own sweet time to make the game. This has resulted in Mpong being in development for a very long time, without me having to show much for it.
-   **Switching to an Obsolete Technology**: I decided to use DirectSound for my SoundEngine. It was after I had implemented a fair amount of code that someone pointed out to me that I should have used XAudio instead

## Things I wish I had Implemented

- Physics and Networking modules
-   Support for 2D game elements.
-   High Score Table
-   Better Graphics
-   Restart Option
-   Pause on Minimizing

## Source Code

[Github](https://github.com/AnkurSheel/sppong)

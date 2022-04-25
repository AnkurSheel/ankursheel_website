---
title: 'How I structure my Game Engine project'
excerpt: In this post, I will cover the third-party libraries, project breakup, and current directory structure that I follow.
category: "programming"
tags:
    - tutorial
    - game engine
---

This post will cover the third-party libraries, project breakup, and current directory structure that I follow. Even though it's not perfect, it has served me well so far.

## Third-Party Tools

-   libogg and libVorbis- Sound
-   TinyXML - XML
-   Zlib - zip

## Projects in the Solution

-   **Base**

    -   common data structures and classes
    -   Dependencies - None
    -   Project Includes - None
    -   Additional Includes - None

-   **Utilities**

    -   All Utility Functions
    -   Project Dependencies and Libraries - Base
    -   Project Includes - Base
    -   Additional Includes - TinyXML and Zlib path

-   **AI**

    -   AI-related Functionality
    -   Dependencies - Base, Utilities
    -   Project Includes - Base
    -   Additional Includes - None

-   **GraphicsEngine**

    -   All Graphic related code
    -   Dependencies - Base, Utilities
    -   Project Includes - Base, Utilities
    -   Additional Includes - DirectX Includes
    -   Additional Libraries - None

-   **Sound**

    -   Wrappers for playing sound
    -   Dependencies - Base, Utilities
    -   Includes - Base, Utilities
    -   Additional Includes - DirectX Includes, Libogg path

-   **Physics**

    -   All Physics-related code
    -   Dependencies - Base, Utilities
    -   Includes - Base, Utilities
    -   Additional Includes - None

-   **GameBase**

    -   Functionality that is common and setup for every game.
    -   Dependencies - Base, Utilities, AI, GraphicsEngine, Physics, Sound
    -   Includes - Base, Utilities, AI, GraphicsEngine, Physics, Sound
    -   Additional Includes - None

-   **Game**

    -   GamePlay Logic (_We will swap this project for different games_)
    -   Dependencies - Base, Utilities, AI, GraphicsEngine, Physics, Sound, GameBase
    -   Includes - Base, Utilities, GraphicsEngine, GameBase, Sound, AI, GameBase
    -   Additional Includes - DirectX includes

-   **Main**
    -   The exe file
    -   Dependencies - Base, Utilities, Game, GameBase
    -   Project Includes - Base, Utilities, GameBase
    -   Additional Includes - None

## Directory Structure

For each project, I maintain two folders.

-   Include
    -   This folder contains all the interfaces for the respective project. We will include it in all projects that are dependent on it. This way, we will not need to release the underlying implementations. It also reduces the compile-time, if I change the implementation
-   Src
    -   This folder contains all files for the actual implementation. Most of the classes would be inheriting from one of the interfaces in the Include folder

## Final Thoughts

Now that we have the basic directory structure mapped out, the following tutorial will set up the project for the Visual Studio environment.

Till Next Time.

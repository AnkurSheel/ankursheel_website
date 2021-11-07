---
title: 'Setting up the project properties for Game Engine Project'
excerpt: The next post in the series talks about setting the project properties to be persistent.
tags:
    - tutorial
    - game engine
series: 'Game Engine Project'
---

Now that we have decided on the basic directory structure and dependencies that each project will have, we will set the project properties. I prefer to do this at the project level so that the properties are persistent, and I don't have to set them every time I download the project. The steps are based on Visual Studio 2010, but you should be able to adapt them to a different IDE.

## Setting up the Main Exe Project

-   Create a Win 32 Project and delete all the files except for stdafx.h, stdafx.cpp.
-   Create a new folder called Source and move the above files there (I prefer all my source files in one main directory.
-   In the property settings for the project, perform the following steps

    -   For Both Release and Debug Modes
        -   In the tab C/C++ -> General -> Additional Include Directories add
        -   ..\..\Engine\Source\Base\Includes
        -   ..\..\Engine\Source\Utilities\Includes
        -   ..\..\Engine\Source\GameBase\Includes
        -   ..\Game\Includes
    -   For Debug Mode
        -   In the tab Debugging -> Working Directory add
            -   ..\..\Debug\
        -   In the tab Debugging -> Target Name add
            -   \$(ProjectName)\_D
        -   In the tab Linker -> General -> Additional Library Directories add
            -   ..\..\Debug\
        -   In the tab Linker -> Input -> Additional Dependencies add
            -   Utilities_D.lib
            -   Base_D.lib
            -   Game_D.lib
    -   For Release Mode
        -   In the tab Debugging -> Working Directory add
            -   ..\..\bin\
        -   In the tab Linker -> General -> Additional Library Directories add
            -   ..\..\bin\
        -   In the tab Linker -> Input -> Additional Dependencies add
            -   Utilities.lib
            -   Base.lib
            -   Game.lib

## Setting up the DLL's

I will explain how to set up one of the lib projects, which links to an extern library. Properties for all the other projects can be set in the same way by looking at the dependencies from the [previous tutorial](./setting-project-directory-structure)

-   Create a Win 32 Project but change the Application Type to DLL and delete all the files except for stdafx.h, stdafx.cpp _(For tutorial purposes we will be setting up the Utilities project)._
-   Create a new folder called Source and move the above files in there.
-   In the property settings for the project perform the following steps
    -   For Both Release and Debug Modes
        -   In the tab C/C++ -> General -> Additional Include Directories add
            -   Includes
                -   ..\Base\Includes
        -   In the tab Linker -> General -> Additional Library Directories add
            -   ..\..\extern\Lib\Zlib
            -   ..\..\extern\Lib\TinyXml\VS2010
    -   For Debug Mode
        -   In the tab Debugging -> Working Directory add
            -   ..\..\Debug\
        -   In the tab Debugging -> Target Name add
            -   \$(ProjectName)\_D
        -   In the tab Linker -> General -> Additional Library Directories add
            -   ..\..\..\Debug\
        -   In the tab Linker -> Input -> Additional Dependencies add
            -   Base_D.lib
    -   For Release Mode
        -   In the tab Debugging -> Working Directory add
            -   ..\..\bin\
        -   In the tab Linker -> General -> Additional Library Directories add
            -   ..\..\..\bin\
        -   In the tab Linker -> Input -> Additional Dependencies add
            -   Base.lib

## Notes

-   To point to the DirectX directory, we can use the visual studio macro \$(DXSDK_DIR)\Include.

-   I use the suffix \_D to distinguish between debug and release builds.

-   For the most part, only the Include folder should be added in the additional include directories.

## Final Thoughts

This finishes the initial setup. Since I am unsure how much detail I should get into why I set up my projects this way, I will be happy to answer any questions in the comments.

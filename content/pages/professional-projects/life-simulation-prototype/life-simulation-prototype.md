---
title: Life Simulation Prototype
---

## Organization

Gameloft

## The Game

A Life Simulation prototype for the mobile.

## Technology

C++

## Role

-   Suggested and moved the unit tests into separate files for easily manageability.

-   Fixed the SConstruct script and got the project working on device.

-   Modified premake to reduce the time spent on static analysis and validation (in previous projects from upwards of 5-10  minutes to a few seconds) by adding lua script which generated a batch file to do a static analysis only on the modified file. This was then added as post build event removing the need to run a separate project which would validate all the files.

-   Modified premake so that the string hash table was generated as a pre-build event. This reduced the need to run premake to update the hash table when a new string(to be hashed) was added.

-   Made walker tool run after it had been broken

-   Logger tool enhancements.

-   Took an AI masterclass which dealt with the possible AI techniques for a life simulation game.

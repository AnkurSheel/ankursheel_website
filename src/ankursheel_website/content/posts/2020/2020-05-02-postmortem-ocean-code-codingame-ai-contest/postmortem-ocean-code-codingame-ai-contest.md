---
title: 'A postmortem for Ocean of Code (Codingame AI Contest)'
excerpt: 'A postmortem for Ocean of Code, a multiplayer AI bot contest based on Captain Sonar held by codingame'
coverImage: './cover.jpg'
category: "retrospective"
tags:
    - 'Codingame'
    - 'postmortem'
---

Every couple of weeks, there is a contest hosted by the folks at [codingame.com](http://www.codingame.com). This time it was based on Captain Sonar.

![Ocean of Code](./cover.jpg)

If you just want to look at my statistics for this contest, you can just scroll to the bottom but, then you would miss seeing all the things I did wrong. 😊

## Preamble

For the contest, you were in command of 1 ship on a grid, and the goal was to have more hit-points than the other ship by the end of the game. There were islands located all over the map, which you had to avoid crashing into.

Like all other codingame contests, the game was turn-based. Each turn consisted of you reading the world state information from _stdin_ and outputting your action to _stdout_. This would be repeated until only 1 bot was alive or a fixed number of rounds had passed. You also had a maximum of 50 ms to submit your action before you would timeout and die.

There are multiple leagues.

-   Wood 2
-   Wood 1
-   Bronze
-   Silver
-   Gold
-   Legend

To pass each league, you need to beat the boss of that league. Everyone starts from Wood 2, and depending on how good their bot fares, they move to the higher leagues. Also, as you move to the higher leagues, extra rules might apply.

For this contest, I decided to use C#. I decided to record my development. I don't talk, but if you are interested in watching me code, you can find the [playlist here](https://www.youtube.com/playlist?list=PLyHMMEg7mqQ6BO8WfwwoYVHZX7WwhZhwp)

## What Went Right

-   Using C#: It is much faster to write code in C# than C++, especially since it's what I primarily use in my day job.
-   I had already participated in a previous contest at codingame, so I was aware of which tools I could use. For other postmortems click [here](/tags/codingame).

    -   Working with web IDE is a bit clunky, but on the forums, I found a google chrome plugin that allowed me to sync a local file to the web IDE. This allowed me to work in Visual Studio, which made for a much faster workflow. The plugin can be found [here](https://www.codingame.com/forum/t/codingame-sync-beta/614/65).
    -   I already knew I needed some kind of utility that allowed me to combine multiple files into a single c# file which codingame requires. Unfortunately, I couldn't use the existing one I had and had to write a new one. (See [What Went Wrong](#what-went-right))
    -   From earlier contests, I had a python script to help download the game data, parse it and put it into a text file consumed by my program. This allowed me to step through and debug the AI to see that my AI was failing to win because of some bug instead of just relying on the stderr stream. Unfortunately, I couldn't use it as is and had to modify it. (See [What Went Wrong](#what-went-right))

-   Continuous refactoring enabled me to keep my code readable and isolated the areas I had to work on.
-   I tackled the simplest things first to make progress. I was able to reach Wood 1 just by having an algorithm that avoided crashing.
-   I isolated the IO into a separate class. I made it so that every time I was reading anything from _stdin_, it was outputted to the error stream.
-   I had a few global constants, which allowed me to enable/disable logging with a single line change.

## What went wrong

-   For all my previous contests, I had used C++, but this time I used C#, which meant that I had to rewrite a lot of my existing tooling.
-   I did not write any tests, making it challenging to have confidence that I was not breaking things as I was refactoring and modifying the algorithm.
-   I did not get to spend as much time as I would have liked on this. With work and other personal commitments, I could only spend a few hours on the problem.
-   Even though this is a 1-month competition, I started only in the last 2 weeks.
-   I wanted to Livestream/record my development, and it took a while to get started. I also could only do it early morning before starting work and while the kid was asleep.
-   I got stuck at Wood 1, and iterative improvements were just not helping. This was by far my worst result in a Codingame contest.
-   I did not write the code so that I could easily merge it back to _master_.

## What would I do differently

-   Not change my language of choice because it invalidates all the tooling I have.

## Other Notes

-   I did not enjoy this contest as much. I had to write a lot of code before I was able to see any result. Generally, going through the Wood leagues is much easier, and the complexity starts coming in Bronze. But, in this contest, a lot of the complexity was in Wood 2 itself.
-   I wonder if this frightened away a lot of beginners

## Ranking

**League**: Wood 1

**Global Rank**: 1474/2279 (65%)

**New Zealand**: 1/5

**India**: 15/42

Feel free to follow me at codingame using this [URL](https://www.codingame.com/servlet/urlinvite?u=1506970).

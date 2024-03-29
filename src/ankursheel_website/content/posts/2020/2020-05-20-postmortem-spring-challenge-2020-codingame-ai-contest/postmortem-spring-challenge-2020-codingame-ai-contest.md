---
title: 'Postmortem for Spring Challenge 2020 (Codingame AI Contest)'
excerpt: 'A postmortem for Spring Challenge 2020, a multiplayer AI bot contest based on Pacman held by codingame'
coverImage: './cover.jpg'
category: "retrospective"
tags:
    - 'Codingame'
    - 'postmortem'
---

Every couple of weeks, there is a contest hosted by the folks at [codingame.com](http://www.codingame.com). This time it was based on **Pacman**.

If you just want to look at my statistics for this contest, you can just scroll to the bottom but, then you would miss seeing all the things I did wrong. 😊

![Spring Challenge 2020](./cover.jpg)

## Preamble

For the contest, you were in command of 2 to 5 pacs on a grid, and the goal was to eat more pellets without getting killed by the end of the game. There was a fog of war, and the attack mechanism was based on Rock, Paper, Scissors.

Like all other codingame contests, the game was turn-based. Each turn consisted of you reading the world state information from _stdin_ and outputting your action to _stdout_. This would be repeated until only 1 bot was alive or a fixed number of rounds had passed.

You also had a maximum of 50 ms to submit your action before you would timeout and die.

There were multiple leagues.

-   Wood 2
-   Wood 1
-   Bronze
-   Silver
-   Gold
-   Legend

To pass each league, you need to beat the boss of that league. Everyone starts from Wood 2, and depending on how good their bot fares, they move to the higher leagues. Also, as you move to the higher leagues, extra rules might apply.

For this contest, I decided to use C#.

## What Went Right

-   I had already participated in a previous contest at codingame, which gave me a base to start from. For other postmortems click [here](/tags/codingame).

-   **Tools from previous contests:**
    -   CGSync: A google chrome plugin that allowed me to sync a local file to the web IDE. This allowed me to work in Visual Studio, which made for a much faster workflow. The plugin can be found [here](https://www.codingame.com/forum/t/codingame-sync-beta/614/65).
    -   I had already built a utility program that allowed me to combine multiple files into a single c# file which codingame requires. This enabled me to split my code across different files while developing.
    -   I had a python script to help download the game data, parse it and put it into a text file consumed by my program. This allowed me to step through and debug the AI to see that my AI failed to win because of some bug instead of just relying on the stderr stream.
    -   I isolated the IO into a separate class. I made it so that every time I was reading anything from _stdin_, it was outputted to the error stream.
    -   I had a few global constants, which allowed me to enable/disable logging with a single line change.
-   **Using C#**: It is much faster to write code in C# than C++, especially since it's what I am primarily using in my day job.
-   **Continuous refactoring** enabled me to keep my code readable and isolated the areas I had to work on.
-   **Using Source Control**: I cannot even stress how helpful it was to go back a version or two because the new logic was performing even worse than the one a few iterations before. This was especially true when I tried to switch to attack the opponent.
-   **Iterative development**: I reached Silver by concentrating on the movement rather than the pac types.
-   **Precomputing** the neighbour and visible cells in the 1st turn made it easier to calculate the move.
-   I was in the top 400 for some time.

## What went wrong

-   I did not write any tests, making it challenging to have confidence that I was not breaking things as I was refactoring and modifying the algorithm. I introduced a bug after refactoring a few times and did not realise till my rank dropped and I watched a replay.
-   I did not get to spend as much time as I would have liked on this. With work and other personal commitments, I could only spend a few hours on the problem. I was also unable to work on the weekend just before the contest ended, which dropped my rank from the early 400's to below 600 by the time I finished the contest.
-   I wanted to Livestream/record my development, but I could not Livestream every time I worked on this. I could only Livestream early morning before starting work.
-   I was almost able to beat the Siver league Boss. In fact, I was ranked 2 at some point in the league, but I just couldn't get that slight improvement to move to the Gold league.
-   Quite a few times, the tweaks that I made, made my bot perform worse. This was especially true in the Silver League.

## What would I do differently

-   Since this was a game of partial information, having an MCTS or even Negamax algorithm might have helped.
-   Rather than mixing the IO with the state, I should have kept 2 separate classes for the state and memory.
-   Precomputing all the paths in the 1st turn would have made it faster to tweak the algorithm
-   Adding a timer for profiling. Some of the tweaks I made resulted in timeouts that could have been optimized if I was profiling.

## Other Notes

-   This was a fun contest, but the fog of war and partial information was a little annoying.
-   If you want a copy of any of my tools, let me know on [Twitter](https://twitter.com/ankur_sheel/status/1263342317894656000), and I can make it available.
-   It would be great if, once the contest has ended, links could be provided to tutorials for the various AI techniques that were successful.
-   If you want to look at the commit history and get a sense of how I approached the contest, you can find the [code here](https://github.com/AnkurSheel/codingame/tree/JoinThePac).
-   If you are interested in watching me code parts of the contest, you can find the [playlist here](https://www.youtube.com/playlist?list=PLyHMMEg7mqQ5IDIgrxixQwdOD5JjcjmuC).

## Ranking

**League**: Silver

**Global Rank**: 654/4955 (13%)

**New Zealand**: 6/20

**India**: 8/127

Feel free to follow me at codingame using this [URL](https://www.codingame.com/servlet/urlinvite?u=1506970).

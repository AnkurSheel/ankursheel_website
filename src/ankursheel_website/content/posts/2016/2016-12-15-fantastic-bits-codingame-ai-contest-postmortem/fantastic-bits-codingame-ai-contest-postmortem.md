---
title: A postmortem for Fantastic Bits (Codingame AI Contest)
excerpt: A postmortem for Fantastic Bits, a Codingame contest based on Quidditch from Harry Potter.
coverImage: './cover.jpg'
category: "postmortems"
tags:
    - cpp
    - Codingame
    - postmortem
---

Every couple of weeks, there is a contest hosted by the folks at [codingame.com](http://www.codingame.com). This time around, it was a game of **Quidditch** from the **Harry Potter** world and was named **Fantastic Bits** after the **Fantastic Beasts and Where To Find Them**

![Fantastic Bits](./cover.jpg)

If you just want to look at my statistics for this contest, you can just scroll to the bottom but, then you would miss seeing all the things I did wrong. 😊

## Preamble

For the contest, you played a game of Quidditch and controlled 2 wizards to score points using a Snaffle (Snitch + Quaffle). Like all other codingame contests, the game was turn-based. Each turn consisted of you reading the world state information from stdin and outputting your action to stdout. This would be repeated till either 200 turns had passed or as soon as one player has scored more than half of the possible points. You also had a maximum of 100 ms to submit your action before you would timeout and lose.

There are multiple leagues :

-   Wood 2
-   Wood 1
-   Bronze
-   Silver
-   Gold
-   Legend.

To pass each league, you need to beat the boss of that league. Everyone starts from Wood 2, and depending on how good their bot fares, they move to the higher leagues. Also, as you move to the higher leagues, additional rules might apply. For example, in wood 1, Bludgers made their entrance, and you could start casting spells from the Bronze league.

You can use multiple languages to submit your solution, but I went with C++ for obvious reasons.

## What Went Right

-   I had already participated in a previous contest at codingame, which gave me a base to start from. For other postmortems click [here](/tags/codingame).
-   Working with the web IDE (especially with C++)is a bit clunky, but on the forums, I found a google chrome plugin that allowed me to sync a local file to the web IDE. This allowed me to work in Visual Studio, which made for a much faster workflow. The plugin can be found [here](https://www.codingame.com/forum/t/codingame-sync-beta/614/65). I found another tool on the codingame forums that allowed me to test my ide code against other players without submitting my code. The code also allows comparing the ide code with the submitted code. The plugin can be found [here](https://www.codingame.com/forum/t/introducing-cg-spunk/1895).
-   I already had a setup that allowed me to combine multiple files into a single cpp file which codingame requires. If you would like a copy of the tool, let me know, and I can make it available.
-   I spent the first day setting up the framework for the game. This included classes to encapsulate the Wizards, Snaffle etc. This allowed me to quickly tweak my algorithms and throw away pieces of code that I felt were not working.
-   I started with a very simple algorithm that was able to get me into the gold league. I reached the bronze league by just chasing after the closest snaffle and trying to throw it in the opponent's goal. For silver and gold leagues, as soon as I had enough mana, I used an **Accio** if the snaffle was behind a wizard or a **Flippendo** if the snaffle was in front of a wizard and was aligned with the goal.
-   I was able to simulate a portion of the game except for the collisions. I did write some collision code, but it is untried and untested.
-   From earlier contests, I had a python script to help download the game data, parse it and put it into a text file consumed by my program. This allowed me to step through and debug the AI to see that my AI was failing to win because of some bug instead of just relying on the stderr stream. If you would like a copy of the script, let me know, and I can make it available.
-   Continuous refactoring enabled me to keep my code readable and isolated the areas I had to work on.
-   Working iteratively and using the tools above meant that I could see the impact almost immediately.
-   Using source control to keep track of the AI. I cannot even stress how helpful it was to go back a version or two because the new logic was performing even worse than a few iterations before. This was especially true when I tried to add support for the spells '**Petrificius'** and '**Obliviate**'.
-   I made it to the Gold League, which was one of the goals I had set for myself.

## What Went Wrong

-   Being in New Zealand for the contest from a timezone perspective sucks. The contest starts and ends when you are sleeping.
-   I did not get to spend as much time as I would have liked on this. With work and other personal commitments, I could only spend a few hours on the problem. I was also unable to work on the weekend just before the contest ended, which dropped my rank from the early 400's to below 600 by the time I finished the contest.
-   I wasted a lot of time trying to get the 2 spells '**Petrificius**' and '**Obliviate**' to work. In retrospect, I should not have even tried this without having a robust simulation and probably a Genetic Algorithm.
-   I read the [Magus's postmortem and implementation of CSB](http://files.magusgeek.com/csb/csb_en.html) quite late. Having implemented parts of it would have helped considerably for this contest. Although other than trolling the chat/forums, I don't see how I could have found this earlier. It might be worthwhile for Codingame to give a reference of which bot contest can be used to practice on a few days before the competition starts.
-   My knowledge and interest in physic systems is relatively low. To have a robust simulation, a good understanding of collision avoidance was required.
-   I did not get time to implement a Genetic Algorithm or an MCTS, which would have probably helped me gain ranks much faster.
-   When I was around the 300 mark, I decided to resubmit the existing code. Big Mistake. Even though my code was the same, my rank dropped like a stone underwater. This was probably because other players had submitted improved code and a submit causes a test against all of them. The lesson learnt here is that gain ranks early and submit only if you are relatively sure of gaining more ranks. A lot of information had to be simulated, such as mana, collisions, and some inputs for the opponent. It was just a lot of work to do, along with writing an AI. I guess it would have been easier if I had code that I could reuse from one of the earlier contests
-   I did not take into consideration that the spells take 1 frame to take effect.
-   The way I had written the code, the 1st first wizard would always end up using all the mana. This was, in retrospect, inefficient, and I could have improved this without too much effort.

## What would I do differently

-   Being better at deciding which feature to implement and when to give up and move to another feature.
-   Try to simulate the game so that I can test everything locally before submitting my code and also be able to use more complex AI techniques.

## Other Notes

-   This was a fun contest with amazing visuals and complexity.
-   The twitch stream helped me get familiar with the spells.
-   If you want a copy of any of my tools, let me know in the comments, and I can make it available.
-   It would be great if once the contest has ended, links could be provided to tutorials for the various AI techniques that were successful. An example of this would be [Magus's implementation of CSB](http://files.magusgeek.com/csb/csb_en.html)

## Rankings

**League**: Gold

**Global Rank**: 642/2399 (27%)

**New Zealand**: 13/18

**India**: 6/39

Feel free to follow me at codingame using this [url](https://www.codingame.com/servlet/urlinvite?u=1506970). which gave me a base to start from. For other postmortems click [here](/tags/codingame).

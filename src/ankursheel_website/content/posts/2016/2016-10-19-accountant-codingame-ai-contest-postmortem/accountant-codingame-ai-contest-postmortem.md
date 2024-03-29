---
title: A postmortem for The Accountant (Codingame AI Contest)
excerpt: A postmortem for The Accountant, an optimization contest sponsored by Warner Bro.s for their upcoming movie "The Accountant" held by codingame
coverImage: './cover.jpg'
category: "retrospective"
tags:
    - "Codingame"
    - "postmortem"
---

Every couple of weeks, there is a contest hosted by the folks at [codingame.com](http://www.codingame.com). This time around, it was an optimization competition sponsored by **Warner Bro.s** for their upcoming movie "**The Accountant**."

![The Accountant - Codingame Contest](./cover.jpg)

If you just want to look at my statistics for this contest, you can just scroll to the bottom but, then you would miss seeing all the things I did wrong. 😊

## Preamble

For the contest, you played as Christian Wolf, and your aim was to secure data by killing all the enemies. Like all other codingame contests, the game was turn-based. Each turn consisted of you reading the world state information from stdin and outputting your action to stdout. This would be repeated till either all the data points were captured by enemies or all the enemies were killed, or you were killed. You also had a maximum of 100 ms to submit your action before you would timeout and die. If you got killed, you got a score of 0.

There were a bunch of test cases against which you could test your solution. After submitting, the answer was tested against a different set of validators. After each submission, you would get a score, and your best score would be tracked for the leaderboard.

You can use multiple languages to submit your solution, but I went with C++ for obvious reasons.

## What Went Right

-   I had already participated in a previous contest at codingame, which gave me a base to start from. For other postmortems click [here](/tags/codingame).
-   I already had a setup that allowed me to combine multiple files into a single cpp file (which codingame requires) and a chrome plugin that allowed me to work in Visual Studio as opposed to the web IDE, which made for a faster workflow.
-   I spent the first day setting up the framework for the game. This included classes to encapsulate the GameState, Enemies etc. This allowed me to quickly tweak my algorithms and throw away pieces of code that I felt were not working.
-   I spent the first few days trying an MCTS approach, but that didn't work. More on that in the **What Went Wrong** section. Once I realized that I needed to do something different, I went back to the basics and coded a simple decision tree with no-look forward. The 1st draft of this immediately raised my score to just under 20000 from about 4000. At the same time, my rank came under 300.
-   I managed to create a robust avoidance system. Getting a high score depended on staying alive, which was extremely crucial when improving the algorithm. This also enabled me to try out different things without being afraid that I would get a lower score because I got killed.
-   I went for an iterative approach after my failed attempt at MCTS. Once I had the avoidance system in, I tried to kill the closest enemy. After that, it was trying to kill the enemy with the least number of shots. For the most part, the impact was that with each submit, the score and hence my rank improved.
-   Continuous refactoring enabled me to keep my code readable and isolated the areas I had to work on.
-   Using source control to keep track of the AI. I cannot even stress how helpful it was to go back a version or two because the new logic was performing even worse than a few iterations before.

## What Went Wrong

-   The contest started before the Hypersonic contest had ended. After the fatigue from the last contest, I did not start coding until a few days after the contest had begun.
-   Being in New Zealand for the contest from a timezone perspective sucks. When I went to bed, I was ranked 192. But, since there were still a few hours left, by the time the contest ended, I had been pushed out of the top 200, which was the goal I had set for myself for this contest. I was also top-ranked in New Zealand and India, but someone beat my score in the last few hours. Not that it mattered in this contest, but you also miss the first few hours because of the timezone.
-   I started off with MCTS, but my understanding of the algorithm is still very limited. There are very few tutorials for this approach, which makes it much harder to understand and implement. I spent the first few days coming up with a base that I could use for an MCTS approach. But, in the end, I had to throw away all of that code. At least, I still have it for the next contest because of version control.
-   While implementing MCTS, I went for a uniform (random) decision. In retrospect, I should have used something more intelligent. Because of the fatigue from the last contest and work, I could not improve my algorithm further than the decision tree.
-   The validators had no information associated with them. You had no idea why a validator failed or why your score went down, even though it had gone up in the IDE. This made tweaking your algorithm feel like blind art.
-   It was impossible to make minor tweaks and submit the solution to see how it fared because of a limitation that blocked you from submitting too many times continuously.
-   For a long time, I could not figure out whether I should be using ceiling, floor, round or truncate to round the various values and get the same values as were being provided.

## What would I do differently

-   Understanding why my MCTS approach wasn't working would be helpful as most of the top solutions in the contests seem to be using this approach. I am still not sure if the low number of moves that I was generating or the scoring function was the issue. I am guessing it's a combination of both.
-   Prioritizing saving data points over saving bullets would have given me a much higher score as each data point was worth 100 points.
-   Caching the targeted enemy.
-   I already had a simulation that I should have used to optimize my code rather than relying on the submission.
-   After getting the decision tree to work, I would have liked to incorporate it into the MCTS and see if that helped.

## Rankings

**Final Score**: 27440/46293 (59%)

**Global Rank:** 210/2934

**New Zealand:** 2/33

**India:** 2/278

This was a fun contest, and it was nice that you were practically playing against yourself instead of other people. I do wish I had been able to reach my goal of being in the top 200

Feel free to follow me at codingame using this [url](https://www.codingame.com/servlet/urlinvite?u=1506970).

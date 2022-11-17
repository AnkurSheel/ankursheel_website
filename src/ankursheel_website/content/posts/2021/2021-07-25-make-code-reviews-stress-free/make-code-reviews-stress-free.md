---
title: "An adaption of the Feedback Ladders for code reviews from Netlify"
excerpt: "Code reviews can be stressful for both parties. An opinionated adaption of the Feedback Ladders from Netlify to make reviews code stress free."
coverImage: "./cover.jpg"
category: "career / work"
updatedOnDate: "2022-11-18"
tags:

- "productivity"
- "process"

---

_This is an edited version of an article I originally wrote for the First AML Product & Engineering blog. You can read the original version [here](https://firstaml.dev/blog/how-we-made-our-code-re-views-stress-free)._

Code reviews can be stressful for both parties. The person being reviewed puts their code for everyone to see and potentially judge. In contrast, the person reviewing feels the pressure to maintain quality without coming across as harsh.

There is a lot of advice on the interwebs about conducting effective code reviews. A lot of it is focused on avoiding nitpicking. It's good advice and has resulted in a cottage industry of automated tools to enforce code standards.

However, computers are still not good at some things, like suggesting good variable names. We can lose out on some good suggestions by only talking about blockers in a code review. It's a classic case of throwing out the baby with the bathwater.

## Inspiration

I thought there was no good solution to this problem for a long time, but then I came across an article on [Feedback Ladders](https://www.netlify.com/blog/2020/03/05/feedback-ladders-how-we-encode-code-reviews-at-netlify/) by the team at Netlify.

The gist of the article is that Nelify uses metaphorical names describing the inconveniences of living in a house still being built in their code reviews. This encodes the severity of the feedback.

## Let's start adapting

Netlify has 5 levels - mountain, boulder, pebble, sand and dust.

This is overkill, and we can get away with just three - [boulder], [pebble] and [dust]. It's also worth adding one more level to indicate that it's a clarifying question asked by the reviewer.

This is an improvement over the traditional review, but there is still a problem. Text is difficult to parse.

The solution is easy — Let's use emojis.

_We can use whatever emojis we like, but our platform of choice must support the emojis that we decide to use._

## Some options that work in Github for inspiration

- **Vehicles** 🚑 [ambulance], 🚗 [car], 🚲 [cycle], ⛽ [fuelpump]
- **Animals** 🐘 [elephant], 🐑 [sheep], 🐜 [ant], ❓ [question]
- **Shapes** 🔴 [circle], 🔶 [diamond], 💚 [heart], ❓[question]

## What level to use when

Let's use Vehicles as an example and see what the different levels indicate.

### 🚑 Blocker

The Pull Request cannot be merged till the issue is addressed. Examples would be where the solution doesn't fix the problem or has unintended consequences or missing tests.

### 🚗 Non-Blocking but essential

The Pull Request can be merged, but the comment should be addressed in a future PR. Examples of this would be addressing tech debt or enhancements.

### 🚲 Take it or leave it

All those other suggestions or personal opinions that might be considered as nitpicking. Examples of this would be suggesting a different variable name.

### ⛽ A clarifying question

It can be used to get more context on the pull request changes or understand the domain.

## Conclusion

Code reviews can incite endless debates between developers. Using emojis to encode the severity of the feedback can help avoid this problem.

As a reviewer, you can give suggestions without feeling as if you are being harsh. As the person whose code is being reviewed, you can concentrate on the feedback that matters.

If you plan to use this approach, make sure to add your personality to it. Remember, there is no such thing as the only way.

I am always curious to know how other people have adapted this in their workflow so let me know what you did :)

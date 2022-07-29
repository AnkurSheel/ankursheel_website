---
title: "How to restore lost commits using git reflog"
excerpt: "A way to restore lost commits after a hard reset or a bad force push"
category: "programming"
coverImage: "./reflog-example.png"
tags:

- "git"

---

## Problem

If you are like me, you have probably sometimes committed a change in git but did a hard reset. Or you force pushed after a rebase and lost a commit that you needed.

Have no fear; your work is still here. Let's see how you can restore lost commits so that you don't have to do that work again.

## Solution

You can use `git reflog` to restore lost commits. `git reflog` is a logging mechanism that keeps track of all changes made in a repository.

Below is an example of the output of git reflog

![Reflog Example](./reflog-example.png)

In the image above, you can see that each commit has a unique hash-id. You can either use the SHA or HEAD@{n}

Now, depending on what you want, there are several options.

- `git reset --hard <SHA>`: restores the project's history to that commit.
- `git checkout <SHA> -- <filename>`: recreates one or more files in your working directory without altering the history.
- `git cherry-pick <SHA>`: append the commit to the current working head.

## References

- [git reflog](https://git-scm.com/docs/git-reflog)
- [git cherry-pick](https://git-scm.com/docs/git-cherry-pick)

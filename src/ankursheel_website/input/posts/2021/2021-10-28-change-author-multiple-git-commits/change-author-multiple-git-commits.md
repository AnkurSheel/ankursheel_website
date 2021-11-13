---
title: 'How to change the author of multiple Git commits'
excerpt: 'A snippet for updating the author details of several commits in a git repository'
tags:
    - 'snippet'
    - 'git'
---

## Problem

I have two accounts from which I access my GitHub repositories. I have set one of them as a global setting. On a per-repository basis, I sometimes override the default details with my other account. Sometimes, I forget to override the default values and realize it only after making a few commits.

This post will show how we can update the author after making a few commits with incorrect details.

## Solution

First, we need to update our gitconfig with the author details.

```txt
[user]
name = author_name
email = author_email
```

We can run the following command.

```bash
git rebase -i <commit_hash> -x "git commit --amend --reset-author -CHEAD"
```

-   **git rebase -i**: Runs git rebase in interactive mode, allowing altering individual commits in the process.
-   **<commit_hash>**: The hash of the commit after which we want to update the author.
-   **-x**: Append the shell command for each line creating a commit.
-   **git commit --amend**: Modify the most recent commit.
-   **--reset-author**: Resets the author to the settings in the .gitconfig.
-   **-CHEAD**: -C takes the existing commit object and reuses the log message without allowing the user to edit it. HEAD refers to the current commit we are viewing. -CHEAD takes the message from the current commit without opening the editor.

We will then be presented with an editor to confirm all the commits we want.

We can run the following command to update the author for all commits, including the root.

```bash
git rebase -i --root -x "git commit --amend --reset-author -CHEAD"
```

## Conclusion

This will update the author details for all the specified commits. This is also why it's important to sign your commits so that no one else can attribute bad malicious commits to you. You can see how to do this by following the steps in the [guide to securing git commits from tricking you on Windows](./securing-git-commits-windows).

## References

-   [git-commit Documentation](https://git-scm.com/docs/git-commit)
-   [gitrevisions Documentation](https://git-scm.com/docs/gitrevisions)
-   [git-rebase Documentation](https://git-scm.com/docs/git-rebase)

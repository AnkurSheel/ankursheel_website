---
title: "Cleaning Up Unnecessary Remote-Tracking References"
excerpt: "git pull can be slow if you have a lot of remote branches. Remove unnecessary tracking of remote branches to reduce the amount of time spent updating the repository"
category: "programming"
tags:
  - "git"
updatedOnDate: "2024-08-06"
---

If your work involves collaborating on a monolithic project with multiple teams, you might find that your `git pull` has started taking a long time. One of the reasons for this is that you are tracking multiple branches most of which are unnecessary for your specific work.

In order to make updating fast again, you need to clean up those remote-tracking references.

## Identifying the Branches to Keep

Before you start deleting branches, you should identify the branches that you want to keep. Typically, these would include the _main (or master)_ branch and a few select branches you actively work on.

To get the unique commit hashes of those branches, execute the following command.

```bash
git rev-parse --quiet origin/main origin/my-branch-1 origin/my-branch-2
```

_Note 1: I’m assuming the **origin** is the name of the upstream_.
_Note 2: Replace **_origin/main_**, **_origin/my-branch-1_**, and **_origin/my-branch-2_** with the actual branch names_.

The `git rev-parse` command translates human-readable branch names into SHA-1 hashes which are the commit identifiers.

- **_--quiet_**: This flag suppresses output unless there is an error.

When executed, the command will produce an output similar to this:

```text
3896d7ba4b5549e8a362bc5e300a0dd8082f9e94
3896d7ba4b5549e8a362bc5e300a0dd8082f9e94
64abe6831bf1cb04396d1df02dd7c2ad6d999ab3
```

These are the commit hashes associated with the branches you wish to keep.

## Cleaning Up Unnecessary Local References

Now that you have the commit hashes, you can remove the local references to remote branches.

This can be done by using a combination of 2 commands - `git branch` and `xargs`.

```bash
git branch -r \ 
--no-contains 3896d7ba4b5549e8a362bc5e300a0dd8082f9e94 \
--no-contains 3896d7ba4b5549e8a362bc5e300a0dd8082f9e94 \
--no-contains 64abe6831bf1cb04396d1df02dd7c2ad6d999ab3 \
| xargs -I{} git branch -rd "{}"
```

Let's first look at the options for the `git branch` command

- **_-r_**: Lists the remote-tracking branches.
- **_--no-contains_**: Filters the list of remote branches to include only branches that don't contain the specified commit hashes.

The filtered list from the `git branch` command is passed to **_xargs_**.

**_xargs_** is a command-line tool that helps build argument lists for other commands using input from standard input (stdin). Lets look at the options for the `xargs` command.

- **_-I{}_**:  This option tells `xargs` to replace every occurrence of `{}` with the input elements pulled from standard input (stdin).
- **_git branch -rd_**: Deletes a remote branch.
  - **_"{}"_**: This is the placeholder, which gets replaced by the specific input item read from stdin.

## How to track only branches you need?

Instead of calling `git pull`, use `git fetch`  and `git rebase` instead.

```bash
git fetch origin main --prune --prune-tags
git rebase origin/main
```

- **_--prune_**: Before fetching, remove any remote-tracking references that no longer exist on the remote.
- **_--prune-tags_**: Before fetching, remove any local tags that no longer exist on the remote if --prune is enabled.

## Conclusion

Following these steps, you can remove any remote tracking references that you dont need.

## References

- [git branch](https://git-scm.com/docs/git-branch)
- [xargs](https://man7.org/linux/man-pages/man1/xargs.1.html)
- [git fetch](https://git-scm.com/docs/git-fetch)
- [git rebase](https://git-scm.com/docs/git-rebase)

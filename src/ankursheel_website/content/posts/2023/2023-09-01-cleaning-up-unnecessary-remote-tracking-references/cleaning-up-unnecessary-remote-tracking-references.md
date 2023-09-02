---
title: "Cleaning Up Unnecessary Remote-Tracking References"
excerpt: "git pull can be slow if you have a lot of remote branches. Remove unnecessary tracking of remote branches to reduce the amount of time spent updating git repositories"
category: "programming"
tags:
  - "git"

---

If your work involves collaborating on a monolithic project with multiple teams, you might find yourself in a situation where you're tracking numerous branches. However, you might soon realise that most of these branches are unnecessary for your specific work. This situation can lead to an avoidable increase in the time you spend updating your project, especially if you're habitually using `git pull`.

To streamline our Git workflow and save those precious seconds(or minutes), we should clean up those remote-tracking references.

## Identifying the Branches to Keep

Before we start removing stuff, we should identify the branches that we want to keep. Typically, these would include the _main (or master)_ branch and a few select branches we actively work on.

To get their unique commit hashes, execute the following command, ensuring to replace **_origin/main_**, **_origin/my-branch-1_**, and **_origin/my-branch-2_** with the actual branch names.

```bash
git rev-parse --quiet origin/main origin/my-branch-1 origin/my-branch-2
```

*Note: I’m assuming the ***origin*** is the name of the upstream*

The `git rev-parse` command translates human-readable branch names into cryptic yet significant SHA-1 hashes, which are essentially commit identifiers.

- **_--quiet_**: Silence is golden, as this flag suppresses output unless there is an error.

When executed, the command will produce an output similar to this:

```text
3896d7ba4b5549e8a362bc5e300a0dd8082f9e94
3896d7ba4b5549e8a362bc5e300a0dd8082f9e94
64abe6831bf1cb04396d1df02dd7c2ad6d999ab3
```

These are the commit hashes associated with the branches we wish to retain.

## Cleaning Up Unnecessary Local References

Now that we have the commit hashes, we can tidy up our local references to remote branches.

This can be done by using a combination of 2 commands - `git branch` and `xargs`. `xargs` is a command-line tool that helps build argument lists for other commands.

```bash
git branch -r \ 
--no-contains 3896d7ba4b5549e8a362bc5e300a0dd8082f9e94 \
--no-contains 3896d7ba4b5549e8a362bc5e300a0dd8082f9e94 \
--no-contains 64abe6831bf1cb04396d1df02dd7c2ad6d999ab3 \
| xargs -I{} git branch -rd "{}"
```

Let's look at the options for the `git branch` command

- **_-r_**: Lists the remote-tracking branches.
- **_--no-contains_**: Filters the list of remote branches to include only branches that don't contain the specified commits (our identified hashes).

The output of this filtered list is then passed to **_xargs_**. **_xargs_** is a command that allows us to construct argument lists for other commands using input from standard input (stdin).

- **_-I{}_**:  This option tells `xargs` to replace every occurrence of `{}` with the input elements pulled from standard input (stdin).
- **_git branch -rd_**: Deletes a remote branch.
  - **_"{}"_**: This is the placeholder, which gets replaced by the specific input item read from stdin.

## Preventing this buildup in the future

Instead of calling `git pull`, use `git fetch`  and `git rebase` instead.

```bash
git fetch origin main --prune --prune-tags
git rebase origin/main
```

- **_--prune_**: Before fetching, remove any remote-tracking references that no longer exist on the remote.
- **_--prune-tags_**: Before fetching, remove any local tags that no longer exist on the remote if --prune is enabled.

## Conclusion

Following these steps, we can declutter our Git workflow and keep only the relevant references.

## References

- [git branch](https://git-scm.com/docs/git-branch)
- [xargs](https://man7.org/linux/man-pages/man1/xargs.1.html)
- [git fetch](https://git-scm.com/docs/git-fetch)
- [git rebase](https://git-scm.com/docs/git-rebase)

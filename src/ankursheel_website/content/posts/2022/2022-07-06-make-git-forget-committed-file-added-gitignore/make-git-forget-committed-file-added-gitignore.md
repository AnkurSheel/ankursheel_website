---
title: "How to make Git forget about a committed file added to .gitignore"
excerpt: "A way to remove a file committed in git that you now want git to forget about"
category: "programming"
tags:

- "git"

---

## Problem

You committed a file to git and then changed your mind and want git to forget about it. So, you added the file to `.gitignore`. But the file still keeps showing up as part of your changes.

## Solution

This happens because `.gitignore` prevents files from being added but does not actively remove the ones already tracked.

To stop tracking a file (but not delete it), you need to remove it from the index. This can be achieved with this command.

```bash
git rm -r --cached <filename>
```

- **_git rm_**: the command that lets us remove tracked changes.
- **_-r_**:  Removes the file recursively.
- **_--cached_**: Removes only from the index.
- **_\<filename\>_**: the file name you wish to stop tracking.

You can now make a new commit and push it to your remote.

Note that this will not remove the physical file from your local machine but will remove the files from other devices on the next git pull, so be careful with this command.

## References

- [git-rm](https://git-scm.com/docs/git-rm)

---
title: 'How to move a commit between repositories'
excerpt: 'Steps to move a commit from one repository to another'
category: "programming"
tags:
    - 'git'
---

Sometimes you have a commit in a repository that you want to bring over to another repository. We can follow these steps to do just that.

### Create a patch

In the source repository, we can create a patch that describes the commit by running.

```bash
git format-patch -1 <sha>
```

-   **-1**: The number of commits to create the patch for
-   **sha**: The SHA of the commit

### Apply the patch

In the target repository, we can apply the patch with

```bash
git apply PATH_TO_PATCH --reject
```

-   **reject**: Applies the parts of the patch that are applicable and leaves the rejected hunks in corresponding \*.rej files. We have to apply these manually.

## Further Reading

-   [git-format-patch Documentation](https://git-scm.com/docs/git-format-patch)
-   [git-apply Documentation](https://git-scm.com/docs/git-apply)

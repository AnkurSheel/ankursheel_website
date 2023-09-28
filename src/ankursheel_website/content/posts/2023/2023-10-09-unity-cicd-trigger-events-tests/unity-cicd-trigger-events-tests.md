---
title: "Unity CI/CD Demystified: Part 2: Trigger Events and Automation Testing"
excerpt: "Adding CI/CD to Unity projects is a game-changer even if you're not a CI/CD enthusiast. Part 2 focuses on event triggers and automation testing."
category: "programming"
tags:
  - "unity"
  - "tutorial"
  - "devops"

---

Welcome back to our Unity CI/CD journey. In Part 1, we nailed down the [one-time setup to kickstart our CI/CD pipeline](./unity-cicd-one-time-setup).

It's time for Part 2, where we'll delve into the nitty-gritty of trigger events and automation testing.

Let's dive in!

## Setting the Trigger Events

First, we need to define when our CI/CD pipeline should kick into action.

We'll do this in a file named `.github/workflows/main.yml`. with the following workflow definition:

```yaml
name: Test, Build, and Deploy with GameCI  
on:  
  push:  
    branches:  
      - main  
    paths:  
      - 'Assets/**'  
      - 'Packages/**'  
      - 'ProjectSettings/**'  
  pull_request:  
    types:  
      - opened  
      - synchronize  
    branches:  
      - main  
    paths:  
      - 'Assets/**'  
      - 'Packages/**'  
      - 'ProjectSettings/**'
  release:
    types:
      — published
  workflow_dispatch:  
    inputs:  
      release_platform:  
        description: 'Release to [iOS, WebGL, testFlight]'
        required: false  
        default: ''
jobs:
```

A lot is going on here, but let's break it down:

- **on**" This section is where we specify the events that trigger our CI/CD workflow.
    - **push**: Our workflow will fire up when there's a push event to the "main" branch. We are also filtering this down to specific paths within our repo. We're only interested if changes happen in the actual Unity project. Anything else, and our CI/CD pipeline ignores them.
    - **pull_request**: Our workflow also triggers when a pull request is opened or synchronized (updated) in the "main" branch. And yes, we're narrowing it down to those same paths.
    - **release**: The workflow is also triggered when we publish a release.
    - **workflow_dispatch** lets us manually trigger our workflow through the GitHub Actions interface. We have an input field named **release_platform**, which allows us to specify where to release our project. This input will help us run only the necessary jobs. Perfect for testing intermediate builds that aren't meant for customer's eyes.

## Building and Running Tests

With the stage set, let's get to the real action - building and running our Unity project tests. This job is the most important one, as it is responsible for running the [unit tests](https://docs.unity3d.com/Manual/testing-editortestsrunner.html)

```yaml
test:  
  name: Build and Run Tests  
  runs-on: ubuntu-latest  
  steps:  
    # Checkout with lfs  
    - name: Checkout Repository  
      uses: actions/checkout@v3  
      with:  
        fetch-depth: 0  
        lfs: true  
  
    - name: Cache Library  
      uses: actions/cache@v3  
      with:  
        path: Library  
        key: Library-test  
        restore-keys: |  
          Library-test
    
    - name: Run Tests  
      uses: game-ci/unity-test-runner@v2  
      env:  
        UNITY_LICENSE: ${{ secrets.UNITY_LICENSE }}  
      with:  
        githubToken: ${{ secrets.GITHUB_TOKEN }}
```

Now, let's dissect this job:

- **runs-on:** We specify that this job should run on an Ubuntu-based runner using the latest available version.
- **steps:** This section contains a series of steps to be executed for this job.
    - **Checkout Repository:** This step checks out our code repository. We're diving deep into the Git history with a fetch depth of 0 and grabbing those Git Large File Storage (LFS) files with the `lfs: true` flag.
    - **Cache Library:** This step caches the "Library" directory, making subsequent runs faster. We specify the directory path, a key for the cache, and the keys to look for when restoring the cache.
    - **Run Tests:** This step runs our Unity tests.
        - **env**:  Used to set the environment variables
            - **UNITY_LICENSE**: It sets the Unity license environment variable to the value stored securely in secrets.
            - **githubToken**: Since this action needs GitHub access to report the test results, it uses the GitHub token stored in secrets.

## Conclusion

Stay tuned for Part 3, where we'll cover the deployment process and how to release Unity projects automatically.

## References

- [Events that trigger workflows](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows)
- [GameCI TestRunner docs](https://game.ci/docs/github/test-runner)
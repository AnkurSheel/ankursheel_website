---
title: "Unity CI/CD Demystified: Part 1: One-Time Setup"
excerpt: "Part 1 covers the one-time setup needed for setting up a CI/CD pipeline for Unity projects"
category: "programming"
coverImage: "./adding_secrets.png"
tags:
- "unity"
- "tutorial"
- "devops"
updatedOnDate: "2024-08-07"
---

In this series, I'll guide you through setting up a CI/CD pipeline for Unity projects using [GitHub Actions](https://github.com/features/actions) and [GameCI](https://game.ci/).

Part 1 of this series covers the one-time setup that you need for setting up the pipeline.

**_Note: Some of these setup steps can be skipped if you've already performed them for a previous project._**

## Acquire an Activation File for GitHub Runners

1. Log into Unity Hub
2. If you havent already created a licence, you need to get a licence by going to _Unity Hub_ > _Manage Licenses_ > _Add_ > _Get a free personal license_.

## Install Ruby

- Install [Ruby](https://rubyinstaller.org/downloads/)
- Verify the installation by running `ruby -v`.
- Install _Bundler_ by running `gem install bundler`.

## Setup Codesigning with GitHub Actions

- Create a private GitHub repository to store the certificates and code-signing identities we generate.
- In the private repository, navigate to _Settings_ -> _Deploy Keys_ -> _Add Deploy Key_  
  ![Add a new deploy key](./deploy_key.png)
- Generate an SSH key. You can use 1Password or use the `ssh-keygen` utility.
- Paste the public key (starting with ssh) into the "Key" field.
- Select **_Allow write access_** to enable pushing certificates to the repository.  
  ![Add key](./add_key.png)

## Setting up Secrets for GitHub Actions

On GitHub, navigate to _Settings_ -> _Secrets and Variables_ -> _Actions_.

![Adding secrets](./adding_secrets.png)

Create the following secrets

- **UNITY_EMAIL**: Your Unity login email address.
- **UNITY_LICENSE**: The contents of the _.ulf_ file which can found at _**C:\ProgramData\Unity\Unity_lic.ulf**_.
- **UNITY_PASSWORD**: Your Unity login password.
- **MATCH_PASSWORD**: This is required for encrypting/decrypting certificates.
- **MATCH_REPOSITORY**: The name of the private GitHub repository that will store our certificates in the format `organization/repository`.
- **MATCH_DEPLOY_KEY**: This is the private part of the SSH key we created in the private repository to store our certificates. _If using 1Password makes sure the key is unencrypted._

If you can, I recommend adding these secrets at the organisation level so that you can reuse them across multiple projects. You can then selectively grant access to each secret for specific repositories.

## Conclusion

We are now finished with the one time setup that we need to add CI/CD to our Unity projects. In the next part, we will set up the GitHub Actions workflow to build and deploy our Unity project.

## References

- [Workflow syntax](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions)
- [Workflow dispatch](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#workflow_dispatch)
- [Using secrets in GitHub Actions](https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions)
- [Setup deploy keys on Github](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/managing-deploy-keys#set-up-deploy-keys)

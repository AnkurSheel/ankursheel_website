---
title: 'Deploy a Gatsby site on a schedule with Azure Pipelines'
excerpt: 'A guide to deploying a gatsby site to netlify daily and have scheduled posts automatically go live by triggering Azure pipelines on a schedule'
coverImage: './cover.jpg'
category: "programming"
tags:
    - 'devops'
    - 'tutorial'
    - 'gatsby'
    - 'Azure pipelines'
---

In an [earlier post](./deploy-gatsby-site-netlify-azure-pipelines), I showed how to use azure pipelines to build a gatsby site and deploy to Netlify. But it was slightly limited. A live build was deployed only when a push was made to _master_. There was no way to have scheduled posts go live automatically.

There are 2 ways to approach this problem.

1. By using an AWS Lambda or Azure Functions. I initially had this, and you can see the code [here](https://github.com/AnkurSheel/BlogFunctions).
1. By adding a new azure pipeline that runs on a schedule.

In this post, I will be using azure pipelines to deploy the site daily.

_Note: We will be using the template files created in the [Deploying a Gatsby site to Netlify using Azure Pipelines](./deploy-gatsby-site-netlify-azure-pipelines), so I would suggest reading that first. Go on, I will wait._

## Adding a new pipeline to schedule posts

Good, you are back.

Let's create a new file _azure-pipelines.daily.yml_.

```yaml
name: 'Daily Release'

schedules:
    - cron: '0 14 * * *'
      displayName: Daily build
      branches:
          include:
              - master
      always: true

trigger:
    batch: false
    branches:
        exclude:
            - '*'

pr: none

variables:
    - template: azure-pipelines.vars.yml

jobs:
    - template: azure-pipelines.common.yml
      parameters:
          deployScriptParams: '--prod'
          netlifySiteId: $(netlify.siteId)
          netlifyToken: $(netlify.token)
          message: 'Daily build'
```

1. **_name_**: The name for this pipeline.
1. **_schedules_**: The schedule on which the pipeline should run.
    1. **_cron_**: The cron syntax defining the schedule.
    1. **_displayName_**: The display name for the schedule.
    1. **_branches_**: Include only the _master_ branch so that only the _master_ branch is built and deployed.
    1. **_always: true_**: Always run the pipeline.
1. **_trigger_**: Conditions for running the pipeline when a push is made.
    1. **_branches_**: Exclude all branches so that the build is not triggered for commits on any branch, including _master_.
1. **_pr: none_**: Disable triggering the pipeline when a PR is opened or changes are pushed to an open PR. _master_.
1. **_variables_**: We set a template file to get the environment variables.
1. **_jobs_**: The jobs to run.
    1. **_template_**: Use the job template created in _azure-pipelines.common.yml_.
1. **_parameters_**: The parameters to be passed to the job template
    1. **_netlifySiteId_**: The site ID from environment variables.
    1. **_netlifyToken_**: The token from environment variables.
    1. **_message_**: The message is hardcoded to Daily Build.

## Gotchas

1. The cron syntax is mm HH DD MM DW. You can find more details about the supported syntax [here](https://docs.microsoft.com/en-us/azure/devops/pipelines/build/triggers?view=azure-devops&tabs=yaml#supported-cron-syntax)
1. The timezone for schedules is UTC, so the build times need to be adjusted accordingly.
1. Don't forget to set `always: true`. If you have it set to false, a build might not be triggered if you schedule posts a few days in advance.

## Conclusion

With this setup, I can write posts and schedule them to go live in the future.

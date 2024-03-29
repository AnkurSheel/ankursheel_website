---
title: 'How to deploy a Gatsby site to Netlify using Azure Pipelines'
excerpt: 'Deploying a gatsby site to Netlify has a few limits, resulting in my builds timing out. By using Azure Pipelines, the limits are no longer a problem'
category: "programming"
tags:
    - 'devops'
    - 'tutorial'
    - 'gatsby'
    - 'Azure pipelines'
coverImage: './cover.jpg'
---

Deploying a site to Netlify is super simple and has served me well so far. But, it has a few limits, which resulted in my builds failing after my site grew to its current size.

-   a 15-minute timeout limit for builds
-   the free tier has 300 free minutes in a month. In most cases, this is fine, but gatsby takes a fair amount of time to process images, and I was about to hit the limit.

## First Attempt - Cache the gatsby folders

For some time, I solved the issue by using the unofficial [gatsby-plugin-netlify-cache](https://www.npmjs.com/package/gatsby-plugin-netlify-cache) plugin. The plugin uses an [undocumented shared folder](https://www.contentful.com/blog/2018/05/17/faster-static-site-builds-part-one-process-only-what-you-need/#caching-for-the-win) to cache the _.cache_ and _public_ folders across builds.

Unfortunately, this solution had 2 main issues.

1. A clear cache and deploy site would fail.
1. Since my site is image-heavy, I started reaching close to the limit again.

## Second Attempt - Use Azure Pipelines

Azure Pipelines uses a YAML config file to build your project. We will use templates to have separate workflows for _pr_and \_release_ builds. Let's create 3 files:

1. _azure-pipelines.common.yaml_: The template file with the job to build the gatsby site and deploy to Netlify.
1. _azure-pipelines.pr.yaml_: The pipeline to run for PR(Pull Request) builds.
1. _azure-pipelines.ci.yaml_: The pipeline to run for Live builds.

I have separate workflows for Live and PR builds because I do not want PR builds deployed to the live site.

### Common Job to Build Gatsby Site

In _azure-pipelines.common.yaml_, we create the job to build the gatsby site.

```yaml
jobs:
    - job: Build

      pool:
          vmImage: 'ubuntu-latest'

      steps:
          - checkout: self
            lfs: true

          - task: NodeTool@@0
            displayName: 'Install Node.js'
            inputs:
                versionSpec: '10.x'

          - script: yarn install
            displayName: 'Install dependencies'

          - script: yarn build
            displayName: 'Build Gatsby'
```

We name the job as _Build_ and use the default _ubuntu-latest_ image. This is followed by a series of steps.

1. **_Checkout_**: Check out the repo and download the files from _git-lfs_.
1. **_Install Node.js_**: Install Node 10.x.
1. **_Install dependencies_**: Execute _yarn install_.
1. **_Build Gatsby_**: Execute the _yarn build_ script, which calls _gatsby build_.

### Live Builds

Let's add the trigger for live builds in _azure-pipelines.ci.yaml_.

```yaml
name: 'Live'

trigger:
    batch: false
    branches:
        include:
            - master

pr: none

jobs:
    - template: azure-pipelines.common.yml
```

1. **_name_**: The name for this pipeline.
1. **_trigger_**: Conditions for running the pipeline when a push is made.
    1. **_batch: false_**: trigger the pipeline for each commit, i.e. disable batching builds.
    1. **_branches_**: Include only the _master_ branch, so the pipeline is triggered only for commits pushed to _master_.
1. **_pr: none_**: Disable triggering the pipeline when a PR is opened or changes are pushed to an open PR.
1. **_jobs_**: The jobs to run.
    1. **_template_**: Use the job template created in _azure-pipelines.common.yml_.

### PR(Pull Requests) Builds

I also want a build to be triggered every time a PR is made against _master_.

```yaml
name: 'PR $(System.PullRequest.PullRequestId)'

trigger:
    branches:
        exclude:
            - '*'
pr:
    autoCancel: false
    branches:
        include:
            - master

    - template: azure-pipelines.common.yml
```

1. **_name_**: The name for this pipeline.
1. **_trigger_**: Conditions for running the pipeline when a push is made.
    1. **_branches_**: Exclude all branches so that the build is not triggered for commits on any branch, including _master_.
1. **_pr:_**: Conditions for running the pipeline when a PR is opened or changes pushed to an open PR.
    1. **_autoCancel_**: Additional pushes should not cancel in-progress runs.
    1. **_include_**: Include only the _master_ branch so that the pipeline is triggered only for PR's opened against _master_.
1. **_jobs_**: The jobs to run.
    1. **_template_**: Use the job template created in _azure-pipelines.common.yml_.

At this point, you might be wondering about having 2 separate files for pr and Live builds. This will become important in the next section when we add the steps to deploy to Netlify.

### Deploying to Netlify

To deploy to Netlify, we need a few variables passed to the template as parameters and then passed as flags to the Netlify deploy command.

First, let's see what changes we need to make to the template _azure-pipelines.common.yml_. The updated lines are highlighted.

```yaml
parameters:
    deployScriptParams: '' # defaults for any parameters that aren't specified
    netlifySiteId: 'defaultID'
    netlifyToken: 'defaultToken'
    message: ''

jobs:
    - job: Build_And_Deploy

      pool:
          vmImage: 'ubuntu-latest'

      steps:
          #unchanged from before

          - script: yarn build
            displayName: 'Build Gatsby'

          # prettier-ignore
          - script: yarn netlify deploy --site ${{ parameters.netlifySiteId }} --auth ${{ parameters.netlifyToken }} --message '${{ parameters.message }}' ${{ parameters.deployScriptParams }} --dir=public
            displayName: 'Deploy to Netlify'
```

1. **_parameters_**: The environment variables to pass as flags to the Netlify deploy command.
    1. **_deployScriptParams_**: Any additional parameters that should be passed to the deploy command.
    1. **_netlifySiteId_**: The site ID for the Netlify site.
    1. **_netlifyToken_**: The access token to authorize Azure Pipeline to deploy the build to Netlify.
    1. **_message_**: The message to include in the deploy log.
1. **_Deploy to Netlify_**: The Netlify deploy command takes the siteId, token, message and deployScriptParams as flags. We also set the dir flag to public so that the public folder is deployed.
    1. **_# prettier-ignore_**: I have added this so that prettier does not try to break up the command into multiple lines.

Now we update _azure-piplelines.ci.yaml_ for the live build.

```yaml
# unchanged from before
variables:
    - template: azure-pipelines.vars.yml

jobs:
    - template: azure-pipelines.common.yml
      parameters:
          deployScriptParams: '--prod'
          netlifySiteId: $(netlify.siteId)
          netlifyToken: $(netlify.token)
          message: 'Live $(Build.SourceVersion) $(Build.SourceVersionMessage)'
```

1. **_variables_**: We set a template file to get the environment variables.
1. **_parameters_**: The parameters to be passed to the job template
    1. **_deployScriptParams_**: I pass the --prod flag for live builds, which tells Netlify to deploy the build to production.
    1. **_netlifySiteId_**: The site ID from environment variables.
    1. **_netlifyToken_**: The token from environment variables.
    1. **_message_**: The message is created using the commit ID and the comment of the commit.

Next _azure-piplelines.pr.yaml_ for the PR builds.

```yaml
# unchanged from before
variables:
    - template: azure-pipelines.vars.yml

jobs:
    - template: azure-pipelines.common.yml
      parameters:
          netlifySiteId: $(netlify.siteId)
          netlifyToken: $(netlify.token)
          message: 'PR $(System.PullRequest.PullRequestNumber) $(System.PullRequest.SourceBranch) $(Build.SourceVersionMessage)'
```

1. **_variables_**: We set a template file to get the environment variables.
1. **_parameters_**: The parameters to be passed to the job template
    1. **_netlifySiteId_**: The site ID from environment variables.
    1. **_netlifyToken_**: The token from environment variables.
    1. **_message_**: The message is created using the Pull Request Number, Source branch and the comment of the commit.

## Conclusion

By using Azure Pipelines, the Netlify limits are no longer a problem. We will see how we can add tests and run them against the deployed URL in a later post.

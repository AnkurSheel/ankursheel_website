---
title: 'How to replace a pipeline in Statiq'
excerpt: 'A guide to replacing a pipeline in Statiq'
category: "programming"
tags:
    - 'Statiq'
    - 'website migration'
    - 'snippet'
---

In this article, I will be showing how we can replace a pipeline in [Statiq](https://www.statiq.dev/web/).

## Problem

As part of the [migration from Gatsby to Statiq](./migrating-gatsby-statiq), I wanted to replace the Assets and Content pipeline to control the files, strongly type the model passed to the razor module and also set some metadata based on the parent folder.

Statiq.Web provides quite a few pipelines out of the box. However, it processes different file types by using Templates that define a specific module for that type. Statiq.Web has a nice fluent syntax to modify and remove templates.

In most cases, this would be fine, but sometimes it's much easier to replace the whole pipeline.

## Solution

To remove a pipeline, we can use

```csharp
bootstrapper.ConfigureEngine(
    engine =>
    {
        engine.Pipelines.Remove(nameof(Assets));
    });
```

To replace it with an empty pipeline, we can use

```csharp
bootstrapper.ConfigureEngine(
    engine =>
    {
        engine.Pipelines.Add(nameof(Assets), new Pipeline());
    });
```

To replace a pipeline, we can remove it and add it again with a new pipeline.

```csharp
bootstrapper.ConfigureEngine(
    engine =>
    {
        engine.Pipelines.Remove(nameof(AnalyzeContent));
        engine.Pipelines.Add(
            nameof(AnalyzeContent),
            new Pipeline
            {
                InputModules =
                {
                    new ReplaceDocuments(
                        nameof(PostPipeline),
                        nameof(Content),
                        nameof(Archives),
                        nameof(Assets))
                }
            });
    });
```

## Conclusion

Now, we can remove/replace the pipelines that we don't want to use. Dave Glick, the creator of Statiq, has mentioned that he will provide a fluent syntax to replace pipelines in the next release, so hopefully, we won't need this for too long.

_You can see the original issue I created [here](https://github.com/statiqdev/Statiq.Web/issues/962)_

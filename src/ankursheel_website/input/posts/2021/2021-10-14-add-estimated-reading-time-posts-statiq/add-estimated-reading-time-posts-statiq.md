---
title: 'How to add estimated Reading Time to Posts in Statiq'
excerpt: 'A guide to creating a module to add estimated reading time as metadata for posts in websites created with Statiq'
tags:
    - 'Statiq'
    - 'tutorial'
    - 'snippet'
coverImage: './cover.png'
---

In this tutorial, I will show how to use the reading time calculated in [How to calculate reading time](./calculate-reading-time) to use in a Statiq module to add reading time for our posts.

To add a module to Statiq, we can inherit from one of the provided base module classes. In this case, we can inherit from the `ParallelModule` class as the engine can process the documents in any order. We also need to overload the `ExecuteInputAsync()` method to execute this module for each document in the pipeline.

```csharp
public class GenerateReadingTime : ParallelModule
{
    protected override async Task<IEnumerable<IDocument>> ExecuteInputAsync(IDocument input, IExecutionContext context)
    {
        using var textReader = input.GetContentTextReader();
        var content = await textReader.ReadToEndAsync();

        return input.Clone(
                new MetadataItems
                {
                    { MetaDataKeys.ReadingTime, _readingTimeService.GetReadingTime(content, context.GetInt("ReadingTimeWordsPerMinute", 200)) }
                })
            .Yield();
    }
}
```

-   **_Line 5-6_**: Get the content associated with the document as a string.
-   **_Line 8_**: Clone the document by adding new metadata items.
-   **_Line 10-11_**: Add a new metadata item with key _Reading_time_and a value obtained from a call to `GetReadingTime`. We use a \_ReadingTimeWordsPerMinute_ setting to override the default value of 200 words per minute.
-   **_Line 11_**: Convert the document into an enumerable.

We can now use it on our website. You can see an example below.

![Reading time example](./cover_orig.png)

## Further Reading

-   [Writing Modules in Statiq](https://www.statiq.dev/framework/pipelines/modules/writing-modules)

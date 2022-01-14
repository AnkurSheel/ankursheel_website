---
title: 'How to calculate reading time'
excerpt: 'A guide to calculating the reading time for a given document'
category: "programming"
tags:
    - 'snippet'
    - 'tutorial'
---

In this snippet, I will be showing how to calculate the reading time for a given string.

First, we will create a new data structure to hold the reading time. It contains the number of words and the minutes and seconds to read the post.

```csharp
public record ReadingTimeData
{
    public ReadingTimeData(int minutes, int seconds, int words)
    {
        Minutes = minutes;
        Seconds = seconds;
        Words = words;
    }

    public int Minutes { get; }

    public int Seconds { get; }

    public int Words { get; }

    public int RoundedMinutes
        => Seconds < 30
            ? Minutes
            : Minutes + 1;
}
```

-   **_RoundedMinutes_** is the rounded time to make things simpler for a reader. Anything less than 30 seconds gets ignored, and anything more than 30 seconds gets rounded up to the next minute.

Now, we can calculate the reading time and fill in the ReadingTimeData.

```csharp
private ReadingTimeData GetReadingTime(string content, int wordsPerMinute)
{
    const Regex SpacesRegex = new Regex("\S+", RegexOptions.Multiline);
    var words = SpacesRegex.Matches(content).Count;

    var minutes = words / WordsPerMinute;
    var remainingWords = words % WordsPerMinute;
    var seconds = remainingWords * 60 / WordsPerMinute;

    return new ReadingTimeData(minutes, seconds, words);
}
```

-   **_Line 3-4_**: Get all the words in the string by using `\S` as our regex expression, which matches all characters that are not a white space.
-   **_Line 6_**: Get the number of minutes it takes to read the string based on how many words we can read in a minute.
-   **_Line 7_**: Get the number of unread words which we weren't able to read in a full minute.
-   **_Line 8_**: Get the number of seconds to read the remaining text.

## Concusion

Now, we can show the estimated reading time on our articles.

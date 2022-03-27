---
title: "How to replace a word in a string in C#"
excerpt: "There is no way to replace just whole words using string.Replace. Let's see how we can replace whole words in
string using Regex"
category: "programming"
tags:

- "snippet"

---

## Problem

Sometimes you want to replace whole words from a string in C#. But `string.Replace` in C# replaces partial matches.

For example,

Let's assume that the string is "Test testing test tester", and we want to replace the word _text_ with _text_.

If we use `string.Replace`, our resultant string would be "text texting text texter", but what we want is "text testing
text tester"

## Solution

You can use `Regex.Replace` to replace a whole word.

```csharp
private static string ReplaceWholeWord(string input, string wordToReplace, string replacementWord)
{
    var pattern = $"\\b{wordToReplace}\\b";
    return Regex.Replace(input, pattern, replacementWord, RegexOptions.IgnoreCase);
}
```

There are a few things to note here.

1. The pattern's `\b` metacharacter matches on word boundaries.
2. As the name suggests, passing in `RegexOptions.IgnoreCase` for the options makes it case-insensitive.

Now we can use it like

```csharp
var replacedString = ReplaceWholeWord("Test testing test tester", "test", "text");
```

## References

- [Regex.Replace](https://docs.microsoft.com/en-us/dotnet/api/system.text.regularexpressions.regex.replace?view=net-6.0#:~:text=The%20Regex.,a%20regular%20expression%20replacement%20pattern.)
- [Regular Expression Language - Quick Reference](https://docs.microsoft.com/en-us/dotnet/standard/base-types/regular-expression-language-quick-reference)

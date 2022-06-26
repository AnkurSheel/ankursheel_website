---
title: "How to Serialize enums as strings in .Net Core"
excerpt: "If you try to serialize an enum to Json using System.Text.Json in .Net Core, it converts it into an integer by default. This is not very readable. How can we have a more readable enum value in the JSON output?"
tags:

- "snippet"
- "csharp"

---

If you try to serialize an enum to Json using System.Text.Json in .Net Core, it converts it into an integer by default.

```csharp
public enum Seasons
{
    Unknown,
    Spring,
    Winter,
    Autumn,
    Summer
}

var seasons = Enum.GetValues<Seasons>().ToList();
```

When you serialize the list of seasons using the serialize method, i.e. `JsonSerializer.Serialize(seasons)`, it gives an output of `[0, 1, 2, 3, 4]`.

As you can see, this is not very readable and almost meaningless unless you look at the code.

To overcome this, you can specify a built-in converter to do the conversion to strings and pass it into a `JsonSerializerOptions` object.

```csharp
var SerializerOptions = new JsonSerializerOptions
    {
        PropertyNameCaseInsensitive = true,
        Converters = { new JsonStringEnumConverter() }
    };
    
JsonSerializer.Serialize(seasons, SerializerOptions);
};
```

This will give an output of `["Unknown", "Spring", "Winter", "Autumn", "Summer"]` which is much more readable.

You can use the same converter for deserializing the enum.

```csharp
var seasons = JsonSerializer.Deserialize<T>(json, SerializerOptions);
```

This gives an output of `[Seasons.Unknown, Seasons.Spring, Seasons.Winter, Seasons.Autumn, Seasons.Summer]`

## Conclusion

Using the built-in `JsonStringEnumConverter`, we can get a more readable output in our JSON.

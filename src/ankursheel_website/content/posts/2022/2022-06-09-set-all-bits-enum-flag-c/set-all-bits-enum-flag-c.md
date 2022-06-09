---
title: "How to set all bits of an enum flag in C#"
excerpt: "Sometimes, we want to set all the bits on a flag. The easiest way to do this is by adding another value to the enum. But there is a more elegant way using LinQ which does not require updating the flag."
category: "programming"
tags:

- "snippet"
- "csharp"

---

In C#, you can use the [Flags] attribute to create an enum type as bit flags, allowing you to use Bitwise operations.

Let's take an example of Seasons

```csharp

[Flags]
public enum Seasons
{
    None = 0,
    Spring = 1 << 0,
    Winter = 1 << 1,
    Autumn = 1 << 2,
    Summer = 1 << 3
}
```

Sometimes, we want to set all the bits on a flag. The easiest way to do this is by adding another value to the enum by manually combining all the bits yourself.

```csharp
[Flags]
public enum Seasons
{
    ... // omitted for brevity
    All = Spring | Winter | Autumn | Summer
}
```

But, this has a small problem. Every time we add a new value to the enum, we must update the `All` value.

Here is a simple trick to get a variable with all the bits set.

```csharp
 var AllSeasons = (Seasons)Enum.GetValues<Seasons>().Cast<int>().Sum();
```

Let's see what's happening in the above snippet.

**Enum.GetValues<MyDays>()** returns an array of the enums values.

**Cast<int>** cast the elements of the array to its int values. _Remember that the underlying type of an enum is int._

**Sum** computes the sum of all the values in the collection.

We then cast it back to _Seasons_.

## Conclusion

Using Linq magic, we can get an enum value with all the flags set without adding an _All_ value to the enum.

## References

- [Enum.GetValues](https://docs.microsoft.com/en-us/dotnet/api/system.enum.getvalues?view=net-6.0)
- [Cast<> method](https://docs.microsoft.com/en-us/dotnet/api/system.linq.enumerable.cast?view=net-6.0)
- [Sum method](https://docs.microsoft.com/en-us/dotnet/api/system.linq.enumerable.sum?view=net-6.0)

---
title: How to load test data from a JSON file for xUnit tests
excerpt: In this post, we add a custom attribute in xUnit to load test data from a JSON file.
category: "programming"
tags:

- csharp
- testing
- tutorial
- xUnit

updatedOnDate: "2022-09-10"

---

_You can install [xUnitHelpers as a Nuget Package](https://www.nuget.org/packages/Codinators.XunitHelpers) if you want a easy way to load test data from a JSON file for xUnit tests._

## xUnit 101

xUnit is a unit testing tool for the .Net framework. If you're new to testing with xUnit, I suggest reading the getting started [documentation](https://xunit.net/docs/getting-started/netcore/visual-studio).

xUnit allows support for both parameterless and parameterized tests. There are 3 different ways to supply data to the parameterized tests.

- **Inline Data** is good when the method parameters are constant. Still, it gets unwieldy pretty quickly when you have many test cases. It also can't be used when the data is not constant.
- **Class Data** removes clutter from test files by moving the data to a separate class. It also allows you to pass non-constant data to the test. The downside is that you have to create a new class.
- **Member Data** is similar to class data but uses a static property or method of a type instead of a _class_.

## Problems

All 3 of the above approaches have a shortcoming in that every time you want to add new data to test, you need a recompile. The classes/methods can also become quite large if you have a lot of data. For example, [this](https://github.com/AnkurSheel/AdventOfCode2018/blob/84f0174ce6d35bef70e45b1713d2e23272dc5a29/AdventOfCode2018.Tests/Day1/testData.json#L37-L1054) is the sample input for the puzzle in the [Advent Of Code 2018](https://adventofcode.com/2018).

## First Pass

Both these problems would just go away if we could load our test data from a file. Andrew Lock has a great [article](https://andrewlock.net/creating-a-custom-xunit-theory-test-dataattribute-to-load-data-from-json-files/) which shows how to create a custom attribute to load the data from a JSON file.

Since this article leans heavily on his approach, I recommend reading that first.Go on, I will wait.

Oh, Good, you are back. So you might be wondering that if Andrew has already written the article, why am I writing this? More importantly, why should you spend your precious time reading this?

Well. I found his solution to work very well for test cases with a small number of parameters. However, it becomes quite cumbersome to use with a large set of parameters.

For the Advent of Code test input, we would have to have a lot of parameters. We could reduce the number of parameters required to just one as it's just a single(albeit large) list of the same type. However, I could not figure out how to structure my JSON so that it could be parsed easily.

## Improvements

Let us start by creating a new generic class that takes 2 different underlying types - 1 for the Data and 1 for the Result class. This class will be used to deserialize the JSON data.

```csharp
class TestObject<T1, T2>
{
    public List<T1> Data { get; set; }

    public T2 Result { get; set; }
}
```

Now, let's modify our attribute class. _For brevity, I am just showing the relevant code here. For the whole file, please see [here](https://github.com/AnkurSheel/xUnitHelpers/blob/master/xUnitHelpers/JsonFileDataAttribute.cs)_.

```csharp
public class JsonFileDataAttribute : DataAttribute
{
    public override IEnumerable<object[]> GetData(MethodInfo testMethod)
    {
        // fileData is the raw file data
        // _dataType and _resultType are set in the constructor and are the types for the input data and the result

        var specific = typeof(TestObject<,>).MakeGenericType(_dataType, _resultType);
        var generic = typeof(List<>).MakeGenericType(specific);

        var jsonData = JObject.Parse(fileData);
        dynamic datalist = JsonConvert.DeserializeObject(jsonData, generic);
        var objectList = new List<object[]>();
        foreach (var data in datalist)
        {
            objectList.Add(new object[] {data.Data, data.Result});
        }
        return objectList;
    }
}
```

So what exactly are we doing here?

1. Use _[MakeGenericType](<https://docs.microsoft.com/en-us/dotnet/api/system.type.makegenerictype?f1url=https%3A%2F%2Fmsdn.microsoft.com%2Fquery%2Fdev15.query%3FappId%3DDev15IDEF1%26l%3DEN-US%26k%3Dk(System.Type.MakeGenericType);k(DevLang-csharp)%26rd%3Dtrue&view=netframework-4.7.2>)_ to get the Type of _TestObject_ by substituting the generic type parameters by the actual parameters specified in the test.
2. Use _MakeGenericType_ again to get a new type which is a _List_ of the new constructed _TestObject_
3. Parse the file data as JSON
4. Deserialize the JSON data as the _genericType_ and store it in a _[dynamic](<https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/dynamic?f1url=https%3A%2F%2Fmsdn.microsoft.com%2Fquery%2Fdev15.query%3FappId%3DDev15IDEF1%26l%3DEN-US%26k%3Dk(dynamic_CSharpKeyword)%3Bk(DevLang-csharp)%26rd%3Dtrue>)_ type. We need to use dynamic here as we don't know the types passed into _TestObject_ at compile-time, and they can change for each test.
5. Add all the data into a list of objects and return it

This allows us to write our tests in the following manner.

```csharp
[Theory]
[JsonFileData("testData.json", "Part1", typeof(string), typeof(int))]
public void Test(List<string> data, int expectedResult)
{
    var result = TestThisMethod(data);
    Assert.Equal(expectedResult, result);
}
```

## Github Repository

You can see the code [here](https://github.com/AnkurSheel/xUnitHelpers).

## Nuget package

[Codinators.XunitHelpers](https://www.nuget.org/packages/Codinators.XunitHelpers/) is a reusable Nuget Package that you can use in your projects.

Install it by using the following command

```bash
dotnet add package Codinators.XunitHelpers
```

## Further Reading

- [xUnit documentation](https://xunit.net/docs/getting-started/netcore/visual-studio)
- [Advent of Code](https://adventofcode.com)
- [Creating a custom xUnit theory test DataAttribute to load data from JSON files](https://andrewlock.net/creating-a-custom-xunit-theory-test-dataattribute-to-load-data-from-json-files/) by Andrew Lock
- [MakeGenericType](<https://docs.microsoft.com/en-us/dotnet/api/system.type.makegenerictype?f1url=https%3A%2F%2Fmsdn.microsoft.com%2Fquery%2Fdev15.query%3FappId%3DDev15IDEF1%26l%3DEN-US%26k%3Dk(System.Type.MakeGenericType);k(DevLang-csharp)%26rd%3Dtrue&view=netframework-4.7.2>)
- [dynamic](<https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/dynamic?f1url=https%3A%2F%2Fmsdn.microsoft.com%2Fquery%2Fdev15.query%3FappId%3DDev15IDEF1%26l%3DEN-US%26k%3Dk(dynamic_CSharpKeyword)%3Bk(DevLang-csharp)%26rd%3Dtrue>)

## Conclusion

In this post, we built upon Andrew's basic implementation of a custom JSON data source to make it easier for us to work with larger sets of data as well are more complex data.

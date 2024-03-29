---
title: "How to use ApprovalTests with xUnit's Theory attribute"
excerpt: 'The approval test filename for Theory-based tests is not unique by default. How can we get generate unique filenames for theory-based approval tests.'
category: "programming"
tags:
    - csharp
    - testing
    - xUnit
    - snippet
    - Approval Tests
---

## Problem

In [ApprovalTests](https://github.com/approvals/ApprovalTests.Net), the **Namer** generates a unique name for each approved/received file. This filename takes the format of **_{ClassName}.{MethodName}.approved.txt_**.

This works perfectly for **Fact** based tests. But, if you are writing a **Theory** based test, the filename will not be unique as a theory-based test is data-driven and therefore has multiple calls to the same method.

### Example

Let's look at an example.

```csharp
public class TestClass
{
    [InlineData(true)]
    [InlineData(false)]
    [Theory]
    public void Test(bool flag)
    {
        var result = TestThisMethod(flag);
        Approvals.Verify(result);
    }
}
```

In the above snippet, the filename generated for both the tests will be **_TestClass.Test.approved.txt_**. This means that you have only 1 approval file for both tests.

## Solution

The naming pattern of the default namer is _**[ClassName].[MethodName].[AdditionalInformation(optional)].approved.[Extension]**_. So, we can leverage the _AdditionalInformation_ part to generate unique filenames for our tests.

```csharp
public class TestClass
{
    [InlineData(true)]
    [InlineData(false)]
    [Theory]
    public void Test(bool flag)
    {
        NamerFactory.AdditionalInformation = $"Flag-{flag}";
        var result = TestThisMethod(flag);
        Approvals.Verify(result);
    }
}
```

Now, when we run the tests, 2 files will be generated.

-   TestClass.Test.Flag-true.approved.txt
-   TestClass.Test.Flag-false.approved.txt

_Note: We can pass any information to the **AdditionalInformation** property as long as it is unique between tests._

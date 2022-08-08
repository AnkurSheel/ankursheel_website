---
title: "Stubs vs Mocks vs Fakes vs Spy"
excerpt: "We can use Mocks for almost everything when we use a mocking framework, but what is the difference between Stubs, Mocks, Fakes and Spies"
category: "programming"
updatedOnDate: "2022-08-08"
tags:

- "testing"

---

The lines between the different test doubles are blurred when using a Mocking library like [Moq](https://github.com/moq/moq4).

I use mocks for almost everything, but knowing the difference between Stubs, Mocks, Fakes, and Spies is worthwhile. If nothing else, we will know what people are talking about when they use the different terms.

Before we look at all the different test doubles, let's look at the interface we are mocking for the examples.

```csharp
public interface IRepository
{
     bool IsValid(int id);
     void Add(int id, bool valid);
}
```

## Stub

A stub is an object that provides (canned) hardcoded values to method calls. It always returns the same output regardless of the input.

Below is the stubbed version using Moq of a service where the OnPing() function always returns "pong" regardless of the input.

```csharp
var mock = new Mock<IRepository>();
mock.Setup(x => x.IsValid(It.IsAny<int>())).Returns(true);
```

An example can be an object that needs to grab some data from the database to respond to a method call. Instead of the actual object, we can introduce a stub and define what data should be returned.

## Spy

A spy lets us verify what functions were called, with what arguments, when, and how often.

For example, let's take a repository class which does not have an interface associated with it.

```csharp
public class RepositorySpy : IRepository
{
    public boolean IsValidWasCalled = false;

    public Boolean bool IsValid(int id)
    {
        IsValidWasCalled = true;
        return true;
    }
}
```

In the test, we will assert that `IsValidWasCalled` was _true_.

```csharp
var spy = new RepositorySpy();
Assert.True(spy.IsValidWasCalled);
```

We should use spies where we don't care about the return values of functions but want to verify what functions were called, with what arguments, when, and how often.

An example would be checking that we send an email only once with the correct arguments or that all the logs are logged correctly.

I rarely use Spies, and it will become clear why once we look at Mocks.

## Mock

A mock is similar to a stub, but the behaviour of the mocked interface can be changed dynamically based on scenarios. It is also similar to a spy as it allows us to verify that a method was called. However, the assertion is in the verify method in a mock. In a spy, the assertion is in the test,

Below is the mocked version using Moq of a service where the IsValid() function behaves differently for different inputs. We also verified that the correct calls were received.

```csharp
var mock = new Mock<IRepository>();
mock.Setup(x => x.IsValid(1)).Returns(true);
mock.Setup(x => x.IsValid(2)).Returns(false);
mock.Verify(x => x.Add(1), Times.Once);
mock.Verify(x => x.IsValid(It.IsAny<int>())), Times(2));
```

A mock can be used anywhere we use a stub, but we need to verify multiple more specific behaviours.

## Fake

A Fake is an object with a concrete implementation that works similarly to the actual implementation. It is a simplified version of production code. It does not affect the test's behaviour but simplifies the test's implementation by removing heavyweight dependencies.

It should be used sparingly and only in cases where a Stub or Mock is not usable.

Below is an implementation of a Fake repository

```csharp
public class FakeRepository : IRepository
{
    private Dictionary<int, bool> _values = new Dictionary<int, bool>();

    public bool IsValid(int id)
    {
        return _values[id];
    }

    public void Add(int id, bool valid)
    {
        _values.Add(id, open);
    }
}
```

An example could be using AWS S3 in production but adding a fake that saves files to disk for testing purposes.

## Conclusion

Hopefully, now, you understand the difference between the test doubles and are not confused when people talk about fakes, stubs or mocks.

### Thanks

-   Aamir Mulla for suggesting that a code sample to the Spy section would be helpful.

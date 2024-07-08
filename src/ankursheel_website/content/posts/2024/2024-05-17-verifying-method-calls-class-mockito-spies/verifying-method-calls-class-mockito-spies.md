---
title: "Verifying Method Calls within a class using Mockito Spies"
excerpt: "How to remove the duplication of test scenarios when one method calls another within the same class"
category: "programming"
tags:
  - "testing"
  - "mockito"
  - "snippet"
updatedOnDate: "2024-08-07"

---

in order to get confidence, when one method calls another within the same class with just 1 or more additional parameters, we could write the same test for both the methods. This would lead to a lot of duplicated tests and a cluttered test suite.

However, Mockito spies can help us in this scenario.

## Scenario

You want to write tests for a class that contains two public methods, one of which is essentially overloading the other and calling it without adding any additional logic.

Here's a simplified example to illustrate this:

```java
public class Service {
    public int getTotalPrice(int quantity) {
        // some other code like error checking, etc
        return 5 * quantity;
        
    }

    public int getTotalPrice() {
        return getTotalPrice(1);
    }
}
```

In the above example, the `getTotalPrice()` method without parameters calls the overloaded `getTotalPrice(int quantity)` method, supplying a default value.

## Enter the World of Spies

Here's where Mockito spies come into the picture.

A spy acts as a wrapper around a real object, allowing us to override specific methods with mock behaviour while leaving others intact. You can use this functionality to verify the invocation of an actual method on an object.

Let's see how you can simplify your tests by using Mockito spies

```java
public class MyTests {
    @Test
    public void test() {
        Service spy = Mockito.spy(new Service());
        spy.getTotalPrice();
        verify(spy).getTotalPrice(1);
    }

    // more tests that test `getTotalPrice(int quantity)`
}
```

Let's break this down:

1. `Service spy = Mockito.spy(new Service())`:  Create a spy object for `Service`.
2. `spy.getTotalPrice()`: Invoke the `getTotalPrice` method on the spy object.
3. `verify(spy).getTotalPrice(1)`: Verify that the overloaded method is invoked on the spy object.

If the overloaded method is not called, then the test would fail, alerting us to a potential issue.

## Conclusion

Testing every possible combination of method calls, not only consumes valuable time but also clutters your test suite with redundant tests.

Mockito spies offer a solution to this problem, allowing you to verify method interactions directly, thus focusing on the behavior rather than the implementation.

However, it's essential to use Mockito spies judiciously. Spies should primarily be used when you're testing a class's external behavior and its interactions with other classes or methods within itself. Overusing spies can lead to tests that are overly focused on the internal workings of a class, potentially making your tests brittle and less focused on the actual outcomes.

Happy testing, and may your code always perform as intended, both now and in the future.
